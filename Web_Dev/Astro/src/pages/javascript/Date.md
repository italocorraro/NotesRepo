---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Date in JavaScript'
metaTitle: 'Appunti sul controllo di flusso in JavaScript'
description: 'Appunti e note sulla controllo del flusso delle istruzioni in JavaScript.'
author: 'Italo Corraro'
---

## Oggetto Date

L'oggetto `Date` permettono di lavorare con date e misure di tempo in JavaScript

Chiamare l'oggetto `Date()` restituisce direttamente la data attuale letta dal browser: <p><span class="current-date"></span><span class="current-date"></span></p>
```javascript
setInterval(() => {
        nowTarget.textContent = `${Date()}`;
    }, 1000);
```
<script>
    const nowTarget = document.querySelectorAll('.current-date');
    [ nowTarget[0].textContent, nowTarget[1].textContent ] = `${Date()}`.split('(');
    setInterval(() => {
        [ nowTarget[0].textContent, nowTarget[1].textContent ] = `${Date()}`.split('(');
    }, 1000);
</script>
<style>
    .current-date {
        font-family: monospace;
        display: block;
        font-size: 120%;
    }
    .current-date + .current-date::before {
        content: '(';
    }
</style>

Le date vengono registrate da JavaScript come la quantità di millisecondi passati a partire dal 1° Gennaio 1970, UTC; questa data è detta `epoch`.

L'oggetto `Date` ha un intervallo di millisecondi massimi dall'`epoch` leggermente inferiore all'intero massimo rappresentabile di JavaScript, cioè 
* in millisecondi: $\pm8,64\cdot10^{15}$, 
* in giorni: $\pm10^8$,
* in anni: $\pm274.000$.

## Istanza di Date

È possibile creare una nuova istanza dell'oggetto `Date` con la keyword `new` e passargli un array di parametri
<span id='christ' class='current-date'></span>
```js
target.textContent = `${new Date('1995, 12, 25')}`;
```
<script>
    const chris = document.getElementById('christ');
    chris.textContent = `${new Date('1995, 12, 25')}`;
</script>