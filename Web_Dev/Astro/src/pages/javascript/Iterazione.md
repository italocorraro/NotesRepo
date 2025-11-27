---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Iterazione in JavaScript'
metaTitle: 'Appunti sui loop in JavaScript'
description: 'Appunti e note sulle istruzioni for, while e costrutti iterativi in JavaScript.'
author: 'Italo Corraro'
---

## Ciclo for

```javascript
for (initializer; condition; final-expression) {
  // code to run
}
```
Il ciclo `for` prende tre parametri:
* una **espressione iniziale**: solitamente una variabile inizializzata con `let` a un numero che viene usata come contatore per il ciclo
* una **condizione**: la condizione (dev'essere truthy) che deve essere rispettata per permettere l'inizio di un ciclo del loop
* una **espressione finale**: viene eseguita alla fine di ogni ciclo del loop; solitamente viene usata per aumentare (o diminuire) il contatore del loop

:::eg
```javascript
const numeroIterazioni = 20;
for(let i = 0; i < numeroIterazioni; i++) {
    // codice
}
```
Questo è il tipico uso di un ciclo `for`
:::

:::nb
Anche la prima iterazione del loop deve rispettare la condizione
:::

### Costrutto for...of
WIP
### Costrutto for...in
WIP

## Manipolazione del Loop

### break

L'istruzione `break` termina immediatamente il loop; viene poi eseguito il codice che viene dopo il loop

### continue

L'istruzione `continue` termina l'iterazione corrente e forza il passaggio a quella successiva (viene comunque eseguita l'espressione finale)

## Ciclo while

Il ciclo con `while` prende come argomento solo una condizione; finché questa è verificata, viene eseguita una iterazione del relativo blocco di codice

```javascript
while (condition) {
  // code to run
}
```

Questo tipo di ciclo è tipicamente usato quando il *contatore* è già stato inizializzato precedentemente

:::nb
All'interno del blocco di codice da eseguire DEVE essere presente un'istruzione che modifichi un parametro della condizione per permettere al loop di concludersi, altrimenti continuerà all'infinito

La modifica non deve necessariamente avvenire alla fine del blocco similmente a come avviene con l'espressione finale del `for`
:::

:::eg
```javascript
let parola = 'parola';
const lettere = [];
while(parola) {
    // while verifica se parola è truthy
    lettere.push(parola);
    // memorizziamo la parola
    const trimmed = parola.slice(0, parola.length - 1)
    parola = trimmed;
    // togliamo l'ultima lettera
    console.log(lettere);
}
/* Quando parola diventa una stringa vuota (''),
 * viene riconosciuta come falsy e il ciclo termina */
console.log(lettere.join(' '));
// ↪ 'parola parol paro par pa p'
```
:::

### do...while

```javascript
do {
  // code to run

  final-expression
} while (condition);
```

Il ciclo `do...while` funziona esattamente come un `while`, solo che il blocco di codice da iterare è eseguito almeno una volta a prescindere dalla condizione da rispettare

