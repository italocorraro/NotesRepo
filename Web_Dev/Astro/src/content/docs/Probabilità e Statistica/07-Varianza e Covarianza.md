---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Varianza e Covarianza' 
metaTitle: 'Varianza e Covarianza'
description: ''
author: 'Italo Corraro'
order: 7
---


## Varianza

:::def{di Momento di Variabile Casuale}
Data una variabile casuale $X$, si dice **momento $n$-esimo** di $X$, se esiste, il valore medio della $n$-esima potenza della variabile:

$$
E[X^n] =
\begin{cases}
\displaystyle
\sum_{k=1}^{n} x_n^k\, p(x_k) 
& \text{se } X \text{ è discreta}\\[12pt]
\displaystyle
\int^{+\infty}_{-\infty} x^n f(x) \, dx 
& \text{se } X \text{ è continua}
\end{cases}
$$
:::

:::::def{Varianza}
Data una variabile casuale $X$ con valor medio $E[X] = \mu$ definito, si dice **varianza** di $X$, se esiste, 
$$
Var(X) = E[(X - \mu)^2]
$$
$$
Var(X) = 
\begin{cases}
\displaystyle
\sum_{k=1}^{n} (x_k-\mu)^2 P(x_k)
& \text{se } X \text{ è discreta}\\[12pt]
\displaystyle
\int_{-\infty}^{+\infty} (x - \mu)^2 f(x) \, dx
& \text{se } X \text{ è continua}
\end{cases}
$$

La varianza è un parametro che misura di quanto si discostano i valori della variabile casuale dal suo valore atteso.
:::nb
La varianza è *sempre positiva*.
:::
:::::



:::oss{sulla meccanica}
Se il valor medio è l'analogo del baricentro in meccanica, allora la varianza lo è del momento d'inerzia.
:::

### Proprietà della Varianza 

1. *La varianza è sempre positiva* o, in casi particolari (quando la variabile può assumere come valore solo il suo valor medio), nulla: $Var(X) \geq 0 \ \forall X \text{ variabile casuale}$
2. $Var(X) = E[(X-\mu)^2] = E[X^2] - E[X]^2$
3. $Var(\alpha X + \beta)= \alpha^2 Var(X)$ con $\alpha,\beta \in \mathbb{R} $

:::dim{della proprietà 2}
Partiamo dalla definizione di varianza e svolgiamo il quadrato:
$$
\begin{aligned}
E[] = E[ X^2 + \mu^2 - 2\mu X] = \\
&\underset{per linearità del valor medio}{=} E[X^2] + E[\mu^2] + E[-2\mu X] = \\

&\underset{\mu è un numero, quindi il valor medio coincide con se stesso: E[\alpha X + \beta] = \alpha E[X] + \beta}{=} E[X^2] + \mu^2 -2\mu E[X] =\\

&\underset{\mu = E[X]}= E[X^2] + E[X]^2 -2E[X]^2 = \\

&= E[X^2] - E[X]^2
\end{aligned}
$$
:::

:::::dim{della proprietà 3}
Sia $Y = \alpha X + \beta$
quindi
- $E[Y] = \alpha E[X] + \beta = \mu_Y$
- $E[X] = \mu_X$
$$
\begin{aligned}
Var(\alpha X + \beta) &= Var(Y) =_{def} = E[(Y-\mu_Y)^2] =\\
&= E[(\alpha X + \beta - (\alpha \mu_X + \beta))^2] =\\
&= E[(\alpha X - \alpha \mu_X)^2] = \\
&= E[\alpha^2(X - \mu)^2] =\\
&=_{linearità} \alpha^2 E[(X-\mu_X)^2] =\\
&= \alpha^2 Var(X)
\end{aligned}
$$
:::oss
Se $\alpha = 0$, allora $Var(\beta) = 0$
:::
:::::

## Covarianza

:::::def
Date due variabili casuali $X$ e $Y$ con valor medio $\mu_X$ e $\mu_Y$ rispettivamente, si dice **covarianza**, se esiste,

$$
Cov(X,Y) = 
E[(X - \mu_X)(Y - \mu_Y)]
$$

