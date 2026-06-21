---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Interfacce in Java'
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 15
---

Un ultriore estensione del concetto di tipizzazione che però non sfocia direttamente nelle classi (nemmeno quelle dati o astratte) è rappresentato dalle **`interface`**, che precedono il momento dell'implementazione.

Da un'interfaccia si costruisce una classe tramite la keyword `implements`.

:::nota
I campi dichiarati in un'interfaccia vanno implementati come pubblici. 
:::

## Ereditarietà Multipla

L'interfaccia descrive l'aspetto generale di un entità dal punto di vista delle sue proprietà e metodi similmente a una classe astratta, ma a un livello superiore:
- le interfacce non sono classi e non possono creare oggetti (non hanno nemmeno un costruttore e *non possono averlo*)
- i campi di una interfaccia sono solo dichiarazioni di tipo e non prevedono alcuna implementazione (come se *tutti i campi fossero obbligatoriamente astratti*):
    - i metodi sono pubblici di default
    - le proprietà sono pubbliche, statiche e di sola lettura (`final`) di default
- le interfacce vanno *implementate* in una classe concreta che dia definizione a tutti i campi dichiarati, ma qui viene la particolarità: *una singola classe può implementare più di una interfaccia ***contemporaneamente*** *

:::oss
A livello pratico, le interfacce implementano una forma di eredità multipla
:::

:::eg
```java
interface GenericInterface {
    public void myProcess();
}
interface OtherInterface {
    public void otherProcess();
}
public class FromInterface implements GenericInterface, OtherInterface {
    public void myProcess() {
        /* .... */
    };
    public void otherProcess() {
        /* .... */
    };
    /* .... */
}
```

**Un'interfaccia può, come le classi, estendere un'altra interfaccia, ma, in più, può estendere due o più interfacce**.

Le interfacce possono essere usate come qualunque altro tipo derivante da una classe per dichiarare variabili, tuttavia, per istanziare il dato serve una implementazione dell'interfaccia come classe altrimenti non si avrebbe costruttore.

:::eg
```java
interface GInterface {
    /* .... */
}
public class GClass implements GInterface {
    /* .... */
}
GInterface variable = new GClass(/* ... */);
```
:::

## Factory di Interface

Dal 2014, *in Java è possibile implementare metodi statici nelle interfacce*, quindi internalizzare la factory.

Questo approccio però genera una dipendenza biunivoca tra interfaccia e classi implementanti che risultano accoppiati e si perde l'aspetto di essere un semplice scheletro dell'interfaccia.

Lo schema più utilizzato per fabbriche di interfaccia è utilizzare un metodo fabbrica detto `of`

```java
public interface MyInterface {
    public static MyInterface of(/* ... */) {
        return new MyClass(/* ... */)
    }
}
```

## Generici

Anche le interfacce posso fare uso dei *tipi generici*:

```java
public interface compareTo<T> {
    public int compareTo(T that);
}
```

questa interfaccia indica un'entità dotata di un metodo `compareTo`, al momento dell'estensione si dichiara quali tipi compara (si può anche usare un altro generico nell'implementazione).

## Interfacce Standard

Interfacce come `compareTo` sono **interfacce standardizzate** che esprimono la presenza di una certa proprietà nella classe implementata. Sono usate come sottoinsieme delle classi per identificare le classi sulla base dei loro comportamenti.

### Interfacce Marker

Altre interfacce possono anche non dichiarare nulla, risultando funzionalmente dei tag; sono dette **interfacce marker**.

Le interfacce "vuote" servono a assegnare un tipo identificabile dal compilatore a una classe; lo scopo non è quello di identificare un comportamento, ma piuttosto una caratteristica arbitraria assegnata alla classe. Si potrebbe, per esempio, creare un'interfaccia `DontPrint` che non ha nessun campo, ma nelle funzioni `print` rigettiamo le istanze di `DontPrint`.