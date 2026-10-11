---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'TBD ' 
metaTitle: 'TBD'
description: ''
author: 'Italo Corraro'
order: 7
---

gg

:::eg
4 esperimenti con possibili esiti con reimmissione:
- $P(E_1) = 1/3$
- $P(E_2) = 1/4$
- $P(E_3) = 5/12$

Definiamo come $C_k = E_k$ non si verifica nei 4 esperimenti:

$$
\begin{aligned}
P(E_2, E_3 \text{ si verificano almeno una volta}) &= P(C_2^c \cap C_3^c) = \\
&= P((C_2 \cup C_3)^c) = \\
&= 1 - P(C_2 \cup C_3) = \\
&= 1 - (P(C_2) + P(C_3) - P(C_2 \cap C_3)) =\\
&= 1 - \left(\frac{3}{4}\right)^4 - \left(\frac{7}{12}\right)^4 + \left(\frac{1}{3}\right)^4
\end{aligned}
$$

Per $n$ ripetizioni, la probabilità di osservare almeno una volta $E_2$, $E_3$ sarà:

$$
1 - \left(\frac{3}{4}\right)^n - \left(\frac{7}{12}\right)^n + \left(\frac{1}{3}\right)^n
$$
:::

:::::eg

$X, Y \in \{-1,0,1\}$

$p(i,k) = c|i + k|$

Y\X | -1 | 0 | 1
-- | --- | --- | ---
-1 | 2c | c | 0
0 | c | 0 | c
1 | 0 | c | 2c

- Poichè p(i,k) = P(X=i,Y=k) \in [0,1] \to c \in [0,1] \cup c\in [0,1/2]
- $\sum \sum p(i,k) = 1 = 8c \Rightarrow c = \frac1{8}$

<!-- Sostituisci valori tabella ^
 -->

<!-- Somma righe e colonne ^ per le funzioni di massa marginali -->

:::oss
$X$ e $Y$ hanno la stessa funzione di massa di probabilità
:::

$$
E[X] = \sum i p(i) = -1 \times \frac38 + 0 \times\frac28 + 1 \times\frac38 = 0 \\[8pt]
E[Y] = E[X]
$$

Per verificare l'indipendenza è necessario verificare che $p(i,k)?= p_X(i)p_Y(k)$:

$$
(0,0) \Rightarrow p(0,0) \neq p_X(0)
$$

:::::


:::::eg

> Una moneta equilibrata viene lanciata 3 volte. Sia $X$ il numero di croci ($C$) e $Y$ il numero di testa ($T$) degli ultimi due lanci. Per $(X,Y)$ determinare le funzioni di massa di probabilità congiunta e marginali, l'indipendenza, $E[X]$, $E[Y]$, la probabilità che $(X + Y > 2)$ e $E[X + Y]$

- $X \in \{ 0, 1, 2 ,3 \}$
- $Y \in \{ 0, 1, 2 \}$

$Y$ \ $X$ | 0 | 1 | 2 | 3
--- | --- | --- | --- | ---
0 | 0 | 0 | 1/8 |  1/8
1 | 0 | 1/4 | 1/4 | 0
2 | 1/8  |  1/8 | 0 | 0

- p(3,0) = (\frac12)^3
- p(0,2) = (\frac12)^3

- $p(2,0) = P(T_1 \cap C_2 \cap C_3) = \frac18$
- $p(1,2) = P(C_1 \cap T_2 \cap T_3) = \frac18$
- $p(1,1) = P(T_1 \cap C_2 \cap T_3) P(T_1 \cap T_2 \cap C_3) =  P(T_1 \cap C_2 \cap T_3) + P(T_1 \cap T_2 \cap C_3)= \frac14 $
- $p(2,1) = P(C_1 \cap T_2 \cap C_3) P(C_1 \cap C_2 \cap T_3) =  P(C_1 \cap T_2 \cap C_3) + P(T_1 \cap T_2 \cap C_3) = \frac14$

<!--  Somma colonne per le funzioni di massa marginali -->

$E[X] = \sum_{k=0}^3 x_k p(X_k) = 0 \times \frac18 + 1 \times \frac38 + 2 \times \frac38 + 3 \times \frac18 = \frac32$
$E[Y] = \sum {k=0}^2 x_k p(X_k) = 0 \times \frac14 + 1 \times \frac12 + 2 \times \frac14 $

$E[X+Y] = E[X] + E[Y] = \frac52$

$P(X+Y > 2) = p(3,0) + p(3,1) + p(3,2) + p(2,1) +  = \frac12$

Per il teorema <!-- vedi lez. scorsa -->:
$(X,Y)$ variabili casuali discrete indipendenti $\RLarrow p(a,b) = p_X(a) p_Y(b) \ \forall a,b \in \mathbb{R}$

$p(0,0) = 0$, ma 
$p_X(0) p_Y(0) = \frac18 \times \frac14 \neq 0$
:::::

:::::eg
> Una segretaria deve inviare $n$ email diverse ad $n$ diversi indirizzi, decide di inviare ciascuna email facendo una scelta casuale dell'indirizzo.   
> Qual è il numero medio di email che arrivano all'indirizzo giusto?

Il numero di email che vanno all'indirizzo giusto è una variabile casuale discreta $Y$ con valori compresi tra $0$ e $n$; tuttavia il metodo migliore per risolvere il problema è assegnare una variabile casuale ad ogni email:
- sia $X_k$ la variabile casuale associata alla k-esima email tale per cui $
X = \begin{cases}
1 & \text{se è stata inviata correttamente}\\
0 & \text{altrimenti}
\end{cases}
$
- è una variabile di Benoulli: $
P_{X_n}(a) = 
\begin{cases}
1/n & a =1\\
n-1/n & a=0\\
0 & \text{altrimenti}
\end{cases}
$
per cui $E[X_k] = 0 \times \frac{n-1}{n} + 1 \times \frac1n = \frac1n$

Troviamo che $Y$ è $
Y = \sum X_k$, quindi $E[Y] = E\left[\sum{X_k}\right] = \sum E[X_k]$

:::::

:::::eg
$$
f(x,y) = 
\begin{cases}
k & \text{se } x \in [0,2] \text{ e } y \in [0,2] \\
0 & \text{altrove}
\end{cases}
$$
Proprietà di f:

1. $f(x,y) \geq 0 \ \forall x,y \in \mathbb{R} \Rightarrow k \geq 0$
2. $1 = \iint_{\mathbb{R}^2} f(x,y) \, dx \, dy = \int_0^2\int_0^2 k \, dx \, dy = k \int_0^2 [x]_0^2 \, dy = 2k \int_0^2 1 \, dy = 2k[y]_0^2 = 4k \Rightarrow k = \frac14$

Verifichiamo l'indipendenza:

$f(x,y) = f_x(x) f_y(y) \ \forall x,y \in R$
$$
f_x(x) = \int_{-\infty}^{+\infty} f(x,y) \, dy = 
\begin{cases}
\int_{-\infty}^0 0 \, dy + \int_0^2 \frac14 \, dy \int_2^{+\infty} 0 \, dy = \frac12
\int{infty} 0 \, dy & \text{se } x \in [0,2]
\end{cases}
$$
Si verifica che 
$$
f_y(y) = 
\begin{cases}
\frac12 & \text{se } y \in [0,2] \\
0 & \text{altrove}
\end{cases}
$$
Vediamo che sono indipendenti
:::::

> Sia $Z = \max(X,Y)$, come calcolare $F_Z(a)$?

F_Z(a) = P(Z \leq a) = P(max(X,Y) \leq a) \ifandonlyif P(X \leq a, Y \leq a)
