---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Probabilità e statistica'
metaTitle: 'Probabilità e statistica'
description: ''
author: 'Italo Corraro'
order: 0
---

## Definizioni Generali
:::def
Esiti($e$): possibili risultati di un esperimento.
:::

:::def
Spazio Campione($S$ o $\Omega$): insieme di tutti i possibili esiti di un esperimento.
:::

:::def
Evento (lett. maiusc.): sottoinsieme dello spazio campione.
:::

:::def
La probabilità ha diverse definizioni, più o meno
- *classica*: Dato un esperimento e un evento $E \sub S$, dove $S$ è uno spazio campione con un numero finito di esiti *equiprobabili*, si dice **probabilità di $E$**: $$P(E)=\frac{n^{o}\text{ esiti contenuti in }E}{n^{o}\text{ esiti contenuti in }S}$$ o $$\frac{n^o\text{ esiti favorevoli}}{n^o\text{ esiti totali}}$$
- *frequentista*: Dato un esperimento e un evento $E \sub S$, dove $S$ è uno spazio campione. Si ripete l'esperimento $N$ volte (con $N >> 1$) e si definisce **probabilità di $E$**: $$P(E)=\frac{n^{o}\text{ esperimenti in cui si osserva }E}{N}$$
- *assiomatica*: Dato uno spazio campione $S$, ad ogni evento $E \subset S$ si associa il numero reale $P(E)$, detto *probabilità*, tale che 
    1. la probabilità è compresa tra 1 e 0, estremi inclusi: $$ P(E) \in [0,1] $$
    2. la probabilità totale (di $S$) di tutti gli eventi è 1: $$ P(S) = 1 $$
    3. dati $E_1$, $E_2$ ecc... eventi disgiunti dello spazio campione, la probabilità dell'unione di tutti questi eventi è pari alla somma delle probabilità di ciascuno: $$ P(\bigcup_{j=1}^{n}) = \sum_{j=1}^{n} P(E_j) $$

:::

:::oss
La definizione classica di probabilità è un caso particolare della definizione assiomatica:

Dato uno spazio campione $S$ che contiene un numero finito di esiti equiprobabili:

$$ S = {e_1, e_2,... e_n} \text{ con } n \in \mathbb{N} \setminus {\emptyset}$$
sia $E \sub S$ 

$$P(E) = P(e_1 \cup e_2 ... \cup e_k) = \sum_{j=1}^{k} P(e_j) $$
Essendo $e_j$ equiprobabili, allora $P(e_j) = p$
$$ P(E) = k \times p$$

Analogamente, $B_1: P(S) = n \times p$, ma anche $P(S) =_{A_2} 1$, per cui 
$$P(s) = n \times p = 1 \Rightarrow p = 1/n$$

Concludiamo $$ P(E) = kp =_{B_1} k/n = \frac{n^o \text{ esiti di }E}{n^o \text{ esiti totali}} $$
:::

## Paradosso dei Compleanni

Dato un gruppo di $n$ persone, nate nello stesso anno (non bisestile), qual è la probabilità che non ci siano persone con la stessa data di compleanno? Qual è la probabilità che ci siano?

Dobbiamo supporre che la probabilità di essere nati un certo giorno dell'anno sia la stessa.

Chiamiamo l'evento $C$ come l'evento che comprende le $n$ persone che hanno compleanni diversi, per cui $$ P(C) = \frac{n^o \text{ esiti di }C}{n^o \text{ esiti totali}}$$

Anche in un gruppo numeroso, è ammesso che tutti abbiano la stessa data di compleanno, cioè, ipotizzando l'assegnazione di un compleanno come l'estrazione di una data, allora è un'estrazione con remissione.

Per il principio di enumerazione, essendo 365 i giorni possibili per un compleanno (secondo le ipotesi), allora, le possibili combinazioni di date di compleanno sono $365^n$.

Gli esiti di $C$ richiedono che ognuno che "pesca" il proprio compleanno, non estragga uno di quelli già estratti ($365/365$ buoni per il primo, $364/365$ per il secondo, $363/365$ per il terzo e così via).

$$ n_C = D_{365,n} = \frac{365!}{(365-n)!}$$

Per cui $$ P(C) = \frac{365!}{(365-n)! \times 365^n}$$

:::oss
Indiachiamo con $E$ l'evento in cui ci sono persone con la stessa data di compleanno, allora possiamo dire che l'evento complementare $E^c$, cioè che nessuno abbia la stessa data di compleanno di un altro, allora:

$$ P(E) = 1 - P(E^c) $$
:::

### 

Immaginiamo un anno composto di 3 giorni e prendiamo $n=2$ persone che indichiamo con $A$ e $B$; le possibili combinazioni di date di nascita sono:

<!-- enumera casi possibili di nascita per A e B -->

Il numero di casi con compleanni diversi sono 6, quindi la probabilità di avere una coppia di persone con compleanni diversi è $6/9$


Usando il modello delle combinazioni, otteniamo invece solo 6 casi totali:

$$\{1,1\},\{1,2\},\{2,2\},\{1,3\},\{3,3\},\{3,2\}$$
qui i casi favorevoli sono solo 3, cioè $1/2$ dei casi.

*Questo non è il modello giusto per rappresentare il problema, poiché le combinazioni come $\{1,2\}$ hanno più probabilità di risultare perché non consideriamo l'ordine.*