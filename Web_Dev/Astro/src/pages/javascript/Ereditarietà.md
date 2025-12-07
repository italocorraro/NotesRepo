---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Ereditarietà in JavaScript'
metaTitle: "Appunti sull'ereditarietà in JavaScript"
description: 'Appunti e note sul meccanismo alla base del concetto di ereditarietà in JavaScript.'
author: 'Italo Corraro'
---

## Il Concetto di Ereditarietà

In programmazione, l'*ereditarietà* tra costrutti è riferita al passaggio di caratteristiche in una discendenza.

Come in svariati linguaggi orientati agli oggetti, anche JavaScript ha un meccanismo di ereditarietà che permette agli oggetti di accedere proprietà che non sono state definite esplicitamente per loro ma che lo sono per un loro predecessore.

:::eg
In Java l'ereditarietà è implementata tramite le *classi*; le sottoclassi ereditano dalla loro superclasse

Gli oggetti vengono creati a partire dalle classi; un oggetto si dice poi *istanza della classe che l'ha creato*

In JavaScript, l'ereditarietà è basata sugli *oggetti*
:::

## I Prototìpi

Il meccanismo di ereditarietà di JavaScript si basa sui **prototìpi**; ogni oggetto ha una *catena di prototìpi*:

* ogni oggetto contiene un riferimento a un prototìpo che è legato al suo costruttore, 
* il prototìpo contiene a sua volta un riferimento a un altro prototìpo più interno e così via
* l'ultimo prototìpo della catena è `null`, che non ha proprietà e quindi nemmeno un prototìpo più interno
* tutte le proprietà definite per i prototìpi della catena, sono proprietà per l'oggetto

Guardando più nel dettaglio:

### Funzioni Costruttore

In JavaScript, a costruire gli oggetti sono delle **funzioni costruttore**, infatti, possiamo chiedere alla console cos'è `Object` di cui tutti gli oggetti sono istanza:

```javascript
console.log(Object);
// ↪ ƒ Object() { [native code] }
console.log(Array);
// ↪ ƒ Array() { [native code] }
console.log(Map);
// ↪ ƒ Map() { [native code] }
console.log(String);
// ↪ ƒ String() { [native code] }
```
Questi *sono =u=tutti== costruttori!*


I costruttori hanno una proprietà speciale `prototype` che contiene il prototìpo:

```js
const newObj = new Object();
```
* `Object` è la funzione costruttore
* `Object.prototype` è il prototìpo
* `newObj` è il nuovo oggetto costruito, istanza di `Object`

Internamente, la funzione costruttore si associa al prototìpo come suo costruttore specifico:
```js
Object.prototype.constructor = Object() {};
```
*L'oggetto `newObj`, costruito con `Object`, eredita dal prototìpo `Object.prototype`*.

:::nota
Una funzione è uno speciale tipo di oggetto in JavaScript.

Le funzioni costruttore hanno uno speciale tipo di proprietà, `prototype`
:::

Il prototìpo di un oggetto viene registrato come una sua proprietà implicita:
```js
function Person(x) {
    this.name = x;
}

const mario = new Person('Mario');
// Cosa contiene il nuovo oggetto:
mario = {
    // Proprietà di mario:
    name: 'Mario',
    // Proprietà [[Prototype]]
    [[Prototype]]: Person
}
```
:::nota
*Il metodo standard per accedere al prototìpo di un oggetto è con `Object.getPrototypeOf()`* a cui si passa per argomento l'oggetto di cui si vuole ricevere il prototìpo;

alternativamente, può essere chiamato direttamente come proprietà, *il nome della proprietà che contiene il riferimento al prototìpo è `__proto__`*
:::

### La Catena dei Prototìpi

L'ereditarietà non si ferma al primo livello: =u=*ogni oggetto ha un suo prototìpo*==, questo genera la **catena dei prototìpi**; alla fine di ogni catena c'è **`null`**, che non ha un prototìpo più interno.

```js
/* | INIZIO della catena dei prototìpi dell'oggetto mario  | */
mario.__proto__: Person.prototype 
       ↓ // prototìpo di mario
  Person.prototype.__proto__: Object.prototype 
                    ↓ // prototìpo di Person.prototype
               Object.prototype.__proto__: null 
                                  ↓ // prototìpo di Object.prototype
                                  null 
/* | FINE della catena dei prototìpi dell'oggetto mario    | */
```

Ogni qual volta viene chiamata una proprietà di un oggetto, JavaScript la cerca tra quelle dell'oggetto stesso, se non la trova lì, allora la cerca tra quelle del suo prototìpo e risale la catena dei prototìpi fino a trovare la proprietà chiamata oppure finchè non raggiunge `null`, in tal caso lancia un errore poichè la proprietà non è definita per l'oggetto.

