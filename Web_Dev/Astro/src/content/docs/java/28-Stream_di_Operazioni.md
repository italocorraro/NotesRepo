---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Stream di Operazioni'
metaTitle: 'Stream di Operazioni'
description: ''
author: 'Italo Corraro'
order: 28
---

Il concetto di `stream` implementa il paradigma dichiarativo.

Uno stream permette di specificare una trasformazione invece che un insieme di procedure imperative.

Per creare uno stream si usa 
- il costruttore fabbrica di classe: `Stream.of(array)`
- il metodo `stream()`, invocabile dalle collezioni

## Approccio Dichiarativo

L'approccio con stream prevede 
1. (`.stream()`) creare uno stream di elementi da una collezione,
2. (`.filter(Predicate)`) filtrare gli elementi
3. (`.map(Function)` o `mapToObj(Function)` per i tipi primitivi) mappare gli elementi filtrati
4. (`.collect(Collectors.toCollection(Collection::new))`) raccogliere i risultati nella giusta collezione

```java
SomeCollection<SomeType> cl = collection.stream()
        .filter( el -> checkStuff(el) )
        .map( el -> mutateStuff(el) )
        .collect(
            Collectors.toCollection(
                SomeCollection::new
            )
        );
```

:::oss
L'approccio imperativo è invece
1. creare una collezione dove inserire i risultati
2. aprire un ciclo `for` di elementi di una collezione,
3. `if` condizione per ogni elemento
4. operare sugli elementi che passano la condizione
4. aggiungere i risultati alla collezione creata all'inizio
:::

È anche possibile costruire con `toList`, `toMap`, `toSet`...

:::oss
Nel `toMap` è utile sapere che si può restituire l'intero elemento dello strem con `Function.identity()`:
```java
st.collect(
    Collectors.toMap(
        Class::getId,
        Function.identity()
    )
);
```
:::

### Peek

È possibile sdoppiare lo stream (cioè ricevere automaticamente lo stream originale come ritorno) con `peek`
:::eg
```java
st.peek( e -> System.out.println("Processing " + e))
        .map(/*  */);
```
:::

### Reduce

```java
stream.reduce(0, (res,v) -> res + v);
```
Dove:
- `0` è un elemento arbitrario di partenza per l'operazione (valore di inizializzazione di `res`)
- `res` è la variabile risultato che viene aggiornata con il risultato della lambda
- `v` è l'elemento dello stream

### Flat Map

<!--  -->