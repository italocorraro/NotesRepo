---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Il DOM API di JavaScript'
metaTitle: 'Appunti sulla DOM API di JavaScript'
description: 'Appunti e note sulla manipolazione del Document Object Model con JavaScript.'
author: 'Italo Corraro'
---

## Document Object Model

Il **DOM** (*Document Object Model*) serve a descrivere la struttura di un documento *html*:
* l'intero documento è costituito da una struttura gerarchica di **nodi**, ciascun nodo è un'istanza di `Node` e rappresenta una parte del documento (che sia testo, un elemento o un commento)
* tramite l'oggetto **`document`** (che discende da `Node`) è possibile interagire con la struttura del documento
* gli oggetti istanze di `Element` sono invece i contenitori degli effettivi elementi mostati nel documento; più nello specifico, per un documento html, gli elementi sono rappresentati da istanze di `HTMLElement`, una classe che implementa `Node`, in questo modo, ogni elemento è costituito da un insieme di nodi
* la classe `HTMLElement` ha delle sottoclassi per definire proprietà più specifiche per i vari elementi
* ciascuna sottoclasse eredita automaticamente le proprietà del suo genitore

### Gerarchia dei Nodi

In base alla loro posizione nella gerarchia del documento, i nodi possono essere classificati come:

* **root** (*nodo radice*): nodo alla base della gerarchia e da cui discendono tutti gli altri del documento; per un documento html, il *root node* è sempre il nodo *HTML*
* **child** (*nodo figlio*): nodo che discende *direttamente* da un altro nodo
* **descendant** (*nodo discendente*): nodo che discende da un un altro nodo o dai suoi figli (figli e nipoti in pratica)
* **parent** (*nodo genitore*): nodo da cui discendono altri nodi
* **sibling** (*nodi fratelli*): nodi che condividono lo stesso livello di parentela

### Oggetti Principali

L'oggetto **`window`** (istanza di `Window`) è l'oggetto globale del documento html; rappresenta la finestra del browser in cui è caricato il documento

L'oggetto **`navigator`** (istanza di `Navigator` e figlio di `window`) rappresenta lo stato e l'identità dell'*user agent*

L'oggetto **`document`** (istanza di `Navigator` e figlio di `window`) rappresenta la pagina caricata nella finestra del browser; questo è il principale oggetto da usare per la manipolazione degli elementi html

## Selezionare Elementi

