---
title: 'Funzioni Derivate e Raggruppamenti' 
metaTitle: 'Funzioni Derivate e Raggruppamenti'
description: ''
author: 'Italo Corraro'
order: 7
module: 'SQL'
---

## Funzioni Aggregate

Lo standard SQL mette a disposizione una serie di funzioni aggregate, il cui compito è quello di collassare i dati.

<!-- tabella f. aggregate -->

:::eg
```sql
SELECT SUM(Compenso) AS TotCompensi
FROM Partecipazioni
WHERE CodConcerto = 'C01
```
:::


È anche possibile inserire un'espressione nella funzione.

:::nb
Le funzioni aggregate non possono essere innestate.
:::

Le funzioni aggregate ignorano i valori nulli (ad es. `700 + NULL = 700`); se tutti i valori da aggregare sono `NULL` allora (e solo in quel caso) il risultato sarà `NULL`.

:::nota
Il tipo permane dopo un'operazione, ad esempio, facendo una media tra interi, verrà restituito un intero a prescindere (tronca le cifre decimali).

Per ovviare al problema è necessario fare un type cast prima dell'operazione.
:::

### Funzione `Count`

La funzione `COUNT` è particolare nell'interazione con i `NULL`, se conta le tuple `COUNT(*)` allora conterà anche duplicati e tuple con valori nulli; se si specifica un attributo, allora conterà i valori non nulli (se ci sono solo `NULL` allorà conterà 0).

`COUNT(DISTINCT <expr>)` conta i valori distinti.

### CASE innestato

```sql
COUNT(CASE Voto WHEN 30 THEN Voto NULL)
```

### GROUP BY

Raggruppa tutte le tuple che hano uno stesso attributo, utilizzabile dopo `FROM` alla fine delle consizioni `WHERE`

:::nb
I nomi dati ai risultati di un aggregatore non sono definiti se non al termine della query (ma possono essere usati nell'`ORDER BY` della stessa query).

Tutti gli attributi mostrati dal `SELECT` devono essere anche nel `GROUP BY`.
:::

Il comando `HAVING` permette di applicare condizioni ai gruppi; le aggregate usate dopo un `HAVING` sono applicate al gruppo.