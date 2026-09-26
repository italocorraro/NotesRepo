---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Variabili Casuali'
metaTitle: 'Variabili Casuali'
description: ''
author: 'Italo Corraro'
order: 4
---

:::def
Una *variabile casuale* è una variabile a valori reali che assume valori diversi in base ai risultati degli esperimenti a cui è associata.
:::

Si possono distinguere le variabili casuali in 
- *discreta* (come i numeri sulla faccia di un dado il lancio di una moneta),
- *continua* (come altezza, peso o reddito)
- *miste* definite su un intervallo continuo ma con valori discreti sparsi al di fuori

## Variabili Casuali Discrete

:::def
Dato un esperimento con un numero di esiti finito (o, al più, numerabile) è possibile associare ad esso una variabile casuale discreta $X \in \{x_1, x_2, \ldots x_n\} $
:::

### Funzione di Massa di Probabilità

Definiamo la funzione di massa di probabilità come una funzione

$$
p : \mathbb{R} \rightarrow [0,1] \ \ \  p(a) = P(X=a)
$$

1. $p(a)$ è una probabilità, quindi $0 \geq p(a) \leq 1$
2. $1 = P(S) = \sum_{k=1}^n P(X=x_k) = \sum_{k=1}^n p(x_k)$

### Funzione di Ripartizione di Probabilità

Anche detta di *distribuzione*

$$
F : \mathbb{R} \rightarrow [0,1] \ \ \  F(a) = P(X\leq a)
$$

1. $F(a)$ è una probabilità, quindi $0 \geq F(a) \leq 1$ $\forall a \in \mathbb{R}$
2. $lim_{a \to +\infty} F(a) = P(X \leq +\infty) = 1$
2. $lim_{a \to - \infty} F(a) = P(X \leq - \infty) = 0$
4. se $a,b \in \mathbb{R}$ con $a \leq b$ allora $F(a) \leq F(b)$