---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Funzioni in JavaScript'
metaTitle: 'Appunti sulle funzioni in JavaScript'
description: 'Appunti e note sulle funzioni in JavaScript.'
author: 'Italo Corraro'
---

## Funzione

Una funzione è un blocco riutilizzabile di codice:
* prende un certo numero di variabili in input (*parametri*)
* elabora l'input e restituisce una variabile in output

Una funzione definita con nome può essere chiamata un numero illimitato di volte all'interno del blocco in cui è definita

In JavaScript le funzioni
* possono essere salvate in variabili
* possono essere passate come argomento
* possono essere un output di un'altra funzione o operazione

:::nota
Una funzione può essere dichiarata come variabile anche all'interno di un oggetto; in tal caso si parla più propriamente di *metodo*
:::

Le funzioni vengono chiamate/invocate con il terminatore `()`, tra cui si inseriscono eventuali parametri da usare per la funzione

```javascript
// Dichiarazione funzione:
function functionName(parameter1, parameter2, ecc...) {
    // Blocco di codice della funzione...
}
// Chiamata della funzione:
functionName(p1, p2, ...);

// Dichiarazione per variabile:
let functionName = function(parameter1, ecc...) {
    // Codice della funzione...
}
// La chiamata funziona allo stesso modo
```

:::oss
Le funzioni DICHIARATE ESPLICITAMENTE possono essere chiamate prima della loro dichiarazione all'interno dello script (la dichiarazione viene preposta);

quelle dichiarate in una variabile (o più in generale, non esplicitamente) DEVONO essere definite PRIMA della chiamata
:::

### Output

Una funzione ha a disposizione la keyword **`return`** per portare in uscita un dato (solo uno);

se `return` non è specificato nella funzione, allora la funzione restituirà `undefined`,

quando viene eseguita `return` l'esecuzione della funzione termina.

## Parametri

Una funzione può essere definita con un numero illimitato di parametri di tipo diverso (il tipo non va specificato nella dichiarazione); inoltre, =u=non viene effettuata nessuna verifica su tipo o numero di parametri quando la funzione viene chiamata==

Tutti i parametri sono passati a una funzione come copie superficiali del dato fornito:
* I dati primitivi sono passati come valore (copia)
* Gli oggetti sono passati come riferimento (originale)

### Parametri di Default

Quando la funzione viene invocata con dei parametri mancanti, il valore di questi parametri viene inizializzato di default con `undefined`;

possiamo fornire un valore di default alternativo nella dichiarazione:

```javascript
function funcName(param1 = defaultValue, ecc...) {
    //
}
```

Alternativamente, possiamo fare un controllo manuale per verificare che il parametro rispetti certe condizioni:

```javascript
function fN(p1, p2) {
    // Check di tipo
    if(typeof p1 === 'undefined') return null;
    if(typeof p2 === 'number') return -1;
    // Resto del codice 
}
```

:::warn
I parametri di default sono vietati in *strict mode*; è invece valido usare l'operatore `??` per assegnare valori di fallback alle variabili `nullish`
:::

### Parametri rest

Un parametro dichiarato con l'operatore `...` permette a una funzione di trattare un numero indefinito di argomenti come elementi di un array: 

```javascript
function somma(...adds) {
    // adds è l'array composto dai parametri
    let tot = 0;
    for(let add of adds) tot += add;
    return tot;
}
```

:::warn
`...` è vietato in *strict mode*
:::

### Oggetto arguments

Le funzioni definiscono automaticamente un oggetto simil-array `arguments` alla loro invocazione; questo oggetto contiene tutti i parametri passati alla funzione a prescindere che fossero richiesti dalla sua definizione:

```javascript
function somma() {
    let tot = 0;
    const len = arguments.length;
    // arguments è l'oggetto composto da tutti i parametri passati
    for(let i = 0; i < len; i++) {
        const currentEl = arguments[i];
        if(typeof currentEl === 'number') {
            tot += currentEl
        }
    }
    return tot;
}
```

## this

La parola chiave `this` riferisce sempre a un oggetto (il wrapper per i primitivi) in *sloppy mode*; in *strict mode* può essere qualsiasi valore.

