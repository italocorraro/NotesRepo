---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Array in JavaScript'
metaTitle: 'Appunti sugli Array in JavaScript'
description: 'Appunti e note sugli array in JavaScript.'
author: 'Italo Corraro'
---

## Definizione di Array

*Un array è un tipo di oggetto* il cui scopo principale è di raccogliere ordinatamente una serie di dati: 

* gli array di JavaScript sono tipicamente memorizzati (come riferimento) in una costante (con `const`); inoltre 
* sono **indicizzati**, cioè ciascun elemento è riconosciuto nell'ordine dell'array con un indice che parte da `0`,
* sono **dinamici**, cioè non hanno una dimesione fissa e si possono aggiungere o rimuovere elementi in qualsiasi momento, 
* sono **eterogenei**, cioè è consentito riempirli con elementi di qualsiasi tipo (inclusi altri array, oggetti, ecc...)

Possiamo creare un nuovo array usando il costruttore `Array`:

```javascript
const nuovo = new Array('brutto', 'bello', 'cattiv0');
console.log(nuovo);
// ↪ Array(3) : ['brutto', 'bello', 'cattivo']
```

È però più conveniente e leggibile usare direttamente un *array literal* per creare l'array:

```javascript
// Creazione array con letterale:
const macchine = [
    'Volvo', 
    'Ferrari',
    23,
    `questo array non
    deve avere senso`,
]
```

Inoltre, possiamo accedere agli elementi con il loro indice:
```js
console.log(macchine[1]);
// ↪ 'Ferrari'
```

Possiamo aggiungere elementi:
```js
macchine[4] = 'BMW';
console.log(macchine[4]);
// ↪ 'BMW'
```

Possiamo sostituire elementi:
```js
macchine[1] = 23;
console.log(macchine[1]);
// ↪ '23'
```

Possiamo trovare la lunghezza dell'array:
```js
console.log(macchine.length);
// ↪ '5'
```

Possiamo creare un array multidimensionale:
```js
macchine[2] = [0, 1, 2];
console.log(macchine[2][2]);
// ↪ '2'
```

Possiamo convertirlo in una stringa:
```js
console.log(macchine.toString());
// ↪:
/* Volvo,23,0,1,2,questo array non
    deve avere senso,BMW */
```

:::warn
Un array resta un oggetto, cioè `typeof` restituirà `object` se usato con un array;

il metodo corretto per verificare se una variabile è un array è passandola per argomento a `Array.isArray()`, oppure con l'espressione `array instanceof Array`, che verifica se `array` è un'istanza di `Array`, cioè se array è stato costruito (implicitamente o esplicitamente) con il costruttore `Array()`
:::

:::nota
Un array non deve essere necessariamente "pieno";
```js
const array = [
    'primo',
];
array[4] = 'quarto';

console.log(array);
// ↪ ['primo', empty × 3, 'quarto']
console.log(array[2]);
// ↪ undefined
```
gli elementi a cui non viene assegnato un valore saranno `undefined`
:::

## Prime Proprietà

### Lunghezza dell'Array

La proprietà `lenght` restituisce la lunghezza dell'array:

```javascript
const listaSpesa = [
    "pane", "latte", 
    "formaggio", "insalata", 
    "uova" ];
console.log(listaSpesa.length); 
// ↪ 5
```
Poiché gli array sono indicizzati da 0, la proprietà length ci permette di aggiungere elementi alla fine:
```js
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

Il metodo `lastIndexOf()` svolge lo stesso compito, ma invece di partire dalla cima dell'array, partirà dalla coda

### Operatore spread

L'operatore *spread* (`...`) scompone oggetti iterabili in un elenco di elementi individuali:

```javascript
const array = [0, 4, 'rr', {'obj', 22}];

console.log(...array);
// ↪ 0 4 'rr' 'altro'
```
È possibile riprendere gli elementi scomposti e costruire un nuovo array; è anche possibile usare questo operatore con una stringa:

```js
const scomposto = [...'stringa'];

console.log(scomposto);
// ↪ ['s', 't', 'r', 'i', 'n', 'g', 'a']
```
:::nota
L'uso dell'operatore *spread* è possibile negli *array literals* per creare nuovi array che usano gli elementi di quello scomposto:
```js
const arr1 = [2, 3, 4];

