---
title: 'SQLite in Node'
metaTitle: 'SQLite in Node'
description: ''
author: 'Italo Corraro'
hidden: true
order: 800
---

## Requisiti e avvio

`node:sqlite` è la libreria per interfacciarsi con un database inclusa in Node. 

Per un database in memoria basta passare il percorso speciale `':memory:'`.

| Versione di Node | Stato del modulo |
| --- | --- |
| dalla 22.5.0 | disponibile con il flag `--experimental-sqlite` |
| dalla 22.13.0 e 23.4.0 | senza flag, ancora sperimentale |
| dalla 25.7.0 | release candidate |

```js
// db.mjs
import { DatabaseSync } from 'node:sqlite'; 
// CommonJS: require('node:sqlite')

const db = new DatabaseSync(':memory:');
console.log(db.prepare('SELECT sqlite_version() AS v').get().v);
db.close();
```

- Tutta l'API è **sincrona**: nessun `await` necessario, ma una query lenta blocca l'event loop di Node.
- Ogni connessione a `':memory:'` ha un database separato, che sparisce alla chiusura.

:::nota
La documentazione più recente chiama la classe `Database` e considera `DatabaseSync` un alias deprecato. 
:::

## Creare lo schema e inserire dati

`db.exec()` esegue una o più istruzioni senza restituire righe: è adatto a DDL e script. Per i valori variabili usa `db.prepare()`.

```js
db.exec(`
  CREATE TABLE utenti (
    id     INTEGER PRIMARY KEY,
    nome   TEXT    NOT NULL,
    email  TEXT    NOT NULL UNIQUE,
    attivo INTEGER NOT NULL DEFAULT 1
  ) STRICT;

  CREATE TABLE ordini (
    id        INTEGER PRIMARY KEY,
    utente_id INTEGER NOT NULL 
      REFERENCES utenti(id) ON DELETE CASCADE,
    totale    REAL    NOT NULL
  ) STRICT;
`);

const inserisci = db.prepare('INSERT INTO utenti (nome, email) VALUES (?, ?)');
console.log(inserisci.run('Ada', 'ada@example.com'));
// { lastInsertRowid: 1, changes: 1 }

const inserisciRit = db.prepare(
  'INSERT INTO utenti (nome, email) VALUES ($nome, $email) RETURNING *');
const linus = inserisciRit.get({ nome: 'Linus', email: 'linus@example.com' });
// { id: 2, nome: 'Linus', email: 'linus@example.com', attivo: 1 }
```

- `STRICT` fa rispettare i tipi dichiarati; senza, SQLite accetta ad esempio testo non numerico in una colonna `INTEGER`.
- Le foreign key sono **attive di default** in `node:sqlite` (opzione `enableForeignKeyConstraints`).
- Prepara lo statement una volta e riusalo, anche in un ciclo.

## Leggere, aggiornare, cancellare

Il metodo da chiamare sullo statement dipende da cosa ti serve in ritorno.

| Metodo | Restituisce | Uso tipico |
| --- | --- | --- |
| `run()` | `{ changes, lastInsertRowid }` | INSERT, UPDATE, DELETE |
| `get()` | la prima riga, oppure `undefined` | ricerca per chiave, aggregati |
| `all()` | array di righe (anche vuoto) | risultati piccoli o medi |
| `iterate()` | iteratore sulle righe | risultati grandi |

```js
const perId = db.prepare('SELECT * FROM utenti WHERE id = ?');
perId.get(1);   // { id: 1, nome: 'Ada', ... }
perId.get(99);  // undefined

db.prepare('SELECT nome FROM utenti ORDER BY id').all();
// [ { nome: 'Ada' }, { nome: 'Linus' } ]

for (const riga of db.prepare('SELECT nome FROM utenti').iterate()) {
  console.log(riga.nome);
}

const { changes } = db.prepare('UPDATE utenti SET attivo = ? WHERE id = ?').run(0, 2);

db.prepare('DELETE FROM utenti WHERE id = ?').run(2);
```

Le righe sono oggetti con prototipo `null`: non hanno metodi come `toString()`. Se serve un oggetto normale, usa `{ ...riga }`.

## Parametri e tipi di dato

Passa sempre i valori come parametri, mai concatenati nella stringa SQL: eviti la SQL injection.

```js
// Posizionali
db.prepare('SELECT ? AS a, ? AS b').get('x', 42);

// Nominati: $nome, :nome o @nome nel SQL; nell'oggetto il prefisso è facoltativo
db.prepare('SELECT * FROM utenti WHERE email = :email').get({ email: 'ada@example.com' });

// LIKE: il carattere % va nel valore
db.prepare('SELECT * FROM utenti WHERE nome LIKE ?').all('A%');

// IN con lista di lunghezza variabile
const ids = [1, 2];
db.prepare('SELECT * FROM utenti WHERE id IN (SELECT value FROM json_each(?))')
  .all(JSON.stringify(ids));
```

| SQLite | In scrittura | In lettura |
| --- | --- | --- |
| `NULL` | `null` | `null` |
| `INTEGER` | `number`, `bigint` | `number` (o `bigint`) |
| `REAL` | `number` | `number` |
| `TEXT` | `string` | `string` |
| `BLOB` | `TypedArray`, `DataView` | `Uint8Array` |

