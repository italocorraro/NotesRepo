---
layout: ../../layouts/serious/LayoutAstro.astro
title: "Basi di Java"
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 1
---

## Tipi Primitivi

Java mantiene le nozioni di **tipi primitivi**, cioè *dati puri*, che non hanno alcuna proprietà o metodo e possono solo essere "usati".

Tipo   | Dimensione | Descrizione  
 --------- | ---------- | :---------- 
 `byte`    | 1 byte     | Numero intero tra -128 e 127 ($2^7$)
 `short`   | 2 byte     | Numero intero tra $-2^{15}$ e $2^{15}-1$
 `int`     | 4 byte     | Numero intero tra $-2^{31}$ e $2^{31}-1$
 `long`    | 8 byte     | Numero intero tra $-2^{63}$ e $2^{63}-1$
 `float`   | 4 byte     | Numero frazionario con fino a 7 cifre decimali
 `double`  | 8 byte     | Numero frazionario con fino a 16 cifre decimali
 `boolean` | 1 byte     | vero/falso (letteralmente solo `true` o `false`)
 `char`    | 2 byte     | Un carattere codificato in UTF-16 secondo UNICODE

:::nb 
In Java sono ammessi assegnamenti SOLO se non causano perdita di informazione; cioè, un dato delle dimensioni di un double NON può essere passato a un float

Il compilatore lancia un errore di perdita di precisione nel caso

Una conversione con perdita di informazioni va' fatta con un *type cast*:

```java
float f = (float) definitelyNotFloat;
```
:::

In Java i tipi sono *statici*, cioè le variabili non possono cambiare tipo dopo essere state dichiarate.

:::nota
La keyword `var` serve a chiedere al compilatore di assegnare il tipo alla variabile dichiarata in base al suo valore; il tipo assegnato rimane statico e viene assegnato al momento della dichiarazione
:::

### Classi per i Tipi

Per ogni tipo primitivo esiste una classe (il cui nome è lo stesso del tipo con la prima lettera maiuscola, tranne `int` che diventa `Integer`) che contiene diversi metodi specifici per il tipo che rappresenta

:::eg
```java
char gg = 'g';
char GG = Char.toUpperCase(gg);
```
:::


## Componenti Software

- **Librerie**: le librerie sono componenti statici *senza stato* interno, sono cioè, collezioni di funzioni per le quali non è necessario avere più copie

- **Moduli**: i moduli come *singleton* sono componenti statici *con stato*; sono oggetti in unica copia (singleton) con uno stato unico globale che va' gestito: poichè il modulo *ricorda* le sue funzioni che sono state chiamate (si suppone che alterino lo stato in qualche modo), l'ordine in cui vengono chiamate è importante

- **Abstract Data Types**: i tipi di dato astratto (ADT) sono definiti prima e poi vengono implementate diverse funzioni per quel tipo, che sono le sole operazioni ammissibili per il tipo; il cliente può poi creare più variabili di quel tipo in base alla necessità

### Collaudo

Progettare il componente è solo il primo passo, il secondo è progettare *il collaudo*:
- progettiamo delle verifiche da fare alle risposte del componente con certi input
- ci aspettiamo certe risposte specifiche
- il collaudo deve restituirci un risultato dai test
- il collaudo non va' in produzione e non deve inquinare il codice

:::nb
Il collaudo non va' limitato alle singole funzioni del componente, ma deve estendersi anche a sequenze di operazioni, poiché lo stato non è determinato unicamente dall'ultima operazione eseguita, ma da TUTTE quelle precedenti
:::

