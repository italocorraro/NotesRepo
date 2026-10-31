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

:::::::eg
> Una fabbrica produce in una settimana un numero di pezzi rappresentato da una variabile casuale di media $50$.
> 1. Cosa si può dire sulla probalilità che la produzione non sia inferiore a $75$ pezzi nella prossima settimana?
> 2. Se si suppone che $Var(X)=25$, cosa possiamo dire della probabilità che la produzione sia compresa tra $40$ e $60$?

Sia $X$ il numero di prezzi prodotti, espresso come variabile casuale tale per cui $E[X]=50$ e $Var(X)=25$  

:::::ol
:::li
Per la diseguaglianza di Markov:
$$
\begin{array}{rcc}
\displaystyle
P(X\geq75) &\leq &\displaystyle\frac{E[X]}{75}\\
&\Downarrow\\
P(X\geq75) &\leq &\displaystyle\frac23
\end{array}
$$

Quindi, la probalilità che la produzione sia almeno $75$ pezzi è al massimo $\frac23$
:::
:::li
Vogliamo trovare $P(40 \leq X \leq 50)$ sfruttando la disuguaglianza di Čebyšëv, per cui riconduciamola a una forma del tipo $P(|X - E[X]|\geq \lambda)$:
$$
\begin{aligned}
P(40 \leq X \leq 60) 
&= 
P(-10 \leq X - \underbrace{50}_{E[X]} \leq 10) =\\
&= 
P(|X - 50| \leq 10) =\\
&= 
1 - P(|X - 50| \gt 10) \simeq \\ 
&\simeq 
1 - P(|X - 50| \geq 10)\\
\end{aligned}
$$

Per sappiamo che 
$$
P(|X - 50| \geq 10) \leq \frac{Var(X)}{10^2} = \frac{25}{100} = \frac14
$$
quindi
$$
\begin{array}{cc}
P(|X - 50| \geq 10) 
&\leq 
&\displaystyle\frac14\\

&\Downarrow\\

\underbrace{1 - P(|X - 50| \geq 10)} 
&\geq  
&1 - \displaystyle\frac14\\

\downarrow&\Downarrow\\

P(40 \leq X \leq 60) 
&\geq 
&\displaystyle\frac34

\end{array}
$$
:::
:::::
:::::::


## Media Campionaria

:::def{di Media Campionaria}
Immaginiamo di ripetere $n$ volte uno stesso esperimento e di associare a ogni ripetizione una variabile casuale $X_i$ che ne rappresenta l'esito.

Se l'esperimento viene ripetuto in maniera identica e indipendente, otteniamo $n$ variabili casuali **[indipendenti] e [identicamente distribuite]** (*i.i.d.*). 

[indipendenti]: ../coppie-di-variabili-casuali/#variabili-casuali-indipendenti "Variabili Casuali Indipendenti"
[identicamente distribuite]: ../coppie-di-variabili-casuali/#variabili-casuali-identicamente-distribuite "Variabili Casuali Identicamente Distribuite"

Indichiamo con $\mu$ la loro media ($E[X_i]=\mu$) e con $\sigma^2$ la loro varianza comuni ($Var(X_i)=\sigma^2$).

Chiamiamo **media campionaria** la media aritmetica dei valori raccolti per il campione:
$$
\overline{X} = \frac{\displaystyle\sum_{i=1}^{n}X_i}{n}
$$
dove $n$ è la dimensione del campione, cioè il numero di valori osservati.
:::

:::nota
Prima di raccogliere i dati, *$\overline{X}$ è una funzione di variabili casuali ed è quindi anch'essa una variabile casuale*: ripetendo l'intero campionamento otterremmo ogni volta una media leggermente diversa. 

Una volta raccolti i dati, otteniamo invece un singolo numero $\overline{x}$ (una realizzazione di $\overline{X}$, cioè, come per ogni altra variabile casuale, $\overline{X}\in \{\overline{x}_1,\overline{x}_2\ldots\}$).
:::

### Proprietà della Media Campionaria

Se le $X_i$ sono i.i.d., allora la media campionaria gode delle seguenti proprietà:
:::::::ul
:::::li
La media campionaria ha valore atteso pari a $\mu$, uguale a quello dei singoli valori. 