const arr2 = [1, ...arr1, 5];

console.log(arr2);
// ↪ [1, 2, 3, 4, 5]
```
Gli elementi non vengono copiati per riferimento, sono copie superficiali infatti:
```js
arr1[0] = 0;
console.log(arr2);
```
___
L'altro uso dell'operatore spread è per passare l'intera lista di elementi dell'array come argomenti a una funzione
```js
console.log(arr1);
// ↪ [0, 3, 4]
function add(...args) {
    let tot = 0;
    let tring = '';
    for(const arg of args) {
        typeof arg === 'number' ?
        tot += arg :
        tring += arg;
    }
    console.log(tring);
    console.log(tot);
    return tot;
}

add(...arr1);
// ↪
// ↪ 7
```
:::

## Mutare l'Array

### Aggiungere Elementi alla Coda

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

### Aggiungere Elementi alla Cima

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

### Rimuovere Elementi dalla Coda

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

### Rimuovere Elementi dalla Cima

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

### Rimuovere da un Indice Arbitrario

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

### Trasporre l'Array

Il metodo `reverse()` inverte l'ordine degli elementi dell'array e restituisce un riferimento all'array originale:

```javascript
const arr = [1, 2, 3];

console.log(arr.reverse());
// ↪ [3, 2, 1]
console.log(arr);
// ↪ [3, 2, 1]
```

Il metodo `toReversed()` svolge un'operazione analoga a `reverse()`, ma invece di modificare l'array originale ne crea uno nuovo a cui applica le modifiche; il nuovo array modificato è restituito come output della funzione

### Ordinare l'Array

Il metodo `sort()` ordina gli elementi dell'array e restituisce un riferimento all'array originale:

```javascript
const mess = [3, 1, 5, 2, 6];
console.log(mess.sort());
// ↪ [1, 2, 3, 5, 6]
console.log(mess);
// ↪ [1, 2, 3, 5, 6]
```

Di default, gli elementi sono ordinati coercendoli a stringhe e comparando i valori dei codici dei caratteri UTF-16 di ciascuna.

:::eg
```javascript
const mess = ['a', 'B', 'A', 2, '@'];
console.log(mess.sort());
// ↪ [2, '@', 'A', 'B', 'a']
```
:::

Alternativamente, è possibile passare una funzione di callback come argomento; la funzione viene chiamata con due argomenti `a` e `b`, due elementi non-`undefined` presi dall'array e dovrà restituire 
* *un valore positivo* se `a` è da posizionarsi *prima* di `b` nell'ordinamento
* *un valore negativo* se `a` è da posizionarsi *dopo* di `b` nell'ordinamento
* *zero* se `a` e `b` sono da considerare uguali per l'ordinamento

Di base è una funzione tipo:
```js
array.sort((a, b) => {
    /* funzione di ordinamento con a e b*/
});
```

:::eg
Per ordinare in senso ascendente:
```javascript
function toAscending(a, b) {
    return a - b;
}
const mess = ['a', 'B', 'A', 2, '@'];
console.log(mess.sort(toAscending));
```
o più semplicemnte, se non ci serve riutilizzare la funzione di ordinamento:
```js
mess.sort((a, b) => a - b);
```
Produrrà lo stesso risultato
:::

:::eg
Randomizziamo l'array:
```js
array.sort(() => Math.random() - 0.5);
```
restituirà l'array con gli elementi in ordine casuale
:::

Il metodo `toSorted()` svolge un'operazione analoga a `sort()`, ma invece di modificare l'array originale ne crea uno nuovo a cui applica le modifiche; il nuovo array modificato è restituito come output della funzione

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

---

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
];
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

#### find e findIndex

Il metodo `find()` scorre l'array passando ciascun elemento alla funzione di callback come argomento; il metodo restituisce il primo elemento dell'array per cui la funzione di callback restituisce `true`

Il metodo `findLast()` svolge la stessa operazione, ma partendo dalla fine dell'array

Il metodo `findIndex()` svolge la stessa operazione di `find()`, ma invece di restituire l'elemento, restituisce l'indice del primo elemento dell'array per cui la funzione di callback restituisce `true`

Il metodo `findLastIndex()` fa' lo stesso, ma dalla fine dell'array

#### every e some

Il metodo `every()` restituisce `true` se *tutti* gli elementi dell'array fanno restituire `true` alla funzione di callback

Il metodo `some()` restituisce `true` se *almeno uno* degli elementi dell'array fa' restituire `true` alla funzione di callback

#### reduce

Il metodo `reduce()` combina ricorsivamente due valori, un accumulatore e un elemento dell'array, e restituisce il risultato di questa operazione come un singolo valore; \
la funzione di callback che viene chiamata per ogni elemento è una *funzione di riduzione* e prende quattro argomenti: 
1. *un accumulatore*, cioè il valore restituito dalla precedente chiamata della funzione di riduzione (il valore a cui viene inizializzato l'accumulatore è quello del primo elemento dell'array, oppure il secondo argomento (opzionale) del metodo `reduce()`)
1. l'elemento corrente dell'array
1. l'indice dell'elemento corrente
1. un riferimento all'array stesso

:::eg
```javascript
const reduco = [0, 1, 2, 3, 4];

