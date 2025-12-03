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
* possono essere passate come argomento (*funzioni di callback*)
* possono essere restituite da un'altra funzione o operazione
* creano uno *scope* di funzione limitato al codice che contengono

---

:::nota
Una funzione può essere dichiarata come variabile anche all'interno di un oggetto; in tal caso si parla più propriamente di *metodo*
:::

:::nota
*In JavaScript, una funzione è un oggetto*
:::

### Dichiarazione

Una funzione viene dichiarata con la keyword `function`; alla dichiarazione vanno assegnati i parametri richiesti:

```javascript
// Dichiarazione funzione esplicita:
function functionName(parameter1, parameter2, ecc...) {
    // Blocco di codice della funzione...
}

// Dichiarazione per variabile:
let functionName = function(parameter1, ecc...) {
    // Codice della funzione...
}
```

### Chiamata

Le funzioni vengono chiamate/invocate con l'operatore `()`, tra cui si inseriscono eventuali parametri da usare per la funzione

```javascript
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

:::nota
Le funzioni DICHIARATE ESPLICITAMENTE possono essere chiamate prima della loro dichiarazione all'interno dello script (la dichiarazione viene preposta automaticamente da JavaScript);

quelle dichiarate in una variabile (o più in generale, non esplicitamente), invece, DEVONO essere definite PRIMA della chiamata
:::

### Valore di Ritorno

Una funzione ha a disposizione la keyword **`return`** per portare in uscita un dato (solo un dato può essere restituito da una funzione);

se `return` non è specificato nella funzione, allora la funzione restituirà implicitamente `undefined`;

quando viene eseguita `return` l'esecuzione della funzione termina automaticamente e tutto il codice che si trova dopo verrà ignorato.

## Parametri

Una funzione può essere definita con un numero illimitato di parametri di tipo diverso (il tipo non va specificato nella dichiarazione); inoltre, =u=non viene effettuata nessuna verifica su tipo o numero di parametri quando la funzione viene chiamata==

*Tutti i parametri sono passati a una funzione come copie superficiali del dato fornito*:
* I dati primitivi sono passati come valore (copia)
* Gli oggetti sono passati come riferimento (copia del riferimento)

Quindi, passare un array per parametro fornisce alla funzione una copia del *riferimento* all'array originale, quindi può modificare i suoi elementi tramite il parametro, ma NON può modificare direttamente l'array originale

:::eg
```javascript
const oggettoACaso = {
    name: 'fuilled',
    altro: 'meh'
}
function edit(obj) {
    // mutiamo una proprietà dell'oggetto
    obj.name = 'hellow'; 

    // buttiamo il riferimento
    obj = null;
}

edit(oggettoACaso);
```
Quando chiamiamo `edit(oggettoACaso)`, il parametro `obj` riceve una *copia del riferimento* all’oggetto. L’oggetto NON viene duplicato!

Modificare `obj.name` modifica l’oggetto originale, perché `obj` ora punta allo stesso oggetto di `oggettoACaso`.

L’istruzione `obj = null` scollega SOLO la variabile `obj` dalla struttura. Non influisce su `oggettoACaso`. Infatti:

```js
console.log(oggettoACaso);
// ↪ Object {name: 'hellow', altro: 'meh'}
console.log(oggettoACaso.name);
// ↪ 'hellow'
```
`oggettoACaso` NON DIVENTA `null`! \
A diventare `null` come imposto dalla funzione `edit()` è solo la copia del suo riferimento in `obj`, che però viene distrutta al termine dell'esecuzione della funzione; 

questo significa solo che perdiamo la copia del riferimento, non che cancelliamo l'originale nè che cancelliamo *l'oggetto* originale; lo dimostra il fatto che `oggettoACaso` esiste ancora.

Tutte le operazioni fatte su `obj` in eseguito allo scollegamento sono inutili, infatti:

```js
edit2 = function(obj) {
    obj.extra = 'aggiunta';
    obj = {};
    obj.name = 'pyramid';
}
edit2(oggettoACaso);

