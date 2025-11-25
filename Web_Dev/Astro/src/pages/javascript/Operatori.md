---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Operatori in JavaScript'
metaTitle: 'Appunti sugli Operatori di JavaScript'
description: 'Appunti e note sugli operatori in JavaScript.'
author: 'Italo Corraro'
---

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
L'operazione di somma `+` può essere fatta anche tra stringhe; in quel caso, il risultato sarà un'unica stringa composta dagli operandi concatenati

se si "somma" una stringa con un numero, il numero verrà convertito in una stringa (*coercizione di tipo*), quindi ad esempio `12 + '34' = '1234'`
:::

:::nota
L'operazione di modulo (`%`) in matematica restituisce il resto della divisione aritmetica tra i due operandi;

inoltre, la divisione `/` sarà sempre a virgola mobile
:::

:::oss
L'operazione `x ** y` (cioè l'elevamento a potenza) può anche essere fatta usando il metodo `pow()` dell'oggetto `Math`: `x ** y === Math.pow(x, y)`
:::

## Coercizione di Tipo

JavaScript opera una conversione implicita dei tipi per svolgere operazioni tra dati di tipo non omogeneo o non conforme all'operazione

### Coercizione a Booleani

JavaScript non limita le operazioni logiche ai valori booleani `true` e `false`; se il contesto lo richiede, JavaScript converte valori non-booleani in booleani secondo alcuni principi.

I seguenti valori sono tutti e soli quelli che vengono convertiti in `false` per svolgere operazioni logiche:

| Valore | Tipo | 
|---|---|
| `null` | Null |
| `undefined` | Unvefined |
| `false` | Boolean |
| `NaN` | Number |
| `0` | Number |
| `-0` | Number |
| `0n` | BigInt |
| `""` | String |
| `document.all` | Object |

:::nota
questi valori sono detti *falsy* o *falsey*;

inoltre, i valori `null` e `undefined` sono anche detti *nullish*,

i valori che non ricadono nella categoria *falsy* sono detti *truthy*
:::

TUTTI i valori che non rientrano tra quelli elencati sono convertiti in `true` in contesto booleano

### Coercizione a Numerali

Per le operazioni che si aspettano numeri come argomenti, JavaScript converte i valori non numerici come segue:

| Valore| Tipo | Conversione |
|---|---|---|
| `undefined` | Undefined | `NaN` |
| `null` | Null | `0` |
| `true` | Boolean | `1` |
| `false` | Boolean | `0` |
| `"123"` | String | `123` |
| `"c123"` | String | `NaN` |
| `"    "` | String | `0` |
| any | BigInt | TypeError |
| any | Symbol | TypeError |

Più nel dettaglio:

* Le **stringhe** vangono convertite in numeri solo se composte di sole cifre; 
    * gli spazi bianchi iniziali e finali sono ignorati, 
    * i simboli `+` e `-` sono ammessi se a inizio numero per indicarne il segno
    * le stringhe vuote o composte di soli spazi vengono convertite in `0`
* I **BigInt** e i **Symbol** danno un errore di tipo
* Gli **oggetti** vengono convertiti a primitivi; il risultato viene poi convertito a numero seguendo le regole già viste

---

:::nota
Le conversioni esplicite di tipo a numerale vengono fatte con `Number()`, che segue gli stessi principi della coercizione con una eccezione:

* i BigInt vengono convertiti nel loro corrispettivo numerico (con probabile perdita di dati)
:::

### Coercizione a Stringhe

Per le operazioni che si aspettano stringhe come argomenti, JavaScript converte i valori non-stringa come segue:

| Valore| Tipo | Conversione |
|---|---|---|
| `undefined` | Undefined | `"undefined"` |
| `null` | Null | `"null"` |
| `true` | Boolean | `"true"` |
| `false` | Boolean | `"false"` |
| any | Number | `toString(10)` |
| any | BigInt | `toString(10)` |
| any | Symbol | TypeError |

Più nel dettaglio: 

* il metodo `toString()`, di cui esiste una versione sia per i Number che per i BigInt (non è lo stesso), serve a convertire un valore numerico a stringa; prende come argomento la base di conversione
:::eg
```javascript
console.log((16).toString(16));
// restituisce '10'
```
:::

## Operatori Logici

Gli operatori logici sono:

