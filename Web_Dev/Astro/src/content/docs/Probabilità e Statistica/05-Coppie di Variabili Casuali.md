---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Coppie di Variabili Casuali'
metaTitle: 'Coppie di Variabili Casuali'
description: ''
author: 'Italo Corraro'
order: 5
---

## Coppia di Variabili Casuali Discrete

:::def
Due variabili casuali discrete $X$ e $Y$ con $X \in \{x_1, x_2, \ldots x_n\}$ e $Y \in \{y_1, y_2, \ldots y_m\}$ associate ad uno stesso esperimento, sono dette **coppia di variabili casuali discrete** $(X, Y)$.
:::

### Funzione di Massa di Probabilità Congiunta

:::def
Definiamo **funzione di massa di probabilità congiunta** della coppia di variabili casuali discrete $(X,Y)$, una funzione del tipo $p : \mathbb{R}^2 \to [0,1]$, che associa ad ogni combinazione dei loro valori la probabilità che formino quella combinazione:

$$
p(a,b) = P(X=a, Y=b) = P((X=a)\cap(Y=b))
$$
:::

Proprietà:
1. $p(a,b) \in [0,1]$
2. $\displaystyle\sum_{i=1}^n \sum_{j=1}^m p(x_i,y_j) = 1$

### Funzione di Massa Marginale

:::def
Definiamo **funzione di massa di probabilità marginale** di $X$ della coppia di variabili casuali discrete $(X,Y)$, una funzione di tipo $p_X : \mathbb{R} \to [0,1]$, che associa ad ogni valore assunto da $X$ la somma delle probabilità di tutte le combinazioni della coppia in cui $X$ assume tale valore:
$$
p_X(a) = P(X=a) = \sum_{j=1}^m p(a,y_j)
$$

Analogamente per $Y$:
$$
p_Y(b) = P(Y=b) = \sum_{i=1}^n p(x_i,b)
$$
:::


:::::eg
> Data una scatola contenente 3 palline numerate da 1 a 3; si estrae una pallina con reimmissione per 3 volte:
>
> - $X\in \{1,2,3\}$: è il primo numero estratto 
> - $Y\in \{0,1,2,3\}$: è il numero di palline 3 estratte 

Costruiamo la tabella delle probabilità della coppia:

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

### Funzione di Ripartizione di Probabilità Congiunta

:::def
Chiamiamo **funzione di ripartizione di probabilità congiunta** *della coppia di variabili casuali discrete $(X,Y)$* una funzione di tipo $F : \mathbb{R}^2 \to [0,1]$, definita come
$$
F(a,b) = P(X \leq a, Y \leq b) 
$$
dove la virgola indica un'intersezione.
:::

Proprietà:
1. $F(a,b) \in [0,1]$
2. $\displaystyle\lim_{a \to -\infty}\lim_{b \to -\infty} F(a,b) = 0$
3. $\displaystyle\lim_{a \to +\infty}\lim_{b \to +\infty} F(a,b) = 1$

### Funzione di Ripartizione Marginale

:::def
Chiamiamo **funzione di ripartizione di probabilità marginale** di $X$ della coppia di variabili casuali discrete $(X,Y)$ una funzione di tipo $F : \mathbb{R} \to [0,1]$, definita come
$$
F_X(a) = P(X \leq a) = P(X \leq a, Y \leq +\infty) = F(a,+\infty)
$$

Analogamente per $Y$:
$$
F_Y(b) = P(Y \leq b) = P(X \leq +\infty, Y \leq b) = F(+\infty, b)
$$
:::

## Coppia di Variabili Casuali Congiuntamente Continue

:::def
Due variabili casuali continue $X$ e $Y$, si dicono **congiuntamente continue** se ad esse è associata una funzione di tipo $f : \mathbb{R}^2 \to \mathbb{R}^+ \cup \{0\}$ tale che $\forall \mathcal{D} \subset \mathbb{R}^2$ si ha

$$
P((X,Y)\in \mathcal{D}) = \iint_\mathcal{D} f(x,y) \,dx\,dy
$$

dove $f(x,y)$ è detta **funzione di densità di probabilità congiunta**.
:::

Proprietà:
1. $f(x,y) \geq 0 \ \forall x,y \in \mathbb{R}$
2. $1 = P((X,Y) \in \mathbb{R}) = \iint_{\mathbb{R}^2} f(x,y) \, dx\,dy$

### Funzione di Ripartizione Congiunta

:::def
Chiamiamo **funzione di ripartizione di probabilità congiunta** *della coppia di variabili casuali congiuntamente continue $(X,Y)$* una funzione di tipo $F : \mathbb{R}^2 \to [0,1]$ definita come 
$$
F(a,b) = P(X\leq a, Y\leq b) = \int_{-\infty}^a \left(\int_{-\infty}^b f(x,y) \, dx \right) \, dy 
$$
:::

Troviamo anche lo stesso legame con la funzione di densità che sia aveva nel caso di variabile singola:
$$
\frac{\partial^2 F(a,b)}{\partial a\, \partial b} = f(a,b) 
$$

<!-- :::::eg
Prendiamo una coppia congiuntamente continua $(X,Y)$ con funzione di densità di probabilità congiunta

$$
f(x,y) = 
\begin{cases}
ce^{-x-2y} & x \geq 0 \cap y \geq 0 \\
0 & \text{altrove}
\end{cases}
$$

Calcoliamo 
$$
\begin{aligned}
f_x(a) &=  \int_{-\infty}^{+\infty} f(a,y) \, dy = \\

