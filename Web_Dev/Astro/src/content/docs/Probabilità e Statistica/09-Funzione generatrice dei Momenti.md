---
title: 'Funzione Generatrice dei Momenti' 
metaTitle: 'Funzione Generatrice dei Momenti'
description: ''
author: 'Italo Corraro'
order: 9
---

:::def
Data una variabile casuale $X$, si definisce **funzione generatrice dei momenti** la funzione 

$$
\phi(t) = E[e^{tX}]
$$
:::

:::oss
Se $X$ è discreta ($X \in \{x_1,x_2,\ldots x_n\}$), allora

$$
\phi(t) = \sum_{i=0}^{n} e^{tx_i}p(x_i)
$$

Se è continua ($X \in \mathbb{R}$)

$$
\phi(t) = \int_{-\infty}^{+\infty} e^{tx} f(x) \,dx
$$
:::

### Proprietà

1. $\phi(0) = 1$ infatti $\phi(0) = E[e^{0X}] = E[1] = 1$
2. $\frac{ }$

infatti 
$$
\begin{aligned}
\frac{d}{dt}\phi(t) &= \frac{d}{dt} E[e^{tX}] = \\

&=
\begin{cases}
\frac{d}{dt}
\sum_{i=0}^{n}e^{tx_i}p(x_i) 
& \text{caso discreto} \\
\frac{d}{dt}
\int 
& \text{caso continuo}
\end{cases}=\\

&=
\begin{cases}
\sum x_i e^{tx_i} p(x_i) & \text{caso discreto} \\
& \text{caso continuo}
\end{cases}=\\
&\, \downarrow
\text{ calcolato con } t=0 \\

&=
\begin{cases}
\sum  x_i p(x_i) & \text{caso discreto} \\
& \text{caso continuo}
\end{cases}=\\[10pt]

&=E[X]
\end{aligned}

$$

3. 
$$
\left.\frac{d^k}{dt^k}\phi(t)\right|_{t=0} = E[X^k]
$$
si dimostra similmente a 2

4. Due variabili casuali che presentano la stessa funzione generatrice dei momenti sono identicamente distribuite.
5. Date $X$ e $Y$ variabili casuali indipendenti, 
$$
\phi_{X+Y}(t)= \phi_X(t) + \phi_Y(t)
$$

