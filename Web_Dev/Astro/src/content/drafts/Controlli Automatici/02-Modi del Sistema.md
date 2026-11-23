---
title: 'Modi del Sistema'
metaTitle: 'Modi del Sistema'
description: ''
author: 'Italo Corraro'
order: 2
---

Gli elementi dell'esponenziale $e^{Jt}$ hanno tutti (o possono assumere) questa forma: $t^{q-d} e^{\lambda_{i}}t$, dove $\lambda$ é un autovalore di $A$;

- se $q=1$, allora $e^\lambda_{i}$

Preso un generico elemento $x_L = \sum_{i=1}^r \sum_{q=1}^q \gamma_{jiq} t^{q-1}e^{\lambda_i t} $

$t^{q-1}$ e $e^{\lambda_i t}$ sono detti modi naturali del sistema.

:::oss
Osservando gli effetti del termine $e^\lambda_{i}$ sullo stato del sistema quando $\lambda$ assume valori reali , troviamo tre casi:
- se $\lambda$ ha valori positivi, la funzione diverge, quindi il valore dello stato cresce ininterrottamente,
- se $\lambda$ ha valori negativi, allora la funzione converge, cioè lo stato tende ad attenuarsi

Nel caso di complessi coniugati, che possiamo scrivere come $e^{\lambda_i t}= e^{(\sigma_i +/- j\omega_i)t} $ o in forma polare $e^{\sigma_i t}(cos(\omega_i t) +/- sen(\omega_i t)) $
:::


<!-- Missing: Modi del Sistema 
BLOB: modi naturali -> relazione molteplicità geometrica algebrica
sistema lineari tempo-invarianti come combinazione lineare di modi naturali
// Grafico (Re,Im) dei modi e conseguente grafico traiettoria di stato
Poli? 

x(t) = x_l(t) + x_f(t)
dove 
- x_l ha u = 0
- x_f ha x_0 = 0

t^{q-1}e^{\sigma t} (cos())

// Grafico massa-molla-smorzatore con sm nullo => complessi coniugati senza parte reale sinusoide non smorzata


-->

:::nota
Richiedere la traiettoria di un sistema descritto dalla equazione differenziale:
$$
\dot{x}(t) = 2x(t) \ \text{con} \ x_0 = 5
$$
significa richiedere una $x(t)$ che soddisfa l'equazione differenziale del sistema.

Risolvendo, troviamo $x(t)=5e^{2t} $ come traiettoria del sistema.

Possiamo verificare il risultato:

$$
\frac{d(5e^{2t})}{dt} = 2 * 5e^{2t}
$$
:::