console.log(reduco.reduce((a, c) => a + c));
/* Quello che viene svolto a ogni chiamata è:
 * acc = reduco[0], elem = reduco[1], newAcc = acc + elem;
 * acc = newAcc, elem = reduco[2], newAcc = acc + elem;
 * e così via; l'ultimo newAcc viene restituito alla fine */
/* L'equivalente di questa operazione su reduco è
 * (((0 + 1) + 2) + 3) + 4 */
```
Qualcosa di più utile può essere fatta con questo metodo:
Vogliamo eseguire l'elevamento a potenza degli elementi
```javascript
const powo = [2, 4, 5, 6];

console.log(powo.reduce((a, c) => {
    return a ** c;
}));
// equivale a ((2^4)^5)^6
// ↪ 1.329227995784916e+36
```
:::

Il metodo `reduceRight()` svolge la stessa operazione, ma scorrendo gli elementi dell'array a partire dalla fine

### Cicli for

#### for...of{}

```javascript
const array = [/* ... */];

for(const item of array) {
    // statement(s)
}
```

Questa istruzione permette di eseguire un ciclo in cui la variabile `item` (il nome può essere scelto) viene, ad ogni iterazione, definita copiando un elemento dell'array (copia superficiale); \
usare il ciclo `for` in questo modo permette più controllo sulle iterazioni dei vari metodi iterativi come `forEach()` o `map()`, in particolare è possibile interrompere il ciclo con l'istruzione `break` o saltare all'iterazione successiva usando `continue`

:::nota
Non è possibile modificare i dati primitivi con questa operazione
:::

### for semplice

```javascript
const array = [/* ... */];

for(let i = 0; i < array.lenght; i++) {
    // statement(s)
}
```

Questa istruzione permette controllo totale sull'iterazione e fornisce accesso diretto agli elementi dell'array; quindi è possibile modificare anche i dati primitivi 

## Array e Stringhe

### Da Stringa ad Array

Tramite il metodo `split()` possiamo separare una stringa spezzandola secondo uno schema passato per argomento:

```javascript
string.split(separator);
// spezza la stringa dove trova il parametro separatore
string.split(separator, limit);
/* stesso di prima, ma ferma il processo una volta che 
 * sono state staccate {limit} numero di stringhe */
```

La funzione restituisce in output l'array composto dai frammenti di stringa

:::eg
```javascript
const stringa = 'Quel vituperabile xenofobo zelante assaggia il whisky ed esclama: alleluja!';
const array = stringa.split(' '); // spezza la stringa ad ogni spazio
console.log(array);
/* ↪ Array(10) ['Quel', 'vituperabile', 'xenofobo', 'zelante', 'assaggia', 'il', 'whisky', 'ed', 'esclama:', 'alleluja!'] */
```
:::

### Da Array a Stringa

Il metodo `join()` permette di concatenare gli elementi dell'array in una stringa, usando l'argomento passato alla funzione come separatore; \
la stringa risultante è fornita in output:

```javascript
array.join(separator);
// Concatena gli elementi separandoli con il separatore
```

:::eg
```javascript
const listaSpesa = [
    "pane", "latte", 
    "formaggio", "insalata"
];
const spesa = listaSpesa.join(', ');
const start = 'Nella tua lista della spesa ci sono: ';
console.log(start + spesa);
/* Nella tua lista della spesa ci sono: 
 * pane, latte, 
 * formaggio, insalata */
