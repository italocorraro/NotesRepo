---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Eccezioni in Java'
metaTitle: 'Eccezioni'
description: ''
author: 'Italo Corraro'
order: 19
---

Non tutte le operazioni vanno sempre a buon fine, in casi di errore per cui l'esecuzione del programma non può continuare normalmente, allora viene "lanciata" un'*eccezione*.

## Checked e Unchecked Exceptions

Java distingue le **eccezioni** in due categorie:
- **a controllo obbligatorio** (*checked*): viene verificata a compile-time e obbliga ad essere risolta esplicitamente, cioè, il compilatore verifica la presenza di operazioni che possono lanciare eccezioni a controllo obbligatorio e che queste siano tutte eventualmente gestite, altrimenti non compila
- **a controllo facoltativo** (*unchecked*): viene lanciata a runtime, ma non richiede esplicitamente di essere gestita

Le checked exception derivano da `Exception`, mentre le unchecked exception derivano da `RuntimeException`.

Le eccezioni a controllo obbligatorio sono utili a bassa complessità, dove è ragionevole pensare che il chiamante sappia con cosa ha a che fare e sia in grado di gestirla.

In programmi molto stratificati, le eccezioni a controllo obbligatorio sono di difficile gestione perchè è molto probabile che il livello di astrazione sia tale da supporre che il chiamante che riceve l'eccezione non sappia minimamente da dove venga o quale sia il problema.

## Try... Catch

Tutte le operazioni che interagiscono con l'ambiente esterno hanno la possibilità di fallire a prescindere dalla qualità del codice; tipicamente vogliamo sapere in anticipo quali operazioni sono a rischio per gestirle.

Le operazioni che potrebbero generare un'eccezione si possono racchiudere in un blocco **`try`** associato a uno o più blocchi **`catch`** a cui viene passato l'errore generato nel `try`:
```java
try {
    // operazione pericolosa
}
catch(ErrorType e) {
    /* .... */
}
```

Ci possono essere più blocchi `catch` per gestire tipi di errore diversi.

Gli oggetti eccezione contengono di default un messaggio accessibile con il metodo `getMessage()`.

### Finally

Al termine di un blocco `try` (eventualmente dopo `catch`) si può inserire un blocco `finally` che include codice che viene eseguito a prescindere da errori al termine di `try` o `catch`; il suo utilizzo è orientato al rilascio di risorse che si erano impegnate per l'operazione nel `try` (ad esempio chiudere un file che si era aperto).

## Eccezioni Parse

I formattatori di valori numerici di `NumberFormat` lanciano eccezioni a controllo obbligatorio nei metodi `parse`; l'eccezione è un oggetto `ParseException`.

:::oss
I metodi `parse` ricorrono a vari fallback prima di lanciare l'eccezione, ma questo può generare comportamenti indesiderati;

i metodi prendono anche un secondo argomento che viene riempito con una `ParsePosition` che indica fino a dove la stringa è stata parseata e non lancia nessuna eccezione, ma naturalmente bisogna poi validare manualmente il risultato ed eventualmente lanciare manualmente un'eccezione.
:::

## Lanciare Eccezioni

Per lanciare un'eccezione serve creare un'istanza appropriata di `RuntimeException` o `Exception` ed emetterla tramite la keyword `throw`.

In generale, nella documentazione, un metodo che può lanciare un'eccezione lo deve riportare con un'annotazione `@throws` (teoricamente necessaria anche per le eccezioni lanciate manualmente, ma nella maggior parte dei casi si riportano solo le eccezioni che non sono ovvie).

:::eg
Questa sarebbe un'eccezione ovvia
```java
/**
 * @param num - numeratore della frazione
 * @param den - denominatore della frazione
 * @throws IllegalArgumentException per denominatore nullo
 */
public Fraction(int num, int den) {
    if(den == 0)
        throw new IllegalArgumentException(
            "Il denominatore di una 
            frazione non può essere nullo"
        );
    this.num = num; this.den = den;
}
```
La seguente è meno ovvia
```java
/**
 * @param nome - nome della fermata
 * @return il minuto di percorrenza di quella fermata nella linea
 * @throws IllegalArgumentException se il nome non rappresenta una fermata della linea
 */
public int getOrarioPassaggioAllaFermata(String nome) {
	for(int key : this.orari.keySet()){
		Fermata maybe = this.orari.get(key);
		if(maybe.getNome().equals(nome)) return key;
	}
	throw new IllegalArgumentException(nome + " non è presente tra le fermate di linea con id: " + this.getId());
}
```
:::

### Nuove Eccezioni

Soprattutto per gestire in modo appropriato un'eccezione, è utile generare una versione personalizzata di un'eccezione che indichi già, con il proprio tipo, il metodo di risoluzione.

```java
public class IllegalDenomException
    extends IllegalArgumentException {
        public IllegalDenumException() {
            super("Il denominatore di una 
            frazione non può essere nullo");
        }
}
```

Una semplice estensione è sufficiente se all'errore non servono ulteriori informazioni (che pure potremmo passare).

### Rilancio di Eccezioni

Nel caso in cui non fosse possibile gestire l'eccezione nel punto in cui viene generata, allora è possibile rilanciarla;

per rilanciare l'eccezione non serve fare nulla di specifico nel codice (non si usa `try`-`catch`), ma bisogna riportarlo nella documentazione con un'annotazione `@throws`.

L'eccezione verrà riproposta al chiamante e risa lirà l'intera catena dei chiamanti fino a un `catch` o a bloccare l'esecuzione.

### Incapsulamento di Eccezioni

Invece di lasciar passare l'eccezione, può essere utile inteccettarla e lanciarne una più specifica.

```java
try {
    FileReader f1 = new FileReader(user + ".txt");
    /* ... */
} catch (FileNotFoundException e) {
    // l'errore è sul file dell'user
    // lo rilanciamo più specifico:
    throw new ProfileNotFoundException(e);
}
```

### Eccezioni Multitipo

È possibile catturare eccezioni di più tipi diversi interponendo ai tipi il carattere pipe `|`:

```java
catch (FileNotFoundException | BadFileFormatException e) {/* ... */}
```