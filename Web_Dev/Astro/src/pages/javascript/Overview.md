---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Overview di JavaScript'
metaTitle: 'Overview di JavaScript'
description: 'Appunti e note sulle prime cose da sapere su JavaScript.'
author: 'Italo Corraro'
---

## Intro

Javascript è un linguaggio di **scripting** sviluppato per dare interattività lato cliente alle pagine HTML, ma può essere utilizzato anche lato server.

La sintassi del `JavaScript` riprende in gran parte quella del `C++` e di `Java` (da qui il nome, ma non ci sono altre ragioni, nè collegamenti tra i linguaggi).

Alcune caratteristiche principali del linguaggio sono:

* è tecnicamente un linguaggio **interpretato**, ma in pratica è compilato direttamente dal browser al momento dell'esecuzione (_just-in-time compilation_) [^1]

* è un linguaggio orientato agli **oggetti**

* le variabili non si accompagnano a dichiarazioni di tipo del dato (i tipi esistono, ma è JavaScript stesso ad assegnarli dinamicamente in base al dato memorizzato)

* le istruzioni terminano con `;`, tuttavia, si può omettere per istruzioni di un singolo rigo, poiché JS lo inserisce automaticamente per istruzioni sintatticamente complete

* è un linguaggio molto elastico in termini di sintassi, in particolare, =u=qualunque errore di sintassi non comporterà un'interruzione dello script: gli errori vengono ignorati e segnalati tramite `console`==

* i concetti di "pubblico", "privato" o "protetto", così come l'interfaccia, sono gestiti sottobanco da JavaScript

* è un linguaggio **case-sensitive** =h=almeno questo==

* utilizza caratteri Unicode

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
è una dicitura ammessa, poiché `var` esisteva da prima che `let` fosse introdotto, quindi, poiché prima dell'introduzione della keyword `let`, era possibile chiamare le variabili `let`, per retro-compatibilità è ancora possibile 
:::

## Commenti

I commenti in JavaScript possono essere inseriti così:

```javascript
// Questo è un commento a riga singola

/* Questo è un commento multi-riga;
   si estende fino al terminatore */
```

## Variabili

Le variabili in JavaScript possono essere dichiarate tramite le keyword `var`, `let` o `const`, inoltre =u=non hanno un tipo statico==

```javascript
var gino = 'variabile (globale)';
let pino = 'variabile (locale)';
const TU = 'costante  (locale)';
```

Gli **identificatori** (cioè i nomi delle variabili) NON possono iniziare con una cifra; inoltre le keyword di JavaScript non possono (o non dovrebbero) essere usate come identificatori

### Scope

JavaScript definisce quattro *scope*, ovvero il contesto di esecuzione del codice dove variabili ed espressioni possono vedersi tra loro:

* **scope globale**: l'intero script
* **scope di funzione**: il blocco di codice creato con una funzione
* **scope di blocco**: il blocco di codice inserito tra parentesi graffe (`{/* */}`)
* **scope di modulo**: lo script in esecuzione in un modulo

La keyword per dichiarare una variabile si sceglie in base allo scope che le si vuole dare e a se si vuole permettere la modifica del dato contenuto.

### var

La keyword **`var`** serve a dichiarare una variabile con scope globale[^2] o di funzione; \
le variabili dichiarate con questa keyword possono essere ri-dichiarate e ri-inizializzate 

[^2]: le variabili dichiarate con `var` vengono attaccate all'oggetto globale come sue proprietà

:::nb
`var` è un vecchio modo per dichiarare le variabili, ma andrebbe evitato proprio perché le variabili dichiarate con `var` possono essere ri-dichiarate e hanno comportamenti indesiderati a livello di scope
:::

Le variabili NON dichiarate possono comunque essere usate; JavaScript le dichiara automaticamente come globali (vedi la sezione sulla <a href="../Strict Mode/#variabili-non-dichiarate" title="strict mode">strict mode</a>)

:::oss
Questo significa che sbagliare a scrivere il nome di una variabile non porta a errore, ma alla definizione di una nuova variabile
:::

TUTTE le dichiarazioni di variabili globali vengono fatte prima dell'esecuzione dello script, vengono cioè *portate in cima*

### let e const

* **`let`** serve a dichiarare variabili con scope di blocco; esistono solo all'interno del blocco in cui vengono dichiarate e il valore al loro interno possono essere riassegnate

* **`const`** serve a dichiarare costanti con scope di blocco; queste variabili sono di sola lettura (per questo "costanti"; non possono essere riassegnate) ed esistono solo all'interno del blocco in cui vengono dichiarate

:::nb
è sempre necessario inizializzare una costante nel momento in cui la si dichiara, poiché non è possibile modificarla in seguito
:::

:::nota
generalmente è consigliato dichiarare, quando possibile, i dati come costanti (con `const`) e di dichiararli usando `let` solo quando necessario (perché il loro valore deve essere modificato) e di evitare `var` in qualunque caso (se non per retro-compatibilità, ma in tal caso non ha senso mischiare `var` con `let` e `const`)
:::

### Letterali

I **letterali** rappresentano dei valori fissi forniti direttamente all'interno dello script.

In JavaScript =u=tutti i dati possono essere assegnati alle variabili tramite dei letterali==

