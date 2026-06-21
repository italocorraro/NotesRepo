---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Classi in JavaScript'
metaTitle: 'Appunti sulle classi in JavaScript'
description: 'Appunti e note sulle classi e le loro proprietà in JavaScript.'
author: 'Italo Corraro'
---

## Ereditarietà in JavaScript

Le **classi** nei linguaggi di programmazione sono modelli astratti che raggruppano proprietà e metodi che vengono poi ereditati da tutti gli oggetti creati a partire da quella classe come delle istanze di tale classe.

In JavaScript l'ereditarietà è implementata tramite le **catene di prototìpi** e le classi sono implementate come un'astrazione di questo meccanismo per allineare JavaScript con gli altri linguaggi.

Di base JavaScript affida l'ereditarietà interamente agli *oggetti*: gli oggetti hanno una prototìpo che è un oggetto a sua volta e dalla quale l'oggetto iniziale eredita proprietà (e metodi); il prototìpo ha un altro prototìpo come proprietà, questo genera una catena che JavaScript risale per cercare le proprietà, eventualmente si risolve quando il prototìpo è  `null` che non ha altri prototìpi.

:::eg
Costruiamo un oggetto semplice: 
```javascript
const Persona = {
    nome: 'Gino',
    cnome: 'Marconi'
};
```
questo oggetto ha una proprietà implicita:
```js
console.log(Persona);
/* ↪ Object
 * cnome: "Marconi"
 * nome: "Gino"
 * [[Prototype]]: Object */
```
questa proprietà denota il suo *prototìpo*, che è a sua volta un oggetto:
```js
[[Prototype]]: Object
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()
```
Ogni volta che accediamo a una proprietà di un oggetto, JavaScript la cerca tra quelle definite per l'oggetto specifico, se non la trova, la cerca tra quelle del suo prototìpo risalendo la catena finchè non la trova o trova `null`.

Il prossimo prototìpo da guardare dentro `Object` è quello della proprietà `__proto__`; possiamo accedere al prototipo chiamandolo `Object.__proto__`, tuttavia è sconsigliato.

:::oss
Il costruttore relativo a `Object.prototype` è la funzione `Object()` che avevamo già usato con la keyword `new` per costruire oggetti senza letterali; gli oggetti costruiti con `Object` ereditano automaticamente tutte le proprietà assegnate a `Object.prototype`
:::

Le classi sono una sintassi costruita sui prototìpi che implementano in una scrittura compatta l'assegnazione di proprietà al prototipo e una funzione *costruttore* che viene chiamata con `new`.

Per vedere meglio prototìpi ed ereditarietà: <a href="../Ereditarietà/" title="erditarietà in javascript">sezione sull'ereditarietà in javascript</a>


## Classi

Per dichiarare una classe si usa la keyword `class`:
```javascript
class classe {
    // metodo costruttore:
    constructor(x) {
        this.x = x;
    }
    // campi pubblici condivisi:
    todos = 'foo';
}

// costruiamo un oggetto istanza della classe:
const obj = new classe(6);

console.log(obj);
// ↪ {todos: 'foo', x: 6}

```


<script>
/* class classe {
    // metodo costruttore:
    constructor(x) {
        this.x = x;
    }
    // campi pubblici condivisi:
    todos = 'foo';
    // campi statici
    static pub = 'fee';
    //
    call() {
        return this.pub;
    }
}

// costruiamo un oggetto istanza della classe:
const obj = new classe(6);

console.log(obj);
// ↪ {todos: 'foo', x: 6}

console.log(obj.call()); */
</script>

## Campi privati

In JavaScript i campi privati sono stati introdotti nel 2021 e sono istanziati precedendo il nome del campo con `#`; di fatto, questi campi hanno un livello di protezione molto elevato e sono accessibili SOLO E SOLTANTO nella dichiarazione di quella specifica classe in cui sono definiti, cioè:

- le classi derivate (`extends`) NON hanno accesso ai campi privati delle classi da cui derivano
:::eg
```js
class Canid {
    #family = 'canidae';
}
class Dog extends Canid {
    changeFam() {
        this.#family = 'dog'; // ERROR
    } 
}
```
:::

- oggetti istanza della stessa classe hanno accesso ai reciproci campi privati all'interno dei metodi istanziati sulla classe comune;   
in altre parole, se il metodo (statico e non) è definito all'interno della dichiarazione della classe, allora può accedere direttamente ai campi privati di tutte le sue istanze (non solo del `this`)
:::eg
```js
```
:::

### Campi Privati

ai campi privati si può accedere solo tramite notazione puntata (è illegale scrivere `Canid['#family']`)



## Classi VS Closures VS Prototypes

Per le classi:
- Vantaggi:
    - sintassi più intituiva e allineata a quella degli altri linguaggi
    - campi privati nativi (dal 2021)
    - interfaccia con il prototype garantendo ereditarietà e corretto istanziamento di metodi di classe sul Constructor.prototype
    - getter e setter facili da usare
