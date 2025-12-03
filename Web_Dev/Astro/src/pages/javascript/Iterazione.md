---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Iterazione in JavaScript'
metaTitle: 'Appunti sui loop in JavaScript'
description: 'Appunti e note sulle istruzioni for, while e costrutti iterativi in JavaScript.'
author: 'Italo Corraro'
---

## Ciclo for

```javascript
for (espressione_iniziale; condizione; espressione_finale) {
  /* codice da eseguire
   * ad ogni iterazione */
}
```

Il ciclo **`for`** prende tre parametri:
* una **espressione iniziale**: solitamente una variabile inizializzata con `let` a un numero che viene usata come contatore per il ciclo
* una **condizione**: la condizione (*dev'essere truthy*) che deve essere rispettata per permettere l'inizio di un ciclo del loop; *se la condizione non viene rispettata, il ciclo si interrompe*
* una **espressione finale**: viene eseguita alla fine di ogni ciclo del loop; solitamente viene usata per aumentare (o diminuire) il contatore del loop

:::eg
```javascript
const numeroIterazioni = 20;
for(let i = 0; i < numeroIterazioni; i++) {
    // codice per iterazione
}
```
Questo è il tipico uso di un ciclo `for`;

Uno più concreto:

```javascript
const arrayDiZeri = [];
const lunghezza = 7;
// Riempiamo l'array con 7 zeri:
for(let i = 0; i < lunghezza; i++) {
  arrayDiZeri[i] = 0;
}
console.log(arrayDiZeri);
// ↪ '[0, 0, 0, 0, 0, 0, 0]'
```
:::

:::nb
Anche la prima iterazione del loop deve rispettare la condizione per essere eseguita; \
se non viene rispettata per la prima condizione, allora il ciclo termina senza eseguire nient'altro che l'espressione iniziale (il cui scope è limitato all'esecuzione del ciclo) e la prima verifica della condizione, quindi il codice del blocco non viene eseguito nemmeno una volta
:::

:::oss
Possiamo inserire più espressioni iniziali e finali separandole tra loro con una virgola, inoltre possiamo usare degli operatori logici per offrire una condizione più complessa:
:::eg
```javascript
let j;
for(let i = 0, j = 10; i < 10 && j > 0; i++, j--) {
    console.log(`i: ${i}; j: ${j}`);
}
/* ↪ i: 0; j: 10
 * ↪ i: 1; j: 9
 * ↪ i: 2; j: 8
 * ↪ i: 3; j: 7
 * ↪ i: 4; j: 6
 * ↪ i: 5; j: 5
 * ↪ i: 6; j: 4
 * ↪ i: 7; j: 3
 * ↪ i: 8; j: 2
 * ↪ i: 9; j: 1
```
:::nb
Possiamo dichiarare solo 1 variabile nella espressione iniziale
:::

### Costrutto for...in

Il costrutto `for..in` permette di iterare attraverso le proprietà di un oggetto *enumerabile*; per ciascuna proprietà viene eseguito il blocco di codice dell'iterazione

```javascript
for(const prop in object) {
  // Codice da iterare su ogni prop
}
```

Più nel dettaglio nella <a href="../Oggetti/#scorrere-un-oggetto" title='scorrere un oggetto'>sezione dedicata agli oggetti</a>.

### Costrutto for...of

Il costrutto `for..in` permette di iterare attraverso gli elementi di un oggetto *iterabile* (`Array`, `Map`, `Set`, `arguments`, `NodeList` ecc...); per ciascun elemento viene eseguito il blocco di codice dell'iterazione

```javascript
for(const item in iterable) {
  // Codice da iterare su ogni item
}
```

Più nel dettaglio nella <a href="../Array/#forof" title='scorrere un array'>sezione dedicata agli array</a> (l'uso è uguale per tutti gli iterabli).


## Ciclo while

Il ciclo con **`while`** prende come argomento solo una condizione; finché questa è verificata, viene eseguita una iterazione del relativo blocco di codice

```javascript
while (condizione) {
  /* codice da eseguire
   * ad ogni iterazione */
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
  /* codice da eseguire
   * ad ogni iterazione
   * (la prima è forzata) */ 

  final-expression
} while (condition);
```

Il ciclo `do...while` funziona esattamente come un `while`, solo che il blocco di codice da iterare è eseguito almeno una volta a prescindere dalla condizione da rispettare

## Manipolazione del Loop

### break

L'istruzione `break` termina immediatamente il loop corrente; viene poi eseguito il codice che viene dopo il loop

### continue

L'istruzione `continue` termina l'iterazione corrente e forza il passaggio a quella successiva del loop corrente (viene comunque eseguita l'espressione finale)

### label

L'istruzione `label` permette di dichiare un identificatore per una porzione di codice; in questo modo ci si può riferire a quel codice con altre istruzioni:

```javascript
let x = 0;
let y = 0;

labelCancelOuter: while(true) {
  console.log('Outer Loop at ' + x++);
  while(true) {
    console.log('Inner Loop at ' + y++);
    if (x === 10 && y % 10 === 0) break labelCancelOuter;
    if (y % 10 === 0) break;
  }
}
```

Qui abbiamo assegnato la label `labelCancelOuter` al `while` esterno ed abbiamo gestito la fine del ciclo con `break` dal loop interno
