---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Array in Java'
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 3
---

## Array in C

L'array del linguaggio C non è una vera entità a sè stante; il puntatore che indica l'array, in realtà, punta semplicemente al suo primo elemento:
- la lunghezza non è nota a priori
- passare un array come parametro richiede il passaggio del puntatore alla prima cella e della lunghezza dell'array se allocato in modo statico
- la copia deve essere svolta manualmente per ogni suo elemento

Il modo per unificare l'array in un'unica entità che identifichi l'array nel suo intero è quello di chiuderlo in una `struct`.

## Array in Java

Gli array in Java sono implementati tramite una classe:
- l'array è un'entità identificata dal suo riferimento e non dal puntatore al suo primo elemento
- ha proprietà accessibili anche quando passato come argomento (*l'array sa quanto è lungo*)
- si uniforma al resto del linguaggio (non è un tipo a-parte tra primitivi e classi)

Gli array in Java sono oggetti di una classe denotata da `[]` (non si chiama "Array"); un array di interi sarà quindi `int[]` ad esempio.

In quanto oggetti, per costruire un array, serve usare la keyword `new`, inoltre serve passare la lunghezza, ma, invece che passarla tra parentesi tonde (come per un qualsiasi argomento da passare a un costruttore), la lunghezza viene indicata tra le parentesi quadre (una peculiarità che hanno gli array rispetto agli altri oggetti):
`int[] v = new int[4];` invece di `int[] v = new int[](4)`.

:::nb
Le dimensioni dell'array sono stabilite al momento dell'inizializzazione dell'oggetto e rimangono statiche.

Gli elementi dell'array non sono inizializzati assieme all'array, sono però fatte le dichiarazioni iniziali di tipo.
:::

Un array di oggetti conterrà (un volta costruito) dei riferimenti non inizializzati; ciascun oggetto va' inizializzato:

```java
Counter[] v = new Counter[3];
/* I riferimenti per gli elementi dell'array
 * sono creati alla sua costruzione, ma
 * dobbiamo ancora inizializzare gli oggetti: */
v[0] = new Counter(3);
/* non è necessario inizializzare un nuovo oggetto
 * per inserirlo nell'arrary: */
Counter temp = new Counter(7);
v[1] = temp;
// v[1] e temp puntano allo stesso Counter
```

Ogni array ha una proprietà *read-only* `length` che restituisce la lunghezza dell'array.

:::oss
In Java (e C#) è ammesso dichiarare l'array e poi effettivamente inizializzarlo; in Scala e Kotlin gli array vanno inizializzati contestualmente alla creazione
:::

### forEach

La versione di Java del concetto di "scorrere ogni elemento di un array" è un costrutto for:

```java
int[] v = new int[5];
// scorre ogni elemento dell'array:
for(int x : v) {/*  */}
```

In generale: 
```java
for(type variable : arrayname) {/*  */}
```
:::nb
Il costrutto appena introdotto memorizza progressivamente l'attuale elemento dell'array su cui operare in una variabile temporanea; questa variabile conterrà il riferimento (o una copia del valore del primitivo) dell'elemento, quindi non è possibile ri-assegnare gli elementi dell'array con questo costrutto, ma è necessario un ciclo for standar per avere accesso diretto agli elementi dell'array
:::

:::nota
Il costrutto di iterazione con for può essere usato con ogni oggetto "iterabile", che è una proprietà stabilita dalle specifiche
:::

### Inizializzazione Rapida

Possiamo inizializzare gli elementi di un array in modo rapido chiudendo i valori degli elementi all'interno di parentesi graffe:

```java
String[] mesi = new String[]{"gennaio","febbraio"};
// oppure, più breve ancora:
String[] mesi = {"gennaio","febbraio"};
```

Le dimensioni dell'array non vanno specificate; sono ricavate dal compilatore sulla base della quantità di elementi inizializzati.

## Funzioni Utility

In Java, le funzioni dedicate agli array si trovano in una libreria accessoria `java.util.Arrays`:

Funzione | Descrizione
--- | ---
`compare(array1, array2)` | confronto lessicografico; restituisce 0 se sono uguali, un int > 0 se array1 > array2 o un int < 0 altrimenti
`equals(array1, array2)` | restituisce `true` se i due array hanno gli stessi elementi nello stesso ordine (il confronto è fatto solo al primo livello di profondità)
`deepEquals(array1, array2)` | restituisce `true` se i due array sono uguali tra loro a tutti i livelli di profondità
`fill(array, value)` | riempie l'array con il valore specificato
`fill(array, start, end, value)` | riempie l'array con il valore specificato a partire dall'indice specificato (incluso) fino al secondo indice (escluso)
`mismatch(array1, array2)` | restituisce l'indice del primo elemento dell'array1 che non è uguale a quello dell'array2
`copyOf(array, length)` | restituisce una copia dell'array con la lunghezza indicata
`sort(array)` | riordina gli elementi dell'array in base agli elementi stessi
`binarySearch(array, searchEl)` | cerca un valore nell'array (DEVE ESSERE ORDINATO); restituisce l'indice a cui lo trova OPPURE, se non lo trova, restituisce un intero negativo che indica l'indice a cui (secondo l'ordine dell'array) si sarebbe dovuto trovare l'elemento cercato ridotto di 1 unità

## Array Multidimensionali

In Java è ammesso, come in tutti gli altri linguaggi, di creare un array di array (di array di array ....), cioè una matrice.

Un array multidimensionale è un array i cui elementi sono a loro volta array; di base, il concetto di matrice (o array multidimensionale) non esiste in Java.

### Costruire una Matrice

Per costruire una matrice bidimensionale, possiamo svolgere due passaggi:

```java
// Dichiarazione:
double[][] m;
// Array esterno:
m = new double[3][];
// Array interni:
m[0] = new double[5];
m[1] = new double[5];
m[2] = new double[5];
```

:::oss
Non c'è alcun vincolo a costruire gli array interni della stessa lunghezza
:::

Alternativamente, possiamo costruirla in un singolo passaggio, ma gli array interni dovranno avere tutti la stessa lunghezza

```java
double[][] m = new double[3][5];
```

:::nota
L'array multidimensionale non è conscio di essere multidimensionale, infatti, chiedere la lunghezza all'array significa chiedere quella dell'array più esterno; per ottenere quella degli array interni bisogna chiederla a ciascuno.
:::

Possiamo costruire rapidamente una matrice conoscendone gli elementi: 

```java
int[][] eg = { {3, 4}, {2, 8} };
```

Questo genera una matrice quadrata