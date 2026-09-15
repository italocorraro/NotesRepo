---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Intro'
metaTitle: 'Test'
description: ''
author: 'Italo Corraro'
order: 0
---


Un ***Data Base Management System*** (::abbr{DBMS}) è un sistema software di gestione di dati strutturati, organizzati in un **database**;   
un DBMS permette di:
- è in grado di **gestire grandi quantità di dati**
- è in grado di **garantirne la persistenza**, anche a fronte di guasti
- è in grado di **garantire elevate prestazioni**, utilizzando efficientemente le risorse di calcolo e ottimizzando le modalità di esecuzione delle operazioni
- offre una **"visione strutturata"** dei dati che dipende dal modello (logico) dei dati supportato 

Un esempio di sistema DBMS è il software *IBM DB2*

L'obiettivo di base di un DBMS è quello di è permettere alle applicazioni di specificare diverse operazioni sui dati in modo più semplice e "uniforme" rispetto ad un'implementazione manuale "ad hoc"; tutto senza conoscere i dettagli dell'organizzazione fisica dei dati.

:::eg
Funzioni di ricerca (specialmente se non per chiave), filtraggio e  simili, possono essere svolte su basi di dati relativamente trascurabili (KBs), ma non scalano bene per le dimensioni di un database con dimensioni non trascurabili; per quelle conviene astrarre le specifiche operazioni tramite un DBMS, al quale verranno semplicemente fatte delle richieste di dati; le specifiche modalità con cui sono svolte le operazioni sono dettagli di implementazione interna.
:::

## Modello dei Dati

I dati presenti in un database sono *strutturati*, cioè devono rispettare specifici vincoli (ad esempio, devono avere un certo tipo, ma esistono vincoli anche più complessi come l'unicità); sono essenziali da stabilire in progettazione.

I dati di un database sarebbero (teoricamente) descritti dai loro vincoli.   
In un DBMS, i dati sono strettamente legati alla loro "descrizione", invece, dati scritti ad esempio su file di testo, non hanno una descrizione o vincoli impliciti; è il codice a doverli validare ogni volta da una struttura grezza.

*Un **modello dei dati** è una collezione di concetti che vengono 
utilizzati per descrivere i dati, le loro associazioni, e i vincoli
che questi devono rispettare*.

In ogni DB si hanno due componenti:
- lo **schema**, che descrive la *struttura dei dati* (la cosiddetta parte intensionale del DB)
- l'**istanza**, ovvero *i dati veri e propri* (la parte estensionale del DB)

Naturalmente, di un database ci si aspetta che la struttura dei dati non vari, mentre i dati effettivi (che la rispettano) possono variare.

Lo schema è effettivamente l'aspetto del database che permette di interpretare e utilizzare i dati.

Una caratteristica importante dei DBMS è che *la descrizione delle 
strutture dati (schemi) di un DB è memorizzata nel DB stesso*, sotto 
forma di cosiddetti **cataloghi**:
- Esistono cataloghi che descrivono le tabelle, i vincoli imposti sui dati, le autorizzazioni concesse, ecc.
- I cataloghi sono interrogabili al pari dei 
dati veri e propri.

##

Il "DB fisico" consiste di una serie di file, residenti su memorie di 
massa.

Il livello logico consiste di una serie di strutture (relazioni, nel 
modello relazionale) il cui utilizzo non dipende dallo schema fisico

L'indipendenza fisica garantisce l'invarianza dello schema logico a 
fronte di ristrutturazioni dello schema fisico

Il livello esterno viene costruito a partire dallo schema logico 
integrato mediante la definizione di viste ad hoc, che descrivono 
parte dello schema logico secondo le esigenze dei diversi utenti, ad esempio combinando dati tramite delle specifiche relazioni.

##

Un DBMS mette a disposizione diversi linguaggi per interagire con i 
DB. Il livello di astrazione di tali linguaggi dipende fortemente dal 
modello dei dati cui ci si riferisce

Una comune distinzione classifica i linguaggi sulla base delle 
funzioni svolte:
 **DDL** (::abbr{Data Definition Language})
: Serve per definire gli schemi (logici, esterni, interni)
 **DML** (Data Manipulation Language)
: Serve per interrogare e modificare l'istanza del DB
 **DCL** (Data Control Language)
: Include comandi di vario tipo, ad es. per il controllo degli accessi

## Concorrenza

Uno degli aspetti fondamentali della gestione di un database è la gestione della concorrenza, ovvero quando una o più operazioni vengono fatte/richieste nello stesso momento sulle stesse risorse.

:::eg
Su file: se due utenti aggiornano contemporaneamente lo stesso record, ma non c'è gestione della concorrenza, inevitabilmente, se nessuna delle due è granulare (ovvero ogni modifica comporta una riscrittura complessiva), ciascuna vorrà scrivere la versione attuale del database con la propria modifica implementata, ma nessuno dei due vede la modifica dell'altro, quindi, l'ultima modifica ad essere applicata cancella l'altra perché riscrive il database implementando solo sè stessa.

Per evitare questo comportamento, è necessario che le operazioni siano organizzate in modo da evitare conflitti.
:::

