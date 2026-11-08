---
title: 'Modelli di Variabili Casuali Discrete' 
metaTitle: 'Modelli di Variabili Casuali Discrete'
description: ''
author: 'Italo Corraro'
order: 10
---


## Variabile Casuale di Bernoulli

:::def{Variabile Casuale di Beroulli}
Chiamiamo **variabile casuale di Bernoulli** una variabile casuale discreta che può assumere solo i due valori $0$ e $1$, detti anche *fallimento* e *successo*.

Si scrive $X \sim \mathcal{Be} (p)$ cioè $X$ si comporta come una bernulliana di parametro $p \in [0,1]$:

$$
X =
\begin{cases}
1 & \text{successo}\\
0 & \text{fallimento}
\end{cases}
$$
con
- $P(X=1) = p$
- $P(X=0) = q=1-p $

cioè, la sua funzione di massa di probabilità è 
$$
P(X=a)=
p(a) = 
\begin{cases}
p &\text{se }a = 1\\
q &\text{se }a=0\\
0 &\text{altrimenti}
\end{cases}
$$
:::

### Parametri Caratteristici

:::::::ul
:::::li
La **funzione generatrice dei momenti** di una bernulliana è $\phi_X(t) = q + p\,e^t$.
:::dim
$$
\begin{aligned}

\phi_X(t) &=
\sum_{i=1}^{n} e^{tx_i}p(x_i) 
=\\

&= e^{t \cdot 1} \cdot p 
+ e^{t \cdot 0} \cdot q 
=\\
&=
q + e^t  p

\end{aligned}
$$
:::
:::::
:::::li
i **momenti semplici** sono $E[X^n]= p$, con $n\in\mathbb{N}\setminus\{0\}$, quindi il valore atteso è $p$,
:::::
:::::li
la **varianza** è $Var(X) = p - p^2 = pq$.
:::::
:::::::

## Variabile Casuale Binomiale

:::def{Variabile Casuale Binomiale}
A una serie di $n$ ripetizioni di un esperimento, effettuate in maniera identica e indipendente, in cui un certo evento $E$ si verifica (*successo*) in una prova con probabilità $P(E)=p$, associamo la variabile casuale discreta $X$ che rappresenta il numero di successi della ripetizione; tale variabile è detta **variabile casuale binomiale**.

Alternativamente, possiamo dire che a una successione di $n$ bernoulliane ($X_1,X_2,\ldots$) tutte con lo stesso parametro $p$ (probabilità di successo di una prova) associamo una variabile casuale binomiale che descrive il numero di successi della successione.

$$
X = X_1 + X_2 + \ldots +X_n
\Rightarrow 0\leq X \leq n
$$

Si scrive $X \sim \mathcal{B}(n,p)$, cioè $X$ si comporta come una variabile casuale binomiale di parametri $n$ e $p$, con $n \in \mathbb{N}\setminus\{0\}$ numero di prove effettuate e $p \in [0,1]$ la probabilità di successo di una prova.

$$
X = 
\sum_{j=1}^{n} (    Y_j ) 
\ \ \text{con }X \sim \mathcal{B}(n,p)
\text{ e }Y_j \sim \mathcal{Be}(p)
$$

La sua funzione di massa di probabilità è 

$$
P(X=k)=
p(k) = 
\begin{cases}
\displaystyle
\binom{n}{k} p^k q^{n-k} &\text{se } k \in [1,n]\subset\mathbb{N}
\\[8pt]
0 &\text{altrimenti}
\end{cases}
$$
:::

:::::::eg
:::::ul
:::li

Se $k =n $ allora

$$
p(n) = \underbrace{p \cdot p \ldots p}_{n\text{ volte}} = p^n
$$
:::
:::li
Se $k =0 $ allora

$$
p(0) = \underbrace{q \cdot q \ldots q}_{n\text{ volte}} = q^n
$$
:::
:::li
Per altri $k$, abbiamo

$$
p(k) = \underbrace{p \cdot p \ldots p}_{k\text{ volte}} \cdot \underbrace{q \cdot q \ldots q}_{n-k\text{ volte}} = p^k q^{n-k}
$$

:::
:::::
:::::::

### Parametri Caratteristici

