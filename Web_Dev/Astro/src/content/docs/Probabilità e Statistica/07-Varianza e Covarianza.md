---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Varianza e Covarianza' 
metaTitle: 'Varianza e Covarianza'
description: ''
author: 'Italo Corraro'
order: 7
---

Due concetti strettamente legati a quello di valore medio di una variabile casuale sono la varianza e la covarianza.

Per procedere alla loro definizione, occorre prima conoscere il concetto di *momento di una variabile casuale*:

:::def{di Momento di Variabile Casuale}
Data una variabile casuale $X$, si dice **momento $\bold n$-esimo** di $X$, se esiste, il valore medio della $n$-esima potenza della variabile:

$$
E[X^n] =
\begin{cases}
\displaystyle
\sum_{k=1}^{n} x_n^k\, p(x_k) 
& \text{se } X \text{ è discreta}\\[12pt]
\displaystyle
\int^{+\infty}_{-\infty} x^n f(x) \, dx 
& \text{se } X \text{ è continua}
\end{cases}
$$
:::


## Varianza

:::::def{di Varianza}
Data una variabile casuale $X$ con valor medio $E[X] = \mu$ definito, si dice **varianza** di $X$, se esiste, 
$$
Var(X) = E[(X - \mu)^2]
$$
$$
Var(X) = 
\begin{cases}
\displaystyle
\sum_{k=1}^{n} (x_k-\mu)^2 P(x_k)
& \text{se } X \text{ è discreta}\\[12pt]
\displaystyle
\int_{-\infty}^{+\infty} (x - \mu)^2 f(x) \, dx
& \text{se } X \text{ è continua}
\end{cases}
$$

*La varianza è un parametro che misura di quanto si discostano i valori della variabile casuale dal suo valore atteso*.
:::nb
La varianza è *sempre positiva*.
:::
:::::

:::oss{sulla meccanica}
Se il valor medio è l'analogo del baricentro in meccanica, allora la varianza lo è del momento d'inerzia.
:::

### Proprietà della Varianza 

:::::::::ol
:::::::li{Positività della Varianza}
$Var(X) \geq 0 \ \forall X \text{ variabile casuale}$, cioè, *la varianza è sempre positiva* o, in casi particolari (quando la variabile può assumere come valore solo il suo valor medio), nulla,
:::::::
:::::::li{Legame con il Valore Atteso}
$Var(X) = E[(X-\mu)^2] = E[X^2] - E[X]^2$
:::dim{della proprietà 2}
Partiamo dalla definizione di varianza e svolgiamo il quadrato:
$$
\begin{aligned}
E[(X-\mu)^2] 
&= E[ X^2 + \mu^2 - 2\mu X] = \\

&\,\downarrow
\footnotesize
\begin{array}{l}
\text{per la linearità del valor medio,}\\
\text{possiamo separare gli addendi}
\end{array}
\\
&= E[X^2] + E[\mu^2] + E[-2\mu X] = \\

&\,\downarrow
\footnotesize
\begin{array}{l}
\mu\text{ è un numero, quindi il suo}\\
\text{valor medio coincide con se stesso}
\end{array}
\\
&= E[X^2] + \mu^2 -2\mu E[X] =\\

&\,\downarrow
\footnotesize
\text{poiché }\mu = E[X]\\
&= E[X^2] + E[X]^2 -2E[X]^2 = \\

&= E[X^2] - E[X]^2
\end{aligned}
$$
:::
:::::::
:::::::li{Varianza e Costanti}
$Var(\alpha X + \beta)= \alpha^2 Var(X)$ con $\alpha,\beta \in \mathbb{R} $

