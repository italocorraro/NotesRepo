---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Coppie di Variabili Casuali'
metaTitle: 'Coppie di Variabili Casuali'
description: ''
author: 'Italo Corraro'
order: 5
---

:::def
Due variabili casuali $X$ e $Y$ con $X \in \{x_1, x_2, \ldots x_n\}$ e $Y \in \{y_1, y_2, \ldots y_m\}$ associate ad uno stesso esperimento, sono dette *coppia di variabili casuali* $(X, Y)$.
:::

## Funzione di Massa di Probabilità Congiunta

$p : \mathbb{R}^2 \to [0,1]$

$p(a,b) = P(X=a, Y=b) $

dove la virgola indica una intersezione, perché contemporaneamente devono essere $X=a$ e $Y=b$

Proprietà
1. $p(a,b) \in [0,1]$
2. $\sum_{i=1}^n \sum_{j=1}^m p(x_i,y_j) = 1$

### Funzione di Massa Marginale

$$
p_X(a) = P(X=a) = \sum_{j=1}^m p(a,y_j) \\
p_Y(b) = P(Y=b) = \sum_{i=1}^n p(x_i,b)
$$

:::::eg
Scatola contenente 3 palline numerate da 1 a 3;
estrazione di una pallina con reimmissione. Esperimento ripetuto 3 volte:

- $X\in \{1,2,3\}$: è il primo numero estratto 
- $Y\in \{0,1,2,3\}$: è il numero di palline 3 estratte 


Y\X | 1 |2 | 3
--- | --- | --- | ---
0 | $4/3^3$ | $4/3^3$ | 0
1 | $4/3^3$ | $4/3^3$ | $4/3^3$
2 | $(1/3)^3$ | $(1/3)^3$ | $4/3^3$
3 | 0 | 0 | $(1/3)^3$

- $p(1,0) = 1/3 * 2/3 *2/3$
- $p(1,1) = 1/3 * (1/3 *2/3 + 2/3 * 1/3) = 4/3^3$
- $p(1,2) = 1/3 * 1/3 *1/3$
- $p(3,2) = 1/3 * (1/3 *2/3 + 2/3 * 1/3) $

:::::

## Funzione di Ripartizione di Probabilità Congiunta

Si definisce funzione di ripartizione congiunta della coppia di variabili casuali discrete 

f : R^2 \to [0,1]
F(a,b) = P(X \leq a, Y \leq b) dove la virgola ndica un'intersezione

1. $F(a,b) \in [0,1]$
2. $\lim_{a \to -\infty}\lim_{b \to -\infty} F(a,b) = 0$
3. $\lim_{a \to +\infty}\lim_{b \to +\infty} F(a,b) = 1$

### Funzione di Ripartizione Marginale

- $F_X(a) = P(X \leq a) = P(X \leq a, Y \leq +\infty) = F(a,+\infty)$
- $F_Y(b) = P(Y \leq b) = P(X \leq +\infty, Y \leq b) = F(+\infty, b)$

## Coppia di Variabili Casuali Congiuntamente Continue

O variabili casuali doppie congiuntamente continue

:::def
Due variabili casuali continue $X$ e $Y$, si dicono congiuntamente continue se ad esse è associata una funzione $f : \mathbb{R}^2 \to \mathbb{R}^+ \cup \{0\}$ tale che $\forall D \subset \mathbb{R}^2$

$$
P((X,Y)\in D) = \iint_D f(x,y) \, dxdy
$$

dove f(x,y) è detta funzione di densità di probabilità congiunta.
:::

Proprietà:
1. $f(x,y) \geq 0 \ \forall x,y \in R$
2. $1 = P((X,Y) \in R) = \iint_{R^2} f(x,y) \, dxdy$

## Funzione di Ripartizione Congiunta

Date X e Y variabili casuali congiuntamente continue, allora 
$$
F(a,b) = P(X\leq a, Y\leq b) = \int_{-\infty}^b \left(\int_{-\infty}^a f(x,y) \, dx \right) \, dy 
$$
quindi anche 
$$
\frac{\partial^2 F(a,b)}{\partial a \partial b} = f(a,b) 
$$

:::::eg
Prendiamo una coppia congiuntamente continua (X,Y) con funzione di densità di probabilità congiunta

