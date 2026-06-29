---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Strutture Dati non Sequenziali'
metaTitle: 'Strutture Dati non Sequenziali'
description: ''
author: 'Italo Corraro'
order: 28
---

## Alberi

Un **albero** è un grafo orientato aciclico:
- connette nodi
- le connessioni hanno un verso
- le connessioni non si chiudono a cerchio

Ogni nodo ha un *grado di ingesso*, ovvero il numero di connessioni che terminano in quel nodo, e un *grado di uscita*, ovvero il numero di connessioni che iniziano da quel nodo.

Una sequenza di nodi costituisce un cammino; si dice *semplice se i nodi non si ripetono*, si dice *ciclico* se apre e chiude nello stesso nodo, *aciclico* altrimenti

Il grafo si dice *completo* se per qualsiasi coppia di nodi esiste una connessione.

### Proprietà

Un *albero* ha le seguenti proprietà:
- possiede un nodo e uno solo, detto =u=*radice*, con grado d'ingresso 0==
- tutti gli altri nodi hanno grado di ingresso 1

- i nodi con grado di uscita 0 si dicono *foglie*
- la lunghezza del cammino dalla radice a un nodo ne indica il *livello*
- il cammino più lungo dalla radice a una foglia definisce l'*altezza* dell'albero
- se c'è una connessione da un nodo a un altro, il primo nodo si dice *padre* del secondo
- il secondo si dice *figlio*

:::oss
Esiste ed è unico, il cammino semplice che collega la radice a qualsiasi altro nodo.

Tutti i nodi tranne la radice hanno uno e uno solo padre

Tra i figlie esiste generalmente una relazione d'ordine arbitraria
:::

### Visita

Percorrere l'albero (*visita*) prevede il transitare su ogni nodo una sola volta.

#### Visita in Profondità

Il tipico approccio è tramite ricorsione (l'iterazione non è applicabile); che agisce scandagliando l'albero in profondità.

Questo tipo di visita è il più efficiente quando l'albero collega padri a figli, rendendo il percorrimento elementare.

:::oss
La visita in profondità a partire dalla radice verso le foglie è il metodo di base per costruire la struttura di un file system

La vista in profondità a partire dalle foglie verso la radice costruisce il percorso al file
:::

#### Visita in Ampiezza

Si può scegliere di visitare un albero esplorando i singoli livelli uno ad uno per eseguire una visita in ampiezza.

Questo tipo di visita è il più efficiente quando i figli sono collegati tra loro, cosa che non è vera per un albero; la vera situazione in cui questo tipo di visita è il migliore è nei casi di alberi infinitamente profondi.

- la visita in profondità finirà per bloccarsi sul primo ramo infinito che trova, tralasciando quindi gli altri rami
- la vista in ampiezza è equa rispetto ai rami

:::nota
L'idea è comunque quella di non percorrere l'albero infinito fino alla fine (tecnicamente impossibile), ma quella di estrarre quante più informazioni possibile o quante necessarie; 

in questo senso, la visita in ampiezza permette un'estrazione bilanciata e controllabile, mentre quella in profondità riporta inconsistenze in base ai rami che esplora per primi
:::
