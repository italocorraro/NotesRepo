---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Probabilità Condizionata'
metaTitle: 'Probabilità Condizionata'
description: ''
author: 'Italo Corraro'
order: 2
---

:::def
Dato uno spazio campione $S$, avente due eventi $A, B \in S$ con $P(B) \neq 0$, si dice **probabilità di $A$ condizionata da $B$**:

$$ 
P(A|B) = \frac{P(A \cap B )}{P(B)} 
$$
:::

:::eg
> Per un lancio di un Dado cubico, siano dati gli eventi:
> - $A$: uscita di un multiplo di 3 = $\{e_3,e_6\}$
> - $B$: uscita di un numero pari = $\{e_0,e_2,e_4,e_6\}$
> Cerchiamo la probabilità condizionata di A rispetto a B.

$$ 
P(A|B) 
= \frac{P(A \cap B ) }{P(B)} 
= \frac{1/6}{3/6}
= \frac1{3}
$$
:::

## Eventi Indipendenti

:::def
Dato uno spazio campione $S$, avente due eventi $A, B \in S$, si dicono **indipendenti** se 

$$
P(A \cap B) = P(A) \, P(B)  
$$
:::

:::eg
> Dato un mazzo di carte da poker, siano
> - $A$, l'evento di estrazione di un asso
> - $B$, l'evento di estrazione di una carta di picche
> Vogliamo trovare se i due eventi sono indipendenti.

Un mazzo di carte da poker ha 52 carte, di cui 4 assi, quindi:
$$
P(A) = \frac4{52} = \frac1{13} 
$$

Il mazzo si divide in 4 categorie di carte, tra cui picche:
$$
P(A) = \frac{13}{52} = \frac1{4} 
$$

Un mazzo ha un asso per ogni categoria di carte, quindi $A\cap B$ è l'evento di estrazione di un asso di picche, che è in unica copia nel mazzo; la probabilità di pescarlo è
$$
P(A\cap B) = \frac1{52}
$$

Vediamo infine che $A$ e $B$ sono indipendenti:
$$
P(A\cap B) = \frac1{52} = P(A)\,P(B)
$$

:::

:::def
Dato uno spazio campione $S$, avente tre eventi $A, B, C \in S$, si dicono indipendenti se

$$
\begin{cases}
P(A \cap B \cap C) = P(A) \cdot P(B) \cdot P(C) \\
P(A \cap B) = P(A) \cdot P(B) \\
P(A \cap C) = P(A) \cdot P(C) \\
P(B \cap C) = P(B) \cdot P(C)
\end{cases}
$$
:::

Per $n$ eventi, vanno considerate tutte le possibili intersezioni.

:::def
In generale, due o più eventi dello stesso spazio campione, si dicono indipendenti se la probabilità dell'intersezione di una loro qualsiasi combinazione, anche parziale, è pari al prodotto delle probablità dei rispettivi eventi della combinazione
:::

### Indipendenza dei Complementari
 
:::teorema
Dato uno spazio campione $S$, avente due eventi $A, B \in S$, se i due eventi sono indipendenti, allora anche $A$ e $B^C$ sono indipendenti tra loro. Lo stesso vale per  $A^C$ e $B$ e per $A^C$ e $B^C$.
:::

:::dim
Destrutturiamo l'evento $A$:
Ricordiamo che sia $A$ che $B$ fanno parte dello stesso spazio campione e che $B\cup B^C = S$, allora la somma delle intersezioni di $A$ con $B$ e $B^C$ ridarà $A$, ciò è equivalente a dire:
$$
\begin{aligned}
A &= S \cap A = \\
&\, \downarrow S = B \cup B^C  \\
&= (B \cup B^C) \cap A = \\
&= (A \cap B) \cup (A \cap B^C) 
\end{aligned}
$$
La probabilità:
$$
\begin{aligned}
P(A) &= P((A \cap B) \cup (A \cap B^C)) = \\
& \, \downarrow \text{poichè }A\text{ e }B\text{ sono indipendenti} \\
&= P(A \cap B) + P(A \cap B^C) \\
\end{aligned}
$$
:::

:::oss
La proprietà appena vista implica anche che
$$
P(A \cap B^C) = P(A) \setminus P(A \cap B) 
$$
:::

:::nb
Applicando la proprietà precedente, si dimostra anche che, se $A$ e $B$ sono indipendenti, $A$ e $B^C$ sono indipendenti, $A^C$ e $B$ sono indipendenti e $A^C$ e $B^C$ sono indipendenti
:::

:::def
Due eventi $A$ e $B$ si dicono *disgiunti* se $A \cap B = \emptyset$.
:::
:::th
A e B sono disgiunti e indipendenti se $P(A \cap B) = P(A) \cdot P(B) = 0 $,   
cioè, solo se uno dei due ha probabilità $0$.
:::

## Partizione di uno Spazio Campione

:::def
Sia dato uno spazio campione $S$, si dice **partizione** di $S$ un insieme di eventi $H_1, H_2, \ldots H_n \in S$ con $n \in \mathbb{N} \setminus \{0,1\}$ tali che
- l'unione restituisce $S$: $$\ \ \ S = \displaystyle\bigcup_{k=1}^n H_k $$,
- sono tutti disgiunti: $ H_i \cap H_j = \emptyset \ \forall i,j \in \mathbb{N} \text{ con } i \neq j $

In tal caso, gli eventi $H_k$ si dicono *ipotesi*.
:::

### Teorema delle Probabilità Totali

:::th
Dati uno spazio campione $S$ e una sua partizione in $n$ parti $\{H_1, H_2, \ldots H_n\}$ e un evento $E \in S$, allora

