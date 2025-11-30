---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Strict Mode di JavaScript'
metaTitle: 'Appunti sulla strict mode di JavaScript'
description: 'Appunti e note sulla strict mode di JavaScript.'
author: 'Italo Corraro'
---

## Strict Mode

Il default di JavaScript è la **sloppy mode**; la **strict mode** limita alcune sintassi e modifica alcuni comportamenti di base di JavaScript

Per attivare la *strict mode* (per l'intero script) bisogna inserire la dichiarazione `"use strict"` all'inizio del documento =u=prima di ogni altra istruzione==;

similmente, la si può attivare per lo scope limitato di una funzione (e quindi anche le altre funzioni e blocchi di codice eventualmente innestati) applicando la direttiva `"use strict"` all'inizio del corpo della funzione

:::nb
NON è possibile usare la strict mode limitatamente a un solo blocco di codice
:::

:::warn
L'uso di parametri di default NON è ammesso per le funzioni in strict mode
:::

* =u=I **moduli** JavaScript sono in *strict mode* di default==
* =u=Tutte le parti di una **classe** (incluse dichiarazione ed espressioni) sono automaticamente in strict mode==

## Errori Extra

### Variabili non Dichiarate

In *sloppy mode* è possibile dichiarare variabili globali senza keyword `var`, cioè semplicemente con l'operatore di assegnazione; =u=in *strict mode*, qualsiasi assegnazione a una variabile non precedentemente dichiarata risulta in un `ReferenceError`==

:::eg
```javascript
let errore;

eerore = 16; 
// dichiarata come variabile globale

console.log(errore);
// ↪ undefined
console.log(eerore);
// ↪ 16
```
con la strict mode: 
```javascript
"use strict";
let errore;

eerore = 16; 
/* ↪ Uncaught
 * ReferenceError: eerore is not defined */
```
:::

:::nota
Dimenticare di dichiarare esplicitamente la variabile di un costrutto `for...of` ricade in questa casistica:
```javascript
for(item of array) {
    /* item sarà una variabile globale:
     * 1. non verrà distrutta al termine del ciclo;
     * 2. verrà sovrascritta ad ogni iterazione con
     *    l'elemento corrente dell'array,
     * 3. se gli elementi dell'array sono oggetti,
     *    quindi in copia superficiale in item, 
     *    l'ultimo lascerà il proprio riferimento
     *    in copia dentro item, accessibile fuori
     *    dal ciclo 
     * */
}
```
Usando la *strict mode* si evita di incorrere in questo preblema perché viene direttamente lanciato un errore a console e il codice viene ignorato
::: 

### Assegnazioni Mancate

In *sloppy mode* è possibile scrivere assegnazioni a oggetti a cui non si potrebbe, queste operazioni falliscono, ma non danno alcuna indicazione di ciò; in *strict mode* questo genera direttamente un errore `TypeError`:

Generano errore
* assegnare a una proprietà non-sovrascrivibile (con `writable: false`)
* assegnare a una proprietà accessor-only
* assegnare una nuova proprietà su un oggetto non estensibile

### Cancellazioni Fallite

In *sloppy mode* è possibile tentare la cancellazione di proprietà non-configurabili o di sola lettura, ma questo fallirà; in *strict mode* invece verrà generato un errore `typeError`

:::eg
```javascript
delete [].length;
// fallisce in sloppy, TypeError in strict
```
:::

### Nomi di Parametri Duplicati

In *strict mode* i nomi dei parametri alla dichiarazione di una funzione DEVONO essere tutti diversi (in *sloppy* se vengono dichiarati degli omonimi, l'ultimo sovrascrive gli altri)

### Ottali Deprecati

WIP

### Creare Proprietà su Tipi Primitivi

In *strict mode* viene generato un `TypeError` quando si prova a creare una nuova proprietà su un dato primitivo; in *sloppy* questa scrittura viene semplicemente ignorata

### Parametri rest, default o destrutturati

Le funzioni con parametri `...`, di default o destrutturati generano un errore in *strict mode*

## Scope Management

### this

In *strict mode*, `this` non è necessariamente un oggetto, inoltre di default non è l'oggetto globale, ma solo `undefined`

### WIP