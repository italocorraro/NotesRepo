---
title: 'Legge dei Grandi Numeri' 
metaTitle: 'Legge dei Grandi Numeri'
description: ''
author: 'Italo Corraro'
order: 8
---

## Disuguaglianza di Markoff

<!-- check name -->

Data una variabile casuale $X$ a valori non negativi ($X\geq 0$) e una costante $a \in\mathbb{R}^+$

$$
P(X\geq a) \leq \frac{E[X]}a
$$

:::dim
$$
\begin{aligned}
E[X] &= \int_{-\infty}^{+\infty} xf(x)\,dx = \\
&= \underset{x\geq 0} = \int_{0}^{+\infty} '' =
= \int_{0}^{a} {xf(x)}_{\geq 0} + \int_{a}^{+\infty}
\geq \int_{a}^{+\infty} xf(x)\,dx =
\\
\overset{sarà sempre in questo integrale x \geq a, quindi
}\\
\geq \int_{a}^{+\infty} af(x) = 
= a \int_{}^{}f(x) = P(x\geq a)

E[X] \geq aP(X \geq a) \Rightarrow P(X\geq a) \leq \frac{E[X]}a
\end{aligned}
$$

in maniera simile si può dimostrare la stessa legge per il caso discreto
:::

:::oss
È una stima di P(X \geq a) conoscendo solo E[X], cioè una stima utile per a \gt E[X]
:::

:::eg
> Una fabbrica produce in una settimana un numero di pezzi rappresentato da una variabile casuale di media 50.
> 1. Cosa si può dire sulla probalilità che la produzione non sia inferiore a 75 pezzi nella prossima settimana?
> 2. Se si suppone che Var(X)=25, cosa possiamo dire della probabilità che la produzione sia compresa tra 40 e 60?

Sia $X$ il numero di prezzi prodotti espresso come variabile casuale tale per cui $E[X]=50$;    
<!-- MArkoff -->
cerchiamo $P(X\geq75)\leq \frac{E[X]}{75}$

<!-- Cebycev -->
$$
\begin{aligned}
P(40 \leq X \leq 60) &= P(<!-- - 50 a tutti -->) \\
&= P(-10 \leq X -50 \leq 10) =\\
&= P(|X -50|\leq 10) = \\
&= 1 - P(|X - 50| \gt 10) approx \\ 
& approx 1 - \underbrace{P(|X - 50| \geq10)}_{\leq Var(X)/100} \\
&\Downarrow\\
1 - P(|X - 50| \geq10) &\geq 1 - Var(X)/100 = 1 - 25/100 = 3/4
\end{aligned}
$$
:::

## Disuguaglianza di di Cebycev

Data una variabile casuale $X$ con $E[X] = \mu$ e $Var(X)=\sigma^2$ e, considerato un numero $r \in \mathbb{R}$, 

$$
P(|X -\mu|\geq r) \leq \frac{Var(X)}{r^2}
$$

:::dim
$$P(|X -\mu|\geq r) \Rightarrow P((X -\mu)^2\geq r^2)$$
Posso applicare la disuguaglianza di Markoff, assumendo che r sia sempre non negativa:
$$
P((X -\mu)^2\geq r^2) \leq \frac{E[(X -\mu)^2]}{r^2}=\frac{Var(X)}{r^2}
$$
:::

:::oss
Questa fornisce stime utili in casi in cui $Var(X) \leq 1$;
in questo caso, oltre al valor medio, occorre conoscere anche la varianza di $X$.
:::



## Legge dei Grandi Numeri

Data una successione di variabili casuali X_1, X_2, \ldots X_n, tutte indipendenti e identicamente distribuite per cui siano \mu =E[X_k] e \sigma^2 = Var(X_k), allora, \forall epsilon \geq 0 piccolo a piacere,

$$
\lim_{n\to\infty}P(|\frac{\sum_{i=1}^{n}X_i}{n}-\mu|\geq \epsilon) = 0
$$

ovvero: al crescere indefinito delle prove, la media campionaria congiunge in probabilità alla media teorica.

:::dim
Definiamo \overline{X} = \frac{\sum_{}^{}X_i}{n}

E[\overlineX]= E[''] = 
= \frac1n 


<!-- riportato da altra parte -->

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

<!-- deduplica -->

Ci concentriamo su P(|\overline{X}-\mu|\geq\epsilon) = P(|\overline{X}-E[\overline{X}]|\geq\epsilon) \leq \frac{Var(\overline{X})}\epsilon = \frac{\sigma^2}{n\epsilon}

$$
\lim_{n\to\infty} P(|\overline{X}-\mu|\geq\epsilon)\leq \lim\frac{\sigma^2}{n\epsilon}=0
$$

Ma per gli assiomi di Kolmmfdj P(|\overline{X}-\mu|\geq\epsilon) non può essere negativo; sarà quindi sicuramente nullo; concludiamo che 

$$
\lim_{n\to\infty}P(|\overline{X}-\mu|\geq \epsilon) = 
\lim_{n\to\infty}P\left(\left|\frac{\sum_{i=1}^{n}X_i}{n}-\mu \right|\geq \epsilon\right) = 0
$$
:::


### Corollario di Bernoulli

:::th
Al crescere indefinito del numero di prove, la frequenza relativa di un evento converge in probabilità alla probabilità teorica dell'evento.

Si ripete un esperimento $n$ volte in maniera identica e indipendente;
sia $E$ un evento che si può osservare nell'esperimento e sia $P(E)$ la probabilità di tale evento.

Se l'evento $E$ si osserva $n_E$ volte

$$
\lim_{n\to{\infty}} P(|\underbrace{{\frac{n_E}{n}}}_{frequenza relativa di E} - P(E)|\geq \epsilon) = 0
$$
:::

:::dim
Sia $X_i tilde B(P(E)) $ una variabile casuale di Bernoulli associata all'iesimo esperimento tale che 
$$
X_i = 
\begin{cases}
1 & \text{se }E\text{ si verifica nell'i-esimo esperimento}\\
0 & altrove
\end{cases}
$$
$$
E[X_i] = 1 P(E) + 0 (1 P(E)) = P(E) \\
Var(X_i) = P(E) (1 - P(E))
$$

X_1 \ldots X_n
identicamente distribuiti e indipendenti

$$
\frac{\sum_{i=0}^{n}X_i}{n} = \frac{n_E}{n}
$$

dunque, per la legge dei grandi numeri sappiamo che
$$
\lim_{n\to\infty} P(|\frac{\sum_{}^{}X_i}{n} - \mu|\geq\epsilon) = 0 \\
\Downarrow\\
\lim_{n\to\infty} P(|\frac{n_E}{n} - P(E)|\geq\epsilon) = 0
$$

:::