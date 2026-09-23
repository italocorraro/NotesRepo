---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Funzione di trasferimento?'
metaTitle: 'Funzione di trasferimento?'
description: ''
author: 'Italo Corraro'
order: 1
---

## Proprietà di Linearità

$$
\begin{cases}
  \dot{x_1}(t)= 0 \cdot x_1(t) + 1 \cdot x_2(t) + 0 \cdot u(t) \\
  \dot{x_2}(t)= -\frac{k}{M} \cdot x_1(t) + \frac{b}{M} \cdot x_2(t) + \frac{1}{M} \cdot u(t)
\end{cases}
$$

La notazione si può standardizzare: 

$$
\begin{cases}
  \dot{x_1}(t) = f(x(t),u(t)) = a_{11} \cdot x_1(t) + a_{12} \cdot x_2(t) + b_{1} \cdot u(t) \\
  \dot{x_2}(t) = h(x(t),u(t)) = a_{21} \cdot x_1(t) + a_{22} \cdot x_2(t) + b_{2} \cdot u(t)
\end{cases}
$$

Possiamo organizzare i coefficienti a in una matrice che sarà sempre quadrata ($n \times n$) per il modo in cui è costruita, mentre la matrice dei coefficienti degli ingressi sarà rettangolare ($ n \times m $, dove $n$ è il numero di variabili di stato e $m$ è il numero di ingressi).

Possiamo riunire i coefficienti in un'unica matrice, dalla quale possiamo ricavare le equazioni di stato moltiplicandola per il vettore che contiene le variabili di stato e ingresso.

$$
\begin{bmatrix}
  \dot{x}_1(t) \\ \dot{x}_2(t)
\end{bmatrix}
=
\begin{bmatrix}
  a_{11} \cdot x_1(t) + a_{12} \cdot x_2(t) + b_{1} \cdot u(t) \\
  a_{21} \cdot x_1(t) + a_{22} \cdot x_2(t) + b_{2} \cdot u(t)
\end{bmatrix}
=
\begin{bmatrix}
  a_{11} & a_{12} \\
  a_{21} & a_{22}
\end{bmatrix}
\begin{bmatrix}
  x_1(t) \\ x_2(t)
\end{bmatrix}
+
\begin{bmatrix}
  b_1 \\ b_2
\end{bmatrix}
u(t)
$$

Questa equazione può essere generalizzata:

<!-- align vdots to the left -->

$$
\begin{bmatrix}
\dot{x}_1(t) \\
\vdots \\
\dot{x}_n(t)
\end{bmatrix}
\begin{bmatrix}
  a_{11}x_1(t) & \ldots &+\ a_{1n}x_n(t) &+\ b_{11}u_1(t) & \ldots &+\ b_{1m}u_m(t) \\
  \vdots & \ddots & \vdots & \vdots & \ddots & \vdots\\ 
  a_{n1}x_1(t) & \ldots &+\ a_{nn}x_n(t) &+\ b_{n1}u_1(t) & \ldots &+\ b_{nm}u_m(t)
\end{bmatrix}
=
\begin{bmatrix}
  a_{11} & \ldots & a_{1n}  \\
  \vdots & \ddots & \vdots \\
  a_{n1} & \ldots & a_{nn}
\end{bmatrix}
\begin{bmatrix}
  x_1(t) \\ \vdots \\ x_n(t)
\end{bmatrix}
+
\begin{bmatrix}
  b_{11} & \ldots & b_{1m}  \\
  \vdots & \ddots & \vdots \\
  b_{n1} & \ldots & b_{nm}
\end{bmatrix}
\begin{bmatrix}
  u_1(t) \\ \vdots \\ u_m(t)
\end{bmatrix}
$$

Chiamiamo le due matrici $A$ e $B$ rispettivamente ed esprimiamo l'equazione in modo più compatto:

$$
\underline{\dot{x}}(t) = A_{nn} \underline{x}(t) + B_{nm} \underline{u}(t)
$$

<!-- Come scrivere graffe vericali -> associa matrici formula compatta -->

La matrice $A(n\times{n})$ dei coefficienti dello stato è costante (indipendente dal tempo) per un sistema *tempo invariante*; stessa cosa per la matrice $B(n\times{m})$ dei coefficienti degli ingressi.



Queste stesse osservazioni possono essere fatte per l'uscita $y$:

$$
\begin{bmatrix}
  y_1(t) \\ \vdots \\ y_n(t)
\end{bmatrix}
=
\begin{bmatrix}
  c_{11} & \ldots & c_{1n}  \\
  \vdots & \ddots & \vdots \\
  c_{n1} & \ldots & c_{nn}
\end{bmatrix}
\begin{bmatrix}
  x_1(t) \\ \vdots \\ x_n(t)
\end{bmatrix}
+
\begin{bmatrix}
  d_{11} & \ldots & d_{1m}  \\
  \vdots & \ddots & \vdots \\
  d_{n1} & \ldots & d_{nm}
