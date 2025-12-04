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
var gino; // variabile (globale)
let pino; // variabile (locale)
const TU; // costante  (locale)
```

Dare un valore iniziale ad una variabile è detto *inizializzazione*:

```javascript
var nome = 'Gino';
let altroNome = 'Pino';
const ALTRO_NOME = 'Paolo';
```

L'operatore `=` è l'*operatore di assegnazione* (NON di uguaglianza).

Gli **identificatori** (cioè i nomi delle variabili) NON possono iniziare con una cifra; inoltre le keyword di JavaScript non possono (o non dovrebbero) essere usate come identificatori.

### Scope

JavaScript definisce quattro **scope**, ovvero il contesto di esecuzione del codice, dove variabili ed espressioni possono vedersi tra loro:

* **scope globale**: l'intero script
* **scope di funzione**: il blocco di codice creato con una funzione
* **scope di blocco**: il blocco di codice inserito tra parentesi graffe (`{ }`)
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

* **`let`** serve a dichiarare variabili con scope di blocco; esistono solo all'interno del blocco in cui vengono dichiarate e possono essere riassegnate dopo la dichiarazione

* **`const`** serve a dichiarare costanti con scope di blocco; queste variabili sono di sola lettura (per questo "costanti"; *non possono essere riassegnate dopo la dichiarazione*) ed esistono solo all'interno del blocco in cui vengono dichiarate

:::nb
È sempre necessario inizializzare una costante nel momento in cui la si dichiara, poiché non è possibile modificarla in seguito
:::

:::nota
Generalmente è consigliato dichiarare, quando possibile, i dati come costanti (con `const`) e di dichiararli usando `let` solo quando necessario (perché il loro valore deve essere modificato) e di evitare `var` in qualunque caso (se non per retro-compatibilità, ma in tal caso non ha senso mischiare `var` con `let` e `const`)
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


