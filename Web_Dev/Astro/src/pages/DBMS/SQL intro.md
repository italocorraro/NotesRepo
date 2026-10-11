---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Algebra Relazionale'
metaTitle: 'Algebra Relazionale'
description: ''
author: 'Italo Corraro'
order: 5
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

CHAR(n) - stringhe di lunghezza fissa n max (254)
VARCHAR(n) - stringhe di lunghezza variabile n

Le stringhe sono delimitate da apici singoli `'`

Per concatenare due stringhe si può usare l'operatore binario `CONCAT` oppure `||`.   
Le funzioni `UPPER` e `LOWER` convertono i caratteri di una stringa in maiuscolo o minuscolo rispettivamente.