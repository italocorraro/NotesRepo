---
title: 'PLACEHOLDER'
metaTitle: 'PLACEHOLDER'
description: ''
author: 'Italo Corraro'
order: 11
---

## Variabile Casuale Uniforme

:::def
$X\sim U(\alpha,\beta)$ con $\alpha,\beta\in\mathbb{R}$ e $\alpha<\beta$

$$
F(\alpha) = 
\begin{cases}
\frac1{\beta-\alpha} & x\in[\alpha,\beta]\\
0 & altrove
\end{cases}
$$
:::


Verifica: $f(x)$ è una funzione di densità di probabilità ?
1. f(x) \geq 0 \forall x \in \mathbb{R} ($\frac1{\beta-\alpha}>0$)
2. 1 = \int_{}^{} f(x)\,dx = 0 + \int_{\alpha}^{\beta} f(x) \,dx + 0 = \frac{\beta-\alpha}{''} = 1

### Funzione di Ripartizione

La funzione di ripar

$$
F(a) = P(X\leq a) = \int_{-\infty}^{a} f(x)\,dx =\\
= \begin{cases}
\int 0 & \text{se } a < \alpha\\
\int0 + \int_{\alpha}^{a}\frac1{\beta-\alpha} &\text{se } \alpha\leq a \leq\beta\\
\int0 + \int_{\alpha}^{\beta}\frac1{\beta-\alpha} + \int_{\beta}^{a}0 &\text{se } a > \beta\\

\end{cases} =
\begin{cases}
0\\
\frac{a -\alpha}{\beta-\alpha}\\
1
\end{cases}
$$

<!-- Grafico -->

### Valore Medio

Dalla definizione di vc conttinua:

$$
E[X] = \int_{-\infty}^{+\infty} x\,f(x)\,dx = \\
= \int_{-\infty}^{\alpha}0 + \int_{\alpha}^{\beta} xf(x) + \int0 =\\
=\frac1{\beta-\alpha} \int_{\alpha}^{\beta} x\,dx = \frac12 \frac{[x^2]_\alpha^\beta}{\beta-\alpha} = 
\\= \beta^2 - \alpha^2 / 2(\beta-\alpha) = \beta+\alpha / 2
$$

$$
E[X^2] = \int_{}^{} x^2 f(x) = 0 + \int + 0 =
\\ = \int_{\alpha}^{\beta} =
\\ \frac{\beta^2 + \alpha^2 + \alpha\beta}3
$$

$$
Var(X) = E[X^2] - E[X]^2 = \ldots =\\
= \frac{(\beta-\alpha)^2}{12}
$$

:::::eg
> Alla fermata dell'autobus, Mario arriva in un momento casuale tra le $7:00$ e le $7:30$; l'autobus passa alle $7$, alle $7:15$ e alle $7:30$.
>
> 1. Qual è la probabilità che Mario debba aspettare l'autobus meno di 5 minuti?
> 2. e almeno 12 minuti?


L'arrivo di Mario alla fermata, evento casuale, lo possiamo descrivere con una variabile casuale uniforme

$X = $ istante di arrivo di Mario alla fermata, compresa tra 0  e 30 minuti

La probabilità che Mario aspetti meno di 5 minuti si realizza se:
- Mario arriva alla prima partenza $X=0$ => P(X=0)=0 perché una variabile continua non può essere un singolo valore,
- arriva prima della seconda sosta $10 < X\leq 15$: = \int_{10}^{15} f(x)\,dx
- arriva prima della terza sosta $25 < X \leq 15$: \int_{25}^{30} f(x)\,dx

La probabilità totale 
$$
\int_{10}^{15} \frac1{30} \int_{25}^{30} \frac1{30} = \frac1{30} 5 + '' = \frac13
$$ 

2da domanda:
$$
P(X \in ]0,3] \cup X\in ]15,18])= \\
P(X \in ]0,3]) + P(X\in ]15,18])= \\
= \int_{0}^{3} \frac1{30} + \int_{15}^{18} = 
\\= \frac15
$$



:::::


## Coppie di varibili Casuali Uniformi Indipendenti

Data $X\sim U(\alpha,\beta)$ uniforme e indipendente con $\alpha,\beta\in\mathbb{R}$ e $\alpha<\beta$
e $Y\sim U(\gamma,\delta) $...

<!-- Grafico -->

La coppia vive nella figura delineata dalle estremità \alpha, beta, theta e gamma e definiamolo

$$
\mathcal{R} \{\alpha,\beta\} \times \gamma\delta
$$ dett rettangolo id definizione

$$
P((X,Y)\in D) = P((X,Y)\in D\cap\mathbb{R}) = \\
= \iint_{D\cap \mathbb{R}} f(x,y) dx dy = \\
= \iint_{} \frac1{\beta-\alpha} \frac1{\delta-\gamma} =\\
= \frac1{('')} \iint_{\mathcal{D}\setminus\mathbb{R}} 1dxdy = \text{Area}(D\cap\mathbb{R}){\beta-\alpha(\delta-\omega)}  
$$

