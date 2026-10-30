---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Esercizi Vari ' 
metaTitle: 'Esercizi Vari'
description: ''
author: 'Italo Corraro'
order: 70
---

## 09/10/26 (foglio ?)

### ES ??
4 esperimenti con possibili esiti con reimmissione:
- $P(E_1) = 1/3$
- $P(E_2) = 1/4$
- $P(E_3) = 5/12$

Definiamo come $C_k = E_k$ non si verifica nei 4 esperimenti:

$$
\begin{aligned}
P(E_2, E_3 \text{ si verificano almeno una volta}) &= P(C_2^C \cap C_3^C) = \\
&= P((C_2 \cup C_3)^C) = \\
&= 1 - P(C_2 \cup C_3) = \\
&= 1 - (P(C_2) + P(C_3) - P(C_2 \cap C_3)) =\\
&= 1 - \left(\frac{3}{4}\right)^4 - \left(\frac{7}{12}\right)^4 + \left(\frac{1}{3}\right)^4
\end{aligned}
$$

Per $n$ ripetizioni, la probabilità di osservare almeno una volta $E_2$, $E_3$ sarà:

$$
1 - \left(\frac{3}{4}\right)^n - \left(\frac{7}{12}\right)^n + \left(\frac{1}{3}\right)^n
$$

## ES
$X, Y \in \{-1,0,1\}$

$p(i,k) = c|i + k|$

Y\X | -1 | 0 | 1
-- | --- | --- | ---
-1 | 2c | c | 0
0 | c | 0 | c
1 | 0 | c | 2c

- poiché p(i,k) = P(X=i,Y=k) \in [0,1] \to c \in [0,1] \cup c\in [0,1/2]
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



## ES

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
$(X,Y)$ variabili casuali discrete indipendenti $\iff p(a,b) = p_X(a) p_Y(b) \ \forall a,b \in \mathbb{R}$

$p(0,0) = 0$, ma 
$p_X(0) p_Y(0) = \frac18 \times \frac14 \neq 0$

### ES
> Una segretaria deve inviare $n$ email diverse ad $n$ diversi indirizzi, decide di inviare ciascuna email facendo una scelta casuale dell'indirizzo.   
> Qual è il numero medio di email che arrivano all'indirizzo giusto?

Il numero di email che vanno all'indirizzo giusto è una variabile casuale discreta $Y$ con valori compresi tra $0$ e $n$; tuttavia il metodo migliore per risolvere il problema è assegnare una variabile casuale ad ogni email:
- sia $X_k$ la variabile casuale associata alla k-esima email tale per cui $
X = \begin{cases}
1 & \text{se è stata inviata correttamente}\\
0 & \text{altrimenti}
\end{cases}
$
- è una variabile di Benoulli: 
$$
P_{X_n}(a) = 
\begin{cases}
1/n & a =1\\
n-1/n & a=0\\
0 & \text{altrimenti}
\end{cases}
$$
per cui $E[X_k] = 0 \times \frac{n-1}{n} + 1 \times \frac1n = \frac1n$

Troviamo che $Y$ è $
Y = \sum X_k$, quindi $E[Y] = E\left[\sum{X_k}\right] = \sum E[X_k]$


### ES
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


### 

> Sia $Z = \max(X,Y)$, come calcolare $F_Z(a)$?
$$
F_Z(a) = P(Z \leq a) = P(max(X,Y) \leq a) \Leftrightarrow P(X \leq a, Y \leq a)
$$

## 13/10/26 

### ES 6 (foglio 6)

Sia H_1 l'evento piove e H_2 l'evento "non piove"

P(H_1) = 3/10
P(H_2) = 7/10

trovare P(F)

Sia F l'evento il sistema funziona
- P(F|H_1) funziona se piove  = P((tutti i 6 componenti funzionino \cup 5 componenti funzionano)|H_1) = 
{A3}= P(tutti i 6 componenti funzionano|H_1) + P(5 componenti funzionano|H_1) =
(2/5)^6 + 6 \times ((2/5)^5 * 3/5)_{uno non funziona, 5 sì; 6 possibili combinazioni}
= 4 * (2/5)^5