- Svantaggi:
    - campi privati non supportati da vecchi browser
    - sintassi e funzionalità non complete rispetto agli altri linguaggi:
        - mancano le funzionalità di oveloading di costruttore, metodi e variabli 
        - manca un campo intermedio tra private e public che sia protetto ma accessibile dalle classi derivate
        - manca la possibilità di rendere il costruttore privato per regolamentarne l'accesso
    - comportamenti vincolati all'essere un'interfaccia dei prototipi

Per le closures: 
- Vantaggi: 
    - campi privati nativi sfruttando il Garbage Collector
    - nessun `this`
    - massima compatibilità
    - getter e setter facili da usare
    - creabili come istanze singole sfruttando una IIFE
    - nessuna sintassi aggiuntiva
- Svantaggi:
    - il corpo della funzione fabbrica non ha protezioni
    - l'oggetto che costruisce è un oggetto semplice, non ha un tipo particolare, è semplicemente un'istanza di `Object`
    - i metodi sono istanziati direttamente sull'oggetto invece che sul prototipo (pesa sulla memoria e i processi poichè necessitano di essere istanziati a ogni creazione di oggetto)
    - i campi statici vanno istanziati sulla fabbrica (non c'è una classe/prototipo di derivazione)
    - nessun uso della keyword `new` (opinabile; i metodi fabbrica sono comuni anche anche agli altri linguaggi, ma non c'è una convenzione sulla sintassi per JS, quindi qualsiasi funzione potrebbe essere una fabbrica)

Per i prototipi:
- Vantaggi:
    - metodo nativo per implementare l'ereditarietà
    - interazione diretta con il meccanismo => sai esattamente dove vanno a finire le cose senza ambiguità
    - accesso diretto al sottostrato strutturale che governa l'ereditarietà
- Svantaggi;
    - verboso
    - nessun campo privato
    - getter e setter supportati ma verbosissimi da implementare
    - separazione dell'implementazione (il prototipo può essere definito a pezzi in più parti del codice); considerata cattiva pratica più che altro
    - costruttore ingombrato poiché i campi pubblici non-statici vanno istanziati sull'oggetto (non sul prototipo, su cui vanno solo i metodi pubblici)
    - non è esplicito se il costruttore sia effettivamente un costruttore o una semplice funzione

:::eg
```js
class Car {
    #wheels = 4;
    #brand;
    constructor(brand) {
        this.#brand =
            typeof brand === 'string' 
            ? brand : 'unbranded';
    }
    get wheels() { return this.#wheels; }
    get brand() { return this.#brand; }
    start() { console.log('Engine started!'); }
}
```
VS
```js
function Car(brand) {
    this._brand = 
        typeof brand === 'string' 
        ? brand : 'unbranded';
    this._wheels = 4;
}
Car.prototype.start = function () {
    console.log('Engine started!');
}
Object.defineProperty(Car.prototype, 'wheels', {
    get() { return this._wheels; }
});
Object.defineProperty(Car.prototype, 'brand', {
    get() { return this._brand; }
});
```
VS
```js
function makeCar(brand) {
    const _brand = 
        typeof brand === 'string' 
        ? brand : 'unbranded';
    const _wheels = 4;
    return {
        start() { console.log('Engine started!'); },
        get wheels() { return _wheels; },
        get brand()  { return _brand; }
    }
}
```
:::

:::nb
Confrontando l'implementazione con prototipo e quella con classe, dobbiano notare che *le proprietà (non-metodi) sono istanziate dal costruttore; anche quelle che effettivamente sarebbero comuni a tutti gli oggetti della classe/prototipo risultano istanziate sull'oggetto stesso e non sul prototipo*.   
Questo *non è un errore*, infatti, sarebbe vietato (o quantomeno cattiva pratica) istanziare variabili semplici su un prototipo; su un prototipo si istanziano SOLO i metodi da passare alle istanze, mentre è il costruttore che assegna le proprietà agli oggetti (questo succede sottobanco anche con le classi, che però standardizzano la scrittura creando questa discrepanza non esplicita di trattamento tra metodi e proprietà).
:::

:::oss
In grande somma, potremmo riassumere le differenze così:

- le classi sono una sintassi più leggibile basata sui prototipi, ma vanno usate conoscendo quello che fanno sottobanco
- le classi implementano dei campi privati, ma non hanno supporto sui browser vecchi

- i prototipi sono più tecnici e verbosi, ma più potenti delle classi se usati correttamnte

- le closures hanno grande compatibilità, ma sono limitate nello scopo

In generale, è più utile usare le closures per pochi oggetti, magari istanziando solo un singolo o un paio di oggetti con questo metodo per garantire incapsulamento senza la necessità di costruire un'intera classe o creare un prototipo apposito.

Le classi sono utili per la sintassi più immediata nei progetti dove le entità hanno bisogno di una certa gerarchia.

:::