:::::::ul
:::::li
il *valore atteso* è 
$\displaystyle
E[X]=n\,p
$

:::dim
$$
\begin{aligned}
E[X] 
&= E \left[\sum_{j=1}^{n} Y_j \right] =\\
&= \sum_{j=1}^{n}E[Y_j] =\\
&\,\downarrow
\footnotesize
\text{dato che $Y_j$ è una bernoulliana}
\\
&= \sum_{j=1}^{n}p =\\
&= n\,p
\end{aligned}
$$
:::
:::::
:::::li
La *varianza* è 
$\displaystyle
Var(X) = n\,p\,q
$

:::dim
$$
\begin{aligned}
Var(X) &= Var \left(
    \sum_{j=1}^{n} Y_j
\right) =\\
&=\sum_{j=1}^{n} Var(Y_j) =\\
&\,\downarrow
\footnotesize
\text{dato che $Y_j$ è una bernoulliana}
\\
&=\sum_{j=1}^{n}p\,q =\\
&= n\,p\,q
\end{aligned}
$$
:::
:::::
:::::li
La *funzione generatrice dei momenti* è 
$\displaystyle
\phi_X(t) = (q + p\,e^t)^n
$

:::dim
$$
\begin{aligned}
\phi_X(t) 
&= \phi_{Y_1}(t) 
+ \phi_{Y_2}(t) 
+ \ldots 
+ \phi_{Y_n}(t) =\\
&\,\downarrow
\footnotesize
\text{dato che $Y_j$ è una bernoulliana}
\\
&= \underbrace{
    (q + e^t p)\,(q + e^t p)\ldots (q + e^t p)}_{n\text{ volte}} =\\
&= (q + e^tp)^n

\end{aligned}
$$
:::
:::::
:::::::

### Proprietà di Riproducibilità

Dati $X \sim \mathcal{B}(n,p)$ e $Y \sim \mathcal{B}(m,p)$ due variabili casuali binomiali indipendenti con $p\in [0,1]$ e $n,m \in \mathbb{N}\setminus\{0\}$, allora

$$
X+Y \sim \mathcal{B}(n+m,p)
$$

### Esempi

