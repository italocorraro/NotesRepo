---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Richiami di Calcolo Combinatorio'
metaTitle: 'Richiami di Calcolo Combinatorio'
description: ''
author: 'Italo Corraro'
order: 1
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

## Esempi

### Esempi di Estrazione

Sia data una scatole con 6 palline rosse e 5 blu;
1. si estraggono 3 palline, una alla volta, con remissione (la pallina estratta viene rimessa dentro).   
Qual è la probabilità di estrarre prima una pallina rossa e poi 2 blu?
2. qual è la probabilità di estrarre una pallina rossa e due blu senza badare all'ordine?
3. qual è la probabilità di estrarre una pallina rossa e due blu nell'ordine e senza remissione?
4. qual è la probabilità di estrarre una pallina rossa e due blu senza ordine e senza remissione?

Chiamiamo $A$ l'evento di estrazione di una pallina rossa e due palline blu in ordine con remissione, quindi
$$ P(A) = \frac{n^o \text{ esiti di }A}{n^o \text{ esiti totali}} = \frac{n_A}{N} $$
Trattasi di una disposizione con ripetizione di 11 oggetti, di cui ne estraiamo 3: $N = 11^3$.

Le palline rosse sono 6 e vanno estratte 1 volta, quelle blu 5 ed estratte 2: $n_A = 6 \times 5^2$,
oppure possiamo vedere $n_A$ come le disposizioni con ripetizioni di 6 oggetti, di cui ne estraiamo 1 e di 5 oggetti, di cui ne estraiamo 2: $n_A = D_{6,1}^R \times D_{5,2}^R = 6 \times 5^2$.

Quindi $P(A) = 6\times5^2\div11^3 = 0,1127 = 11,27 % $.

Nel secondo caso, riperendendo la nomenclatura: $$ P(B) = \frac{n_B}{N} $$

$N$ rimane lo stesso, mentre $n_B$, si presentano 3 possibili variazioni di $n_A$, quindi $n_B = 3 \times 6 \times 5^2$ o $n_B = 3 \times D_{6,1}^R \times D_{5,2}^R = 6 \times 5^2$.

Con il terzo caso: $$ P(C) = \frac{n_C}{N} $$

Questo è un caso di combinazione: $ N = D_{11,3} = \binom{11}{3} = \frac{11!}{8!} = 11 \times 10 \times 9 \times 8! / 8! = 11 \times 10 \times 9 $

Mentre $n_C = D_{6,1} \times D_{5,2} = 6 \times 5 \times 4 $.

Con il quarto caso: $$ P(D) = \frac{n_D}{N} $$

Si presentano due possibili modelli di estrazione:
- viene estratta una pallina per volta (esiste un ordine),
- vengono estratte tutte le palline insieme (non esiste alcun ordine)

Se estraiamo una pallina alla volta: $$ P(D) = \frac{3 \times D_{6,1} \times D_{5,2}}{D_{11,3}} $$

Se estraiamo tutte insieme: $$ P(D) = \frac{C_{6,1} \times C_{5,2}}{C_{11,3}} $$

Alla fine, per tutti e due i casi, il risultato è il medesimo.

###

$$ P(A \cup B) = P(A) + P(B) - P(A \cap B) $$

Dimostrazione:

Siano:
- $E_1 = A \setminus B$ 
- $E_2 = B \setminus A$ 
- $E_3 = A \cap B$ 
che sono tutti disgiunti e possiamo trovare che $ P(A \cup B) = P(E_1 \cup E_2\cup E_3)$

$$P(A) = P(E_1 \cup E_3) =_{A_3} P(E_1) + P(E_3) $$
$$P(B) = P(E_2 \cup E_3) =_{A_3} P(E_2) + P(E_3) $$
$$P(E_3) = P(A \cap B) $$
$$ P(A \cup B) = $$