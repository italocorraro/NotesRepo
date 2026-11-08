---
title: 'Funzioni di Variabili Casuali'
metaTitle: 'Funzioni di Variabili Casuali'
description: ''
author: 'Italo Corraro'
order: 12
---

## Funzioni di Una Varaibile

Prendiamo una variabile casuale $X$ e una funzione $Y=g(X)$, allora il valore atteso di $Y$ dipende da quello di $X$:

$$
E[Y] = 
\begin{cases}
 \sum_{i=1}^{n} g(x_i)\, p(x_i)& \text{caso discreto}\\
 \int_{-\infty}^{+\infty} g(x)\, f(x)\, dx & \text{caso continuo}
\end{cases}
$$

Poi 

$$
E[Y^2] = E[g^2(X)] 
\begin{cases}
 \sum_{i=1}^{n} (g(x_i))^2\, p(x_i)& \text{caso discreto}\\
 \int_{-\infty}^{+\infty} (g(x))^2\, f(x)\, dx & \text{caso continuo}
\end{cases}
$$

> Ci chiediamo come si ricavi la funzione di ripartizione di $Y$ o la funzione di densità di $X$

È necessario distinguere tre casi: 
### Caso 1

Quando $g(X)$ è una funzione monotona crescente (strettamente).

Per la funzione di ripartizione:

$$
\begin{aligned}
F_Y(a) &= P(Y\leq a)
=\\
&= P(X\leq x^*) =
\\&= 
F_X(x^*) \\
&\,\Downarrow
\footnotesize

\\
g(x^*) &=a\\
&\,\Downarrow
\\
x^* &= g^{-1}(a)\\
&\,\Downarrow
\\
&= F_X(g^{-1}(a))
\end{aligned}
$$


$$
\begin{aligned}
f_Y (a) &= \frac{d F_Y(a)}{da} =\\
&= \frac{d F_X(g^{-1}(a))}{da} = \\
&= \frac{dF_X}{dg^{-1}(a)} \frac{d g^{-1}}{da}=\\
&=
f_X(g^{-1}(a) )
\frac{d g^{-1}(a)}{da}

\end{aligned}
$$

dove 
- $\displaystyle\frac{d g^{-1}(a)}{da} > 0$ perché $g$ è monotona crescente.

:::::eg
Sia $Y=\alpha X +\beta $ con $\alpha \in \mathbb{R}^+$ e $\beta \in \mathbb{R}$
Sia $Y=\alpha X +\beta $ con $\alpha \in \mathbb{R}^+$ 


$$
f_X(x) = 
\begin{cases}
1 & \text{se $x\in[0,1]$}\\
0 & \text{altrove}
\end{cases}
$$

$$
g(x) = y \Rightarrow \alpha X + \beta = y
\Rightarrow x = \frac{y - \beta}{\alpha} = g^{-1}(y)
$$
$$
f_Y (a) = f_X (g^{-1}(a))\frac{g^{-1}(a)}{da} = 
f_X (a -?/\alpha) \frac1\alpha=\\

=\frac1\alpha
\begin{cases}
1 & \text{se }\frac{a -\beta}{\alpha} \in [0,1]\\
0 & altrove
 \end{cases}
$$

Se $X \sim \mathcal{U}(0,1) \Rightarrow Y$ è una variabile uniforme: $Y \sim \mathcal{U}(\beta,\alpha+\beta)$ 
:::::


La funzione di ripartizione:

$$
F_X(x) = 
\int_{-\infty}^{+\infty} f_X(s)\,ds
=
\begin{cases}
0 & \text{se }x < 0\\
x & \text{se }0\leq x\leq 1\\
1 & \text{se } x> 1
\end{cases}
$$

$$
\begin{aligned}
F_Y =
F_X(g^{-1})  
&= F(\frac{a-\beta}{\alpha}) =\\
&=
\begin{cases}
0 & \text{se } \frac{a-\beta}{\alpha} < 0\\
\frac{a-\beta}{\alpha} &0\leq\frac{a -\beta}\alpha \leq1\\
1 & \text{se } \frac{a-\beta}{\alpha}>1
\end{cases}\ =\\
&=
\begin{cases}
0 &\text{se }\alpha < \beta\\
\frac{a-\beta}{\alpha} & \text{se } \beta \leq \alpha\leq\alpha+\beta\\
1 & \text{se }\beta <-1
\end{cases}
\end{aligned}

$$

### Caso 2

Prendiamo $g$ funzione monotona *decrescente*:

$$
\begin{aligned}
F_Y(a) &= P(Y\leq a) =\\
&=P(X\geq x^*) =\\
&= 1 - P(X < x^*)\\
&\,\downarrow
\footnotesize
\begin{array}{l}
\text{poichè $X$ è continua}\\
\text{si ha }P(X=x^*)=0
\end{array}
\\
&= 1 - P(X \leq x^*) = \\
&= 1 - F_X(x^*)\\

&\,\Downarrow
\\
g(x^*) &= a \\
&\,\Downarrow
\\
x^* &= g^{-1}(a)
\end{aligned}
$$

Quindi il caso procede in modo analogo al precedente.

:::oss
L'unica differenza con il caso precedente è l'$1-$
:::


$$
f_Y (a) = \frac{dF_Y(a)}{da} = \\
= \frac{d}{da} [ 1_derivata nulla - F_X ] =\\
= \frac{- F_X (g^{-1})}{da} =\\
= -\frac{dF_X}{dg^{-1}} \frac{dg}{da}=\\
-f_X (g^-1) \frac{dg^{-1}}{da}
$$