&= 
\begin{cases}
\int 0 \, dy & se a \lt 0 \\
\int ce^{-x-2y} \, dy &  a \geq 0
\end{cases}
= \\
&= e^-a [-e^-2y]_0^{+\infty} = e ^-a
\end{aligned}
$$
$$
F_x(a) = lim_{b \to +\infty}
\begin{cases}
(1 - e^-a)(1 - e^-b)  & x \geq 0 \cap y \geq 0 \\
0 & altrove
\end{cases}
$$
::::: -->

### Funzioni di Ripartizione di Probabilità Marginale

:::def
Chiamiamo **funzione di ripartizione di probabilità marginale** di $X$ della coppia di variabili casuali congiuntamente continue $(X,Y)$ una funzione di tipo $F : \mathbb{R} \to [0,1]$, definita come

$$
\begin{aligned}
F_X(a) &= P(X \leq a) =\\
&= P(X \leq a, Y \leq +\infty) = \\
&= F(a, +\infty)  =\\
&= \int_{-\infty}^a \left(\int_{-\infty}^{+\infty} f(x,y) \, dy \right) dx
\end{aligned}
$$

Analogamente per $Y$:
$$
\begin{aligned}
F_Y(b) &= P(Y \leq b) =\\
&= P(X \leq +\infty, Y \leq b) = \\
&= F( +\infty, b)  =\\
&=\int_{-\infty}^b \left(\int_{-\infty}^{+\infty}f(x,y) \, dx \right) dy
\end{aligned}
$$
:::

### Funzione di Densità di Probabilità Marginale

:::def
Chiamiamo **funzione di densità di probabilità marginale** di $X$ della coppia di variabili casuali congiuntamente continua $(X,Y)$ una funzione del tipo $f : \mathbb{R}\to[0,1]$ definita come
$$
\begin{aligned}
f_X(a) &= \frac{\partial F_X(a)}{\partial a} 
\\[12pts]
&=
\frac{\partial}{\partial{a}} \int_{-\infty}^{+\infty} \left(\int_{-\infty}^a f(x,y) \, dx \right) \, dy  =
\\[12pts]
&= \int_{-\infty}^{+\infty} f(a,y) \, dy
\end{aligned}
$$

Analogamente per $Y$:
$$
\begin{aligned}
f_Y(b) &= \frac{\partial F_Y(b)}{\partial b} =\\[12pts]
&= \int_{-\infty}^{+\infty} f(x,b) \, dx
\end{aligned}
$$
:::

## Coppia di Variabili Casuali Indipendenti

:::def
Due variabili casuali $X$,$Y$ si dicono indipendenti se $\forall \mathcal{A}, \mathcal{B} \subset \mathbb{R}$, la probabilità della loro intersezione è uguale al prodotto delle loro probabilità:
$$
P( X \in \mathcal{A}, Y \in \mathcal{B}) = P(X \in \mathcal{A})P(Y \in \mathcal{B})
$$
:::
:::oss
La definizione enunciata è di difficile applicazione pratica
:::

:::th
*Condizione necessaria e sufficiente affinchè due variabili casuali $X$ e $Y$ siano indipendenti* è che 
1. $F(a,b) = F_X(a)F_Y(b) \ \forall a,b \in \mathbb{R}$

oppure, se $X$ e $Y$ sono discrete

2. $p(a,b) = p_X(a) p_Y(b) \ \forall a,b \in \mathbb{R}$

oppure, se $X$ e $Y$ sono congiuntamente continue

3. $f(x,y) = f_X(x) f_Y(y) \ \forall x,y \in \mathbb{R}$
:::

:::eg
Se $X$ e $Y$ sono congiuntamente continue

$$
f(x,y) = 
\begin{cases}
2e^{-x-2y} & x \geq 0 \cap y \geq 0 \\
0 & \text{altrove}
\end{cases}
$$
$$
f_X(a) = 
\begin{cases}
e^{-x} & x \geq 0 \\
0 & \text{altrove}
\end{cases}
$$
$$
f_Y(b) = 
\begin{cases}
2e^{-2y} &  y \geq 0 \\
0 & \text{altrove}
\end{cases}
$$

Troviamo che $X$ e $Y$ sono indipendenti perché $f(a,b) = f_X(a)f_Y(b) $

:::

:::eg
Riprendiamo da un esempio precedente per la [funzione di massa marginale](#funzione-di-massa-marginale):

Y\X | 1 |2 | 3 | $p_Y$
--- | --- | --- | --- | ---
0 | $4/3^3$ | $4/3^3$ | $0$ | $8/27$
1 | $4/3^3$ | $4/3^3$ | $4/3^3$| $12/27$ 
2 | $(1/3)^3$ | $(1/3)^3$ | $4/3^3$| $6/27$
3 | $0$ | $0$ | $(1/3)^3$| $1/27$
--- | --- | --- | ---|
$p_X$ | $1/3$ | $1/3$ | $1/3$|

Possiamo verificare immediatamente che non sono indipendenti:

se lo fossero dovrebbe essere $p(x_i,y_j) = p_Y(x_i)p_Y(y_j) $

ma troviamo $p(2,3) = 0$ e $p_X(2)p_Y(3) = 1/3 * 1/27 \neq 0$
:::

## Vettore di Variabili Casuali

Tutte le definizioni e teoremi introdotti per coppie di variabili casuali si possono estendere a vettori di $n$ variabili casuali.

