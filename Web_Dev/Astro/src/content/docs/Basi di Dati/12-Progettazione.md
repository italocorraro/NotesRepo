---
title: 'Progettare una Base di Dati'
metaTitle: 'Progettare una Base di Dati'
description: ''
author: 'Italo Corraro'
order: 12
---

:::::ol
:::li
Il primo passo della progettazione di una base di dati è quello di realizzare, a partire dai requisiti del progetto, uno schema concettuale dei dati che vanno rappresentati. Questo passo e il suo risultato non possono dipendere dal tipo di DBMS che verrà poi usato.

Delineare i requisiti non è un passaggio standardizzabile; è influenzato sia dal committente, dagli utenti e dalle leggi vigenti.
:::
:::li
La definizione di relazioni, vincoli, tipi e altre caratteristiche dei dati fanno parte della progettazione logica.
:::
:::li
La progettazione fisica è l'ultima fase e l'unica in cui l'effettivo DBMS può influenzare il processo.
:::
:::::

## Modello Entity-Relationship

```mermaid
flowchart LR

C[Corsi] --(1,1)--> D{Docenze}
D --(0,n)--> P[Professori]
```