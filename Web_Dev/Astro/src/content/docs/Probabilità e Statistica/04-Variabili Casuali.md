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
Chiamiamo **funzione di ripartizione di probabilità $F_X(a)$** (anche detta di *distribuzione*) di una variabile casuale discreta $X$, una funzione di tipo 
$p : \mathbb{R} \rightarrow [0,1] $ che associa a un certo valore $a$ la probabilità che $X$ sia minore o uguale a quel valore, cioè:
$$
F(a) = P(X\leq a)\ \forall a \in \mathbb{R}
$$
:::

Tale funzione ha le seguenti proprietà:
1. $0 \leq F(a) \leq 1 \ \forall a \in \mathbb{R}$, poichè $F(a)$ è una probabilità,
2. $\displaystyle\lim_{a \to +\infty} F(a) = P(X \leq +\infty) = 1$, cioè, la probabilità che $X$ assuma valori minori di $+\infty$ è $1$,
2. $\displaystyle\lim_{a \to - \infty} F(a) = P(X \leq - \infty) = 0$, cioè, la probabilità che $X$ assuma valori minori di $-\infty$ è $0$,
4. se $a,b \in \mathbb{R}$ con $a \leq b$ allora $F(a) \leq F(b)$, cioè, $F_X(a)$ è una funzione *non decrescente* (crescente non strettamente),
5. è continua a tratti, detta anche una *funzione a gradino*.

:::dim
Vogliamo dimostrare che F(a) sia sempre crescente o al più non decrescente:

sia $a, b \in \mathbb{R}$ con $a < b$, per cui

$$
X \leq a \subset X \leq b
$$

allora, come conseguenza degli assiomi:

$$P(X\leq a) \leq P(X\leq b)$$

Allora $ F(a) \leq F(b)$, cioè per valori crescenti della variabile, la funzione $F$ è non decrescente.

:::

:::oss
Se $\displaystyle f(a) = \frac{dF_X(a)}{da}$, allora si può dimostrare che $f(a)\geq 0 \ \forall a \in \mathbb{R}$
:::

:::::eg
Associamo all'evento lancio di una moneta la variabile casuale $X \in \{0, 1\}$
- Se esce testa: $T \rightarrow X = 0$
- Se esce croce: $C \rightarrow X = 1$

se $P(T) = p$ e $P(X=0) = q$, allora si verificano le proprietà della funzione di massa se:
1. $p(a) \in [0, 1]$
2. $p(0) + p(1) = q + p = 1$

Cnsideriamo la funzione di ripartizione di probabilità per la variabile:
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



## Variabili Casuali Continue

:::def
Una variabile casuale $X$ si dice **continua** se l'insieme dei suoi possibili valori è un insieme continuo.
:::

:::nota
Non è possibile descrivere la distribuzione di probabilità di una variabile casuale continua tramite una funzione di massa di probabilità, per cui si usa una funzione capace di descrivere la proprietà di continuità.
:::

### Funzione di Densità di Probabilità

:::def
Chiamiamo **funzione di densità di probabilità** $f_X(x)$, associata a una variabile casuale continua $X$, una funzione $f : \mathbb{R} \to \mathbb{R}^+ \cup \{0\}$, che associa la densità di probabilità in ogni punto dello spazio campione, definita come

$$
P(X \in A) = \int_A f(x)\, dx 
\ \  \forall A \subseteq \mathbb{R} 
$$

:::

Tale funzione ha le seguenti proprietà:
1. $f(a) \geq 0 \ \ \forall a \in R$
2. $\displaystyle P(X \in \mathbb{R}) = P(X \leq +\infty) \Rightarrow \int_{\mathbb{R}} f(x) \, dx = 1$

### Funzione di Distribuzione di Probabilità

Ci chiediamo se esista la funzione di massa di probabilità per variabili casuali continue, cioè se

$$
P(a) = P(X=a)
$$

ma per la funzione di densità di probabilità indica che

$$
P(a) = \int_a^a f(x) \, dx = 0  \ \forall a \in R
$$

Questo perché la probabilità di ottenere con precisione infinita un valore specifico da un intervallo continuo è nulla.

Possiamo invece definire la funzione di ripartizione di probabilità:


Data X una variabile continua, si dice funzione di ripartizione di probabilità $F : \mathbb{R} \to [0, 1]$ tale che $F(a) = P(x \leq a)$ per $a \in \mathbb{R}$;

come conseguenza di questa definizione, 

$$
F(a) = P(x \leq a)= \int_{- \infty}^a f(x) \, dx
$$

quindi

$$
\frac{dF(a)}{da} = \frac{d}{da} (\int_{- \infty}^a f(x) \, dx) = f(a)
$$

Proprietà di F(a):
1. $F(a) \in [0, 1]$
2. $lim_{a \to +\infty} F(a) = \int =1$
3. $lim_{a \to -\infty} F(a) = 0$
4. F non è decrescente, infatti dF(a)/da = f(a) \geq 0

:::eg
sia X una variabile casuale continua con funzione di densità 

f(x) = 

c x^2 se x \in [0, 1]
0 altrimetni

Dobbiamo determinare c, F(a) w P(X \in [1/2, 3/4])

perché sia rispettato il vincolo f(x) \geq 0, allora deve essere c \geq 0

per rispettare la seconda proprietà

1 = \int_{-\infty}^{+\infty} f(x) \, dx =

= \int_{-\infty}^0 0 + \int_{0}^1 c x^2 + \int_1^{+\infty} 0 =

= c [x^3/3]_0^1 = c/3 \Rightarrow c/3 = 1 


F(a) = \int_{-\infty}^a f(x) \, dx = 
\
\int & se a <0
\int_{-\infty}^0 + \int_0^a x x^2= a^3 & se a \in [0, 1]
\int_{-\infty}^0 + \int_0^1 x x^2  \int_1^{+\infty} = 1 se & a > 1
\


P(X \in ) = \int_{1/2}^{3/4} f(x) = " 3x^2 = [x^3]_1/2^{3/4} = 19/64

oppure 

P() = P(X \leq 3/4) - P(X < 1/2 ) = 
= P(X \leq 3/4) - P(X \leq 1/2 ) = 
= F(3/4) - F(1/2) = (3/4)^3 - (1/2)^3=

:::nb
P(X \leq a) = P(X < a) per una variabile casuale continua X e non discreta

:::

:::::eg
Si estrae una pallina con reimmissione da una scatola che contiene 6 palline rosse e 4 blu. Si ripete l'esperimento 3 volte, sia X il numero di palline rosse estratte: X \in {0, 1, 2, 3}

Vogliamo determinare la funzione di massa di probabilità di X

- p(3) = P(X=3) = 6/10 * 6/10 * 6/10
- p(0) = P(X=0) = 4/10 * 4/10 * 4/10
- p(1) = P(X=1) = 6*4*4 + 4*6*4 + 4*4*6 / 10^3
- p(2) = P(X=2) = 6*6*4 + 6*4*6 + 4*6*6 / 10^3

:::oss
La somma \sum_{k=1}^n p(x_k) = 1, quindi

p(2) = 1 - (p(0) + p(1) + p(3))
:::
:::::

:::::eg
Sia X variabile casuale continua con 

f(x) =
e^{-e} x \geq 0
0 altrove

F(a) = \int_{-\infty}^a = 
\
\int_{-\infty}^a 0 = 0 se a \lt 0
\int_{-\infty}^a 0 + \int_0^a = 0 se a \geq 0
\

P(X>3) = \int_3^{+\infty} e^{-x} = e^{-3}
:::::