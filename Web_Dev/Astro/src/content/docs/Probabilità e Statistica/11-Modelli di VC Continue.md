---
title: 'Modelli di Variabili Casuali Continue'
metaTitle: 'Modelli di Variabili Casuali Continue'
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

SE $N\gg1$ allora $P(E) \simeq \frac{n_{\mathcal{D}}}{N}$

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

per $N\gg1$

Quindi 
$$
\frac{2a}{\pi b} \simeq \frac{n_I}{N}\\
\Downarrow\\
\pi \simeq \frac{2a\,N}{b\, n_I}
$$

:::nb
Questa stima di $\pi$ è comunque possibile solo partendo dalla sua consocenza perché $\theta\in[0,\pi]$
:::


## Variabili Casuali Esponenziali

:::def
$X \sim E(\lambda)$ con $\lambda \in \mathbb{R}$

$$
f(x)=\begin{cases}
\lambda e^{-\lambda x} & \text{se $x\geq 0$}\\
0 & altrove
\end{cases}
$$
:::

### Funzioni Caratteristiche

$$
F(a)=P(X\leq a) = \int_{-\infty}^{a}f(x\, dx)=
\begin{cases}
 \int_{-\infty}^{0} 0 + \int_{0}^{a} \lambda ecc.. & \text{se $a\geq0$}\\
 \int_{}^{} 0 & \text{se }a<0
\end{cases}

\\

=
\begin{cases}
1-e^{-\lambda a} &\text{se }a\geq0\\
0 & altrimenti
\end{cases} 
$$

$$
\phi(t) = E[e^{tX}] = \int_{-\infty}^{+\infty} e^{tX} f(x)\,dx =\\
 =\int_{0}^{+\infty} e^{tx} \lambda e^{-\lambda x} \, dx =\\
 = \lambda\int_{0}^{+\infty} e^{-(\lambda - t)x} \, dx =\\
 \begin{cases}
 \lambda [- \frac{e^{-(\lambda - t)x}}{\lambda-t}]_0^{+\infty} & \lambda - t > 0
\\
diverge & \text{se }\lambda - t \leq 0
 \end{cases}
 =\\

 = \frac{\lambda}{\lambda-t} \text{ per }t < \lambda
$$

$$
\begin{aligned}
E[X] =
&\,\downarrow
\footnotesize
\text{deriviamo in 0 la f. generatrice dei momenti:}
\\
= \frac1\lambda
\end{aligned}
$$

$$
\begin{aligned}
E[X^2] = \\
&\,\downarrow
\footnotesize
\text{deriviamo in 0 la f. generatrice dei momenti 2 volte:}
\\
&= \frac{2}{\lambda^2}
\end{aligned}
$$

Allora 
$$
Var(X) = \frac1{\lambda^2}
$$

:::nota
Non vale la riproducibilità, infatti 

> se $X \sim E(\lambda_1)$ e $Y \sim E(\lambda_2)$ indipendenti e $\lambda\in \mathbb{R}^+$

la somma:
$$
\phi_{X+Y} = \phi_X \phi_Y -=\\
\frac{\lambda_1\,\lambda_2}{(\lambda_1-t)(\lambda_2-t)}
$$
non è la forma della funzione genratrice dei momenti di una variabile casuale esponenziale
:::

:::oss
Le variabili casuali esponenziali vengono principalmente usate per descrivere grandezze legate al tempo.
:::

### Proprietà

::::::::::ol
::::::::li
se $c\in\mathbb{R}^+$ allora 
$$
cX \sim E\left(\frac\lambda{c}\right)
$$

:::::dim
$$
\begin{aligned}
\phi_{cX} 
&= E[e^{tcX}] =\\
&=\phi_X (tc) = \\
&= \frac\lambda{\lambda - tc} =\\
&= \frac{\frac\lambda{c}}{\frac\lambda{c} - t} \\
&\,\Downarrow \\
cX &\sim E\left(\frac\lambda{c}\right)
\end{aligned}
$$
:::::
::::::::
::::::::li
Dispositivi indipendenti posti in serie con durata di funzionamento di tipo esponenziale, generano un sistema descritto come v.c. esponenziale con parametro la sommatoria dei parametri dei singoli dispositivi.

Siano $D_1\ldots D_n$ dispositivi in serie, dove $X_k$ indica la durata di funzionamento di $D_k$, allora $X_k \sim E[\lambda_k]$ con $\lambda_k \in \mathbb{R}^+$ e $k$ da 1 a n.

