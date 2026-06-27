---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Introduzione'
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 0
---

## Infrastrutture per i Linguaggi

A ogni linguaggio di programmazione serve un'infrastruttura standardizzata su cui operare, in modo che l'applicazione sia indipendente dalla specifica configurazione hardware/software che la usa. 

*L'obiettivo è di scrivere codice una volta e utilizzarlo ovunque*.

- L'applicazione non arriva direttamente al sistema operativo, ma passa per uno strato intermedio.
- Il compilatore genera codice per questa infrastruttura standard; il codice è unico.
- Le librerie non sono contenute direttamente nel codice compilato, ma vengono caricate e collegano dinamicamente (*a run time*) i componenti[^1].
- L'infrastruttura gestisce la comunicazione con il SO appoggiandosi ad uno strato base di ulteriore astrazione detto **macchina virtuale**[^2], cioè un "finto" processore, interamente software, che utilizza le risorse fisiche del dispositivo che lo ospita.

L'infrastruttura serve come astrazione per il linguaggio di programmazione.

La **Java virtual machine** (JVM) è quella che permette ai computer di eseguire programmi compilati da Java; i componenti sono compilati in **Java bytecode**, questi componenti hanno delle specifiche, che se rispettate permettono anche ad altri programmi di girare sulla JVM, infatti, anche linguaggi come Scala e Kotlin compilano in Java bytecode e usano la JVM.

Lo strato infrastrutturale di Java si chiama **Java Runtime Environment** (JRE), che deve essere installato sul dispositivo che vuole eseguire il codice.

**C#** usa uno schema simile: lo strato infrastrutturale è la piattaforma *.NET*.


