---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Sintassi Base di JavaScript'
metaTitle: 'Appunti sulla Sintassi Base di JavaScript'
description: 'Appunti e note sulle prime cose da sapere su JavaScript.'
author: 'Italo Corraro'
---

Javascript è un linguaggio di **scripting** sviluppato per dare interattività lato cliente alle pagine HTML, ma può essere utilizzato anche lato server.

La sintassi del `JavaScript` riprende in gran parte quella del `C++` e di `Java` (da qui il nome, ma non ci sono altre ragioni, nè collegamenti tra i linguaggi).

Alcune caratteristiche del linguaggio sono:

* è tecnicamente un linguaggio **interpretato**, ma in pratica è compilato direttamente dal browser al momento dell'esecuzione (_just-in-time compilation_) [^1]

* è un linguaggio orientato agli **oggetti**

* le variabili non si accompagnano a dichiarazioni di tipo del dato (i tipi esistono, ma è JavaScript stesso ad assegnarli dinamicamente in base al dato memorizzato)

* è un linguaggio molto elastico in termini di sintassi (le `;` a terminazione delle istruzioni sono spesso facoltative, ma meglio metterle); in particolare, qualunque errore di sintassi non comporterà un'interruzione dello script: gli errori vengono ignorati e segnalati a `console`

[^1]: la compilazione _just-in-time_ è stata introdotta dai browser per migliorare le prestazione del codice `JavaScript`

---
:::oss
`JavaScript` è un linguaggio 'speciale' tra quelli di programmazione;

nonostante la sintassi ripresa dal `C`, JavaScript ha molte particolarità rispetto agli altri linguaggi e questo è anche dovuto al fatto che ogni nuova versione del linguaggio DEVE supportare anche tutte quelle precedenti

questo da vita a una serie di comportamenti insapettati, 
:::eg
```javascript
var let = 'variablie';
```
è una dicitura ammessa, poiché `var` esisteva da prima che `let` fosse introdotto, quindi una istruzione del genere era perfettamente normale
:::

## Commenti

I commenti in JavaScript possono essere inseriti così:

```javascript
// Questo è un commento a riga singola

/* Questo è un commento multi-riga;
   si estende fino al terminatore */
```

## Variabili

Le variabili in JavaScript possono essere dichiarate tramite le keyword `var`, `let` o `const`, inoltre **non hanno un tipo statico**

```javascript
var gino = 'variabile (globale)';
let pino = 'variabile (locale)';
const TU = 'costante  (locale)';
```

Gli identificatori NON possono iniziare con una cifra; inoltre le keyword di JavaScript non possono essere usate come identificatori

* **`var`** serve a dichiarare una variabile con scope globale; cioè che rimane allocata anche fuori dal blocco in cui viene dichiarata
:::nb
`var` è un vecchio metodo per dichiarare le variabili, ma andrebbe evitato perché le variabili dichiarate con `var` possono essere ri-dichiarate
:::

* **`let`** serve a dichiarare variabili con scope locale; esistono solo all'interno del blocco in cui vengono dichiarate

* **`const`** serve a dichiarare costanti con scope locale;

:::nb
è sempre necessario inizializzare una costante nel momento in cui la si dichiara, poiché non è possibile modificarla in seguito
:::

:::nota
generalmente è consigliato dichiarare i dati come costanti (con `const`) e di dichiararli usando `let` solo quando necessario (perché il loro valore deve essere modificato) e di evitare `var`
:::

## Tipi di Dato

Le variabili possono contenere 8 tipi di dato:

```javascript
// Number
let number = 23;                        
// String
let color = 'giallo';                   
// BigInt
let bigInt = 1234567890123456789012345n 
// Boolean
let bool = true;      
// undefined                  
let un;
// null
let nu = null;
// Object
const obj = { 
    nome: 'Gerry', 
    cognome: 'Scotti',
    eta: 78,
};
// Array object
const arr = [
    'money',
    12,
    'gino'
];
// Date object
const date = new Date("2022-03-25");
// Symbol
const sym = Symbol();
```

sebbene `JavaScript` non abbia una tipizzazione statica dei dati; questa caratteristica può essere introdotta con `TypeScript`;

* `JavaScript` assegna dinamicamente un tipo ai dati in base al loro contenuto; un dato può cambiare tipo se il valore contenuto cambia
* `TypeScript` richiede che a ogni dichiarazione di variabile si accompagni una dichiarazione di tipo; il tipo di dato memorizzabile in quella variabile rimane poi immutabile per la stessa