:::::dim{della proprietà 3}
Sia $Y = \alpha X + \beta$
quindi
1. $E[Y] = \alpha E[X] + \beta = \mu_Y$
2. $E[X] = \mu_X$
$$
\begin{aligned}
Var(\alpha X + \beta) 
&= Var(Y) =\\
&\,\downarrow
\footnotesize
\text{per definizione}\\
&= E[(Y-\mu_Y)^2] =\\
&\overset{\tiny(1)}= E[(\alpha X + \beta - (\alpha \mu_X + \beta))^2] =\\
&= E[(\alpha X - \alpha \mu_X)^2] = \\
&= E[\alpha^2(X - \mu_X)^2] =\\
&\,\downarrow
\footnotesize
\text{per linearità del valor medio}\\
&= \alpha^2 E[(X-\mu_X)^2] =\\
&= \alpha^2 Var(X)
\end{aligned}
$$
:::::
:::oss
Se $\alpha = 0$, allora $Var(\beta) = 0$, cioè, *la varianza di una costante è sempre nulla*
:::
:::::::
:::::::::

### Deviazione Standard

:::Def{di Deviazione Standard}
Definiamo **deviazione standard** (o *scarto quadratico medio*) un indice riassuntivo del discostamento dei valori di una variabile casuale rispetto alla sua media.

La deviazione standard si può calcolare come la radice della varianza:
$$
\sigma = \sqrt{Var(X)}
$$
:::

:::oss{sulle Unità di Misura}
Se $X$ ha significato fisico, allora avrà un'unità di misura, per cui, la varianza della variabile avrà come unità di misura il quadrato dell'unità di misura di $X$; per questa ragione, si introduce lo **scarto quadratico medio** che equivale alla radice quadrata della varianza (mantiene la stessa unità di misura).
:::

## Covarianza

:::::def{di Covarianza}
Date due variabili casuali $X$ e $Y$ con valor medio $\mu_X$ e $\mu_Y$ rispettivamente, si dice **covarianza**, se esiste,

$$
Cov(X,Y) = 
E[(X - \mu_X)(Y - \mu_Y)] = \\
=
\begin{cases}
\displaystyle \sum_{i=1}^n \sum_{j=1}^m (x_i - \mu_X)(y_j -\mu_Y)p(x_i y_j)
& \text{per } X, Y \text{ discrete} \\[14pt]
 
\displaystyle \iint_{-\infty}^{+\infty} (x-\mu_X)(y - \mu_Y) f(x,y) \, dx \, dy
& \text{per } X, Y \text{ continue}
\end{cases}
$$

*La covarianza di due variabili casuali descrive il modo in cui una cambia rispetto all'altra*.
:::::

### Proprietà della Covarianza

::::::::::ol
::::::::li{Segno della Covarianza}
La covarianza mantiene sempre lo stesso segno per due variabili
::::::::
::::::::li{Commutatività della Covarianza}
$Cov(X,Y) = Cov(Y,X)$, cioè, l'ordine degli argomenti della covarianza è irrilevante.
::::::::
::::::::li{Covarianza come Generalizzazione della Varianza}
$Cov(X,X) = Var(X)$; possiamo vedere la covarianza come fosse la versione generalizzata della varianza.

:::dim
$$
\begin{aligned}
Cov(X,X) &= E[(X − \mu_X )(X −\mu_X )]= \\
&=E[(X −\mu_X )^2 ]=\\
&=E[(X −E[X])^2 ]=\\
&=Var(X)
\end{aligned}
$$
:::
::::::::
::::::::li{Legame con il Valore Atteso}
$Cov(X,Y) = E[XY] - E[X]E[Y]$
:::dim
$$
\begin{aligned}
E&[(X - \mu_X)(Y - \mu_Y)] =\\
&= E[XY + \mu_X\mu_Y - \mu_X Y - \mu_Y X] = \\
&= E[XY] + E[\mu_X\mu_Y] + E[-\mu_X Y] + E[-\mu_Y X] =\\
&= E[XY] + \mu_X\mu_Y - \mu_X E[Y] - \mu_Y E[X] =\\
&\,\downarrow
\footnotesize
\mu_X = E[X], 
\mu_Y = E[Y]
\\
&= E[XY] +E[X]E[Y] - E[X]E[Y] - E[Y]E[X] = \\
&= E[XY] - E[X]E[Y]
\end{aligned}
$$
:::

