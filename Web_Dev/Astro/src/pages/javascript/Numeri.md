---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Numeri in JavaScript'
metaTitle: 'Appunti sui Numeri in JavaScript'
description: 'Appunti e note sui dati numerici in JavaScript.'
author: 'Italo Corraro'
---

## Numeri

In JavaScript i numeri sono trattati tutti come floating point a 64 bit; non ci sono degli interi, ma non vengono mostrati decimali non necessari se non specificato.

* gli interi sono limitati a 15 caratteri, oltre questo numero avviene overflow
* l'aritmetica con i numeri a virgola mobile non è precisa al 100%

Inoltre 

* I numeri preceduti da `0b` sono interpretati come binari
* I numeri preceduti da `0o` sono interpretati come ottali
* I numeri preceduti da `0x` sono interpretati come esadecimali
* I numeri preceduti da `0` (non con virgola) sono (a volte) interpretati come ottali

---

:::nota
JavaScript accetta la notazione esponenziale per i Number:
```javascript
let x = 834e5 // = 83400000
```
il numero dopo `e` indica l'indice della potenza di 10 per cui è moltiplicato il numero alla sinistra
:::

L'oggetto `Number` può essere usato per convertire in 'number' i valori passati per argomento; se il valore non è convertibile in numero, allora l'operazione restituisce `NaN` (_not a number_), che è una proprietà dell'oggetto globale

:::warn
`typeof NaN` restituisce `number`!
:::

`Infinity` e `-Infinity` sono numeri e raccolgono qualsiasi valore fuori dai limiti

:::warn
`typeof Infinity` restituisce `number`!

Inoltre, dividere per 0 un numero restituisce `Infinity` (con segno)
:::

:::nota
`NaN`, `Infinity` e `-Infinity` sono tre valori simbolici speciali del tipo Number
:::

:::nota
È possibile usare il separatore `_` tra le cifre di un Number e BigInt; questo verrà ignorato per la lettura del numero da parte dell'interprete, ma lo renderà più leggibile per i lettori del codice
:::

## Oggetto Number

L'oggetto `Number` possiede alcune utili proprietà di sola lettura:

:::eg
```javascript
const biggestNum = Number.MAX_VALUE;
// 1.7976931348623157e+308
const smallestNum = Number.MIN_VALUE;
// 
const negInfiniteNum = Number.NEGATIVE_INFINITY;
// -Infinity
const notANum = Number.NaN;
// NaN
```
:::

### Proprietà di Number

| Proprietà | Valore | Descrizione |
| --- | --- | --- |
| `MAX_VALUE` | `1.7976931348623157e+308` | Valore massimo rappresentabile |
| `MIN_VALUE` | `5e-324` | Valore minimo rappresentabile | 
| `POSITIVE_INFINITY` | `+Infinity` | Valore speciale per infinito |
| `NEGATIVE_INFINITY` | `-Infinity` | Valore speciale per -infinito |
| `NaN` | `NaN` | Valore speciale per un non-numero |
| `EPSILON` | `2.220446049250313e-16` | Differenza tra `1` e il valore minimo rappresentabile maggiore di `1` |
| `MIN_SAFE_INTEGER` | `-9007199254740991` | Valore intero minimo SICURO rappresentabile in JS ($−2^{53} + 1$) |
| `MAX_SAFE_INTEGER` | `+9007199254740991` | Valore intero massimo SICURO rappresentabile in JS ($+2^{53} - 1$) |

### Metodi di Number

| Metodo | Argomento/i | Descrizione |
| --- | --- | --- |
| `parseFloat(str)` | `string` | Converte la stringa in un numero a virgola mobile |
| `parseInt(st, base)` | `string`, `number` | Converte la stringa in un intero secondo la base di conversione |
| `isFinite(num)` | `any` | Restituisce `true` se l'argomento è un numero finito (non simbolo speciale) |
| `isInteger(num)` | `any` | Restituisce `true` se l'argomento è un numero intero (non simbolo) |
| `isNaN` | `any` | Restituisce `true` se l'argomento passato è `NaN` |
| `isSafeInteger()` | `any` | Restituisce `true` se l'argomento è un numero intero compreso tra $−2^{53} + 1$ e $+2^{53} - 1$ |

### Metodi Disponibili ai Tipi Number

Questi sono metodi ereditati da tutti i tipi Number

| Metodo | Argomento/i | Descrizione |
| --- | --- | --- |
| `toExponential()` | cifre decimali | Restituisce il valore come una stringa in notazione esponenziale con il numero di cifre decimali indicato |
| `toFixed()` | cifre decimali | Restituisce il valore come una stringa con il numero di cifre decimali indicato (con arrotondamento) | 
| `toPrecision()` | cifre significative | Restituisce il valore come una stringa composta dal numero indicato di cifre significative |

:::eg
```javascript
let no = 714.729748;
console.log(no.toExponential(2));
// ↪ '7.15e+2'
console.log(no.toFixed(2));
// ↪ '714.73'
console.log(no.toPrecision(4));
// ↪ 714.7
```
:::

### Metodi dell'Oggetto Math

| Metodo | Argomento/i | Valore Restituito |
| --- | --- | --- |
| `abs(x)` | numero | Valore assoluto |
| `sin(θ)`, `cos(θ)`, `tan(θ)`, `sinh(θ)`, `cosh(θ)`, `tanh(θ)` | angolo | Uscita di funzione trigonometrica/iperbolica |
| `asin(x)`, `acos(x)`, `atan(x)`, `atan2(x)`, `asinh(x)`, `acosh(x)`, `atanh(x)` | non-angolo| Uscita di funzione trigonometrica/iperbolica inversa |
| `pow(x, a)` | due numeri | Potenza del primo elevato per il secondo ($x^a$) |
| `exp(x)` | numero | Potenza di `e` elevato per il numero ($e^x$)|
| `expm1(x)` | numero | Potenza di `e` elevato per il numero ridotta di 1 ($e^x-1$) |
| `log(x)`, `log10(x)` | tua-madre | Logaritmo in base e o 10 del numero ($\ln\left(x\right)$ o $\log\left(x\right)$) |
| `random()` | nessuno | Numero random tra 0 e 1 |
| `min(a, b, ..., z)`, `max(a, b, ..., z)` | numeri separati da virgola | Valore minimo/massimo della lista |
| `floor(x)`, `ceil(x)` | numero | Valore arrotondato per difetto/eccesso |
| `round(x)` | numero | Valore arrotondato all'intero più vicino 
| `sign(x)` | numero/stringa | +1 o -1 in base al segno |
| `sqrt(x)` | numero | Radice quadrata del numero |
| `cbrt(x)` | numero | Radice cubica del numero |
| `hypot(b, c)` | due numeri | Radice quadrata della somma dei quadrati dei numeri ($b^2 + c^2$) |

## BigInt

I tipi Number non possono andare oltre il valore intero $2^{53} - 1$, i BigInt sono la soluzione di JavaScript a questo problema:

* un tipo BigInt reppresenta un valore numerico intero di lunghezza arbitraria
* i BigInt si riconoscono perché terminanti con il carattere `n`
* le operazioni aritmetiche tra BigInt hanno maggiore precisione di quelle tra Number