$$
P(E)  = \sum_{k=1}^n P(E|H_k) \, P(H_k)
$$

cioè, la probabilità di $E$ è pari alla sommatoria sulle ipotesi dei prodotti tra la probabilità di $E$ condizionato da un'ipotesi e la probabilità di quell'ipotesi.
:::
:::dim
Scriviamo la destrutturazione di $E$ secondo la partizione:
$$
\begin{aligned}
E &= (E \cap H_1) \cup (E \cap H_2) \cup \ldots \cup (E \cap H_n) = \\
&= \bigcup_{k=1}^n E\cap H_k
\end{aligned}
$$

quindi $\displaystyle P(E) = P \left(\,\bigcup_{k=1}^n E \cap H_k \, \right) $

per il terzo assioma, giungiamo infine alla conclusione: 
$$
P(E)  = \sum_{k=1}^n P(E \cap H_k)  = \sum_{k=1}^n P(E|H_k) \, P(H_k) 
$$
:::

:::eg
> Un esame clinico per una specifica malattia è efficace al $99\%$ nel rilevare la malattia se un individuo è malato; c'è la possibilità di falsi positivi (sani identificati come malati) con probabilità $1\%$ (le probabilità non sono collegate).
> L'incidenza della malattia nella popolazione è $0.5\%$, vogliamo trovare la probabilità di un individuo che si sottopone al test e riceve esito positivo.

Siano 
- $H_1$ l'evento di avere la malattia
- $H_2$ l'evento di non avere la malattia ($H_2^C = H_1$)
- $E$ l'evento in cui l'esame risulti positivo

quindi, secondo i dati:
- $P(E|H_1) = 0.99$
- $P(E|H_2) = 0.01$
- $P(H_1) = 0.005$
- $P(H_2) = 1 - 0.005$

Per il teorema delle probabilità totali:
$$
\begin{aligned}
P(E) &= P(E|H_1)\,P(H_1) + P(E|H_2)\,P(H_2) =\\
&= 0.99 \times 0.005 + 0.01 \times (1 - 0.005) = \\
&=0.0149
\end{aligned}
$$
:::

### Teorema di Bayes

:::th{di Bayes}
Dati uno spazio campione $S$ e una sua partizione in $n$ parti $\{H_1, H_2, \ldots H_n\}$ e un evento $E \in S$ con $P(E) \neq 0$, allora

$$ 
P(H_k|E) 
= \frac{P(E|H_k)P(H_k)}{P(E)}
= \frac{P(E|H_k)P(H_k)}{\sum_{j=1}^n P(E|H_j)P(H_j)}
$$

Questo teorema è detto anche *teorema delle probabilità a posteriori*.
:::

:::dim
Per definizione della probabilità condizionata:
$$
\begin{aligned}
P(H_k|E) &= \frac{P(H_k \cap E )}{P(E)} \\
P(E|H_k) &= \frac{P(E \cap H_k )}{P(H_k)} 
\end{aligned}
$$
allora
$$
P(H_k|E)P(E) =  P(E \cap H_k) = P(E|H_k)P(H_k) 
$$
da qui deriviamo il teorema:
$$
P(H_k|E) = \frac{P(E|H_k)P(H_k)}{P(E)}
$$

applicando la formula delle probabilità totali, otteniamo la seconda forma:
$$
P(H_k|E) = \frac{P(E|H_k)P(H_k)}{\sum_{j=1}^n P(E|H_j)P(H_j)}
$$
:::

:::::::eg
> Una compagnia di assicurazioni classifica i clienti in tre fasce:
> 1. basso rischio (probabilità di incidenti in un anno $5\%$)
> 2. medio rischio (probabilità $15\%$)
> 3. alto rischio (probabilità $30\%$) 
>
> Nella popolazione, $20\%$ degli individui sono a basso rischio, $50\%$ a medio e $30\%$ alto.
>
> 1. Vogliamo trovare la probabilità che un nuovo cliente non abbia incidenti nel primo anno di assicurazione.
> 2. Vogliamo trovare la probabilità che il cliente venga categorizzato come ad alto rischio se nel primo anno non ha avuto incidenti.

Siano
- $I$ l'evento di avere incidenti
- $I^C$ l'evento di non avere incidenti

1. $H_1$ di essere a basso rischio
2. $H_2$ di essere a medio rischio
3. $H_3$ di essere a alto rischio

Dunque,
- la probabilità non avere incidenti se si è a basso rischio è $P(I^C|H_1) = 0.95$
- la probabilità non avere incidenti se si è a medio rischio è $P(I^C|H_2) = 0.85$
- la probabilità non avere incidenti se si è a alto rischio è $P(I^C|H_3) = 0.7$

:::::ol
:::li
Usando il teorema delle probabilità toatali, ricaviamo che la probabilità di non avere incidenti, pesata rispetto al rischio, è 
$$
P(I^C) = P(I^C|H_1)P(H_1) + P(I^C|H_2)P(H_2) + P(I^C|H_3)P(H_3)
$$
:::
:::li
Per capire la probabilità che il cliente venga categorizzato come ad alto rischio se nel primo anno non ha avuto incidenti allora usiamo il teorema di Bayes:
$$
\begin{aligned}
P(H_3|I^C) 
&= \frac{P(I^C|H_3)P(H_3)}{P(I^C)}= \\[8pt]
&= \frac{0.7 \times 0.30 }{0.825} =\\[8pt] 
&= 0.25 
\end{aligned}
$$
:::::
:::::::


