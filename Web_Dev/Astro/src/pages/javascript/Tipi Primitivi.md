---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Tipi Primitivi in JavaScript'
metaTitle: 'Appunti sui Tipi Primitivi di JavaScript'
description: 'Appunti e note sui tipi primitivi in JavaScript.'
author: 'Italo Corraro'
---

## Tipi Primitivi

In JavaScript si riconoscono 7 tipi di dato 'primitivi':

* `undefined`
* `null`
* booleani
* numeri
* bigInt
* stringhe
* simboli

I tipi primitivi rappresentano dei valori base del linguaggio e di loro natura non posseggono proprietà dinamiche, ma JavaSCript gira attorno a questo ostacolo:

## Wrapper Classes

Con l'eccezione di `undefined` e `null`, tutti gli altri tipi primitivi hanno una classe _wrapper_ associata:

* Le classi wrapper vengono usate da JavaScript per racchiudere il dato primitivo quando viene invocata una proprietà o un metodo su di esso; in questo modo, emula il comportamento di un oggetto

:::oss
fondamentalmente, questi 5 tipi primitivi possono anche essere trattati **oggetti** quando serve
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

=u=L'alternativa ai tipi primitivi sono gli oggetti==

:::warn
I tipi primitivi sono sempre e solo valori in JavaScript, al contrario, gli oggetti sono sempre e solo riferimenti!

:::eg
Consideriamo una funzione; le funzioni prendono sempre una copia dei dati passati per argomento:

* passare per argomento un oggetto a una funzione gliene fornisce una copia del riferimento, poiché però questo punta sempre allo stesso oggetto in memoria, il suo contenuto può essere modificato direttamente dalla funzione, 
* invece, passare per argomento un dato di tipo primitivo a una funzione gliene fornisce solo una copia del valore; l'originale non viene toccato
:::

## Copiatura

JavaScript non rende esplicita la referenziazione dei dati, quindi, le varie istruzioni che copiano i dati possono fare due tipi di copiature:

* **superficiale** (*shallow copy*): viene copiato il primo livello del dato; =u=i dati non di tipo primitivo (oggetti) vengono copiati come riferimenti==, questo implica che
    * le modifiche agli oggetti contenuti nel dato si riflettono anche sull'originale (e viceversa)
    * l'originale e la copia dipendono l'uno dall'altro
* **profonda** (*deep copy*): viene copiato l'intero contenuto del dato, quindi 
    * le modifiche agli oggetti contenuti nel dato sono loro esclusive e non si ripercuotono sull'originale (e viceversa)
    * l'originale e la copia sono entità completamente distinte

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

