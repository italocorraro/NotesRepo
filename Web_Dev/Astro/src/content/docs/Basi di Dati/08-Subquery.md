---
title: 'Subquery'
metaTitle: 'Subquery'
description: ''
author: 'Italo Corraro'
order: 8
---

In SQL è posssibile esprimere condizioni basate sul risultato di altre query dette *subquery*.

:::eg
```sql
SELECT CodConcerto
FROM Partecipazioni
WHERE IdMusicista IN (
    SELECT  IdMusicista
    FROM Musicisti
    WHERE Genere = 'Rock'
);
```
Questa query seleziona tutti i codici-concerto dei concerti con musicisti filtrati per genere rock tramite subquery.
:::

Non c'è un numero massimo alle subquery che si possono costruire in una singola query.

È ammesso l'uso innestato di subquery.

## Anti-Subquery

Il comando `NOT IN` calcola il complemento dalla subquery.

:::eg
```sql
SELECT P.CodConcerto
FROM Partecipazioni P
WHERE P.IdMusicista NOT IN (
    SELECT M.IdMusicista
    FROM Musicisti M
    WHERE M.Genere = 'Rock'
);
```
La subquery seleziona tutti gli id di musicisti di genere rock poi verifica se `P.IdMusicista` è uno di loro, se non lo è allora la condizione è verificata.
:::
:::eg
```sql
SELECT P.IdMusicista
FROM Musicisti P
EXCEPT (
    SELECT M.IdMusicista
    FROM Musicisti M
    WHERE M.Genere = 'Rock'
);
```
Questa query seleziona tutti gli id musicisti tranne quelli che seleziona la subquery.
:::

## Subquery Scalare

È ammesso l'uso di operatori binari con il risultato di una subquery se questa restituisce solo 1 risultato (esattamente 1, non un vettore)

Si possono usare i comandi `ALL` o `ANY` dopo un operatore rivolto a una subquery che restituisce più valori:
- `<operation> ALL <subquery>` relazione verificata per tutti i valori della subquery,
- `<operation> ANY <subquery>` relazione verificata per almeno uno dei valori della subquery.

:::nb{sui valori nulli}
```sql
SELECT *
FROM Partecipazioni P
WHERE P.Compenso >= ALL (
    SELECT P1.Compenso
    FROM Partecipazioni P1
)
```
Si selezionano le partecipazioni il cui compenso è maggore o uguale di tutti gli altri, tuttavia i valori nulli non daranno mai la condizione verificata, occorre filtrarli via nella subquery:
```sql
SELECT *
FROM Partecipazioni P
WHERE P.Compenso >= ALL (
    SELECT P1.Compenso
    FROM Partecipazioni P1
    WHERE P1.Compenso IS NOT NULL
)
```
:::

## EXISTS

Operatore unario che restituisce vero su una subquery solo se restituisce almeno una tupla.

Forma negata con `NOT EXISTS`.


:::eg
```sql
SELECT *
FROM Musicisti M
WHERE EXISTS (
    SELECT *
    FROM Partecipazioni P
    WHERE P.Minuti > 55
    AND P.IdMusicista = M.IdMusicista
)
```
Questa query restituisce le tuple di `Musicisti` le quali hanno il musicista con almeno una partecipazione di 55 minuti.

La subquery restituisce le partecipazioni con durata superiore a 55 minuti e il cui musicista coincide con quella della tupla passata dal primo `select`.
:::

:::oss
Le subquery hanno accesso ad elementi definiti all'esterno del proprio scope.
:::

## Unnesting

È possibile ottenere una query in versione piatta da una con subquery innestate sfruttando i `JOIN` per sostituirle.