:::::eg
> Immaginiamo che Matteo arrivi casualmente yta le $7:00$ e le $7:30$.
> l'autobus passa indipendentemente dall'arrivo di Mario in un istante casuale tra $7:10$ e $7:25$
> 
> Vogliamo la probabilità che Mario prenda l'automub
:::::

Sia $X\sim U(0,30)$ l'arrivo di mario, $Y\sim U(10,25)$ l'arrivo dell'autobus

Quello che cerciamo è di fatti $P(X\leq Y)=P(X,Y\in \mathcal{D}) = P((X,Y)\in\mathcal{D}\cap\mathcal{R}) = \frac{Area(\mathcal{D}\cap\mathcal{R})}{Area(\mathcal{R})}=\frac7{12}$

<!-- Grafico -->

## Metodi Montecarlo

Sono metodi numerici che sfruttano la teoria della probabilità e le variabili casuali per stimare grandezze deterministiche.

### Metodo di Calcolo di un'Area

Immaginiamo di avere una regione dello spazio $\mathcal{D}$ e immaginiamo di racchiuderla in un rettangolo $\mathcal{R}$ che la contenga e definiamo gli assi cartesiani sui lati del rettangolo (X,Y) e definiamo $a$ e $b$ coordinate del rettangolo, poi $X \sim U(0,a)$ e $Y \sim U(0,b)$ indipendenti
 <!-- disegno -->

Supponiamo di generare $N$ coppie di variabili casuali uniformi $(X,Y)\in \mathcal{R}$   
sia $n_{\mathcal{D}}$ il numero di coppie generate tali che $\in \mathcal{D}$

L'area di $\mathcal{D}$ viene stimata come 

$$
Area(\mathcal{D})\simeq
\frac{Area(\mathcal{R})\, n_{\mathcal{D}}}{N}
$$

$$
P((X,Y)\in \mathcal{D})= \frac{Area(\mathcal{D}\cap \mathcal{R})}{Area(\mathcal{R})} =_\text{poiché }D\subset R = \frac{Area(\mathcal{D})}{Area(\mathcal{R})}
$$

Per il corollario di Bernoulli:
se $E=(X,Y)\in \mathcal{D}$

$$
\lim_{N\to\infty} P(|P(E)-\substack{\text{frequenza relativa di }E}|\geq \epsilon)=0
$$

dove 
$$
frequenza relativa di E = \frac{n_o}{N}
$$

SE $N>>1$ allora $P(E) \simeq \frac{n_{\mathcal{D}}}{N}$

$$
\frac{Area(\mathcal{D})}{Area(\mathcal{R})} \simeq \frac{n_o}{N}\\
\Downarrow\\
Area(\mathcal{D}) \simeq \frac{Area(\mathcal{R})\, n_{\mathcal{D}}}{N}
$$

### Problema degli Spilli di Buffon <!-- francese -->

> Immaginiamo di avere un piano suddiviso in strisce di uguale larghezza (fascio di rette parallele equidistanti che dividono il piano).
> 
> Immaginiamo che la distanza tra due rette sia $2b$; si lanciano $N$ spilli di lunghezza $2a$ con $a<b$ e si contano quanti spilli intersecano o toccano una delle rette, sia $n_I$ tale numero.

Certamente ci saranno due rette più vicine di tutte le altre per ogni spillo
<!-- disegno zoomato spilli tra due rette in varie posizioni -->

Sia $X$ la distanza tra il punto medio di uno spillo e la retta più vicina

È ragionevole supporre che le distanze siano uniformemente distribuite, cioè $X\sim U(0,b)$.


Consideriamo l'orientamento degli spilli:
- sia $\theta$ l'angolo tra lo spillo e la direzione delle rette parallele

Questo angolo è ragionevole supporre che sia anche questo una variabile uniforme $\theta\sim U(0,\pi)$ e supponiamola indipendente da $X$.

Possiamo ora confrontare la posizione degli spilli con le rette per determinare se si toccano:

$P(\text{spillo tocca la retta})$ = $P(X\leq a \sin(\theta))$

$$
P(X\leq a \sin(\theta)) = \\
= \iint_{X\leq a \sin(\Theta)} f(x,\theta)\,dx\,d\theta = \\
= \int_{0}^{\pi}(\int_{0}^{a \sin\theta}f_X(x)f_\theta(\theta)\,dx)\,d\theta = \\
= \frac1b \frac1\pi dx) d\theta
=\\=
\frac1{\pi b} \int_{0}^{\pi} a \sin \theta \, d\theta = \\
= \frac{a}{\pi b} [-cos(\theta)]_0^\pi = \frac{2a}{\pi b}
$$

Per il corollario di Bernoulli:

se $N$ è il numero di lanci e $n_I$ è il numero di lanci in cui lo spillo interseca una retta, allora 
$$
P(\text{uno spillo interseca una retta}) \simeq \frac{n_I}{N}
$$

per $N>>1$

Quindi 
$$
\frac{2a}{\pi b} \simeq \frac{n_I}{N}\\
\Downarrow\\
\pi \simeq \frac{2a\,N}{b\, n_I}
$$

:::nb
Questa stima di $\pi$ è comunque possibile solo partendo dalla sua consocenza perché $\theta\in[0,\pi]$
:::