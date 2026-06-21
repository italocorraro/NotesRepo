---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Confronto in Java'
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 16
---

La confrontabilità è una proprietà essenziale ma non strettamente necessaria per molti oggetti e non deve essere necessariamente relegata a un `equals`, ma piuttosto una relazione d'ordine.

## Comparable

L'interfaccia standard per implementare una classe con metodo `compareTo` è **`Comparable<T>`** ed è prassi strutturarla per restituire `+1` se l'oggetto che chiama il metodo è "maggiore" dell'instanza passata per argomento, `-1` se è "minore" o `0` se sono "uguali" (coerentemente con `equals`).

Il metodo `sort` di `Arrays` usa il metodo `compareTo` degli array per ordinarli.

## Comparator

Un comparatore è una classe che implementa l'interfaccia `Comparator<T>` e ha il metodo `compare(T a, T b)`; difatti è l'alternativa a implementare la comparabilità sull'oggetto.