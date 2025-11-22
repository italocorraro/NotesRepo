---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Appunti Array di JavaScript'
description: 'Appunti e note sugli array in JavaScript.'
author: 'Italo Corraro'
---
## Indice

## Definizione di Array

Un array è un tipo di oggetto il cui scopo principale è di raccogliere ordinatamente una serie di dati (l'indicizzazione degli elementi parte da `0`); gli array vengono dichiarati racchiudendo i loro elementi dentro parentesi quadre

* gli array di JavaScript sono tipicamente memorizzati (come riferimento) in una costante (con `const`); inoltre 
* sono indicizzati, cioè ciascun elemento è riconosciuto nell'ordine dell'array con un indice che parte da 0,
* sono **dinamici**, cioè non hanno una dimesione fissa e si possono aggiungere o rimuovere elementi in qualsiasi momento, 
* sono **eterogenei**, cioè è consentito riempirli con elementi di qualsiasi tipo (inclusi altri array, oggetti, ecc...)

---

:::eg
```javascript
// Creazione array:
const macchine = [
    'Volvo', 
    'Ferrari',
    23,
    `questo array non
    deve avere senso`,
]

// Possiamo accedere agli elementi con il loro indice:
console.log(macchine[1]);
// Restituisce 'Ferrari'

// Possiamo aggiungere elementi:
macchine[4] = 'BMW';
console.log(macchine[4]);
// Restituisce 'BMW'

// Possiamo sostituire elementi:
macchine[1] = 23;
console.log(macchine[1]);
// Restituisce '23'

// Possiamo trovare la lunghezza dell'array:
console.log(macchine.length);
// Restituisce '5'

// Possiamo creare un array multidimensionale:
macchine[2] = [0, 1, 2];
console.log(macchine[2][2]);
// Restituisce '2'

// Possiamo convertirlo in una stringa:
console.log(macchine.toString());
// Restituisce:
/* Volvo,23,0,1,2,questo array non
    deve avere senso,BMW */
```
:::

:::warn
Un array resta un oggetto, cioè `typeof` restituirà `object` se usato con un array;

il metodo corretto per verificare se una variabile è un array è passandola per argomento a `Array.isArray()`, oppure con l'espressione `array instanceof Array`, che verifica se `array` è un'istanza dell'oggetto globale `Array`, cioè l'oggetto a cui tutti gli array fanno capo
:::

## Metodi per Array

Darsi fuoco YEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE 

<script>
    
</script>