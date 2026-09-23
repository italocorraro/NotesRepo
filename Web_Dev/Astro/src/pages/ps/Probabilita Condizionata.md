---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Probabilità Condizionata'
metaTitle: 'Probabilità Condizionata'
description: ''
author: 'Italo Corraro'
order: 3
---

:::def
Dato uno spazio campione $S$, avente due eventi $A, B \in S$ con $P(B) \neq 0$, si dice *probabilità condizionata* di $A$ condizionato da $B$:

$$ P(A|B) = \frac{P(A \cap B ) }{P(B)} $$
:::

:::eg
Lancio di un Dado cubico
- $A$: uscita di un multiplo di 3 = $\{e_3,e_6\}$
- $B$: uscita di un numero pari = $\{e_0,e_2,e_4,e_6\}$

Cerchiamo la probabilità condizionata di A rispetto a B:

$$ 
P(A|B) 
= \frac{P(A \cap B ) }{P(B)} 
= \frac{1/6}{3/6}
= \frac1{3}
$$
:::

## Eventi Indipendenti

:::def
Dato uno spazio campione $S$, avente due eventi $A, B \in S$, si dicono indipendenti se 

$$P(A \cap B) = P(A) \cdot P(B)  $$
:::

:::eg
Mazzo di carte da poker
- $A$ è l'evento di estrazione di un asso
- $B$ è l'evento di estrazione di una carta di picche

Vogliamo trovare se i due eventi sono indipendenti:

Un mazzo di carte da poker ha 52 carte, di cui 4 assi:
$$P(A) = \frac4{52} = \frac1{13} $$

Il mazzo si divide in 4 categorie di carte, tra cui picche:
$$P(A) = \frac{13}{52} = \frac1{4} $$



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

Per $n$ eventi, vanno considerate tutte le possibili intersezioni

:::

### Indipendenza dei Complementari
 
Dato uno spazio campione $S$, avente due eventi $A, B \in S$, se i due eventi sono indipendenti, allora anche $A$ e $B^c$ sono indipendenti.

:::dim
$$A=(A \cap B) \cup (A \cap B^c) $$
$$P(A)=P((A \cap B) \cup (A \cap B^c)) = \\
= P(A \cap B) + P(A \cap B^c) \\
\text{poichè sono indipendenti A e B} \\
 P(A \cap B^c) = P(A) - P(A \cap B)
$$
:::
:::nb
Applicando la proprietà precedente, si dimostra che, se $A$ e $B$ sono indipendenti, $A$ e $B^c$ sono indipendenti, $A^c$ e $B$ sono indipendenti e $A^c$ e $B^c$ sono indipendenti
:::

Due eventi $A$ e $B$ si dicono *disgiunti* se $A \cap B = \emptyset$

A e B sono disgiunti e indipendenti se $P(A \cap B) = P(A) \cdot P(B) = 0 $

In pratica solo se uno dei due ha probabilità $0$.

## Partizione di uno Spazio Campione

:::def
Sia dato uno spazio campione $S$, si dice partizione di $S$ un insieme di eventi $H_1, H_2 H_n \in S$ tali che 
- l'unione restituisce $S$: $ \bigcup_{k=1}^n H_k = S $
- tutti disgiunti $ H_i \cap H_j = \emptyset \text{  } \forall i,j \in \mathbb{N} \text{ con } i \neq j $

In tal caso $H$ si dicono *ipotesi*.

:::

### Teorema delle Probabilità Totali

Dati uno spazio campione $S$ e una sua partizione in $n$ parti $\{H_1, H_2, \ldots ,H_n\}$ e un evento $E \in S$, allora

$$P(E)  = \sum_{k=1}^n P(E|H_k) \cdot H_k$$

:::dim
Scriviamo $E = (E \cap H_1) \cup (E \cap H_2) \cup \ldots \cup (E \cap H_n)$

quindi $P(E) = P(\bigcup_{k=1}^n (E \cap H_k)) $

per il terzo assioma giungiamo infine alla conclusione $P(E)  = \sum_{k=1}^n P(E \cap H_k)  = \sum_{k=1}^n P(E|H_k) \cdot H_k $
:::

:::eg
Un esame clinico per una specifica malattia è efficace al $99\%$ nel rilevare la malattia se un individuo è malato; c'è la possibilità di falsi positivi (sani identificati come malati) con probabilità $1\%$ (le probabilità non sono collegate).

Siano 
- $H_1$ l'evento di avere la malattia
- $H_2$ non avere la malattia ($H_2^c = H_1$)

quindi
- $P(E|H_1) = 0.99$
- $P(E|H_2) = 0.01$

L'incidenza della malattia nella popolazione è $0.5\%$, vogliamo trovare la probabilità di un individuo che si sottopone al test e riceve esito positivo.



$P(H_1) = 0.005$, quindi $P(H_2) = 1 - P(H_1) = 0.995$



$$P(E) = P(E|H_1)P(H_1) + P(E|H_2)P(H_2)$$


:::

## Teorema di Bayes

Dati uno spazio campione $S$ e una sua partizione in $n$ parti $\{H_1, H_2, \ldots ,H_n\}$ e un evento $E \in S$ con $P(E) \neq 0$, 

$$ P(H_k|E) 
= \frac{P(E|H_k)P(H_k)}{P(E)}
= \frac{P(E|H_k)P(H_k)}{\sum_{j=1}^n P(E|H_j)P(H_j)}
$$

Questo teorema è detto anche *teorema delle probabilità a posteriori*.

:::dim

$P(H_k|E)P(E) =  P(E \cap H_k) = P(E|H_k)P(H_k) $

$$
P(H_k|E) = \frac{P(E|H_k)P(H_k)}{P(E)} = \\
\text{applichiamo la formula delle probabilità totali:} \\
= \frac{P(E|H_k)P(H_k)}{\sum_{j=1}^n P(E|H_j)P(H_j)}
$$
:::

:::eg
Una compagnia di assicurazioni classifica i clienti in tre fasce:
1. basso rischio (probabilità di incidenti in un anno $5\%$)
1. medio rischio (probabilità di incidenti in un anno $15\%$)
1. alto rischio (probabilità di incidenti in un anno $30\%$) 

Nella popolazione, $20\%$ degli individui sono a basso rischio, $50\%$ a medio e $30\%$ alto.

Vogliamo trovare la probabilità che un nuovo cliente non abbia incidenti nel primo anno di assicurazione.

- $I$ evento di avere incidenti
- $I^c$ evento di non avere incidenti

- $H_1$ di essere a basso rischio
- $H_2$ di essere a medio rischio
- $H_3$ di essere a alto rischio

- la probabilità non avere incidenti se si è a basso rischio è $P(I^c|H_1) = 0.95$
- la probabilità non avere incidenti se si è a medio rischio è $P(I^c|H_2) = 0.85$
- la probabilità non avere incidenti se si è a alto rischio è $P(I^c|H_3) = 0.7$

La probabilità di non avere incidenti, pesata rispetto al rischio è 
$$
P(I^c) = P(I^c|H_1)P(H_1) + P(I^c|H_2)P(H_2) + P(I^c|H_3)P(H_3)
$$

Vogliamo trovare la probabilità che il cliente venga categorizzato come ad alto rischio se nel primo anno non ha avuto incidenti.
$$
\begin{aligned}
P(H_3|I^c) 
&= \frac{P(I^c|H_3)P(H_3)}{P(I^c)} \\[8pt]
&= \frac{0.7 \times 0.30 }{0.825} \\[8pt] &= 0.25 
\end{aligned}
$$

:::