| Operatore | Operazione Logica | Nome Operazione |
|---|---|---|
| `&&` | AND | Congiunzione Logica |
| `\|\|` | OR | Disgiunzione Logica |
| `!` | NOT | Complementazione Logica |
| `??`[^1] | NULLISH | Coalescenza Nulla |

[^1]: l'operatore `??` è una sorta di caso speciale di `||`; il suo utilizzo è principalmente quello di filtrare via i valori `nullish` per sostituirli con dei valori di fallback:   
l'espressione `let x = ascissa ?? 0;` significa   
*se il valore di `ascissa` è `null` oppure `undefined`, allora assegna ad `x` il valore `0`, altrimenti, assegna ad `x` il valore di `ascissa`*

:::nb
Gli operatori logici, se usati con operandi *non-booleani* ricorreranno alla *coercizione di tipo*, ma è bene ricordare che, in tal caso, **non restituiranno un valore booleano**:

* l'**AND** restituirà il valore del primo operando `falsy` che incontra da sinistra;   
se sono tutti `truthy`, allora restituirà il valore dell'ultimo operando
    * più semplicemente, =u=*in un'operazione di soli due operandi*==: restituirà il valore dell'operando a sinistra se è `falsy`, di quello a destra altrimenti
* l'**OR** restituirà il valore del primo operando `truthy` che incontra da sinistra;   
se sono tutti `falsy`, allora restituirà il valore dell'ultimo operando
    * =u=*per un'operazione a due*==: restituirà il valore dell'operando a sinistra se è `truthy`, di quello a destra altrimenti
* il **NOT** restituirà il valore booleano `false` se l'operando è `truthy`; `true` altrimenti
* L'operatore **`??`**, detto di coalescenza nulla (*nullish coalescing operator*), restituirà il valore del primo operando NON `nullish` che incontra a partire da sinistra;   
se sono tutti `nullish`, allora restituirà il valore dell'ultimo operando
    * =u=*in un'operazione a due*==: restituirà il valore dell'operando a sinistra se NON è `nullish` (`null` o `undefined`), di quello a destra altrimenti

---
:::eg
```javascript
// Esempi con AND:
console.log("" && "foo"); 
// ↪ "" (perché è falsy)
console.log(2 && 0); 
// ↪ 0 (perché è falsy)
console.log("foo" && 4); 
// ↪ 4 (perché ultimo a destra)

// Esempi con OR:
console.log("" || "foo"); 
// ↪ "foo" (perché è truthy)
console.log(2 || 0); 
// ↪ 2 (perché è truthy)
console.log("" || 0); 
// ↪ 0 (perché ultimo a destra)

// Esempi con NOT:
console.log(!"foo"); 
// ↪ false (perché 'foo' è truthy)
console.log(!""); 
// ↪ true (perché '' è falsy)

// Esempi con ??:
let ascissa;
let x = ascissa ?? '10';
console.log(x);
// ↪ '10' (perché ascissa è undefined)
let ordinata = 7;
let y = ordinata ?? 10;
// ↪ 7 (perché ordinata è 7 (truthy))
ascissa = 0;
x = ascissa ?? '10';
// ↪ 0 (perché 0 è falsy, ma non nullish)
```
:::

### Cortocircuitazione

Le operazioni sono valutate in ordine di precedenza, ma una grande differenza tra le operazioni aritmetiche e quelle logiche è che, nelle operazioni logiche, le espressioni vengono valutate finchè non si raggiunge una conclusione sul risultato, dopodichè le altre espressioni non vengono valutate

:::eg
Consideriamo l'espressione `a && (b + c)`, 
* se `a` fosse `false`, allora la valutazione dell'espressione non proseguirebbe con il valutare `(b + c)` poiché avrebbe già raggiunto il risultato in seguito alla valutazione di `a`: 
    * poiché `a` è già falso, per un AND logico questa è condizione sufficiente a valutare l'intera espressione come falsa

Similmente, possiamo considerare `a || (b + c)` e se `a` fosse `true`, allora la valutazione dell'espressione OR non proseguirebbe perché si sarebbe già raggiunta una conclusione sul suo risultato, ovvero `true`
:::

Gli operatori che hanno questo comportamento sono detti "cortocircuitati".

:::nota
Un'altro operatore corto-circuitato è quello di **concatenamento opzionale** (`.?`).