=u=*Gli oggetti ereditano tutte le proprietà definite per i prototìpi presenti nella loro catena dei prototìpi*==

### Istanze

In JavaScript le classi non sono *vere classi*, ma pura sintassi, quindi gli oggetti non sono istanze di classi come in Java; 

in JavaScript, *un oggetto si dice **istanza** di una funzione costruttore, se il prototìpo associato a tale funzione è presente nella catena dei prototìpi dell'oggetto*.

Il metodo built-in per verificare se un oggetto eredita da un altro oggetto è `instanceof`:

```js
object instanceof Object
```

* Restituirà `true` se `Object.prototype` è presente nella catena dei prototìpi di `object`
* Restituirà `false` se risalendo la catena si arriva fino a `null` senza trovare `Object.prototype`

Un'implementazione tipo-indipendente di questo meccanismo è la seguente:

```js
/* creiamo la funzione e la associamo al prototìpo
 * più in alto prima di null */
Object.prototype.isInstanceOf = function(obj) {
    /* usiamo getPrototypeOf() per ottenere
     * il prototipo dell'oggetto corrente */
    let proto = Object.getPrototypeOf(this);
    /* la verifica ha senso finchè il prototìpo
     * non è null */
    while (proto !== null) {
        /* se il prototipo è proprio quello che
         * cerchiamo, allora è vero che 
         * l'oggetto che chiama isInstanceOf 
         * è istanza dell'argomento obj */
        if (proto === obj.prototype) return true;
        /* se non lo è, passiamo al prototìpo 
         * più interno e risaliamo la catena */
        proto = Object.getPrototypeOf(proto);
    }
    /* se si è risalita l'intera catena (fino a null)
     * e non si hanno avuti riscontri con obj,
     * allora l'oggetto che chiama isInstanceOf 
     * NON è istanza dell'argomento obj */
    return false;
};
```

:::nb
Per questo esempio, si è evitato, per semplicità, di fare verifiche di tipo, ma queste vengono fatte in `instanceof`
:::

### La Proprietà `prototype`

All'interno di un oggetto (*NON del costruttore*), la proprietà **`__proto__`** *contiene il riferimento al prototìpo dell'oggetto*, cioè, in termini di eredità, al padre "diretto" di quell'oggetto.

Accedere alla proprietà `__proto__` *NON è sicuro*; il metodo **`Object.getPrototypeOf()`** *permette di chiedere il prototìpo dell'oggetto che si passa per argomento*, questo è un metodo *sicuro*.

=u=La proprietà **`prototype`** esiste solo sulle funzioni costruttore==; quando un oggetto viene creato come istanza di quel costruttore tramite la keyword `new`, allora *la proprietà `prototype` del costruttore diventa il prototìpo dell'oggetto costruito*.

## Creare Prototìpi

Non è necessario fermarsi ai prototìpi pre-esistenti o quelli legati ai costruttori; possiamo creare e manipolare i prototìpi come ogni altro oggetto:

### Prototìpo da un Oggetto

Con il metodo `Object.create()` è possibile creare un nuovo oggetto assegnandogli l'argomento passato alla funzione come suo prototìpo

```js
const newObj = Object.create(proto);
```

:::eg 
```javascript
const persona = {
    nome: '',
    salve() {
        console.log(`Salve! Io sono ${this.nome}!`);
    }
}

const io = Object.create(persona);
// sovrascriviamo nome dal prototìpo:
io.nome = 'Italo';
// chiamiamo la funzione del prototìpo:
io.salve();
// ↪ 'Salve! Io sono Italo!'
console.log(io);
/* ↪ Object ↓
 *      nome: "Italo"
 *      [[Prototype]]: Object ↓
 *                      nome: ''
 *                      salve: f salve()
 *                      [[Prototype]]: Object ↓
 *                                          ecc.... */
```
:::

### Prototìpo da Costruttore

Possiamo definire una funzione costruttore e il relativo prototipo separatamente:

```javascript
// Il costruttore:
function newObj(propVal) {
    this.ownProp = propVal;
}
// Il prototìpo:
newObj.prototype.newFunc = function() {
    console.log(`La mia proprietà è ${this.ownProp}`);
}
```
Ad esempio:
```js
const obj = new newObj('valida');

obj.newFunc();
// ↪ 'La mia proprietà è valida'
```
:::nota
Possiamo aggiungere proprietà e metodi a piacere al prototìpo; gli oggetti creati dal suo costruttore le erediteranno tutte
:::

### Prototìpo da Classe

Le classi di JavaScript sono delle *funzioni speciali*: tramite una sintassi specializzata, le classi permettono di definire 
* un costruttore di classe (che è sempre una funzione ed ha lo stesso nome della classe)
* dei metodi di classe, che internamente sono attaccati a `prototype` del costruttore
* altri campi, similmente alle classi degli altri linguaggi

<script>
console.log(Object);
</script>