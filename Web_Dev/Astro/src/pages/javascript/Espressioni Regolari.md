---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Espressioni Regolari in JavaScript'
metaTitle: 'Appunti sulle espressioni regolari in JavaScript'
description: 'Appunti e note sulle espressioni regolari in JavaScript.'
author: 'Italo Corraro'
---

## RegExp

Le *espressioni regolari* sono BOOOOOOO

## Glossario Sintassi

### Flag 

| Flag | Nome | Descrizione |
|---|---|---|
| `g` | *global* |  Trova tutti i match invece di fermarsi al primo |
| `m` | *multi-line* | `^` e `$` cominciano a inizio riga |
| `i` | *ignore-case* | Match case-insensitive |
| `s` | *single-line* | `.` fa' match anche su newline |
| `u` | *unicode* | Match con caratteri unicode completi |
| `d` | *indices* | Restituisce gli indici di inizio e fine dei match |
| `y` | *sticky* | Match solo a partire da `lastIndex` |

### Metacaratteri

| Sintassi | Descrizione |
|---|---|
| `.` | Qualsiasi carattere **tranne** newline (con flag `s` anche `\n`) |
| `\d` | Qualunque cifra decimale: `[0-9]` |
| `\D` | Qualunque non-cifra: `[^0-9]` |
| `\w` | Qualunque carattere alfanumerico[^1]: `[a-zA-Z0-9_]` |
| `\W` | Qualunque carattere non-alfanumerico: `[^a-zA-Z0-9_]` |
| `\s` | Qualunque spazio bianco: spazio, `\t`, `\n`, `\r`, `\f`, `\v` |
| `\S` | Qualunque non-spazio bianco |
| `\h` | Spazio bianco orizzontale (spazio, tab) |
| `\H` | Non-spazio bianco orizzontale |
| `\v` | Spazio bianco verticale (`\n`, `\r`, `\f`) |
| `\V` | Non-spazio bianco verticale |
| `\N` | Qualsiasi carattere tranne newline |
| `\X` | Cluster di grafemi Unicode (sequenza che forma un carattere visibile) |
| `\R` | Qualsiasi sequenza di fine riga (`\n`, `\r\n`, `\r`, ecc.) |

[^1]: **alfanumerico**: lettera o numero

### Classi di Caratteri

| Sintassi | Descrizione |
|---|---|
| `[abc]` | Qualsiasi carattere tra `a`, `b`, `c` |
| `[^abc]` | Qualsiasi carattere **tranne** `a`, `b`, `c` |
| `[a-z]` | Qualsiasi carattere nell'intervallo da `a` a `z` |
| `[a-zA-Z]` | Qualsiasi lettera maiuscola o minuscola |
| `[0-9]` | Qualsiasi cifra |
| `[a-z0-9_]` | Qualsiasi lettera minuscola, cifra o underscore |
| `[^a-z]` | Qualsiasi carattere che **non** sia lettera minuscola |

### Operazioni di Composizione

| Sintassi | Descrizione |
|---|---|
| `[a-z&&[^aeiou]]` | **Intersezione**: consonanti minuscole |
| `[[a-z][A-Z]]` | **Unione** esplicita di classi (equivalente a `[a-zA-Z]`) |
| `[a-z&&[^m-p]]` | **Sottrazione**: lettere minuscole escluse quelle da `m` a `p` |

### Ancoraggi

| Sintassi | Ancora |
|---|---|
| `^` | Inizio della stringa (o inizio riga con flag multiline) |
| `$` | Fine della stringa (o fine riga con flag multiline) |

Altri:

| Sintassi | Descrizione |
|---|---|
| `\A` | Inizio assoluto della stringa (ignora flag multiline) |
| `\Z` | Fine assoluta della stringa, prima dell'eventuale `\n` finale |
| `\z` | Fine assoluta della stringa (nessuna eccezione per `\n`) |
| `\G` | Posizione dove è terminata la corrispondenza precedente |
| `\b` | Confine di parola (tra `\w` e `\W`, o inizio/fine stringa) |
| `\B` | Non-confine di parola |
| `\<` | Inizio di parola (supporto variabile) |
| `\>` | Fine di parola (supporto variabile) |

