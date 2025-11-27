---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Condizionali in JavaScript'
metaTitle: 'Appunti sui condizionali in JavaScript'
description: 'Appunti e note sulle istruzioni if, else e switch in JavaScript.'
author: 'Italo Corraro'
---

## if else

Le istruzioni `if` permettono di eseguire un blocco di codice solo a una determinata condizione:

```javascript
if(condition) {
    // run this if condition is truthy
}
```

Le istruzioni `else` posso seguire le `if` e permettono di eseguire un  blocco di codice alternativo in caso la condizione dell'`if` non fosse verificata: 

```javascript
if(condition) {
    // run this if condition is truthy
} else {
    // run this if condition is falsy
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
    // run this if condition1 is truthy
} else if(condition2) {
    /* run this if condition1 is falsy
     * AND condition2 is truthy */
} else {
    /* run this if both consition1
     * AND condition2 are falsy */
}
```

:::nota
`else if` equivale ad innestare un `if` nel blocco `else`:

```javascript
if(condition1) {
    // run this if condition1 is truthy
} else {
    if(condition2) {
        /* run this if condition1 is falsy
         * AND condition2 is truthy */
    }
} else {
    /* run this if both consition1
     * AND condition2 are falsy */
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
        // only run if both conditions are truthy
    }
}
```
equivale a 
```javascript
if(condition1 && condition2) {
    // only run if both conditions are truthy
}
```
:::

## switch

L'istruzione `switch` permette di eseguire un blocco di codice se l'espressione fornita per argomento coincide con un valore tra una certa selezione:

```javascript
switch (expression) {
  case choice1:
    // run this code
    break;

  case choice2:
    // run this code instead
    break;

  // include as many cases as you like

  default:
    // actually, just run this code
    break;
}
```

* L'espressione viene valutata e il suo risultato viene confrontato con le scelte date dall'istruzione `case`
* se il valore coincide, allora viene eseguito il relativo blocco di codice

L'istruzione `switch` scorre tutti i `case` per trovare match, ma anche se viene trovato un match per il risultato dell'espressione, il confronto continua anche con gli altri.

Dovessero essere possibili più match, per prevenire l'esecuzione di più blocchi `case`, è necessario spezzare lo scorrimento con l'istruzione `break`; questa viene messa al termine dei blocchi di codice legati ai `case`, in questo modo, al primo match, viene eseguito il blocco relativo e lo `switch` viene chiuso.

L'istruzione `default` serve ad indicare un blocco di codice da eseguire a prescindere dal valore dell'espressione; serve come fallback nel caso non si trovi un match.

