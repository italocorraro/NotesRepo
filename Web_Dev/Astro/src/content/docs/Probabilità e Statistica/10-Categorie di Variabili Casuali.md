---
title: 'Modelli di Variabili Casuali Discrete' 
metaTitle: 'Modelli di Variabili Casuali Discrete'
description: ''
author: 'Italo Corraro'
order: 10
---

### Variabili Casuali di Poisson

<!-- missing context

Proprietà:? -->

$$
e^{-\lambda(e^t-1)}
$$

<!-- missing calc -->
$$
\begin{aligned}
E[X] &=\left. \frac{d\phi(t)}{dt}\right|_{t=0} 
=\\
&= 
\left.\lambda e^{-\lambda(e^t-1)} \frac{d}{dt}\lambda e^{-\lambda(e^t-1)} \right|_{t=0} =\\&= ... = \lambda
\end{aligned}

$$

<!-- missing calc -->
$$
E[X^2] =\left. \frac{d^2 \phi(t)}{dt^2}\right|_{t=0} = ... 
= \lambda^2 + \lambda
$$

$$
Var(X) = E[X^2] - E[X]^2 = \lambda^2 + \lambda - \lambda^2 = \lambda 
$$

### Riproducibilità

Verifichiamo se vale la proprietà di riprodcucibilità:

> Immaginiamo $X \sim Po(\lambda_1)$ e $Y \sim Po(\lambda_2)$ con $\lambda \in \mathbb{R}$ e X e Y indipendenti, allora $X+Y \sim Po(\lambda_1+\lambda_2)$:

Dimostriamo:

infatti $\phi_X(t) = e^{\lambda_1(e^t-1)}$ e $\phi_Y(t) = e^{\lambda_2(e^t-1)}$

$$
\phi_{X+Y}(t) = \phi_X \phi_Y
= e^{\lambda_1(e^t-1)}e^{\lambda_2(e^t-1)} = e^{(\lambda_1+\lambda2)(e^t-1)}
$$

Troviamo quindi la tesi.

---

> Come una variabile casuale di Poisson è legata ad una binomiale?

Supponiamo che $X\sim B(n,p)$ con $n>>1$ e anche $n\,p = \lambda \in \mathbb{R}^+$

$p << 1$

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

:::eg{variabili casuali poissoniane}
Errori di stampa di un libro, errori di chiamata dei call center, accessi a un sito internet, decadimento di un particella radioattiva, numero di difetti su produzione giornaliera (vari), numero di incidenti in un tratto di autostrada.
:::

### Esercizi

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
$n>>1$ e $p <<1$
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
:::
:::li
> Supponendo l'indipendenza del numero di richieste di rimborso in giorni diversi, e considerando 1 settimana lavorativa di 5 giorni, qual è la probabilità che la prossima settimana arrivino 20 richieste?

Sia $X_i$ il numero di richieste nel giorno $i$, con $i=1,2,3,4,5$ e sappiamo che le $X_i$ sono indipendenti tra loro.

Se $Y$ è il numero di richieste in una settimana lavorativa, allora $Y = \sum_{i=1}^5 X_i \sim Po(5+5+5+5+5)=Po(25)$

Quindi 
$$
P(Y=20) = \frac{25^{20}}{20!}e^{-25}
$$

Tutto questo perché gli eventi sono riproducibili
:::
:::li
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