$$
f(x,y) = 
\begin{cases}
ce^{-x-2y} & x \geq 0 \cap y \geq 0 \\
0 & altrove
\end{cases}
$$
$$
\begin{aligned}
f_x(a) =  \int_{-\infty}^{+\infty} f(a,y) \, dy = \\

= 
\begin{cases}
\int 0 \, dy & se a \lt 0 \\
\int ce^{-x-2y} \, dy &  a \geq 0
\end{cases}
= \\
= e^-a [-e^-2y]_0^{+\infty} = e ^-a
\end{aligned}
$$
$$
F_x(a) = lim_{b \to +\infty}
\begin{cases}
(1 - e^-a)(1 - e^-b)  & x \geq 0 \cap y \geq 0 \\
0 & altrove
\end{cases}
$$
:::::

### Funzioni di Ripartizione di Probabilità Marginale

$$
\begin{aligned}
F_x(a) &= P(X \leq a) = P(X \leq a, Y \leq +\infty) = \\
= F(a, +\infty) &= P(X\leq a, Y \leq +\infty) = \int_{-\infty}^{+\infty} \left(\int_{-\infty}^a f(x,y) \, dx \right) \, dy 
\end{aligned}
$$

Analogo per Y

### Funzione di Densità di Probabilità Marginale

$$
\begin{aligned}
f_x(a) &= \frac{\partial F_x(a)}{\partial a} 
\\[12pts]
&=
\frac{\partial}{\partial{a}} \int_{-\infty}^{+\infty} \left(\int_{-\infty}^a f(x,y) \, dx \right) \, dy  =
\\[12pts]
&= \int_{-\infty}^{+\infty} f(a,y) \, dy
\end{aligned}
$$

## Coppia 
Due variabili casuali $X$,$Y$ si dicono indipendenti se $\forall A, B \subset \mathbb{R}$, la probabilità della loro intersezione è uguale al prodotto delle loro probabilità:
$$
P( X \in A, Y \in B) = P(X \in A)P(Y \in B)
$$

:::nb 
La definizione enunciata è di difficile applicazione pratica
:::

:::th
Condizione necessaria e sufficiente affinchè due variabili casuali $X$ e $Y$ siano indipendenti è che 
1. $F(a,b) = F_X(a)F_Y(b) \ \forall a,b \in R$

oppure se X e Y sono discrete

2. $p(a,b) = p_X(a) p_Y(b) \ \forall a,b \in R$

oppure, se Xe Y sono congiuntamente continue

3. $f(x,y) = f_X(x) f_Y(y) \ \forall x,y in R$
:::

:::eg
Se X e Y sono congiuntamente continue

$$
f(x,y) = 
\begin{cases}
2e^{-x-2y} & x \geq 0 \cap y \geq 0 \\
0 & altrove
\end{cases}
$$
$$
f_x(a) = 
\begin{cases}
e^{-x} & x \geq 0 \\
0 & altrove
\end{cases}
$$
$$
f_y(b) = 
\begin{cases}
2e^{-2y} &  y \geq 0 \\
0 & altrove
\end{cases}
$$

Troviamo che x e y sono indipendenti perché $f(a,b) = f_x(a)f_y(b) $

:::

:::eg
Riprendiamo da un esempio precedente in funzione-di-massa-marginale

Y\X | 1 |2 | 3 | p_y
--- | --- | --- | --- | ---
0 | $4/3^3$ | $4/3^3$ | 0 | 8/27
1 | $4/3^3$ | $4/3^3$ | $4/3^3$| 12/27 
2 | $(1/3)^3$ | $(1/3)^3$ | $4/3^3$| 6/27
3 | 0 | 0 | $(1/3)^3$| 1/27
--- | --- | --- | ---|
p_x | 1/3 | 1/3 | 1/3|

Possiamo verificare immediatamente che non sono indipendenti:

se lo fossero dovrebbe essere $p(x_i,y_j) = p_x(x_i)p_y(y_j) $

ma troviamo $p(2,3) = 0$ e $p_x(2)p_y(3) = 1/3 * 1/27 \neq 0$
:::

## Vettore di Variabili Casuali

Tutte le definizioni e teoremi introdotti per coppie di variabili casuali si possono estendere a vettori di $n$ variabili casuali.

