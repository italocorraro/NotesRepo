---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Algebra Relazionale'
metaTitle: 'Algebra Relazionale'
description: ''
author: 'Italo Corraro'
order: 4
---


L'algebra relazionale è un linguaggio di manipolazione dati; le operazioni in questo linguaggio sono chiuse rispetto ad esso (operando tra due relazioni, si ottiene una relazione nello stesso insieme), è procedurale.

## Operatori

Ogni operatore deve stabilire come lo schema del risultato si costruisce a partire da quelli degli operandi e in che modo l'istanza risultato dipende da quelle in ingresso.

### Operatore Selezione $\sigma$

L'operatore $\sigma$, detto *di selezione*, è un operatore unario che permette di selezionare un sottoinsieme delle tuple di una relazione, applicandovi una formula di algebra booleana $F$.

$$
 \sigma_{F}(R) 
$$

- F si compone di predicati connessi da `AND` ($ $), `OR` ($ $) e `NOT` ($\neg$) operatori booleani (con associate proprietà note)
- Casi più comuni: un predicato è del tipo A  c o A  B, dove:
    - A e B sono attributi in X, $c \in dom(A)$ è una costante
    -  è un operatore di confronto,   {=, ≠, <, >, ≤, ≥} 

:::nota
$$ 
\sigma_{F_1 AND F_2}(E) \equiv \sigma_{F_1}(\sigma_{F_2}(E))  
$$
:::

### Operatore di Proiezione $\pi$

L'operatore $\sigma$, detto *di selezione*, è un operatore unario che permette di selezionare un sottoinsieme $Y$ degli attributi di una relazione:

$$
 \pi_Y(R) 
$$

L'operazione di proiezione elimina eventuali duplicati qualora non selezionasse come sottoinsieme di attributi una superchiave.

:::nota
$$ 
\pi_{Y}(\pi_{YZ}(E)) \equiv \pi_{Y}(E)  
$$
Eliminare attributi da una selezione in più passaggi o in uno solo non altera il risultato finale.
:::

:::nota
$$ 
\pi_{Y}(\sigma_{F}(E)) \equiv \sigma_{F}(\pi_{Y}(E))  
$$
Proiezione e Selezione sono commutative l'una rispetto all'altra.
:::

### Operatore di Join $\bowtie$

L'operatore di join naturale è un operatore binario e combina tuple di due relazioni sulla base dell'uguaglianza di valori degli attributi comuni alle due relazioni; lo schema del risultato è l'unione degli schemi degli operandi.

Ad esempio, se due tuple condividono un attributo 'A', il join creerà una nuova relazione combinando gli attributi delle due operande in cui sono presenti le tuple formate dall'unione delle tuple degli operandi che hanno lo stesso valore per l'attributo comune.

Le tuple dei due operandi che non hanno un "match" nell'altra relazione sono dette *dangling* e non figurano nel risultato.

La relazione risultante ha cardinalità compresa tra $0$ (tutte tuple dangling per entrambe le relazioni) e $|r_1| \times |r_2|$ (tutte le tuple su una relazione hanno match con tutte le tuple dell'altra).

Il join è un'operazione che gode delle proprietà commutativa e associativa, cioè, l'ordine con cui vengono eseguite le operazioni di join tra di loro è indifferente.

Qualora le relazioni avessero lo stesso schema (stessi attributi), allora il join equivarrebbe all'intersezione delle due.

In caso di mancanza di attributi comuni tra le due relazioni, il join naturale equivale al prodotto Cartesiano.

:::eg
Date 3 relazioni:
```
GIOCATORI(NomeG,Società);
PROVE(IdProva,MinPunti);
TENTATIVI(NomeG,IdProva,Data,Punti),
    NomeG REFERENCES GIOCATORI,
    IdProva REFERENCES PROVE;
```
1. PROVE $\bowtie$ TENTATIVI: (NomeG,IdProva,Data,Punti,MinPunti)
2. $\sigma_{\text{Punti} \geq \text{MinPunti}}$: prende le tuple con punti sufficienti
3. $\pi_{\text{NomeG}}$: prendiamo solo i nomi dei giocatori (duplicati collassano)
4. $\bowtie$ GIOCATORI: dati dei giocatori che hanno raggiunto il numero minimo di punti
:::