L'operatore `typeof` permette di leggere il tipo della variabile inserita alla sua destra:

```javascript
const string = 'stringa';
typeof string; 
// Il valore indicato da typeof sarà 'string'

/* Per verificare il tipo possiamo 
 * usare questo operatore */
typeof string === 'string';  // true
let unsi;
typeof unsi === 'undefined'; // true
let number = '24';
typeof number === 'number';  // false 
```

### Coercizione di Tipo

Quando javaScript deve gestire operazioni con dati del tipo non previsto (ad esempio una somma tra numero e stringa o una operazione logica tra due dati non booleani) ricorre alla coercizione di tipo o meglio alla _conversione implicita di tipo_;

JavaScript converte il tipo di uno o più operandi per svolgere l'operazione, ma questo non altera i tipi originali dei dati coinvolti

:::eg
```javascript
3 + '4' === '34'; // true
/* il numero 3 viene coonvertito 
 * in stringa per svolgere
 * l'operazione */
```
:::

### Due Tipi

La distinzione più alta tra i tipi di dato li divide principalemente in 2:

* <a href="/NotesRepo/Web_Dev/Astro/dist/javascript/Tipi Primitivi/">Tipi di Dato Primitivi</a>
* <a href="/NotesRepo/Web_Dev/Astro/dist/javascript/Oggetti/">Oggetti</a>

## Funzioni

Le funzioni possono essere definite tramite la parola chiave `function`:

```javascript
// metodo standard
function somma(x,y) {
    return x + y;
}
// metodo alternativo
let sum = function(x,y) {
    return x + y;
}
/* In entrambi i casi, la funzione 
 * può poi essere invocata così */
sum(12,23); // risultato 35
```

## Oggetti 

Gli oggetti sono tipi composti che contengono un certo numero di **proprietà**:

* ogni proprietà è un'associazione di una _key_ a un dato; per invocare la proprietà si una l'operatore `.`:

```javascript
const bilancio = {
    gennaio: 270,
    febbraio: 360,
    marzo: 230,
}
bilancio.febbraio; // restituisce 360
```

Il dato associato può anche essere un altro oggetto, un array, ecc...

### Tipi di Oggetto

Ci sono più tipi di oggetto, inoltre vengono tutti spesso dichiarati con `const`, ma questo non significa che il loro contenuto non possa essere alterato; infatti, nella costante viene memorizzato il **riferimento** all'oggetto, non i valori delle sue proprietà come avviene per gli altri tipi di dati (primitivi), per questo conviene dichiarare gli oggetti con `cost`

:::eg
```javascript
const obg = {};

// Creiamo una proprietà:
obg.x = 24;
```
:::

I tipi di oggetto sono 

* array
* function
* map
* regExp
* set
* date

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
per invocare un metodo è necessario mettere le parentesi `()` anche per una funzione `void`, cioè senza argomenti; se lo si invoca senza verrà semplicemente restituito il codice della funzione

:::eg

```javascript
const obj = {
    x: 7,
    y: 8,
    tot: function() {
        return this.x + this.y;
    }
}
// mettiamo in output l'invocazione metodo:
console.log(obj.tot()); 
// mettiamo in output l'invocazione proprietà:
console.log(obj.tot);
```

```console
 15
 ƒ () {
    return this.x + this.y;
  }
```
il primo risultato è quello che ci aspettiamo dall'invocazione del metodo, mentre il secondo è semplicemente il codice della funzione

osserviamo inoltre il tipo dei risultati: 
```javascript
console.log(typeof obj.tot()); 
// restituirà 'number'
console.log(typeof obj.tot);
// restituirà 'function'
```
:::

### Oggetti Globali

Alcuni oggetti sono accessibili nello scope globale, cioè da qualsiasi parte del codice

:::nb
da non confondere gli oggetti globali con l'**oggetto globale**, cioè l'oggetto che rappresenta lo _scope globale_;

in un browser web l'oggetto globale è `window`; questo oggetto è sottointeso quando se ne invocano proprietà e metodi, ad esempio il metodo `alert()` sottointende `window.alert()`

:::oss
le variabili dichiarate con `var` 'esistono' direttamente nell'oggetto globale
:::

Gli _oggetti globali_ sono pre-costruiti; un esempio è `NaN`, che però non ha né proprietà né metodi

Ce ne sono molti altri: `Number`, `Array`, `String`, `Math`, `Error`, ecc...

---