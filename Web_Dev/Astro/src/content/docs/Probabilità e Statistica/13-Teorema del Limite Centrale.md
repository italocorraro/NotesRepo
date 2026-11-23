---
title: 'Teorema del Limite Centrale'
metaTitle: 'Teorema del Limite Centrale'
description: ''
author: 'Italo Corraro'
order: 13
---

:::::th{del Limite Centrale}
Data una successione di variabili casuali indipendenti e identicamente distribuite (i.i.d.) $X_1,X_2,\ldots,X_n$, tutte con media $\mu$ e varianza $\sigma^2$, allora

$$
\lim_{n\to\infty} P\left(
    \frac{\sum_{i-1}^{n} X_i - n\mu}{\sigma\sqrt{n}} \leq a
\right) = F_Z(a) \ \ \text{con }
Z \sim \mathcal{N}(0,1)
$$
cioè che $\frac{\sum_{i-1}^{n} X_i - n\mu}{\sigma\sqrt{n}}$ converge in distribuzione a una normale standard
:::::

## Applicazioni

### Somma di Variabili Casuali

Se $X\sim \mathcal{B}(n,p)$ con $n$ molto grande, allora

$$
X = \sum_{i=1}^{n} Y_i \ \ \text{con }Y_i \sim \mathcal{Be}(\phi) \text{ indipendenti}
$$

quindi, se $n \gg 1$
$$
\begin{aligned}
\frac{X -np}{\sqrt{npq}} &\sim \mathcal{N}(0,1)\\
&\,\Downarrow\\
X &\dot{\sim} \mathcal{N}(np,npq)
\end{aligned}
$$

Se $X \sim \mathcal{B}(n,p)$ allora $P(X=k) \neq 0 \ \forall k \in\mathbb{N}\setminus\{0\}$

Se $X \sim \mathcal{N}(np,npq)$ allora $P(X=k)=0$

### Approssimazone alla Continuità

Si immagini di avere una variabile casuale $X \sim \mathcal{B}(n,p) \dot{\sim} N(np,npq)$

Sceglaimo un intervallo $[k -\frac12, k+ \frac12]$ e indichiamo $P(X=k) = P(X\in[k -\frac12, k+ \frac12])$

$$
P(X=k) = F_Z(\frac{(k + \frac12)-np}{\sqrt{npq}})
- F_Z(\frac{(k - \frac12)-np}{\sqrt{npq}})
$$


### ?

:::::ol
:::li
$P(X \lt k) = P(X\lt k-\frac12)$

- dal punto di vista della binomiale non cambia nulla
- dal punto di vista della gaussiana
:::
:::li
$P(X \leq k) = P(X \leq k + \frac12)$

- per la gaussiana $F_Z(\frac{(k + \frac12)-np}{\sqrt{npq}})$
:::
:::li
$P(X>k) = P(k + \frac12) \simeq 1 - F_Z(\frac{(k + \frac12)-np}{\sqrt{npq}})$
:::
:::li
$P(X \geq k) = P(X \geq k - \frac12) \simeq 1- F_Z(\frac{(k - \frac12)-np}{\sqrt{npq}}) $
:::
:::::

## Esempi

### Overbooking

> La capienza dell'aula 1 è di $150$ posti.   
> Si sa che ogni studente partecipa alle lezioni con probabilità $3\%$.
>
> Se le matricole sono $450$, qual è la probabilità che l'aula 1 non sia sufficiente oggi?

Indichiamo con $X$ il numero di studenti che partecipano alla lezione, allora è una binomiale (gli esiti sono 2):
$$
X \sim \mathcal{B}(450,0.3)
$$

Vogliamo trovare $P(X > 150)$

Approssiamiamo la binomiale con una gaussiana:
$$
X \dot{\sim} \mathcal{N}(450\cdot0.3,450\cdot0.3\cdot7)
$$

$$
P(X > 150) = P(X > 150 + \frac12) = 1-F_Z(\frac{150.5 - 450\cdot0.3}{\sqrt{450\cdot0.3\cdot7}}) \simeq 5.6\%
$$

:::oss
Usando la binomiale o poissoniana come approssimazione, 
- la binomiale $P(X>150) = 1 - P(X\leq 150)$
$$
= 1 - \sum_{k=0}^{150} \binom{450}k 0.3^k 0.7^{450 k}
$$

- la poissoniana
$$
1-P(X\leq150) = 1 - \sum_{k=0}^{45}
$$

:::

### Somma di Variabili Casuali i.i.d.

