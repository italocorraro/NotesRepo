---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Packages e Moduli'
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 4
---

## Package

I costrutti *package* permettono di definire e delimitare un pacchetto software costituito da più classi;

all'interno di un package le classi *non possono avere lo stesso nome*, ma due classi appartenenti a package diversi possono avere lo stesso nome.

I package permettono di organizzare le classi ed evitare conflitti di nomi.

### Visibilità di Package

Ai livelli di visibilità pubblico e privato, si aggiunge un terzo livello intermedio, cioè una visibilità ristretta al package.

*In Java, la visibilità di package è il default*: se una variabile non viene contrassegnata come `public` o come `private`, allora ha visibilità di package.

## Nome del Package

Per convenzione di Java, *i package DEVONO avere un nome tutto in lettere minuscole e deve essere unico* per il progetto.

Per riferirsi a una certa entità appartenente ad un certo package occorre scrivere il nome del package e chiedergli l'entità come se il package fosse una classe e avesse l'entità come una sua proprietà: `packagename.ClassName.property`.

Per convenzione, i nomi dei package pubblici (al mondo) si costruiscono invertendo l'ordine delle parole che costituiscono il dominio (su internet) del pubblicatore; ad esempio, il dominio dell'univaersità di Bologna è "www.unibo.it", quindi, se dovesse pubblicare dei package, questi si chiamerebbero "it.unibo".

### Package di Default

Di default, esiste un package senza nome a cui vengono attribuite tutte le classi che non appartengono ad altri package; alle classi appartenenti a questo package ci si riferise semplicemente con il loro nome.

Nonostante la semplicità, questo package ha il grosso svantaggio di non offrire alcuna separazione (nè logica, nè fisica) tra le classi ed è pertanto da evitare se non assolutamente necessario.

### Direttiva import

La direttiva `import` genera un alias con cui riferirsi a un nome: 

```java
// importa la singola classe
import it.unibo.utilities.Point;
// importa tutte le classi nel package
import it.unibo.utilities.*;
```

:::nb
- Possono essere importate solo classi pubbliche
- Java non ammette la possibilità di assegnare un nome personalizzato agli import.
:::

### File System

Java richiede una corrispondenza obbligatoria tra nome del package e nome della cartella (e percorso) in cui sono presenti le classi del package.

Nomi di package multi-livello (separati da `.`) devono corrispondere a cartelle correttamente innestate.

:::eg
La classe il cui nome completo è `it.unibo.Point` DEVE trovarsi a `\it\unibo\Point.class` (parte dalla root del path in questo caso)
:::

:::nb
Il nome multi-livello deve avere la corretta corrispondenza fisica, ma non è necessario che a cartelle annidate corrispondano package annidati; 
:::eg
per avere `\it\unibo\Point.class` basta avere 1 package con nome multi-livello con nome `it.unibo` che contenga la classe `Point`;

a livello di programma, il pacchetto `it` può essere completamente separato dal pacchetto `it.unibo` (a livello di file system saranno innestati), questa modalità permette di importare il contenuto del pacchetto `it` senza anche importare `it.unibo` poichè sono logicamente separati.
:::

:::nota
Le classi fondamentali di Java sono definite nel package `java.lang` che viene implicitamente importato in tutte le classi del linguaggio;

non è l'unico package di utilities generali in Java, ci sono anche `java.util`, `java.io`, `java.text`, `javafx`...
:::

### Import Static

La direttiva `import` permette di eseguire importazioni statiche *di classi*, ma non di metodi statici o costanti; la direttiva `import static` permette di importare tutti i membri statici di una classe:

```java
import static java.lang.Math.*;
/* adesso possiamo usare i metodi statici
 * di math senza chiamare la classe */
```

:::nb
Importare i membri statici da una classe non conserva le informazioni sull'origine per quei membri, quindi se il metodo non funziona come ci si aspetta o la costante è diversa da quella attesa, l'origine risulterà la classe in cui si è verificato l'errore e non quella in cui è stato definito
:::

## Modulo

Un modulo in Java è una collezione di package, tuttavia non hanno una rappresentazione a livello di file system.

Un modulo è definito tramite un file che specifica 
- quali package siano accessibili dall'esterno (`exports`)
- di quali altri moduli è richiesta la presenza (`requires`)

:::eg
```java
module moduleC {
    exports package1, package2;
    requires moduleA, moduleB;
}
```
:::

Anche se un modulo non ha corrispondenza fisica, a garantire che sia uno spazio limitato a una collezione di package è il compilatore.

Le convenzioni di naming sono le stesse che per i package con l'importante aggiunta della convenzione secondo cui il nome di un modulo sia lo stesso del suo package di top-level.

Le librerie modulari si troveranno in un percorso a parte, il *module path*, mentre le librerie standard nel *class path*.

I moduli non sono obbligatori, infatti, come per i package, esiste un modulo di defalt senza nome a cui appartengono tutti i package che non appartengono ad altri moduli; questo modulo esporta tutto e non richiede nessun altro modulo.

:::oss
I moduli in Java funzionano similmente a un indice di archivio, che non sono rappresentazioni fisiche, ma sono certamente la prima interfaccia che troviamo quando dobbiamo accedere a elementi dell'archivio
:::