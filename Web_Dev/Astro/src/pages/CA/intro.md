---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Controlli Automatici'
metaTitle: 'Controlli Automatici'
description: ''
author: 'Italo Corraro'
order: 0 
---

## Il Modello Fisico

<!-- Descrive stato e uscuta in relazione a ingressi, stati e tempo -->

<!-- es.: pendolo, carrello-molla, attrito viscoso, coppia motrice in ingresso -->

$$ 
\begin{cases} 
\dot{x}(t) = f(x(t),u(t),t) & \text{ equazione di stato} \\
 y(t) = h(x(t),u(t),t) & \text{ equazione di uscita} 
\end{cases} 
$$

Dati $x(t_0) = x_0$ e $u(t)$ con $t\geq t_0$, se vale che $\dot{x}(t) = f(x(t),u(t),t)$ , cioè $x(t)$, per $t \geq t_0$, soddisfa l'equazione di stato, allora $x(t)$ si dice *traiettoria di stato*.

Analogamente, la $y(t)$ che soddisfa l'equazione di uscita per i dati $x$ e $u$ si dice *traiettoria di uscita*.

:::::def{di Equilibrio}
Dato un ingresso $u$ costante nel tempo, se esiste uno stato iniziale $x_0$ per cui lo stato si mantiene costante nel tempo $t \geq t_0$, chiamiamolo $x_E$, allora $(u_E,x_E)$ si dicono coppia di equilibrio, per cui $f(x_E,u_E,t) = 0 \forall t\geq t_0$.

:::oss
Nel caso di un sistema tempo-invariante non-forzato, lo stato è l'unico variabile, per cui $x_E$ è di equilibrio solo se $f(x_0) = 0$, per cui è possibile trovare $x_E$ tramite un'equazione algebrica.
:::
:::::

Un sistema si dice *strettamente proprio* se l'ingresso non influenza direttamente l'uscita (può influenzare lo stato che influenza l'uscita però).

Un sistema tempo-invariante non ha una equazione di stato con dipendenza esplicita dal tempo (ma ingresso e stato possono comunque dipendere dal tempo)