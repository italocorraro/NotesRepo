---
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

## Stabilità

:::def
Chiamiamo **stabilità di un sistema dinamico**, l'attitudine di tale sistema a reagire a perturbazioni limitate dello stato iniziale o dell'ingresso con variazioni limitate del moto o della risposta.
:::

### Stabilità Interna

Chiamiamo stabilità interna è quella proprietà che caratterizziamo rispetto a variazioni dello stato iniziale, cioè 

sia $u(t) = u_e \ \forall t \geq 0$,
ma $x(0) = x_e + \tilde{x}_0 $, cioè partiamo da uno stato vicino a quello d'equilibrio, con l'ingresso di equilibrio.

Dato un generico sistema tempo-invariante, si dice
- *equilibrio stabile locale* uno stato di equilibrio $x_e$ per cui $\forall \epsilon \geq 0 \ \exist \delta \geq 0$ e $\delta \leq \epsilon$ tale che $\forall x_0$ che ha $||x_0 - x_e|| \leq \delta $ allora risulta $||x_0 - x_e||\leq \epsilon \ \forall t \geq 0$. <!-- //Grafico intorno di epsilon e delta rispetto a stato di equilibrio -->,
- *equilibrio instabile* uno stato di equilibrio non è stabile,
- *equilibrio attrattivo* uno stato di equilibrio per cui $\exists \delta > 0$ tale che $\forall x_0$ con $||x_0 - x_e|| \leq \delta $ allora $\lim_{t \to +\infty} ||x(t) - x_e|| = 0$, cioè, entro una certa distanza $\delta$ dall'equilibrio, il sistema tenderà a tornarci,
- *equilibrio asintoticamente stabile* uno stato di equilibrio che è sia stabile localmente che attrattivo
- *stabilità globale* uno stato di equilibrio stabile e asintoticamente stabile $\forall x \in \mathbb{R}$

### Stabilità di un Sistema LTI

Consideriamo un sistema ***l**ineare* ***t**empo-**i**nvariante*, $\dot{x}(t) = Ax(t) + Bu(t)$

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

Per questa ragione, *per un =u=Sistema Lineare Tempo-invariante==, non ci riferiamo alla stabilità di un punto di equilibrio in questi casi, ma piuttosto alla stabilità in generale dell'intero sistema* poiché, in quel caso, i due concetti coincidono come appena dimostrato.

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
Un sistema LTI, in termini di stabilità, può essere:
- *stabile* (detto anche marginalmente stabile o semplicemente stabile),
- *instabile* o
- *asintoticamente stabile*
:::

### Teorema di Lyapunov

:::def{Funzione di Lyapunov}
Chiamiamo $V(x)$ una **funzione di Lyapunov** in un intorno di $D$ dell'origine dello spazio degli stati ($\dot{x}(t)=f(x(t))$) se:
- $V(x)$ è definita positiva,
- $\dot{V}(x) = \left[ \frac{\partial V}{\partial x_1},\ldots\frac{\partial V}{\partial x_n} \right] \dot{x}(t) \leq 0 \ \forall x \in D $
:::

<!-- prosecuzione con i criteri di stabilità di Lyapunov -->
<!-- Magari prima della stabilità per sistemi LTI -->

## Retroazione

Il principio della retroazione è quello di determinare un ingresso del sistema a partire dalla sua uscita, cioè $\tilde{u}(t)=f(y)$

Consideriamo la coppia di equilibrio $(x_e,u_e)$, allora, lo stato e ingresso che contengono l'errore rispetto a questa coppia sono 
$$
\begin{cases}
x(t) &= 
\underbrace{\tilde{x}(t)} 
+ x_e \\
& \text{errore rispetto all'equilibrio}\\
u(t) &= \tilde{u}(t) + u_e
\end{cases}
$$
<!-- Remove alignment rule locally -->

Supponendo $y(t) = x(t)$, allora $\tilde{u}(t)=\dot{x}(t)$; il sistema sarebbe:

$$
\begin{cases}
\dot{x}(t) = Ax(t) + Bu(t) \\
y(t) = x(t)
\end{cases}
$$

Data la linearità del sistema, possiamo supporre esista $K$, matrice $n\times m$ tale per cui $u(t) = Kx(t)$:

$$
\begin{aligned}
\dot{x}(t) &= Ax(t) + Bu(t)= \\
&= Ax(t) + B(Kx(t))=\\
&= (A + BK)x(t)
\end{aligned}
$$

per cui la condizione per la stabilità è che gli autovalori della matrice $A + BK$ siano tutti a parte reale negativa.
$$
\dot{x}(t) = (A + KB)x(t)
$$

<!-- Missing parts -->

## Linearizzazione e Stabilità

<!-- Con matrice Jacobiana -->

$$
A_e = \left. \frac\partial{\partial{x}} f(x,u) \right|_{\substack{
    x=x_e \\ u = u_e}
    }
$$
$$
B_e = \partial /\partial{u} f(x,u) |_{x=x_e, u = u_e}
$$

<!-- fix sizes -->


Dati $x_e$ e $u_e$ coppia di equilibrio, se $x(0) = x_e + \tilde{x}(0)$, ci chiediamo se possiamo trovare $u(t)$ tale che $\tilde{x}(0) \to 0$

Se il sistema linearizzato è asintoticamente stabile, allora l'equilibrio del sistema originale in un intorno della posizione di linearizzazzione è asintoticamente stabile.

Se consideriamo il linearizzato 

$$
\Delta \dot{x}(t) = A_e \Delta x(t) + B_e \Delta u(t)
$$

supponiamo $\exists K_e$ tale che $\Delta u(t) = K_e \Delta x(t)$, allora 

<!-- Parte mancante -->

per il sistema non-lineare 

$$
u(t) = u_e + K_e(x(t) - x_e)
$$

<!-- Parte mancante -->

:::nb
Fin qui si è supposto $y(t) = x(t)$, cioè che ci è sempre noto l'intero stato. <!-- Raggiungibilità -->
:::

