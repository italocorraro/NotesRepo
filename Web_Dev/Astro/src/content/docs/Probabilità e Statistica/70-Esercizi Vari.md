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

$p(i,k) = c|i + k| $

Y\X | -1 | 0 | 1
-- | --- | --- | ---
-1 | 2c | c | 0
0 | c | 0 | c
1 | 0 | c | 2c

- poiché $p(i,k) = P(X=i,Y=k) \in [0,1] \to c \in [0,1] \cup c\in [0,1/2]$
- $\sum \sum p(i,k) = 1 = 8c \Rightarrow c = \frac1{8}$

<!-- Sostituisci valori tabella ^
 -->

<!-- Somma righe e colonne ^ per le funzioni di massa marginali -->

:::oss
$X$ e $Y$ hanno la stessa funzione di massa di probabilità
:::

$$
\begin{aligned}
E[X] = \sum i p(i) = -1 \times \frac38 + 0 \times\frac28 + 1 \times\frac38 = 0 \\[8pt]
E[Y] = E[X]
\end{aligned}
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

- $p(3,0) = (\frac12)^3$
- $p(0,2) = (\frac12)^3$

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
:::::ul
:::li
sia $X_k$ la variabile casuale associata alla k-esima email tale per cui 
$$
X = 
\begin{cases}
1 & \text{se è stata inviata correttamente}\\
0 & \text{altrimenti}
\end{cases}
$$
:::
:::li
è una variabile di Benoulli: 
$$
P_{X_n}(a) = 
\begin{cases}
1/n & a =1\\
n-1/n & a=0\\
0 & \text{altrimenti}
\end{cases}
$$
:::
:::::
per cui $E[X_k] = 0 \times \frac{n-1}{n} + 1 \times \frac1n = \frac1n$

Troviamo che $Y$ è 
$$
Y = \sum X_k$, quindi $E[Y] = E\left[\sum{X_k}\right] = \sum E[X_k]
$$


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
\begin{aligned}
1 = \int_{-\infty}^{+\infty} f(x)\,dx =\\
= ... = k\frac56 => k=\frac65
\end{aligned}
$$

$$
\begin{aligned}
E[X] = \int_{}^{}xf(x)\,dx = \\
= \frac65 \int_{0}^{1}(x^3+x^2)\,dx = ...= \frac7{10}
\end{aligned}
$$

$$
E[X^2] = ... = \frac{27}{50}
$$

$$
Var(X) = ... = \frac{27}{50} - (\frac7{10})^2
$$

$$
\begin{aligned}
Y= 4X^2 \\

E[Y] = E[4X^2] = 4E[X^2] \\
E[Y^2] = ... = 16E[X^4] = ... =\\
= 16 \int_{0}^{1} x^4 \frac65 (x^2+x)\,dx = \frac{16 * 6 *13}{5*42}\\

Var(Y) = *

\end{aligned}
$$

$$
\begin{aligned}
F(a) = P(X\leq a) = \int_{-\infty}^{a}f(x)\,dx =\\
=
\begin{cases}
0 & se a<0\\
0 + \frac65 (x^2+x)\,dx & se a \in[0,1]\\
1 & sea>1
\end{cases}

\end{aligned}
$$


### Es 6 F 8

Sia $X,Y\sim \mathcal{N}(0,\sigma^2)$ indipendenti

$R = \sqrt{X^2+Y^2}$

Cerchiamo $F_R(a) = P(R\leq a)$

$$
\begin{aligned}
&= 
\begin{cases}
0 &\text{se }a<0\\
* &\text{se }a\geq 0
\end{cases}
\end{aligned}
$$

