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
### Funzione Monotona Crescente

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

### Funzione Monotona Decrescente

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
= \int_{0}^{1} \alpha x^3 = \ldots \Rightarrow \alpha = 4
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
4 (\frac{a}3)^{\frac35} & \text{se }a \in[0,3]\\
0 & altrove
\end{cases}
$$

$$
f_Y(a) = f_X(g^{-1}(a)) \frac{dg^{-1}(a)}{da} =\\
= \begin{cases}
\frac4{15} (\frac{a}3)^?
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


### Funzione non Monotona

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

<!-- qualcosa riguardo l'entropia -->

:::::::eg
> Sia $X \sim U(-1,1)$ e
> $Y = X^2$; vogliamo $F_Y(a)$

Osserviamo che $g$ è una funzione non monotona; inoltre $X$, dalla definizione di variabile casuale uniforma:
$$
f_X(x) = 
\begin{cases}
\displaystyle
\frac12 &\text{se }x\in[-1,1]\\[8pt]
0 &\text{altrove}
\end{cases}
$$

Costruiamo la funzione di ripartizione di $Y$:

$$
F_Y(a) = P(Y\leq a) = P (X^2 \leq a) = 
$$
dividiamo i casi:
:::::ol
:::li
Per $a\lt0$, $P((Y=X^2)\leq a)$ risulta sempre necessariamente nullo.
:::
:::li
Per $a\gt1$, vogliamo $P(X^2\leq1)$, che è sempre vero, perché $X$ è una variabile casuale uniforme $X \sim \mathcal{U}(-1,1)$ e quindi vale $0$ quando $a$ è fuori dall'intervallo $[-1,1]$
:::
:::li
$Y= a$ e $Y =X^2$ sono due intersezioni:
$x^*_1\in[-1,0]$ e $ x^*_2\in[0,1]$
$$
\begin{aligned}
P(Y\leq a) &= P(x^*_1 \leq x \leq x^*_2) = \\
&= P(x^*_1 \lt x \leq x^*_2) =\\
&= F_X(x^*_2) - F_X(x^*_1) =
\end{aligned}
$$

Calcoliamo la funzione di ripartizione di $X$:
$$
\begin{array}{l}
\text{se $X\sim \mathcal{U}(-1,1)$}\\
F_X(a) = 
\begin{cases}
0 &\text{se }a\lt-1\\
1 &\text{se }a>1\\
\int_{-1}^{a}\frac12\,dx = \frac12[x]_{-1}^a = \frac{a+1}2 &\text{se }a\in[-1,1]
\end{cases}
\end{array}
$$

$$
\begin{aligned}
\phantom{(P(Y\leq a))}
&= \frac{x^*_2 -1}2 - \frac{x^*_1 -1}2 =\\
&= \frac{x^*_2 - x^*_1}2
\end{aligned}
$$
<!-- :::nb
Ignoriamo i casi $P(X=a)$ perché, trattandosi di variabili continue, è sempre nulla:
$$
P(X\leq a) = P(X<a)\text{  se $X$ è continua}
$$
::: -->
Per l'intersezione $x^*_k= a \Rightarrow x^*_1 = -\sqrt{a}\text{ e }x^*_2=\sqrt{a} $
:::
:::::

$$
\begin{cases}
0 &\text{se }a\lt0\\
1 &\text{se }a\gt1 \text{per la proprietà della variabile $Y$}\\
\sqrt{a}{* \downarrow} &\text{se }0\leq a\leq1
\end{cases}
$$



:::::::

## Variabile Casuale Lognormale

:::def
Se $X \sim \mathcal{N}(\mu,\sigma^2)$, allora $Y = e^X$ si dice **variabile casuale lognormale** di parametri $\mu$ e $\sigma^2$
:::

### Proprietà Caratteristiche

