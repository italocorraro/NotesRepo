---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Collezioni Indicizzate in JavaScript'
metaTitle: 'Appunti sullle collezioni indicizzate in JavaScript'
description: 'Appunti e note sulle collezioni indicizzate per chiavi, quali Map e Set in JavaScript.'
author: 'Italo Corraro'
---

## Le Istanze di Map

Un'istanza di `Map` è una coppia *chiave-valore* indicizzata per ordine di inserimento.

Le chiavi devono essere valori unici all'interno della collezione.

Il metodo `set()` serve a registrare la coppia:

```js
map.set('chiave', 'valore');
```

Il metodo `get()` prende una chiave per argomento e restituisce il corrispondente valore:

```js
map.get('chiave')
// 'valore'
```

La proprietà `size` restituisce il numero di coppie registrate nella mappa.

Il metodo `clear()` elimina tutte le coppie registrate nella mappa.

Il metodo `delete()` permette di eliminare la coppia fornendo la chiave.

Il metodo `has()` permette di verificare la presenza di una coppia passandogli per argomento la chiave; restituisce un booleano in base a se la chiave è presente nella mappa.

Il metodo `keys()` restituisce un iterabile di tutte le chiavi della mappa in ordine; il metodo `values()` ne restituisce invece uno dei valori.

Il metodo `entries()` restituisce un iterabile che contiene le coppie della mappa come array (`[chiave, valore]`).

### Mappe e Array

La struttura di una mappa è analoga a quella di un array bi-dimensionale, cioè un array in cui ciascun elemento è un array di 2 elementi; il primo corrispone alla chiave, il secondo al valore associato.

*Le istanze di `Map` sono iterabili*, usano quindi il costrutto `for...of` invece che `for...in`; l'uso permette di passare un array come recipiente per l'elemento corrente della mappa per decostruire la coppia *chiave-valore*:
```js
for (const [chiave, valore] of mappa) {
  console.log(`${chiave} : ${valore}`);
}
```

Le mappe possono anche usare il metodo `forEach()`; gli argomenti passati alla funzione di callback sono, in ordine: `valore`, `chiave`, `riferimento alla mappa`

È possibile creare una mappa direttamente con un array con la struttura descritta sopra utilizzando il costruttore `Map()`
```javascript
const array = [
    ['chiave1', 'val1'],
    ['chiave2', 'val2']
];

const map = new Map(array);

console.log(map);
/* ↪ Map(2) :
 *    {'chiave1' => 'val1'},
 *    {'chiave2' => 'val2'} */
```
:::nota
Possiamo inserire l'array direttamente nel costruttore:
```js
const map = new Map([
    ['chiave1', 'val1'],
    ['chiave2', 'val2']
]);
```
:::

È anche possibile fare il contrario ed ottenere un array da una mappa con il metodo `Array.from()`:

```js
console.log(Array.from(map));
/* ↪ [
 *     ['chiave1' => 'val1'],
 *     ['chiave2' => 'val2']
 *    ] */
```

### Istanze di WeakMap

Un'istanza di `WeakMap` è una collezione di coppie *chiave-valore* dove le chiavi devono essere *oggetti* o simboli non-registrati

## Le Istanze di Set

Le istanze di `Set` sono collezioni di elementi unici indicizzati per ordine di inserimento; la particolarità di un set è che *i suoi elementi non possono ripetersi al suo interno*.

```javascript
const set = new Set();
```

* Nuovi elementi possono essere agginti con il metodo `set()`.
* La presenza di un elemento può essere verificata passandolo per argomento con il metodo `has()` (restituisce `true`/`false`)
* La proprietà `size` restituisce le dimensioni del set
* Il metodo `keys()` restituisce un iterabile degli elementi del set

### Set e Array

*Le istanze di `Set` sono iterabili*, usano quindi il costrutto `for...of` invece che `for...in`.

Per creare un set si può usare anche un array monodimensionale:

```js
const set = new Set([
    'primoEl', 
    'secEl', 
    'terzEl'
]);
```

Si può anche usare un array già esistente per creare un set.

:::nb
Tutti gli elementi duplicati dell'array usato per generare il set verranno eliminati nel set
:::

Possiamo ottenere un array da un set con il metodo `Array.from()` o con l'operatore *spread*:
```js
const array = Array.from(set);
// oppure
const array = [...set];
```

### Metodi di Composizione

I set possiedono diversi metodi per effettuare operazioni logiche tra di loro; questi metodi sono equivalenti alle operazioni logiche degli insiemi.

Consideriamo due set: `A` e `B`:

| `A.difference(B)` |
| :--- |
| Questo metodo è equivalente alla differenza tra insiemi ($A - B$ o $A \setminus B$), cioè restituisce un set composto di *tutti gli elementi appartenenti ad `A` che non appartengono anche a `B`* |

| `A.intersection(B)` |
| :--- |
| Equivalente alla disgiunzione tra insiemi ($A \cap B$), cioè restituisce un set composto di *tutti gli elementi appartenenti contemporanemente ad `A` e a `B`* |

| `A.symmetricDifference(B)` |
| :--- |
| Equivalente alla differenza simmetrica ($(A \setminus B) \cup (B \setminus A)$), cioè un set composto di *tutti gli elementi appartenenti solamente ad `A` rispetto a `B`* e  tutti gli elementi appartenenti solamente a `B` rispetto ad `A` |

| `A.union(B)` |
| :--- |
| Equivalente alla unione tra insiemi ($A \cup B$), cioè restituisce un set composto di *tutti gli elementi appartenenti o ad `A` o a `B`* |

| `A.isDisjointFrom(B)` |
| :--- |
| Restituisce `true` se i due set sono disgiunti ($A \cap B = \emptyset$), cioè se *nessun elemento di `A` appartiene anche a `B` e viceversa* |

| `A.isSubsetOf(B)` |
| :--- |
| Restituisce `true` se `B` è sottoinsieme di `A` ($A \subseteq B$), cioè se *ogni elemento di `B` è elemento anche di `A`* |

| `A.isSupersetOf(B)` |
| :--- |
| Restituisce `true` se `A` è sottoinsieme di `B` ($A \supseteq B$), cioè se *ogni elemento di `A` è elemento anche di `B`* |