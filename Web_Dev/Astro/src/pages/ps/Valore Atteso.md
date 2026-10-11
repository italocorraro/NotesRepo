---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Valore Atteso'
metaTitle: 'Valore Atteso'
description: ''
author: 'Italo Corraro'
order: 6
---

:::def{Valore Atteso}
<!-- anche detto Valore Medio o Media Teorica o Speranza Matematica -->
Data una variabile casuale X, si definisce *valore atteso* $E[X]$  di X, se esiste:

$$
E[X] = 
\begin{cases}
\sum_{i=1}^n x_i p(x_i) & \text{ se } x \text{ è una variabile discreta} \\
\int_{-\infty}^{+\infty} xf(x) \, dx & \text{ se } X \text{ è una variabile continua con funzione di densità }f(x)
\end{cases}
$$
:::

## Proprietà

Se una variabile casuale Y = g(X) con X variabile casuale, allora il valore atteso di Y è

$$
E[Y] = E[g(X)] = 
\begin{cases}
\sum_{i=1}^n g(x_i) p(x_i) & \text{ se } X \text{ è discreta} \\
\int_{-\infty}^{+\infty} g(x)f(x) \, dx & \text{ se } X \text{ è continua}
\end{cases}
$$

Inoltre, se $Y = \alpha X + \beta$ con $\alpha, \beta \in \mathbb{R}$, allora si dimostra che $E[Y] = \alpha E[X] + \beta$.

:::dim
Se X è continua, allora 
$$
\begin{aligned}
E[Y] &=
E[\alpha X + \beta] = \int_{-\infty}^{+\infty} (\alpha x + \beta)f(x) = \\
&= \int_{-\infty}^{+\infty} \beta f(x) + \alpha \int_{-\infty}^{+\infty} xf(x)
\end{aligned}
$$
:::


Altra proprietà:

se $Z = h(X_1,X_2,\ldots,X_n)$, allora

$$
E[Z] = 
\begin{cases}
\sum \sum \ldots \sum h(x_1 \ldots x_n)p() \\
\int_{R} \ldots \int_R h(x_1,\ldots,x_n)f(x...)
\end{cases}
$$
Se $Z = X +Y$, allora $E[Z] = E[X] + E[Y]$

:::dim
caso continuo:
$$
\begin{aligned}
E[Z] &=
\int_\mathbb{R}\int_\mathbb{R} (x+y)f(x,y)  =\\[12pt]
&= \int_\mathbb{R}\int_\mathbb{R} xf(x,y)  +
\int_\mathbb{R}\int_\mathbb{R} yf(x,y) =\\[12pt]
&= \int_\mathbb{R} x (\int_\mathbb{R} f(x,y) ) +
\int_\mathbb{R} y (\int_\mathbb{R} f(x,y) ) =\\[12pt]

&= \int_\mathbb{R} x f_x(x) +
\int_\mathbb{R} y f_y(y) =\\[12pt]

&= E[X] + E[Y]
\end{aligned}
$$

\int
:::

:::eg
Dato un esperimento con $S$ spazio campione ed $E$ evento dello spazio, definiamo $X$:
$$
X = 
\begin{cases}
1 &\text{se }E \\
0 &\text{se non }E
\end{cases}
$$
quindi
$$
P(X=a) = 
\begin{cases}
P(E) & \text{se } a = 1 \\
1 - P(E)  & \text{se } a = 0 \\
0 & \text{altrimenti}
\end{cases}
$$
siano $p = P(E)$ e $q = 1 - P(E)$;   
determiniamo $E[X]$:
$$
E[X] = \sum_{i=0}^n x_ip(x_i) = 0 \times p(0) + 1 \times p(1) = p
$$
:::

:::eg
$$
f(x) = 
\begin{cases}
e ^{-x} & x \geq 0 \\
0 & \text{altrimenti}
\end{cases}
$$
$$
\begin{aligned}
E[X] &= \int_{-\infty}^{+\infty} \!\! xf(x) \, dx = \\
&= \int_{-\infty}^0 \!\! xf(x) \, dx + \int_0^{+\infty} \!\! xf(x) \, dx =\\
&=<!-- per parti -->
\end{aligned}
$$
::: 