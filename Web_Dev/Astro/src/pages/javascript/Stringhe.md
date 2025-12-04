---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Stringhe in JavaScript'
metaTitle: 'Appunti sulle stringhe in JavaScript'
description: 'Appunti e note sulle stringhe in JavaScript.'
author: 'Italo Corraro'
---

## Stringhe

* le stringhe sono qualunque serie di caratteri racchiusi tra due `"`, `'` o `` ` ``, 
* gli apici/virgolette di chiusura devono essere gli stessi di quelli di apertura,
* le virgolette/apici usati per delimitare la stringa NON possono essere usati al suo interno, ma si possono usari gli altri tipi liberamente
* le stringhe delimitate da `` ' `` (detto *accento greve*) sono dette *stringhe interpolate* (*template literals*) poiché consentono interpolazione, cioè si possono inserire espressioni JavaScript il cui risultato viene poi convertito a stringa e concatenato al resto (le espressioni JS vanno inserite `${/* qui */}`)
:::eg
```javascript 
const nome = "Chris";

// Stringa interpolata:
const saluto = `Ciao, ${name}`;
console.log(saluto); // "Ciao, Chris"
```
:::

* i caratteri delle stringhe hanno 16 bit (UTF-16)
* i caratteri delle stringhe sono indicizzati
* il carattere `\` serve a digitare caratteri speciali
* le stringhe delimitate da `'` e `"` non rispettano gli a capo e necessitano del carattere `\n` per quello; le stringhe interpolate invece rispettano la scrittura della stringa così come viene data

## Oggetto String

L'oggetto `String` è il wrapper object per i tipi stringa; le stringhe ereditano diversi metodi da questo oggetto, ad esempio `length` per ottenere la lunghezza della stringa.

### Ricerca nella Stringa

| Metodo | Argomento/i | Descrizione |
| --- | --- | --- |
| `at(i)` | indice intero | Restituisce il carattere collocato all'indice `i` della stringa (percorsa al contrario per valori negativi) |
| `indexOf(str)` | stringa | Restituisce l'indice della prima ricorrenza della stringa esatta passata per argomento nella stringa su cui è chiamato il metodo |
| `lastIndexOf(str)` | stringa | Restituisce l'indice dell'ultima ricorrenza della stringa esatta passata per argomento nella stringa su cui è chiamato il metodo |
| `startsWith(str)`, `endsWith(str)` | stringa | Restituisce `true` o `false` in base a se la stringa su cui è chiamato il metodo inizia/finisce esattamente con la stringa passata per argomento |
| `includes(str)` | stringa | Restituisce `true` o `false` in base a se la stringa su cui è chiamato il metodo contiene la stringa esatta passata per argomento |

:::eg
```javascript
const strig = 'Quel vituperabile xenofobo zelante';
```
Metodo `at()`:
```js
console.log(strig.at(5));
// ↪ 'v'
console.log(strig.at(-1));
// ↪ 'e'
```
Metodi `indexOf()` e `lastIndexOf()`:
```js
console.log(strig.indexOf('el'));
// ↪ 2
console.log(strig.lastIndexOf('el'));
// ↪ 28
console.log(strig.lastIndexOf('El'));
// ↪ -1 (non trovata)
```
Metodo `startsWith()` e `endsWith()`:
```js
console.log(strig.startsWith('Quel'));
// ↪ true
console.log(strig.endsWith('Quel'));
// ↪ false
console.log(strig.startsWith('quel'));
// ↪ false
```
Metodo `includes()`:
```js
console.log(strig.includes('el vi'));
// ↪ true
console.log(strig.includes('elvi'));
// ↪ false
console.log(strig.includes('el Vi'));
// ↪ false
```
:::

### Composizione di Stringhe

| Metodo | Argomento/i | Descrizione |
| --- | --- | --- |
| `padStart(lgth, str)`, `padEnd(lgth, str)` | numero intero e stringa | Restituisce una stringa partendo da quella su cui è applicato il metodo a cui aggiunge la stringa-argomento all'inizio/fine (troncata o ripetuta a necessità) fino a raggiungere la lunghezza indicata |
| `concat()` | lista di stringhe separate da virgola | Restituisce una stringa ottenuta concatenando la stringa inziale con tutte le stringhe-argomento |
| `repeat()` | numero | Restituisce una stringa ottenuta ripetendo la stringa iniziale il numero di volte indicato |

