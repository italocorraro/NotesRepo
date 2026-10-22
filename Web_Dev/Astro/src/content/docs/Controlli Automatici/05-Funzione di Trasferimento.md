---
title: 'Funzione di Trasferimento'
metaTitle: 'Funzione di Trasferimento'
description: ''
author: 'Italo Corraro'
order: 5
---

$$
\begin{aligned}
Y(s) &= C\,X(s) + D\,U(s) =\\
&= C\left((sI - A)^{-1}x(0) + (sI-A)^{-1}U(s) \right) + D\,U(s)
\end{aligned}
$$

Nel caso di un'evoluzione libera:

$$
Y(s) = C (sI - A)^{-1}x(0)
$$

Chiamiamo *matrice aggiunta* la matrice
$adj(sI - A)$, per cui 

$$
(sI-A)^{-1} = \frac{adj(sI-A)}{det(sI-A)}
$$

:::oss
Poiché abbiamo $det(sI-A)$ a denominatore, possiamo collegare il comportamento di $(sI-A)^{-1}$ con le radici del polinomio caratteristico di $A$
:::

:::nota
La matrice aggiunta è un prodotto di polinomi in $s$ di grado massimo $n-1$
<!-- Matrice Aggiunta
    matrice del complemento algebrico
 -->
:::

Consideriamo l'evoluzione forzata:

$$
Y_f(s) = \underbrace{
    \left[C(sI-A)^{-1}B + D \right]
}_{
    \text{funzione matriciale di }s
}\,U(s)
$$

La funzione che lega in modo diretto le trasformate dell'uscita forzata a quella dell'ingresso è detta **funzione di trasferimento** del sistema.

:::eg
Supponiamo di avere un sistema con uscita e ingresso scalari (a 1 dimensione):
$$
Y_f(s) = \left[\underbrace{C}_{1\times n}
(\underbrace{sI-a}_{n\times n})^{-1} 
\underbrace{B}_{n \times1} + \underbrace{D}_{1\times1} \right]U(s)
$$
:::

La funzione di trasferimento: 

$$
G(s) 
= \frac{Y_f(s)}{U(s)} 
= C(sI-A)^{-1}B + D
= C\,\frac{adj(sI-A)}{det(sI-A)}\,B +D
$$

Se assumiamo stato iniziale nullo ($x(0)=0$), allora abbiamo che $Y_f(s) = Y(s) = G(s)\,U(s)$.

:::oss
Nella funzione di trasferimento, il denominatore è solo $det(sI-A)$ e descrive i poli del sistema.
:::
:::oss
Sia numeratore che denominatore di $(sI-A)^{-1}$
sono polinomi in $s$, possiamo fare alcune considerazioni a riguardo
1. Se numeratore e denominatore originari non hanno radici comini, allora $Den(s) = det(sT-A)$, quindi i poli del sistema sono tutti e soli gli autovalori della matrice $A$,
2. Se ci sono *cancellazioni*, cioè se alcune radici dei due polinomi coincidono e quindi si annullano a vicenda (si semplificano); avremo che i poli del sistema saranno tutti autovalori di $A$, ma non saranno tutti gli autovalori di $A$ (avrà grado $n-n^o \text{ di cancellazioni}$)
3. il grado del numeratore è sempre uguale o minore a quello del denominatore; la differenza tra i due gradi è detta *grado relativo*. Il numeratore può raggiungere il grado $n$ solo se $Den\leq0$
:::

<!-- :::eg
Consideriamo un sistema SISO
```mermaid
flowchart LR

|u(t)| -- G[G(s)] -- |y(t)|
```
::: -->

<!-- Schemi a Blocchi -->



## Poli e Zeri 

$$
G(s) = \frac{N(s)}{D(s)} = \frac{
    \beta_\nu s^{\nu} + \beta_{\nu-1} s^{\nu-1} + \ldots \beta_1 s + \beta_0
}{
    \alpha_\nu s^{\nu} + \alpha_{\nu-1} s^{\nu-1} + \ldots \alpha_1 s + \alpha_0
}
$$

