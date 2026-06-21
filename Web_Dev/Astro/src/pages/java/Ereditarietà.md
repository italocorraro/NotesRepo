---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Ereditarietà in Java'
metaTitle: 'Ereditarietà'
description: ''
author: 'Italo Corraro'
order: 11
---

## extends

Una classe si può costruire a partire da un'altra tramite la keyword `extends`:
```java
public class Dog extends Canid {
    /* ... */
}
```

La classe derivata (o "figlia"), eredita tutti i metodi (costruttori esclusi) e proprietà della classe base (o "genitore"); tuttavia, *NON può accedere ai campi privati della classe base*.

In Java, ogni classe deriva implicitamente dalla classe `Object` che fornisce alcuni metodi di base come `toString`, `clone`, `equals` e `hashCode`.

:::nota
Il metodo `clone` è protetto, perché si possa utilizzare, è necessario che venga sovrascritto in una classe derivata come metodo pubblico.

### protected

La keyword `protected` rappresenta un'ulteriore tipologia di visibilità delle variabili:
- consente l'accesso alle classi dello stesso package
- consente l'accesso alle classi derivate

Quindi, i campi *privati* non possono essere toccati fuori dalla specifica classe, mentre i campi *protetti* possono essere alterati da classi che condividono il package o che sono derivate.

:::nota
Visibilità     | `private` | default | `protected` | `public`
 ------------- | --------- | ------- | ----------- | --------
stessa classe  | ✓ | ✓ | ✓ | ✓
stesso package | ✖ | ✓ | ✓ | ✓
sottoclassi    | ✖ | ✖ | ✓ | ✓
resto del programma | ✖ | ✖ | ✖ | ✓
:::

### override

Come si fa' spesso con il `toString()`, che di fatto è un default ereditato da qualunque oggetto, si possono sovrascrivere, nella classe derivata, i metodi (pubblici o protected) della classe base segnandoli prima della dichiarazione con il tag `@Override`.

È buona pratica evitare di modificare la logica del metodo che si sovrascrive, ma bensì espanderla o correggerla conservativamente per adattarla alle estensioni portate dalla classe derivata.

:::nb
Non è contemplato alterare il tipo dei campi
:::

## super

### Costruttore

Il costruttore non viene ereditato (in automatico), ma ha bisogno di essere creato nuovamente nella nuova classe; è *obbligatorio* tuttavia appoggiarsi al costruttore della classe base tramite `super()` che invoca il costruttore della classe base.

:::oss
Se non viene creato un costruttore, di default, la classe derivata invocherà direttamente quello con 0 argomenti della classe base.
:::

### Metodi e Proprietà

La keyword `super` può essere usata anche per invocare metodi e proprietà della classe base dalla classe derivata (NON quelli privati però).

:::nota
`super` è utile da usare (fuori dal costruttore) quando è necessario sciogliere ambiguità su quale metodo/proprietà sta' venendo usato:

di base, `this` permette di chiamare l'ultimo campo definito nella linea ereditaria con quel nome, quindi, se non si ri-definisce una funzione nella classe derivata, usare `this` è equivalente a usare `super`, mentre, se questa certa funzione è stata definita nuovamente dentro la classe derivata, allora si può usare `super` per invocare la versione della classe base.

