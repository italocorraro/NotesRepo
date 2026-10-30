---
title: 'Legge dei Grandi Numeri' 
metaTitle: 'Legge dei Grandi Numeri'
description: ''
author: 'Italo Corraro'
order: 8
---

## Disuguaglianza di Markov

:::th{Disuguaglianza di Markov}
Data una variabile casuale $X$ a valori non negativi ($X\geq 0$) e per cui il valore atteso sia definito ($\exists E[X]$), e una costante reale positiva $\alpha \in\mathbb{R}^+$, allora si verifica che *la probabilità che tale variabile sia maggiore o uguale della costante è limitata superiormente dal rapporto del valore atteso della variabile con la costante*:
$$
P(X\geq \alpha) \leq \frac{E[X]}{\alpha}
$$

Questa disuguaglianza permette di stabilire un limite superiore al valore di probabilità dalla sola conoscenza del valore atteso.
:::

:::dim
Vogliamo dimostrare che $P(X\geq \alpha) \leq \frac{E[X]}{\alpha}$.

Calcoliamo il valore atteso di $X$:
$$
{\def\arraystretch{2.2}
\begin{aligned}
E[X] 
&= \int_{-\infty}^{+\infty} x\, f(x)\,dx = \\[-8pt]
&\,\downarrow
\footnotesize
\text{per ipotesi: }x\geq0
\\[-8pt]
&= \int_{0}^{+\infty} x\, f(x)\,dx =\\[-8pt]
&\,\downarrow
\footnotesize
\text{spezziamo l'integrale in }\alpha
\\[-8pt]
&= 
\int_{0}^{\alpha} \underbrace{x\,f(x)}_{\geq 0}\,dx 
+ \int_{\alpha}^{+\infty} x\, f(x)\,dx \geq\\
&\geq 
\int_{\alpha}^{+\infty} x\, f(x)\,dx 
\\
&\,\Downarrow
\footnotesize
{\def\arraystretch{1.2}
\begin{array}{l}
\text{siccome sarà sempre, in questo}\\
\text{integrale, }x \geq a\text{, abbiamo}
\end{array}}
\\
E[X]
&\geq 
\int_{\alpha}^{+\infty} \alpha\,f(x) = \\[-8pt]
&\,\downarrow
\footnotesize
\text{dalla funzione di densità}
\\[-8pt]
&= \alpha \int_{\alpha}^{+\infty}f(x) = P(x\geq a)\\[-8pt]
&\,\Downarrow\\[-8pt]
\frac{E[X]}{\alpha} &\geq P(X \geq a) 
\end{aligned}}
$$

In maniera simile si può dimostrare la stessa legge per il caso discreto.
:::

:::::::eg
> Una fabbrica produce in una settimana un numero di pezzi rappresentato da una variabile casuale di media $50$.
> 1. Cosa si può dire sulla probalilità che la produzione non sia inferiore a $75$ pezzi nella prossima settimana?
> 2. Se si suppone che $Var(X)=25$, cosa possiamo dire della probabilità che la produzione sia compresa tra $40$ e $60$?

Sia $X$ il numero di prezzi prodotti, espresso come variabile casuale tale per cui $E[X]=50$ e $Var(X)=25$  

:::::ol
:::li
Per la diseguaglianza di Markov:
$$
P(X\geq75)\leq \frac{E[X]}{75}\\
\Downarrow\\
P(X\geq75) \leq \frac23
$$

Quindi, la probalilità che la produzione sia almeno $75$ pezzi è al massimo $\frac23$
:::
:::li
Sfruttiamo la diseguaglianza di Čebyšëv:
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
:::::
:::::::

## Disuguaglianza di Čebyšëv

Direttamente dal risultato precedente possiamo ricavare un'altra uguaglianza:

:::th{Disuguaglianza di Čebyšëv}
Data una variabile casuale $X$ con valore atteso $E[X] = \mu$ e varianza $Var(X)=\sigma^2$ e, considerato un numero reale positivo $\lambda \in \mathbb{R}^+$, allora *la probabilità che $X$ assuma un valore compreso $\mu-\lambda\sigma$ e $\mu-\lambda\sigma$ è maggiore di $1-\frac1{\lambda^2}$*:  
$$
P(\bold|X -E[X] \bold|\leq \lambda\,\sigma) 
\geq 1 - \frac1{\lambda^2}
$$
o anche
$$
P(\bold|X -E[X] \bold|\geq \lambda) \leq \frac{Var(X)}{\lambda^2}
$$
:::

:::dim
Osserviamo che
$$
P(|X -\mu|\geq \lambda) \Rightarrow P((X -\mu)^2\geq \lambda^2)
$$

È possibile applicare la disuguaglianza di Markoff, assumendo che $\lambda$ sia sempre non negativa,   
Sia $Z = (X-\mu)^2$ e $\beta = \lambda^2$, allora, per la disuguaglianza di Markov:
$$
\begin{array}{lccccc}
\displaystyle
P(\!\!\!\!
&\underbrace{Z}
&\!\!\!\geq 
&\!\!\!\underbrace{\beta}) 
&\!\!\!\leq 
&\!\!\!\underbrace{\frac{E[Z]}{\beta}} 
&\\[-3pt]

&\large\downarrow&&\!\!\!\!\!\large\downarrow&&&\!\!\!\!\!\!
\raisebox{-6pt}{\huge⤸}\ =\frac{E[(X -\mu)^2]}{\lambda^2}
\\[-3pt]

\displaystyle
P(\!\!\!\!
&(X -\mu)^2    
&\!\!\!\geq 
&\!\lambda^2)
&\!\!\!\leq 
&\!\!\!\displaystyle\frac{Var(X)}{\lambda^2}
&
\end{array}
$$
:::

:::oss
Questa fornisce stime utili in casi in cui $Var(X) \leq 1$;
in questo caso, oltre al valor medio, occorre conoscere anche la varianza di $X$.
:::

## Legge dei Grandi Numeri

### Media Campionaria

:::def{di Media Campionaria}
La media campionaria è una media aritmetica dei valori di un campione
:::

### Enunciato Debole

:::th{Legge Debole dei Grandi Numeri}
Data una successione di variabili casuali $X_1, X_2 \ldots X_n$, tutte indipendenti e identicamente distribuite per cui si ha $\mu =E[X_k]$ e $\sigma^2 = Var(X_k)$, allora, preso un  $\epsilon > 0$ (piccolo a piacere),

$$
\lim_{n\to\infty}P(\bold| 
\frac{\sum_{i=1}^{n}X_i}{n}-\mu
\bold| \geq \epsilon) = 0
$$

ovvero: *al crescere indefinito delle prove, la media campionaria congiunge in probabilità alla media teorica*.
:::
:::dim
Definiamo $\overline{X} = \frac{\sum_{}^{}X_i}{n}$

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

Ci concentriamo su 
$P(|\overline{X}-\mu|\geq\epsilon) = P(|\overline{X}-E[\overline{X}]|\geq\epsilon) \leq \frac{Var(\overline{X})}\epsilon = \frac{\sigma^2}{n\epsilon}
$
$$
\lim_{n\to\infty} P(|\overline{X}-\mu|\geq\epsilon)\leq \lim\frac{\sigma^2}{n\epsilon}=0
$$

Ma per gli assiomi di Kolmmfdj $P(|\overline{X}-\mu|\geq\epsilon)$ non può essere negativo; sarà quindi sicuramente nullo; concludiamo che 

$$
\lim_{n\to\infty}P(|\overline{X}-\mu|\geq \epsilon) = 
\lim_{n\to\infty}P\left(\left|\frac{\sum_{i=1}^{n}X_i}{n}-\mu \right|\geq \epsilon\right) = 0
$$
:::


### Corollario di Bernoulli

:::th{Corollario di Bernoulli}
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
$
X_1 \ldots X_n$
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