$$
Cov(X,Y) =
\begin{cases}
\displaystyle \sum_{i=1}^n \sum_{j=1}^m (x_i - \mu_X)(y_j -\mu_Y)p(x_i y_j)
& \text{se } X, Y \text{ sono discrete} \\[14pt]
 
\displaystyle \iint_{-\infty}^{+\infty} (x-\mu_X)(y - \mu_Y) f(x,y) \, dx \, dy
& \text{se } X, Y \text{ sono continue}
\end{cases}
$$
:::::

### Proprietà della Covarianza

1. $Cov(X,Y) </> 0$
2. $Cov(X,Y) = E[XY] - E[X]E[Y]$
3. $Cov(X,X) = Var(X)$
4. $Var(X + Y) = Var(X) + Var(Y) + 2 Cov(X,Y)$
5. 

:::oss{sulla proprietà 4}
*La varianza non è commutativa rispetto alla somma*, infatti compare un terzo temine $2 Cov(X,Y)$
:::

:::dim{proprietà 2}
$$
\begin{aligned}
E[(X - \mu_X)(Y - \mu_Y)] &= E[XY + \mu_X\mu_Y - \mu_X Y - \mu_Y X] = \\
&= E[XY] + E[\mu_X\mu_Y] + E[-\mu_X Y] + E[-\mu_Y X] =\\
&= E[XY] + \mu_X\mu_Y - \mu_X E[Y] - \mu_Y E[X] =\\
&\underset{\mu_X = E[X]}{=} E[XY] +E[X]E[Y] - E[X]E[Y] - E[Y]E[X] = \\
&= E[XY] - E[X]E[Y]
\end{aligned}
$$
:::

:::dim{proprietà 3} 
$$
\begin{aligned}
Cov(X,X) &= E[(X - \mu_X)(X - \mu_X)] =\\
&= E[(X - \mu_X)^2] = Var(X)
\end{aligned}
$$
:::


4. $Var(X + Y) = Var(X) + Var(Y) + 2 Cov(X,Y)$
:::dim{proprietà 4}

Sia 
- $Z = X + Y$, per cui 
- $E[Z] = \mu_Z = E[X] +E[Y] = \mu_X +\mu_Y$
allora
$$
\begin{aligned}
Var(X + Y) &= Var(Z) = E[(Z - \mu_Z)^2] =\\
&= E[(X+Y - (\mu_X + \mu_Y))^2] =\\
&= E[((X - \mu_X) + (Y - \mu_Y))^2] =\\
&= E[(X - \mu_X)^2 + (Y - \mu_Y)^2 + 2(X - \mu_X)(Y - \mu_Y)] = \\
&= E[(X - \mu_X)^2] +E[(Y - \mu_Y)^2] + E[2(X - \mu_X)(Y - \mu_Y)] = \\
&= Var(X) + Var(Y) + 2 Cov(X,Y)
\end{aligned}
$$

:::dim{proprietà 5 generalizza 4}
Siano date n variabili vsduali X_1 ... X_n con valor medio \mu...

$$
Var \left(\sum_{i=1}^n X_i \right) = \sum_{i=1}^n Var(X_i) + \underset{\text{con }i \neq j}{\sum_{i=1}^n \sum_{j=1}^n} Cov(X_iX_j)
$$
:::

6. $Cov(X,Y) = Cov(Y,X)$

7. Siano date $X$,$Y$ variabili casuali e $\alpha \in \mathbb{R}$
si dimostra che $Cov(\alpha X,Y) = Cov(X, \alpha Y) = \alpha Cov(X,Y)$

:::::oss
1. $E[(X -\mu)] = 0 \text{ per } \mu = E[X]$,
infatti 
$$
\begin{aligned}
E[(X - \mu)] &= E[X] + E[-\mu] =\\
&= E[X] -\mu =\\
&= E[X] - E[X] =\\
&= 0
\end{aligned}
$$
2. Se $X$ ha significato fisico, allora avrà un'unità di misura, per cui, la varianza della variabile avrà come unità di misura il quadrato dell'unità di misura di $X$; per questa ragione, si introduce lo **scarto quadratico medio** (o *deviazione standard*) che equivale alla radice quadrata della varianza (per mantenere la stessa unità di misura).
3. A partire da $Cov(X,Y)$, si introduce il **coefficiente di correlazione**: 
$$
Corr(X,Y) = \frac{Cov(X,Y)}{\sqrt{Var(X)Var(Y)}}
$$ 
che è un numero puro, ed è dimostrabile che $Corr(X,Y) \in [-1,1]$