`super` può anche essere usato per fare uso del metodo del genitore da quello del figlio (ad esempio per espandere l'implementazione invece di sovrascriverla)
:::

## Sottotipo

Una classe derivata viene cosiderata ancora eligibile come la classe madre da tutti i campi che la chiedono; in pratica, se `Car` estende `Vehicle`, allora qualunque istanza di `Car` è anche considerata istanza di `Vehicle`, *ma non viceversa*.

Le classi derivate rappresentano un sottotipo delle relative classi base; per questo è cattiva pratica alterare la logica dei campi ereditati, di modo che, in necessità di `Vehicle`, un `Car` possa rispondere allo stesso modo della classe base.

## Polimorfismo

Un metodo si dice **polimorfo** se è in grado di adattare il suo comportamento allo specifico oggetto su cui opera.

:::eg
Se creassimo una classe `finestra` che apre una finestra di dialogo e la estendessimo a `finestraConMenu`, vorremmo che all'apertura della finestra, per questo sottotipo, si aprisse anche il menù, stesso per la chiusura.   
In pratica serve che un fantomatico metodo `open` si adatti alla finestra che deve aprire.
:::

:::oss
L'operatore `+` è polimorfico: si comporta in modo adattivo rispetto agli operandi.
:::

Non è il compilatore a decidere quale metodo chiamare su una variabile; predispone solo il necessario alla chiamata e non lega immediatamente l'istanza al metodo, infatti la vera chiamata avviene a run-time (*Late Binding*) e cerca il metodo adatto in base a cosa stia effettivamente puntando quella variabile.

:::eg
```java
public class Person {
    /* .... */
    public void print() {
        System.out.println(this.name);
    }
}
```
```java
public class Student extends Person {
    /* .... */
    @Override
    public void print() {
        System.out.println(this.name + ", student at " + this.schoolName);
    }
}
```
```java
Person[] persone = {
    new Person("Mario"), new Student("Gianni","Oxford"), new Person("Anna")
}
for(Person persona : persone) {
    persona.print();
}
/* ↪ Mario
 * ↪ Gianni, student at Oxford
 * ↪ Anna
 */
```
Il metodo `print` si adatta all'oggetto a cui punta la variabile `persona`

:::

### Late Binding

In Java il polimorfismo è statico e verificato a compile time: il compilatore sa esattamente quale metodo chiamare in base al tipo dichiarato e i tipi sono verificati a runtime dalla JVM; la parte importante è che il compilatore deve comunque sapere che un certo metodo è implementato per un tipo.

La scelta del metodo specifico da chiamare avviene a runtime, ma prima, il compilatore appronta per ogni tipo (e sottotipo) una tabella di metodi (*Virtual Method Table*) da consultare e a runtime chiama il metodo dalla tabella del tipo corrispondente.

In breve,
- il tipo garantisce che è presente un'implementazione di un metodo con quel nome, che accetta quei parametri e restituisce quel certo tipo, questa è una verifica fatta a compile-time;
- il polimorfismo stabilisce che il metodo usato a runtime è l'implementazione più specifica disponibile.

### Overloading vs Override

Se un metodo prende tipi diversi ma ha lo stesso nome di un metodo ereditato, avviene semplicemente overloading dei metodi e non c'è bisogno di override.

Se il metodo non viene sovrascritto, le funzioni ereditate permangono come overload.

## Metodo equals

Il metodo `equals` viene ereditato da tutte le classi da `Object`:
```java
public boolean equals(Object that) {
    return this === that;
}
```

In realtà questo può risultare un problema per le classi derivate: poiché generalmente la loro versione del metodo prevederà il confronto tra oggetti di quella classe, eventualmente confrontando alcuni dei loro campi, l'`equals` generico di `Object` rimarrà come overload e verrà usato se necessario confrontando direttamente i riferimenti.

Se questo comportamento non fosse desiderato (generalmente è così), la soluzione sarebbe quella di utilizzare la stessa signature della `equals` di `Object` per fare override del metodo:
```java
@Override
public boolean equals(Object obj) {
    Subclass that = (Subclass) obj;
    /* .... */
}
```

Questa "soluzione" non blocca la comparazione tra oggetti di tipo diverso, ma lancia un'eccezione nel caso in cui si acceda a qualche campo di classe non presente sull'oggetto passato per argomento.

```java
public boolean equals(Object obj) {
    Counter that = (Counter) obj;
    /* se `that` NON è un Counter o derivato,
     * viene lanciato un errore */
}
```

Per stare sicuri, conviene verificare il tipo invece di fare un cast alla cieca:
```java
@Override
public boolean equals(Object obj) {
    if(obj instanceof Subclass) {
        Subclass that = (Subclass) obj;
        return /* equals? */
    } else return false;
}
```

:::eg
```java
public boolean equals(Object obj) {
    if(obj instanceof Counter) {
        Counter that = (Counter) obj;
        return this.getValue() == that.getValue();
    } else return false;
}
```
:::oss
Dopo l'`if` viene fatto comunque un cast, che sembra ridondante visto nel blocco `if` sappiamo già che `obj` è un'istanza di `Counter`;

per smaltire questo passaggio è stata introdotta una scrittura breve che esegue automaticamente il cast:
```java
public boolean equals(Object obj) {
    if(obj instanceof Counter that) { 
        // that contiene (Counter) obj
        return this.getValue() == that.getValue();
    } else return false;
}
```
:::

La versione completa di `equals` è
```java
@Override
public boolean equals(Object obj) {
    if(obj instanceof Subclass that) {
        return /* metodo equals tra this e that */
    } else return false;
}
```