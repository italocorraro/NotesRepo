---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Packages e Moduli in Java'
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 40
---

## Stream

```java
SomeCollection<SomeType> cl = collection
        // aprire uno stream:
        .stream()
        // filtrare elementi:
        // si aspetta un boolean dalla lambda
        .filter( el -> checkStuff(el) )
        // rimappare gli elmenti:
        // si aspetta un elemento dalla lambda
        .map( el -> mutateStuff(el) ) 
        // espandere elementi in un nuovo stream:
        // si aspetta una porzione di stream da lambda
        .flatMap( el -> Stream.of(el[0],el[1]))
        // per iterare su una variabile restituita alla fine:
        // aggiorna `res` con il risultato della lambda
        .reduce(0, (res,v) -> res + v)
        // svolgere un'operazione senza alterare lo stream:
        // lo stream viene restituito inalterato
        .peek( e -> System.out.println("Processing " + e))
        // per rimappare a una collezione:
        .collect(
            // Map:
            Collectors.toMap(
                Class::getId,
                Function.identity()
            )
            // List:
            Collectors.toList()
            // Set:
            Collectors.toSet()
        );
```

## Componenti JFX

```java
// Proprietà comuni:
// figli:
_.getChildren().add(Node)/.addAll(Node...);
// Padding interno:
_.setPadding(new Insets(top,right,bottom,left));
// Allineamento figli:
_.setAlignment(Pos.ALIGNMENT_CONST);
```

```java
cb = new ComboBox<>();
cb.setItems(
    FXCollections.observableArrayList(
        "element1", "element2", ...
    )
);
```

## Regex

| Sintassi | Descrizione |
|---|---|
| `.` | Qualsiasi cosa |
| `\d` | Qualunque cifra decimale: `[0-9]` |
| `\w` | Qualunque carattere alfanumerico: `[a-zA-Z0-9_]` |
| `\s` | Qualunque spazio bianco: spazio, `\t`, `\n`, `\r`, `\f`, `\v` |
| `\h` | Spazio bianco orizzontale (spazio, tab) |
| `\v` | Spazio bianco verticale (`\n`, `\r`, `\f`) |
| `\R` | Qualsiasi sequenza di fine riga (`\n`, `\r\n`, `\r`, ecc.) |
*Usare maiuscola per negare*

| Sintassi | Descrizione |
|---|---|
| `*` | 0 o più volte |
| `+` | 1 o più volte |
| `?` | 0 o 1 volta (elemento opzionale) |
| `{n}` | Esattamente `n` volte |
| `{n,m}` | Da `n` a `m` volte (inclusi) |
| `[a-z0-9_]` | (Classe di char) Qualsiasi lettera minuscola, cifra o underscore |
| `[^a-z]` | Nessuna lettera minuscola |
| `(?<nome>abc)` | Gruppo di cattura con nome `nome` |
```java
Pattern p = Pattern.compile(RegExp);
Matcher m = p.matches(String);
m.group(grouName/Index)
```

## Lettura e Scrittura

### Tokenizer

`new StringTokenizer(line,separator)`:
- use `nextToken(separator?)` to continue reading (consumes token)
- use `countTokens` to check against a number
- use `hasMoreTokens()` to check if there are any more tokens

### Lettura

Per aprire un reader: `new FileReader(filepath): Reader`,   
Per leggere con `readLine()`: `new BufferedReader(Reader)`   
`close()` al termine

### Scrittura

Per scrivere: `new PrintWriter(filepath|Writer)`
- usare `print`/`println`
`close()` al termine