Con $E[X_k]=\mu$ e $Var(X_k)=\sigma^2$

$$
Y = \sum_{k=1}^{n}X_k \dot{\sim} \mathcal{N}(n\mu, n\sigma^2) \ \ \text{se } n\gg 1
$$

:::::eg
> Una compagnia aerea sa che le persone che salgono sull'aereo hanno un peso che, indipendentemente dagli altri, presents media $97$ e deviazione standard $15$.
> 
> Vogliamo conoscere la probabilità che su un aereo con 225 persone a bordo, il peso totale superi $12 \cdot 10^4 kg^2$.

Sia $X_i$  il peso di una persona, per cui:
$$
E[X_i] = 87\\
Var(X_i) = 15^2
$$

Diciamo che 
$$
X \sim \mathcal{N}(225\cdot87,225\cdot15^2)\\

P(Y > 2 \cdot 10^4 ) 
= P1 - F_Z(\frac{1})
$$
:::::

### ?

$$
\begin{aligned}
\lim_{n\to\infty} P\left(
    \frac{\sum_{i=1}^{n} X_i -n\mu}
    {\sigma\sqrt{n}}
    \leq a
\right) &=F_Z(a)\\
&\,\Downarrow\\
\lim_{n\to\infty} P\left(
    \frac{
        \frac{\sum_{i=1}^{n} X_i}
        {n} - \mu
    }{ 
        \frac{\sigma}{\sqrt{n}} 
    }
    \leq a
\right)
\\
&\,\downarrow
\footnotesize
\begin{array}{l}
\text{dove }\\
\overline{X} = \\
E[]
\end{array}
\\
&= \overline{X} \dot{\sim}\, \mathcal{N}(\mu,\frac{\sigma^2}{n})
\end{aligned}

$$

### ??

> Una popolazione presenta pesi corporei di media 167 e deviazione standard 27 in opportune unità di misura
>
> 1. Si cosiderino i pesi di 36 individui; individuare $P(163<\overline{X}<171)$
> 2. Come varia la probabilità segli individui del campione sono 144?

:::::::::ol
:::::::li
Abbiamo $n=36$, per cui possiamo applicare il teorema del limite centrale:
$$
\overline{X}= \frac{\sum_{i=1}^{36} X_i}{36} \dot{\sim} \, \mathcal{N}(167,\frac{27^2}{36})
$$
$$
\begin{aligned}
P(163<\overline{X}<171) 
&=
P(\overline{X} <171) - P(\overline{X}\leq 163)=\\
&=
P(
    \frac{\overline{X}-167}{\frac{27}6} \leq
    \frac{171-167}{\frac{27}6}
)- P(
    \frac{\overline{X}-167}{\frac{27}6} \leq
    \frac{163-167}{\frac{27}6}
) =\\
&\,\downarrow
\footnotesize
Z \sim \mathcal{N}(0,1)
\\
&=
P(Z \leq 0.8889)
- P(Z \leq - 0.8889) =\\
&=
F_Z(0.89) - F_Z(-0.89) \simeq 63\%\\
&\,\downarrow
\footnotesize
\begin{array}{l}
\text{Uso le tavole per $F_Z(a)$ con }a \geq0: \\
\text{le code laterali della funzione $f_Z(a)$ devono essere simmetriche}
\end{array}
\\
\int_{-\infty}^{-b} f_Z(a)\,da 
&= \int_{b}^{+\infty} f_Z(a)\,da \\
&\,\downarrow\\
P(Z\leq -b) &= P(Z \geq b)\\
&\,\Downarrow
\footnotesize
P(Z \geq b) = 1 - P(Z \leq b)
\\
F_Z(-b) = 1 - F_Z(b)
\end{aligned}
$$

:::oss
Questo problema poteva anche essere risolto con la idsuguaglianza di Chebychev <!-- spelling -->

cioè: 
$$

P(163<\overline{X}<171) = P(-4<\overline{X-167}<4) = P(
    |{\overline{X}-\overbrace{167}^{E[\overline{X}]}}| \leq 4
)
$$
Per Chebychev <!--  -->:
$$
P(|{\overline{X}-167}| \leq 4) = 1 - P(|{\overline{X}-167}| \geq 4) \\
\geq 1 - \frac{Var(\overline{X})}{16} =\\
= - \frac{17}{64}
$$
:::
:::::::
:::::::li
Abbiamo $Var(\overline{X}) = \frac{27^2}{144}$, cioè più piccola del caso precedente, ma concettualmente i calcoli sono identici:
$$
P(163<\overline{X}<171) \simeq 92\%
$$
:::::::
:::::::::

