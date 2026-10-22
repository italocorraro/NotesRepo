---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Basi di Php'
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 0
---

- Gli script **php** (*PHP: Hypertext Preprocessor*) sono racchiusi tra i tag `<?php` e `?>`; è un linguaggio interpretato
- le *variabili* sono precedute dal simbolo `$`, che non puo essere succeduto da un numero
- le *istruzioni* DEVONO terminare con `;`
- i commenti si possono includere tra `/* ... */` oppure si possono scrivere commenti a riga singola con `//` oppure `#`
- il carattere ` . ` interposto tra due stringhe permette di concatenarle

- le stringhe normali sono delimitate da `'`, mentre quelle interpolabili da `"`: più precisamente, quelle tra `'` sono riportate letteralmente, ignorando anche eventuali caratteri speciali, mentre l'altro caso interpreta sia variabili che caratteri speciali

- le funzioni si dichiarano precedendo il nome con la keyword `function`; tra parentesi tonde si inseriscono i parametri e tra graffe il corpo; puo restituire solo un valore con `return`:

```php
<?php
function sum($a, $b) {
    return $a + $b;
}
?>
```

## Tipi di Dato

Il *PHP* è un linguaggio debolmente tipizzato, in particolare:

- il tipo è inferito all'assegnazione dall'interprete
- il tipo è una caratteristica del dato, non della variabile: ad una stessa variabile si possono assegnare dati di tipo diverso durante la stessa esecuzione

Tipo | Dato
--- | ---
`boolean` | `true`/`false`
`integer` | interi a 64bit max
`float` | decimali (o esponenziali)
`double` | decimali (o esponenziali) lunghi
`string` | sequenza di caratteri
`array` | 
`null` | NULL
`resource`| riferimento a risorsa esterna
`mixed` |

Per conoscere il tipo del dato contenuto in una variabile si usa la funzione `var_dump()`, restituisce anche il dato contenuto:
```php
var_dump(5);
// -> int(5)
var_dump([2, 7, 0])
/* -> array(3) {
        [0]=>
        int(2)
        [1]=>
        int(7)
        [2]=>
        int(0)
    } */
```

In PHP è concesso eseguire assegnazioni multiple:
```php
$x = $y = $z = 'idem';
```
:::nota
Il valore massimo esprimibile per un intero è rappresentato nella costante `PHP_INT_MAX`
:::

### Null

*NULL* indica l'assenza di un valore; una variabile non inizializzata conterrà NULL.

È anche possibile svuotare una variabile assegnandovi NULL

## Scope

PHP ha tre *scope*:

1. **globale**: variabile dichiarata *fuori* dal corpo di una funzione; puo essere usata solo *fuori* da una funzione
2. **locale**: variabile dichiarata *dentro* al corpo di una funzione; esiste solo durante quella specifica esecuzione:
    - puo essere usata solo *dentro* tale funzione
    - la variabile è creata alla chiamata della funzione e distrutta a fine della sua esecuzione; ogni nuova chiamata genera una nuova variabile
3. **statico**: variabile dichiarata *dentro* al corpo di una funzione precedendola con la keyword `static`; ==u=continua ad esistere anche al termine dell'esecuzione della funzione
    - viene creata alla prima esecuzione,
    - non viene distrutta al termine,
    - ad ogni nuova chiamata della funzione, la variabile statica avrà il valore con cui aveva terminato la chiamata precedente
    - *non è accessibile fuori dalla funzione*

### Variabili Globali

Le variabili globali possono essere utilizzate all'interno di una funzione a patto di dichiararle con la keyword `global` anche all'interno della funzione.

:::eg
```php
$x = 5;
function exampl() {
    global $x;
    echo $x;
    // -> 5
    $x++;
}
echo $x
// -> 6
```
:::

Le variabili globali sono anche disponibili in un array indicizzato `$GLOBALS[i]`; l'indice è il nome della variabile (senza `$`).