### Quantificatori

Specificano quante volte deve comparire l'elemento precedente; *sono posizionati **dopo** l'elemento*.

I quantificatori base sono detti **greedy** (prendono quanto più è concesso dal selettore):

| Sintassi | Quantità |
|---|---|
| `*` | 0 o più volte |
| `+` | 1 o più volte |
| `?` | 0 o 1 volta (elemento opzionale) |
| `{n}` | Esattamente `n` volte |
| `{n,}` | Almeno `n` volte |
| `{n,m}` | Da `n` a `m` volte (inclusi) |

Aggiungere `?` dopo il quantificatore *greedy* lo tramuta in un **lazy**: preferirà sempre fermarsi al valore minimo necessario.

Aggiungere `+` dopo il quantificatore *greedy* (non supportati da tutti gli engine) lo tramuta in **possessive**: impedisce backtracking alla sintassi successiva.

### Gruppi

| Sintassi | Descrizione |
|---|---|
| `(abc)` | Gruppo di cattura numerato |
| `(?:abc)` | Gruppo non di cattura (raggruppa senza memorizzare) |
| `(?<nome>abc)` | Gruppo di cattura con nome `nome` |
| `(?'nome'abc)` | Gruppo di cattura con nome (sintassi alternativa, .NET/PCRE) |
| `\1`, `\2`, … | Backreference al gruppo di cattura n-esimo |
| `\k<nome>` | Backreference al gruppo nominato `nome` |

### Alternanza

| Sintassi | Descrizione |
|---|---|
| `a\|b` | `a` oppure `b` (alternanza) |
| `(cube\|sphere)` | `cube` oppure `sphere` (alternanza in gruppo) |
| `(a\|b\|c)` | Una qualsiasi tra `a`, `b`, `c` |

### Lookahead e Lookbehind 

Non consumano caratteri; verificano solo la presenza o assenza di pattern.

| Sintassi | Descrizione |
|---|---|
| `(?=abc)` | **Lookahead positivo**: seguìto da `abc` |
| `(?!abc)` | **Lookahead negativo**: non seguìto da `abc` |
| `(?<=abc)` | **Lookbehind positivo**: preceduto da `abc` |
| `(?<!abc)` | **Lookbehind negativo**: non preceduto da `abc` |

### Da Escape

I seguenti caratteri hanno significato speciale e vanno preceduti da `\` per essere usati come letterali:

```
. * + ? ^ $ { } [ ] | ( ) \
```

:::nb
È necessario tenere presente, che se l'espressione regolare è da ottenere da stringa semplice, allora va escapata anche la stringa: `\` è un carattere speciale di escape in una stringa, quindi, perché venga tradotto come `\` nella regex, bisogna escaparlo nella stringa (con sé stesso: `\\`); per escapare `\` a partire da una stringa serve `\\\\`.
:::

## Esempi pratici

| Pattern | Descrizione |
|---|---|
| `^\d{4}-\d{2}-\d{2}$` | Data in formato `YYYY-MM-DD` |
| `^[\w.+-]+@[\w-]+\.[a-zA-Z]{2,}$` | Indirizzo email (semplificato) |
| `^https?://[\w./%-]+$` | URL HTTP o HTTPS |
| `\b\d{1,3}(\.\d{1,3}){3}\b` | Indirizzo IPv4 |
| `^(?=.*[A-Z])(?=.*\d).{8,}$` | Password: almeno 8 caratteri, una maiuscola e una cifra |
| `<!--.*?-->` | Commento HTML (lazy per non consumare troppo) |
| `"(?:[^"\\]|\\.)*"` | Stringa tra virgolette con escape interni |
| `\b(?:TODO\|FIXME\|HACK)\b` | Keyword comuni nei commenti di codice |
| `^(\+?\d{1,3}[\s-])?\(?\d{2,4}\)?[\s-]?\d{3,4}[\s-]?\d{4}$` | Numero di telefono internazionale |
| `(?<=\bprice:\s)\d+(?:\.\d{2})?` | Numero dopo la parola `price:` (lookbehind) |