## Enunciato 2

:::::th{del limite centrale}
Data una successione di variabili casuali i.i.d. $X_1,X_2\ldots,X_n$ con $E[X_k]=\mu$ e $Var(X_k)=\sigma^2$

$$
\lim_{n\to\infty} P\left(
    \frac{\sum_{i=1}^{n} X_i -n\mu}
    {\sigma\sqrt{n}}
    \leq a
\right) =F_Z(a)
$$
con $Z \sim \mathcal{N}(0,1)$ e $\forall a \in \mathbb{R}$
:::::
:::::dim
Consideriamo per primo il caso con $\mu=0$ e $\sigma^2=1$;

sia $T_n = \frac{\sum_{i=1}^{n}X_i}{\sqrt{n}}$, allora
$$
\lim_{n\to\infty} F_{T_n} (a) = 
\lim_{n\to\infty} P(T_n \leq a) = F_Z(a)
$$

Due variabili hanno la stessa funzione di distribuzione se e solo se hanno la stessa funzione generatrice dei momenti.

$$
\lim_{n\to\infty} \phi_{T_n}(t) = \phi_{Z} (t)
$$

:::nota
$\phi(t)$ non può mai essere negativa per definizione
:::

Il limite appena visto, comporta che
$$
\lim_{n\to\infty} \ln(\phi_{T_n} (t)) = \ln(\phi_Z(t))
$$