Da questa proprietà possiamo ricavare una particolare conclusione:

:::::th{Covarianza Nulla delle Indipendenti}
Date due variabili casuali $X$ e $Y$, che la loro covarianza sia nulla è condizione necessaria, ma non sufficiente, perché queste siano indipendenti.
:::::
In parole semplici: *se due variabili casuali sono indipendenti, allora la loro covarianza è nulla; non è vero il contrario*.

Questo perché se due variabili casuali sono indipendenti allora $E[XY] = E[X]E[Y]$, da cui segue che $Cov(X,Y) = 0$.
::::::::

::::::::li{Varianza della Somma}
$Var(X + Y) = Var(X) + Var(Y) + 2 Cov(X,Y)$
:::oss
*La varianza non è commutativa rispetto alla somma*, infatti compare il terzo temine $2 Cov(X,Y)$
:::
:::dim
Sia 
- $Z = X + Y$, per cui 
- $E[Z] = \mu_Z = E[X] +E[Y] = \mu_X +\mu_Y$

allora
$$
\begin{aligned}
Var(X + Y) &= Var(Z) = E[(Z - \mu_Z)^2] =\\
&= E[(X+Y - (\mu_X + \mu_Y))^2] =\\
&= E[((X - \mu_X) + (Y - \mu_Y))^2] =\\
&= E[(X - \mu_X)^2 + (Y - \mu_Y)^2 + 2(X - \mu_X)(Y - \mu_Y)] = \\
&= E[(X - \mu_X)^2] +E[(Y - \mu_Y)^2] + E[2(X - \mu_X)(Y - \mu_Y)] = \\
&= Var(X) + Var(Y) + 2 Cov(X,Y)
\end{aligned}
$$
:::

Questo risultato si può estendere a un qualsiasi numero di variabili:
:::th
Date $n$ variabili casuali $X_1,X_2 \ldots, X_n$, 

$$
Var \left(\sum_{i=1}^n X_i \right) 
= \sum_{i=1}^n Var(X_i) + \underset{\text{con }i \neq j}{\sum_{i=1}^n \sum_{j=1}^n} Cov(X_iX_j)
$$
:::
::::::::
::::::::li
Siano $X_1,X_2 \ldots,X_n$ e $Y_1,Y_2\ldots,Y_m$ variabili casuali, allora
$$
Cov \left( \sum_{i=1}^{n}X_i, \sum_{j=1}^{m}Y_j \right) =
\sum_{i=1}^{n} \sum_{j=1}^{m} Cov(X_i,Y_j)
$$
::::::::
::::::::li
Date $X$ e $Y$ variabili casuali e $\alpha \in \mathbb{R}$, si dimostra che $Cov(\alpha X,Y) = Cov(X, \alpha Y) = \alpha Cov(X,Y)$
::::::::
::::::::::


### Covarianza Nulla

> Sia data la seguente funzione di densità:
> $$
> f(x,y) = 
> \begin{cases}
> \displaystyle
> \frac{1}{\pi R^2} & x^2 + y^2 \leq R^2 \\[8pt]
> 0 & \text{altrove}
> \end{cases}
> $$
> Vogliamo verificare che una covarianza nulla non implica che due variabili casuali siano indipendenti.

Calcoliamo le funzioni di densità marginale per verificare la mancanza di indipendenza:

Partiamo con $f_X(x)$:

$$
{\def\arraystretch{2}
    \begin{aligned}
f_X(x) &= \int_{-\infty}^{+\infty} f(x,y)\,dy = \\
&= \int_{x^2+y^2\leq R^2} f(x,y)\,dy 
+ \int_{\text{altrove}} 0 \,dy =\\
&= \int_{x^2+y^2\leq R^2} f(x,y)\,dy 
\end{aligned}
}
$$

