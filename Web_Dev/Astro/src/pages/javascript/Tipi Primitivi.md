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

In JavaScript i numeri sono trattati tutti come floating point a 64 bit, l'equivalente dei `double`; non ci sono degli interi, ma non vengono mostrati decimali non necessari

* gli interi sono limitati a 15 caratteri, oltre questo numero avviene overflow
* l'aritmetica con i numeri a virgola mobile non è precisa al 100%
* I numeri preceduti da `0x` sono interpretati come esadecimali
* I numeri preceduti da `0` (non con virgola) sono (a volte) interpretati come ottali

---

:::nota
JavaScript accetta la notazione scientifica per i Number:
```javascript
let x = 834e5 // = 83400000
```
:::

L'oggetto `Number` può essere usato per convertire in 'number' i valori passati per argomento; se il valore non è convertibile in numero, allora l'operazione restituisce `NaN` (_not a number_), che è una proprietà dell'oggetto globale

:::warn
`typeof NaN` restituisce `number`!
:::

`Infinity` e `-Infinity` sono numeri e raccolgono qualsiasi valore fuori dai limiti

:::warn
`typeof Infinity` restituisce `number`!

Inoltre, dividere per 0 un numero restituisce `Infinity` (con segno)
:::

### Metodi

WIP

## Stringhe

* le stringhe sono qualunque serie di caratteri racchiusi tra due `"`, `'` o <code>`</code>, 
* gli apici/virgolette di chiusura devono essere gli stessi di quelli di apertura,
* le virgolette/apici usati per delimitare la stringa NON possono essere usati al suo interno, ma si possono usari gli altri tipi liberamente
* le stringhe delimitate da <code>`</code> (detto *accento greve*) sono dette *stringhe interpolate* (*template literals*) poiché consentono interpolazione, cioè si possono inserire espressioni JavaScript il cui risultato viene poi convertito a stringa e concatenato al resto
:::eg
```javascript 
const nome = "Chris";
const saluto = `Ciao, ${name}`;
console.log(saluto); // "Ciao, Chris"
```
:::
* le stringhe delimitate da `'` e `"` non rispettano gli a capo e necessitano del carattere `\n` per quello; le stringhe interpolate invece rispettano la scrittura della stringa così come viene data

