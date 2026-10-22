---
title: 'SQLg'
metaTitle: 'SQLg'
description: ''
author: 'Italo Corraro'
order: 6
hidden: true
module: 'SQL'
---

**SQL** (*Structured Query Language*) è il linguaggio standard per definire, interrogare e manipolare basi di dati relazionali. Nasce negli anni '70 in IBM (SEQUEL, nell'ambito del progetto System R). È standardizzato da ANSI/ISO.

Di base, ogni DBMS relazionale implementa SQL con un **dialetto proprio**: il nucleo è comune, ma funzioni, tipi avanzati e diversi altri elementi cambiano da un sistema all'altro.

## Caratteristiche Principali

SQL è un *linguaggio dichiarativo*, che differisce da quelli imperativi in quanto descrive **che cosa** si vuole ottenere, **non come** ottenerlo, cioè non si specificano delle operazioni da eseguire, bensì le proprietà del risultato cercato. 

L'**ottimizzatore** del DBMS sceglie autonomamente il piano di esecuzione (quali indici usare, in che ordine fare i join ed altre logiche che sottostanno alle operazioni).

*Le operazioni lavorano su **intere tabelle** alla volta*, non su un record per volta; i DBMS sono ottimizzati proprio per questo tipo di operazioni.

### Struttura

In un DBMS, una **tabella** è il principale costrutto per l'organizzazione di dati.

Le tabelle organizzano i dati su righe e colonne:
- le **righe** rappresentano singoli record di dati; la prima riga della tabella, l'intestazione, contiene i nomi delle colonne,
- le **colonne**, ciascuna nominata nell'intestazione, definiscono la "forma" (tipo e vincoli) che devono avere i dati.

:::nota
Le colonne non possono avere nomi duplicati nella stessa tabella, ma due tabelle diverse possono avere colonne con lo stesso nome e scopi anche diversi.
:::