:::dim
$$
\begin{aligned}
\phi_{X+Y} &= E[e^{t(X+Y)}] = \\
&= E[e^{tX}e^{tY}]
\end{aligned}
$$
Nel caso continuo:
$$
\begin{aligned}
&=\int_{-\infty}^{+\infty}
\int_{-\infty}^{+\infty}
e^{tx}e^{ty}f(x,y) \,dx\,dy =\\
&\Downarrow
\text{ per l'indipendenza: }\\

&=\int_{-\infty}^{+\infty}
\int_{-\infty}^{+\infty}
e^{tx}e^{ty}f_X(x)f_Y(y) \,dx\,dy =\\

&=\left( 
    \int_{-\infty}^{+\infty}
    e^{tx}f_X(x)\,dx 
\right)
\left( 
    \int_{-\infty}^{+\infty}
    e^{ty}f_Y(y)\,dy 
\right) =\\

&= \phi_X(t)
\end{aligned}
$$
:::


## Esempi

### Caso Continuo

> Sia $X$ una variabile casuale con funzione di densità di probabilità 
$$
f(x) =
\begin{cases}
e^{-x} & x\geq0\\
0 & altrove
\end{cases}
$$ 

> Vogliamo \phi E[X] e Var(X)

$$
\begin{aligned}
\phi(t) &= E[e^{tX}] = \\
&= \int_{-\infty}^{+\infty} e^{tx}f(x)\,dx =\\[10pt]

&= \int_{-\infty}^{0} e^{tx}0\,dx 
\int_{0}^{+\infty} e^{tx}e^{-x}\,dx =\\[10pt]

&= \int_{0}^{+\infty} e^{-(1-t)x}\,dx =\\[10pt]

&= \begin{cases}
+\infty & \text{se }t \geq 1 \\
\displaystyle \left[- \frac1{1-t} e^{-(1-t)x}\right]_0^{+\infty} = \frac1{1-t} & \text{se }t \lt 1
\end{cases}
\end{aligned}

$$

Poi 
$$
\begin{aligned}
E[X] 
&=\left. \frac{d}{dt}\phi(t) \right|_{t=0} =\\
&= \frac{d}{dt} \left.\left(\frac1{1-t}\right)\right|_{t=0} =\\
&=\left. -(1-t)^{-2} (-1) \right|_{t=0} =\\
&= 1
\end{aligned}
$$


Poi

$$
E[X^2] = derivata seconda in t=0
$$

$$
Var(X) = E[X^2] - E[X]^2
$$

### 2 Caso Discreto

> Sia $X \sim Be(p)$  con $X \in {0,1}$ e $p(1) = p$, $p(0) = 1-p -q$
> Cerchiamo $\phi(t)$ e $E[X^n]$
$$
\phi(t) = e^{0\,t}p(0) \cdot e^{1\,t}p(1) =
q + e^tp
$$

$$
E[X] =\left. \frac{d}{dt} \phi(t) \right|_{t=0} = \left. e^tp \right|_{t=0} = p
$$

$$
E[X^2] = \frac{d^2}{dt^2} \phi(t)
=\left. \frac{d}{dt} E[X] \right|_{t=0} = 
\left. e^t p \right|_{t=0} = p
$$

Ricaviamo infine che
$$
E{x^n} =\left. e^t p \right|_{t=0} = p
$$

## Modelli di Variabili Casuali Discrete

### Variabile Casuale di Bernoulli

Si scrive $X \sim Be (p)$ cioè X si comporta come una bernulliana di parametro p:

$$
X \in \{0,1\}\\

p(1) = p, p(0) = 1-p = q \\
p \in [0,1], q \in [0,1]\\
\phi = q + e^t p, E[X^n]= p , n\geq 1
\\
Var(X) = p - p^2 = pq
$$

### Variabile Casuale Binomiale

Si scrive $X \sim B(n,p)$ cioè $X$ si comporta come una variabile casuale binomiale di parametri $n$ e $p$, dove $n \in \mathbb{N}\setminus\{0\}$ e $p \in [0,1]$

$X$ rappresenta il numero di volte in cui si osserva un evento $E$ di probabilità $p$ in $n$ prove ripetute in maniera identica e indipendente.

Per $X \in \{0,1,2,\ldots\}$  
se $k = 1, 2, 3, \ldots$

$$
P(X=k) = p(k) = \binom{n}{k} p^k q^{n-k}
$$

:::eg
Se $k =n $ allora

$$
p(n) = \underbrace{p \cdot p \ldots p}_{n\text{ volte}} = p^n
$$

Se $k =0 $ allora

$$
p(0) = \underbrace{q \cdot q \ldots q}_{n\text{ volte}} = q^n
$$

Per altri K, abbiamo

$$
p(k) = \underbrace{p \cdot p \ldots p}_{k\text{ volte}} \cdot \underbrace{q \cdot q \ldots q}_{n-k\text{ volte}} = p^k q^{n-k}
$$

Modello il problema come una combinazione semplice, per cui:

$$

$$

---
$$
E[X] \\

X = \sum_{j=1}^{n} Y_j \text{ con } T_j \sim Be(p)
$$

$$
E[X] = E \left[\sum_{j=1}^{n} Y_j \right] = \sum_{j=1}^{n}E[Y_j]
= \sum_{j=1}^{n}p = np
$$

La varianza:

$$
\begin{aligned}
Var(X) &= Var(\sum_{j=1}^{n} Y_j) =\\
&=\sum_{j=1}^{n} Var(Y_j) =\\
&=\sum_{j=1}^{n}pq =\\
&= npq
\end{aligned}
$$

$$
\phi_X(t) = \phi_{Y_1}(t) + \phi_{Y_2}(t) + \ldots \phi_{Y_n}(t)
$$
 ---
$$
\phi_{Y_j}(t) = \underbrace{(q + e^t p)(q + e^t p)\dots (q + e^t p)}_{n\text{ volte}} = (q + e^tp)^n
$$
:::

### Proprietà di Riproducibilità

Se $X \sim B(n,p)$ e $Y \sim B(m,p)$ con $p\in [0,1]$ e $n,m \in \mathbb{N}\setminus\{0\}$ e $X$ e $Y$ sono indipendenti

allora

$$
X+Y \sim B(n+m,p)
$$

### Es

Siano X e Y variabili casuali discrete
$X \in {0,1}$
$Y \in {0,1}$

inoltre X \sim Be(1/2)
P(Y=1|X=0) = \epsilon,
P(Y=0|X=1) = 2\epsilon
per \epsilon \in ]0, 1/2[

1. determinare funzioni di massa di probabilità congiunta e marginale
2. E[X], E[Y], Cov(X,Y)
3. \exists \epsilon : Cov(X,Y) = 0 e per tale valore X e Y sono indipendenti?


X\Y | 0 | 1
--- | ---| ---
 0 | $\frac12 - \frac\epsilon2$ | $\epsilon$
 1 | $\epsilon/2$ | $\frac12 - \epsilon$
 fm  |1/2 | 1/2

- $p(0,0) + p(0,1) = p_X(0) = 1/2$
- $p(0,0) = 1/2-  \epsilon/2$

Quindi $Y \sim Be(1/2 - \epsilon/2)$   
$E[X] =1/2, E[Y] = 1/2 - \epsilon/2$
$$
\begin{aligned}
Cov(X,Y) &= E[XY] - E[X]E[Y] = \\
&= <!--  --> =\\
&= \frac12 - \epsilon - (\frac12 \cdot (\frac12 - \frac\epsilon2)) = \\
&= \frac12 - \epsilon - \frac14 + \frac34 = \\
&= \frac14 - \frac34\epsilon
\end{aligned}
$$

$Cov(X,Y) = 0 \Leftrightarrow \epsilon = 1/3$

X\Y | 0 | 1 | fm
--- | ---| --- | ---
 0 | $\frac13$ | $\frac13$ | $\frac23$
 1 | $\frac16$ | $\frac16$ | $\frac13$
 fm  | $\frac12$ | $\frac12$

Verifichiamo che p(a,b) = p_X(a)p_Y(b) \ \forall a,b \in \mathbb{R}

sono quindi indipendenti

### Es 2

> Data una scatola che contiene 10 palline verdi e 2 palline blu.
> 1. Si estraggono 3 palline senza reimmissione,    
> sia Y il numero di palline blu estratte;   
> si vuole conoscere E[Y], Var(Y), P_Y(a)
> 2. Si estrae 1 pallina con reimmissione per 3 volte,   
> sia X in numero di palline blu estratte;   
> si vuole conoscere E[X], Var(X), P_X(a)

:::::::ol
:::::li
L'esperimento muta il numero di palline ad ogni tentativo, quindi tra loro le estrazioni non sono né indipendenti né identiche, 

:::nota
Non è possibile usare il modello delle variabili casuali binomiali.
:::

Senza reimmissione possiamo avere
$$
Y \in \{0,1,2\}
$$
$$
P(Y=0) = P_Y(0) = \frac{10}{12} \cdot \frac9{11} \cdot \frac8{10} \\[12pt]

P(Y=1) = 
\frac2{12}\frac{10}{11}\frac9{10} 
+ \frac{10}{12}\frac2{11}\frac{9}{10}
+ \frac{10}{12}\frac9{11}\frac{2}{10}
=
\\= 3\cdot\frac{2 \cdot 9 \cdot 10}{12 11 10}= \frac9{22}

$$

$$
P_Y(2) = 1 - P_Y(0) - P_Y(1) = \frac1{22}\\
E[Y] = \frac{11}{22}\\
E[Y^2] = \frac{13}{22}\\
Var(Y) = \frac{13}{22} - (\frac{11}{22})^2\\
$$

:::::
:::::li
Si ripete per 3 volte un esperimento in maniera identica e indipendente, quindi
$$
X \in \{0,1,2,3\}\\
\downarrow\\
X \sim B(3,\frac16)\\
\Downarrow\\
\begin{aligned}
p_X(k) = \binom{3}k (\frac16)^k  (\frac56)^{3-k} \\
E[X] = np = \frac12 \\
Var(X) = npq = \frac5{12}
\\
P(X\geq2) = P(X=2 \cup X=3) = P(X=2) + P(X=3) =\\
= \binom32 (\frac16)^2 \frac56 + \binom33 (\frac16)^3 (\frac56)^0 = \frac2{27}
\end{aligned}
$$
:::::
:::::::


## Variabile Casuale di Poisson

Data una variabile casuale discreta $X\in \mathbb{N}$ con P_X(k) = \frac{\lambda^k e^{-\lambda}} se k \in \mathbb{N} e \lambda > 0
e si scrive X \sim Po(\lambda)

$$
\phi_X(t) = E[e^{tX}] = \sum_{k=0}^{+\infty} e^{tk} \frac{\lambda^k e ^{-\lambda}}{k!} =\\

= e^{-\lambda} \sum_{}^{}\frac{(\lambda e^t)^k}{k!} =\\
usa il memo\\
e^{-\lambda}\, e^{\lambda e^t} = e^{\lambda(e^t-1)}
$$

:::memo
La serie $\sum_{k=0}^{+\infty}\frac{\alpha^k}{k!} = e^\alpha$ se $\alpha > 0$
:::


Quindi 

$$
E[X] =\left.\frac{d}{dt} e^{\lambda(e^t-1)}\right|_{t=0} 
= \left.e^{\lambda(e^t-1)}\lambda e^t\right|_{t=0} =
\lambda
$$