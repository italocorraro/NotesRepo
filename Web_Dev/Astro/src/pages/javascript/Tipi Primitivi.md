---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Appunti Tipi Primitivi di JavaScript'
description: 'Appunti e note sui tipi primitivi in JavaScript.'
author: 'Italo Corraro'
---
## Indice

## Tipi Primitivi

In JavaScript si riconoscono 7 tipi di dato 'primitivi':

* `undefined`
* `null`
* booleani
* numeri
* bigInt
* stringhe
* simboli

## Wrapper Classes

Con l'eccezione di `undefined` e `null`, tutti gli altri tipi primitivi hanno una classe _wrapper_ associata:

* La classe wrapper viene usata da JavaScript per racchiudere il dato primitivo quando viene invocata una proprietà o un metodo su di esso

:::oss
fondamentalmente, questi 5 tipi primitivi sono anche **oggetti** quando serve
:::

Le classi wrapper sono 

* `Boolean()`
* `Number()`
* `BigInt()`
* `String()`
* `Symbol()`

Ci permettono di scrivere 

```javascript
'acqua sotto i ponti'.lenght; // 19
```

Per convertire un tipo di dato a un altro si possono usare le classi wrapper:

```javascript
Number('25'); // ritorna 25 (numero, non stringa)
```

<u>L'alternativa ai tipi primitivi sono gli oggetti</u>

## Numeri

In JavaScript i numeri sono trattati tutti come floating point; non ci sono degli interi

L'oggetto `Number` può essere usato per convertire in 'number' i valori passati per argomento; se il valore non è convertibile in numero, allora l'operazione restituisce `NaN` (_not a number_), che è una proprietà dell'oggetto globale