:::eg
```javascript
let ilTuoNome = 'Girolamo';
// 'Girolamo' è un letterale stringa
let laTuaEta = 35;
// 35 è un letterale numero
const chiSono = {
    nome: 'Luca',
    eta: 28,
}
/* { nome: 'Luca', eta: 28, }
 * è un letterale oggetto */
```
:::oss
Non è necessario un costruttore per definire l'oggetto 
:::

## Tipi di Dato

In JavaScript l'assegnazione dei tipi è *dinamica, non statica*; \
il tipo viene assegnato alla variabile in base alla "forma" del dato contenuto, inoltre, se il dato cambia, può cambiare anche il tipo

### Tipi Primitivi

I **tipi primitivi** rappresentano dei valori base del linguaggio e di loro natura non posseggono proprietà dinamiche.

L'operatore `typeof` permette di leggere il tipo della variabile inserita alla sua destra; tutti i tipi primitivi eccetto `null` restituiscono una stringa contenente il nome del proprio tipo.

:::eg
```javascript
typeof 'qualcosa'; // 'string'
typeof 24; // 'number'
typeof string === 'string';  // true
```
:::

Con l'eccezione di `undefined` e `null`, tutti gli altri tipi primitivi hanno una classe _wrapper_ associata:

* Le **classi wrapper** vengono usate da JavaScript per racchiudere il dato primitivo quando viene invocata una proprietà o un metodo su di esso; in questo modo, emula il comportamento di un oggetto.

| Tipo | `typeof` | Wrapper | Descrizione
| --- | --- | --- | --- |
| `Null` | `"object"` | \/ | assenza di *oggetto*[^3] |
| `Undefined` | `"undefined"` | \/ | assenza di *valore*[^3] |
| `Boolean` | `"boolean"` | `Boolean()` | `true` \| `false` |
| `Number` | `"number"` | `Number()` | intero o virgola mobile a 64bit |
| `BigInt` | `"bigint"` | `BigInt()` | intero con precisione arbitraria |
| `String` | `"string"` | `String()` | sequenza di caratteri |
| `Symbol` | `"symbol"` | `Symbol()` | dato le cui istanze sono uniche e immutabili |

[^3]: Il tipo Null include solo un valore: `null`; =l===
analogamente, il tipo Undefined include solo `undefined`. =l===
Concettualmente, `null` rappresenta l'assenza deliberata di un *oggetto*, mentre `undefined` rappresenta l'assenza di un `valore`; =l=== =l===
    una variabile non inizializzata ha valore `undefined`, similmente una funzione che non restituisce alcun valore, restituisce implicitamente `undefined`; chiamare una proprietà inesistente di un oggetto restituisce `undefined` 
=l=== =l===
    `null` si trova alla fine di una *catena di prototìpi* come valore ultimo

### Coercizione di Tipo

Quando JavaScript deve gestire operazioni con dati del tipo non previsto (ad esempio una somma tra numero e stringa o una operazione logica tra due dati non booleani) ricorre alla <a href='../Operatori/#coercizione-di-tipo' title='Coercizione di Tipo'>**coercizione di tipo** (vai alla sezione approfondita)</a> o meglio alla *conversione implicita di tipo*;

JavaScript converte il tipo di uno o più operandi per svolgere l'operazione, ma questo non altera i tipi originali dei dati coinvolti

:::eg
```javascript
3 + '4' === '34'; // true
/* il numero 3 viene convertito 
 * in stringa per svolgere
 * l'operazione */
```
:::

### Oggetti

L'unico altro tipo di dato che può essere assegnato ad un identificatore è un **oggetto**:

Gli oggetti sono tipi composti che contengono un certo numero di **proprietà**:

* ogni proprietà è un'associazione di una *chiave* a un dato; per invocare la proprietà si una l'operatore `.`:

```javascript
const bilancio = {
    gennaio: 270,
    febbraio: 360,
    marzo: 230,
}
bilancio.febbraio; // restituisce 360
```

Il dato associato può anche essere un altro oggetto, un array, ecc...

#### Tipi di Oggetto

Ci sono più tipi di oggetto, inoltre vengono tutti spesso dichiarati con `const`, ma questo non significa che il loro contenuto non possa essere alterato; infatti, nella costante viene memorizzato il **riferimento** all'oggetto, non i valori delle sue proprietà come avviene per gli altri tipi di dati (primitivi), per questo conviene dichiarare gli oggetti con `cost`

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


#### Metodi

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

## Console

Le *funzioni per sviluppatori* (apri con `shift` + `ctrl` + `i`) di praticamente tutti i browser dispongono dello strumento **console**

Si può accedere alla console tramite l'oggetto omonimo; il metodo per generare un generico output in console è `log()`:

```javascript
console.log('Hello World!');
```
Si può anche scrivere direttamente a console dal browser (tenere premuto `shift` quando si va a capo per digitare codice multi-linea)

:::nb
Per prevenire che gli script scritti a console si influenziono l'un l'altro conviene racchiuderli in una funzione anonima per creare uno scope di funzione in cui limitare ciascuno script:

```javascript
(function() {
    // codice in function scope
})();
```

:::nota
Le `()` a fine funzione sono necessarie per eseguire automaticamente la funzione appena dichiarata
:::

---

