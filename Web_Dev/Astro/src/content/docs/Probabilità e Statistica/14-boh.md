---
title: 'PLACEHOLDER'
metaTitle: 'PLACEHOLDER'
description: ''
author: 'Italo Corraro'
order: 14
---


## Variabile Casuale $\chi$-Quadro 

Scriviamo $\mathcal{C} \sim \chi^2_n$

Date $Z_1,Z_2\ldots,Z_n \sim \mathcal{N}(0,1)$ tutte indipendenti, allora $\mathcal{C }=\sum_{k=1}^{n} Z_k^2$ con $\mathcal{C}\in\mathbb{R}^+\cup\{0\}$

:::::::::ul
:::::::li
$$
Z_k \sim \mathcal{N}(0,1) \Rightarrow
\phi_{Z_k}(t) = e^{\frac{t^2}2}\\

E[Z^4_k] = \frac{d^4}{dt^4}e^{\frac{t^2}2} |_{t=0}\\
=[
    e^{\frac{t^2}2}
    + t^2e^{\frac{t^2}2}
    + 2e^{\frac{t^2}2}
    + 2t^2e^{\frac{t^2}2}
    + 3t^2e^{\frac{t^2}2}
    + t^4e^{\frac{t^2}2} |_{t=0}
] =3
$$

quindi 
$$
Var(\mathcal{C})= \sum_{i=1}^{n} Var(Z_k^2) = \sum_{i=1}^{n}(3-1^2)= 2n
$$
:::::::
:::::::::
- $E[\mathcal{C}]=n$
- $Var(\mathcal{C})= $


Solitamente di $f_{\mathcal{C}}$ viene studiato il *valore critico*:
$$
P(\mathcal{C}>\chi^2_{\alpha,n}) = \alpha\\
P(\mathcal{C}>\chi^2_{\beta,n}) = \beta
$$

<!-- Grafico -->

Esiste una tabella di valori critici della normale standard

$$
Z \sim \mathcal{N}(0,1)\\
P(Z \geq Z_\alpha) = \alpha\\
P(Z \geq -Z_\alpha) = 1-\alpha
$$\




## T di Student

Si scrive $T \sim T_n$ se 
$$
T = \frac{Z}{\sqrt{\mathcal{C}_n/n}}
\
\
\text{con } Z \sim \mathcal{N}(0,1) 
\text{ e } \mathcal{C}_n \sim \chi_n^2
$$

- $T \in \mathbb{R}$
- $E[T]=0$

I valori critici sono: $T_{\alpha,n}$ tali per cui $P(T \geq T_{\alpha,n}) = \alpha$ e $P(T\leq -T_{\alpha,n})=\alpha$

:::::nota
$\mathcal{C}_n/n$ è la media aritmetica delle $Z_k^2$:
$$
\begin{aligned}
\frac{\mathcal{C}_n}{n}
&=\frac{Z_1^2 + Z_2^2 +\ldots+Z_n^2}{n}\\
&\,\downarrow
\footnotesize
\text{per la legge dei grandi numeri}
\\
\lim_{n\to\infty} &P(|\frac{\sum Z_k^2}{n} -1|\geq \epsilon) = 0\\
\text{per }& n\gg1 \text{ si ha } \mathcal{C}_n \simeq 1\\
T &\sim Z
\end{aligned}
$$
:::::


## Processi Stocastici

:::def{di Processo Stocastico}
Una famiglia di variabili casuali che dipendono da uno stesso parametro è detto un *processo stocastico*.
:::

:::def{di Processo Stocastico di Poisson}
Definiamo come $N(t)$ il numero di eventi che si verificano nell'intervallo di tempo $[0,t]$; $N(t)$ si dice **processo stocastico di Poisson** se verifica le seguenti ipotesi:
- $N(0)=0$
- $N(t)$ dipende dalla lunghezza dell'intervallo, ma non dalla sua posizione sull'asse reale, cioè $N(t)$ può rappresentare il numero di eventi tra qualsiasi $[s,s+t]$ con $s\geq0$ (proprietà di *stazionarietà degli eventi*)
- il numero degli eventi di due intervalli disgiunti è indipendente
- $\lim_{h\to0} P(N(h)=1)/h= \lambda$ con $\lambda>0$
- $\lim_{h\to0}  P(N(h)\geq2)/h= \lambda$

Ne ricaviamo che, se $h\ll1$, si ha $P(N(h)=1)\simeq\lambda h$ e $P(N(h)\geq2)\simeq0$
:::

### Funzione di Massa

$$
N(t) \in \{0,\ldots\}\\
p(k) = P(N(t)=k)
= \binom{n}{k}(\frac{\lambda t}{n})^k (1 - \frac{\lambda t}{n})^{n-k}
$$

Prendiamo l'intervallo $[0,t]$ e lo partizioniamo in un numero di intervalli $n$ tutti di ampiezza $t/n$

Poiché $p(k)$ rappresenta la probabilità che in $[0,t]$ si verifichino $k$ eventi, 

per $n\to\infty$
$p(k)=\frac{(\lambda t)^k e^{-\lambda t}}{k!} $ che rappresenta una poissoniana, quindi $N(t)\sim \mathcal{Po}(\lambda)$