console.log(oggettoACaso);
// ↪ {name: 'hellow', altro: 'meh', extra: 'aggiunta'}
```

L'assegnazione di una nuova proprietà (`obj.extra`) funziona perché in quel momento `obj` di `edit2()` punta ancora allo stesso oggetto di `oggettoACaso`.

Quando si esegue `obj = {}`, `obj` NON punta più a `oggettoACaso`.

A quel punto `obj.name = 'pyramid'` modifica *solo* il nuovo oggetto creato, che però NON è assegnato a nessuna variabile esterna, quindi viene perso alla fine della funzione.

:::oss
Se vogliamo tenere il nuovo oggetto creato nella funzione, lo possiamo restituire in output, questo creerà un secondo oggetto:
```js
edit3 = function(obj) {
    obj = {
        name: obj.extra,
        extra: obj.name,
        altro: obj.altro
    }
    return obj;
}
const nuovoOgg = edit3(oggettoACaso);

console.log(oggettoACaso);
// ↪ { name: 'hellow', altro: 'meh', extra: 'aggiunta' }
```
Vediamo che `oggettoACaso` è rimasto immutato come previsto,
```js
console.log(nuovoOgg);
// ↪ { name: 'aggiunta', extra: 'hellow', altro: 'meh' }
```
`nuovoOgg` invece è uguale a `oggettoACaso` con le proprietà `name` e `extra` invertite
:::


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

Le funzioni definiscono automaticamente un oggetto simil-array (iterabile) `arguments` alla loro invocazione; questo oggetto contiene tutti i parametri passati alla funzione a prescindere che fossero richiesti dalla sua definizione:

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

All'interno di una funzione, il `this` è un parametro che viene passato implicitamente dal contesto di esecuzione. 

### Sloppy Mode this 

In *sloppy mode*, `this` è l'oggetto che invoca la funzione;
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

### Strict Mode this

In *strict mode* 

* se la funzione non è invocata da un oggetto o un primitivo contenuto in una classe wrapper, allora `this` sarà `undefined`
* se è invocata da un oggetto, allora `this` punterà allo stesso oggetto
* se è invocata da un dato primitivo (per tramite di un wrapper), allora `this` restituisce il dato primitivo

:::eg 
In *strict*:
```javascript
"use strict";

// Definiamo un nuovo metodo per i tipi Number
Number.prototype.showThis = function() {
  console.log(this);
  console.log(typeof this);
};

const n = 42;
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

## Ricorsione

Una funzione può anche chiamare se stessa durante l'esecuzione, questo da' vita ad un **ciclo ricorsivo**:

```javascript
// Funzione per copiare un oggetto
function deepCopyObj(obj) {
    // La funzione deve copiare i valori dentro un oggetto
    if(typeof obj != 'object' || obj === null) {
        // se non è un oggetto, lo restituiamo così com'è
        return obj;
    }
    const copy = {};
    for(const key in obj) {
        // Copiamo ciascuna coppia chiave proprietà:
        copy[key] = deepCopyObj(obj[key]);
        /* se la proprietà è un valore, allora,
         * viene copiata così com'è (deepCopyObj 
         * rispedisce indietro i non-oggetti);
         * 
         * se la proprietà è un riferimento a 
         * un oggetto, allora deepCopyObj viene chiamata 
         * ricorsivamente per esplorare l'oggetto
         * e copiarne i valori */
    }
    return copy;
}
```
:::nota
Il controllo extra per `null` è necessario perché `typeof null` restituisce `object`, ma `null` non può essere esplorato con `for...in`

Inoltre, va tenuto conto che questa funzione non è adatta a copiare un array (è solo un esempio)
:::

:::nota
Le ricorsioni di funzione sono strumenti molto utili per esplorare le ramificazioni di strutture ad albero, come gli oggetti innestati o le strutture di nodi del DOM
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
* per quanto riguarda le classi, non creano un proprio `super`
* non creano un proprio `new.target`


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
:::

### IIFE

Le funzioni anonime e freccia possono essere invocate immediatamente al momento della dichiarazione:

```javascript
(function () {
    // fai cose
})();
```

In questo modo la funzione anonima viene invocata immediatamente; \
è motivo del nome IIFE (*Immediately Invoked Function Expression*)

Si può fare la stessa cosa con una funzione freccia:

```js
(() => {
    // fai cose
})();
```

Usare una IIFE permette di creare uno scope di funzione in cui racchiudere il codice

