---
title: 'Cataloghi'
metaTitle: 'Cataloghi'
description: ''
author: 'Italo Corraro'
order: 10
---


:::def
Un catalogo è un insieme di table e view che descrivono la struttura logica del database; difatto contengono metadati riguardo la base di dati.
:::

I cataloghi sono contenuti in schemi di sistema:
- `SYSIBM`: cataloghi per tabelle di sistema
- `SYSCAT`: viste definite sulle tabelle di `SYSIBM` ad uso utente
- `SYSSTAT`: statistiche del DB

## Cataloghi Principali

### SYSCAT.SCHEMATA

Descrive gli schemi creati per il database associandovi metadati quali nome, creatore, data creazione, descrizione, ecc...

### SYSCAT.TABLES

Descrive le tabelle e le viste (contrassegnate dall'attributo `TYPE`), ne contiene identificativo, peso complessivo dei dati, numero di colonne, numero di righe, il sorgente, ecc... 

In particolare: 
- *children* (le foreign key che lo referenziano),  
- *parents* (le foreign key che ha definite), 
- foreign key autoreferenzianti, 
- il numero di controlli *check* che ha definiti
- *key columns* che indica il numero di colonne della primary key


### SYSCAT.VIEWS

Catalogo specifico per le viste (non include tabelle), include dipendenze, definizioni di check options, il tipo base (*btype*) cioè il tipo dell'oggetto da cui dipende (ad es. un'altra vista o una tabella)

### SYSCAT.COLUMNS

Descrive tutte le colonne dei database: con nome, numero di ordine nel suo proprietario, tipo del proprietario (vista/tabella), tipo dei dati che contiene, se ammette nulli, default, cardinalità (valori distinti), se è una primary key.


### SYSCAT.TABCONST

Vincoli definiti, tipo del vincolo, chi è il proprietario.

### SYSCAT.KEYCOLUSE

Vincoli di chiave.

