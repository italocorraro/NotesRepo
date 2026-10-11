---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Stabilità del Sistema'
metaTitle: 'Stabilità del Sistema'
description: ''
author: 'Italo Corraro'
order: 3
---

## Equilibrio di un Sistema

Consideriamo un generico sistema tempo-invariante,con equazione $\dot{x}(t) = f(x(t)) $,

se $ x(t) = x_e \ \forall t \geq 0 $ è traiettoria del sistema, allora $x_e$ è equilibrio del sistema se e solo se $f(x_e) = 0$.

Quando il sistema dipende anche da un ingresso $u(t)$, allora l'equilibrio dipende da una coppia $(x_e,u_e)$ tale per cui $\dot{x}(t) = f(x(t),u(t)) $ risulta $f(x_e,u_e) = 0$.

## Stabilità Interna

Chiamiamo stabilità interna è quella proprietà che caratterizziamo rispetto a variazioni dello stato iniziale, cioè 

sia $u(t) = u_e \ \forall t \geq 0$,
ma $x(0) = x_e + \tilde{x}_0 $, cioè partiamo da uno stato vicino a quello d'equilibrio, con l'ingresso di equilibrio.

Dato un generico sistema tempo-invariante, si dice
- *equilibrio stabile locale* uno stato di equilibrio $x_e$ per cui $\forall \epsilon \geq 0 \ \exist \delta \geq 0$ e $\delta \leq \epsilon$ tale che $\forall x_0$ che ha $||x_0 - x_e|| \leq \delta $ allora risulta $||x_0 - x_e||\leq \epsilon \ \forall t \geq 0$. <!-- //Grafico intorno di epsilon e delta rispetto a stato di equilibrio -->,
- *equilibrio instabile* uno stato di equilibrio non è stabile,
- *equilibrio attrattivo* uno stato di equilibrio per cui $\exists \delta > 0$ tale che $\forall x_0$ con $||x_0 - x_e|| \leq \delta $ allora $\lim_{t \to +\infty} ||x(t) - x_e|| = 0$, cioè, entro una certa distanza $\delta$ dall'equilibrio, il sistema tenderà a tornarci,
- *equilibrio asintoticamente stabile* uno stato di equilibrio che è sia stabile localmente che attrattivo
- *stabilità globale* uno stato di equilibrio stabile e asintoticamente stabile $\forall x \in \mathbb{R}$

## Stabilità del Sistema

Consideriamo un sistema lineare tempo-invariante, $\dot{x}(t) = Ax(t) + Bu(t)$

Gli equilibri del sistema sono le coppie per cui $Ax_e + Bu_e = 0$; la coppia $(0,0)$ soddisfa naturalmente l'equazione per qualsiasi sistema lineare tempo-invariante.

:::nota
Se prendiamo il sistema per cui $u = 0$, allora l'equilibrio è dato per $Ax_e = 0$, cioè $x_e \in kernel(A)$. <!-- kernel -->
:::

Supponiamo di escludere la coppia *origine*, quindi di richiedere una coppia generica.

Definiamo un nuovo stato $\tilde{x}(t) = x(t) - x_e$ e un nuovo ingresso $\tilde{u}(t) = u(t) - u_e$, traslati rispetto agli originale della generica coppia non-nulla di equilibrio $(x_e,u_e)$, e troviamo il nuovo sistema traslato:

le derivate sono uguali alle variabili non traslate: 

- $\dot{\tilde{x}}(t) = \dot{x}(t)$
- $\dot{\tilde{u}}(t) = \dot{u}(t)$

quindi

$$
\begin{aligned}
\dot{\tilde{x}}(t) = \dot{x}(t) &= A(\tilde{x}(t) + x_e) + B(\tilde{u}(t) + u_e) = \\
&= A\tilde{x}(t) + B\tilde{u}(t) + \underbrace{Ax_e + Bu_e}_{= 0} 
\end{aligned}
$$

Ne ricaviamo un sistema analogo con le stesse caratteristiche di quello originale, dove l'equilibrio $(0,0)$ di questo sistema traslato è equivalente al generico equilibrio $(x_e,u_e)$ di cui l'abbiamo traslato; quindi, tutti gli equilibri di un sistema lineare tempo-invariante hanno, di fatto, le stesse proprietà di stabilità.

Per questa ragione, *non ci riferiamo alla stabilità di un punto di equilibrio in questi casi, ma piuttosto alla stabilità in generale dell'intero sistema* poichè, nel caso di un sistema lineare tempo-invariante, i due concetti coincidono come appena dimostrato.

Se troviamo che l'equilibrio per $(0,0)$ è asintoticamente stabile, il risultato si estende a tutti gli altri punti di equilibrio del sistema, per cui diciamo che *il sistema è asintoticamente stabile*.

:::th
Un sistema LTI ::abbr{Lineare Tempo-Invariante} è asintoticamente stabile se e solo se tutti gli autovalori della matrice A hanno parte reale strettamente negativa.
:::

:::nota
- Per un sistema LTI, se ho la stabilità, eventualmente asintotica, allora questa è globale.

- Per sistemi LTI, in realtà l'attrattività implica la stabilità e quindi l'asintotica stabilità.
:::

:::nota
Per un generico sistema (anche non-lineare), se $x_e$ è globalmente asintoticamente stabile, allora è l'unico equilibrio.
:::

:::nota
Se tutti gli autovalori a parte reale nulla sono distinti, allora vale la stabilità se tutti gli altri sono a parte reale negativa.
:::

:::oss
Per un sistema LTI le possibilità sono di essere:
- stabile (detto anche marginalmente stabile o semplicemente stabile),
- instabile o
- asintoticamente stabile
:::