L'intervallo di integrazione è 
$x^2 + y^2 \leq R^2 $, ovvero
$$
-\sqrt{R^2 -x^2} \leq y \leq \sqrt{R^2 -x^2}
$$

dunque, l'integrale risulta

$$
{\def\arraystretch{2.4}
\begin{aligned}
f_X(x) 
&= \int_{x^2+y^2\leq R^2} f(x,y)\,dy = \\
&= \int_{-\sqrt{R^2 -x^2}}^{+\sqrt{R^2 -x^2}} \frac1{\pi R^2}\,dy =\\
&= \frac1{\pi R^2} \left[ \underset{\phantom y}{\ y\ } \right]_{-\sqrt{R^2 -x^2}}^{+\sqrt{R^2 -x^2}} = \\
&= \frac{2\sqrt{R^2 -x^2}}{\pi R^2} 
\end{aligned}}
$$

o, più precisamente, se verifichiamo le condizioni di esistenza: 
$$
f_X(x) = 
\begin{cases}
\displaystyle
\frac{2\sqrt{R^2 -x^2}}{\pi R^2}  & \text{se }|x| < R \\
0 & \text{altrove}
\end{cases}
$$

Il calcolo è analogo anche per $Y$ e non è difficile osservare che $f(x,y) \neq f_X(x)f_Y(y)$, quindi *$X$ e $Y$ non sono indipendenti*.

Calcoliamo la covarianza:

:::::ul
:::li
Il valore atteso di $X$ è
$$
{\def\arraystretch{2.2}
\begin{aligned}
E[X] 
&= \int_{-\infty}^{+\infty}x f_X(x) \,dx =\\
&= \int_{-R}^{+R} x\, \frac{2 \sqrt{R^2-x^2}}{\pi x^2} \, dx + \int_{\text{altrove}} x\, 0\, dx
\end{aligned}}
$$
$x \frac{2 \sqrt{R^2 - x^2}}{\pi x^2} \, dx $
è una funzione dispari ($f(-x) = -f(x)$) e l'integrale di una funzione dispari in un intervallo simmetrico è nullo, quindi, nel complesso abbiamo $E[X]=0$;    
analogamente si verifica $E[Y]=0$

:::
:::li
Il valore atteso di $XY$ è
$$
{\def\arraystretch{2.2}
\begin{aligned}
E[XY]
&= 
\int_{-\infty}^{+\infty}
\int_{-\infty}^{+\infty} 
x\,y\, f(x,y) \,dx\,dy =\\ 
&=
\iint_{x^2 + y^2 \leq R^2} x\,y \,\frac{1}{\pi R^2} \,dx\,dy 
\end{aligned}}
$$
anche qui troviamo un integrale nullo: $E[XY]=0$
:::
:::::

Dai calcoli ricaviamo che $Cov(X,Y) = E[XY] - E[X]E[Y] = 0$ e anche $E[XY]=E[X]E[Y]$, ma anche che $X$ e $Y$ sono dipendenti; $Cov(X,Y) \nRightarrow X,Y \text{ indipendenti}$.

### Modellazione di un Esperimento

> Vogliamo modellare un esperimento di fisica in laboratorio in termini di variabili casuali:
> Facciamo l'ipotesi che le misure dei parametri dell'esperimento siano fatte tutte con lo stesso metodo e strumenti e ipotizziamo anche che gli esperimenti siano tra loro indipendenti.
>
> Si ripete un esperimento in maniera identica e indipendente, ma l'esperimento non riporterà mai lo stesso risultato; rappresentiamo la misurazione del parametro di controllo come la somma di una variabile casuale (*errore*) con il valore teorico (*corretto*).

Siano $X_1, X_2 \ldots, X_n$ gli $n$ esiti degli $n$ esperimenti; poiché questi sono indipendenti (per ipotesi), allora lo saranno anche le associate variabili casuali.

Se gli esperimenti sono svolti in maniera identica, allora saranno identicamente distribuite le variabili casuali, cioè avranno tutte la stessa funzione di densità di probabilità.   
Si dice che $\{X_1,X_2\ldots,X_n\}$ sono variabili casuali indipendenti e identicamente distribuite (*i.i.d.*)

