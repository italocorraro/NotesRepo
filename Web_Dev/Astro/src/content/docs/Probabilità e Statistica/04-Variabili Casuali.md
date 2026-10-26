---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Variabili Casuali'
metaTitle: 'Variabili Casuali'
description: ''
author: 'Italo Corraro'
order: 4
---

:::def
Una **variabile casuale** (detta anche *variabile aleatoria* o *variabile stocastica*) è una variabile a valori reali che assume valori diversi in base ai risultati degli esperimenti a cui è associata.
:::

Si possono distinguere le variabili casuali in 
- *discreta* (come i numeri sulla faccia di un dado il lancio di una moneta),
- *continua* (come altezza, peso o reddito),
- *miste* definite su un intervallo continuo ma con valori discreti sparsi al di fuori.

## Variabili Casuali Discrete

:::def
Dato un esperimento con un numero $n$ di esiti finito (o, al più, numerabile), con con $n \gt 1$, è possibile associare ad esso una **variabile casuale discreta** $X \in \{x_1, x_2, \ldots x_n\}$ con $x_i \in \mathbb{R} \ \forall i = 1, 2 ,\ldots n$
:::

### Funzione di Massa di Probabilità

:::def
Chiamiamo **funzione di massa di probabilità** $p_X(a)$ di una variabile casuale discreta $X$, una funzione di tipo 
$p : \mathbb{R} \rightarrow [0,1] $ che *associa a ciascun valore che $X$ può assumere la probabilità che lo assuma*; definita come:
$$
p_X(a)=p(X=a) =
\begin{cases}
P(X = x_k) & \text{se } a=x_k & k = 1,2, \ldots n \\
0 & \text{se } a \neq x_k & k = 1,2, \ldots n 
\end{cases}
$$
:::

Tale funzione ha le seguenti proprietà:
1. $0 \leq p(a) \leq 1$, perché $p_X(a)$ rappresenta una probabilità, 
2. $\displaystyle 1 = P(S) = \sum_{k=1}^n P(X=x_k) = \sum_{k=1}^n p(x_k)$, cioè, considerando tutti gli esiti dell'esperimento, quindi tutti i valori che può assumere la variabile, la somma delle probabilità che la variabile li assuma è $1$.

### Funzione di Ripartizione di Probabilità

:::def
Chiamiamo **funzione di ripartizione di probabilità $F_X(a)$** (anche detta di *distribuzione*) *di una variabile casuale discreta $X$*, una funzione di tipo 
$F : \mathbb{R} \rightarrow [0,1] $ che associa a un certo valore $a$ la probabilità che $X$ sia minore o uguale a quel valore, cioè:
$$
F(a) = P(X\leq a)\ \forall a \in \mathbb{R}
$$
:::

Tale funzione ha le seguenti proprietà:
1. $0 \leq F(a) \leq 1 \ \forall a \in \mathbb{R}$, poichè $F(a)$ è una probabilità,
2. $\displaystyle\lim_{a \to +\infty} F(a) = P(X \leq +\infty) = 1$, cioè, la probabilità che $X$ assuma valori minori di $+\infty$ è $1$,
2. $\displaystyle\lim_{a \to - \infty} F(a) = P(X \leq - \infty) = 0$, cioè, la probabilità che $X$ assuma valori minori di $-\infty$ è $0$,
4. $F(a) \leq F(b)$, cioè, $F_X(a)$ per $a,b \in \mathbb{R}$ con $a \leq b$, cioè $F$ è una funzione *non decrescente* (crescente non strettamente).

:::dim{proprietà 4}
Vogliamo dimostrare che F(a) sia sempre crescente o al più non decrescente:

sia $a, b \in \mathbb{R}$ con $a < b$, per cui

$$
X \leq a \subset X \leq b
$$

allora, come conseguenza degli assiomi:

$$P(X\leq a) \leq P(X\leq b)$$

