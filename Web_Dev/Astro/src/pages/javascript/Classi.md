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

Di base JavaScript affida l'ereditarietà interamente agli *oggetti*: gli oggetti hanno una proprietà `prototype` che è un oggetto a sua volta e dalla quale l'oggetto iniziale eredita proprietà (e metodi); l'oggetto `prototype` ha un altro `prototype` come proprietà, questo genera una catena che JavaScript risale per cercare le proprietà, eventualmente si risolve quando il `prototype` è l'*oggetto* `null`.

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
Ogni volta che accediamo a una proprietà di un oggetto, JavaScript la cerca tra quelle definite per l'oggetto specifico, se non la trova, la cerca tra quelle del suo prototìpo risalendo la catena finchè non la trova o trova `null`, alla base di tutte le catene di ereditarietà dei prototìpi.

Il prossimo prototìpo da guardare dentro `Object` è quello della proprietà `__proto__` (viene indicata così dalla console del browser ed è equivalente a `[[Prototype]]`); possiamo accedere al prototipo chiamandolo `Object.__proto__`

:::oss
Il costruttore di `Object.prototype` è la funzione `Object()` che avevamo già usato con la keyword `new` per costruire oggetti senza letterali; gli oggetti costruiti ereditano automaticamente tutte le proprietà assegnate a `Object.prototype`
:::

Le classi sono una sintassi costruita sui prototìpi che implementano in una scrittura compatta l'assegnazione di proprietà al prototipo e una funzione *costruttore* che viene chiamata con `new`


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