Ne deriva che
:::::ol
:::li
Se sono indipendenti, allora $Cov(X_i,X_j) = 0$ per $i\neq j$
:::
:::li
Se sono identicamente distribuite, allora hanno lo stesso valore medio e varianza:
$$
\begin{cases}
E[X_i] = E[X_j] & \forall i,j \in \mathbb{R} \\
Var(X_i) = Var(X_j) = \sigma^2 & \forall i,j \in \mathbb{R}
\end{cases}
$$
:::
:::::


Sia $\overline{X} = \frac{\sum_{i=1}^{n}X_i}{n}$ la media aritmetica delle misure; anch'esso è una variabile casuale, con le seguenti proprietà:
:::::ul
:::li
Il suo valore medio:
$$
{\def\arraystretch{2.2}
\begin{aligned}
E[\overline{X}] 
&= \frac{E[\sum_{i=1}^{n}X_i]}{n} = \\ 
&= \frac1{n}E\left[\sum_{i=1}^{n}X_i\right] =\\ 
&= \frac1n \sum_{i=1}^{n}E[X_i] =\\
&= \frac1n \sum_{i=1}^{n} \mu = \frac{\cancel{n} \mu}{\cancel{n}} = \mu
\end{aligned}}
$$
:::li
La sua varianza:
$$
{\def\arraystretch{2.2}
\begin{aligned}
Var(\overline{X}) 
&= Var \left(\frac{\sum_{i=1}^{n}X_i}{n} \right) =\\
&\,\downarrow
\footnotesize
{\def\arraystretch{1.2}
\begin{array}{l}
Var(\alpha X + \beta)= \alpha^2 Var(X) \\
\text{portiamo fuori il denominatore}\\
\text{perché è costante}
\end{array}}
\\
&= \left(\frac1n \right)^2 Var \left(\sum_{i=1}^{n}X_i \right) =\\[-8pt]
&
\,\downarrow
\footnotesize
{\def\arraystretch{1.2}
\text{per la varianza della somma}}
\\
&= \frac1{n^2} 
\left[
    \sum_{i=1}^{n}Var(X_i) 
    + \underset{\text{con }i\neq j}
    {\sum_{i=1}^{n}\sum_{j=1}^{n}}  
    \underbrace{Cov(X_i,X_j)}
    _{\substack{0\\\text{perché indipenti}}}
\right]  = \\
&= \frac1{n^2} \sum_{i=1}^{n}Var(X_i) =\\
&\,\downarrow
\footnotesize
\text{la varianza è la stessa tra le variabili}
\\
&= \frac1{n^2} \sum_{}^{}\sigma^2 = \frac{n\sigma^2}{n^2} = \frac{\sigma^2}n
\end{aligned}}
$$
:::::


## Coefficiente di Correlazione

:::def{Coefficiente di Correlazione Lineare}
Il **coefficiente di correlazione lineare** tra due variabili casuali $X$ e $Y$ è un indice che descrive la "forza" e direzione della correlazione lineare tra le due variabili; è definito come la loro covarianza divisa per il prodotto delle deviazioni standard delle due variabili:
$$
Corr(X,Y) = \frac{Cov(X,Y)}{\sqrt{Var(X)Var(Y)}}
$$

Tramite la disuguaglianza di Cauchy-Schwarz si dimostra che che $Corr(X,Y) \in [-1,1]$.
:::

### Intensità di Correlazione 

Il coefficiente di correlazione esprime con quanta precisione una relazione lineare potrebbe approssimare l'andamento delle due variabili l'una rispetto all'altra:


Quanto bene questo legame approssima una relazione lineare è dato dal valore del coefficiente:
- se $|Corr(X,Y)| \leq 0.3$ allora si parla di *correlazione debole*,
- se $0.3 < |Corr(X,Y)| \leq 0.7$ allora si parla di *correlazione moderata*,
- se $|Corr(X,Y)| > 0.7$ allora si parla di *correlazione forte*.

