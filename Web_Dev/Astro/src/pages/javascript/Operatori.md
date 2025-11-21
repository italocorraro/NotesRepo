---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Appunti Operatori di JavaScript'
description: 'Appunti e note sugli operatori in JavaScript.'
author: 'Italo Corraro'
---
## Indice

## Overview

JavaScript dispone di diversi operatori per operazioni aritmetiche, di assegnazione, logiche, comparative e altro;

la sintassi di questi operatori è la stessa degli altri linguaggi simil-`C`

## Operatori Aritmetici

Consideriamo tre variabili:

```javascript
let x = 5;
let y = 2;
let z;
```

Le operazioni aritmetiche che si possono fare sono le seguenti, ma teniamo presente che `z` sta venendo sovrascritto:

| Operatore | Operazione | Esempio | Risultato |
|---|---|---|---|
| `+` | addizione | `z = y + x` | `z = 5` |
| `-` | sottrazione | `z = y - x` | `z = -3` |
| `*` | moltiplicazione | `z = y * x` | `z = 10` |
| `**` | esponenziazione | `z = x ** y` | `z = 25` |
| `/` | divisione | `z = x / y` | `z = 2.5` |
| `%` | modulo |`z = x % y` | `z = 1` |

:::nota
L'operazione di modulo (`%`) in matematica restituisce il resto della divisione aritmetica tra i due operandi;

inoltre, la divisione `/` sarà sempre a virgola mobile
:::

:::oss
L'operazione `x ** y` (cioè l'elevamento a potenza) può anche essere fatta usando il metodo `pow()` dell'oggetto `Math`: `x ** y === Math.pow(x, y)`
:::

## Operatori Logici



## Operatori di Assegnazione

Questi operatori servono ad **assegnare** valori alle variabili; molti di questi operatori abbreviano delle scritture ridondanti,

supponiamo `x = 5` e `y = 2` come prima:

| Operatore | Assegnazione | Assegnazione Equivalente | Risultato |
|---|---|---|---|
| `=` | `x = y` |  | `x = 2` |
| `++` | `x++` | `x = x + 1` | `x = 6` |
| `--` | `x--` | `x = x - 1` | `x = 4` |
| `+=` | `x += y` | `x = x + y` | `x = 7` |
| `-=` | `x -= y` | `x = x - y` | `x = 3` |
| `*=` | `x *= y` | `x = x * y` | `x = 10` |
| `**=` | `x **= y` | `x = x ** y` | `x = 25` |
| `/=` | `x /= y` | `x = x / y` | `x = 2.5` |
| `%=` | `x %= y` | `x = x % y` | `x = 1` |

:::nota
gli operatori incremento (`++`) e decremento (`--`) hanno una particolarità:

* se assumiamo `x = 5`, allora con `return x++` ci aspetteremmo che il valore restituito sia `6`, ma così NON è, perché il browser restituisce _prima_ il valore e _poi_ lo incrementa;
* per farci restituire il valore incrementato possiamo mettere l'operatore prima della variabile: `++x` restituirà `6` subito perché stavolta l'incremento avviene *prima*
:::

Più recenti sono, invece, gli operatori logici di assegnazione