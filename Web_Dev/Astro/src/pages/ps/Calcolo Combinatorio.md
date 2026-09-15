---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Richiami di Calcolo Combinatorio'
metaTitle: 'Richiami di Calcolo Combinatorio'
description: ''
author: 'Italo Corraro'
---

## Principio di Enumerazione

Siano dati due esperimenti, il primo con $n$ esiti e il secondo con $m$, allora il numero di coppie ordinate degli esiti degli esperimenti è $n \times m$.

:::eg
Cerchiamo il numero di targhe automobiliste che è possibile creare:   
una targa è composto da una sequenza ordinata di 4 lettere e 3 cifre, quindi esistono $26^4 \times 10^3$ casi.
:::

- allineamento: gruppo ordinato di elementi
- gruppo: gruppo di elementi senza principio d'ordine

## Disposizioni

### Disposizioni Semplici

Dati $n$ elementi distinti, si definiscono *disposizioni semplici* di $n$ elementi di classe $k$, tutti gli allineamenti che si possono formare prendendo $k$ con $k \leq n$ elementi dell'insieme degli $n$ senza ripetizioni.

$$ D_{n,k} = \frac{n!}{(n-k)!} $$

### Disposizioni con Ripetizione

Dati $n$ elementi distinti, si definiscono *disposizioni con ripetizione* di $n$ elementi di classe $k$, tutti gli allineamenti che si possono formare prendendo $k$ elementi, tutti con $k \leq n$ o $k \geq n$, anche con ripetizione, dell'insieme degli $n$.

$$ D_{n,k}^{R} = n^k $$

## Permutazioni

### Permutazioni Semplici

Dati $n$ elementi distinti, si definiscono *permutazioni semplici* gli allineamenti che si possono formare con gli $n$ elementi.

$$ P_n = D_{n,n} = \frac{n!}{(n-n)!} = n! $$

:::oss
Possono essere considerate come un caso particolare delle disposizioni semplici.
:::

### Permutazioni con Ripetizione

Dati $n$ elementi, anche ripetuti, si definiscono *permutazioni con ripetizione* gli allineamenti che si possono formare con gli $n$ elementi.

Supponiamo che negli $n$ elementi compaiano $p$ elementi distinti, ciascuno con molteplicità $k_j$ dove $j$ rappresenta il $j$-esimo elemento distinto, per cui $n = \sum_{j=0}^{p} k_j$.
$$ P_{n}^R = \frac{n!}{\prod_{j=0}^{p}k_j!} $$

## Combinazioni

### Combinazioni Semplici

Dati $n$ elementi distinti, si definiscono *combinazioni semplici* di $n$ elementi di classe $k$ con $k \leq n$, tutti i gruppi di $k$ elementi che si possono formare dagli $n$ dati senza ripetizioni.

Formula del coefficiente binomiale:
$$ C_{n,k} = \frac{n!}{(n-k)!\cdot k!} = \binom{n}{k} $$