:::nota
Le righe non hanno un vincolo di unicità (un'intera riga può essere ripetuta uguale più volte nella stessa tabella).
:::

:::nota
Righe e colonne di una tabella non hanno proprietà d'ordine implicito.
:::

:::def
Chiamiamo **cardinalità** di una tabella, la quantità di righe di cui è composta
<!-- da verificare -->
:::

### Indipendenza dei Dati

I dati allo stato fisico sono mantenuti indipendenti dalla loro rappresentazione da parte del DBMS:
- **Indipendenza fisica**: posso aggiungere un indice o cambiare l'organizzazione fisica senza cambiare le query.
- **Indipendenza logica**: tramite le **viste** posso cambiare lo schema logico mantenendo compatibili le applicazioni.


### Altre Caratteristiche

- **Case-insensitive** per parole chiave e (di norma) identificatori non tra apici. Le stringhe letterali, invece, sono sensibili al maiuscolo/minuscolo (dipende però dalla *collation*). <!-- da verificare collation -->
- Le istruzioni terminano normalmente con `;`.
- Commenti: `-- commento su riga` e `/* commento multiriga */`.
- Le stringhe sono definite tra apici singoli: `'Hello World'`; identificatori "speciali" possono essere racchiusi tra doppi apici, che possono anche essere usati per escapare parole riservate del linguaggio: `"Nome Colonna"`.

<!--  -->

## Legame con l'Algebra Relazionale

| Modello relazionale | SQL |
|---|---|
| Relazione | Tabella (*table*) |
| Ennupla (tupla) | Riga (*row*) |
| Attributo | Colonna (*column*) |
| Dominio | Tipo di dato (*data type*) |
| Schema di relazione | `CREATE TABLE …` |
| Istanza | Contenuto della tabella in un dato istante |
| Chiave primaria / chiave | `PRIMARY KEY` / `UNIQUE` |
| Vincolo di integrità referenziale | `FOREIGN KEY … REFERENCES …` |


SQL non è una implementazione fedele dell'algebra relazionale.

### Multiinsiemi (*bag semantics*)
Nell'algebra relazionale una relazione è un **insieme** di ennuple: niente duplicati. In SQL una tabella è un **multiinsieme**: possono esistere righe duplicate (se non esiste un vincolo che lo impedisce).

- Una `SELECT` **non elimina i duplicati** a meno che si usi `DISTINCT`.
- Gli operatori insiemistici `UNION`, `INTERSECT`, `EXCEPT` eliminano i duplicati per default; le varianti `UNION ALL`, `INTERSECT ALL`, `EXCEPT ALL` li mantengono.

### Valore Nulli e Booleani
L'algebra "pura" non prevede valori nulli. 

SQL implementa il concetto di assenza con `NULL` e, 

SQL, oltre a "vero" e "falso", possiede un terzo stato logico: "sconosciuto". L'algebra booleana non si applica in modo standard
: `TRUE`, `FALSE`, `UNKNOWN`; **non boolean**.

- `NULL = NULL` → `UNKNOWN` (non `TRUE`!). Si usa `IS NULL` / `IS NOT NULL`.
- `WHERE` mantiene solo le righe per cui la condizione è `TRUE` (scarta `FALSE` e `UNKNOWN`).
- Le funzioni aggregate ignorano i `NULL` (tranne `COUNT(*)`).

Tabelle di verità:

| A | B | A AND B | A OR B | NOT A |
|:---:|:---:|:---:|:---:|:---:|
| T | T | T | T | F |
| T | F | F | T | F |
| T | U | U | T | F |
| F | F | F | F | T |
| F | U | F | U | T |
| U | U | U | U | U |

### Ordine delle righe e delle colonne
- Nell'algebra non c'è ordinamento. In SQL le righe non hanno un ordine garantito **a meno che si usi `ORDER BY`**.
- Le colonne in SQL hanno invece una posizione (utile ad es. per `INSERT` senza elenco di colonne e per `UNION`), mentre nell'algebra gli attributi sono identificati solo per nome.

### 3.4 Funzionalità oltre l'algebra relazionale "di base"
SQL aggiunge: aggregazioni (`SUM`, `COUNT`…), raggruppamenti (`GROUP BY`), ordinamenti, funzioni scalari, ricorsione (`WITH RECURSIVE`), funzioni finestra (*window functions*), espressioni condizionali (`CASE`)...

### 3.5 Ridenominazione e prodotto cartesiano
- Il join naturale dell'algebra (basato su nomi uguali di attributi) esiste (`NATURAL JOIN`) ma è sconsigliato: è fragile rispetto a cambiamenti di schema.
- Il prodotto cartesiano si ottiene con `CROSS JOIN` o con la virgola nella clausola `FROM`.
- Le colonne di una tabella risultato possono avere lo stesso nome (es. `SELECT * ` con join); l'algebra lo vieta.


<!--  -->

## Sottolinguaggi

SQL si suddivide in più sotto-linguaggi specializzati per uno specifico aspetto dell'interazione con il database.

| Sottolinguaggio | Scopo | Comandi |
|---|---|---|
| **DDL** (Data Definition Language) | Definire e modificare lo schema | `CREATE`, `ALTER`, `DROP`, `TRUNCATE` |
| **DML** (Data Manipulation Language) | Inserire, modificare, cancellare dati | `INSERT`, `UPDATE`, `DELETE`, `MERGE` |
| **DQL** (Data Query Language) | Interrogare i dati | `SELECT` |
| **DCL** (Data Control Language) | Permessi e sicurezza | `GRANT`, `REVOKE` |
| **TCL** (Transaction Control Language) | Gestione delle transazioni | `BEGIN`/`START TRANSACTION`, `COMMIT`, `ROLLBACK`, `SAVEPOINT` |

:::nota
Il comando `SELECT` può essere interpretato come parte del DML o come sottolinguaggio a sé.
:::

<!-- REFERENCE AFTERWARDS
### Proprietà Transazionali (ACID)
Il DBMS garantisce **A**tomicità, **C**onsistenza, **I**solamento, **D**urabilità sulle transazioni. -->







## Linguaggi per DBMS

| Linguaggio | Paradigma | Modello di dati | Note |
|---|---|---|---|
| **Algebra relazionale** | Procedurale (si specificano gli operatori e il loro ordine) | Relazionale (insiemi) | Fondamento teorico; non è un linguaggio da eseguire direttamente |
| **Calcolo relazionale** (su tuple/domini) | Dichiarativo, basato sulla logica del primo ordine | Relazionale | SQL è molto più vicino al calcolo su tuple per lo stile (`EXISTS`, `FOR ALL` espresso con doppia negazione) |
| **QBE** (Query By Example) | Dichiarativo grafico | Relazionale | Query espresse compilando "tabelle esempio" (Microsoft Access) |
| **Datalog** | Dichiarativo logico (regole) | Relazionale/deduttivo | Ricorsione naturale; influenza `WITH RECURSIVE` |
| **NoSQL document** (es. MongoDB: *aggregation pipeline*) | Pipeline di stadi, più procedurale | Documenti JSON/BSON, schema flessibile | Niente join "nativi" (tranne `$lookup`), scalabilità orizzontale |
| **NoSQL key-value** (Redis, DynamoDB) | Comandi `GET`/`SET` per chiave | Coppie chiave-valore | Nessun linguaggio di interrogazione ricco |
| **Cypher / Gremlin** (grafi) | Dichiarativo (Cypher), procedurale (Gremlin) | Grafi con nodi e archi | Ottimi per percorsi e relazioni profonde, dove i join SQL esploderebbero |
| **SPARQL** | Dichiarativo | Triple RDF | Web semantico, interrogazione di grafi di conoscenza |
| **XQuery / XPath** | Dichiarativo / funzionale | XML | Interrogazione di documenti XML |
| **PL/SQL, T-SQL, PL/pgSQL** | Procedurale | Relazionale | Estensioni procedurali di SQL (variabili, cicli, cursori, trigger, stored procedure) |

**Punti chiave del confronto:**
- Rispetto ai linguaggi **NoSQL**, SQL richiede uno **schema rigido** e garantisce di norma proprietà **ACID**<!-- reference ACID --> forti; i NoSQL spesso sacrificano parte della consistenza (BASE, consistenza eventuale) per scalabilità e flessibilità.
- Rispetto all'**algebra relazionale**, SQL è un linguaggio completo con una sintassi "in inglese" che descrive il risultato; il DBMS traduce la query in un albero di algebra relazionale (esteso) che poi ottimizza.
- Rispetto ai linguaggi **a grafo**, SQL non ha un modo naturale per esprimere "percorsi di lunghezza arbitraria" (se non con CTE ricorsive); lo standard recente (SQL/PGQ, SQL:2023) introduce query su grafi.

---

## 5. SQL a confronto con linguaggi di programmazione (Java)

| Aspetto | SQL | Java |
|---|---|---|
| **Paradigma** | Dichiarativo, set-oriented | Imperativo e orientato agli oggetti |
| **Cosa descrivi** | Il *risultato* desiderato | La *sequenza di passi* per ottenerlo |
| **Unità di elaborazione** | Insiemi (tabelle) di righe | Singoli oggetti/valori, iterazioni esplicite |
| **Controllo di flusso** | Assente nel SQL "puro" (solo `CASE`); presente nelle estensioni (PL/SQL, T-SQL) | `if`, `for`, `while`, `switch`, eccezioni |
| **Variabili** | Non nel SQL puro (esistono parametri e variabili nelle estensioni procedurali) | Variabili, oggetti, riferimenti |
| **Tipi** | Insieme ristretto di tipi (numeri, stringhe, date…), nessuna classe definita dall'utente nel nucleo (esistono UDT in alcuni DBMS) | Sistema di tipi ricco: classi, interfacce, generics |
| **Valore nullo** | `NULL` con logica a tre valori; `NULL = NULL` non è vero | `null` come riferimento assente; `null == null` è `true`; `NullPointerException` |
| **Uguaglianza/confronto** | `=` (e `<>`), tenendo conto di `NULL` | `==` (riferimenti/primitivi) e `.equals()` |
| **Persistenza** | Intrinseca: i dati vivono nel DBMS | I dati vivono in memoria, la persistenza è esplicita (file, JDBC, ORM) |
| **Concorrenza** | Gestita dal DBMS tramite transazioni e isolamento | Thread, `synchronized`, lock, strutture concorrenti |
| **Completezza computazionale** | Il nucleo non è Turing-completo (con CTE ricorsive e estensioni procedurali sì) | Turing-completo |
| **Esecuzione** | L'ottimizzatore sceglie il piano | Esecuzione deterministica del codice scritto |
| **Efficienza** | Dipende da indici, statistiche, piano scelto | Dipende dall'algoritmo scelto dal programmatore |
| **Indici** | Indici di indirizzamento disco | Strutture dati in memoria (HashMap, TreeMap) |
| **Stringhe e confronto** | Dipende dalla *collation* (case/accent sensitive o no), padding con `CHAR` | `String` immutabili, confronto con `equals`/`compareTo` |
| **Indice di array** | 1-based negli array SQL (es. PostgreSQL) e nelle posizioni di `SUBSTRING` | 0-based |
| **Ordine** | Non garantito senza `ORDER BY` | Le `List` hanno un ordine, gli `HashSet` no |

### Impedance mismatch
Il disallineamento tra il modello relazionale (insiemi di righe, tipi semplici, `NULL`) e quello a oggetti (grafi di oggetti, ereditarietà, riferimenti) è detto **impedance mismatch**. Si risolve con:
- **JDBC** (Java Database Connectivity): API per inviare query SQL e leggere i `ResultSet` riga per riga;
- **ORM** (Hibernate, JPA): mappano classi ↔ tabelle;
- Query builder come jOOQ.

Esempio di uso di SQL da Java con JDBC:

```java
String sql = "SELECT nome, stipendio FROM impiegato WHERE reparto = ?";
try (PreparedStatement ps = conn.prepareStatement(sql)) {
    ps.setString(1, "Vendite");          // parametro: evita SQL injection
    try (ResultSet rs = ps.executeQuery()) {
        while (rs.next()) {              // iterazione riga per riga
            System.out.println(rs.getString("nome") + " " + rs.getBigDecimal("stipendio"));
        }
    }
}
```

> **Regola pratica:** lasciare al DBMS il lavoro "insiemistico" (filtri, join, aggregazioni) e non portare in Java tutti i dati per filtrarli con un ciclo `for`. Un filtro in `WHERE` sfrutta gli indici e riduce il trasferimento di dati.

---

## 6. Tipi di dato

I nomi esatti e i limiti variano tra DBMS; qui sono riportati i tipi dello standard SQL con le principali varianti.

### 6.1 Tipi numerici

**Esatti (interi):**

| Tipo | Descrizione | Intervallo tipico |
|---|---|---|
| `SMALLINT` | Intero piccolo | −32 768 … 32 767 |
| `INTEGER` / `INT` | Intero | ≈ ±2,1 miliardi |
| `BIGINT` | Intero grande | ≈ ±9,2·10¹⁸ |

**Esatti (decimali a precisione fissa):**

| Tipo | Descrizione |
|---|---|
| `DECIMAL(p, s)` / `NUMERIC(p, s)` | `p` = cifre totali, `s` = cifre dopo la virgola. `DECIMAL(10,2)` memorizza fino a `99999999.99`. Ideale per **denaro** |

**Approssimati (virgola mobile):**

| Tipo | Descrizione |
|---|---|
| `REAL` | Singola precisione (≈ 6-7 cifre significative) |
| `DOUBLE PRECISION` | Doppia precisione (≈ 15-16 cifre) |
| `FLOAT(n)` | Precisione a scelta |

:::wrn
**Non usare `FLOAT`/`REAL`/`DOUBLE` per importi monetari**: gli errori di arrotondamento binari fanno sì che `0.1 + 0.2` non sia esattamente `0.3`. Usare `DECIMAL`/`NUMERIC`.
:::

### 6.2 Tipi per stringhe di caratteri

| Tipo | Descrizione |
|---|---|
| `CHAR(n)` | Lunghezza **fissa** `n`, riempita con spazi a destra |
| `VARCHAR(n)` | Lunghezza **variabile** fino a `n` caratteri |
| `TEXT` / `CLOB` | Testo lungo senza limite pratico (non standard puro: `TEXT` in PostgreSQL/MySQL, `CLOB` standard) |
| `NCHAR`, `NVARCHAR` | Stringhe Unicode (nazionali) in alcuni DBMS |

### 6.3 Tipi per data e ora

| Tipo | Contenuto | Esempio letterale |
|---|---|---|
| `DATE` | Solo data | `DATE '2026-10-12'` |
| `TIME` | Solo ora | `TIME '20:43:00'` |
| `TIMESTAMP` | Data e ora | `TIMESTAMP '2026-10-12 20:43:00'` |
| `TIMESTAMP WITH TIME ZONE` (`TIMESTAMPTZ`) | Data e ora con fuso orario | `TIMESTAMPTZ '2026-10-12 20:43:00+02'` |
| `INTERVAL` | Durata | `INTERVAL '3' DAY`, `INTERVAL '1 year 2 months'` (PostgreSQL) |

### 6.4 Booleano

| Tipo | Valori |
|---|---|
| `BOOLEAN` | `TRUE`, `FALSE`, `UNKNOWN` (cioè `NULL`) |

Non tutti i DBMS lo supportano nativamente (es. MySQL lo mappa su `TINYINT(1)`; Oracle fino a 21c non ha `BOOLEAN` in SQL).

### 6.5 Tipi binari

| Tipo | Descrizione |
|---|---|
| `BINARY(n)`, `VARBINARY(n)` | Sequenze di byte |
| `BLOB` (`BYTEA` in PostgreSQL) | Grandi oggetti binari (immagini, file) |

### 6.6 Altri tipi (non sempre standard)

| Tipo | Note |
|---|---|
| `JSON` / `JSONB` | Documenti JSON (PostgreSQL, MySQL, SQL Server, Oracle…) |
| `UUID` | Identificatore univoco universale |
| `ARRAY` | Array (standard SQL:1999; molto usato in PostgreSQL) |
| `XML` | Dati XML |
| `ENUM` | Insieme enumerato di valori (MySQL, PostgreSQL) |
| Tipi geometrici/geografici | PostGIS, SQL/MM |
| `SERIAL`, `IDENTITY`, `AUTO_INCREMENT` | Colonne con valore generato automaticamente (sintassi dipendente dal DBMS; lo standard prevede `GENERATED ... AS IDENTITY`) |

### 6.7 Domini definiti dall'utente

```sql
CREATE DOMAIN voto AS SMALLINT
    CHECK (VALUE BETWEEN 18 AND 30);

CREATE TABLE esame (
    matricola INTEGER,
    corso     VARCHAR(50),
    esito     voto
);
```

(`CREATE DOMAIN` è supportato da PostgreSQL; non da MySQL o SQL Server. Lo standard prevede anche `CREATE TYPE` per tipi distinti e strutturati.)

---

## 7. Operazioni sui tipi

### 7.1 Numerici

| Operazione | Operatore/Funzione | Esempio |
|---|---|---|
| Somma, differenza, prodotto | `+`, `-`, `*` | `prezzo * quantita` |
| Divisione | `/` | `10 / 4` → `2` (intera) in molti DBMS, `2.5` se almeno un operando è decimale |
| Resto | `%` oppure `MOD(a, b)` | `MOD(10, 3)` → `1` |
| Valore assoluto | `ABS(x)` | `ABS(-5)` → `5` |
| Arrotondamento | `ROUND(x, n)`, `CEIL(x)`, `FLOOR(x)`, `TRUNC(x)` | `ROUND(3.14159, 2)` → `3.14` |
| Potenza, radice | `POWER(x, y)`, `SQRT(x)` | `POWER(2, 10)` → `1024` |
| Segno | `SIGN(x)` | `SIGN(-3)` → `-1` |
| Confronto | `=`, `<>` (o `!=`), `<`, `<=`, `>`, `>=` | `stipendio >= 1500` |
| Intervallo | `BETWEEN a AND b` | `eta BETWEEN 18 AND 30` (estremi inclusi) |
| Appartenenza | `IN (…)` | `reparto_id IN (1, 2, 3)` |

> ⚠️ **Divisione intera:** in PostgreSQL, SQL Server, SQLite `7 / 2` vale `3`. In MySQL `7 / 2` vale `3.5000` (e `7 DIV 2` dà `3`). Per essere sicuri: `7 / 2.0` oppure `CAST(7 AS DECIMAL) / 2`.

### 7.2 Stringhe

| Operazione | Sintassi standard | Esempio |
|---|---|---|
| Concatenazione | `a \|\| b` (standard); `CONCAT(a, b)` (MySQL, SQL Server, PostgreSQL) | `nome \|\| ' ' \|\| cognome` |
| Lunghezza | `CHAR_LENGTH(s)` / `LENGTH(s)` / `LEN(s)` (SQL Server) | `CHAR_LENGTH('ciao')` → `4` |
| Maiuscolo / minuscolo | `UPPER(s)`, `LOWER(s)` | `UPPER('ciao')` → `'CIAO'` |
| Sottostringa | `SUBSTRING(s FROM i FOR n)` o `SUBSTR(s, i, n)` (indici da **1**) | `SUBSTRING('database' FROM 1 FOR 4)` → `'data'` |
| Rimozione spazi | `TRIM(s)`, `LTRIM`, `RTRIM`; standard: `TRIM(BOTH ' ' FROM s)` | `TRIM('  ciao ')` → `'ciao'` |
| Posizione | `POSITION(sub IN s)` | `POSITION('b' IN 'database')` → `5` |
| Sostituzione | `REPLACE(s, da, a)` | `REPLACE('casa', 'a', 'o')` → `'coso'` |
| Pattern matching | `LIKE`, `NOT LIKE` | vedi sotto |
| Espressioni regolari | `SIMILAR TO` (standard), `~` (PostgreSQL), `REGEXP` (MySQL) | |
| Confronto | `=`, `<`, `>` (ordine lessicografico secondo la *collation*) | |

**Pattern con `LIKE`:**
- `%` = qualsiasi sequenza (anche vuota) di caratteri;
- `_` = esattamente un carattere.

```sql
SELECT * FROM cliente WHERE cognome LIKE 'Ros%';      -- inizia per "Ros"
SELECT * FROM cliente WHERE cognome LIKE '_ossi';     -- 5 lettere, finisce per "ossi"
SELECT * FROM prodotto WHERE codice LIKE '50\%%' ESCAPE '\';  -- inizia con "50%"
```

> `CHAR(n)` con confronto: gli spazi finali vengono (di norma) ignorati nel confronto; con `VARCHAR` no (dipende dalla *collation* e dal DBMS).

### 7.3 Date e ore

| Operazione | Esempio | Note |
|---|---|---|
| Data/ora corrente | `CURRENT_DATE`, `CURRENT_TIME`, `CURRENT_TIMESTAMP` | Standard. `NOW()` in molti DBMS |
| Estrazione di un campo | `EXTRACT(YEAR FROM data_nascita)` | Campi: `YEAR`, `MONTH`, `DAY`, `HOUR`, `MINUTE`, `SECOND`… |
| Somma/differenza con intervalli | `data + INTERVAL '7' DAY` | La sintassi dell'intervallo varia (`INTERVAL '7 days'` in PostgreSQL; `DATE_ADD` in MySQL; `DATEADD` in SQL Server) |
| Differenza fra date | `data2 - data1` | In PostgreSQL tra `DATE` dà un intero (giorni); tra `TIMESTAMP` dà un `INTERVAL`. `DATEDIFF` in MySQL e SQL Server |
| Confronto | `<`, `>`, `BETWEEN`, `=` | `data_ordine BETWEEN DATE '2026-01-01' AND DATE '2026-12-31'` |
| Formattazione | `TO_CHAR(d, 'DD/MM/YYYY')` (PostgreSQL/Oracle), `DATE_FORMAT` (MySQL), `FORMAT` (SQL Server) | Dipendente dal DBMS |

### 7.4 Booleani

`AND`, `OR`, `NOT`, `IS TRUE`, `IS FALSE`, `IS UNKNOWN` (con attenzione alla logica a tre valori; precedenza: `NOT` > `AND` > `OR`; usare le parentesi).

### 7.5 Gestione di NULL

| Costrutto | Significato |
|---|---|
| `x IS NULL` / `x IS NOT NULL` | Test di nullità (l'unico modo corretto) |
| `COALESCE(a, b, c, …)` | Primo valore non nullo della lista |
| `NULLIF(a, b)` | `NULL` se `a = b`, altrimenti `a` (utile per evitare divisioni per zero: `x / NULLIF(y, 0)`) |
| `x IS DISTINCT FROM y` | Confronto che tratta `NULL` come un valore (due `NULL` sono *non distinti*) |
| Operazioni aritmetiche | Qualsiasi operazione con `NULL` dà `NULL` (`5 + NULL` → `NULL`) |
| Concatenazione | `'a' \|\| NULL` → `NULL` (in Oracle, invece, `NULL` equivale a stringa vuota) |

### 7.6 Espressione condizionale `CASE`

```sql
SELECT nome,
       stipendio,
       CASE
           WHEN stipendio < 1500 THEN 'basso'
           WHEN stipendio < 3000 THEN 'medio'
           ELSE 'alto'
       END AS fascia
FROM impiegato;
```

---

## 8. Casting implicito ed esplicito

### 8.1 Casting esplicito

Lo standard prevede `CAST(espressione AS tipo)`:

```sql
SELECT CAST('123' AS INTEGER);                -- stringa -> intero
SELECT CAST(3.99 AS INTEGER);                 -- 3 o 4 a seconda del DBMS (troncamento vs arrotondamento!)
SELECT CAST('2026-10-12' AS DATE);            -- stringa -> data
SELECT CAST(42 AS VARCHAR(10));               -- intero -> stringa
SELECT CAST(stipendio AS DECIMAL(10,2)) FROM impiegato;
```

Varianti non standard, equivalenti:

| DBMS | Sintassi |
|---|---|
| PostgreSQL | `'123'::INTEGER` |
| SQL Server | `CONVERT(INT, '123')`, `TRY_CAST('abc' AS INT)` (restituisce `NULL` se fallisce) |
| MySQL | `CONVERT('123', SIGNED)`, `CAST('123' AS SIGNED)` |
| Oracle | `TO_NUMBER('123')`, `TO_DATE('12/10/2026', 'DD/MM/YYYY')`, `TO_CHAR(…)` |

Se la conversione non è possibile (`CAST('abc' AS INTEGER)`), il DBMS **solleva un errore** a runtime (a meno di usare varianti "sicure" tipo `TRY_CAST`).

### 8.2 Casting implicito (coercizione)

Il DBMS converte automaticamente i tipi quando una espressione mescola tipi diversi. Le regole **dipendono dal DBMS** e vanno conosciute perché possono causare sorprese:

```sql
SELECT 1 + 2.5;            -- INTEGER + DECIMAL -> DECIMAL: 3.5
SELECT 5 / 2.0;            -- 2.5000...
SELECT '10' + 5;           -- MySQL: 15 (stringa convertita in numero)
                           -- PostgreSQL: ERRORE (non converte implicitamente stringa -> numero in un'espressione)
                           -- SQL Server: 15
SELECT 'Totale: ' || 42;   -- PostgreSQL: 'Totale: 42' (numero -> testo nella concatenazione)
```

**Gerarchia tipica di promozione numerica:** `SMALLINT` → `INTEGER` → `BIGINT` → `DECIMAL` → `REAL` → `DOUBLE PRECISION`.
Quando si combinano due tipi numerici, il risultato è del tipo "più ampio".

### 8.3 Rischi del casting implicito

1. **Perdita di indici**: `WHERE codice = 100` con `codice` di tipo `VARCHAR` forza una conversione di ogni riga e può **impedire l'uso dell'indice**.
2. **Risultati inattesi** in confronti tra stringhe e numeri (`'10' < '9'` è vero come stringhe, ma falso come numeri).
3. **Errori sporadici** quando alcuni valori di una colonna non sono convertibili.
4. **Differenze di portabilità** fra DBMS.

> **Buona pratica:** esplicitare sempre il `CAST` quando i tipi sono diversi, e usare i letterali tipizzati (`DATE '2026-10-12'`).

---

## 9. Definizione delle tabelle (DDL)

### 9.1 `CREATE TABLE`

Sintassi generale:

```sql
CREATE TABLE nome_tabella (
    colonna1  tipo  [DEFAULT valore]  [vincolo_di_colonna …],
    colonna2  tipo  …,
    …,
    [vincolo_di_tabella …]
);
```

**Esempio completo** (schema semplificato di università/azienda):

```sql
CREATE TABLE reparto (
    id_reparto   INTEGER       PRIMARY KEY,
    nome         VARCHAR(50)   NOT NULL UNIQUE,
    sede         VARCHAR(50)   DEFAULT 'Milano'
);

CREATE TABLE impiegato (
    matricola    INTEGER        GENERATED ALWAYS AS IDENTITY,
    codice_fisc  CHAR(16)       NOT NULL,
    nome         VARCHAR(50)    NOT NULL,
    cognome      VARCHAR(50)    NOT NULL,
    data_nascita DATE,
    stipendio    DECIMAL(10,2)  DEFAULT 0 NOT NULL,
    id_reparto   INTEGER,
    id_capo      INTEGER,
    assunto_il   DATE           DEFAULT CURRENT_DATE,

    CONSTRAINT pk_impiegato      PRIMARY KEY (matricola),
    CONSTRAINT uq_cf             UNIQUE (codice_fisc),
    CONSTRAINT ck_stipendio      CHECK (stipendio >= 0),
    CONSTRAINT ck_date           CHECK (assunto_il > data_nascita),
    CONSTRAINT fk_impiegato_rep  FOREIGN KEY (id_reparto)
        REFERENCES reparto (id_reparto)
        ON DELETE SET NULL
        ON UPDATE CASCADE,
    CONSTRAINT fk_impiegato_capo FOREIGN KEY (id_capo)
        REFERENCES impiegato (matricola)
);
```

### 9.2 Opzioni di colonna

| Opzione | Significato |
|---|---|
| `DEFAULT expr` | Valore usato se in `INSERT` la colonna non è specificata. Può essere un letterale, `CURRENT_DATE`, `NULL`… |
| `NOT NULL` | Il valore nullo è vietato |
| `GENERATED ALWAYS AS IDENTITY` / `GENERATED BY DEFAULT AS IDENTITY` | Auto-incremento standard (SQL:2003). Varianti: `SERIAL` (PostgreSQL), `AUTO_INCREMENT` (MySQL), `IDENTITY(1,1)` (SQL Server) |
| `GENERATED ALWAYS AS (expr) [STORED]` | **Colonna calcolata** a partire da altre colonne |
| `COLLATE nome` | Regole di confronto/ordinamento della stringa |

### 9.3 Modifica di tabelle: `ALTER TABLE`

```sql
ALTER TABLE impiegato ADD COLUMN email VARCHAR(100);
ALTER TABLE impiegato DROP COLUMN email;
ALTER TABLE impiegato ALTER COLUMN stipendio SET DEFAULT 1000;
ALTER TABLE impiegato ALTER COLUMN stipendio DROP DEFAULT;
ALTER TABLE impiegato ALTER COLUMN cognome SET NOT NULL;
ALTER TABLE impiegato RENAME COLUMN cognome TO cognome_famiglia;   -- non in tutti i DBMS con questa sintassi
ALTER TABLE impiegato ADD CONSTRAINT ck_eta CHECK (data_nascita < DATE '2010-01-01');
ALTER TABLE impiegato DROP CONSTRAINT ck_eta;
```

### 9.4 Eliminazione

```sql
DROP TABLE impiegato;                    -- elimina la tabella e i dati
DROP TABLE IF EXISTS impiegato;          -- senza errore se non esiste
DROP TABLE reparto CASCADE;              -- elimina anche gli oggetti dipendenti (es. vincoli FK) (dipende dal DBMS)
TRUNCATE TABLE impiegato;                -- svuota la tabella (DDL, più veloce di DELETE, in genere non annullabile riga per riga)
```

### 9.5 Schemi, viste e indici

```sql
CREATE SCHEMA azienda;                   -- raggruppa oggetti (tabelle, viste…) in un namespace
CREATE TABLE azienda.reparto (…);

-- Vista: query memorizzata, si comporta come una tabella virtuale
CREATE VIEW impiegati_milano AS
SELECT matricola, nome, cognome
FROM impiegato i JOIN reparto r ON i.id_reparto = r.id_reparto
WHERE r.sede = 'Milano';

-- Indice: struttura fisica per accelerare ricerche (non fa parte dello standard SQL, ma è universale)
CREATE INDEX idx_imp_cognome ON impiegato (cognome);
CREATE UNIQUE INDEX idx_imp_cf ON impiegato (codice_fisc);
```

---

## 10. Vincoli di integrità

I vincoli sono regole dichiarative sullo schema. Se un'operazione li violerebbe, il DBMS **la rifiuta** (errore) o applica un'azione compensativa (nel caso delle chiavi esterne).

### 10.1 Panoramica

| Vincolo | Livello | Cosa garantisce | Corrispondenza nel modello relazionale |
|---|---|---|---|
| `NOT NULL` | Colonna | Il valore non può essere `NULL` | Vincolo di dominio/di valore non nullo |
| `PRIMARY KEY` | Colonna o tabella | Unicità + non nullità; una sola per tabella | Chiave primaria |
| `UNIQUE` | Colonna o tabella | Unicità dei valori (i `NULL` sono ammessi e, in molti DBMS, possono ripetersi) | Chiave candidata |
| `FOREIGN KEY … REFERENCES` | Colonna o tabella | Integrità referenziale | Vincolo di integrità referenziale |
| `CHECK (condizione)` | Colonna o tabella | Condizione booleana su una o più colonne della *stessa riga* | Vincolo di ennupla / di dominio |
| `DEFAULT` | Colonna | Valore automatico (non è un vero vincolo ma una proprietà) | — |
| `ASSERTION` / `CREATE ASSERTION` | Schema | Condizioni su più tabelle | Vincolo interrelazionale generico (**raramente implementato**; si usano i *trigger*) |

### 10.2 `PRIMARY KEY`

```sql
-- Vincolo di colonna (chiave semplice)
CREATE TABLE studente (
    matricola INTEGER PRIMARY KEY,
    nome VARCHAR(50)
);

-- Vincolo di tabella (chiave composta)
CREATE TABLE iscrizione (
    matricola INTEGER,
    id_corso  INTEGER,
    anno      SMALLINT,
    PRIMARY KEY (matricola, id_corso, anno)
);
```

La chiave primaria implica `NOT NULL` + `UNIQUE` e crea (di norma) un indice.

### 10.3 `UNIQUE`

```sql
CREATE TABLE utente (
    id     INTEGER PRIMARY KEY,
    email  VARCHAR(100) UNIQUE,
    codice_fisc CHAR(16),
    UNIQUE (codice_fisc)
);
```

> **Attenzione ai `NULL`:** secondo lo standard, più righe con `NULL` in una colonna `UNIQUE` sono ammesse (due `NULL` non sono "uguali"). In SQL Server, invece, un vincolo `UNIQUE` ammette un solo `NULL`.

### 10.4 `FOREIGN KEY` e azioni referenziali

```sql
CREATE TABLE ordine (
    id_ordine   INTEGER PRIMARY KEY,
    id_cliente  INTEGER NOT NULL,
    data_ordine DATE NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
```

La chiave esterna deve riferirsi a una colonna (o un insieme di colonne) con vincolo `PRIMARY KEY` o `UNIQUE` della tabella referenziata. Un valore `NULL` nella chiave esterna è ammesso (a meno di `NOT NULL`) e **non** viola il vincolo.

**Politiche di reazione** a modifiche nella tabella referenziata (`ON DELETE` / `ON UPDATE`):

| Azione | Effetto |
|---|---|
| `NO ACTION` (default) | L'operazione è rifiutata se lascia riferimenti pendenti (controllo a fine istruzione) |
| `RESTRICT` | Come `NO ACTION`, ma controllo immediato (non differibile) |
| `CASCADE` | La modifica/cancellazione si propaga alle righe referenzianti |
| `SET NULL` | Le colonne referenzianti sono poste a `NULL` |
| `SET DEFAULT` | Le colonne referenzianti sono poste al valore di default |

**Vincoli differibili** (*deferrable*): permettono di rimandare il controllo a fine transazione, utile ad es. per riferimenti circolari:

```sql
FOREIGN KEY (id_capo) REFERENCES impiegato (matricola)
    DEFERRABLE INITIALLY DEFERRED
```

### 10.5 `CHECK`

```sql
CREATE TABLE prodotto (
    id         INTEGER PRIMARY KEY,
    nome       VARCHAR(80) NOT NULL,
    prezzo     DECIMAL(8,2) CHECK (prezzo > 0),
    sconto     DECIMAL(4,2),
    categoria  VARCHAR(20),
    CONSTRAINT ck_sconto CHECK (sconto IS NULL OR sconto BETWEEN 0 AND 0.90),
    CONSTRAINT ck_cat    CHECK (categoria IN ('cibo', 'bevande', 'altro'))
);
```

Il vincolo `CHECK` è soddisfatto quando la condizione è `TRUE` **o `UNKNOWN`**: se `prezzo` è `NULL`, `prezzo > 0` vale `UNKNOWN` e la riga è accettata. Combinare con `NOT NULL` se si vuole vietare il valore nullo.

### 10.6 Nominare i vincoli

È buona pratica dare un nome ai vincoli con `CONSTRAINT nome …`: i messaggi di errore saranno chiari e sarà possibile modificarli con `ALTER TABLE … DROP CONSTRAINT nome`.

### 10.7 `ASSERTION` e trigger

Lo standard prevede `CREATE ASSERTION` per vincoli su più tabelle:

```sql
CREATE ASSERTION max_impiegati_per_reparto
CHECK (NOT EXISTS (
    SELECT id_reparto FROM impiegato
    GROUP BY id_reparto HAVING COUNT(*) > 100
));
```

**Nessuno dei principali DBMS lo implementa.** In pratica si usano i **trigger**:

```sql
-- Esempio (sintassi PostgreSQL): impedisce di ridurre lo stipendio
CREATE FUNCTION no_riduzione() RETURNS trigger AS $$
BEGIN
    IF NEW.stipendio < OLD.stipendio THEN
        RAISE EXCEPTION 'Lo stipendio non può diminuire';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_no_riduzione
BEFORE UPDATE ON impiegato
FOR EACH ROW EXECUTE FUNCTION no_riduzione();
```

---

## 11. Interrogare i dati: `SELECT`

### 11.1 Dati di esempio

Negli esempi seguenti si usano queste tabelle:

```sql
reparto   (id_reparto, nome, sede)
impiegato (matricola, nome, cognome, stipendio, id_reparto, id_capo, assunto_il)
progetto  (id_progetto, titolo, budget)
lavora_su (matricola, id_progetto, ore)
```

### 11.2 Struttura generale

```sql
SELECT   [DISTINCT | ALL] lista_espressioni      -- (5) proiezione / calcolo
FROM     tabelle e join                          -- (1) sorgenti
[WHERE   condizione]                             -- (2) selezione sulle righe
[GROUP BY colonne]                               -- (3) raggruppamento
[HAVING  condizione_sui_gruppi]                  -- (4) selezione sui gruppi
[ORDER BY espressioni [ASC | DESC]]              -- (6) ordinamento
[LIMIT n [OFFSET m]];                            -- (7) paginazione
```

I numeri indicano l'**ordine logico di valutazione**, diverso dall'ordine di scrittura. Ne derivano due conseguenze importanti: un alias definito nella `SELECT` **non** è utilizzabile nel `WHERE` (ma lo è in `ORDER BY`), e `WHERE` filtra le righe *prima* del raggruppamento, mentre `HAVING` filtra i gruppi *dopo*.

### 11.3 Proiezione e selezione (π e σ)

```sql
-- Tutte le colonne (π omesso)
SELECT * FROM impiegato;

-- Proiezione: π_{nome, cognome}(impiegato)
SELECT nome, cognome FROM impiegato;

-- Selezione: σ_{stipendio > 2000}(impiegato)
SELECT * FROM impiegato WHERE stipendio > 2000;

-- Selezione + proiezione
SELECT nome, cognome
FROM impiegato
WHERE stipendio > 2000 AND id_reparto = 3;

-- Eliminazione duplicati (SQL tiene i duplicati di default!)
SELECT DISTINCT id_reparto FROM impiegato;

-- Alias di colonna e di tabella (ρ, ridenominazione)
SELECT i.nome AS nome_impiegato, stipendio * 12 AS annuo
FROM impiegato AS i;
```

**Predicati utili nel `WHERE`:**

```sql
WHERE stipendio BETWEEN 1500 AND 2500
WHERE cognome LIKE 'R%'
WHERE id_reparto IN (1, 2, 5)
WHERE id_capo IS NULL
WHERE NOT (stipendio < 1000 OR id_reparto = 4)
```

### 11.4 Ordinamento e paginazione

```sql
SELECT nome, cognome, stipendio
FROM impiegato
ORDER BY stipendio DESC, cognome ASC;        -- prima per stipendio decrescente, poi per cognome

-- Prime 5 righe
SELECT * FROM impiegato ORDER BY stipendio DESC LIMIT 5;                 -- PostgreSQL, MySQL, SQLite
SELECT * FROM impiegato ORDER BY stipendio DESC FETCH FIRST 5 ROWS ONLY; -- standard SQL:2008, Oracle 12c+, PostgreSQL
SELECT TOP 5 * FROM impiegato ORDER BY stipendio DESC;                   -- SQL Server

-- Paginazione (pagina 3, 10 righe per pagina)
SELECT * FROM impiegato ORDER BY matricola LIMIT 10 OFFSET 20;
```

I `NULL` vengono posizionati prima o dopo a seconda del DBMS; controllabile con `NULLS FIRST` / `NULLS LAST` dove supportato.

### 11.5 Funzioni aggregate e `GROUP BY`

| Funzione | Significato |
|---|---|
| `COUNT(*)` | Numero di righe (incluse quelle con `NULL`) |
| `COUNT(col)` | Numero di valori non nulli di `col` |
| `COUNT(DISTINCT col)` | Numero di valori distinti non nulli |
| `SUM(col)`, `AVG(col)` | Somma e media (ignorano i `NULL`) |
| `MIN(col)`, `MAX(col)` | Minimo e massimo |

```sql
-- Aggregazione su tutta la tabella (una sola riga di output)
SELECT COUNT(*) AS n, AVG(stipendio) AS media, MAX(stipendio) AS massimo
FROM impiegato;

-- Raggruppamento: γ_{id_reparto; COUNT(*), AVG(stipendio)}(impiegato)
SELECT id_reparto, COUNT(*) AS n_impiegati, AVG(stipendio) AS stip_medio
FROM impiegato
GROUP BY id_reparto;

-- HAVING: filtro sui gruppi
SELECT id_reparto, AVG(stipendio) AS stip_medio
FROM impiegato
WHERE assunto_il >= DATE '2020-01-01'       -- filtro sulle righe, PRIMA del raggruppamento
GROUP BY id_reparto
HAVING AVG(stipendio) > 2000                -- filtro sui gruppi, DOPO l'aggregazione
ORDER BY stip_medio DESC;
```

**Regola fondamentale:** in una query con `GROUP BY`, ogni colonna nella `SELECT` deve essere o nel `GROUP BY` o dentro una funzione aggregata. (MySQL in modalità permissiva tollera violazioni, con risultati indeterminati: da evitare.)

### 11.6 Join

```sql
-- Prodotto cartesiano (×): rara, quasi sempre un errore se manca la condizione
SELECT * FROM impiegato, reparto;
SELECT * FROM impiegato CROSS JOIN reparto;

-- Theta-join / equi-join (⋈_θ): sintassi esplicita (consigliata)
SELECT i.nome, i.cognome, r.nome AS reparto
FROM impiegato i
INNER JOIN reparto r ON i.id_reparto = r.id_reparto;

-- Stessa cosa con la sintassi "vecchia" (join implicito nel WHERE)
SELECT i.nome, i.cognome, r.nome
FROM impiegato i, reparto r
WHERE i.id_reparto = r.id_reparto;

-- Join naturale (⋈): sugli attributi omonimi (sconsigliato)
SELECT * FROM impiegato NATURAL JOIN reparto;

-- USING: join su colonne omonime esplicitate
SELECT * FROM impiegato JOIN reparto USING (id_reparto);
```

**Join esterni** (mantengono le righe senza corrispondenza, riempiendo con `NULL`):

| Tipo | Mantiene |
|---|---|
| `LEFT [OUTER] JOIN` | Tutte le righe della tabella di sinistra |
| `RIGHT [OUTER] JOIN` | Tutte le righe della tabella di destra |
| `FULL [OUTER] JOIN` | Tutte le righe di entrambe |

```sql
-- Tutti i reparti, anche quelli senza impiegati
SELECT r.nome, COUNT(i.matricola) AS n_impiegati
FROM reparto r
LEFT JOIN impiegato i ON i.id_reparto = r.id_reparto
GROUP BY r.id_reparto, r.nome;
```

> Nota: `COUNT(i.matricola)` (e non `COUNT(*)`) per contare 0 sui reparti vuoti.

**Self-join** (una tabella con se stessa, serve l'alias):

```sql
-- Ogni impiegato con il nome del suo capo
SELECT i.nome AS impiegato, c.nome AS capo
FROM impiegato i
LEFT JOIN impiegato c ON i.id_capo = c.matricola;
```

**Join multipli:**

```sql
SELECT i.cognome, p.titolo, l.ore
FROM impiegato i
JOIN lavora_su l ON l.matricola = i.matricola
JOIN progetto p  ON p.id_progetto = l.id_progetto
WHERE l.ore > 100;
```

### 11.7 Operatori insiemistici

Richiedono che le due query abbiano lo stesso numero di colonne con tipi compatibili (conta la **posizione**, non il nome).

```sql
-- Unione (∪)
SELECT nome FROM impiegato
UNION
SELECT nome FROM cliente;           -- elimina duplicati

SELECT nome FROM impiegato
UNION ALL
SELECT nome FROM cliente;           -- mantiene duplicati (più veloce)

-- Intersezione (∩)
SELECT id_reparto FROM impiegato
INTERSECT
SELECT id_reparto FROM progetto_reparto;

-- Differenza (−)
SELECT id_reparto FROM reparto
EXCEPT                              -- MINUS in Oracle
SELECT id_reparto FROM impiegato;   -- reparti senza impiegati
```

### 11.8 Sottoquery (query annidate)

```sql
-- Sottoquery scalare: restituisce un solo valore
SELECT nome, stipendio
FROM impiegato
WHERE stipendio > (SELECT AVG(stipendio) FROM impiegato);

-- IN / NOT IN: appartenenza a un insieme
SELECT nome
FROM impiegato
WHERE id_reparto IN (SELECT id_reparto FROM reparto WHERE sede = 'Milano');

-- Quantificatori ANY / ALL
SELECT nome, stipendio FROM impiegato
WHERE stipendio > ALL (SELECT stipendio FROM impiegato WHERE id_reparto = 2);

-- EXISTS / NOT EXISTS (sottoquery correlata)
SELECT r.nome
FROM reparto r
WHERE NOT EXISTS (
    SELECT 1 FROM impiegato i WHERE i.id_reparto = r.id_reparto
);   -- reparti senza impiegati

-- Sottoquery nella FROM (tabella derivata)
SELECT d.id_reparto, d.media
FROM (SELECT id_reparto, AVG(stipendio) AS media
      FROM impiegato GROUP BY id_reparto) AS d
WHERE d.media > 2000;
```

> ⚠️ **`NOT IN` e `NULL`:** se la sottoquery restituisce anche un solo `NULL`, `x NOT IN (…)` non è mai `TRUE`. Preferire `NOT EXISTS`.

**Divisione relazionale** (÷): SQL non ha un operatore di divisione; si esprime con doppia negazione di `NOT EXISTS`:

```sql
-- Impiegati che lavorano su TUTTI i progetti
SELECT i.matricola, i.cognome
FROM impiegato i
WHERE NOT EXISTS (
    SELECT * FROM progetto p
    WHERE NOT EXISTS (
        SELECT * FROM lavora_su l
        WHERE l.matricola = i.matricola AND l.id_progetto = p.id_progetto
    )
);
```

Oppure con il conteggio:

```sql
SELECT l.matricola
FROM lavora_su l
GROUP BY l.matricola
HAVING COUNT(DISTINCT l.id_progetto) = (SELECT COUNT(*) FROM progetto);
```

### 11.9 Common Table Expressions (`WITH`)

Rendono le query complesse più leggibili:

```sql
WITH media_reparto AS (
    SELECT id_reparto, AVG(stipendio) AS media
    FROM impiegato
    GROUP BY id_reparto
)
SELECT i.nome, i.stipendio, m.media
FROM impiegato i
JOIN media_reparto m ON m.id_reparto = i.id_reparto
WHERE i.stipendio > m.media;
```

**CTE ricorsive** (chiusura transitiva, gerarchie: ciò che l'algebra relazionale base non può esprimere):

```sql
-- Tutti i subordinati (diretti e indiretti) del dipendente 1
WITH RECURSIVE subordinati AS (
    SELECT matricola, nome, id_capo, 1 AS livello
    FROM impiegato WHERE id_capo = 1               -- caso base
    UNION ALL
    SELECT i.matricola, i.nome, i.id_capo, s.livello + 1
    FROM impiegato i
    JOIN subordinati s ON i.id_capo = s.matricola  -- passo ricorsivo
)
SELECT * FROM subordinati;
```

(In SQL Server si scrive `WITH` senza la parola `RECURSIVE`.)

### 11.10 Funzioni finestra (*window functions*)

Calcolano valori su un "insieme di righe correlate" **senza collassarle** come fa `GROUP BY`.

```sql
SELECT nome, id_reparto, stipendio,
       RANK()       OVER (PARTITION BY id_reparto ORDER BY stipendio DESC) AS posizione,
       AVG(stipendio) OVER (PARTITION BY id_reparto)                       AS media_reparto,
       SUM(stipendio) OVER (ORDER BY assunto_il)                           AS cumulato
FROM impiegato;
```

Funzioni tipiche: `ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `LAG()`, `LEAD()`, `FIRST_VALUE()`, `NTILE(n)`, e le aggregate usate con `OVER`.

### 11.11 Esempi riassuntivi

**1. I tre impiegati più pagati di ogni reparto:**

```sql
SELECT *
FROM (
    SELECT i.*, ROW_NUMBER() OVER (PARTITION BY id_reparto ORDER BY stipendio DESC) AS rn
    FROM impiegato i
) t
WHERE rn <= 3;
```

**2. Reparti con più di 5 impiegati e relativo stipendio medio:**

```sql
SELECT r.nome, COUNT(*) AS n, ROUND(AVG(i.stipendio), 2) AS media
FROM reparto r
JOIN impiegato i ON i.id_reparto = r.id_reparto
GROUP BY r.id_reparto, r.nome
HAVING COUNT(*) > 5
ORDER BY media DESC;
```

**3. Impiegati che guadagnano più del proprio capo:**

```sql
SELECT i.nome, i.stipendio, c.nome AS capo, c.stipendio AS stip_capo
FROM impiegato i
JOIN impiegato c ON i.id_capo = c.matricola
WHERE i.stipendio > c.stipendio;
```

**4. Ore totali per progetto, includendo progetti senza ore:**

```sql
SELECT p.titolo, COALESCE(SUM(l.ore), 0) AS ore_totali
FROM progetto p
LEFT JOIN lavora_su l ON l.id_progetto = p.id_progetto
GROUP BY p.id_progetto, p.titolo
ORDER BY ore_totali DESC;
```

### 11.12 Viste

Una vista è una query a cui si dà un nome. Si interroga come una tabella; non memorizza dati (salvo le *viste materializzate*).

```sql
CREATE VIEW stipendi_per_reparto AS
SELECT r.nome AS reparto, SUM(i.stipendio) AS monte_stipendi
FROM reparto r JOIN impiegato i USING (id_reparto)
GROUP BY r.nome;

SELECT * FROM stipendi_per_reparto WHERE monte_stipendi > 50000;
```

---

## 12. Modifica dei dati (DML)

### 12.1 `INSERT`

```sql
-- Con elenco di colonne (consigliato)
INSERT INTO reparto (id_reparto, nome, sede)
VALUES (1, 'Vendite', 'Milano');

-- Più righe in una sola istruzione
INSERT INTO reparto (id_reparto, nome) VALUES
    (2, 'Acquisti'),
    (3, 'Ricerca');

-- Colonne omesse -> DEFAULT (o NULL se senza default)
INSERT INTO impiegato (codice_fisc, nome, cognome)
VALUES ('RSSMRA80A01F205X', 'Mario', 'Rossi');

-- Da una query
INSERT INTO impiegato_archivio
SELECT * FROM impiegato WHERE assunto_il < DATE '2000-01-01';
```

### 12.2 `UPDATE`

```sql
UPDATE impiegato
SET stipendio = stipendio * 1.05
WHERE id_reparto = 1;

-- Più colonne, valori da sottoquery
UPDATE impiegato
SET stipendio = (SELECT AVG(stipendio) FROM impiegato),
    id_reparto = NULL
WHERE matricola = 10;
```

> ⚠️ Senza `WHERE` l'`UPDATE` modifica **tutte** le righe.

### 12.3 `DELETE`

```sql
DELETE FROM impiegato WHERE matricola = 10;
DELETE FROM impiegato WHERE id_reparto IN (SELECT id_reparto FROM reparto WHERE sede = 'Roma');
DELETE FROM impiegato;                -- cancella TUTTE le righe (la tabella resta)
```

La cancellazione può attivare le azioni referenziali (`CASCADE`, `SET NULL`…) o essere rifiutata.

### 12.4 `MERGE` (upsert)

```sql
MERGE INTO magazzino m
USING arrivi a ON m.id_prodotto = a.id_prodotto
WHEN MATCHED THEN
    UPDATE SET quantita = m.quantita + a.quantita
WHEN NOT MATCHED THEN
    INSERT (id_prodotto, quantita) VALUES (a.id_prodotto, a.quantita);
```

(PostgreSQL ha anche `INSERT … ON CONFLICT DO UPDATE`; MySQL `INSERT … ON DUPLICATE KEY UPDATE`.)

### 12.5 Permessi (DCL)

```sql
GRANT SELECT, INSERT ON impiegato TO utente_hr;
GRANT ALL PRIVILEGES ON reparto TO admin;
REVOKE INSERT ON impiegato FROM utente_hr;
```

---

## 13. Transazioni

Una transazione è una sequenza di operazioni che il DBMS esegue come **unità atomica**: o tutte hanno effetto (`COMMIT`) o nessuna (`ROLLBACK`).

```sql
BEGIN;   -- oppure START TRANSACTION

UPDATE conto SET saldo = saldo - 100 WHERE id = 1;
UPDATE conto SET saldo = saldo + 100 WHERE id = 2;

COMMIT;     -- rende permanenti le modifiche
-- ROLLBACK;  -- annulla tutto
```

**Proprietà ACID:**

| Lettera | Proprietà | Significato |
|---|---|---|
| **A** | Atomicità | Tutto o niente |
| **C** | Consistenza | La transazione porta il DB da uno stato valido a un altro stato valido (i vincoli sono rispettati) |
| **I** | Isolamento | Le transazioni concorrenti non si "vedono" a metà |
| **D** | Durabilità | Dopo il `COMMIT` i dati sopravvivono a guasti |

**Livelli di isolamento standard** (dal meno al più restrittivo): `READ UNCOMMITTED`, `READ COMMITTED`, `REPEATABLE READ`, `SERIALIZABLE`. Livelli più alti evitano anomalie (letture sporche, letture non ripetibili, letture fantasma) a costo di minore concorrenza.

```sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```

Con `SAVEPOINT nome` e `ROLLBACK TO nome` si può annullare solo una parte della transazione. Molti DBMS operano per default in modalità *autocommit*: ogni istruzione singola è una transazione a sé.

---

## 14. Riepilogo e corrispondenze con l'algebra relazionale

### 14.1 Tabella di corrispondenza

| Algebra relazionale | SQL |
|---|---|
| Selezione σ_{cond}(R) | `SELECT * FROM R WHERE cond` |
| Proiezione π_{A,B}(R) | `SELECT DISTINCT A, B FROM R` (senza `DISTINCT` si hanno duplicati) |
| Ridenominazione ρ | `AS` (alias di colonne e tabelle) |
| Prodotto cartesiano R × S | `R CROSS JOIN S` oppure `FROM R, S` |
| Theta-join R ⋈_θ S | `R JOIN S ON θ` |
| Join naturale R ⋈ S | `R NATURAL JOIN S` (o `JOIN … USING`) |
| Semi-join | `WHERE EXISTS (…)` / `WHERE x IN (…)` |
| Unione R ∪ S | `UNION` |
| Intersezione R ∩ S | `INTERSECT` |
| Differenza R − S | `EXCEPT` (`MINUS` in Oracle) |
| Divisione R ÷ S | Doppio `NOT EXISTS` oppure `GROUP BY … HAVING COUNT` |
| Raggruppamento/aggregazione γ | `GROUP BY` + funzioni aggregate |
| Chiusura transitiva (fuori dall'algebra base) | `WITH RECURSIVE` |

### 14.2 Errori comuni da evitare

1. **Aspettarsi insiemi invece di multiinsiemi**: dimenticare `DISTINCT` e trovarsi con duplicati.
2. **Confrontare con `NULL` tramite `=`**: usare `IS NULL`.
3. **`NOT IN` con sottoquery che contiene `NULL`**: usare `NOT EXISTS`.
4. **Dimenticare la condizione di join**: si ottiene un prodotto cartesiano enorme.
5. **Colonne non aggregate né raggruppate** nella `SELECT` con `GROUP BY`.
6. **`WHERE` al posto di `HAVING`** (o viceversa) per filtri su aggregati.
7. **Usare `FLOAT` per i soldi**: usare `DECIMAL`.
8. **Fare affidamento sull'ordine delle righe senza `ORDER BY`.**
9. **`UPDATE`/`DELETE` senza `WHERE`.**
10. **Concatenare input utente nelle query** (SQL injection): usare sempre query parametrizzate (`PreparedStatement` in Java).
11. **Casting implicito su colonne indicizzate** (perdita dell'indice).
12. **`SELECT *` in codice di produzione**: fragile rispetto a cambiamenti di schema e inefficiente.

### 14.3 Cheat sheet

```sql
-- Definizione
CREATE TABLE t (id INT PRIMARY KEY, x VARCHAR(20) NOT NULL, y DECIMAL(8,2) CHECK (y >= 0),
                f INT REFERENCES altra(id) ON DELETE CASCADE);
ALTER TABLE t ADD COLUMN z DATE;
DROP TABLE t;

-- Manipolazione
INSERT INTO t (id, x) VALUES (1, 'a');
UPDATE t SET y = y + 1 WHERE id = 1;
DELETE FROM t WHERE id = 1;

-- Interrogazione
SELECT DISTINCT a, SUM(b) AS tot
FROM t1 JOIN t2 ON t1.k = t2.k
WHERE cond
GROUP BY a
HAVING SUM(b) > 10
ORDER BY tot DESC
LIMIT 10;
```

### 14.4 Per approfondire

- Documentazione ufficiale di PostgreSQL (molto aderente allo standard): <https://www.postgresql.org/docs/>
- *SQL Standard* (ISO/IEC 9075) per la specifica formale.
- Testi: *Basi di dati* (Atzeni, Ceri, Paraboschi, Torlone) per il collegamento tra modello relazionale e SQL; *SQL Performance Explained* (Markus Winand) per l'uso degli indici e il funzionamento dell'ottimizzatore; <https://use-the-index-luke.com>.
- Per esercitarsi: SQLite (zero configurazione), PostgreSQL con `psql`, SQLZoo, SQLBolt, LeetCode (sezione Database).

---

*Nota: SQL è standardizzato ma i DBMS differiscono in molti dettagli (tipi, funzioni di data/stringa, auto-incremento, paginazione, gestione di `NULL` in alcuni contesti). Verificare sempre la documentazione del DBMS in uso.*