$$
\phi_Z(t) = e^{\frac{t^2}2} \Rightarrow
\ln(\phi_Z(t)) = \frac{t^2}2
$$
$$
\begin{aligned}
\phi_{T_n}(t) &= \phi_{\frac{\sum_{i=1}^{n}X_i}{\sqrt{n}}} (t)\\
&\,\downarrow
\footnotesize
\text{per l'indipendenza}
\\
&=
\phi_{\frac{X_1}{\sqrt{n}}}(t)\,
\phi_{\frac{X_2}{\sqrt{n}}}(t)\,
\ldots
\phi_{\frac{X_n}{\sqrt{n}}}(t)
=\\
&\,\downarrow
\footnotesize
\begin{array}{l}
\phi_{\frac{X_k}{\sqrt{n}}}(t) 
= E[e^{\frac{t\,X_k}{\sqrt{n}}}] =
E[e^{X_k \frac{t}{\sqrt{n}}}] =
\phi_{X_k}(\frac{t}{\sqrt{n}})
\end{array}
\\
&=
\prod_{i=1}^{n} \phi_{X_i}(\frac{t}{\sqrt{n}})=\\
&\,\downarrow
\footnotesize
\text{sono tutte uguali (??)}
\\
&=
(
    \phi_{X_1} (\frac{t}{\sqrt{n}})
)^n\\
&\Downarrow
\footnotesize
\text{logaritmo naturale di entrambi i termini}
\\
\ln(\phi_{T_n}) &= n \ln(\phi_{X_1}(\frac{t}{\sqrt{n}}))
\end{aligned}
$$

Per verificare la validità del limite facciamo alcuni calcoli:

Sia $L(s) = \ln (\phi_{X_1}(s))$
$$
L(0) = \ln [E[^{0x}] ]=0 \\
\left.\frac{d L}{ds} \right|_{s=0} =
0\\
\left.\frac{d^2 L}{ds^2} \right|_{s=0} =
- E[X_1] + E[X_1^2] = - \mu + (\sigma^2 + \mu^2) = 1
$$

:::nota
- $L(0)= 0$
- $\frac{dL}{ds}(0)= 0$
- $\frac{d^2L}{ds^2}(0)= 1$
:::
$$
\begin{aligned}
\lim_{n\to\infty} n \ln\phi_{X_1}(\frac{t}{\sqrt{n}}) 
&= \lim n L(\frac{t}{\sqrt{n}}) =\\
&=
\lim \frac{L(\frac{t}{\sqrt{n}})}{\frac1n} =\\
&\,\downarrow
\footnotesize
\text{sfruttiamo il teorema di De L'Hopital}
\\
&= \lim \frac{
    \frac{d}{dn} (L(\frac{t}{\sqrt{n}}))
}{
    \frac{d}{dn} (\frac1n)
}=\\
&=
\lim \frac{
    \frac{dL}{d\frac{t}{\sqrt{n}}} (-\frac12 \frac{t}{n^{3/2}})
}{
   - \frac{1}{n^2}
}=\\
&=
\lim \frac{t}2 \frac{
    \frac{dL(\frac{t}{\sqrt{n}})}{d\frac{t}{\sqrt{n}}}
}{
    \frac1{\sqrt{n}}
} =\\
&\,\downarrow
\footnotesize
\text{passiamo alla derivata seconda}
\\
&=
\lim \frac{t}2 \frac{
    \frac{d}{dn}\frac{dL(\frac{t}{\sqrt{n}})}{d\frac{t}{\sqrt{n}}}
}{
    \frac{d}{dn}\frac1{\sqrt{n}}
} =\\
&= 
\lim \frac{t}2 \frac{
    \frac{d^2}{(d\frac{t}{\sqrt{n}})^2}\frac{dL(\frac{t}{\sqrt{n}})}{d\frac{t}{\sqrt{n}}}
}{
    \frac{d}{dn}\frac1{\sqrt{n}}
} =\\
\end{aligned}
$$



??

Se invece $\mu\neq0$ e/o $\sigma^2\neq1$, allora definiamo 
$$
Y_i = \frac{X_i -\mu}{\sigma}
$$
$$
E[Y_i] = \frac1\sigma (E[X_i] - \mu) = 0
$$
<!--  -->
$$
Var(Y_i) = \frac1{\sigma^2} Var(X_i - \mu) =
1
$$
<!-- ^ riportare proprietà var di \alphaX + \beta -->

Da qui otteniamo:
$$
\begin{aligned}
\frac{
    \sum_{i=1}^{n} X_i - n\mu 
}{\sigma\sqrt{n}} 
&=
\frac{
    \sum_{i=1}^{n} (\sigma Y_i + \mu) - n\mu 
}{\sigma\sqrt{n}} =\\
&=
\frac{
    \cancel{n\mu} + \bcancel{\sigma}\sum_{i=1}^{n} Y_i - \cancel{n\mu} 
}{\bcancel{\sigma}\sqrt{n}} =\\
&=
\frac{
    \sum_{i=1}^{n}Y_i
}{
    \sqrt{n}
}
\end{aligned}

$$
:::::


### ES 1

> Gli ingegneri che costruiscon oun ponte sanno che il numero di tonnellate W che una campata può sostenere senza subire danni è una variabile casuale di media 200 e deviazione standard 20
>
> Se il peso in tonnellate degli autoveicoli è una variabile casuale di media 1.5 e deviazione standard 0.15, quante automobili dovrebbero essere contemporaneamente sulla campata affinchè la probabilità di un danno strutturale sia 10%?

- Supponiamo le variabili che descrivono i pesi delle auto tutti indipendenti (arbitrariamente).
- che siano anche identicamente distribuite
- che valga il limite centrale (cioè supponiamo che il risultato $n$ sarà comunque un numero abbastanza grande)

Sia $X_i$ il peso di un'automobile, per cui $X_1,X_2\ldots,X_n$ sono indipendenti e identicamente distribuite (per ipotesi).
- $E[X_i] = 1.5$
- $Var(X_i) = 0.15^2$

Sia $Y_n = \sum_{i=1}^{n} X_i$ dove supponiamo $n$ abbastanza grande per cui vale il teorema del limite centrale e quindi $Y_n \dot{\sim}\, \mathcal{N}(1.5n,(0.15)^2n)$

Infine $W \sim \mathcal{N}(200,400)$ per ipotesi

Vogliamo determinare per quale $n$ si verifica che $P(Y_n > W)=10\%$.

È ragionevole supporre che $Y_i$ e $W$ siano indipendenti
$$
T = Y_n-W \dot{\sim}\, \mathcal{N}(1.5n - 200, (0.15)^2n - 400)
$$
Quello che cerchiamo diventa
$$
P(Y_n>W) = P(Y_n-W>0)= P(T>0)
$$

$$
\begin{aligned}
P\left(
    \frac{T - 1.5n+200}
    {\sqrt{(0.15)^2n+400}}
    >
    \frac{0 - 1.5n+200}
    {\sqrt{(0.15)^2n+400}}
\right)\\

\\

1 - F_Z(\frac{200 - 1.5m}
    {\sqrt{(0.15)^2n+400}} \simeq 1.28)
    \\

    \\

(200 - 1.5n)^2 = (1.28)^2[(0.15)^2n+400] =\\
= 2.25n^2 - 600\cdot246 - 39.344 = 0\\
\Downarrow\\
n = 116 \cup n=151
\end{aligned}
$$

Scegliamo il valore più piccolo per sicurezza, quindi $n\simeq116$ ($117$ se consideriamo i decimali arrotondati sempre per eccesso)