Sia $Y$ la durata di funzionamento del sistema, cioè il minimo tra gli $X_k$.

Studiamo la sua funzione di ripartzione:
$$
\begin{aligned}
F_Y(a) &= P(Y\leq a) =\\
&= P(\min(X_1,X_2\ldots,X_n)\leq a) =\\
&\,\downarrow
\footnotesize
\text{nel caso complementare}
\\
&=  1 - P(\min(X_1,X_2\ldots,X_n)> a)=\\

&=  1 - P(X_1 > a \cap X_2 > a \ldots) = \\
&\,\downarrow
\footnotesize
\text{per l'indipendenza}
\\
&= 1 - P(\prod_{i=1}^n (X_i > a))\\
&= 1- 
\begin{cases}
e^{\lambda_1 a} e^{\lambda_2 a} \ldots e^{\lambda_n a} 
& \text{se } a\geq0\\
\underbrace{1 \cdot 1 \cdot 1 \ldots \cdot 1}_{n \text{ volte}} & \text{se }a < 0
\end{cases} =\\

&\,\downarrow
\footnotesize
\text{portiamo dentro l'}1
\\
&=
\begin{cases}
1 - e^{\sum_{k=1}^{n}\lambda_k a}
& \text{se } a\geq 0\\
0 & \text{se }a < 0
\end{cases}
\\
&\,\Downarrow\\
Y &\sim E\left(\sum_{k=1}^{n}\lambda_k\right)
\end{aligned}
$$


::::::::
::::::::li
Dispositivi in parallelo indipendenti con durata di funzionamento esponenziale.

Consideriamo le ipotesi:
- $X_k$ durata di funzionamento di $D_k$
- $X_k \sim E[\lambda_k]$
- $\lambda_k \in \mathbb{R}^+$
- $X_k$ tutti indipendeti tra loro

Sia $Z$ la durata di funzionamento del sistema, quindi:
$$
Z = \max(X_1,X_2\ldots, X_n)
$$

Quindi
$$
\begin{aligned}
F_Z(a) = P(Z \leq a) 
&= P(\max(X_1,X_2\ldots, X_n)\leq a) =\\
&= P(X_1 \leq a \cap X_2 \leq a  \ldots \cap X_n \leq a) =\\
&= P(\bigcap_{k=1}^n X_k \leq a) =\\
&\,\downarrow
\footnotesize
\text{per l'indipendenza}
\\
&= \prod_{k=1}^{n}  P(X_k \leq a) =\\
&= \prod_{k=1}^{n} F_{X_k}(a) =\\
&= \begin{cases}
\displaystyle
\prod_{k=1}^{n} (1-e^{-\lambda xa}) 
& \text{se }a\geq0\\[12pt]
0 & \text{se } a <0
\end{cases}
\end{aligned}

$$
::::::::
::::::::li
:::::th{Assegnazione di Memoria}
$$
{\def\arraystretch{2}
\begin{aligned}
P(X > t+s | X > t) 
&= \frac{P(X>t+s \cap X>t)}{P(X>t)} =\\
&= \frac{P(>t+s)}{P(X>t)} =\\
&= \frac{e^{-\lambda(t+s)}}{e^{-\lambda t}} = \\
&= e^{-\lambda s} = P(X>s)
\end{aligned}}
$$
:::::

:::eg
Una lampadina usata 6 mesi, secondo questa proprietà, che duri *altri* 6 mesi è la stessa che da nuova duri 6 mesi
:::

:::nb
Questa proprietà non è significativa per tempi lunghi.
:::
::::::::
::::::::::


## Variabile Casuale Gaussiana

Una **variabile casuale gaussiana**, anche detta *normale*, è caratterizzata da 2 parametri:
- $\mu \in \mathbb{R}$
- $\sigma \in \mathbb{R}^+$

$X \sim N(\mu,\sigma^2)$ è una varaibile casuale continua con funzione di densità:
$$
f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{\frac{-(x-\mu)^2}{2\sigma^2}}
$$

:::nota
Questa variabile casuale era originariamente usata per approssimare la variabile casuale binomiale,<!--  ma, tramite il teorema del limite centrale -->
:::

$$
\lim_{n\to\infty} \sum X \text{i.i.d.} \simeq N(\mu,\sigma^2)
$$

:::oss
Ha grande rilevanza per l'inferenza statistica in quanto approssimazione.
:::


:::oss
Con $\sigma <0$ la funzione di densità risulterebbe negativa, per questo tale caso non è ammesso.
:::

La funzione di densità della gaussiana ha la forma di una campana di Gauss, le code della gaussiana sono tendenzialmente trascurate ai limiti.

Il picco della gaussiana si trova essere a $x=\mu$

:::dim
$$
\frac{d f(x)}{dx} = 0
\begin{aligned}
\frac1{\sigma\sqrt{2\pi}} e ^{\ldots} (-2 (x -\mu))  \Rightarrow x= \mu
\end{aligned}
$$
:::


Al variare di $\mu$ per $\sigma$ costante, la curva trasla senza modificare il proprio andamento.

Al varaire di $\sigma$ per $\mu$ costante, il picco resta su $\mu$ ma 
- per $\sigma$ crescenti la curva si stringe e il picco si alza
- per $\sigma$ decrescenti, la curva si appiattisce e il picco scende

:::nota
I termini non sono scelti a caso:
- $\sigma$ rappresenta la deviazione standard,
- $\mu$ rappresenta il valore atteso
:::

Calcoliamo la funzione generatrice dei momenti:

$$
\begin{aligned}
\phi(t) 
&= \int_{-\infty}^{+\infty} e^{tx} f(x)\, dx =\\
&=
\frac{1}{\sigma \sqrt{2\pi}} \int_{-\infty}^{+\infty} e^{tx} e^{\frac{-(x-\mu)^2}{2\sigma^2}} \, dx
=\\
&\,\left\downarrow
\footnotesize
{\def\arraystretch{1.6}
\begin{array}{l}
\text{sia }z= \frac{x-\mu}\sigma \text{ per cui }dx = \sigma dz\\
tx - \frac{(x-\mu)^2}{2\sigma^2} =\\
= t (z\sigma +\mu) - \frac{z^2}2 =\\
= tz\sigma + t\mu - \frac{z^2}2 =\\
= \frac12 (z +t\sigma)^2 -\frac12 t^2 \sigma^2 - t\mu =\\
= - t\mu - \frac12 t^2 \sigma^2 -\frac12 (z + t\sigma)^2 =\\

\,\downarrow
\footnotesize
\text{sia } y= z + t\sigma \text{ per cui }dz = dy
\\
=t\mu- \frac12 t^2 \sigma^2 -\frac12 (y)^2 
\end{array}}\right.
\\
&= 
\frac{e^{t\mu + \frac12 t^2 \sigma^2}}
{\cancel{\sigma} \sqrt{2\pi}} \cancel{\sigma}
\int_{-\infty}^{+\infty} e^{-\frac{y^2}2}\, dy =\\
&\,\downarrow
\footnotesize
\text{calcolo dell'integrale tramite il suo quadrato}
\\
&=  
\frac{e^{t\mu + \frac12 t^2 \sigma^2}}
{ \bcancel{\sqrt{2\pi}}} 
\bcancel{\sqrt{2\pi}} = \\
&= e^{t\mu + \frac12 t^2 \sigma^2}
\end{aligned}
$$


Ricaviamo i momenti:
- $E[X] = \ldots = \mu$
- $Var(X) = \ldots = \sigma^2 $

### Proprietà

::::::::::ul
::::::::li
Riproducibilità: $X$ e $Y$ gaussiane indipendenti

$$
\phi_{X+Y} = \phi_X \, \phi_Y = e^{t(\mu_x + \mu_y) + \frac{t^2}2 (\sigma_x^2 + \sigma_y^2)}
$$
::::::::
::::::::li
Una trasformazione lineare di una gaussiana restituisce una gaussiana.

Immaginiamo di avere $\alpha,\beta\in\mathbb{R}$ con $\alpha \neq 0$ e sia $X\sim N(\mu,\sigma^2)$ e $Y = \alpha X + \beta$
$$
\begin{aligned}
\phi_Y &= E[e^{t(\alpha X + \beta)}] = E[e^{t\beta} e^{t\alpha X}] =\\
&= e^{t\beta} E[e^{(t\alpha)X}] =\\
&= e^{t\beta} \phi_X(t\alpha)=\\
&= e^{t\beta} e^{t\alpha\mu + \frac12 t^2 \alpha^2 \sigma^2} =\\
&= e^{t\beta + t\alpha\mu + \frac12 t^2 \alpha^2 \sigma^2} =\\
&= e^{t(\beta + \alpha\mu) + \frac12 t^2 \alpha^2 \sigma^2} =\\
&\,\Downarrow\\
Y &\sim N(\alpha\mu + \beta, \alpha^2 \sigma^2)
\end{aligned}
$$
::::::::
::::::::::



$$
F(a) = P(X\leq a) = \int_{-\infty}^{a} f(x)\,dx =\\
= 
$$

Questo integrale converge, ma non è possibile risolverlo.

Introduciamo la *variabile casuale normale standard* : $Z\sim N(0,1)$ per cui $F_z(a) =P(Z\leq a) $ è fornita sotto forma di tabella

se $X\sim N(\mu,\sigma^2)$, allora $F_X(a) = P(X-\mu \leq a -\mu) = P(\frac{X-\mu}{\sigma})$

$$
E[\frac{X -\mu}{\sigma}] = \frac1\sigma (E[X] -\mu) = 0\\
Var(\frac{X-\mu}{\sigma}) = \ldots = 1
$$

Troviamo che $\frac{X-\mu}\sigma$ è una normale standard in quanto $\frac{X-\mu}\sigma = Z \sim N(0,1)$


:::::::eg

> Le precipitazioni annuali a Los Angeles hanno distribuzione normale con media di $12.08$ pollici e $\sigma=3.1$ pollici.
>
> Si assume che le precipitazioni di anni successivi siani indipendenti.
>
> 1. Determinare la probabilità che le precipitazioni dei prossimi 2 anni superino complessivamente 25 pollici.
> 2. Determinare la probabilità che le precipitazioni del 2027 superino quelle del 2028 per più di 3 pollici.

Siano $X_1$ le precipitazioni del 2027 e $X_2$ del 2028, che sappiamo essere: $X \sim N(12.08, 3.1^2)$ 

:::::ol
:::li
$$
\begin{aligned}
P(X_1 + X_2 > 25) =\\
&\,\downarrow
\footnotesize
\text{per la riproducibilità}
\\
&= 
\end{aligned}
$$ 
:::
:::li
$$
\begin{aligned}
P(X_1 > X_2 +3) = 
\int_{-\infty}^{+\infty} 
\left(
    \int_{x_2+3}^{+\infty} 
    f(x_1,x_2) \, dx_1 
\right)\, dx_2 =\\
= 
\int_{-\infty}^{+\infty} (
    \int_{x_2+3}^{+\infty} 
    f_{x_1}(x_1)f_{x_2}(x_2) \, dx_1 
    )\, dx_2 =\\
=
\int_{-\infty}^{+\infty} 
f_{x_2}(x_2) \left(
    \int_{x_2+3}^{+\infty} 
    f_{x_1}(x_1) \, dx_1 
\right)\, dx_2 =\\
=
\end{aligned}
$$
Questa strada non è conveniente: l'integrale di $f_{x_1}$ è difficile da determinare; scegliamo un'altra strada:
$$
\begin{aligned}
P(X_1 > X_2 +3) 
&= 
P(X_1 - X_2 > 3) =\\
&\,\downarrow
\footnotesize
\begin{array}{l}
\text{per la prima proprietà delle gaussiane,}
\\ \text{consideriamo $X_2$: }\\
\text{questa è una trasformazione lineare di $X_1$}\\
Y = -X_2 \sim \mathcal{N}(-12.08, (3.1)^2)
\end{array}
\\
&= P(X_1 + Y> 3) =\\
&\,\downarrow
\footnotesize
\begin{array}{l}
\text{Riconduciamo a una forma in cui}\\
\text{possiamo usare la riproducibilità:}\\
X_1 \sim \mathcal{N}(12.08, (3.1)^2)\\
T = X_1 - Y \sim \mathcal{N}(0, 2(3.1)^2)
\end{array}\\
&= P(T>3) =\\
&= 
P \left(
    \frac{T-0}{\sqrt{2(3.1)^2}} >
    \frac{3-0}{\sqrt{2(3.1)^2}} 
\right) =\\
&\,\downarrow
\footnotesize
\text{sfruttando le tavole}
\\
&=
P(Z > 0.68)


\end{aligned}
$$
:::
:::::
:::::::

