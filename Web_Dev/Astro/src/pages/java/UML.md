---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'UML in Java'
metaTitle: 'Unified Modeling Language'
description: ''
author: 'Italo Corraro'
order: 9
---

## Progettare un Sistema

La progettazione di un sistema informatico che risolva un certo problema deve articolarsi in diversi passaggi:

1. **Analizzare il Problema**: partendo dai requisiti della richiesta, si modella una *Architettura logica* basata sul problema posto
2. **Pianificare il Collaudo**: si stila un *piano di collaudo* strutturato in modo da verificare che la soluzione proposta rispetti i requisiti del problema
3. **Progettare una Soluzione**: si progetta l'*Architettura del Sistema*, basata sull'architettura logica
4. **Implementare una Soluzione**: si scrive il codice che meglio rappresenta l'architettura di sistema progettata
5. **Collaudare l'Implementazione**: si osserva la risposta dell'implementazione ai test del piano di collaudo

### Architettura Logica e del Sistema

L'architettura logica sviluppata dall'analisi del problema e dei suoi requisiti si articola in tre viste:

- *struttura*: macro-blocchi derivanti direttamente dai requisiti, cioè un diagramma generale delle classi
- *interazione*: relazioni dinamiche tra i macro-blocchi; un diagramma di sequenza
- *comportamento osservabile*: modello "black box" del macro-blocco; un diagramma degli stati

Similmente, l'architettura del sistema si articola in altrettante viste:

- *struttura*: macro-blocchi della soluzione; tutte le classi necessarie al progetto
- *interazione*: relazioni tra le classi, con distinzione tra ereditarietà e composizione
- *comportamento di dettaglio*: descrizione del comportamento delle classi

## UML

**UML** (*Unified Modelling Language*) è un linguaggio grafico utilizzago per creare un modello visivo per il sistema che servirà da guida per il codice

### Sintassi

Le **classi** sono rappresentate come delle tabelle; al loro interno:
- i *campi privati* sono preceduti da `-`
    - le variabili private (non i metodi), in particolare, sono in una sottosezione apposita, immediatamente sotto il nome della classe
- i *campi pubblici* sono preceduti da `+`
- i *campi a visibilità intermedia* sono preceduti da `#`
- i *campi statici* sono sottolineati

Le **relazioni** tra le classi sono indicatecon delle frecce che le collegano; i tipi di relazione sono:
- *aggregazione* (rombo vuoto), cioè quando una classe/oggetto è un aggregato di altri oggetti indipendenti
- *composizione* (rombo pieno), cioè quando una classe/oggetto è composta da altri oggetti essenziali perché l'oggetto composto esista
- *dipendenza* (freccia piena), cioè quando una classe/oggetto ha una dipendenza da un altra classe/oggetto
- *ereditarietà* (freccia vuota), cioè quando un oggetto "estende" un altro, cioè ne è figlio e ne eredità proprietà e metodi

## Esempio: Orologio

Vogliamo Realizzare il modello di un orologio:

### Analisi

In prima analisi, possiamo dire che 
* l'*orologio* è un'entita caratterizzata da uno stato (l'orario, della cui visualizzazione ci occuperemo in seguito);
* la variazione dello stato è interamente dovuta al passaggio di una unità di tempo, quindi è necessario predisporre di un metodo che faccia avanzare lo stato di tale unità
* è necessario predisporre un metodo per leggere l'orario

Dobbiamo mettere a disposizione uno o più costruttori che permettano di creare orologi specificando un orario iniziale e decidere quante variabili accettare per tale orario:
* l'orologio prende come unità di base i secondi
* l'orologio conosce ore, minuti e secondi, ciascuno caratterizzato da un massimo
* possiamo omettere i secondi nel costruttore e supporre che il minuto sia appena iniziato
* possiamo fornire solo l'ora e supporre che sia appena iniziata
* possiamo fornire l'orario in formato stringa

Per quanto riguarda lo stato, di fatto necessitiamo di 3 contatori

```UML
Orologio
---
- ora: Counter
- min: Counter
- sec: Counter
---
+ Orologio(int h, int m, int s): Orologio
+ Orologio(int h, int m): Orologio
+ Orologio(int h): Orologio
+ Orologio(String hhmmss): Orologio
+ Orologio(): Orologio
+ getOrario(): Orario
+ getOra(): int
+ getMin(): int
+ getSec(): int
+ tic()
```

## Esempio: Orologio con Display a 7 Segmenti

Introduciamo la classe **SevenSegmentDisplay** che permette di creare una finestra con display a 7 segmenti tramite un metodo fabbrica.