:::::::::ul
:::::::li
Il valore atteso lo ricaviamo dalla funzione dei momenti di $X$:   
Ricordiamo che $\phi_X(t) = E[e^{tX}] = e^{t\mu + \frac{t^2}2\sigma^2}$, quindi 
$$
E[e^X] = \phi_X(1) = e^{\mu +\frac{\sigma^2}2}
$$
:::::::
:::::::li
La varianza:
$$
\begin{aligned}
E[Y^2] &= E[e^{2X}] = \phi_X(2) =\\
&= e^{2\mu + 2\sigma^2}\\
&\,\Downarrow\\
Var(Y) 
&=
E[Y^2] - E[Y]^2 =\\
&=
e^{2\mu + 2\sigma^2} - 
e^{2\mu + \sigma^2} = \\
&=
e^{2\mu + \sigma^2}(e^{\sigma}-1)
\end{aligned}
$$
:::::::
:::::::li
$Y = e^X = g(X)$, quindi $g$ è una funzione monotona crescente, allora, la funzione di ripartizione di $Y$ è:
$$
F_Y(a) = F_X(g^{-1}(a)) = P(X\leq g^{-1}(a))
$$
poiché non possiamo fare riferimento a $F_X$, usiamo la normale standard:
$$
\begin{aligned}
P(\frac{X -\mu}{\sigma^2} \leq \frac{g^{-1}(a) -\mu}{\sigma^2}) =\\
= P(Z \leq \frac{g^{-1}(a) -\mu}{\sigma^2}) = \\
= F_Z(\frac{g^{-1}(a) -\mu}{\sigma^2})
\end{aligned}
$$
con $g^{-1}(a)$ definito come $Y = e^X = g(X)$, quindi $g^{-1}(a) = \ln(a)$   
ne ricaviamo che
$$
F_Y(a) = F_Z(\frac{g^{-1}(a) -\mu}{\sigma^2}) = F_Z(\frac{\ln(a) -\mu}{\sigma^2})
$$
per $a\geq 0$

:::nb
L'ultima condizione comporta che 
$$
F_Y(a) = 
\begin{cases}
0 &\text{se }a\lt0\\
F_Z(\frac{\ln(a) -\mu}{\sigma^2}) &\text{se }a\geq0
\end{cases}
$$

possiamo ottenere la funzione di densità di $Y$:
$$
\begin{aligned}
f_Y(a) &= \frac{d}{da}F_Y(a) =\\
&= 
\begin{cases}
0 &\text{se }a\lt0\\
\frac{d}{da}F_Z(\frac{\ln(a) -\mu}{\sigma^2}) &\text{se }a\geq0
\end{cases}\\

&\,\downarrow
\footnotesize
\begin{array}{l}
\frac{d}{da}F_Z(\frac{\ln(a) -\mu}{\sigma^2}) &\text{se }a\geq0=\\
= \frac{d F_Z()}{d()}

\end{array}
\\

\end{aligned}
$$
:::
:::::::
:::::::::

### Proprietà

:::::::::ul

:::::::li
Siano $Y_1 \sim lognormal(\mu_1,\sigma_1^2)$ e $Y_2 \sim lognormal(\mu_2,\sigma_2^2)$ indipendenti, allora
$$
Y_1 + Y_2 \sim lognormal(\mu_1+\mu_2,\sigma_1^2+\sigma_2^2)
$$

:::::::
:::::::::


## Funzione di una Coppia di Variabili Casuali

Siano $(X,Y)$ una coppia di variabili casuali e $T = h(X,Y)$ una funzione delle due variabili.

### Caso Discreto

$$
E[T] = E[h(X,Y)] = \sum_{i=1}^{n}\sum_{j=1}^{m}
h(x_i,y_j)p(x_i,y_j)
$$


$$
E[T^2] = E[h^2(X,Y)] = \sum_{i=1}^{n}\sum_{j=1}^{m}
h^2(x_i,y_j)p(x_i,y_j)
$$

Da qui è possibile ricavare la varianza 

### Caso Continuo

$$
E[T] = \iint_{\mathbb{R}^2} h(x,y)f(x,y)\,dx\,dy
$$

$$
E[T^2] = \iint_{\mathbb{R}^2} h^2(x,y)f(x,y)\,dx\,dy
$$

Da qui si ricava poi la varianza.

La funzione di ripartizione 
$$
P(h(x,y)\leq a) = 
\iint_{h(X,Y)\leq a} f(x,y)\,dx\,dy
$$

Se fosse $T = X+Y$:
$$
F_T(a) = \int_{-\infty}^{+\infty} (
    \int_{-\infty}^{-x+a} f(x,y)\,dy
    ) \,dx
$$

se $X$ e $Y$ sono indipendenti:
$$
F_T(a) = (\int_{-\infty}^{-x+a} f_Y(y)\,dy )\cdot(
    \int_{-\infty}^{+\infty} f_X(x)\,dx
    ) \,dx
$$

allora 
$$
f_T(a) = \int_{-\infty}^{+\infty} f_X(x) f_Y(-x+a) \,dx
$$


oppure 
$$
f_T(a) = \int_{-\infty}^{+\infty} f_Y(y) f_X(-y+a) \,dy
$$

### Dispositivi in Serie

> Vogliamo la durata di funzionamento
>
> Immaginiamo di avere $\{D_1,D_2,\ldots,D_n\}$ dispositivi indipendenti in serie, ciascuno con un'associata $X_k$ che ne rappresenta la durata, con $X_k$ variabili casuali continue indipendenti con $f_{X_k}(x)$ e $F_{X_k}(a)$
> 
> Sia $Y$ la durata di funzionamento dell'intero sistema: $Y = \min(X_1,X_2,\ldots,X_n)$