[^1]: il collegamento viene fatto in modo dinamico per adattarsi al cambiamento del componente (un componente può cambiare da solo, senza dover ri-compilare l'intero codice); in precedenza si aveva un eseguibile auto-contenuto, che però andava ricompilato per intero ad ogni modifica.
[^2]: lo strato extra genera un minimo overhead, ma è una perdita di pochi microsecondi, irrilevante per la quasi totalità delle applicazioni.

### JDK 

Per lo sviluppo software di applicazioni Java, il kit di sviluppo JDK (*Java Development Kit*) include già JRE + vari altri strumenti utili allo sviluppo:
- estrattore automatizzato di documentazione (dai commenti) in manuale HTML
- esecutore automatico di una *suite di test*
- deployment ottimizzato: l'applicazione è compattata, ma non necessita di essere scompattato per essere eseguito

## Linguaggi Procedurali e a Oggetti

I linguaggi come il C adottano un approccio procedurale per le operazioni, cioè:

```C
operation(comp, parameters);
// l'enfasi è sull'operazione da svogere
fprintf(fout, "Hello!");
```

questo approccio ha senso solo per programmi semplici dove il destinatario è sempre lo stesso o implicito.

I linguaggi orientati agli oggetti enfatizzano invece *l'entità* a cui chiediamo di svolgere operazioni:

```java
comp.operation(parameters);
// l'enfasi è su chi svolge l'operazione
System.out.println("Hello!");
```

:::oss
Le *entità* non sono solo in grado di svolgere operazioni, ma hanno diverse proprietà: possono includere anche altre entità annidate.

Le funzioni di un oggetto sono dette *metodi*,

:::eg
`printl` è un metodo dell'oggetto `out` che appartiene a sua volta a `System`
:::

### Architetture a Oggetti

Un'applicazione a oggetti è una struttura di entità:

- le entità *statiche*, che esistono da prima dell'esecuzione del programma e permangono anche dopo; in Java sono le **classi**
- le entità *dinamiche*, che vengono definite a runtime e vengono eventualmente distrutte; in Java sono gli **oggetti**

Le entità non sono isolate le une dalle altre, ma comunicano tra loro.

### Compilatore

Nei linguaggi a oggetti, il compilatore è molto più stringente su, ad esempio, i tipi, ma introduce anche molte migliorie alla sintassi quali i *riferimenti*, che sostituiscono i puntatori, alla gestione della memoria con *allocazione (e deallocazione) dinamica* tramite meccanismo di *garbage collection* (cioè viene gettato via solo quello che non è più referenziato nel codice in esecuzione *a runtime*).

:::nota
Java non fa type inference, cioè non assegna autonomamente (a compile time) il tipo a un dato in base al contenuto con cui viene inizializzato;

linguaggi come Scala o Python invece possiedono questo meccanismo
:::

Per compilare da terminale bisogna invocare il compilatore e puntarlo al file.

Il compilatore Java si chiama *javac* e genera il bytecode Java eseguibile sull'infrastruttura Java


### Il Main

Tra le entità statiche figura anche il **main**, da cui parte l'applicazione.

In Java, il main 
- deve essere contenuto in una classe *pubblica*,
- è *statico* (quindi permanente)
- non restituisce nulla (è *`void`*)
- si chiama *`main`*
- ha una stringa di parametri che rappresentano gli argomenti del main

```java
public class Program {
    public static void main(String[] args) {
        // I am MAIN (and I must be PUBLIC)
    }    
}
```

:::oss
Confronto tra
* C
```c
// file Prog.c
int main(int argc, char* argv[]) {
    int x = 3, y = 4; 
    int z = x + y;
}
```
* Java
```java 
public class Prog {
    public static void main(String[] args) {
        int x = 3, y = 4;
        int z = x + y;
    }
}
```
* C#
```csharp
public class Prog {
    public static void Main(string[] args) {
        int x = 3, y = 4;
        int z = x + y;
    }
}
```
* Scala
```scala
object Main {
    def main(args: Array[String]): Unit = {
        var x:Int = 3;
    }
}
```
* Kotlin 
```kotlin
fun main(args: Array<String>): Unit {
    var x:Int = 3;
}
```

:::

### La Documentazione

Per scrivere documentazione si uso lo strumento automatizzato *javadoc*, che estrae tutti i commenti che iniziano con `/**` e li ripropone in un documento in formato html.

Il simbolo `@` serve a indicare un tag di metadati, ad esempio `@author` per indicare l'autore; il tag non viene riportato nella documentazione.

Javadoc va' invocato separatamente dal compilatore

:::eg
```console
javadoc -d docs Esempio0.java
```
La documentazione nel file *Esempio0.java* viene estratta e scritta in un html nella cartella docs.

:::nota
è ammesso utilizzare tag html nel commento per javadoc; questi verranno riproposti nella documentazione così come sono
:::

Altri tag utili sono `@version` che indica la versione e `@param` che permette di dare una descrizione ai parametri definiti per una funzione o le variabili di stato di una classe

## Il Deployment in Java

In un linguaggio a oggetti come Java, l'eseguibile è sempre un archivio compresso (chiamato JAR per Java), ma con alcune importanti differenze rispetto al C:

- internamente all'archivio ogni classe ha il proprio file, in questo modo mantengono tutte la propria individualità
- l'archivio non va' scompattato per eseguire l'applicazione
- una cartella, META-INF, contiene il file *MANIFEST.MF* (file do testo), che evidenzia le informazioni essenziali dell'applicazione, in particolare, indica la classe che contiene il main, ovvero l'entry point dell'app

*jar* è uno strumento da riga di comando incluso nel JDK che permette di assemblare il JAR: `jar cf nomearchivio.jar <classi>`.

:::nb
Questo metodo non crea un file manifest; adatto quindi solo per librerie.

Per creare anche il manifest si usa `cmf` o `cef` invece di `cf`:
- `jar cmf manifest.txt nomeapp.jar <classi>`
- `jar cef nomeClasseMain nomeapp.jar <classi>`
:::oss
Se tutte le classi si trovano nella stessa cartella, è possibile indicarle tutte con un `*`: `jar cef main.class MyApp.jar *.class`
:::

Per eseguire da console l'applicazione Java si usa il comando -jar:
```console
java -jar MyApp.jar
```

### Librerie

Sia il compilatore che l'infrastruttura necessitano di conoscere il path alle librerie usate in un app Java, tramite il comando -cp:

```console
javac -cp Lib.jar MyMain.java
```
oppure
```console
javac ../libraries/Lib.jar MyMain.java
```
quando la libreria non si trova nella stessa cartella

La libreria va' indicata nel manifest:
```txt
Class-Path: ..../Lib.jar
```

### Esempio

Compilare un file `.java` restituisce un file `.class`,
per creare una libreria, usiamo il comando `cf`:
```console
javac lib.java           => lib.class
jar cf lib.jar lib.class => lib.jar
```

Compiliamo l'applicazione:
```console
javac -cp lib.jar MyApp.class              => MyApp.class
jar cmf manifest.txt MyApp.jar MyApp.class => MyApp.jar
```
dove manifest.txt riporta sia il main che la libreria:
```txt
Manifest-Version: 1.0
Class-Path: lib.jar
Created-by: 1.14.0_1
Main-Class: MyApp
```

Per eseguire:
```console
java -cp lib.jar;. MyApp (visto che il main è anche l'applicazione)
```
oppure
```console
java -jar MyApp.jar (il manifest indicherà la libreria e il main)
```

:::nota
Se la libreria non è nella posizione specificata, allora verrà lanciato un errore per indicare le classi di libreria usate, ma che senza la libreria non sono definite
:::


:::eg
Creiamo una funzione che calcoli il fattoriale e usiamola per calcolare alcuni fattoriali nel main (come piccoli test):

```java
public class Main {
    public static int fact(int x) {
        return x == 0 ? 1 : x * fact(x - 1);
    }
	public static void main(String[] args) {
		System.out.println(fact(3) == 6);
		System.out.println(fact(6) == 720);
		System.out.println(fact(8) == 40320);
        // dovrebbero risultare tutti true
	}
}
```
:::

:::eg
Creiamo una funzione MCD (massimo comun divisore) all'interno di una libreria (chiameremo "MyMath"); useremo la funzione per calcolare il MCD tra due valori *interi* forniti da riga di comando (come stringhe):

```java
// Prima la funzione nella libreria
public class MyMath {
    public static int MCD(int a, int b) {
        int min = a < b ? a : b;
        int mcd = 1;
        for(int i = 1; i <= min; i++ ) {
            if(a % i == 0 && b % i == 0) mcd = i;
        }
        return mcd;
    }
}
```
Poi l'uso nel main:

```java
public class Main {
	public static void main(String[] args) {
		int a = Integer.parseInt(args[0]);
		int b = Integer.parseInt(args[1]);
		
        System.out.println(MyMath.MCD(a, b));  
	}
}
```
:::nb
`Integer.parseInt()` lancia un'eccezione se gli viene passata una stringa che non rappresenta un intero; diversamente, `parse*()` delle classi `Double` e `Float` resituisce una costante speciale `NaN`.

In questo esempio abbiamo dato per scontato che gli argomenti passati fossero validi.
:::

## Memoria Dinamica

A gestire l'allocazione (e deallocazione) dei dati in memoria è il protocollo di *garbage collection*;

il *garbage collector* alloca dinamicamente memoria all'occorrenza e dealloca memoria occupata da dati che non sono più referenziati dal codice in esecuzione (*garbage*).