Il secondo termine è negativo perché la funzione g è decrescente, ma il $-$ davanti rende tutto positivo.

> Calcolare $F_Y(a) $ e $f_Y(a)$ per $X \sim \mathcal{U}(0,1)$ e $Y= \alpha X + \beta$

:::::eg
Sia $X \sim \mathcal{U}(0,1)$ e $Y = - \ln(X)$ dove $g$ risulta essere una funzione montona decrescente in $[0,1]$.

Troviamo $g^{-1}$:
se $a = -\ln (x)$ allora $x = e^{-a} = g^{-1}(a)$ con $a\in\mathbb{R}^+\cup\{0\}$

La funzione di ripartizione:
$$
F_Y(a) =
1 - F_X(g^{-1}(a)) =\\
= 
\begin{cases}
0 & \text{se }e^{-a}<0\\
e^{-a} & \text{se }e^{-a}\in[0,1]\\
1 & \text{se }e^{-a}>1
\end{cases}\\
&\,\downarrow
\footnotesize
\text{la prima condizione non è mai verificata}
\\

\begin{cases}
e^{-a} & \text{se }a > 0\\
1 & \text{se }a<0
\end{cases}
$$

quindi 

$$
F_Y = 1- F_X =
\begin{cases}
1 - e^{-a} & \text{se }a > 0\\
0 & \text{se }a<0
\end{cases}
$$

quindi $Y \sim \mathcal{E}(1)$ cioè $Y$ è una distribuzione esponenziale.

La funzione di densità dalla derivata di quella di ripartizione: <!-- possibile -->

Oppure con le formule:
$$
f_Y(a) = -f_X (g^{-1}(a)) \frac{dg^{-1}(a)}{da} =\\
%scambiati%
= -
(- e^{-a})
\cdot
\begin{cases}
1 & \text{se } a \geq 0\\
0 & \text{se }a <0
\end{cases}

=\\
=
\begin{cases}
e^{-a} & \text{se } a \geq 0\\
0 & \text{se }a <0
\end{cases}
$$
quindi $Y \sim \mathcal{E}(1)$
:::::

:::nb
Per quanto riguarda la formula della funzione di densità di probabilità di $Y=g(x)$, è possibile unire i casi monotono crescente e decrescente in uno solo.
:::

Se $g$ è monotona, allora 
$$
f_Y(a) = f_X (g^{-1}(a)) \left|\frac{dg^{-1}(a)}{da}\right|
$$

:::::eg
> Sia $X$ una variabile casuale continua con 
>
>$$
>f_X(x) = 
>\begin{cases}
>\alpha x^3 & \text{se }x\in[0,1]\\
>0 & \text{altrove}
>\end{cases}
>$$
>
>1. determinare $\alpha$,
>2. se $Y = 3X^5$, calcolare le funzioni di ripartizione e densità di $Y$

Se $f_X(x)\geq0$ allora $\alpha\geq0$

$$
1 = \int_{-\infty}^{+\infty} f(x)\,dx =\\
= \int_{0}^{1} \alpha x^3 = \ldots=> \alpha = 4
$$
$$
f_X(x) = 
\begin{cases}
4 x^3 & \text{se }x\in[0,1]\\
0 & \text{altrove}
\end{cases}
$$

---

$$
a = 3 x^5 \Rightarrow x = (\frac{a}3)^{-\frac15} = g^{-1}(a)
$$
$$
\frac{dg^{-1}(a)}{da} = 
$$
$$
f(g^{-1}(a)) = 
\begin{cases}
4 (\frac{a}3)^\frac35 & \text{se }a \in[0,3]\\
0 & altrove
\end{cases}
$$

$$
f_Y(a) = f_X(g^{-1}(a)) \frac{dg^{-1}(a)}{da} =\\
= \begin{cases}
\frac4{15} (\frac{a}3)^
\end{cases}
$$

$$
F_Y = F_X(g^{-1})\\
F_X = 
\begin{cases}
 0 & (\frac{a}3)^{\frac15}<0\\
 \displaystyle
 (\frac{a}3)^{\frac45} & (\frac{a}3)^{\frac15}\in[0,1]\\
 1 & (\frac{a}3)^{\frac15}>1
\end{cases}
$$
::::: 


### Caso 3

Prendiamo $g$ *non monotona*, quindi non è invertibile globalmente (non possiamo definire $g^{-1}$ globalmente).

$$
\begin{aligned}
F_Y(a) &= P(Y\leq a) = \\
&\,\downarrow
\footnotesize
\text{chiamiamo le intersezioni di $g$ con l'asse $x$ $x^*_1, x^*_2, \ldots$}
\\
&= P(
    x\in [x^*_1,x^*_2]
    \cup
    x\in [x^*_3,x^*_4]
    \cup
    x\in [x^*_5,x^*_6]
    \cup
    \ldots    
) =\\
&\,\downarrow
\footnotesize
\text{esiti disgiunti}
\\
&= 
P(x\in[x^*_1,x^*_2])
+ P(x\in[x^*_3,x^*_4])
+ P(x\in[x^*_6,x^*_5])
+ \ldots

\\

&= 
[F_X(x^*_2)-F_X(x^*_1)] + [F_X(x^*_4)-F_X(x^*_3)] \ldots \\

&= 
\end{aligned}
$$