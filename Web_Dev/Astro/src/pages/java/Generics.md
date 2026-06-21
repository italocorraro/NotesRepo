---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Tipi Generici in Java'
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 13
---

## Genericità

Implementare componenti software con tipo generico non richiede alcun bypass del controllo di tipo del compilatore nè l'uso indiscriminato di `Object` per far passare qualunque oggetto.

È possibile parametrizzare il tipo di modo che venga anche questo passato come argomento al momento dell'uso del componente; in questo modo il componente rimane generico rispetto al tipo al momento della dichiarazione, ma non si perde il type-check del compilatore.

## Tipo Parametrico

Alla dichiarazione del metodo si può usare una notazione speciale per evitare di scegliere un tipo specifico, ma uno che verrà fornito al momento dell'uso tramite un simbolo:
```java
public static <T> boolean idem(T[] a, T[] b)
```

In questo caso stiamo costruendo una funzione che confronta due array di elementi di un generico tipo *`T`*.

Per usarla và identificato il tipo:
```java
MyClass.<Counter>idem(countListA, countListB)
```

:::oss
L'approccio basato sul tipo generico si chiama *polimorfismo orizzontale*, mentre quello basato sull'ereditarietà si chiama *polimorfismo verticale*
:::

:::nb
Per motivi di retrocompatibilità, se il tipo non viene specificato al momento dell'uso, allora di default viene identificato come `Object`, in questo modo il programma compila; in questi casi il compilatore lancia un warning
:::

### Classi Generiche

Sfruttand i tipi parametrici possiamo generare classi dal tipo generico non prestabilito, deciso al momento dell'istanziazione:

```java
// il tipo generico va dichiarato insieme alla classe (solo il nome, non l'uso che se ne intende fare)
public class Stack<T> {
    private T[] stack;
    private int size = 0;
    public Stack(T[] stack) {
        for(T elem : stack) {
            if(elem == null) continue;
            this.stack[this.size++] = elem;
        }
    }
}