- **Booleani:** su Node 22 passarli causa un errore; usa `valore ? 1 : 0`. Sono accettati dalla 26.8.0.
- **Date:** non sono un tipo supportato. Salva `data.toISOString()` come `TEXT`.
- **Interi grandi:** leggere un valore oltre `Number.MAX_SAFE_INTEGER` lancia `ERR_OUT_OF_RANGE`. Chiama `stmt.setReadBigInts(true)`.
- Un parametro nominato non previsto dallo statement causa un errore, salvo `setAllowUnknownNamedParameters(true)`.

## Transazioni

Le transazioni si gestiscono in SQL con `BEGIN`, `COMMIT` e `ROLLBACK`; una piccola funzione evita di ripetere il codice.

```js
function transazione(db, fn) {
  db.exec('BEGIN');
  try {
    const risultato = fn();
    db.exec('COMMIT');
    return risultato;
  } catch (err) {
    if (db.isTransaction) db.exec('ROLLBACK'); // isTransaction: da Node 22.16 / 24.0
    throw err;
  }
}

const ins = db.prepare('INSERT INTO utenti (nome, email) VALUES (?, ?)');
transazione(db, () => {
  ins.run('Grace', 'grace@example.com');
  ins.run('Alan', 'alan@example.com');
});
```

- La funzione passata deve essere **sincrona**: con una `async`, il `COMMIT` avverrebbe prima della fine del lavoro.
- Per transazioni annidate usa `SAVEPOINT nome`, `RELEASE nome` e `ROLLBACK TO nome`.

## Salvataggio, chiusura ed errori

I dati in memoria si perdono alla chiusura; se vuoi conservarli, copiali su file.

```js
import { backup } from 'node:sqlite'; // da Node 22.16 / 23.8

await backup(db, 'copia.db');          // asincrono, sovrascrive il file
// oppure, solo SQL (il file di destinazione non deve già contenere dati):
db.exec("VACUUM INTO 'copia2.db'");
```

Per ricaricare una tabella in memoria puoi collegare il file:

```js
const db2 = new DatabaseSync(':memory:');
db2.prepare('ATTACH DATABASE ? AS f').run('copia.db');
db2.exec('CREATE TABLE utenti AS SELECT * FROM f.utenti; DETACH DATABASE f');
```

`CREATE TABLE ... AS SELECT` copia i dati ma non vincoli né indici: se servono, crea prima lo schema e poi usa `INSERT INTO ... SELECT`. Dalla 26.1.0 esistono anche `db.serialize()` e `db.deserialize()`, che copiano l'intero database da e verso un `Uint8Array`.

Gli errori di SQLite sono eccezioni con `code` uguale a `ERR_SQLITE_ERROR`; `errcode` indica il caso specifico.

```js
try {
  db.prepare('INSERT INTO utenti (nome, email) VALUES (?, ?)')
    .run('Copia', 'ada@example.com');
} catch (err) {
  if (err.errcode === 2067) console.error('Email già presente'); // SQLITE_CONSTRAINT_UNIQUE
  else throw err;
} finally {
  db.close();
}
```

Il database si chiude con `db.close()`; dopo, non è più utilizzabile e `db.isOpen` vale `false`.

Extra utile: `db.function('dominio', (email) => email.split('@')[1])` rende una funzione JavaScript richiamabile nelle query.

## Esempio completo

Questo script, eseguito su Node 22.23.5, annulla la seconda transazione e lascia le quantità a 10 e 3.

```js
// magazzino.mjs
import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

db.exec(`
  CREATE TABLE prodotti (
    id        INTEGER PRIMARY KEY,
    nome      TEXT    NOT NULL UNIQUE,
    prezzo    REAL    NOT NULL CHECK (prezzo >= 0),
    quantita  INTEGER NOT NULL DEFAULT 0 CHECK (quantita >= 0)
  ) STRICT;
`);

const sql = {
  inserisci: db.prepare(
    'INSERT INTO prodotti (nome, prezzo, quantita) VALUES ($nome, $prezzo, $quantita)'),
  scarica: db.prepare('UPDATE prodotti SET quantita = quantita - ? WHERE id = ?'),
  elenco: db.prepare('SELECT * FROM prodotti ORDER BY id'),
};

function transazione(fn) {
  db.exec('BEGIN');
  try {
    const risultato = fn();
    db.exec('COMMIT');
    return risultato;
  } catch (err) {
    if (db.isTransaction) db.exec('ROLLBACK');
    throw err;
  }
}

try {
  transazione(() => {
    sql.inserisci.run({ nome: 'Tastiera', prezzo: 49.9, quantita: 10 });
    sql.inserisci.run({ nome: 'Mouse', prezzo: 19.5, quantita: 3 });
  });

  // Il secondo scarico viola il CHECK: viene annullato anche il primo
  transazione(() => {
    sql.scarica.run(2, 1);
    sql.scarica.run(5, 2);
  });
} catch (err) {
  console.error('Operazione annullata:', err.message);
} finally {
  console.table(sql.elenco.all());
  db.close();
}
```

Eseguilo con `node magazzino.mjs`. Su versioni dove compare l'avviso `ExperimentalWarning`, puoi nasconderlo con `--disable-warning=ExperimentalWarning`.

Fonte: [documentazione ufficiale di node:sqlite](https://nodejs.org/api/sqlite.md).