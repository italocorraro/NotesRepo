---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Stringhe in JavaScript'
metaTitle: 'Appunti sulle stringhe in JavaScript'
description: 'Appunti e note sulle stringhe in JavaScript.'
author: 'Italo Corraro'
---

## Stringhe

* le stringhe sono qualunque serie di caratteri racchiusi tra due `"`, `'` o <code>`</code>, 
* gli apici/virgolette di chiusura devono essere gli stessi di quelli di apertura,
* le virgolette/apici usati per delimitare la stringa NON possono essere usati al suo interno, ma si possono usari gli altri tipi liberamente
* le stringhe delimitate da <code>`</code> (detto *accento greve*) sono dette *stringhe interpolate* (*template literals*) poiché consentono interpolazione, cioè si possono inserire espressioni JavaScript il cui risultato viene poi convertito a stringa e concatenato al resto
* i caratteri delle stringhe hanno 16 bit (UTF-16)
* i caratteri delle stringhe sono indicizzati
* il carattere `\` serve a digitare caratteri speciali
:::eg
```javascript 
const nome = "Chris";
const saluto = `Ciao, ${name}`;
console.log(saluto); // "Ciao, Chris"
```
:::
* le stringhe delimitate da `'` e `"` non rispettano gli a capo e necessitano del carattere `\n` per quello; le stringhe interpolate invece rispettano la scrittura della stringa così come viene data

## Oggetto Sting