Allora $ F(a) \leq F(b)$, cioè per valori crescenti della variabile, la funzione $F$ è non decrescente.
:::

:::::eg
Associamo all'evento lancio di una moneta la variabile casuale $X \in \{0, 1\}$
- Se esce testa: $T \rightarrow X = 0$
- Se esce croce: $C \rightarrow X = 1$

se $P(T) = p$ e $P(X=0) = q$, allora si verificano le proprietà della funzione di massa se:
1. $p(a) \in [0, 1]$
2. $p(0) + p(1) = q + p = 1$

Consideriamo la funzione di ripartizione di probabilità per la variabile:
$$
F(a) = 
\begin{cases}
0 & a \lt 0 &\text{è impossibile} \\
q & a = 0 &\text{è sotto testa} \\
q & 0 \lt a \lt 1 &\substack{\text{solo testa è}\\\text{ inferiore a 1}}\\ 
1 & a =1 & \text{include sia testa che croce}\\
1 & a> 1 &\text{come sopra}
\end{cases}
$$

:::oss
Si nota facilmente come $F_X(a)$ sia non decrescente, infatti il valore che assume per $a$ crescenti è sempre maggiore o uguale al precedente
:::

<!-- TODO: Grafico andamento a gradino -->
:::::


Della funzione di ripartizione di probabilità possiamo anche dire che è continua a tratti, cioè è una *funzione a gradino*.

Possiamo anche usarla per calcolare la **probabilità in un intervallo**: 

$$
P(a < X \leq b) = F(b)-F(a)
$$ 
per $a,b\in\mathbb{R}$ con $b\geq{a}$:

:::dim
Prendiamo $a,b\in\mathbb{R}$ con $b\geq{a}$, calcoliamo la probabilità che $X$ cada nell'intervallo tra i due:
$$
\begin{array}{ll}
P(a < X \leq b) = P((X > a) \cap (X \leq b)) =\\[6pt]
= P(X > a) + P(X \leq b) - 
P((X > a) \cup (X \leq b)) =& *
\end{array}
$$
perché è nota la proprietà $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

Per come abbiamo preso $a$ e $b$, abbiamo che $(X > a) \cup (X \leq b) = \mathbb{R}$, quindi $P((X > a) \cup (X \leq b)) = 1$

$$
{\def\arraystretch{1.6}
\begin{array}{ll}
*&=\underbrace{P(X > a)}_{1 - P(X\leq a)} 
+ P(X \leq b) 
-\underbrace{P((X > a) \cup (X \leq b))}_{1}
=\\

&= 1 - P(X \leq a) + P(X \leq b) - 1 =\\
&= P(X \leq b) - P(X \leq a) =\\
&= F(b) - F(a)
\end{array}}
$$

Concludiamo che

$$
P(a < X \leq b) = F(b) - F(a)
$$
:::

:::::eg
> Si estrae una pallina con reimmissione da una scatola che contiene 6 palline rosse e 4 blu. Si ripete l'esperimento 3 volte, sia $X$ il numero di palline rosse estratte: $X \in \{0, 1, 2, 3\}$
>
> Vogliamo determinare la funzione di massa di probabilità di $X$.

- $ p(3) = P(X=3) = \frac6{10} \times \frac6{10} \times \frac6{10} \phantom{\Big|} = (\frac6{10})^3$
- $ p(0) = P(X=0) = \frac4{10} \times \frac4{10} \times \frac4{10} \phantom{\Big|} = (\frac4{10})^3$
- $p(1) = P(X=1) =\displaystyle \frac{6\times4\times4 + 4\times6\times4 + 4\times4\times6}{10^3} \phantom{\huge|} = 3 \frac{4\times4\times6}{10^3}$
- $p(2) = P(X=2) =\displaystyle \frac{6\times6\times4 + 6\times4\times6 + 4\times6\times6}{10^3} \phantom{\huge|} = 3 \frac{4\times6\times6}{10^3}$

