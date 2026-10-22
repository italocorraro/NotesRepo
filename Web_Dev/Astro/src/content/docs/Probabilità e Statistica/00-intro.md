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
Chiamiamo **esiti** ($e$) i possibili risultati di un esperimento.
:::

:::def
Chiamiamo **Spazio Campione** ($S$ o $\Omega$)l'insieme di tutti i possibili esiti di un esperimento.
:::

:::def
Chiamiamo **evento** ($E$) un qualunque sottoinsieme dello spazio campione.
:::

### Notazione

:::def
Dati $A,B \subset S$, due eventi dello spazio campione $S$, chiamiamo **unione degli eventi**, l'evento $C$ di $S$ che contiene tutti gli esiti contenuti in $A$ e/o in $B$.
:::

:::def
Dati $A,B \subset S$, due eventi dello spazio campione $S$, chiamiamo **intersezione degli eventi**, l'evento $C$ di $S$ che contiene tutti gli esiti contenuti sia in $A$ che in $B$.
:::

:::def
L'evento che non contiente alcun esito è l'**insieme vuoto**: $\emptyset$
:::

:::def
Dati $A,B \subset S$, due eventi dello spazio campione $S$, diciamo che sono **mutualmente esclusivi** se $A\cap B = \emptyset$
:::

:::def
Dato $A \subset S$, evento dello spazio campione $S$, chiamiamo **evento complementare** di $A$ l'evento $A^C$ di $S$ che contiene tutti gli esiti di $S$ che non sono contenuti in $A$, tale per cui:
$A^C=S\setminus A$ o, equivalentemente, $A\cup A^C=S$.
:::

### Proprietà

<!-- relocated -->
1. $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
2. A^C \cap B^C = (A\cup B)^C
3. A^C \cup B^C = (A\cap B)^C
Dimostrazione:

Siano:
- $E_1 = A \setminus B$ 
- $E_2 = B \setminus A$ 
- $E_3 = A \cap B$ 

che sono tutti disgiunti e possiamo trovare che $ P(A \cup B) = P(E_1 \cup E_2\cup E_3)$:

$$
\begin{array}{}
P(A) = P(E_1 \cup E_3) =_{A_3} P(E_1) + P(E_3) \\[8pt]
P(B) = P(E_2 \cup E_3) =_{A_3} P(E_2) + P(E_3) \\[8pt]
P(E_3) = P(A \cap B) \\[8pt]
P(A \cup B) =  
\end{array}
$$

<!-- nombre -->

## Definizione di Probabilità

La *probabilità* come concetto generale è difficile da esprimere tramite una definizione matematica.

Principalmente sono state date 3 definizioni per il concetto, di cui si preferisce quella *assiomatica*.

### Definizione di Probabilità Classica

:::def
Dato un esperimento con un numero finito di esiti *equiprobabili*, racchiusi nello spazio campione $S$, e un evento $E \sub S$, si dice **probabilità di $E$**: 
$$
P(E)=\frac{n^{o}\text{ esiti contenuti in }E}{n^{o}\text{ esiti contenuti in }S}
=
\frac{n^o\text{ esiti favorevoli}}{n^o\text{ esiti totali}}
$$
cioè, il rapporto tra il numero di esiti che c
:::

La definizione classica è la più semplice concettualmente, tuttavia ha diverse restrizioni applicative sul numero degli esiti (che necessitano di essere enumerabili e finiti) e sulla loro probabilità (devono essere equiprobabili).

:::oss
Che questa definizione non catturi il concetto di probabilità in modo appropriato è evidente dal fatto che risulta circolare: la definizione di probabilità è ristretta per spazi campione dagli esiti *equiprobabili*, che è un concetto derivato dalla probabilità stessa.
:::

### Definizione di Probabilità Frequentista

:::def
Dato un esperimento e un evento $E \sub S$, dove $S$ è lo spazio campione associato all'esperimento. Si ripete l'esperimento $N$ volte (con $N >> 1$) in modo che ogni iterazione sia identica nei parametri e indipendente dalle altre; si definisce **probabilità di $E$**: 
$$
P(E)=\frac{n^{o}\text{ esperimenti con esito }E}{N}
$$
:::

La definizione frequentista è libera dal vincolo di equiprobabilità degli esiti, tuttavia permane la necessità che questi siano in numero finito e, inoltre, abbastanza grande da poter valutare la probabilità.

### Definizione di Probabilità Assiomatica

:::::::def
Dato uno spazio campione $S$, ad ogni evento $E \subset S$ si associa il numero reale $P(E)$, detto **probabilità di $E$**, tale che 
:::::ul
:::li
**$$ P(E) \in [0,1] $$**, cioè, la probabilità è compresa tra 1 e 0, estremi inclusi,
:::
:::li
**$$ P(S) = 1 $$**, cioè, la probabilità totale di tutti gli eventi in $S$ è 1,
:::
:::li
dati $E_1$, $E_2$ ecc... eventi disgiunti dello spazio campione, la probabilità dell'unione di tutti questi eventi è pari alla somma delle probabilità di ciascuno: 
$$ 
P(\bigcup_{j=1}^{n}) = \sum_{j=1}^{n} P(E_j) 
$$
:::::
:::::::

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

Concludiamo che
$$
P(E) = kp =_{B_1} k/n = \frac{n^o \text{ esiti di }E}{n^o \text{ esiti totali}} 
$$
:::