```
:::

:::nota
Il metodo `toString()` svolge lo stesso ruolo di `join(',')`, cioè concatena gli elementi dell'array in una stringa, ma non accetta parametri e usa sempre `,` come separatore
:::

## Altri Metodi

### Collegare due Array

Il metodo `concat()` prende come argomento un array o una serie di valori separati da virgola e restituisce un nuovo array composto dai due array di array di partenza:

```javascript
const arr1 = ['a', 'b', 'c'];
const arr2 = [ 1, 2, 3 ];

console.log(arr1.concat(arr2));
// ↪ ['a', 'b', 'c', 1, 2, 3]
console.log(arr1);
// ↪ ['a', 'b', 'c']
console.log(arr2.concat(4, 5));
// ↪ [1, 2, 3, 4, 5]
```

Il metodo `at()` prende come argomento un numero intero (anche negativo) e restituisce l'elemento dell'array all'indice specificato (partendo dalla fine dell'array se il numero è negativo)

### Svolgere Array Innestati

Il metodo `flat()` prende come argomento un numero intero (opzionale; se non fornito sarà impostato di default a 1) e restituisce un nuovo array con tutti gli array innestati, fino a una profondità pari al numero specificato, concatenati all'array originale:

```javascript
const arr = [
    'A', 
    'B', 
    [
        'C1', 
        'C2', 
        [
            'C3a', 
            'C3b'
        ], 
        'C4'
    ], 
    'D'
];
console.log(arr);
// ↪ ['A', 'B', ['C1', 'C2', ['C3a', 'C3b'], 'C4'], 'D']
console.log(arr.flat());
// ↪ ['A', 'B',  'C1', 'C2', ['C3a', 'C3b'], 'C4',  'D']
console.log(arr.flat(2));
// ↪ ['A', 'B',  'C1', 'C2',  'C3a', 'C3b',  'C4',  'D']
console.log(arr.flat(3));
// ↪ ['A', 'B',  'C1', 'C2',  'C3a', 'C3b',  'C4',  'D']
```

### Raggruppare Elementi dell'Array

Possiamo passare un array al metodo `Object.groupBy()` per passare i suoi elementi in una funzione di callback che serve ad organizzare l'array in un oggetto composto di frammenti dell'array come valori legati ad una chiave stabilita dalla funzione di callback;

questo metodo restituisce l'oggetto riorganizzato, ma i valori che contiene sono dei riferimenti a quelli dell'array originale

:::eg
Vogliamo costruire un array che tenga conto dei beni in magazzino:
```javascript
const magazzino = [
    { bene: 'filetti',  tipo: 'carne',  quantita: 3 },
    { bene: 'pesche',   tipo: 'frutta', quantita: 1 },
    { bene: 'seppie',   tipo: 'pesce',  quantita: 5 },
    { bene: 'sogliole', tipo: 'pesce',  quantita: 3 },
    { bene: 'costate',  tipo: 'carne',  quantita: 0 },
    { bene: 'fragole',  tipo: 'frutta', quantita: 2 },
    { bene: 'banane',   tipo: 'frutta', quantita: 7 }
];
```
Raggruppiamo ora per tipo questi beni:
```js
const byType = Object.groupBy(magazzino, ({tipo}) => {
    return tipo;
});

console.log(byType);
/* ↪ {
 *      carne: [
 *           {bene: 'filetti', tipo: 'carne', quantita: 3}, 
 *           {bene: 'costate', tipo: 'carne', quantita: 0}
 *      ],
 *      frutta: [
 *           {bene: 'pesche',  tipo: 'frutta', quantita: 1},
 *           {bene: 'fragole', tipo: 'carne',  quantita: 2},
 *           {bene: 'banane',  tipo: 'carne',  quantita: 7}
 *      ],
 *      pesce: [
 *           {bene: 'seppie',   tipo: 'pesce', quantita: 5},
 *           {bene: 'sogliole', tipo: 'pesce', quantita: 3}
 * 
 *      ]
 *    }  */
