---
title: 'SQL'
metaTitle: 'SQL'
description: ''
author: 'Italo Corraro'
order: 5
module: 'SQL'
---

SQL è un linguaggio dichiarativo (non procedurale)

È relazionalmente completo, ovvero, supporta tutte le operazioni dell'algebra relazionale;

SQL si basa su tabelle composte di righe invece che relazioni di tuple; la differenza principale è che le righe ammettono duplicati in una tabella

:::nb
SQL è un linguaggio case-insensitive per quanto riguarda nomi e keyword (i contenuti di una stringa sono invece case-sensitive)
:::

## Data Definition Language

Il DDL di SQL permette di definire delle tabelle che equivalgono a schemi di relazioni e di dichiarare vincoli applicabili all'intera tabella o alle singole righe

### Creare una Tabella

L'istruzione `CREATE TABLE` inizializza una tabella; `DROP TABLE` la elimina.
```sql
CREATE TABLE Studenti {
    Matricola char(5), /* attributo  */
    CF char(16),
    Cognome varchar(30)
}
```

### Tipi di Dato

#### Caratteri e Stringhe

tipo | desc
--- | ---
`CHAR(n)` | stringhe di lunghezza fissa n (max 254)
`VARCHAR(n)` | stringhe di lunghezza variabile n

Le stringhe sono delimitate da apici singoli `'`.

Per concatenare due stringhe si può usare l'operatore binario `CONCAT` oppure `||`.   
Le funzioni `UPPER` e `LOWER` convertono i caratteri di una stringa in maiuscolo o minuscolo rispettivamente.

:::nota
Al contrario dei nomi, le stringhe e i caratteri sono case-sensitive
:::

#### Numeri

tipo | desc
--- | ---
`INTEGER` \| `INT` | interi a 4 byte
SMALLINT 2 byte
DECIMAL(p,s)\|DEC(p,s) | 

#### Date

`DATE`

- il formato output di default è ISO: yyyy-mm-dd

`MONTH(v: DATE)`, `DAY(v: DATE)`, `YEAR(v: DATE)` restituiscono come `INT` la porzione di data richiesta

func `DAYS(v: DATE)` restituisce il numero di giorni di differenza tra la data fornita e < data-base\>

#### Orari

TIME
TIMESTAMP

#### Booleani

:::nota
Conversioni implicite di tipo (laddove opportuno):
- convertiti a `true`: `'true'`, `'t'`,`'yes'`, `'y'`, `'on'`, `1`
<!-- valori false -->
:::

#### Type casting

Il tipo può essere modificato usando l'operatore `AS` dentro `CAST`: `CAST(<name> AS <new-type>)`.


### Vincoli

Vincolo | hhh | eg
--- | --- | ---
`NOT NULL` | non ammette valori nulli | char(5) NOT NULL
`DEFAULT <val>` | inizializza a un valore di default
`UNIQUE` | impedisce duplicati
`PRIMARY KEY` | 
`REFERENCES <Table>(?<attribute>)` | dichiara una foreign key e la lega a un'altra tabella (e possibilimente a un attributo specifico)
`CHECK(<boolean-expression>)` | permette di applicare una condizione

Entrambi unique e primary key richiedono il vincolo not null

<!-- dichiarazione vincoli postumi e con nome -->

#### Vincoli di Tabella

Usare la virgola dopo aver dichiarato gli attributi

Qui ENTRAMBI sono chiavi:
```sql
CREATE TABLE Visti {
    Persona varchar(16) NOT NULL UNIQUE,
    Titolo varchar(16) NOT NULL UNIQUE,
}
```
Qui, insieme costituiscono una chiave:
```sql
CREATE TABLE Visti {
    Persona varchar(16),
    Titolo varchar(16),
    CONSTRAINT Key
        NOT NULL UNIQUE
}
```

### Modifica di Tabella

`ALTER TABLE`

operazioni: `ADD` e `DROP`

## Data M Language

SELECT
INSERT
DELETE
UPDATE

Rispetto alla terminologia
TABLE | relazione
ROW | tupla
COLUMN | attributo

### SELECT

forma base:

```
SELECT <Colonna-a>, <Colonna-b>, ... <Colonna-n>
FROM <Tabella-1>, <Tabella-2>, ... <Tabella-n>
WHERE ?<espressione>
```

L'argomento passato a SELECT può usare espressioni sugli attributi e quelle verranno eseguite su tutti valori di quella colonna quando viene restituita
```sql
SELECT Matricola, Voto/3 /* Divide per 3 il voto */
FROM Studenti
```

