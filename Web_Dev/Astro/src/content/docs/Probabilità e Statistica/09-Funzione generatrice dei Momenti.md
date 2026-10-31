---
title: 'Funzione Generatrice dei Momenti' 
metaTitle: 'Funzione Generatrice dei Momenti'
description: ''
author: 'Italo Corraro'
order: 9
---

## Momento Statistico (WIP)

:::def{di Momento Statistico}
Chiamiamo **momento statistico** (o *momento semplice* o semplicemente *momento*) di ordine $k$ con origine in $u$ di una variabile casuale il valore atteso della $k$-esima potenza della variabile:
$$
\mathsf{m}_{u,k} = E[(X - u)^k] \ \ \ \text{con $k\in\mathbb{N}\setminus\{0\}$}
$$

*I momenti di una variabile casuale servono a descrivere la sua distribuzione sotto vari aspetti*.
:::

Il momento di ordine $1$ e origine $0$, è il valore atteso.
I momenti con origine nel valore atteso sono detti **momenti centrati**; il momento centrato di ordine $2$ è la varianza.

:::nota{sui Momenti}
Oltre a valore atteso e varianza, ci sono altre due momenti importanti per una variabile casuale: l'*asimmetria* e la *curtosi*.
:::


## Funzione Generatrice dei Momenti (WIP)

:::def{title="di Funzione Generatrice di Momenti"}
Data una variabile casuale $X$, si definisce **funzione generatrice dei momenti** di $X$, se esiste, la funzione definita come
$$
\phi_X(t) = E[e^{tX}] = 
\begin{cases}
\displaystyle
\sum_{i=1}^{n} e^{tx_i}p(x_i) 
& \text{per $X$ discreta}\\[12pt]
\displaystyle
\int_{-\infty}^{+\infty} e^{tx} f(x) \,dx
& \text{per $X$ continua}
\end{cases}
$$

*La funzione generatrice di momenti raccoglie i momenti della varaiabile casuale associata in una singola funzione*. 

*Un qualsiasi momento di ordine $k$ centrato in $0$ di $X$ può essere ricavato derivando $k$ volte la funzione generatrice dei momenti in $t=0$*.
:::

### Proprietà della Funzione Generatrice di Momenti

::::::::::ul
::::::::li
La funzione ha valore unitario in $0$: 
$\phi(0) = 1 \ \forall X$   
infatti $\phi(0) = E[e^{0X}] = E[1] = 1$
::::::::
::::::::li
La derivata della funzione generatrice calcolata per $t=0$ restituisce il valore atteso:
$$
\left. \frac{d \phi_X(t)}{dt} \right|_{t=0} 
= E[X]
$$
:::dim
$$
\begin{aligned}
\frac{d}{dt}\phi_X(t) 
&= \frac{d}{dt} E[e^{tX}] 
= \\[8pt]
&=
\begin{cases}
\displaystyle
\frac{d}{dt}
\sum_{i=1}^{n}
e^{tx_i}p(x_i) 
& \text{caso discreto} 
\\[12pt]
\displaystyle
\frac{d}{dt}
\int_{-\infty}^{+\infty} 
e^{tx} f(x) \,dx
& \text{caso continuo}
\end{cases}=\\[8pt]

&=
\begin{cases}
\displaystyle
\sum_{i=1}^{n}
\frac{d}{dt} 
e^{tx_i} p(x_i)  
\\[12pt]
\displaystyle
\int_{-\infty}^{+\infty} 
\frac{d}{dt}
e^{tx} f(x) \,dx
\end{cases}=\\[8pt]


&=
\begin{cases}
\displaystyle
\sum_{i=1}^{n}
x_i e^{tx_i} p(x_i)  
\\[12pt]
\displaystyle
\int_{-\infty}^{+\infty} 
x
e^{tx} f(x) \,dx
\end{cases}=\\

&\,\Downarrow
\footnotesize
\text{calcolati in $t=0$}
\\

\left. \frac{d \phi_X(t)}{dt} \right|_{t=0}
&=
\begin{cases}
\displaystyle
\sum_{i=1}^{n}
x_i\, p(x_i)
\\[12pt]
\displaystyle
\int_{-\infty}^{+\infty} 
x\, f(x) \,dx
\end{cases}=\\[10pt]

&=E[X]
\end{aligned}

$$
:::

::::::::
::::::::li
La proprietà precedente si estende ai valori attesi di potenze di $X$ di ordine $k$:
$$
\left. \frac{d^k \phi_X(t)}{dt^k} \right|_{t=0} = E[X^k]
$$

:::oss
Questi sono tutti i momenti con origine in $0$ della variabile.
:::
::::::::
::::::::li
Prese $X$ e $Y$, due variabili casuali indipendenti, allora si verifica che
$$
\phi_{X+Y}(t) = \phi_X(t)\, \phi_Y(t)
$$
:::dim{per il caso continuo}
$$
\begin{aligned}
\phi_{X+Y} 
&= E[e^{t(X+Y)}] 
= \\
&= E[e^{tX}e^{tY}] 
=\\
&=
\int_{-\infty}^{+\infty}
\int_{-\infty}^{+\infty}
e^{tx}e^{ty}
f(x,y) \,dx\,dy 
=\\[8pt]
&\,\downarrow
\footnotesize
\begin{array}{l}
\text{poiché sono indipendenti,}\\
\text{si ha che }f(x,y)=f_X(x)f_Y(y)
\end{array}
\\[8pt]
&=\int_{-\infty}^{+\infty}
\int_{-\infty}^{+\infty}
e^{tx}e^{ty}f_X(x)f_Y(y) \,dx\,dy 
=\\
&\,\downarrow
\footnotesize
\text{separiamo gli integrali}
\\
&=\left( 
    \int_{-\infty}^{+\infty}
    e^{tx}f_X(x)\,dx 
\right)
\left( 
    \int_{-\infty}^{+\infty}
    e^{ty}f_Y(y)\,dy 
\right) =\\[8pt]

&= \phi_X(t)\phi_Y(t)
\end{aligned}
$$
:::
::::::::
::::::::li
Due variabili casuali che presentano la stessa funzione generatrice dei momenti sono identicamente distribuite.
::::::::
::::::::::


## Esempi (WIP)

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
\phi_X(t) &= E[e^{tX}] = \\
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
&=\left. \frac{d}{dt}\phi_X(t) \right|_{t=0} =\\
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
> Cerchiamo $\phi_X(t)$ e $E[X^n]$
$$
\phi_X(t) = e^{0\,t}p(0) \cdot e^{1\,t}p(1) =
q + e^tp
$$

$$
E[X] =\left. \frac{d}{dt} \phi_X(t) \right|_{t=0} = \left. e^tp \right|_{t=0} = p
$$

$$
E[X^2] = \frac{d^2}{dt^2} \phi_X(t)
=\left. \frac{d}{dt} E[X] \right|_{t=0} = 
\left. e^t p \right|_{t=0} = p
$$

Ricaviamo infine che
$$
E{x^n} =\left. e^t p \right|_{t=0} = p
$$