In media, cioè su molti campionamenti, non sovrastima né sottostima $\mu$.
$$
E[X_i] = \mu = E[\overline{X}]
$$
:::oss{title="sull'Uso della Media Campionaria"}
La media campionaria è utile per *stimare la media $\mu$ della popolazione*, che di solito è sconosciuta: non potendo osservare tutta la popolazione, ne osserviamo una parte e ne ricaviamo la media.
:::
:::dim
$$
\begin{aligned}
E[\overline{X}] &= \frac{E\left[\sum_{i=1}^{n}X_i\right]}{n} = \\ 
&= \frac1{n}E\left[\sum_{i=1}^{n}X_i\right] =\\ 
&= \frac1n \sum_{i=1}^{n}E[X_i] =\\
&= \frac1n \sum_{i=1}^{n} \mu = \frac{\cancel{n} \mu}{\cancel{n}} = \mu
\end{aligned}
$$
:::
:::::
:::::li
La media campionaria ha varianza pari alla varianza comune dei valori divisa per la dimensione del campione:
$$
Var(\overline{X}) = \frac{\sigma^2}{n} = \frac{Var(X_i)}{n}
$$

:::dim
$$
\begin{aligned}
Var(\overline{X}) 
&= Var \left(\frac{\sum_{i=1}^{n}X_i}{n} \right) =\\
&\,\downarrow
\footnotesize
\begin{array}{l}
Var(\alpha X + \beta)= \alpha^2 Var(X) \text{;}\\
\text{portiamo fuori la costante}
\end{array}
\\
&= \frac1{n^2} Var \left(\sum_{i=1}^{n}X_i \right) =\\
&\,\downarrow
\footnotesize
\text{per la varianza di una somma}
\\
&= \frac1{n^2} 
\left[
    \sum_{i=1}^{n}Var(X_i) 
    + \underset{\text{con }i\neq j}
    {\sum_{i=1}^{n}\sum_{j=1}^{n}}  
    \underbrace{Cov(X_i,X_j)}
    _{\substack{0\\
    \text{perché indipendenti}}}
\right]  = \\
&= \frac1{n^2} \sum_{i=1}^{n}Var(X_i) =\\
&= \frac1{n^2} \sum_{i=1}^{n}\sigma^2 = \frac{\cancel{n}\sigma^2}{n^{\cancel{2}}} = \frac{\sigma^2}n
\end{aligned}
$$
:::

Da questo risultato, osserviamo che più dati si raccolgono ($n$ cresce), più è piccola la varianza:
$$
\lim_{n\to\infty}Var(\overline{X}) = 0
$$
La deviazione standard di $\overline{X}$(detta **errore standard**), che descrive l'oscillazione di $\overline{X}$ attorno alla sua media, è pari a $\sigma/\sqrt{n}$, dove $\sigma$, ricordiamo, è la deviazione standard comune dei valori del campione.

:::oss
Per via del legame quadratico, per dimezzare l'incertezza serve un campione *quattro volte* più grande.
:::
:::::
:::::::

## Legge dei Grandi Numeri
### Enunciato Debole

:::th{Legge Debole dei Grandi Numeri}
Data una successione di variabili casuali $X_1, X_2 \ldots X_n$, tutte [indipendenti] e [identicamente distribuite] per cui si ha $\mu =E[X_k]$ e $\sigma^2 = Var(X_k)$, allora, preso un  $\epsilon > 0$ (piccolo a piacere),

$$
\lim_{n\to\infty}P(\bold|
\overline{X}-\mu
\bold| \geq \epsilon) = 0
$$

ovvero: *al crescere indefinito delle prove, la media campionaria congiunge in probabilità alla media teorica*.
:::

Detto più semplicemente: *la media campionaria approssima la media della popolazione con precisione crescente con le dimensioni del campione*.

:::dim
Date le ipotesi fatte sulla successione di variabili casuali (sono i.i.d.), possiamo dire che $E[\overline{X}]=\mu$, per cui:
$$
P(|\overline{X}-\mu|\geq\epsilon) = P(|\overline{X}-E[\overline{X}]|\geq\epsilon) 
$$
Applicando la diseguaglianza di Čebyšëv:
$$
P(|\overline{X}-E[\overline{X}]|\geq\epsilon) 
\leq \frac{Var(\overline{X})}{\epsilon^2}
$$

Portando al limite per $n\to\infty$, possiamo sfruttare la [proprietà relativa alla varianza della media campionaria](#proprietà-della-media-campionaria):
$$
\frac{Var(\overline{X})}{\epsilon^2} 
\underset{n\to\infty}{\longrightarrow} 0
$$
Risulta dunque che
$$
P(|\overline{X}-E[\overline{X}]|\geq\epsilon) 
\leq 0 \tag{per $n\to\infty$} 
$$
Per il primo assioma di Kolmogorov, lsa probabilità non può essere negativa, quindi, l'unica possibilità è che sia nulla:
$$
P(|\overline{X}-E[\overline{X}]|\geq\epsilon) 
\underset{n\to\infty}{\longrightarrow} 0
$$
:::


### Corollario di Bernoulli (WIP)

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
Sia $X_i \sim B(P(E)) $ una variabile casuale di Bernoulli associata all'iesimo esperimento tale che 
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