Costrutto `CASE`

```sql
SELECT Qualcosa
    CASE Arg
        WHEN case1 THEN Qualcosaltro
        WHEN case2 THEN Qualcosaltroancora
        WHEN case3 THEN Qualcosaltropure
    END
```
è possibile usare un'espressione direttamente nel case, piuttosto che usarlo come uno switch:
```sql
SELECT Qualcosa
    CASE
        WHEN Arg = case1 THEN Qualcosaltro
        WHEN Arg < case1 THEN Qualcosaltroancora
        WHEN Arg > case1 THEN Qualcosaltropure
    END
```
Se alcune condizioni possono coesistere, vale la prima che si verifica (break implicito).

Si può usare un ELSE per fornire un fallback qualore le condizioni non siano verificate:

```sql
SELECT Qualcosa
    CASE
        WHEN Arg = case1 THEN Qualcosaltro
        WHEN Arg > case1 THEN Qualcosaltropure
        ELSE 'È minore'
    END
```

### LIKE

Tipo regex ma reinventato
<!-- vedi -->

### BETWEEN
`<Col> BETWEEN <a> AND <b>`

### IN

<!--  -->

### Ordinamento

`ORDER BY <...attr[]> <DESC|ASC=ASC>`

<!--  -->

### Alias Tabelle

<!--  -->

##### JOIN

```sql
SELECT G1.Genitore AS Nonno, G2.Genitore AS Nipote
FROM Genitori G1, Genitori G2
WHERE G1.Figlio = G2.Genitore
```


:::nota{parole riservate}
Per fare escaping di nomi che coincidono con parole riservate del linguaggio, si racchiudono tra doppi apici.
:::

```sql
/* SELF JOIN */
SELECT *
FROM Post p1, Post p2
WHERE p1.ARGID = p2.ARGID
AND p1.USER < p2.USER /* Rimuove le tuple che si accoppiano con se stesse */
```

È possibile definire esplicitamente una tabella JOINed nella FROM:

```sql
SELECT *
FROM POST p, ARGOMENTI a
WHERE p.ARGID = a.ARGID
/* equivale a */
SELECT *
FROM POST JOIN ARGOMENTI ON (p.ARGID = a.ARGID) /* Il predicato è strettamente necessario */
```

:::oss 
Se gli attributi hanno lo stesso nome, è equivalente a
```sql
SELECT *
FROM POST JOIN ARGOMENTI USING (ARGID)
```
Si possono specificare anche più attributi separandoli con virgola
:::

Senza predicato non è valido; è possibile fare un prodotto cartesiano con `CROSS JOIN` invece:
```sql
SELECT *
FROM POST CROSS JOIN ARGOMENTI
```