\end{bmatrix}
\begin{bmatrix}
  u_1(t) \\ \vdots \\ u_m(t)
\end{bmatrix}
$$

$$
\underline{y}(t) = C_{nn} \underline{x}(t) + D_{nm} \underline{u}(t)
$$

## Evoluzione Libera e Forzata

La traiettoria di un sistema ottenuta per $x(t_0) = x_0$ e $u(t)=0 \ \forall  t \geq t_0$ è detta *evoluzione libera* dello stato e si contraddistingue dall'*evoluzione forzata* che invece coinvolge degli ingressi non nulli.

:::oss
Qualora anche lo stato fosse nullo (oltre all'ingresso), otterremmo naturalmente un equilibrio per l'equazione di stato.
:::

La rilevanza di questa distinzione sta' nel fatto che l'evoluzione libera è la soluzione omogenea all'equazione differenziale ordinaria di primo ordine e, similmente, l'evoluzione forzata è la soluzione particolare.
È noto che la somma della soluzione omogenea e quella particolare rappresenta la soluzione dell'equazione.

Nel caso scalare, ovvero $\dot{x}(t) = ax(t) + bu(t)$, la soluzione di tale equazione sarebbe rappresentata da

$$
x(t) 
= \underbrace{\vphantom{\int_0^t}e^{at}x_0}_{\text{soluzione omogenea}} 
+ \underbrace{\int_0^t e^{a\cdot(t - \tau)} b u(\tau) \, d\tau}_{\text{soluzione particolare}}
$$

che estendiamo al caso matriciale del sistema:

$$
\underline{x}(t) 
= \underbrace{\vphantom{\int_0^t}e^{At}\underline{x}_0}_{\text{evoluzione libera}} 
+ \underbrace{\int_0^t e^{A \cdot (t - \tau)} B \underline{u}(\tau) \, d\tau}_{\text{evoluzione forzata}}
$$

Il termine $e^{At}$ (dove $A$ è una matrice) possiamo ricavarlo pensando alla forma in serie dell'esponenziale (quello scalare):

$$
e^{at} = 1 + at + \frac1{2!}(at)^2 + \frac1{3!}(at)^3 + \ldots
$$

Per la versione matriciale abbiamo un equivalente:

$$
e^{At} = I + At + \frac1{2!}(At)^2 + \frac1{3!}(At)^3 + \ldots
$$

dove $I$ è la matrice identità.

Si può dimostrare quindi che $e^{At}$ è definito ed è a sua volta una matrice $n\times{n}$.

### Studio dell'Evoluzione Libera

:::eg
Dato un sistema

$$
\begin{bmatrix}
\dot{x}_1(t)\\
\dot{x}_2(t)
\end{bmatrix}
=
\begin{bmatrix}
a_1 & 0 \\ 0 & a_2
\end{bmatrix}
\begin{bmatrix}
{x}_1(t)\\
{x}_2(t)
\end{bmatrix}
$$

equivale a

$$
\begin{cases}
\dot{x}_1(t) = a_1 x_{1\, 0}(t) \\
\dot{x}_2(t) = a_2 x_{2\, 0}(t)
\end{cases}
$$

questo perché la matrice è diagonale

La soluzione sarebbe

$$
\begin{cases}
{x}_1(t) = e^{a_1 t}x_{1\, 0}(t) \\
{x}_2(t) = e^{a_2 t}x_{2\, 0}(t)
\end{cases}
$$

in forma matriciale

$$
\begin{bmatrix}
{x}_1(t)\\
{x}_2(t)
\end{bmatrix}
=
\begin{bmatrix}
e^{a_1 t} & 0 \\ 
0 & e^{a_2 t}
\end{bmatrix}
\begin{bmatrix}
x_{1\, 0}(t)\\
x_{2\, 0}(t)
\end{bmatrix}
$$

cioè 

$$
e^{At}
=
\begin{bmatrix}
e^{a_1 t} & 0 \\ 0 & e^{a_2 t}
\end{bmatrix}
$$

:::

Chiamiamo $J = TAT^{-1}$ e supponiamo di sapere $e^{Jt}$, allora, $e^At = T^{-1}e^{Jt}T$.

:::nota
Una matrice diagonalizzabile, si dice tale se esiste una matrice di cambio $T$ tale per cui $A=T^{-1}A^dT$, allora $A^d = TAT^{-1}$.

Questo finchè $A$ è diagonalizzabile
:::

Data una matrice $A$ quadrata ($n\times{n}$), a coefficienti reali, esiste sempre una matrice cambio di base $T$ tale per cui la matrice risultante assume la forma di una *matrice di Jordan* $J = TAT^{-1}$, la quale è una matrice diagonale a blocchi, ciascuno associato ad un autovalore della matrice $A$

$\lambda_1 \ldots \lambda_r$ sono gli autovalori di $A$ tutti distinti, i blocchi della matrice diagonale a blocchi 