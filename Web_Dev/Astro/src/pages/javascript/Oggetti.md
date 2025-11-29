---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Oggetti in JavaScript'
metaTitle: 'Appunti sugli oggetti in JavaScript'
description: 'Appunti e note sugli oggetti e le loro proprietà in JavaScript.'
author: 'Italo Corraro'
---

## Definizione di Oggetto

Gli oggetti sono collezioni di dati organizzati in coppie *key: value*, cioè svariate proprietà con assegnato un valore

* si può assegnare qualsiasi tipo di dato a una proprietà, inclusa una funzione (in quel caso si dece che è un metodo)
* di base, le proprietà non hanno un ordine specifico
* gli oggetti sono dichiarati come riferimenti, non come valore

## Creazione

Possiamo definire e inizializzare un oggetto senza alcun costruttore; quando l'oggetto viene creato in questo modo si dice *object literal*

```javascript
const object = {
    keyAlpha: alphaValue,
    keyOmega: omegaValue,
    keySigma: function() {
        return this;
    }
};
```

La dimensione di un oggetto è **dinamica**, quindi si possono aggiungere proprietà e metodi in qualsiasi momento dopo la creazione:

```javascript
const object = {};

object.newProp = newValue;
```

### Creazione con Costruttore

Possiamo creare un nuovo oggetto tramite il relativo costruttore:

```javascript
const object = new Object({
    keyAlpha: alphaValue,
    keyOmega: omegaValue,
    keySigma: function() {
        return this;
    }
});
```

:::nota
Anche tutti gli altri dati possono creati tramite un costruttore

```javascript
// con new creiamo una nuova istanza di String()
let string = new String('stringa');
console.log(string);
// ↪ String {'stringa'}

// così invece assegnamo un dato primitivo
let stronga = String('stringa');
console.log(stronga);
// ↪ 'stringa'
```

La dichiarazione con costruttore non è necessaria in questi casi e nemmeno con gli oggetti
:::

### Costruire Oggetti

Possiamo creare una funzione che costruisca un oggetto prestabilito a partire dai suoi parametri; in questo modo possiamo creare diversi oggetti dello stesso tipo tramite la funzione costruttore

```javascript
function Costruttore(val1, val2, val3) {
    this.key1 = val1;
    this.key2 = val2;
    this.key3 = val3;
}

const obj = new Costruttore('val1', 'val2', 'val3');
```

Nella funzione costruttore, `this` non a alcun valore; \
il valore di `this` diventerà quello del nuovo oggetto quando viene creato


## Proprietà

### Chiamare le Proprietà

```javascript
const oggetto = {
    proprietà: 'valore'
}
oggetto.proprietà;
// 'valore'
```

Questa non è l'unico modo per accedere alle proprietà di un oggetto, possiamo anche usare una scrittura simile agli array:

```javascript
const oggetto = {
    proprietà: 'valore'
}
oggetto["proprietà"];
// 'valore'
```

:::oss
Questa seconda scrittura è utile se a contenere il nome della proprietà è una variabile

```javascript
const oggetto = {
    proprietà: 'valore'
}
let prop = 'proprietà';
oggetto[prop];
// 'valore'
```

:::

### Rimuovere una Proprietà

La keyword `delete` permette di rimuove una proprietà da un oggetto:

```javascript
const persona = {
    nome: 'Gino',
    cognome: 'Capaldi',
    età: 23,
    nomeCompleto: function() {
        return this.nome + this.cognome;
    }
}
delete persona.nome;
console.log(persona.nomeCompleto());
// ↪ 'undefined Capaldi'
```

:::nb
La keyword `delete` rimuove completamente la proprietà (non solo il valore)
:::

## Metodi

Un metodo è una funzione definita come valore di una proprietà; può essere chiamato direttamente dall'oggetto e può accedere alle proprietà dell'oggetto stesso tramite `this`

```javascript
const persona = {
    nome: 'Gino',
    cognome: 'Capaldi',
    età: 23,
    nomeCompleto: function() {
        return this.nome + ' ' + this.cognome;
    }
}
delete persona.nome;
console.log(persona.nomeCompleto);
/* ↪ f () {
 *       return this.nome + ' ' + this.cognome;
 *   } */
console.log(persona.nomeCompleto());
// ↪ 'undefined Capaldi'
```

## Scorrere un Oggetto

### con un ciclo for

Tramite il costrutto **`for...in`** possiamo percorrere tutte le proprietà di un oggetto similmente a `for...of` per gli array:

```javascript
for (let prop in object) {
    // prop conterrà in NOME della prorietà;
    // per il valore dobbiamo chiamare le singole proprietà:
    console.log(object[prop])
}
```

Alternativamente possiamo usare il metodo `entries()`: \
il metodo **`entries()`** restituisce un iteratore che contiene le coppie chiave/valore dell'oggetto:

```javascript
const oggetto = {
    prop1: 'valore1',
    prop2: 'valore2',
    prop3: 'valore3',
}
for (let [chiave, valore] of Object.entries(oggetto)) {
    console.log(chiave + ' ' + valore);
}
// ↪ 'prop1 valore1'
// ↪ 'prop2 valore2'
// ↪ 'prop3 valore3'
```

### con il metodo values()

Il metodo `values()` restituisce un array che contiene tutti i valori delle proprietà dell'oggetto


<script>
</script>