Il join naturale non è disponibile (è necessario specificare gli attributi su cui effettuare l'operazione)


### Operatori Insiemistici

- `UNION` unione
- `INTERSECT` intersezione
- `EXCEPT` differenza

È necessario che i tipi siano compatibili, inoltre le operazioni sono eseguite sequenzialmente 

Opzionalmente è possibile aggiungere il comando `ALL` per mantenere eventuali duplicati nel risultato.

```sql
SELECT p.pid, p.data
FROM POST p
UNION
SELECT l.pid, l.data
FROM "LIKE" l
```

:::nota
È un'operazione ordinata:
```sql
SELECT p.pid, p.data
FROM POST p
UNION
SELECT l.data, l.pid
FROM "LIKE" l
```
non funziona
:::


## Modifica Database

- `INSERT` aggiunge righe alla tabella
- `DELETE` elimina righe
- `UPDATE` modifica righe 

:::nota
Le operazioni vengono eseguite in modo che se un solo passaggio fallisce, l'intera operazione fallisce (non viene mai eseguita a metà).
:::

```sql
CREATE TABLE R (
    A int NOT NULL,
    B char(5),
    C int DEFAULT 100
)

/* Specificando gli attributi riempiti e l'ordine */
INSERT INTO R(A)
VALUES (5)

INSERT INTO R(A,b,c)
VALUES (30,NULL,200)

INSERT INTO R(a,b,c)
VALUES (40,'ab',DEFAULT)

/* Senza specificare gli attributi, 
è richiesto rispettare l'ordine di dichiarazione */
INSERT INTO R
VALUES (40,'ab',6)
```

### Delete

```sql
DELETE FROM R 
-- cancella l'intera tabella

DELETE FROM R
WHERE A > 10 
-- cancella le righe con A>10
```

### Update

Per modificare valori della tabella

```sql
UPDATE R
SET A = 2*A
-- raddoppia tutte le A della tabella

/* Possiamo aggiungere una condizione: */
UPDATE R
SET A = 2*A
WHERE a > 70
-- raddoppia le A > 70 nella tabella
```


## Politiche di Reazione (DDL)

Quando vengono effettuate delle operazioni di 

```sql
CREATE TABLE R (
    A int NOT NULL PRIMARY KEY
        ON DELETE NO ACTION 
        -- impedisce cancellazione
        ON UPDATE NO ACTION 
        -- impedisce modifica
    B int UNIQUE
)

INSERT INTO R
VALUES (1,100), (2,200)

CREATE TABLE S (
    SA int REFERENCES R(A)
        ON DELETE SET NULL
)

INSERT INTO S
VALUES (1)
/* necessario rispettare il vincolo 
di foreign key all'inserimento, 
quindi dobbiamo inserire SA inclusi in A di R
 */

CREATE TABLE T (
    TB int NOT NULL REFERENCES R(B)
        ON DELETE CASCADE
)

INSERT INTO T
VALUES  (2)

DELETE FROM R
WHERE A = 1
-- questa operazione pone a null la SA inserita in S
```


## IBM DB2

Instance: un DBMS che risponde a richieste da una porta specifica

Un DBMS può contenere più DB

Il contenitore fisico delle tabelle è il *tablespace* dove i dati sono effettivamente registrati.

Schema (non della tabella): è un contenitore virtuale che raccoglie oggetti tra loro correlati

## Esercizio

```sql
CREATE TABLE UTENTI (
    TESSERA CHAR(5) NOT NULL PRIMARY KEY,
    NOME VARCHAR(30) NOT NULL,
    COGNOME VARCHAR(30) NOT NULL,
    TELEFONO CHAR(14) NOT NULL,
    -- vincolo di tabella
    CONSTRAINT NCT_KEY UNIQUE(NOME,COGNOME,TELEFONO)
);
CREATE TABLE LIBRI (
    CODICE CHAR(5) NOT NULL PRIMARY KEY,
    TITOLO VARCHAR(60) NOT NULL,
    AUTORI VARCHAR(60) NOT NULL DEFAULT('Anonimo'),
    NOTE VARCHAR(300)
);
CREATE TABLE PRESTITI (
    CODICELIBRO CHAR(5) NOT NULL 
    REFERENCES LIBRI
    -- cancella a cascata
    ON DELETE CASCADE
    TESSERA CHAR(5) 
    REFERENCES UTENTI
    ON DELETE CASCADE
    DATA_OUT DATE NOT NULL
    RESTITUITO BOOLEAN NOT NULL
    DATA_IN DATE
    -- primary key
    PRIMARY KEY (CODICELIBRO,TESSERA,DATA_OUT),
    -- vincoli di tabella
    CONSTRAINT DATA_VALIDA CHECK (DATA_IN >= DATA_OUT),
    CONSTRAINT RESTITUZIONE CHECK (
        (RESTITUITO AND DATA_IN <> NULL)
        OR
        (NOT RESTITUITO AND DATA_IN = NULL)
    )
);
```
:::nota
Se non viene specificato l'attributo che viene referenziato dalla foreign key, si assume di default che referenzi la primary key della tabella.
:::

:::nb
L'ultimo vincolo non funziona;   
il problema è che `NULL` non è confrontabile e non restituisce vero/falso nei confronti 
```sql
CONSTRAINT RESTITUZIONE CHECK (
    (RESTITUITO AND DATA_IN <> NULL)
    OR
    (NOT RESTITUITO AND DATA_IN = NULL)
)
```
va' riscritto come
```sql
CONSTRAINT RESTITUZIONE CHECK (
    (RESTITUITO AND DATA_IN IS NOT NULL)
    OR
    (NOT RESTITUITO AND DATA_IN IS NULL)
)
```
:::

### Esempi di Query

Query per prestiti con restituzione su anni diversi
```sql
SELECT *
FROM PRESTITI
WHERE YEAR(DATA_OUT) < YEAR(DATA_IN) 
OR (
    RESTITUITO = false 
    AND YEAR(CURRENT DATE) > YEAR(DATA_OUT)
);
```

Query per codici dei libri presi in prestito da un certo utente con un certo nome, cognome e telefono
```sql
SELECT P.CODICELIBRO
FROM PRESTITI P JOIN UTENTI U USING (TESSERA)
WHERE (U.NOME,U.COGNOME,U.TELEFONO) 
    = ('<nome>','<cognome>','<telefono>');
```

come prima, ma in un intervallo di date 
```sql
SELECT P.CODICELIBRO
FROM PRESTITI P JOIN UTENTI U USING (TESSERA)
WHERE (U.NOME,U.COGNOME,U.TELEFONO) 
    = ('<nome>','<cognome>','<telefono>')
AND DATA_OUT BETWEEN '<data-1>' AND '<data-2>';
```

Utenti che hanno preso in prestito almeno 2 libri diversi nel 2025
```sql
SELECT DISTINCT P1.TESSERA, P1.CODICELIBRO, P2.CODICELIBRO
FROM PRESTITI P1 JOIN PRESTITI P2 USING (TESSERA)
WHERE YEAR(P1.DATA_OUT) <> 2025
AND YEAR(P2.DATA_OUT) <> 2025
AND P1.CODICELIBRO <> P2.CODICELIBRO
```
```sql
SELECT P.TESSERA
FROM PRESTITI P1 JOIN PRESTITI P2 USING (TESSERA)
WHERE YEAR(P1.DATA_OUT) = 2025
    EXCEPT ALL
    SELECT 
    FROM UTENTI U
```

### Algebra con Valori Nulli

I valori null nell'algebra relazionale introducono un problema di semantica per i valori booleani

Il `null` si può intendere come:
- nessun valore applicabile, cioè, la tupla non possiede quell'attributo e lo rendiamo esplicito,
- esiste un valore applicabile, ma non è noto, cioè, la tupla ha un valore per quell'attributo, ma non ci è noto
- potrebbe esistere un valore applicabile, ma è noto nemmeno se esiste, cioè, la tupla potrebbe avere un valore per quell'attributo, ma non ci è noto
Questi modi di intendere il `null` sono contraddittori e creano un problema per le query.

In un DBMS il `NULL` è da intendersi nel terzo modo, sempre e comunque, cioè non è noto il valore nè l'esistenza di questo.

Questo modo si genera una terza opzione logica `UNKNOWN`, perché fare confronti con valori `NULL` non può generare risultati certamente veri o falsi.

`NOT` | .
--- | ---
 V | F
 F | V 
 ? | ?

`AND` | V | F | ?
--- | --- | --- | ---
 V | V | F | ?
 F | F | F | F
 ? | ? | F | ?

`OR` | V | F | ?
--- | --- | --- | ---
 V | V | V | V
 F | V | F | ?
 ? | V | ? | ?

Per confrontare con `NULL` si usa l'operatore `IS`:
- `NULL IS NULL -> true`
- `'QuaLCOSA' IS NULL -> false`

:::oss
`WHERE` prende solo le condizioni che danno `true` (sia `unknown` che `false` non passano).

`CHECK` blocca solo le condizioni che risultano `false` (sia `unknown` che `true` passano).
:::

:::nota
Il `JOIN` non unisce tuple che hanno `NULL` come valore condiviso per l'attributo su cui viene eseguito.

Questo comportamento occorre anche per un self join, che quindi elimina tutte le tuple con attributi nulli.

Questo rende il `JOIN` *non-idempotente*, perché un join su sè stessi non è uguale a se stessi.
:::

:::nota
Le operazioni di unione considerano i valori nulli come fossero gli stessi.
:::

:::nota
Il costrutto `CASE` usa l'uguaglianza semplice per fare match, quindi non funziona con i `NULL` se non si esplicita `IS NULL`.
:::

### Coalescenza Nulla

SQL implementa un operatore binario di coalescenza nulla:
`COALESCE`.

```sql
COALESCE(UFFICIO,'Non Assegnato')
-- se UFFICIO IN NOT NULL, 
-- allora restituisce UFFICIO
-- se UFFICIO IS NULL, 
-- allora restituisce 'Non Assegnato'
```


## Outer Join

L'operazione di outer join è un join in cui le tuple dangling che riempie i campi mancanti con `NULL`
- $=\Join$ tutte le tuple dangling dell'operando sinistro
- $\Join=$ tutte le tuple dangling dell'operando destro
- $=\Join=$ tutte le tuple dangling di entrambi gli operandi

AR | SQL 
--- | ---
$=\Join$ | `LEFT JOIN`
$\Join=$ | `RIGHT JOIN`
$=\Join=$ | `FULL JOIN`

:::oss
L'operazione di outer join *è idempotente* per i `LEFT JOIN` e i `RIGHT JOIN` in SQL; `FULL JOIN` duplica le tuple dangling.
:::