Agli estremi $-1$ e $1$ si parla di *correlazione perfetta*, *negativa* o *positiva* rispettivamente, cioè tra le due variabili è possibile formulare una relazione di dipendenza lineare.

### Segno della Correlazione 

- Due variabili si dicono *direttamente correlate* se il loro coefficiente è strettamente positivo ($Corr(X,Y) >0$)
- Due variabili si dicono *inversamente correlate* se il loro coefficiente è strettamente negativo ($Corr(X,Y) <0$)
- Due variabili si dicono *incorrelate* se il loro coefficiente è nullo ($Corr(X,Y) >0$)

Il segno del coefficiente indica il segno della eventuale relazione lineare.






## Esempi

### 1

> Calcolare la varianza di una variabile casuale di Benoulli associata all'evento $E$ con $P(E)=p$ dove $p \in [0,1]$

$X \sim B_e(p) \Rightarrow X \in \{0,1\}$
$$
X = 
\begin{cases}
1 &\text{se } E \text{ si verifica}\\
0 &\text{altrimenti}
\end{cases}
$$
$$
p(a) =
\begin{cases}
p &\text{se } a=1 \\
1-p = q &\text{se } a=0 \\
0 &\text{altrimenti}
\end{cases}
$$
$$
E[X] = 0 \cdot q + 1 \cdot p = p 
$$
$$
E[X^2] = \sum_{j=1}^n x_j p(x_j) =n \times( 0^2 \cdot q + 1^2 \cdot p )= n\cdot p\\
n = 1 \Rightarrow E[X^2] = p
$$
$$
Var(X) = E[X^2] - E[X]^2 =\\
= n p - p^2 \\
n = 1 \Rightarrow
Var(X) = p - p^2 = p(1 - p) = p\cdot q
$$
### 2

> Sia X una variabile casuale continua con funzione di densità di probabilità

f(X) 2x se x\in [0,1]
0 altrimenti

Determinare E[X] Var(X)

E[X] = =  \int\infty^0 x 0 dx + \int 0^1 x(2x) dx + \int 1 ^\infty x 0 dx = 
\int 01 2 x^2 = [2/3 x]^1_0 = 2/3

E[X^2] = \int \infty x^2 f(x) dx =
\undercase{\int\infty^0 x^2 0 dx}_{f(x)=0} ''
= [2/4 x^4]^1_0 = 1/2

Var(X) = E[X^2] - E[X]^2

### 3

> Siano X e Y con funzione di massa di probabilità
> Determinare per X e Y i valori medi, le varianze e la covarianza

Y\X | 1 | 2 | 3 | *
--- | --- | --- | --- | ---
0 | 1/3 | 1/3 | 0 | 2/3
1 | 0 | 0 | 1/3 | 1/3
 | 1/3 | 1/3 | 1/3 | 

Ci serve la funzione di densità marginale

Y è di benoulli B_e(1/3) => E[Y] = 1/3 e Var(Y) = 1/3 * (1 - 1/3) = 2/9

E[X] = \sum^3 x_k p(x_k) = 1* 1/3 + 2 * 1/3 + 3*1/3
E[X^2] = \sum x^2 p(x) = 1^2* 1/3 + 2^2 * 1/3 + 3^2*1/3
= 14/3

Var(X) = E[X^2] - E[X]^2 = ... = 2/3

Cov(X,Y) = E[XY] - {E[X]E[Y]}_{noti}

:::memo
Ef(x,y) = 
:::

E[XY] = \sum \sum x_i y_j p(x_i, y_j) = 
1 * 0 * 1/3 + 2 * 0 * 1/3 + 3 * 0 * 0 + 1 * 1* 0 + 2 * 1 * 0 + 3 * 1 * 1/3 = 1

Cov(X,Y) = 1 - 2 * 1/3 = 1/3