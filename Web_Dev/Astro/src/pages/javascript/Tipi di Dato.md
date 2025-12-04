---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Tipi di Dato in JavaScript'
metaTitle: 'Appunti sui Tipi di Dato di JavaScript'
description: 'Appunti e note sui tipi primitivi e gli oggetti in JavaScript.'
author: 'Italo Corraro'
---
## Assegnazione Dinamica

In JavaScript l'assegnazione dei tipi è *dinamica, non statica*; \
il tipo viene assegnato alla variabile in base alla "forma" del dato assegnato, inoltre, se il dato cambia, può cambiare anche il tipo.

JavaScript distingue 8 diversi tipi di dato in due sotto-categorie:

## Tipi Primitivi

I **tipi primitivi** rappresentano dei valori base del linguaggio e di loro natura non posseggono proprietà dinamiche. 

L'operatore `typeof` permette di leggere il tipo della variabile inserita alla sua destra; tutti i tipi primitivi eccetto `null` restituiscono una stringa contenente il nome del proprio tipo.

JavaScript definisce 7 tipi primitivi: `Null`, `Undefined`, `String`, `Number`, `BigInt`, `Boolean` e `Symbol`.

:::eg
```javascript
typeof 'qualcosa'; // 'string'
typeof 24; // 'number'
typeof string === 'string';  // true
typeof null === 'null'; // false
typeof null === 'object'; // true
```
:::

### Classi Wrapper

Con l'eccezione di `undefined` e `null`, tutti gli altri tipi primitivi hanno una classe _wrapper_ associata:

Le **classi wrapper** vengono usate da JavaScript per racchiudere un dato primitivo quando viene invocata una proprietà o un metodo su di esso; in questo modo, emula il comportamento di un oggetto e permette di chiamare la proprietà/metodo sul dato.

Una tabella con i tipi primitivi, relativi wrapper e descrizione dei dati che contengono:

| Tipo | `typeof` | Wrapper | Descrizione
| --- | --- | --- | --- |
| `Null` | `"object"` | \/ | assenza di *oggetto* |
| `Undefined` | `"undefined"` | \/ | assenza di *valore* |
| `Boolean` | `"boolean"` | `Boolean()` | `true` \| `false` |
| `Number` | `"number"` | `Number()` | intero o virgola mobile a 64bit |
| `BigInt` | `"bigint"` | `BigInt()` | intero con precisione arbitraria |
| `String` | `"string"` | `String()` | sequenza di caratteri |
| `Symbol` | `"symbol"` | `Symbol()` | dato le cui istanze sono uniche e immutabili |

### null e undefined

Il tipo `Null` include solo un valore: `null`; \
analogamente, il tipo `Undefined` include solo `undefined`. 

Concettualmente, `null` rappresenta l'assenza deliberata di un *oggetto*, mentre `undefined` rappresenta l'assenza di un *valore*;

* una variabile non inizializzata ha valore `undefined`, similmente, una funzione che non restituisce alcun valore, restituisce implicitamente `undefined`; chiamare una proprietà inesistente di un oggetto restituisce `undefined` 

* `null` si trova alla fine di una *catena di prototìpi* come valore ultimo;

### Coercizione di Tipo

Quando JavaScript deve gestire operazioni con dati non del tipo previsto (ad esempio una somma tra numero e stringa o una operazione logica tra due dati non booleani) ricorre alla **coercizione di tipo** (<a href='../Operatori/#coercizione-di-tipo' title='Coercizione di Tipo'>vai alla sezione approfondita</a>) o meglio alla *conversione implicita di tipo*;

JavaScript converte il tipo di uno o più operandi per svolgere l'operazione, ma questo non altera i tipi originali dei dati coinvolti

:::eg
```javascript
3 + '4' === '34'; // true
/* il numero 3 viene convertito 
 * in stringa per svolgere
 * l'operazione */
```
:::

## Oggetti

L'unico altro tipo di dato che può essere assegnato ad un identificatore è **oggetto**:

Gli oggetti sono tipi composti che contengono un certo numero di **proprietà**:

* ogni proprietà è un'associazione di una *chiave* a un *dato*; per invocare la proprietà si usa l'operatore `.`:

```javascript
const bilancio = {
    gennaio: 270,
    febbraio: 360,
    marzo: 230,
}
bilancio.febbraio; // restituisce 360
```

Il dato associato può anche essere un altro oggetto, un array, ecc...

:::oss
Non è un requisito necessario che `.` segua direttamente l'oggetto, quindi possiamo concatenare più invocazioni di proprietà e metodi senza necessità di creare una coda infinita:

```javascript
const persona = {
    nome: {
        primo: 'Gianni',
        secondo: 'Luigi',
        cognome: 'Verdi'
    },
    eta: 23,
}

persona.nome.cognome; // 'Verdi'
persona
  .nome
  .secondo; // 'Luigi'
```

:::nb
Ogni volta che viene chiamata una proprietà, il valore che questa contiene viene restituito ed è su quel valore che viene eseguita l'operazione successiva:
```js
persona
    .nome
/*  └─> Object nome */.cognome
/*                    └─> 'Verdi' */.length;
/*                                  └─> 5 */
```
```js
console.log(('Hello' + ' World').length + 4);
// ↪ 15
```
:::

### Tipi di Oggetto

Ci sono più tipi di oggetto, inoltre vengono tutti dichiarati con `const`, ma questo non significa che il loro contenuto non possa essere alterato; infatti, nella costante viene memorizzato il **riferimento** all'oggetto, non i valori delle sue proprietà come avviene per gli altri tipi di dati (primitivi), per questo conviene dichiarare gli oggetti con `cost`

:::eg
```javascript
const obg = {};

// Creiamo una proprietà:
obg.x = 24;
```
:::

=u=Tutto ciò che non è un dato primitivo è un oggetto==:
* gli *array* sono un tipo di oggetto
* le *funzioni* sono un tipo di oggetto
* le *classi* sono un tipo di oggetto


### Metodi

Un oggetto può avere una funzione tra le sue proprietà, in tal caso si parla più propriamente di un **metodo**:

```javascript
const bilancio = {
    gennaio: 270,
    febbraio: 360,
    marzo: 230,
    totale: function() {
        return this.gennaio + this.febbraio + this.marzo;
    }
}
bilancio.totale(); // restituisce 860
```

I metodi possono usare le proprietà dell'oggetto a cui appartengono tramite la parola chiave `this`

:::warn
per invocare un metodo è necessario mettere le parentesi `()` (sono un operatore); se lo si invoca senza, verrà semplicemente restituito il codice della funzione

:::eg

```javascript
const obj = {
    x: 7,
    y: 8,
    tot: function() {
        return this.x + this.y;
    }
}

obj.tot(); // 15 

obj.tot;
/* ƒ () {
 *    return this.x + this.y;
 * }
```

il primo risultato è quello che ci aspettiamo dall'invocazione del metodo, mentre il secondo è semplicemente il codice della funzione

osserviamo inoltre il tipo dei risultati: 
```javascript
typeof obj.tot(); 
// ↪ 'number'
typeof obj.tot;
// ↪ 'function'
```
:::

## Valore e Riferimento

In JavaScript i dati primitivi sono memorizzati e passati per **valore**, mentre gli oggetti per **riferimento**.

JavaScript non rende esplicita la referenziazione dei dati, quindi, le varie istruzioni che copiano i dati possono fare due tipi di copiature:

* **superficiale** (*shallow copy*): viene copiato il primo livello del dato; =u=i dati non di tipo primitivo (*oggetti*) vengono copiati come riferimenti==, questo implica che
    * le modifiche agli oggetti contenuti nel dato si riflettono anche sull'originale (e viceversa)
    * l'originale e la copia dipendono l'uno dall'altro
* **profonda** (*deep copy*): viene copiato l'intero contenuto del dato, quindi 
    * le modifiche agli oggetti contenuti nel dato sono loro esclusive e non si ripercuotono sull'originale (e viceversa)
    * l'originale e la copia sono entità completamente distinte
