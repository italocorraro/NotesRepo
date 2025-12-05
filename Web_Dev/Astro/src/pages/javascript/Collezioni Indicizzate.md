---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Collezioni Indicizzate in JavaScript'
metaTitle: 'Appunti sullle collezioni indicizzate in JavaScript'
description: 'Appunti e note sulle collezioni indicizzate per chiavi, quali Map e Set in JavaScript.'
author: 'Italo Corraro'
---

## Le Istanze di Map

Un'istanza dell'oggetto `Map` è una coppia *chiave-valore* indicizzata per ordine di inserimento.

:::nota
Le istanze di `Map` sono iterabili, usano quindi il costrutto `for...of` invece che `for...in`; l'uso permette di passare un array come recipiente per l'elemento corrente della mappa per decostruire la coppia *chiave-valore*:
```js
for (const [chiave, valore] of mappa) {
  console.log(`${chiave} : ${valore}`);
}
```
:::

## Le Istanze di Set

Le istanze dell'oggetto `Set` sono collezioni di elementi unici indicizzati per ordine di inserimento; la particolarità di un set è che *i suoi elementi non possono ripetersi al suo interno*