:::oss
Verifichiamo che la somma delle probabilità sia $1$, quindi

$$
\def\arraystretch{2}
\begin{aligned}
1 &= \left(\frac6{10}\right)^3 + \left(\frac4{10}\right)^3 + 3 \frac{4\times4\times6}{10^3} + 3 \frac{4\times6\times6}{10^3} =\\
&= \frac{6^3 + 4^3 + 3 \times 4^2 \times 6 + 3 \times 4 \times 6^2}{10^3} =\\
&= \frac{216 + 64 + 288 + 432}{1000} = 1
\end{aligned}
$$
:::
:::::

## Variabili Casuali Continue

:::def
Una variabile casuale $X$ si dice **continua** se l'insieme dei suoi possibili valori è un insieme continuo.
:::

:::nota
Non è possibile descrivere la distribuzione di probabilità di una variabile casuale continua tramite una funzione di massa di probabilità, per cui si usa una funzione diversa, capace di descrivere la proprietà di continuità.
:::

### Funzione di Densità di Probabilità

:::def
Chiamiamo **funzione di densità di probabilità** $f_X(x)$, associata a una variabile casuale continua $X$, una funzione $f : \mathbb{R} \to \mathbb{R}^+ \cup \{0\}$, che descrive la "densità" di probabilità di $X$ in ogni punto dello spazio campione ed è definita come

$$
P(X \in A) = \int_A f(x)\, dx 
\ \  \forall A \subseteq \mathbb{R} 
$$

:::

Tale funzione ha le seguenti proprietà:
1. $f(a) \geq 0 \ \ \forall a \in \mathbb{R}$
2. $\displaystyle P(X \in \mathbb{R}) = P(X \leq +\infty) \Rightarrow \int_{\mathbb{R}} f(x) \, dx = 1$

:::oss
> Ci chiediamo se esista la funzione di massa di probabilità per variabili casuali continue, cioè se $P(a) = P(X=a)$.

Per la funzione di densità di probabilità:
$$
P(a) = \int_a^a f(x) \, dx = 0  \ \forall a \in \mathbb{R}
$$

Questo perché la probabilità di ottenere con precisione infinita un valore specifico da un intervallo continuo è nulla.
:::

### Funzione di Ripartizione di Probabilità

Anche per una variabile casuale continua è possibile definire la funzione di ripartizione/distribuzione di probabilità:

:::def
Chiamiamo **funzione di ripartizione di probabilità $F_X(a)$** (anche detta di *distribuzione*) *di una variabile casuale continua $X$*, una funzione di tipo 
$F : \mathbb{R} \rightarrow [0,1] $ che associa a un certo valore $a$ la probabilità che $X$ sia minore o uguale a quel valore, cioè:
$$
F(a) = P(X\leq a)\ \forall a \in \mathbb{R}
$$
:::

Troviamo che *la funzione di densità di probabilità di $X$ è la derivata della sua funzione di ripartizione di probabilità*, infatti, calcolando $P(X\leq a)$ usando la funzione di densità
$$
F(a) = P(x \leq a)= \int_{- \infty}^a f(x) \, dx
$$
abbiamo che
$$
\frac{dF(a)}{da} = \frac{d}{da} \left(\int_{- \infty}^a f(x) \, dx \right) = f(a)
$$

La funzione di ripartizione per variabili casuali continue ha le stesse proprietà del suo omologo del caso discreto, con unica eccezione l'essere continua invece che continua a tratti:
1. $0 \leq F(a) \leq 1 \ \forall a \in \mathbb{R}$,
2. $\displaystyle\lim_{a \to +\infty} F(a) = P(X \leq +\infty) = 1$,
2. $\displaystyle\lim_{a \to - \infty} F(a) = P(X \leq - \infty) = 0$,
4. se $a,b \in \mathbb{R}$ con $a \leq b$ allora $F(a) \leq F(b)$.