:::::

### Qualcosa

> Se $Cov(X,Y) = 0$, allora $X$ e $Y$ sono indipendenti?   
> Risposta: "No".

controesempio:
f(x,y) = 
\begin{cases}
\frac{1}{\pi R^2} & x^2 + y^2 \leq R^2 \\
0 & altrove
\end{cases}
<!-- calcola f.parziali -->
otteniamo le funzioni di probabilità parziale e troviamo f(x,y) \neq f_X(x)f_Y(y) \Ra X e Y non sono indipendenti

###

$Cov(X,Y) = E[XY] - E[X]E[Y]$

$$
E[X] = \int_{-\infty}^{+\infty}x f(x) \,dx = \int_{-\infty}^{-R} x 0 dx + \int_{-R}^{+R} x \frac{2 \sqrt{R^2x^2}}{\pi x^2} \, dx
+ \int_{+R}^{+\infty} x 0 dx
$$
$x \frac{2 \sqrt{R^2x^2}}{\pi x^2} \, dx $
è una funzione dispari e l'integrale di una funzione dispari in un intervallo simmetrico è nullo, quindi, nel complesso abbiamo $E[X]=0$; analogamente si verifica $E[Y]=0$

$$
E[XY]= \int_{-\infty}^{+\infty}\int_{-\infty}^{+\infty} xy f(x,y) \,dx\,dy = \underset{x^2 + y^2 \leq R^2}{\iint} xy \frac{1}{\pi R^2} \,dx\,dy = 0
$$

<!-- dimostrare -->

Ne ricaviamo che $Cov(X,Y) = E[XY] - E[X]E[Y] = 0$ quindi $X$ e $Y$ sono dipendenti ma hanno covarianza nulla.

### Altro Ancora

> Vogliamo modellare un esperimento di fisica in laboratorio in termini di variabili casuali:
> Facciamo l'ipotesi che le misure dei parametri dell'esperimento siano fatte tutte con lo stesso metodo e strumenti e ipotizziamo anche che gli esperimenti siano tra loro indipendenti.
> Si ripete un esperimento in maniera identica e indipendente, ma l'esperimento non riporterà mai lo stesso risultato, rappresentiamo la misurazione del parametro di controllo come la somma di una variabile casuale (errore) con il valore teorico (corretto)

Siano $X_1, X_2, \ldots, X_n$ gli $n$ esiti degli $n$ esperimenti; poichè questi sono indipendenti (per ipotesi), allora lo saranno anche che associate variabili casuali

Se gli esperimenti sono svolti in maniera identica, allora saranno identicamente distribuite le variabili casuali, cioè avranno tutte la stessa funzione di densità di probabilità

Si dice che $\{X_1,X_2,\ldots,X_n\}$ sono variabili casuali indipendenti e identicamente distribuite (*i.i.d.*)
Ne deriva che
1. Se sono indipendenti, allora $Cov(X_i,X_j) = 0$ se $i\neq j$
2. Se sono identicamente distribuite, allora hanno lo stesso valore medio e varianza:$$
E[X_i] = E[X_j] \ \forall i,j \in \mathbb{R} \\
Var(X_i) = Var(X_j) = \sigma^2 \ \forall i,j \in \mathbb{R}$$

Sia $\overline{X} = \frac{\sum_{i=1}^{n}X_i}{n}$ la media aritmetica delle misure; anch'esso è una variabile casuale, con le seguenti proprietà:
:::::ul
:::li
$$
\begin{aligned}
E[\overline{X}] &= \frac{E[\sum_{i=1}^{n}X_i]}{n} = \\ 
&= \frac1{n}E[\sum_{i=1}^{n}X_i] =\\ 
&= \frac1n \sum_{i=1}^{n}E[X_i] =\\
&= \frac1n \sum_{i=1}^{n} \mu = \frac{n \mu}{n} = \mu
\end{aligned}

