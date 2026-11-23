---
title: 'Modello Ingresso-Uscita'
metaTitle: 'Modello Ingresso-Uscita'
description: ''
author: 'Italo Corraro'
order: 4
---

## Il Modello nello Spazio degli Stati

Consideriamo il modello nello spazio degli stati:
$$
\begin{cases}
\dot x(t) = Ax(t) + Bu(t) \\
y(t) = Cx(t) + Du(t)
\end{cases}
$$
Posso creare uno "stimatore", che, in base alla y(t) misurata dal sistema reale, stima il valore dello stato ($\hat{x}(t)$) per cui stabiliamo ci sia $K$ tale che $u(t) =K\hat{x}(t) $

## Trasformata di Laplace

<!-- ////////////////////////////////////
Inserisci Richiami su Numeri Complessi
//////////////////////////////////////
 -->

Associa a una funzione nel dominio del tempo, una funzione nel dominio complesso

$$
\mathcal{L}[f(t)] = F(s) = \int_{0^-}^{+\infty} f(t)\, e^{-st}\, dt
$$

dove $e^{-st}=e^{-(\sigma + \omega{j})t}$, cioè $F(s)$ è una funzione in campo complesso.


### Forma della Trasformata

$$
F(s) = \frac{\beta_m s^m + \ldots + \beta_1 s + \beta_0}{s^n + \alpha_{n-1}s^{n-1} + \ldots + \alpha_1 s + \alpha_0}
$$

<!-- ==========================
     Definizione POLI e ZERI
 ========================== -->

<!-- antitasformata -->

:::nota
$F(s)$ ignora il comportamento prima di $t = 0$, per questo, si considera sempre una funzione $f(t)$ tale che $f(\overline{t}) = 0 \ \forall \overline{t} \lt 0$
:::