```
Il riferimento ai valori originali è mantenuto nell'oggetto ordinato, infatti, se azzeriamo le seppie:
```js
magazzino[2].quantità = 0;
conole.log(magazzino[2]);
// ↪ {bene: 'seppie',   tipo: 'pesce', quantita: 0}
console.log(byType);
/* ↪ {
 *      carne: [
 *           {bene: 'filetti', tipo: 'carne', quantita: 3}, 
 *           {bene: 'costate', tipo: 'carne', quantita: 0}
 *      ],
 *      frutta: [
 *           {bene: 'pesche', tipo: 'frutta', quantita: 1},
 *           {bene: 'fragole', tipo: 'carne', quantita: 2},
 *           {bene: 'banane',  tipo: 'carne', quantita: 7}
 *      ],
 *      pesce: [
 *  ->       {bene: 'seppie',   tipo: 'pesce', quantita: 0},
 *           {bene: 'sogliole', tipo: 'pesce', quantita: 3}
 * 
 *      ]
 *    }  */
```
Un ordinamento diverso, ma molto utile, può essere anche fatto senza usare le proprietà degli oggetti dell'array come chiavi dell'oggetto ordinato:
```js
const stock = Object.groupBy(magazzino, ({quantita}) => {
    if(quantita === 0) {
        return 'outOfStock';
    } else if(quantita < 3) {
        return 'fewLeft';
    } else {
        return 'enoughLeft';
    }
});
```
il risultato sarà un oggetto diviso in tre categorie basate sulla quantità:
```js
console.log(stock);
/* ↪ {
 *      enoughLeft: [
 *           {bene: 'filetti',  tipo: 'carne', quantita: 3}, 
 *           {bene: 'sogliole', tipo: 'pesce', quantita: 3},
 *           {bene: 'banane',   tipo: 'carne', quantita: 7}
 *           
 *      ],
 *      fewLeft: [
 *           {bene: 'pesche',  tipo: 'frutta', quantita: 1},
 *           {bene: 'fragole', tipo: 'carne',  quantita: 2}  
 *      ],
 *      outOfStock: [
 *           {bene: 'seppie',  tipo: 'pesce', quantita: 0},
 *           {bene: 'costate', tipo: 'carne', quantita: 0}
 *      ]
 *    }  */
```
Il problema di questo ordinamento è che, sebbene i valori siano passati per riferimento, l'oggetto non si riorganizza quando cambiano, quindi se togliamo oggetti dal magazzino per cui la loro posizione nell'oggetto organizzato è diversa, questo non verrà aggiornato:
```js
magazzino[0].quantita = 0;
console.log(magazzino[0]);
// ↪ {bene: 'filetti', tipo: 'carne', quantita: 0}
```
i filetti tolti ora dovrebbero andare nell'array `outOfStock`, ma poiché non si aggiorna da solo, questi non ci sono:
```js
console.log(stock.outOfStock);
/* [
 *     {bene: 'seppie',  tipo: 'pesce', quantita: 0},
 *     {bene: 'costate', tipo: 'carne', quantita: 0}
 * ] */
```
sono invece nell'array `enoughLeft` dove erano stati piazzati all'inizio:
```js
console.log(stock.enoughLeft);
/* [
 *     {bene: 'filetti',  tipo: 'carne', quantita: 0}, 
 *     {bene: 'sogliole', tipo: 'pesce', quantita: 3},
 *     {bene: 'banane',   tipo: 'carne', quantita: 7}
 * ] */
```
Perché questo tipo di classificazione abbia senso, bisognerebbe ripetere il metodo `Object.groupBy()` ogni qual volta cambi una proprietà da cui dipende l'organizzazione dei gruppi
:::

## Altre Collezioni Indicizzate

Gli array fanno parte di un più largo gruppo di oggetti la cui caratteristica principale è l'indicizzazione delle chiavi; fondamentalmente un array è un oggetto le cui chiavi sono tutti numeri interi consecutivi