:::eg
```javascript
const strig = 'Quel vituperabile xenofobo zelante';
```
Metodi `padStart()` e `padEnd()`:
```js
console.log(strig.padStart(strig.length + 4, 'Non '));
// ↪ 'Non Quel vituperabile xenofobo zelante'
console.log(strig.padStart(strig.length - 4, 'Non '));
// ↪ 'Quel vituperabile xenofobo zelante'
/* non viene aggiunto nulla perché la lunghezza 
 * richiesta è già raggiunta e superata 
 * dalla stringa di partenza */
console.log(strig.padEnd(strig.length + 1, 'Assaggia'));
// ↪ 'Quel vituperabile xenofobo zelanteA'
console.log(strig.padEnd(strig.length + 3, 'A'));
// ↪ 'Quel vituperabile xenofobo zelanteAAA'
```
Metodi `concat()` e `repeat()`:
```js
console.log('Hello'.concat(' ', 'darkness'));
// ↪ 'Hello darkness'
console.log('Hello'.repeat(4));
// ↪ 'HelloHelloHelloHello'
```
:::

### Decomposizione di Stringhe

| Metodo | Argomento/i | Descrizione |
| --- | --- | --- |
| `split()` | separatore-stringa e limite-numero(facoltativo) | Restituisce un array di stringhe ottenute spezzando quella originale in tutti i punti in cui trova il separatore |
| `slice()` | fino a 2 numeri (almeno 1) | Restituisce una sotto-stringa estratta dall'originale tra gli indici forniti per argomento (il primo incluso, secondo escluso; inoltre, se il secondo non è indicato allora si estrae fino a fine stringa) |
| `substring()` | fino a 2 numeri positivi (almeno 1) | Restituisce una sotto-stringa estratta dall'originale tra gli indici forniti per argomento (il primo incluso, secondo escluso; inoltre, se il secondo non è indicato allora si estrae fino a fine stringa) |
| `trim()`, `trimStart()`, `trimEnd()` | nessuno | Restituisce la stringa iniziale privata degli spazi vuoti da (inizio e fine)/inizio/fine stringa |

:::eg
```javascript
const strig = 'Quel vituperabile xenofobo zelante';
```
Metodo `split()`:
```js
console.log(strig.split(' '));
// ↪ ['Quel', 'vituperabile', 'xenofobo', 'zelante']
console.log(strig.split('e',4));
// ↪ ['Qu', 'l vitup', 'rabil', ' x']
console.log(strig.split('e'));
// ↪ ['Qu', 'l vitup', 'rabil', ' x', 'nofobo z', 'lant', '']
```
Metodi `slice()` e `substring()`:
```js
console.log(strig.slice(5,13));
// ↪ 'vitupera'
console.log(strig.slice(-7,-1));
// ↪ 'zelant'
console.log(strig.substring(5,13));
// ↪ 'vitupera'
console.log(strig.substring(-7,-1));
// ↪ ''
```
Metodi `trim()`, `trimStart()` e `trimEnd()`:
```javascript
const stug = '     certo   che    è    vuoto   ';
console.log(stug.trim());
// ↪ 'certo   che    è    vuoto'
console.log(stug.trimStart());
// ↪ 'certo   che    è    vuoto   '
console.log(stug.trimEnd());
// ↪ '     certo   che    è    vuoto'
```
:::

### Trasformazione di Stringhe

| Metodo | Argomento/i | Descrizione |
| --- | --- | --- |
| `toLowerCase()`, `toUpperCase()` | nessuno | Restituisce la stringa iniziale convertita in lettere minuscole/maiuscole |
| `normalize()` | nessuno/forma di normalizzazione | Restituisce la versione della stringa iniziale con caratteri unicode normalizzati secondo la forma indicata (NFC se non specificata) |

:::eg
```javascript
const strig = 'Quel vituperabile xenofobo zelante';

console.log(strig.toLowerCase());
// ↪ 'quel vituperabile xenofobo zelante'
console.log(strig.toUpperCase());
// ↪ 'QUEL VITUPERABILE XENOFOBO ZELANTE'
console.log('\u0041\u006d\u00e9\u006ci\u0065'.normalize());
// ↪ 'Amélie'
```
:::

### Stringhe a Numeri

| Metodo | Argomento/i | Descrizione |
| --- | --- | --- |
| `Number.parseInt(x, base)` | stringa/numero e base numerica | Restituisce un intero ottenuto convertendo il numero/stringa nella base passata per argomento |
| `Number.parseFloat(x)` | stringa/numero | Restituisce un numero in virgola mobile ottenuto convertendo il numero/stringa-argomento |