## Closures

In JavaScript, a differenza di altri linguaggi, quando una funzione termina la sua esecuzione, il suo ambiente di esecuzione non viene propriamente distrutto:

Quando una funzione viene definita, crea una **closure** dove vengono incapsulate, oltre alla funzione stessa, il contesto lessicale in cui questa era stata dichiarata, permettendole di mantenere l'accesso a tutte le variabili che poteva raggiungere al momento della creazione della *closure*.

Esploriamo un esempio: 

```javascript
function makeCounter() {
    let counter = 0;

    return function() {
        console.log(++counter);
    }
}

const contatore = makeCounter();

console.log(contatore);
/* ↪ ƒ () {
 *     console.log(++counter);
 *  }   */
```

Abbiamo quindi creato la funzione `contatore()` che incrementa `counter` e lo manda in console, ma `counter` non è definito dentro `contatore`, bensì dentro `makeCounter()`, che però è stata già eseguita e quindi (*teoricamente*) dovrebbe aver distrutto tutto quello che includeva il suo scope

=u=*MA NON SUCCEDE IN JAVASCRIPT*==

In JavaScript, quando `contatore()` viene creata, si porta dietro il suo contesto lessicale, quindi anche `counter`, per questo quando chiamiamo `contatore()` otteniamo:

```js
contatore();
// ↪ 1
```

poichè `contatore` mantiene il riferimento al contesto lessicale in cui era stato definito dove esisteva `counter`, la variabile `counter` rimane accessibile a `contatore` e non viene distrutta. \
 Non abbiamo errore di riferimento!

:::nb
La variabile `counter` che usa `contatore` NON è una copia, ma un riferimento all'originale dal contesto in cui era stata inizialmente dichiarata la funzione `contatore()`
:::
Se creiamo un nuovo contatore, il riferimento sarà a una *diversa* variabile `counter`:

```js
const newCount = makeCounter();

contatore();
// ↪ 2
newCount();
// ↪ 1
contatore();
// ↪ 3
```
Il nuovo contatore usa un `count` diverso, questo perché il contesto lessicale da cui viene NON è lo stesso di quello da cui viene `contatore`; 

Possiamo creare due contatori che invece vengono dallo STESSO contesto lessicale così:
```javascript
function makeCounter() {
    let count = 0;
    return [
        up = function() {
            console.log(++count);
        },
        down = function() {
            console.log(--count);
        }
    ]
}

const [ aumenta, diminuisci ] = makeCounter();

aumenta();
// ↪ 1
aumenta();
// ↪ 2
diminuisci();
// ↪ 1
aumenta();
// ↪ 2
diminuisci();
// ↪ 1
diminuisci();
// ↪ 0
diminuisci();
// ↪ -1
```
La variabile `count` è condivisa tra `aumenta` e `diminuisci` perché il loro contesto lessicale al momento della dichiarazione era lo stesso, quindi anche il riferimento alla variabile è lo stesso.

JavaScript non rimuove la variabile `count` perché esiste almeno una funzione interna che la usa ancora.

### Metodi Pubblici e Privati

Possiamo anche utilizzare questa meccanica per creare una variabile privata (difatti, *la variabile `count` dell'esempio precedente non è accessibile se non con le funzioni `aumenta()` e `diminuisci()`*);

le variabili create nella funzione esterna saranno *private*, i metodi passati con `return` saranno invece *pubblici*

Una **closure** è una funzione che mantiene l’accesso alle variabili del suo contesto lessicale anche dopo che la funzione esterna è terminata.

Facciamo un esempio di contatore con metodi pubblici ma che mantiene il contatore privato:

```javascript
function makePrivateCounter(start) {
    let privateCounter = start;
    return {
        up() {
            privateCounter++;
        },
        down() {
            privateCounter--
        },
        value() {
            return privateCounter;
        },
        log() {
            console.log(privateCounter);
        }
    }
}

const counter = makePrivateCounter(0);
```

Le quattro funzioni *pubbliche* formeranno una *closure* condividendo lo stesso contesto lessicale; il riferimento sarà alla stessa variabile `privateCounter`, infatti: 

```js
counter.log();
// ↪ 0
counter.up();
counter.up();
counter.log();
// ↪ 2
```