$$
:::li
$$
\begin{aligned}
Var(\overline{X}) 
&= Var \left(\frac{\sum_{i=1}^{n}X_i}{n} \right) =\\
&= \frac1n^2 Var \left(\sum_{i=1}^{n}X_i \right) =\\
&= \frac1n^2 
\left[
    \sum_{i=1}^{n}Var(X_i) 
+ \underset{\text{con }i\neq j}{\sum_{i=1}^{n}\sum_{j=1}^{n}}  \underbrace{Cov(X_i,X_j)}_{=0\text{ per indipendenza}}
\right]  = \\
&= \frac1n^2 \sum_{i=1}^{n}Var(X_i) =\\
&= \frac1n^2 \sum_{}^{}\sigma^2 = \frac{n\sigma^2}{n^2} = \frac{\sigma^2}n
\end{aligned}
$$
:::::












## Esempi

### 1

> Calcolare la varianza di una variabile casuale di Benoulli associata all'evento $E$ con $P(E)=p$ dove $p \in [0,1]$

$X \sim B_e(p) \Rightarrow X \in \{0,1\}$
$$
X = 
\begin{cases}
1 &\text{se } E \text{ si verifica}\\
0 &\text{altrimenti}
\end{cases}
$$
$$
p(a) =
\begin{cases}
p &\text{se } a=1 \\
1-p = q &\text{se } a=0 \\
0 &\text{altrimenti}
\end{cases}
$$
$$
E[X] = 0 \cdot q + 1 \cdot p = p 
$$
$$
E[X^2] = \sum_{j=1}^n x_j p(x_j) =n \times( 0^2 \cdot q + 1^2 \cdot p )= n\cdot p\\
n = 1 \Rightarrow E[X^2] = p
$$
$$
Var(X) = E[X^2] - E[X]^2 =\\
= n p - p^2 \\
n = 1 \Rightarrow
Var(X) = p - p^2 = p(1 - p) = p\cdot q
$$
### 2

> Sia X una variabile casuale continua con funzione di densità di probabilità

f(X) 2x se x\in [0,1]
0 altrimenti

Determinare E[X] Var(X)

E[X] = =  \int\infty^0 x 0 dx + \int 0^1 x(2x) dx + \int 1 ^\infty x 0 dx = 
\int 01 2 x^2 = [2/3 x]^1_0 = 2/3

E[X^2] = \int \infty x^2 f(x) dx =
\undercase{\int\infty^0 x^2 0 dx}_{f(x)=0} ''
= [2/4 x^4]^1_0 = 1/2

Var(X) = E[X^2] - E[X]^2

### 3

> Siano X e Y con funzione di massa di probabilità
> Determinare per X e Y i valori medi, le varianze e la covarianza

Y\X | 1 | 2 | 3 | *
--- | --- | --- | --- | ---
0 | 1/3 | 1/3 | 0 | 2/3
1 | 0 | 0 | 1/3 | 1/3
 | 1/3 | 1/3 | 1/3 | 

Ci serve la funzione di densità marginale

Y è di benoulli B_e(1/3) => E[Y] = 1/3 e Var(Y) = 1/3 * (1 - 1/3) = 2/9

E[X] = \sum^3 x_k p(x_k) = 1* 1/3 + 2 * 1/3 + 3*1/3
E[X^2] = \sum x^2 p(x) = 1^2* 1/3 + 2^2 * 1/3 + 3^2*1/3
= 14/3

Var(X) = E[X^2] - E[X]^2 = ... = 2/3

Cov(X,Y) = E[XY] - {E[X]E[Y]}_{noti}

:::memo
Ef(x,y) = 
:::

E[XY] = \sum \sum x_i y_j p(x_i, y_j) = 
1 * 0 * 1/3 + 2 * 0 * 1/3 + 3 * 0 * 0 + 1 * 1* 0 + 2 * 1 * 0 + 3 * 1 * 1/3 = 1

Cov(X,Y) = 1 - 2 * 1/3 = 1/3