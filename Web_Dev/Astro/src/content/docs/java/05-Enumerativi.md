---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Enumerativi in Java'
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 5
---

Un'entità dichiarata con la keyword `enum` è una classe speciale costituita da oggetti immutabili con proprietà d'ordine (indicizzati in base all'ordine di creazione).

```java
public enum Direction {
    NORTH, SOUTH, EAST, WEST;
}
```

Praticamente, gli oggetti di una classe di enumerativi sono `public`, `static` e `final`, ma come normali istanze di una classe possono avere proprietà e metodi;   
anche la relativa classe è `final`.

:::warn
Gli enumerativi vanno chiamati per percorso relativo (senza riportare la classe con scrittura puntata) quando sono usati per i `case` di uno `switch`:
```java
switch(dir) {
    case NORTH: // ...
    case SOUTH: // ...
    case EAST: // ...
    case WEST: // ...
}
```
Non possono e *non vanno* chiamati con `Directions.` prima in uno `switch`
:::

## Metodi di Default

Una classe di enumerativi ha di default:
- un costruttore privato (senza argomenti)
- un metodo statico `ordinal` che restituisce l'indice dell'enumerativo (cioè, partendo da 0, l'indice di creazione)
- un metodo statico `values` che restituisce un array ordinato che contiene tutti gli enumerativi (come riferimenti)
- un metodo statico `valueOf` che, presa una stringa, restituisce l'enumerativo corrispondente (come riferimento)

## Metodi Aggiungibili

Siamo liberi di aggiungere metodi alla classe di enumerativi:

```java
public enum Direction {
    NORTH, SOUTH, WEST, EAST;
    public Direction getOpposite() {
        switch(this) {
            case NORTH: return SOUTH;
            case SOUTH: return NORTH;
            case WEST: return EAST;
            case EAST: return WEST;
        }
    }

}
```
Possiamo anche aggiungere proprietà e costruttori.

:::nb
*Il costruttore di una classe di enumerativi deve essere privato*.
:::

### toString() override

Per riscrivere il `toString` è conveniente usare la logica di un costruttore piuttosto che uno `switch` (che andrebbe modificato contestualmente alla modifica del resto della classe).

```java
public enum Direction {
    NORTH("Nord",0), ... ;

    private String value;
    private int degrees;
    // costruttore privato ad uso esclusivo della classe
    private Direction(String value, int degrees) {
        this.value = value;
        this.degrees = degrees;
    }

    @Override
    public String toString() {
        return this.value + " a " + this.degrees + "°";
    }
}
```

## Portafoglio e Banconote

Per costruire un portafoglio è necessario distinguere i vari tagli di valuta (supponiamo euro e in valori limitati per brevità)

```java
public enum Taglio {
    CENTO(100), CINQUANTA(50), DIECI(10), 
    CINQUE(5), DUE(2), UNO(1);

    private int value;

    private Taglio(int value) {
        this.value = value;
    }

    public getValue() { return this.value; }
}
```

Tuttavia, nel limitare i valori abbiamo escluso la possibilità di avere i centesimi tra i tagli; questo potrebbe limitarci se dovessimo espandere la classe.