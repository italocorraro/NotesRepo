---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Vincoli sui Dati'
metaTitle: 'Vincoli sui Dati'
description: ''
author: 'Italo Corraro'
order: 2
---

Un database i cui dati non hanno vincoli da rispettare sono fondamentalmente dei *data-lake*, cioè mucchi di dati.

:::eg
Svariati insiemi di dati rispettano vincoli, ad esempio un vincolo di formattazione come per un indirizzo email, un url
:::

## Vincolo di Integrità

Un vincolo di integrità è una proprietà che deve essere soddisfatta dalle istanze.

Un vincolo di questo tipo può essere espresso con espressione logica; qualora l'espressione del vincolo risultasse falsa, il vincolo non sarebbe rispettato.

I vincoli di integrità si possono applicare ai domini o alle tuple per intero.

### Vincolo di Atomicità

Il modello relazionale stabilisce che i domini non possono essere strutturati o composti, devono essere, cioè, *atomici*.

Un dominio di questo tipo si dice essere in prima forma normale (1NF)

### Valori Nulli

Nel modello relazionale, utilizzare un valore tipo `0` o `-1` come sostitutivo di un valore assente o ignoto, non è ammesso, in quanto è una convenzione fragile. 

In un modello relazionale si implementa il concetto di valore nullo (`NULL`) che esprime esplicitamente l'assenza.

:::oss
Nel modello relazionale è implicito che due valori nulli non siano confrontabili univocamentee (`NULL == NULL` $\to$ indeterminato (può essere `true` come `false`)).
:::

I valori nulli possono essere valori illeciti secondo i vincoli di un certo dominio.

### Integrità Referenziale

Dati due schemi:
1. $R_1(KX_1)$ e 
2. $R_2(YX_1)$,

dove
- $K$ è la chiave primaria di $R_1$ e
- $Y$ include lo stesso insieme di attributi di $K$, 

in ogni istanza l'insieme di valori di $Y$ sia un sottoinsieme dell'insieme dei valori di $K$.

L'insieme $Y$ è detto *foreign key* e non ha vincoli particolari se non quello di rappresentare tutti i valori dell'insieme $K$.

La foreign key può includere attributi della stessa relazione e non deve necessariamente essere una chiave primaria.

## Vincoli di Chiave

I vincoli di questo tipo vietano che più di una tupla abbia lo stesso valore su uno o più attributi; di fatto, fungono da identificatori univoci per le tuple.

Una **superchiave** è un insieme di attributi per cui, in ogni istanza ammissibile, non esistono due tuple distinte per cui il valore su quegli attributi sia lo stesso, per cui può essere usata per distinguere due tuple come un identificatore.

Una **chiave** è una superchiave minimale, ovvero un insieme di superchiavi da cui non si può estrarre un insieme di attributi più piccolo che sia una superchiave, cioè che identifichi univocamente la tupla. 

Le chiavi (o in generale, gli identificatori) permettono di correlare i dati tra relazioni diverse.

Una chiave, però, non ha necessariamente vincoli di non-nullabilità; gli attributi di una chiave detta *primaria* sono vincolati a non ammettere valori nulli, per convenzione, questi attributi vengono sottolineati nelle rappresentazioni.

:::nota
Non è detto che sia possibile individuare una chiave primaria per un database; qualora ciò si verificasse, è sempre possibile introdurre un identificatore generato ad hoc per la tabella con i vincoli richiesti.
:::

