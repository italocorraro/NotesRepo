---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Classi Astratte in Java'
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 14
---

## Classi Astratte

Lo scopo delle classi astratte è quello di rappresentare una categoria concettuale della quale non DEVONO essere prodotte istanze; in pratica esiste come base per essere estesa.

Una classe del genere di dichiara con la keyword `abstract`.

*I metodi di una classe possono essere etichettati come `abstract` per indicare un placeholder da implementare nelle estensioni della classe*; questi metodi astratti non hanno corpo, ma terminano immediatamente con `;`.

:::eg
```java
public abstract method(); // nessun {}
```
:::

*Una classe deve usare la keyword `abstract` per avere campi astratti, anche se ereditati*, infatti, se una classe derivata non implementa tutti i campi astratti della classe base (rimane quindi con almeno un campo astratto ereditato) deve essere dichiarata come astratta.

Dichiarare metodi astratti da implementare in seguito ha il vantaggio di poterli usare immediatamente nella classe che li dichiara:

```java
public abstract class Linguaggio {
    private String nome;
    Linguaggio(String nome) {
        this.nome = nome;
    }
    public String getNome
    public abstract String sintassi();
    public abstract String tipizzazione();
}
```

Abbiamo creato una classe astratta i cui metodi, essendo stratti, non sono implementati.

A livello di compilatore, la classe è effettivamente vuota, ma se creassimo una classe derivata che non implementa tutti i suoi metodi astratti senza marcarla a sua volta con `abstract` allora otteniamo un errore di compilazione (non a runtime).

Implementando tutti i metodi di una classe astratta, questa si dirà *concreta*.

```java
public class Java extends Linguaggio{
    @Override
    public String sintassi() {
        return "simil-c";
    }
    @Override
    public String tipizzazione() {
        return "statica";
    }
}
```

## Classi Anonime

Una classe anonima è una classe senza nome, composta di sola implementazione che viene istanziata sul momento una sola volta:

```java
Arrays.sort(persone, new Comparator<Persona> {
    /* .... */
    public int compare(Persona p1, Persona p2) {
        /* .... */
    }
});
```

La `new` è riferita all'interfaccia `Comparator`, ma è possibile anche dichiarare una classe che non implementa un'interfaccia: `new {/* ... */}`.