$$
\begin{aligned}
F_Y(a) 
&= P(\min(X_1,X_2,\ldots,X_n)\leq a) =\\
&= 1 - P(\min(X_1,X_2,\ldots,X_n)>a) =\\
&= 1 - P(X_1>a\cap X_2>a \cap \ldots\cap X_n>a)=\\
&\,\downarrow
\footnotesize
\text{per l'indipendenza}
\\
&= 1 - \prod_{i=1}^{n}P(X_i>a) =\\
&= 1 - \prod_{i=1}^{n} (1 - P(X_i\leq a)) =\\
&= 1 - \prod_{i=1}^{n}(1 - F_{X_i}(a)) 
\end{aligned}
$$

La funzione di densità si ottiene derivando.

### Dispositivi in Parallelo

> Vogliamo la durata di funzionamento
>
> Immaginiamo di avere $\{D_1,D_2,\ldots,D_n\}$ dispositivi indipendenti in parallello, ciascuno con un'associata $X_k$ che ne rappresenta la durata, con $X_k$ variabili casuali continue indipendenti con $f_{X_k}(x)$ e $F_{X_k}(a)$
> 
> Sia $S$ la durata di funzionamento dell'intero sistema: $S = \max(X_1,X_2,\ldots,X_n)$

$$
\begin{aligned}
F_S(a) 
&= P(\max(X_1,X_2,\ldots,X_n)\leq a) =\\
&= P(\max(X_1,X_2,\ldots,X_n)\leq a) =\\
&= P(X_1\leq a\cap X_2\leq a \cap \ldots\cap X_n \leq a)=\\
&\,\downarrow
\footnotesize
\text{per l'indipendenza}
\\
&= \prod_{i=1}^{n}P(X_i \leq a) =\\
&= \prod_{i=1}^{n}F_{X_i}(a) 
\end{aligned}
$$

La funzione di densità si ottiene dalla derivata.

:::::eg
> Siano dati 4 dispositivi indipendenti con durate di funzionamento descritte da 4 variabili casuali esponenziali $X_1,X_2,X_3,X_4$ tali per cui $X_k \sim \mathcal{E}(k)$
```mermaid
flowchart lr
b --> a[D1]
b --> b[D2]

a --> c
b --> c

c --> d[D3]
c --> e[D4]

```

> Determinare le funzioni di ripartizione per la densità di funzionamento del sistema e la probabilità che tale densità sia inferiore a 1

Sia $T_1$ la durata di funzionamento dei dispositivi in parallelo $D_1$ e $D_2$ e $T_2$ di $D_3$ e $D_4$; per cui $Y$ è la durata di funzionamento dell'intero sistema ottenuto dalla serie di $T_1$ e $T_2$.

- $Y = \min(T_1,T_2)$
- $T_1 = \max(D_1,D_2)$
- $T_2 = \max(D_3,D_4)$

$$
\begin{aligned}
F_Y(a) 
&= P(\min(T_1,T_2)\leq a) =\\
&= 1 - (1 - F_{T_1}(a))(1 - F_{T_2}(a))
\end{aligned}
$$

dove
$$
\begin{aligned}
F_{T_1} = F_{D_1}(a)F_{D_2}(a) \\
F_{T_2} = F_{D_3}(a)F_{D_4}(a) \\
\end{aligned}
$$

quindi 
$$
\begin{aligned}
F_Y(a) 
&= 1 - (1 - F_{T_1}(a))(1 - F_{T_2}(a)) =\\
&= 
1 - (1 - F_{D_1}(a)F_{D_2}(a))(1 -F_{D_3}(a)F_{D_4}(a)) =\\
&\,\downarrow
\footnotesize
F_{D_k}(a) =
\begin{cases}
1 - e^{ka} &\text{se }a\geq 0\\
0 &\text{altrove}
\end{cases}
\\
&=
\begin{cases}
1 - (1 - (1 - e^k)(1 - e^{2k}))(1 - (1 - e^{3k})(1 - e^{4k})) &\text{se }a\geq0\\
0 &\text{altrove}
\end{cases}=\\
&=
\begin{cases}
=\\
&= 1 - (
    1 - 1 + e^{2k} + e^k - e^{3k}
)(
    1 - 1 + e^{4k} + e^{3k} - e^{7k}
) 
\end{cases}=\\
&=
1 - e^k(1 + e^k - e^{2k})e^{3k}(1 + e^k - e^{4k})
\end{aligned}
$$
:::::

