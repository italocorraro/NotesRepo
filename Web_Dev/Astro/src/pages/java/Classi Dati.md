---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Classi Dati in Java'
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 12
---

##

Una classe dati o **record** è introdotta dalla omonima keyword sostituendola a *`class`* e ha queste caratteristiche:

- *contiene dati immutabili*: TUTTI i campi della classe sono marcati come *final*
- istanze create con `new`
- il compilatore genera automaticamente versioni standardizzate per costruttore, `toString`, `equals` e `hashCode`, in particolare, `equals` fa' un confronto fra i campi e non un semplice confronto di riferimenti
- il compilatore genera automaticamente metodi *accessor* per tutti i campi dati, ciascuno con il loro nome
- include metodo `copy` per duplicare un'istanza
- è `final` (non può essere astratto o esteso)
- di default, estende implicitamente `java.lang.Record`

:::eg
```java
public record Rectangle(
    double height, double length
) {}
```
Questo record ha implicitamente generato:
```java
public final class Rectangle {
    private final double length;
    private final double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    public double getLength() {
        return length;
    }

    public double getWidth() {
        return width;
    }

    @Override
    public boolean equals(Object o) {
        /* ... */
    }

    @Override
    public int hashCode() {
        /* ... */
    }

    @Override
    public String toString() {
        /* ... */
    }
}
```
:::