*
$$
\begin{aligned}
*& = \iint_{R\leq a} f(x,y)\,dx\,dy =\\
&\,\downarrow
\footnotesize
\text{per l'indipendenza}
\\
&= 
\iint_{R\leq a} f_X(x)f_Y(y)\,dx\,dy\\
&=
\frac1{\sigma^2 2\pi} \iint_{R\leq a} e^{\frac{-R^2}{2\sigma^2}}\,dx\,dy =\\
&\,\downarrow
\footnotesize
\begin{array}{l}
\text{risolviamo in coordinate polari:}\\
x = \rho \cos(\theta)\\
y = \rho \sin(\theta)
\end{array}
\\
&= 
\frac1{\sigma^2 2\pi} 
\int_{0}^{2\pi} \int_{0}^{a} e^{\frac{-\rho^2}{2\sigma^2}} \rho \,d\rho\,d\theta =\\
&= 
\frac1{2\pi} 
\int_{0}^{2\pi} \int_{0}^{a} \frac{\rho}{\sigma^2} e^{\frac{-\rho^2}{2\sigma^2}} \,d\rho\,d\theta =\\
&=
\frac1{2\pi} 
\int_{0}^{2\pi} \left[ 

\right] =\\
\ldots &= 1 - e^{\frac{-a^2}{2\sigma^2}}
\end{aligned}
$$



---

:::oss
Per una variabile casuale continua, il valore più probabile è il massimo, se esiste, della sua funzione di densità di probabilità.
:::
<!-- Relocate -->

$$
f_R(a) = \text{dalla derivata}
$$

Per trovare il massimo, possiamo derivare $f_R$ e trovare i punti critici

<!-- svolgimento derivate -->

Il risultato è $a = \sigma$, cioè varianza nulla.


### Es 1 foglio 8

> % che il peso sia tra 70 e 90

$X \sim \mathcal{N}(\mu,\sigma^2)$

$P(70\leq X \leq 90) = P( X \leq 90) - P(X \leq 70)$

$$
\begin{aligned}
= P(\frac{X - \mu}{\sigma}\leq\frac{90-\mu}\sigma)-P(\frac{X - \mu}{\sigma}\leq\frac{70-\mu}\sigma) \\
&\,\downarrow
\footnotesize
\text{sia }Z = \frac{X - \mu}{\sigma}
\\
= F_Z(\frac{90-\mu}\sigma) - F_Z(\frac{70-\mu}\sigma)
\end{aligned}
$$

> prob sia > 95

> prob X < 60 U X > 110

I due eventi sono disgiunti:
$$
\begin{aligned}
P(X<60\cup X>110) &= P() + p()=\\
&= P(X\lt 60) + 1 - P(X \leq 110) =\\
&\,\downarrow
\footnotesize

\\
&=
F_Z(\frac{60-\mu}\sigma) + 1 - F_Z(\frac{110-\mu}\sigma)
\end{aligned}
$$


### ??

> Si consideriono due punto $X$ e $Y$ scelti a caso di modo che $X\in[0,1]$ e $Y\in[1,2]$
>
> 1. Qual è la probabilità che la loro distanza sia maggiore di 2/3?
> 2. Sia $M = \displaystyle\frac{X+Y}2$, determinare $P(M=1)$,$P(M>1)$
> 3. Determinare la funzione di ripartizione di $M$ ($F_M(a)$)

Sia $D=Y-X$ la distanza tra $X$ e $Y$; necessariamente $0\leq D\leq2$ per gli intervalli di valori che le due variabili possono assumere.

- $X\sim \mathcal{U}(0,1)$
- $Y\sim \mathcal{U}(1,2)$

<!-- vedi graph 17/11 -->

$P(M=1) = P(X+Y=2)$

<!-- metodo grafico -->

r) $y = x -2$

---

Calcoliamo $P(M>a)$:  
Per l'intervallo di definizione delle variabili, abbiamo che $1\leq X+Y<\leq3$
$$
P(X+Y\geq 2a) =
\begin{cases}
0 &\text{se }2a<1\\
1 &\text{se }2a>3\\
* &\text{se }1\leq2a\leq3
\end{cases}
$$
** * **
Graficamente troviamo le rette $y= -x + 2a$,

la probabilità che cerchiamo è la parte di area del quadrato dove esistono $X$ e $Y$ compresa tra le due rette



## ES2 F9

- $X_i$ numero di articoli venduti in un giorno $i$, con $X_i\sim \mathcal{Po}(4)$
- $Y= \sum_{i=1}^{25}X_i$

Cerchiamo $P(Y\leq N) = 0.95$

Supponiamo ragionevolmente che le $X_i$ siano i.i.d.

Se la poissoniana è riproducibile, allora $Y\sim \mathcal{Po}(25\cdot4)$.

$$
\begin{aligned}
P(Y\leq N) &= 0.95\\
&\,\Downarrow\\
\sum_{j=0}^{N} P(Y=j) &= 0.95
\end{aligned}
$$

Alternativamente, possiamo applicare il teorema del limite centrale (anche se 25 non è 30, ma abbastanza vicino):

$$
\begin{aligned}
Y &\dot\sim\, \mathcal{N}(100,100)\\
P(\frac{Y-100}{10}
&\leq\frac{N-100}{10})
&=0.95\\
P(Z
&\leq\frac{N-100}{10})
&=0.95\\
&\,\downarrow
\footnotesize
\text{per le tavole}
\\
P(Z
&\leq 1.65)
&=0.95\\
N &\simeq 116.5
\end{aligned}
$$

Invece, con approssimazione alla continuità

$$
\begin{aligned}
P(Y&\leq N) = P(Y \leq N +0.5)\\
P(Z&\leq\frac{N+0.5-100}{10})=0.95\\
&\frac{N+0.5-100}{10} \simeq 1.65\\
N&\simeq 100 + 16.5 - 0.5 = 116
\end{aligned}
$$

## ES4F9

Sia $Y$ il numero di dispositivi sostituiti entro 6 mesi: $Y \sim \mathcal{B}(6,p)$ dove $p$ è la probabilità che $X_i\lt\frac12$, per cui $P(Y\geq3)=\sum_{i=3}^{6} P(Y=i)$, oppure $P(Y\geq3) = 1 - P(\lt3)$ con conseguenti calcoli alternativi.

Se $T$ è il numero di dispositivi sostituiti in 6 mesi su $100$ dispositivi, allora $T\sim \mathcal{B}(100,p)\dot\sim\, \mathcal{N}(100p,100pq)$, quindi si applica il teorema del limite centrale con approssimazione alla continuità.