:::oss{sul segno della derivata}
Essendo che $F(a)$ è non decrescente, e la sua derivata è $f(a)$, allora $f(a)\geq 0 \ \forall a \in \mathbb{R}$.
:::

:::nota
Avevamo determinato prima che $P(a)=P(X=a)=0 \ \forall a\in \mathbb{R}$; possiamo ricavarne una conseguenza per la funzione di ripartizione, cioè che $P(X \leq a) = P(X < a)$ e quindi il calcolo della probabilità in un intervallo del caso discreto qui si estende:
$$
P(a < X \leq b) = F(b) - F(a) \\
\Downarrow \\[6pt]
\begin{rcases}
P(a < X < b) \\
P(a < X \leq b) \\
P(a \leq X < b) \\
P(a \leq X \leq b)
\end{rcases}
= F(b) - F(a)
$$
:::

:::::::eg
> Sia $X$ una variabile casuale continua con funzione di densità: 
> $$
> f(x) = 
> \begin{cases}
> c\, x^2 &\text{se }x \in [0, 1] \\
> 0 & \text{altrimenti}
> \end{cases}
> $$
> Vogliamo determinare $c, F(a) ,P(X \in [\frac12, \frac34])$

:::::ul
:::li
Perché sia verificata la prima proprietà della funzione di densità, cioè $f(x) \geq 0$,  deve essere $c \geq 0$.
Per rispettare la seconda proprietà:
$$
\begin{aligned}
1 
&= \int_{-\infty}^{+\infty} f(x) \, dx =\\
&= \int_{-\infty}^0 0\, dx + \int_{0}^1 c x^2\, dx + \int_1^{+\infty} 0\, dx =\\
&= c \left[\frac{x^3}3\right]_0^1 
= \frac{c}3 \\ 
&\, \Downarrow \\
c &= 3 
\end{aligned}
$$
:::
:::li
Cerchiamo $F(a)$:
$$
\begin{aligned}
F(a) &= \int_{-\infty}^a f(x) \, dx = \\
&=

\begin{cases}
\displaystyle
\int_{-\infty}^0 0\, dx 
&\text{se }a <0 \\[12pt]

\displaystyle
\int_{-\infty}^0 0\, dx 
+ \int_0^a 3 x^2 \,dx= a^3 
&\text{se } a \in [0, 1] \\[12pt]

\displaystyle
\int_{-\infty}^0 0\, dx 
+ \int_0^1 3 x^2\,dx 
+ \int_1^{+\infty} 0\,dx= 1 
&\text{se }a > 1
\end{cases}
\\[45pt]
&=
\begin{cases}
0
&\text{se }a <0 \\
\displaystyle
0+\left[\frac{3x^3}{3}\right]^a_0 = a^3
&\text{se } a \in [0, 1] \\[10pt]

0+\displaystyle
\left[\frac{3x^3}{3}\right]^1_0 +0 = 1
&\text{se }a > 1
\end{cases}
\end{aligned}
$$
:::
:::li
Cerchiamo $P(X  \in [{\textstyle \frac12,\frac34}]) $:
$$
\begin{aligned}
P(X  \in [{\textstyle \frac12,\frac34}]) 
&= \int_{\frac12}^{\frac34} f(x)\,dx =\\
&= \int_{\frac12}^{\frac34} 3x^2\,dx =\\
&= \left[\frac{3x^3}{3}\right]_{\frac12}^{\frac34} = \frac{19}{64}
\end{aligned}
$$

oppure, calcoliamo usando la formula dell'intervallo:
$$
{\def\arraystretch{1.4}
\begin{aligned}
P(X \in [{\textstyle \frac12,\frac34}]) 
&= P(\textstyle \frac12 \leq X \leq \frac34 ) = \\
&=\textstyle F(\frac34) - F(\frac12) =\\
&=\textstyle (\frac34)^3 - (\frac12)^3
=\frac{19}{64}
\end{aligned}}
$$
:::
:::::
:::::::