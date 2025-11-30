---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Controllo di Flusso in JavaScript'
metaTitle: 'Appunti sul controllo di flusso in JavaScript'
description: 'Appunti e note sul controllo del flusso delle istruzioni in JavaScript.'
author: 'Italo Corraro'
---

## Condizionali

Il gruppo di istruzioni `if`, `else`, `switch` e `case` permette di eseguire condizionalmente uno o più blocchi di codice;

la sintassi è quasi completamente uguale al `C`.

### if else

Le istruzioni `if` permettono di eseguire un blocco di codice solo a una determinata condizione:

```javascript
if(condition) {
    // codice se la condition è truthy
}
```

Le istruzioni `else` posso seguire le `if` e permettono di eseguire un  blocco di codice alternativo in caso la condizione dell'`if` non fosse verificata: 

```javascript
if(condition) {
    // codice se la condition è truthy
} else {
    // codice se la condition è falsy
}
```

:::oss
Questa espressione è la versione estesa dell'operatore ternario `condition ? ifTruthy : ifFalsy;`; 

:::nb
L'operatore ternario non può eseguire blocchi di codice, solo singole istruzioni; se una singola istruzione non copre il codice da eseguire condizionalmente, allora è meglio usare `if.. else..`
:::

Le istruzioni `else if` permettono di concatenare più blocchi di condizioni:

```javascript
if(condition1) {
    // codice se la condition1 è truthy
} else if(condition2) {
    /* codice se la condition1 è falsy
     * E la condition2 è truthy */
} else {
    /* codice se la condition1
     * E la condition2 sono entrambe falsy */
}
```

:::nota
`else if` equivale ad innestare un `if` nel blocco `else`:

```javascript
if(condition1) {
    // codice se la condition1 è truthy
} else {
    if(condition2) {
        /* codice se la condition1 è falsy
         * E la condition2 è truthy */
    }
} else {
    /* codice se la condition1
     * E la condition2 sono entrambe falsy */
}
```
:::

:::nb
Le istruzioni condizionali non bloccano il flusso di esecuzione se la condizione è o non è verificata; l'unica esecuzione ad essere influenzata è quella del blocco legato all'istruzione condizionale

:::eg
```javascript
let i = 0;
if(i > 0) {
    i = -1;
} 
i = 3;
```
Alla fine sarà sempre `i = 3`, poiché quella parte di codice non è legata alla condizione
:::

:::nota
Nelle condizioni si possono usare espressioni anche complesse, ad esempio usando gli operatori logici o quelli di comparazione

```javascript
if(condition1) {
    if(condition2) {
        // codice se entrambe le condition sono truthy
    }
}
```
equivale a 
```javascript
if(condition1 && condition2) {
    // codice se entrambe le condition sono truthy
}
```
:::

### switch

L'istruzione `switch` permette di eseguire un blocco di codice se l'espressione fornita per argomento coincide con un valore tra una certa selezione:

```javascript
switch (expression) {
  case choice1:
    // codice per questo caso
    break;

  case choice2:
    // codice per quest altro caso
    break;

  // altri casi ...

  default:
    // codice se nessun caso si è verificato
    break;
}
```

* L'espressione viene valutata e il suo risultato viene confrontato con le scelte date dall'istruzione `case`
* se il valore coincide, allora viene eseguito il relativo blocco di codice

L'istruzione `switch` scorre tutti i `case` per trovare match, ma anche se viene trovato un match per il risultato dell'espressione, il confronto continua anche con gli altri.

Dovessero essere possibili più match, per prevenire l'esecuzione di più blocchi `case`, è necessario spezzare lo scorrimento con l'istruzione `break`; questa viene messa al termine dei blocchi di codice legati ai `case`, in questo modo, al primo match, viene eseguito il blocco relativo e lo `switch` viene chiuso.

L'istruzione `default` serve ad indicare un blocco di codice da eseguire a prescindere dal valore dell'espressione; serve come fallback nel caso non si trovi un match.

## Controllo degli Errori

Possiamo lanciare un errore/eccezione in uno script usando `throw` e gestire gli errori tramite le istruzioni `try` e `catch`.

### throw

```javascript
throw 'questa è una stringa di errore';
// ↪ Uncaught questa è una stringa di errore
```

Con `throw` si può lanciare qualsiasi tipo di errore; \
come vediamo però, non viene gestito in automatico

### Gestione dell'Errore

L'istruzione `try` permette di eseguire un blocco di codice e se un'eccezione si verifica, allora viene passata al blocco di gestione definito dall'istruzione `catch`.

```javascript
try {
    // blocco di codice
    if(/*c'è un errore?*/) throw exception;
} catch (exception) {
    // gestione dell'errore
    /* prende per argomento il valore 
     * specificato da throw */
}
```
:::nota
Ci possono essere più e diversi tipi di errore, ma solo uno viene lanciato perché interrompe l'esecuzione del `try`;

quello che viene lanciato può essere indirizzato ad una funzione di handler specifica per quell'errore all'interno del blocco `catch`, oppure possono essere gestiti tutti i vari tipi nel blocco stesso
:::

:::nota
Il metodo `error()` di `console` è la scelta corretta rispetto a `log()` se si vogliono passare messaggi di errore (o memorizzarli) a console;

gli errori vengono aggiunti a una lista di messaggi di errore generati per la pagina
:::

:::eg
```javascript
try {
    let sbaglia = 'sono un errore';
    throw sbaglia;
    console.log('troppo tardi');
} catch(e) {
    console.error(e);
}
// ↪ 'sono un errore'
```
In questo (sciocco) esempio vediamo semplicemente la struttura che deve avere la sequenza `try`-`catch` e la sua esecuzione:
* l'istruzione `throw` interrompe l'esecuzione del blocco `try`, infatti, a console non viene loggato "troppo tardi"
* a `catch` viene passato come argomento l'errore lanciato (cioè l'espressione passata a `throw`)
* l'errore lanciato non appare più come `Uncaught`
* il blocco `catch` viene eseguito solo al lancio dell'errore e gestistisce tale errore
:::

### Blocco finally

L'istruzione `finally` va piazzata dopo `try` e `catch`; \
il codice contenuto nel suo blocco viene eseguito dopo `try` e `catch`, tuttavia viene eseguito a prescindere da se è stato lanciato un errore e se questo è stato gestito.

generalmente, questo blocco è utilizzato per rilasciare una risorsa impegnata nel `try` a prescindere dal risultato dell'operazione.

<script>
try {
    let sbaglia = 'sono un errore';
    throw sbaglia;
    console.log('troppo tardi');
} catch(e) {
    console.error(e);
}
// ↪ 'sono un errore'
</script>