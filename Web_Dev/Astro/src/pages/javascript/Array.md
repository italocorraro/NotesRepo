---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Array in JavaScript'
metaTitle: 'Appunti sugli Array in JavaScript'
description: 'Appunti e note sugli array in JavaScript.'
author: 'Italo Corraro'
---

## Definizione di Array

Un array è un tipo di oggetto il cui scopo principale è di raccogliere ordinatamente una serie di dati (l'indicizzazione degli elementi parte da `0`); gli array vengono dichiarati racchiudendo i loro elementi dentro parentesi quadre

* gli array di JavaScript sono tipicamente memorizzati (come riferimento) in una costante (con `const`); inoltre 
* sono indicizzati, cioè ciascun elemento è riconosciuto nell'ordine dell'array con un indice che parte da 0,
* sono **dinamici**, cioè non hanno una dimesione fissa e si possono aggiungere o rimuovere elementi in qualsiasi momento, 
* sono **eterogenei**, cioè è consentito riempirli con elementi di qualsiasi tipo (inclusi altri array, oggetti, ecc...)

---

:::eg
```javascript
// Creazione array:
const macchine = [
    'Volvo', 
    'Ferrari',
    23,
    `questo array non
    deve avere senso`,
]

// Possiamo accedere agli elementi con il loro indice:
console.log(macchine[1]);
// Restituisce 'Ferrari'

// Possiamo aggiungere elementi:
macchine[4] = 'BMW';
console.log(macchine[4]);
// Restituisce 'BMW'

// Possiamo sostituire elementi:
macchine[1] = 23;
console.log(macchine[1]);
// Restituisce '23'

// Possiamo trovare la lunghezza dell'array:
console.log(macchine.length);
// Restituisce '5'

// Possiamo creare un array multidimensionale:
macchine[2] = [0, 1, 2];
console.log(macchine[2][2]);
// Restituisce '2'

// Possiamo convertirlo in una stringa:
console.log(macchine.toString());
// Restituisce:
/* Volvo,23,0,1,2,questo array non
    deve avere senso,BMW */
```
:::

:::warn
Un array resta un oggetto, cioè `typeof` restituirà `object` se usato con un array;

il metodo corretto per verificare se una variabile è un array è passandola per argomento a `Array.isArray()`, oppure con l'espressione `array instanceof Array`, che verifica se `array` è un'istanza dell'oggetto globale `Array`, cioè l'oggetto a cui tutti gli array fanno capo
:::

## Metodi per Array

### Lunghezza dell'Array

La proprietà `lenght` restituisce la lunghezza dell'array:

```javascript
const listaSpesa = [
    "pane", "latte", 
    "formaggio", "insalata", 
    "uova" ];
console.log(listaSpesa.length); 
// ↪ 5

/* Poiché gli array sono indicizzati da 0,
 * la proprietà length ci permette di 
 * aggiungere elementi alla fine: */
listaSpesa[listaSpesa.length] = "burro";
console.log(listaSpesa.length);
// ↪ 6
console.log(listaSpesa.join(' '));
// ↪ 'pane latte formaggio insalata uova burro'
```

### Trovare l'Indice di un Elemento

Il metodo `indexOf()` restituisce l'indice dell'elemento passato per argomento; se l'elemento non è parte dell'array, restituirà `-1`:

```javascript
const listaSpesa = [
    "pane", "latte", 
    "formaggio", "insalata"
];
console.log(listaSpesa.indexOf('latte'));
// ↪ 1
console.log(listaSpesa.indexOf('burro'));
// ↪ -1
```

### Aggiungere Elementi

#### Alla Coda

L'alternativa built-in a `array[array.length] = "new element";` è usare il metodo `push()` passando per argomento l'elemento da inserire =u=in coda all'array==:

```javascript
const listaSpesa = [
    "pane", "latte", 
    "formaggio", "insalata"
];
listaSpesa.push('burro');
console.log(listaSpesa.indexOf('burro'));
// ↪ 4
console.log(listaSpesa.join(' '));
// ↪ 'pane latte formaggio insalata burro'
```

La nuova lunghezza dell'array viene restituita come output della funzione

#### Alla Cima

Per aggiungere un elemento =u=all'inizio dell'array== si usa il metodo `unshift()`; questo metodo non sostituirà il primo elemento ma farà scorrere tutti gli elementi di una posizione per aggiungere in cima quella passato per argomento: 

```javascript
const listaSpesa = [
    "pane", "latte", 
    "formaggio", "insalata"
];
listaSpesa.unshift('burro');
console.log(listaSpesa.indexOf('burro'));
// ↪ 0
console.log(listaSpesa.join(' '));
// ↪ 'burro pane latte formaggio insalata'
```

La nuova lunghezza dell'array viene restituita come output della funzione

### Rimuovere Elementi

#### Dalla Coda

Per rimuovere l'ultimo elemento dell'array (NON sostituirlo con un `null`), si usa il metodo `pop()`:

```javascript
const listaSpesa = [
    "pane", "latte", 
    "formaggio", "insalata"
];
listaSpesa.pop();
console.log(listaSpesa.indexOf('insalata'));
// ↪ -1
console.log(listaSpesa.join(' '));
// ↪ 'pane latte formaggio'
```

L'elemento rimosso viene restituito come output della funzione

#### Dalla Cima

Per rimuovere il primo elemento dell'array, facendo correttamente scorrere gli altri elementi a riempire il vuoto, si usa il metodo `shift()`:

```javascript
const listaSpesa = [
    "pane", "latte", 
    "formaggio", "insalata"
];
listaSpesa.shift();
console.log(listaSpesa.indexOf('pane'));
// ↪ -1
console.log(listaSpesa.indexOf('latte'));
// ↪ 0 
console.log(listaSpesa.join(' '));
// ↪ 'pane latte formaggio'
```

L'elemento rimosso viene restituito come output della funzione

#### Da un Indice Arbitrario

Per rimuovere uno o più elementi dall'array possiamo usare il metodo `splice()`; questo metodo prende come argomenti l'indice dell'elemento da cui partire con la rimozione e il numero di elementi da rimuovere:

```javascript
const listaSpesa = [
    "pane", "latte", 
    "formaggio", "insalata"
];
listaSpesa.splice(1, 1);
// questo rimuoverà 'latte'
console.log(listaSpesa.indexOf('latte'));
// ↪ -1
console.log(listaSpesa.join(' '));
// ↪ 'pane formaggio insalata'
```

Gli elementi rimossi sono restituiti in un array come output della funzione

:::nota
Possiamo combinare questo metodo con `indexOf()` per rimuovere un elemento a scelta dall'array

:::eg
```javascript
const listaSpesa = [
    "pane", "latte", 
    "formaggio", "insalata"
];
const rimuovi = listaSpesa.indexOf('latte');
rimuovi !== -1 ? listaSpesa.splice(1, 1) : null;
// questo rimuoverà 'latte' se c'è
console.log(listaSpesa.indexOf('latte'));
// ↪ -1
console.log(listaSpesa.join(' '));
// ↪ 'pane formaggio insalata'
```
:::

:::notabene
Il metodo `splice()` accetta un numero superiore a 2 di argomenti:

se più di due argomenti sono forniti, questi verranno inseriti nell'array al posto di quelli rimossi

:::eg
```javascript
const listaSpesa = [
    "pane", "latte", 
    "formaggio", "insalata"
];
listaSpesa.splice(2,1, 'té', 'uova');
console.log(listaSpesa.join(' '));
// ↪ 'pane latte té uova insalata'
```
:::

Il metodo `toSpliced()` svolge un'operazione analoga a `splice()`, ma invece di modificare l'array originale ne crea uno nuovo a cui applica le modifiche; il nuovo array modificato è restituito come output della funzione

## Scorrere l'Array

Ci sono diversi metodi e soluzioni per scorrere un array:

### Metodi Iterativi

Gli oggetti di tipo array dispongono di diversi metodi iterativi per scorrere i loro contenuti; la struttura di questi metodi è pressocché la stessa:

```javascript
array.method(function(item, index, array) {
    // function body
});
```

il metodo prende come argomenti:
* una **funzione di callback** a cui il metodo fornisce fino a tre argomenti:
    * l'elemento corrente che sta venendo processato dell'array
    * l'indice di tale elemento
    * il riferimento all'array su cui è stata chiamato il metodo
* un valore che verrà assegnato a `this` all'interno della funzione; questo è interamente opzionale e in caso non fosse fornito dipenderà dal tipo di funzione chiamata quale valore gli verrà assegnato di default

:::eg
```javascript
array.forEach(callback)
     └─> callback(array[0], 0, array)
     └─> callback(array[1], 1, array)
     └─> callback(array[2], 2, array)
```
:::

:::nota
Lo scorrimento dell'array da parte dei metodi iterativi è generalmente per indice crescente
:::

:::oss
L'elemento dell'array che viene passato come argomento alla funzione di callback, viene passato per valore se contiene un dato di tipo primitivo, per riferimento se contiene un tipo di oggetto;

quindi, =u=queste funzioni non hanno come scopo il modificare l'array==
:::

#### forEach

Il metodo `forEach()` scorre ogni elemento dell'array; il valore restituito dalla funzione di callback viene scartato (=u=`forEach()` restituisce sempre `undefined`==);

di base, lo scopo di questo metodo è il solo chiamare una funzione per ogni elemento dell'array.

:::eg
```javascript
const listaSpesa = [
    "pane", "latte", 
    "formaggio", "insalata"
];
function toConsole(item) {
    console.log(item);
}
listaSpesa.forEach(toConsole);
// ↪ 'pane'
// ↪ 'latte'
// ↪ 'formaggio'
// ↪ 'insalata'
```
:::oss

:::

#### map

Il metodo `map()` è simile a `forEach()`, con l'importante differenza che restituisce un nuovo array composto dai risultati delle chiamate alla funzione di callback su ogni elemento dell'array.

:::oss
la differenza tra i due metodi è che `forEach` ignora il valore restituito dalla callback; =u=`map` crea un nuovo array con i valori restituiti dalla callback==
:::

#### filter

Il metodo `filter()` scorre l'array passando ogni elemento per una funzione filtro; l'output che il metodo si aspetta da tale funzione è un valore booleano o coercizzabile a booleano:

* se `truthy`, allora l'elemento verrà mantenuto nell'array risultante
* se `falsy`, allora l'elemento verrà scartato

Esaurite le chiamate, restituisce un ritaglio dell'array array originale con gli elementi filtrati:

```javascript
const inventario = [
    { bene: 'pane', quantità: 2 },
    { bene: 'latte', quantità: 1 },
    { bene: 'formaggio', quantità: 3 },
    { bene: 'insalata', quantità: 0 },
    { bene: 'uova', quantità: 6 },
    { bene: 'burro', quantità: 0 },
]
const listaSpesa = inventario.filter(function(item) {
    return item.quantità < 2; 
    // cerchiamo i bene che stanno per finirsi
});
listaSpesa.forEach((item) => console.log(item.bene));
// ↪ 'latte'
// ↪ 'insalata'
// ↪ 'burro'
```

:::nb
`filter()` copia i riferimenti degli oggetti se ce ne sono, =u=non ne crea di nuovi!==

```javascript
// Se modifichiamo un oggetto da una parte
listaSpesa[0].quantità = 7;
console.log(listaSpesa[0].bene + ': ' + listaSpesa[0].quantità);
// ↪ 'latte: 7'
// Cambia anche dall'altra
console.log(inventario[1].bene + ': ' + inventario[1].quantità);
// ↪ 'latte: 7'
// Perché il riferimento è lo stesso
```

Per creare una copia indipendente è necessario usare un metodo diverso
:::

<script>
const inventario = [
    { bene: 'pane', quantità: 2 },
    { bene: 'latte', quantità: 1 },
    { bene: 'formaggio', quantità: 3 },
    { bene: 'insalata', quantità: 0 },
    { bene: 'uova', quantità: 6 },
    { bene: 'burro', quantità: 0 },
]
const listaSpesa = inventario.filter(function(item) {
    return item.quantità < 2; 
    // cerchiamo i bene che stanno per finirsi
});
listaSpesa.forEach((item) => console.log(item.bene));
// ↪ 'latte'
// ↪ 'insalata'
// ↪ 'burro'
listaSpesa[0].quantità = 7;
console.log(listaSpesa[0].bene + ': ' + listaSpesa[0].quantità);
// ↪ 'latte: 7'
console.log(inventario[1].bene + ': ' + inventario[1].quantità);
// ↪ 'latte: 7'
</script>