Questo operatore è una misura di sicurezza; permette di chiamare una proprietà o un metodo di un oggetto (come `.`) SOLO se l'oggetto acceduto o la funzione chiamata non sono `nullish` (né `null`, né `undefined`), in caso contrario, invece di dare un errore, restituisce l'intera espressione come `undefined`.
:::

Incluso quest'ultimo, gli operatori sono:

```javascript
a || (b * c); 
/* valuta `a` prima,
 * poi restituisce `a` 
 * se `a` è "truthy" */
a && (b < c); 
/* valuta `a` prima,
 * poi restituisce `a` 
 * se `a` è "falsy" */
a ?? (b || c); 
/* valuta `a` prima, 
 * poi restituisce `a` 
 * se `a` non è `null` 
 * né `undefined` */
a?.b.c; 
/* valuta `a` prima, 
 * poi restituisce `undefined` 
 * se `a` è `null` o `undefined` */
```


### Operatore Ternario

Includiamo anche l'operatore ternario:

| Operatore | Equivalente |
|---|---|
| `cond ? expTrue : expFalse;` | `if(cond) expTrue; else expFalse;`|

Questo operatore offre una scrittura breve per un'espressione condizionale.

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

```javascript
x += 5; // Equivalente a x = x + 5
x -= 3; // Equivalente a x = x - 3
x *= 2; // Equivalente a x = x * 2
x /= 4; // Equivalente a x = x / 4
x %= 3; // Equivalente a x = x % 3
```

:::nota
gli operatori incremento (`++`) e decremento (`--`) hanno una particolarità:

* se assumiamo `x = 5`, allora con `return x++` ci aspetteremmo che il valore restituito sia `6`, ma così NON è, perché il browser restituisce _prima_ il valore e _poi_ lo incrementa;
* per farci restituire il valore incrementato possiamo mettere l'operatore prima della variabile: `++x` restituirà `6` subito perché stavolta l'incremento avviene *prima*
:::

Più recenti sono, invece, gli operatori logici di assegnazione

| Operatore | Assegnazione | Assegnazione Equivalente |
|---|---|---|
| `&&=` | `x &&= y` | `x && (x = y)` |
| `\|\|=` | `x \|\|= y` | `x \|\| (x = y)` |
| `??=` | `x ??= y` | `x ?? (x = y)` |

Tutti questi sono operatori *cortocircuitati*

Nel dettaglio su ciascuno:
* `&&=` assegna il valore dell'operando a destra a quello a sinistra SOLO SE l'operando a sinistra è `truthy`
* `||=` assegna il valore dell'operando a destra a quello a sinistra SOLO SE l'operando a sinistra è `falsy`
* `??=` assegna il valore dell'operando a destra a quello a sinistra SOLO SE l'operando a sinistra è `nullish`

Con riferimento alla tabella:
* `x &&= y`: se `x` è `truthy`, assegnagli `y`
* `x ||= y`: se `x` è `falsy`, assegnagli `y`
* `x ??= y`: se `x` è `nullish`, assegnagli `y`

## Operatori di Comparazione

Gli operatori di comparazione valutano un espressione tra i due operandi e restituiscono `true` o `false` in base a quel risultato

| Operatore | Espressione |
|---|---|
| `==` | "è uguale a" |
| `!=` | "è diverso da" |
| `>` | "è maggiore di" |
| `<` | "è minore di" |
| `>=` | "è maggiore/uguale a" |
| `<=` | "è minore/uguale a" |

:::nb
Tutti questi operatori operano una conversione implicita di tipo per risolvere l'espressione se necessario (le comparazioni tra numero e stringa diventano ad esempio tra due numeri se possibile)
:::

:::nota
I confronti tra stringhe sono fatti carattere per carattere in base ai codici Unicode di ciascuno,

:::eg
```javascript
console.log("apple" < "banana"); // true 
// il codice di 'b' è più alto di quello di 'a'
console.log("Zebra" < "apple");  // true 
// il codice di 'a' è più alto di quello di 'Z'
```
:::

Ci sono inoltre altri due operatori di comparazione che invece non operano alcuna conversione di tipo prima di valutare l'espressione:

| Operatore | Espressione |
|---|---|
| `===` | "è uguale in valore e tipo a" |
| `!==` | "è diverso in valore o tipo a" |