- P(F|H_2) funziona se non piove  = P((tutti i 6 componenti funzionino \cup 5 componenti funzionano)|H_2) = ... =
(4/5)^6 + 6 \times ((4/5)^5 * 1/5) = 2 * (4/5)^5


P(F) = P(F|H_1)P(H_1) + P(F|H_2)P(H_2)
= <!-- calcolo -->



P(H_1|F) {th di Bayes}{=} = {P(F|H_1)P(H_1)}{P(F)} = <!-- calcolo -->



<!-- link A3 Assioma di K. 3 -->


### ES 1 (foglio 4)

f(x,y) =
{cases}
k se x^2 + y^2 \leq R
0 altrimenti

1. poiché f(x,y) \geq 0, allora k \geq \ \forall x,y \in R
2. \iint_{R^2} f(x,y) \, dx \, dy = 1, allora è necessario che
$$
\begin{aligned}
1 &= \underset{{\text{cerchio di raggio R e centro nell'origine}}}{\iint} k dx dy =\\
&= k \iint 1 \cdot dx dy =
&= k \cdot \pi R^2
\end{aligned}
$$
, quindi $k = 1{\pi R^2}$


P(\sqrt{X^2 + Y^2} \leq a) = 
{cases}
? se a \gt 0
0 se a \lt 0

P(\sqrt{X^2 + Y^2} \leq a) = P((X,Y) \in cerchio di raggio a e centro nell'origine)=
_{per def di probabilità di vc congiuntamente continue} = \iint_{cerchio} f(x,y) \, dx \, dy

Consideriamo 2 casi:

1. se a \gt R, allora P((X,Y) \in {cerchio di raggio a})= P((X,Y) \in {cerchio di raggio R}) perché il cerchio di raggio a contiene quello di raggio R
2. se a \lt R, allora P((X,Y) \in {cerchio di raggio a}) = \iint_{cerchio di raggio a} 1/{\piR^2} dx dy = {\pi a^2} / {\pi R^2} = a^2/R^2

> Vogliamo la f di massa marginale

f_X(x) = 
{cases}
1/{\piR^2} se x^2 + y^2 \leq R^2
0 altrimenti
$$
f_X(x) = 
\begin{cases}
\int_{-\sqrt{R^2 - x^2}}^{\sqrt{R^2 - x^2}} \frac1{\pi R^2} \,dy & \text{se } |x| \leq R \\
0 & \text{se } |x|> R
\end{cases}
$$
<!-- analogo per Y -->

:::oss
$f(x,y) \neq f_X(x) \cdot f_Y(y) \Rightarrow X$ e $Y$ sono dipendenti
:::


## Es 2 (foglio 4)

$E[XY] = E[X]E[Y] \Rightarrow Cov(X,Y) = 0$


### Es 7 (foglio 5)

$$
f(x) = 
\begin{cases}
k(x^2+x) & se x\in[0,1]\\
0 & altrove
\end{cases}
$$

$$
f(x)\geq 0 \forall x\in\mathbb{R} \Rightarrow k\geq0
$$
$$
1 = \int_{-\infty}^{+\infty} f(x)\,dx =\\
= ... = k\frac56 => k=\frac65
$$

$$
E[X] = \int_{}^{}xf(x)\,dx = \\
= \frac65 \int_{0}^{1}(x^3+x^2)\,dx = ...= \frac7{10}
$$

$$
E[X^2] = ... = \frac{27}{50}
$$

$$
Var(X) = ... = \frac{27}{50} - (\frac7{10})^2
$$

$$
Y= 4X^2 \\

E[Y] = E[4X^2] = 4E[X^2] \\
E[Y^2] = ... = 16E[X^4] = ... =\\
= 16 \int_{0}^{1} x^4 \frac65 (x^2+x)\,dx = \frac{16 * 6 *13}{5*42}\\

Var(Y) = *

$$

$$
F(a) = P(X\leq a) = \int_{-\infty}^{a}f(x)\,dx =\\
=
\begin{cases}
0 & se a<0\\
0 + \frac65 (x^2+x)\,dx & se a \in[0,1]\\
1 & sea>1
\end{cases}
$$