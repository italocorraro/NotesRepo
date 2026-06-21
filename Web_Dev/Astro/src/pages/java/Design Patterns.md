---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Design Patterns'
metaTitle: 'Design Patterns'
description: ''
author: 'Italo Corraro'
order: 10
---

## Design Pattern

Nella progettazione di un'applicazione si possono seguire diversi modelli atti a *disaccoppiare* quanto più possibile le parti in gioco; in questo modo si migliora la testabilità e manutenibilità.

I vari approcci sono slegati dal *main* che non svolge un ruolo di collante o comando; il suo unico scopo è di avviare l'applicazione.

## MVC

L'approccio **MVC** prevede:

- **Model**: le strutture dati
- **View**: l'interfaccia utente
- **Controller**: gestisce il flusso di controllo

:::nota
Teoricamente il Controller dovrebbe essere la via unica di comunicazione tra dati e UI, ma non è sempre il caso: spesso View e Model conoscono dettagli l'uno dell'altro che sono necessari ai rispettivi scopi; un esempio è la necessità della View di conoscere le rappresentazioni `toString` dei dati del Model.
:::

## Strategy

Ogni algoritmo di ricerca si basa sulla stessa logica di base che prevede:
- scansione dell'intera collezione
- recupero e memorizzazione di quegli elementi che corrispondono ai criteri di ricerca
- restituzione del risultato

A cambiare tra gli algoritmi è la *strategia* con cui viene effettuata la ricerca.

Principalmente, vogliamo definire una famiglia di algoritmi autocontenuti, quindi implementanti incapsulamento e intercambiabilità. Questo ha lo scopo di rendere il meccanismo di ricerca quanto più flessibile possibile.

### Il Pattern

Il pattern per lo sviluppo è il seguente:
- un'interfaccia **`Strategy`** che dichiara la *signature* per gli algoritmi concreti
- un insieme di *classi concrete che implementano le strategie* in modo polimorfo
- una classe **`Context`** che usa tali strategie per eseguire il proprio compito *in modo indipendente dalla specifica strategia usata*

:::eg
L'interfaccia della strategia sarà `Filter`:
```java
public interface Filter {
    public boolean filter(Object obj);
}
```
Da qui, dobbiamo implementare delle classi concrete:
```java
public class ImpFilter implements Filter {
    protected Type filteredField;
    ImpFilter(TypeV filteringValue) {
        /* .... */
    }
    public boolean filter(Object obj) {
        /* .... */
    }
}
```
Chiaramente, non è detto che gli oggetti da filtrare siano omogenei, questo significa che per campi non presenti su tutta la collezione da filtrare non possiamo creare un algoritmo "unico"; la soluzione al problema è assegnare dei "tag" in base alle caratteristiche degli oggetti filtrati, solitamente tramite interfacce.
:::

### Come Funziona

- Si implementa un'interfaccia generica che rappresenta la *strategy*, tutto quello che ha è un generico metodo astratto di filtraggio che tutte le classi filtro dovranno implementare
- chi deve eseguire la ricerca, deve ricevere un oggetto istanziato da una delle classi che implementa la strategy; tale oggetto rappresenta la specifica richiesta secondo cui filtrare

Riprendendo l'esempio precedente, pensiamo di filtrare gli elementi di una collezione in base a se sono superiori a un certo elemento base con cui sono comparabili tramite`compareTo`:

Le istanze comparabili devono implementare:
```java
public interface HasLength {
    public int getLength();
}
```

La strategy sarà:
```java
public interface Filter {
    public boolean filter(Object obj);
}
```
Ci proponiamo quindi di comparare qualsiasi oggetto.

Dobbiamo implementare il filtro per la lunghezza:
```java
public class MaxLengthFilter implements Filter {
    public boolean filter(Object obj) {
        protected int maxLength = Integer.MAX_VALUE;
        public LengthFilter(int maxL) {
            if(0 < maxL) {
                this.maxLength = maxL;
            }
        }
        // Se ha la lunghezza confrontiamo
        if(obj instanceof HasLength that) {
            return that.getLength() <= this.maxLength;
        }
        // se non ha lunghezza, allora il filtro ci restituisce false
        else return false;
    }

}
```

Per usare il filtro serve una funzione:
```java
public boolean filter(Filter filter, Object subject) {
    return filter.filter(subject);
}
```

A questa funzione dobbiamo passare un oggetto istanza di una implementazione di `Filter`:
```java
MaxLengthFilter maxSixL = new MinLengthFilter(6);
```

In questo modo possiamo creare quante istanze di filtri che usano lo stesso principio vogliamo.