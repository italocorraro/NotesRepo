---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Overview di TypeScript'
metaTitle: 'Appunti iniziali su TypeScript'
description: 'Appunti e note sulle informazioni generali di TypeScript.'
author: 'Italo Corraro'
---

## Cos'è TypeScript

**TypeScript** è un linguaggio di programmazione basato su JavaScript; 
* TypeScript aggiunge sintassi per la ***tipizzazione statica dei dati***
* TypeScript *compila in JavaScript*, ma tutto quello che può essere scritto in JavaScript può essere scritto in JavaScript
* TypeScript permette di dichiarare la forma delle strutture dati


```typescript
let name: string = 'correct';
let number: string = 2;
// ERROR: Type 'number' is not assignable to type 'string'.

function somma(a: number, b: number): number {
    return a + b;
}
```