In java, i collaudi sfruttano la keyword **`assert`** per condurre test;
`assert` valuta un'espressione booleana e, se l'espressione viene valutata come falsa, lancia un `AssertionError` (è un'eccezione, non un errore di compilazione).

Per creare un test con `assert`, si fornisce un'espressione booleana che verifica se la parte di programma che sta' venendo testata fornisce la risposta attesa.

Le asserzioni non vengono eseguite automaticamente dal programma, ma solo se esplicitamente richiesto, in questo modo, il compilatore può ignorarle quando non sono più utili.

I test con `assert` non vengono fatti nel codice di produzione, ma vengono inseriti in documenti a parte; solitamente, uno strumento automatizzato esegue i test a ogni compilazione (per Java in Eclipse è JUnit). Un insieme di file che eseguono test (solitamente ciascun file testa un file specifico) è detto una *suite di test*.

I test non restituiscono semplicemente "errore" o nulla, ma una di tre possibili risposte:
- "successo", se il test è stato portato a compimento e il risultato è quello atteso
- "fallimento", se il test è stato portato a compimento MA il risultato NON è quello atteso
- "errore", se il test NON è stato portato a compimento e quindi il risultato NON può essere valutato
Viene inoltre indicato quale test ha risportato ciascun risultato.

### Tipi di Dato Astratto
In C, il *typedef* permette di creare dei tipi di dato astratto, ma non permette **incapsulamento**, cioè ogni cosa definita per il tipo non è protetta e può essere acceduta dall'esterno, inoltre, non essendo possibile definire funzioni proprie di un'identità, per operazioni che devono modificare lo "stato" è necessario passare il puntatore allo stato

:::eg
```c
#include "counter.h"
main() {
    int v1, v2;
    counter c1, c2;
    // per resettare il contatore serve passare i puntatori a reset()
    reset(&c1); reset(&c2);
    // anche per incrementare i contatori serve passare il puntatore 
    inc(&c1);
}
```
:::

In C non esiste la possibilità di passare per riferimento un'entità.

In Java, le Classi (e gli oggetti) sono implementate con incapsulamento 

## Le Classi

### Proprietà Private e Pubbliche

In Java, il componente con stato è rappresentato dalla **`class`**, che ha solo membri statici, inoltre, la visibilità del componente e dei membri definiti al suo interno è determinata tramite le keyword `public` e `private`, che determinano se l'entità è visibile anche all'esterno del file.

:::eg
```java
public class Counter {
    // definiamo il counter, accessibile solo al componente
    private static int count; 
    // una funzione pubblica restituisce il valore del counter
    public static int getValue() {return count;}
    /* In questo modo, all'esterno del componente, è possibile
     * svolgere solo operazioni pre-determinate con lo stato */

    // forniamo dei metodi per aumentare e resettare il counter
    public static void inc() {count++;}
    public static void reset() {count=0;}
}
```
:::oss
La variabile di stato `count` non è inizializzata; per usare `Counter` è necessario resettarlo prima
:::

### Proprietà Statiche e Dinamiche

Solo entità statiche possono operare su altre entità statiche, o meglio, le entità dinamiche possono alterare solo altre entità dinamiche, mentre quelle statiche possono alterare sia statiche che dinamiche.

Gli oggetti statici esitono dall'inizio del programma e quindi non vanno "creati" prima di essere usati.

### Final

Qualificando `final` una variabile (inizializzata) si previene la sovrascrittura del suo valore:

```java
final int ZERO = 0;
```

## Gli Oggetti

Gli *oggetti*, sono componenti software creati usando le classi come stampo:
- hanno la stessa struttura interna (stesse proprietà e stessi metodi)
- hanno ciascuno un'identità propria

Si dice che un oggetto è *istanza* di una classe quando è stato creato a partire da quella classe.

:::eg
```java
public class Main {
    public static void main(String[] args) {
        // creiamo il riferimento a un contatore
        Counter c;
        // creiamo il counter dalla classe Counter
        c = new Counter();
        // c è un RIFERIMENTO a un oggetto Counter
    }
}
```
:::

:::oss
In questo senso, le classi sono dei tipi personalizzati e gli oggetti sono variabili che appartengono a quel tipo
:::

### I Costruttori

Un po' di terminologia: 

- **Inizializzare**: dare un valore iniziale a un oggetto esistente
- **Creare**: allocare memoria per un nuovo oggetto
- **Costruire**: creare e inizializzare un nuovo oggetto
- **Modificare**: alterare un oggetto esistente

:::oss
In passato, con l'obbiettivo di ottimizzare l'uso della memoria, era quasi sempre preferibile, quando si effettuava un'operazione che doveva restituire un oggetto derivato da un altro, *modificare* l'oggetto piuttosto che crearne una nuova istanza; oggi, invece, la memoria non pone problemi ed è quindi preferibile costruire un nuovo oggetto a meno che non si sia certi che quello di partenza non serva più 

:::eg
Costruiamo un oggetto frazione che si vuole ridurre ai minimi termini:
- l'oggetto di partenza supponiamo abbia come stato le variabili numeratore e denominatore (es. $4/6$)
- vogliamo la frazione ridotta ai minimi termini ($2/3$); dobbiamo decidere se modificare quella di partenza o costruire un nuovo oggetto con la frazione minimizzata
- la prassi odierna è di implementare un metodo che restituisca un nuovo oggetto frazione a partire da quella corrente ridotta ai minimi termini:
    - la frazione originale rimane inalterata
    - la frazione minimizzata è a sé stante
:::

Le classi hanno la possibilità di definire un metodo speciale, detto **costruttore**, che permette di creare e inizializzare l'oggetto in un singolo passaggio:

```java
Counter c = new Counter(3, 4);
```

gli argomenti passati a `Counter` preceduto dall'operatore `new` vanno al *costruttore* della classe, che possiamo definire al suo interno come una funzione omonima della classe:

```java
public class Counter {
    // stato
    private int count;
    // costruttore primario
    public Counter(int start) {
        count = start;
    }
    // costruttore ausiliario
    public Counter() {
        count = 0;
    }
}
```

- Il costruttore deve essere OBBLIGATORIAMENTE omonimo della classe di appartenenza,
- non ha nessun `return`, nemmeno un tipo di ritorno (nemmeno `void`),
- il costruttore viene invocato automaticamente alla creazione di un oggetto tramite `new`, anche se non vengono passati argomenti,
- di default, ogni classe ha un costruttore implicito che non prende argomenti,
- il costruttore non è necessariamente unico, se ce ne sono di più, Java sceglie quello più adatto alla situazione confrontando gli argomenti passati alla creazione dell'oggetto con i parametri che i possibili costruttori richiedono; la scelta è fatta scorrendo i costruttori *in ordine di definizione*,
- il primo costruttore che viene definito è detto *costruttore primario*; i successivi sono *costruttori ausiliari*
 
:::nb
Avere costruttori multipli è ammesso SOLO SE richiedono parametri di tipo diverso o un numero diverso di parametri
:::

:::nota
In casi specifici, può avere senso non lasciare dei costruttori pubblici per uso dell'utente; questa possibilità è presente per togliere o limitare il controllo al cliente sulla creazione degli oggetti, che invece avviene in modo molto più controllato tramite metodi interni
:::

## I Riferimenti

Il riferimento è un'astrazione di livello più alto rispetto ai puntatori del C che implementa automazione e protezione del referenziamento:

- il riferimento contiene l'indirizzo di un oggetto (mai di un tipo primitivo)
- l'indirizzo contenuto *non è manipolabile* a differenza dei puntatori
- non esiste alcuna aritmetica per i riferimenti (niente * o &)
- il deferenziamento è automatico, proteggendo le aree della memoria da usi scorretti dei puntatori
- la sintassi del `.` permette di accedere, in modo controllato, ai campi dell'oggetto referenziato

:::oss 
I linguaggi a oggetti introducono una netta distinzione tra tipi primitivi e astratti: le variabili contengono dati di tipo primitivo (nessun riferimento), mentre i riferimenti sono esclusivi degli oggetti.

Da questo consegue che *i tipi primitivi sono SEMPRE passati per valore*, *gli oggetti sono SEMPRE passati per riferimento*

Altri linguaggi, come Scala e Kotlin, implementano solo oggetti (spariscono i tipi primitivi), in questo modo tutto può essere trattato con la stessa logica.
:::

### Operazioni Ammesse

- I riferimenti possono puntare a "nulla", se gli si assegna la costante `null`, che non possiede proprietà,
- non è necessario inizializzare un riferimento al momento della definizione,
- copiare un riferimento in un'altra variabile genera un riferimento che però *punta allo stesso oggetto*, quindi, in pratica, *genera un alias*,
- per fare una vera copia di un oggetto occorre costruirne uno nuovo (*`new`*) con lo stesso stato interno dell'originale,
- *operazioni tra riferimenti coinvolgono gli indirizzi* che contengono: due riferimenti sono uguali se puntano allo stesso oggetto (*avere lo stesso stato non è sufficiente a determinare equivalenza*),
- è convenzione, per ogni classe, implementare un metodo `equals` che implementa il concetto di uguaglianza tra gli oggetti di quella classe

## this

La keyword `this` all'interno di un metodo, fa riferimento all'oggetto corrente (quello su cui si è invocato il metodo); è convenzione chiamre *that* eventuali riferimenti ad altri oggetti che vengono passati come argomento ai metodi

:::eg
```java
public class Counter {
    private int count;
    // possiamo usare this per disambiguare situazioni di omonimia
    public Counter(int count) {this.count = count;}
    public Counter() {count = 1;}

    public boolean equals(Counter other) {
        return this.count == other.count;
    }
}
```
:::oss
Abbiamo chiamato `count` del contatore `other` anche se è un suo campo privato
:::

### this per i Costruttori

Con `this` è possibile chiamare il costruttore da dentro la classe:

:::eg
```java
public class Counter {
    private int count;

    public Counter(int count) {this.count = count;}
    // this() chiama il costruttore generale ^
    public Counter() {this(1);}
}
```
:::

Questa proprietà di `this` può essere usata a cascata:

```java
public class Point {
    private double x, y, z;
    public Point(double x, double y, double z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    public Point(double x, double y) {
        this(x, y, 0);
    }
    public Point(double x) {
        this(x, 0);
    }
}
```

### Campi private

Java permette a un oggetto di accedere ai campi privati di un altro oggetto SE appartengono alla stessa classe, cioè *l'incapsulamento è applicato SOLO a livello di classe*

:::eg
Abbiamo visto 
```java 
public boolean equals(Counter other) {
    /* accediamo a count di other
     * anche se è un campo privato */
    return this.count == other.count;
}
```
ma potevamo benissimo usare `getValue()` e non violare l'incapsulamento:
```java 
public boolean equals(Counter other) {
    /* accediamo a count di other
     * tramite il metodo predisposto */
    return this.getValue() == other.getValue();
}
```
:::

Questa flessibilità nell'incapsulamento libera il progettista dall'obbligo di creare un metodo pubblico di accesso allo stato.

*Sarebbe buona prassi non violare l'incapsulamento se non è strettamente necessario.*

## Overloading

In Java, una classe ammette più funzioni omonime a patto che abbiano una lista di argomenti diversa

:::eg
```java
public class Counter {
    private int count;

    public Counter(int count) {this.count = count;}
    public Counter() {this(1);}

    public void inc() {this.count++;}
    public void inc(int increase) {this.count += increase;}
}
```
invece che avere due funzioni separate
```java
public class Counter {
    private int count;

    public Counter(int count) {this.count = count;}
    public Counter() {this(1);}

    public void incBy1() {this.count++;}
    public void incByK(int k) {this.count += k;}
}
```
:::

## Overrun

Alcuni metodi sono già definiti di default per gli oggetti; è necessario fare override di questi metodi se se ne vuole creare uno omonimo; usare l'annotazione `@override` indica l'esplicita intezione di fare questa operazione (si applica anche a tutti gli altri metodi già definiti):

```java
@Override 
public String toString() {
    // toString diversa
}
```

:::nota
L'annotazione `@override` non è strettamente necessaria, tuttavia il compilatore genererà un warning se non viene inserita dove opportuno
:::