In generale, il `this` è riferito al contesto in cui viene chiamata la funzione.

All'interno di una funzione, il `this` è un parametro nascosto che viene dichiarato e assegnato alla definizione della funzione. 

### Sloppy Mode this 

* in *sloppy mode*, `this` è l'oggetto che invoca la funzione;
    * se non c'è un oggetto ad invocare la funzione, allora il `this` si riferirà all'oggetto globale (`window` nel browser)
    * se c'è un oggetto (quindi la funzione è un metodo), allora `this` punta a quell'oggetto su cui è stato invocato il metodo
    * se c'è una classe wrapper di un primitivo, allora `this` punta al wrapper
:::eg
```javascript
const obj = {
    nome: 'Gino',
    cognome: 'Paoli',
    nomeCompleto: function() {
        return this.nome + ' ' + this.cognome;
    }
} 
console.log(obj.nomeCompleto());
// ↪ 'Gino Paoli' // this = obj
```
```javascript
function sputaFuori() {
    console.log(this.nome);
}
const obj2 = {
    nome: 'Teresa',
    sputaFuori,
}
obj2.sputaFuori();
// ↪ 'Teresa' // this = obj2
```
```javascript
function escimi() {
    console.log(this);
}
escimi();
// ↪ Window // this = Window
```
:::

<script>

const n = 42;
Number.prototype.showThis = function() {
  console.log(this);
  console.log(typeof this);
};

n.showThis(); 
// ↪ Number {42}
// ↪ 'object'
</script>

### Strict Mode this

* in *strict mode* 
    * se la funzione non è invocata da un oggetto o un primitivo contenuto in una classe wrapper, allora `this` sarà `undefined`
    * se è invocata da un oggetto, allora `this` punterà allo stesso oggetto
    * se è invocata da un dato primitivo (per tramite di un wrapper), allora `this` restituisce il dato primitivo

:::eg 
In *strict*:
```javascript
"use strict";

const n = 42;
Number.prototype.showThis = function() {
  console.log(this);
  console.log(typeof this);
};

n.showThis(); 
// ↪ 42
// ↪ 'number'
```
In *sloppy*:
```javascript
const n = 42;
Number.prototype.showThis = function() {
  console.log(this);
  console.log(typeof this);
};

n.showThis(); 
// ↪ Number {42}
// ↪ 'object'
```
:::

## Funzioni Anonime

Una funzione non deve necessariamente avere un nome; quando si crea una funzione anonima si dice che è una espressione di funzione (**function expression**), in opposizione a una funzione dichiarata in maniera esplicita con nome (*function declaration*)

Generalmente le funzioni anonime sono utilizzate come parametri per altre funzioni, ad esempio per il metodo `forEach`:

```javascript
const listaSpesa = [
    "pane", "latte", 
    "formaggio", "insalata"
];
// Funzione dichiarata
function toConsole(item) {
    console.log(item);
}
listaSpesa.forEach(toConsole);

// Funzione anonima
listaSpesa.forEach(function(item) {
    console.log(item);
});
```

### Funzioni Freccia

Una scrittura breve per le funzioni è fornita dalle **arrow functions** o espressioni/funzioni freccia,

```javascript
let funcName = (p1, p2) => {
    // Codice della funzione
}
```

le funzioni freccia hanno alcune particolarità:

* le funzioni freccia =u=sono sempre anonime==
* =u=non creano un proprio `this`==, ma usano quello del genitore al momento della definizione iniziale
* =u=non hanno un proprio oggetto `arguments`==

* =u=se il parametro è unico si possono omettere le parentesi==

:::eg
```javascript
let funcName = param => {
    // Codice della funzione
}
```
:::

:::nb
Se la funzione NON HA parametri, allora le parentesi sono necessarie
:::

* se il corpo della funzione è una sola espressione con `return`, si possono omettere le parentesi graffe e il `return`

:::eg
```javascript
let funcName = (p1, p2) => {
    return p1 * p2;
}
// Equivale a 
let funcName = (p1, p2) => p1 * p2;
```