:::::::::::eg
> Siano date $X$ e $Y$ due variabili casuali discrete
> - $X \in \{0,1\}$
> - $Y \in \{0,1\}$
> 
> inoltre $X \sim \mathcal{Be}(1/2)$
> - $P(Y=1|X=0) = p(1,0) = \epsilon$,
> - $P(Y=0|X=1) = p(0,1) = 2\epsilon$
> per $\epsilon \in ]0, 1/2[$
> 
> 1. determinare funzioni di massa di probabilità congiunta e marginale
> 2. determinare $E[X]$, $E[Y]$ e $Cov(X,Y)$
> 3. determinare $\epsilon$ tale che $Cov(X,Y) = 0$; per tale valore $X$ e $Y$ sono indipendenti?

:::::::::ol
:::::::li
Se $X$ è una bernoulliana di parametro $1/2$, allora vuol dire che $p_X(0) = p_X(1) = 1/2$;
determiniamo i valori della funzione di massa congiunta:

:::::ul
:::li
Cerchiamo $p(0,1)$:
$$
\begin{aligned}
P(Y=1|X=0) = \epsilon
&= 
\frac{P(Y=1,X=0)}{P(X=0)} =\\
&=
\frac{p(0,1)}{p_X(0)} \\
&\,\Downarrow\\
p(0,1) 
&=
p_X(0)\cdot P(Y=1|X=0) =\\
&= 1/2 \cdot \epsilon
\end{aligned}
$$
:::
:::li
Cerchiamo $p(1,0)$:
$$
\begin{aligned}
P(Y=0|X=1) = 2\epsilon
&= 
\frac{P(Y=0,X=1)}{P(X=1)} =\\
&=
\frac{p(1,0)}{p_X(1)} \\
&\,\Downarrow\\
p(1,0) 
&=
p_X(1)\cdot P(Y=0|X=1) =\\
&= 1/2 \cdot 2\epsilon = \epsilon
\end{aligned}
$$
:::
:::li
Cerchiamo $p(0,0)$:
$$
\begin{array}{c}
\underbrace{p_X(0)}
&= 
&p(0,0) 
&+ 
&\underbrace{p(0,1)} \\

\downarrow&\Downarrow&&&\downarrow\\

1/2 
&= 
&p(0,0)
&+
&\epsilon/2 \\

&\Downarrow\\

p(0,0) 
&= 
&1/2 
& - 
&\epsilon/2
\end{array}
$$
:::
:::li
analogamente per $p(1,1)$: 
$$
\begin{array}{c}
\underbrace{p_X(1)}
&= 
& \underbrace{p(1,0)}
&+ 
& p(1,1)\\

\downarrow&\Downarrow&\downarrow&&\\

1/2 
&= 
&\epsilon
&+
&p(1,1) \\

&\Downarrow\\

p(1,1) 
&= 
&1/2 
& - 
&\epsilon
\end{array}
$$
:::
:::::

Costruiamo la tabella dei valori della coppia:
 $X\backslash Y$ | $0$ | $1$ | $p_X$
 --- | ---| --- | ---
 $0$ | $1/2 - \epsilon/2$ | $\epsilon/2$ | $1/2$
 $1$ | $\epsilon$ | $1/2 - \epsilon$ | $1/2$
 $p_Y$  | $1/2 + \epsilon/2$ | $1/2-\epsilon/2$ | 

Quindi $Y \sim \mathcal{Be}(1/2 - \epsilon/2)$
:::::::
:::::::li
$E[X] =1/2$ e $E[Y] = 1/2 - \epsilon/2$ essendo entrambe delle bernoulliane.

Per la covarianza serve trovare $E[XY]$:
$$
\begin{aligned}
XY &= 
\begin{cases}
1 &\text{se }X=1\cap Y=1\\
0 &\text{se }X=0\cup Y=0
\end{cases}\\
&\,\Downarrow\\
P(XY = a) &=
\begin{cases}
p(1,1) &\text{se }a = 1\\
p(0,1) + p(0,0) + p(1,0) &\text{se }a=0\\
0 &\text{altrove}
\end{cases}\\
&\,\Downarrow\\
E[XY] &=
1\cdot1\cdot p(1,1) + 1\cdot0 \cdot(p(0,1) + p(0,0) + p(1,0)) =\\
&= 1/2 - \epsilon
\end{aligned}
$$
quindi
$$
{\def\arraystretch{1.8}
\begin{aligned}
Cov(X,Y) &= E[XY] - E[X]E[Y] = \\
&= \frac12 - \epsilon - \left(
    \frac12 \cdot \left(
        \frac12 - \frac\epsilon2
    \right)
\right) = \\
&= \frac12 - \epsilon - \frac14 - \frac\epsilon4 = \\
&= \frac14 - \frac34\epsilon
\end{aligned}}
$$
:::::::
:::::::li
$Cov(X,Y) = 0 \Leftrightarrow \epsilon = 1/3$

$X\backslash Y$ | $0$ | $1$ | $p_X$
--- | ---| --- | ---
 $0$ | $\displaystyle\frac13$ | $\displaystyle\frac16$ | $\displaystyle\frac12$
 $1$ | $\displaystyle\frac13$ | $\displaystyle\frac16$ | $\displaystyle\frac12$
 $p_Y$  | $\displaystyle\frac23$ | $\displaystyle\frac13$

Verifichiamo che $p(a,b) = p_X(a)p_Y(b) \ \forall a,b \in \mathbb{R}$

sono quindi indipendenti

:::::::
:::::::::
:::::::::::

:::::::::::eg
> Data una scatola che contiene $10$ palline verdi e $2$ palline blu.
> 1. Si estraggono $3$ palline senza reimmissione,    
> sia $Y$ il numero di palline blu estratte;   
> si vuole conoscere $E[Y]$, $Var(Y)$ e $p_Y(a)$
> 2. Si estrae $1$ pallina con reimmissione per $3$ volte,   
> sia $X$ in numero di palline blu estratte;   
> si vuole conoscere $E[X]$, $Var(X)$ e $p_X(a)$

:::::::::ol
:::::::li
L'esperimento muta il numero di palline ad ogni tentativo, quindi tra loro le estrazioni non sono né indipendenti né identiche, 

:::nota
Non è possibile usare il modello delle variabili casuali binomiali.
:::

Senza reimmissione possiamo avere
$Y \in \{0,1,2\}$, quindi tre casi

:::::ol
:::li
Nessuna pallina blu estratta:
$$
p_Y(0) = \frac{10}{12} \cdot \frac9{11} \cdot \frac8{10} = \frac{6}{11}
$$
:::
:::li
Una pallina blu estratta:
$$
\begin{aligned}
p_Y(1) &= 
\frac2{12}\frac{10}{11}\frac9{10} 
+ \frac{10}{12}\frac2{11}\frac{9}{10}
+ \frac{10}{12}\frac9{11}\frac{2}{10}
=\\[8pt]
&= 3\cdot\frac{2 \cdot 9 \cdot 10}{12 \cdot 11 \cdot 10}= \frac9{22}

\end{aligned}
$$
:::
:::li
Due palline blu estratte:
$$
\begin{aligned}
p_Y(2) &= 1 - P_Y(0) - P_Y(1) =\\
&= 1 -\frac{12}{22} - \frac9{22} =\\
&= \frac1{22}
\end{aligned}
$$
:::
:::::

Quindi il valore atteso è
$$
E[Y] = 2\cdot \frac1{22} + 1\cdot\frac9{22}= \frac{11}{22}
$$
mentre, la varianza è
$$
\begin{aligned}
E[Y^2] 
&= (2)^2\cdot \frac1{22} + \frac9{22}
=\\ 
&= \frac{13}{22}\\
&\,\Downarrow\\
Var(Y) &= E[Y^2] - E[Y]^2 =\\
&= \frac{13}{22} - \left(\frac{11}{22}\right)^2 =\\
&= \frac{13\cdot 22 - 11^2}{22^2} =\\
&= \frac{15}{44}

\end{aligned}

$$
:::::::
:::::::li
Si ripete per 3 volte un esperimento in maniera identica e indipendente; l'esperimento ha successo quando si estrae una pallina blu, quindi ha $2/12$ di probabilità di avere successo e possiamo descrivere i successi come una variabile binomiale:

sia $X \in \{0,1,2,3\}$, per cui $X \sim \mathcal{B}(3,\frac16)$.

- La sua funzione di massa è $p_X(k) = \binom{3}k (\frac16)^k  (\frac56)^{3-k} $,
- il suo valore atteso è $E[X] = np = \frac12 $
- la sua varianza è $Var(X) = npq = \frac5{12}$

Troviamo $F(2)$:
$$
\begin{aligned}
P(X\geq2) &= P(X=2 \cup X=3) =\\
&= P(X=2) + P(X=3) =\\
&= \binom32 \left(\frac16\right)^2 \frac56 + \binom33 \left(\frac16\right)^3 \left(\frac56\right)^0 =\\
&= \frac2{27}
\end{aligned}
$$
:::::::
:::::::::
:::::::::::


## Variabile Casuale di Poisson

:::def{Variabile Casuale di Poisson}
Descriviamo il numero di volte in cui un certo evento (*evento raro*) si verifica in un certo arco di tempo (o qualsiasi altra misura che possa definire un ambito circoscritto) tramite una **variabile casuale di Poisson**.

Si scrive $X \sim \mathcal{Po}(\lambda)$, cioè $X$ si comporta come una variabile casuale di Poisson di parametro $\lambda$, con $\lambda \in \mathbb{R}^+$.

La sua funzione di massa di probabilità è
$$
p(k) = P(X=k) = \begin{cases}
\displaystyle
\frac{\lambda^k}{k!} e^{-\lambda} &\text{se }k \in \mathbb{N}\\[8pt]
0 &\text{altrimenti}
\end{cases}
$$
:::

### Parametri Caratteristici

:::::::::::ul
:::::::::li
La *funzione generatrice dei momenti* è $\phi(t) = e^{\lambda (e^t - 1)}$

:::dim
$$
\begin{aligned}
\phi_X(t) 
&= E[e^{tX}] =\\
&= \sum_{k=0}^{+\infty} e^{tk} 
\frac{\lambda^k e ^{-\lambda}}{k!} =\\

&= e^{-\lambda} 
\sum_{k=0}^{+\infty}
\frac{(\lambda e^t)^k}{k!} =\\
&\,\downarrow
\footnotesize
\begin{array}{l}
\text{La serie }
\sum_{k=0}^{n}
\frac{\alpha^k}{k!}\\
\text{converge a }e^\alpha\\
\text{per }n\to\infty\text{ e }\alpha > 0
\end{array}
\\
&= e^{-\lambda}\, e^{\lambda e^t} =\\
&= e^{\lambda(e^t-1)}
\end{aligned}
$$
:::
:::::::::
:::::::::li

Il *valore atteso* è $E[X]=\lambda$ 

:::dim
Dalla funzione generatrice dei momenti:
$$
\begin{aligned}
E[X] 
&=
\left.\frac{d\phi(t)}{dt}\right|_{t=0} 
=\\[12pt]
&=
\left.\frac{d}{dt} 
e^{\lambda(e^t-1)}\right|_{t=0} =\\[12pt]
&= \left.e^{\lambda(e^t-1)}\lambda e^t\right|_{t=0} =
\lambda
\end{aligned}
$$
:::

:::::::::
:::::::::li
La *varianza* è $Var(X) = \lambda$.

:::dim
Troviamo $E[X^2]$ dalla funzione generatrice dei momenti:
$$
\begin{aligned}
E[X^2]
&=
\left. \frac{d^2\phi(t)}{dt^2}\right|_{t=0} 
=\\
&= 
\left.\frac{d^2}{dt^2} 
e^{\lambda(e^t-1)}\right|_{t=0} =\\[12pt]
&=
\left.\frac{d}{dt} 
e^{\lambda(e^t-1)} \,
\lambda e^t \right|_{t=0} =\\[12pt]
&=
\left.\frac{d}{dt} 
\lambda
e^{\lambda(e^t-1) + t} 
\right|_{t=0} =\\[12pt]
&=
\left.
\lambda
e^{\lambda(e^t-1) + t} 
(\lambda e^t + 1)
\right|_{t=0} =\\
&=
\lambda (\lambda + 1) =\\
&= \lambda^2 + \lambda
\end{aligned}
$$
Quindi la varianza:
$$
\begin{aligned}
Var(X) &= 
E[X^2] - E[X]^2 =\\
&= \lambda^2 + \lambda - \lambda^2 =\\
&= \lambda 
\end{aligned}
$$
:::
:::::::::
:::::::::::


### Riproducibilità

Verifichiamo se vale la proprietà di riproducibilità:

> Immaginiamo $X \sim Po(\lambda_1)$ e $Y \sim Po(\lambda_2)$ con $\lambda \in \mathbb{R}$ e X e Y indipendenti, allora $X+Y \sim Po(\lambda_1+\lambda_2)$:

Dimostriamo:

infatti $\phi_X(t) = e^{\lambda_1(e^t-1)}$ e $\phi_Y(t) = e^{\lambda_2(e^t-1)}$

$$
\phi_{X+Y}(t) = \phi_X \phi_Y
= e^{\lambda_1(e^t-1)}e^{\lambda_2(e^t-1)} = e^{(\lambda_1+\lambda2)(e^t-1)}
$$

Troviamo quindi la tesi.

### Legame con la Binomiale

> Come una variabile casuale di Poisson è legata ad una binomiale?

Supponiamo che $X\sim B(n,p)$ con $n\gg1$ e anche $n\,p = \lambda \in \mathbb{R}^+$

$p \ll 1$

$$
\begin{aligned}
p(k) &= \binom{n}{k}p^k(1-p)^{n-k} = \\
&= 
\frac{n!}{k!(n-k)!} \binom{\lambda}{n}^k \left(1-\frac\lambda{n}\right)^{n-k} =\\
&= 
\frac{\lambda^k}{k!} 
\frac{n (n-1)\ldots (n-k+1)}{n^k} 
\frac{(1 -\frac{\lambda}{n})^n}{(1 -\frac{\lambda}{n})^k}
\end{aligned}
$$

$$
\begin{aligned}
\lim_{n\to\infty} p(k) &= ... =\\ 
&= \frac{\lambda^k}{n!} \times 1 \times \frac{e^{-\lambda}}1 =\\
&= \frac{\lambda^k}{n!} e^{-\lambda}
\end{aligned}
$$

che è la funzione di massa di probabilità di $X\sim Po(\lambda)$

:::nota
$$
\begin{aligned}
\left(1 -\frac{\lambda}{n}\right)^n 
&= 
e^{\ln \left[\left(1 -\frac{\lambda}{n}\right)^n\right]}=\\
&=
e^{n \ln\left(1 -\frac{\lambda}{n}\right)}=
\\ &\,\Downarrow \\
\lim_{n\to\infty} e^{n \ln\left(1 -\frac{\lambda}{n}\right)} 
&=
\lim_{n\to\infty} e^{n \left(\ln(1) -\frac{\lambda}{n}\right)}= \\
&= e^{-\lambda}
\end{aligned}
$$

:::

La variabile casuale di Poisson e la sua distribuzione di probabilità sono anche indicate come *legge degli eventi rari*

:::oss
Se $X\sim B(n,p)$ allora $E[X]=np$, mantre se $X \sim Po(\lambda)$ allora $E[X] = \lambda$ e per $n\to\infty$ si ha $np=\lambda$

$Var(X) = np(1-p) \ n\to\infty \Rightarrow Var(X)=\lambda$
:::

:::eg{di Variabili Casuali Poissoniane}
Errori di stampa di un libro, errori di chiamata dei call center, accessi a un sito internet, decadimento di un particella radioattiva, numero di difetti su produzione giornaliera (vari), numero di incidenti in un tratto di autostrada...
:::

### Esempi

#### 1

> Il numero medio di incidenti in un particolare tratto di autostrada durante una settimana è pari a 3. 
>
> Qual è la probabilità che la prossima settimana non ci siano incidenti?



<!-- :::oss
Per problemi risolvibili con vc di poisson può essere confuso con casi di equazioni di markof
.
::: -->


Immaginiamo che $X\sim Po(3)$ allora $P(X=0)= \frac{\lambda^0 e^{-\lambda}}{0!} \approx e^-3 \sim 5\% $

#### 2

> Un macchinario produce oggetti che hanno probabilità di presentare difetti pari a $0.1$
> 
> Supponendo l'indipendenza nella qualità degli oggetti, con quale probabilità un campione di 10 pezzi ne presenta al più 1 con difetti?

Definiamo $X$ come il numeero do oggetti difettosi su 10, allora $X \sim B(10,0.1)$, per cui vogliamo $P(X\leq1)=P(X=0)+P(X=1) $ cioè

$$
P(X\leq1) = \binom{10}{0} 0.1^0 (0.9)^10 + \binom{10}10.1 (0.9)^9 = ... \simeq 0.7361 
$$

Proviamo ad usare la poissoniana:
$n\gg1$ e $p \ll1$
$X' \sim Po(np)=Po(1)$
$$
P(X'\leq1) = ... \simeq 0.7358
$$

:::oss
La poissoniana rappresenta una buona approssimazione in questo caso
:::

#### 3


> Una compagnia di assicurazioni riceve in media $5$ richieste di rimborso al giorno (Il numero di assicurati è molto più elevato rispetto alle richieste di rimborso).

:::::ol
:::li
> Qual è la probabilità che domani arrivino meno di 3 richieste?

Se $X$ è il numero di richieste in un giorno, allora $X\sim Po(5)$

Applichiamo la funzione di massa della poissoniana:
$$
P(X<3) = P(X=0)+P(X=1)+P(X=2) = ... \simeq 12.4\%
$$
:::::
:::::li
> Supponendo l'indipendenza del numero di richieste di rimborso in giorni diversi, e considerando 1 settimana lavorativa di 5 giorni, qual è la probabilità che la prossima settimana arrivino 20 richieste?

Sia $X_i$ il numero di richieste nel giorno $i$, con $i=1,2,3,4,5$ e sappiamo che le $X_i$ sono indipendenti tra loro.

Se $Y$ è il numero di richieste in una settimana lavorativa, allora $Y = \sum_{i=1}^5 X_i \sim Po(5+5+5+5+5)=Po(25)$

Quindi 
$$
P(Y=20) = \frac{25^{20}}{20!}e^{-25}
$$

Tutto questo perché gli eventi sono riproducibili
:::::
:::::li
> Con le stesse ipotesi della domanda precedente, qual è la probabilità che in una settiamna lavorativa in esattamente 3 giorni arrivino 4 richieste al giorno?

Se $X$ è il numero di richieste in un giorno, $Po(5)$, allora 
$$
P(X=4)= \frac{5^4}{4!}e^-5 \simeq 0.1755
$$

Sia $Z \sim B(5,P(X=4)) = \binom53 (P(X=4))^3 (1-P(X=4))^2$
:::
:::::


## Variabile Casuale Geometrica

:::def
Si ripete in maniera identica e indipendente un esperimento fino ad osservare l'evento $E$ con $P(E)=p$, $X$ è il numero di esperimenti effettuati, per cui $X\in\mathbb{N}\setminus\{0\}$ e si dice che $X \sim G(p)$ "si comporta come una geometrica di parametro $p$".
:::

Si cerca il numero di ripetizioni necessarie per osservare l'evento.

$p(k)\text{ con }k\in\mathbb{N}\setminus\{0\}$
$$
p(k) = P(X=k) = \underbrace{q \cdot q \ldots q}_{\text{tentativi falliti}} \cdot \underbrace{p}_{\text{tentativo in cui si verifica }E} = q^{k-1}p = (1-p)^{k-1}p
$$

### Serie Geometrica

$$
\sum_{j=0}^{+\infty} \alpha^j = \frac1{1 -\alpha}
$$

Per definizione di variabile casuale, il valor medio è

$$
\begin{aligned}
\sum_{k=1}^{+\infty} p(k) = \\
&= \sum_{k=1}^{+\infty} q^{k-1}p =\\ 
&=p \sum_{j=k-1=0}^{+\infty} q^j =\\
&= p \frac1{1-q} =\\
&= p \frac1{1-(1-p)} = \frac{p}p = 1
\end{aligned}
$$


Si dimostra che che 
- $E[X]=\frac1p$
- $Var(X)= \frac{1-p}{p^2}=\frac{q}{p^2}$

:::eg
> Scatola che contiene 3 palline verdi e 4 gialle.   
> $X$ rappresenta il numero di tentativi per estrarre 1 pallina gialla con reimmissione

$X\sim G(\frac47) \Rightarrow E[X] = \frac74, Var(X)=\frac{\frac47}{(\frac47)^2} $

$$
p(k) = (\frac37)^{k-1} \frac47 \\

P(X\geq3) = 1 - P(X<3) = 1 - [P(X=1) + P(X=2)] =\\= 1- (\frac47 + \frac37 \cdot\frac47)
$$
:::

:::nb
Le variabili casuali geometriche *non sono riproducibili*, quindi la somma di due variabili casuali geometriche NON è una variabile casuale geometrica
:::

:::dim
$$
\begin{aligned}
E[X] &= 
\sum_{1}^{+\infty} x_k \, p(X_k) =\\
&= \sum q^{k-1} p =\\
&= p \sum_{k=0}^{+\infty} k q^{k-1} = \\
&= p \sum_{k=0}^{+\infty} \frac{dq^k}{dq} = \\
&= p (\frac {d\sum_{k=0}^{+\infty} q^k}{ dq}) =\\
&= p \frac{d}{dq} (\frac1{1-q}) =\\ 
&= p [- (1-q)^{-2}(-1)] = \\
&= \frac{p}{(1-q)^2} = \frac{p}{(1-(1-p))^2} = \frac{p}{p^2} = \frac1p
\end{aligned}

$$
:::

:::dim 
$$
\begin{aligned}
E[X^2] &= \sum_{k=1}^{+\infty} x^2_k\, p(x_k) =\\
&= \sum_{k=1}^{+\infty} k^2 q^{k-1} p =\\
&= p\,q(\sum_{k=1}^{+\infty} k^2 q^{k-2})=\\
&= p\,q [\sum_{k=1}^{+\infty}(k^2 -k +k)q^{k-2}] = \\
&= p\,q [\sum_{k=1}^{+\infty} (k^2 -k)q^{k-2} + \sum_{k=1}^{+\infty} kq^{k-2}] =\\
&= p [q \sum_{k=0}^{+\infty}k(k-1)q^{k-2} + \sum_{k=0}^{+\infty} k q^{k-1}] =\\
&= p [ q \sum_{k=0}^{+\infty} \frac{d^2 q^k}{dq^2} + \sum_{k=0}^{+\infty} \frac{dq^k}{dq}] =\\
&= p[ q \frac{d^2}{dq^2} (\sum_{k=0}^{+\infty} q^k) + \frac{d}{dq} \sum_{k=0}^{+\infty} q^k]=\\
&\downarrow
\text{serie geometrica}\\
&= p [q \frac{d^2}{dq^2} \frac1{1-q} q^k + \frac{d}{dq} \frac1{1-q}] = \\
&= p [ q\{ -2 (1-q)^{-3} (-1) \} + \frac1{p^2} ] = \\
&= p[ \frac{2q}{p^3} +\frac1{p^2} ] = \frac{2q}{p^2} + \frac1p 
\end{aligned}
$$
:::

:::dim
$$
\begin{aligned}
Var(X) &= E[X^2] - E[X]^2 =\\
&= \frac{2q}{p^2} + \frac1p - (\frac1p)^2 =\\
&= \frac{2(1-p) + p -1 }{p^2} =\\
&= \frac{1-p }{p^2} = \frac{q}{p^2}
\end{aligned}
$$
:::


## Variabile Casuale Binomiale Negativa

> Ripeto un esperimento in maniera identica e indipendente fino ad osservare $n$ volte l'evento $E$; vi associamo una variabile casuale binomiale negativa che conta quanti esperimenti si devono effettuare per osservare tale evento $n$ volte

:::def
In un esperimento l'evento $E$ si osserva con probabilità $p$. Si ripete l'esperimento in maniera identica e indipendente fino ad osservare $E$ per $r$ volte con $r\in\mathbb{N}\setminus\{0\}$. Sia $X$ la variabile che rappresenta il numero di esperimenti che occorre svolgere per poter osservare $r$ volte (anche non-consecutive) e la chiamiamo **variabile binomiale negativa**:
$$
X\sim NB(r, \phi)
$$
con $p\in]0,1[$ e $r\in\mathbb{N}\setminus\{0\}$
:::

:::dim
Sia $X\in\{r,r+1,\ldots ,+\infty\}$

con $k=r,r+1,\ldots ,+\infty$

sia 
$$
\begin{aligned}
p(k) &= P(X=k)=\\
&=P \left(
    \substack{
        \text{nelle prime }k-1\text{ prove,}\\ 
        E\text{ si verifica }r-1\text{ volte } 
    }
    \cap
    \substack{
        \text{nell'ultima prova }\\
        E \text{ si verifica}
    }
\right)  =\\
&=P \left(\substack{
    \text{nelle prime }k-1\text{ prove,}\\ 
    E\text{ si verifica }r-1\text{ volte } 
}\right)
\cdot P \left(\substack{
    E \text{ si verifica}\\
    \text{nell'ultima prova}
}\right) =\\


&\,\downarrow\ \small\text{poiché gli esperimenti sono condotti in maniera identica:}\\

&= \binom{k-1}{r-1}p^{r-1} q^{(k-1)(r-1)} 
\cdot P \left(\substack{
    E \text{ si verifica}\\
    \text{nell'ultima prova}
}\right) = \\
&= \binom{k-1}{r-1} p^r q^{k-r} 
\end{aligned}
$$

Sfruttiamo la definizione di $NB$:
Se $X\sim NB(r,p)$ e $Y_1... Y_r \sim G(p)$
tali per cui $X=\sum_{i=1}^{r}Y_i$, 

allora 
$$
\begin{aligned}
E[X] &= E\left[\sum Y_i\right] =\\
&= \sum E[Y_i] =\\
&= \sum \frac1p = \frac{r}{p}
\end{aligned}
$$

$$
\begin{aligned}
Var(X) &= Var(\sum_{i=1}^{r}Y_i) =\\
&= \sum_{i=1}^{r} Var(Y_i) =\\
&= \sum_{i=1}^{r} \frac{q}{p^2} = r\frac{q}{p^2}
\end{aligned}
$$
:::