Dove il grado di $N(s)$ è $\nu$ e il grado di $D(s)$ è $$ con $\nu \leq $

Visualizziamo direttamente le radici dei due polinomi 
$$
G(s) = 
\frac{
    \mu \prod (1 + z_j \,s)
}{
    \prod_{i=0}^n (1 + p_i \,s)
}
$$

## Risposta al Gradino per Sistemi del Primo Ordine

Consideriamo un sistema per cui $Y(s)=G(s)U(s)$
con $G(s) = \frac{\mu}{1 + Ts}$
raccogliamo $T$ al denominatore:
$$
G(s) = \frac{\mu}{1 + Ts} = \frac{\mu}{T}\frac{1}{s + \frac1T}
$$

## Risposta al Gradino per Sistemi del Secondo Ordine

$$
G(s) = \frac{\mu}{s^2 + \square s + \square} 
$$

Essendo di secondo grado, il denominatore può essere fattorizzato in due modi:
1. *due radici reali* (due poli reali): $D(s) = (s + p_1)(s + p_2)$
2. *due radici complesse coniugate* (coppia di poli complessi coniugati): $D(s)=(s + \sigma + j\omega)(s + \sigma - j\omega)$

Nl caso dei complessi coniugati, è più conveniente lasciare il polinomio come di secondo grado:

$$
D(s) = s^2 +=2 \xi\omega_n s + \omega_n^2
$$

<!-- altra lezione -->

<!-- Sviluppo di Heaviside fratti semplici -->
<!-- antitrasformata da fratti come residui di Heaviside -->

$$
y(s) = r_1 e^{-\frac{t}\tau} \ldots
$$

$$
Y(s) = \frac{r_1}{s + \lambda_1} + \ldots + \frac{r_n}{s + \lambda_n} = \sum_{k=1}^{n} \frac{r_k}{s + \lambda_k}
$$

$$
\begin{aligned}
Y(s) (s + \lambda_1) 
&= 
\frac{r_1}{\underline{s + \lambda_1}} \underline{(s + \lambda_1)} 
+ \frac{r_2}{s + \lambda_2} (s + \lambda_1) 
+ \ldots 
+ \frac{r_n}{s + \lambda_n} (s + \lambda_1)
\\ &\,\Downarrow \text{ calcoliamo in }-\lambda_1\\ 
Y(-\lambda_1) (s + \lambda_1) 
&= 
r_1 
+ \frac{r_2}{-\lambda_1 + \lambda_2} \underbrace{(-\lambda_1 + \lambda_1)}_{0} 
+ \ldots 
+ \frac{r_n}{-\lambda_1 + \lambda_n} \underbrace{(-\lambda_1 + \lambda_1)}_{0} =\\
&= r_1
\end{aligned}
$$

In generale 
$$
\left.Y(s)(s + \lambda_i)\right|_{s=-\lambda_i} = r_i
$$

:::oss
Per i complessi coniugati, i poli avranno dei residui $r_k$ che sono anche loro complessi coniugati.
:::


<!-- Guadagno statico -->
<!-- costante di tempo -->
<!-- regime  -->


:::rg
> Calcolare la risposta al gradino di un sistema del secondo ordine con una coppia di poli complessi coniugati; il sistema ha
> $$
> G(s) = \frac\rho{s^2 + 2 \xi\omega_ns +\omega_n^2}
> $$
:::

## 
Abbiamo il caso 
$$
Y(s) = \frac{N(s)}{(s + \sigma_i + j\omega_i)(s - \sigma_i + j\omega_i)D'(s)}
$$

Per la scomposizione, sappiamo che r_{i1} e r_{i2} sono complessi coniugati, allora possiamo scrivere

$$
r_{i1} = M_ie^{-j} \\
r_{i2} = M_ie^{-j} 
$$

Quindi 
$$
y(t) = r_{i1} e^{-(\sigma_i + j\omega_i)} + r_{i2} e^{-(\sigma_i - j\omega_i)} + \ldots
$$