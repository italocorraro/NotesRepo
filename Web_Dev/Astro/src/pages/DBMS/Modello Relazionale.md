---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Modello Relazionale'
metaTitle: 'Modello Relazionale'
description: ''
author: 'Italo Corraro'
order: 1
---

I modelli persistenti precedenti (gerarchico e reticolare) tendevano ad enfatizzare l'efficienza piuttosto che la semplicità d'uso.

Il modello relazionale stabilisce per primo che la rappresentazione interna dei dati non è necessaria all'utilizzatore (e non deve esserlo) e quindi non va' esposta; l'aspetto fisico/strutturale è secondario rispetto all'uso.

Il modello relazionale, a differenza degli altri, non utilizza rappresentazioni di dati per puntatore, ma solo per valore.

Nel modello Entity-Relationship, una *relazione* indica una classe di legami tra due o più entità; viene più propriamente detta *associazione*.

Nel modello relazionale, una *relazione* può essere vista come una tabella le cui colonne rappresentano le proprietà d'interesse e le righe oggetti dal database.

Le colonne di questa tabella hanno un'intestazione, che sarebbe un *attributo*, cioè il nome che si associa a una certa occorrenza di dominio e ne rappresenta il ruolo nella relazione.

:::def
Si indichi con $dom(A)$ il dominio dell'attributo $A$ e si consideri un insieme di attributi $X = {A_1, A_2, ... A_n}$
- Una tupla $t$ su $X$ è un insieme di tuple su $X$,
- *L'istanza di una relazione* su $X$ è un insieme di tuple su $X$, si scrive usando il nome minuscolo della relazione
-*Lo schema di una relazione* su $X$ è, dato da un nome $R$ della relazione e dall'insieme di attributi $X$, scritto $R(X)$


Un database relazionale è un insieme di schemi di relazioni con nomi distinti

Uno schema 
- reale (con o senza dati a seguito)
- non interpretati, ma con dati, sono utili per generalizzare
- non interpretati e senza dati 
