---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Lambda Expressions di Java'
metaTitle: 'Lambda Expressions'
description: ''
author: 'Italo Corraro'
order: 23
---

Da Java 8 viene introdotta una sintassi breve per creare *funzioni anonime* standalone (*senza classe*), come se fosse un oggetto a sè stante.

La funzione viene tipizzata con un'interfaccia.

Le **lambda expressions** seguono questa sintassi:

```java
(T a...) -> {
    /* ... */
}
```

Queste espressioni sono trattate come dati e possono essere assegnate a variabili o passate come argomento.

La funzione ha bisogno di essere tipizzata per i suoi argommenti e il tipo di ritorno; questo è il primo passaggio.

La tipizzazione degli argomenti può essere fatta al momento, mentre il tipo di ritorno viene inferito dinamicamente:

:::eg
```java
(int a, int b) -> a + b;
```
:::

oppure, la tipizzazione può essere fatta tramite **interfaccia funzionale**:

```java
// STEP 1: Dichiarazione
@FunctionalInterface
interface Functional<T> {
    T doThis(T a, T b, ...);
}

// STEP 2: Assegnazione
Functional name = (a, b, ...) -> {/*  */}

// STEP 3: Esecuzione
name.doThis(a, b, ...); 
// ↪ {/*  */}
```


Qualora non si chiudesse tra graffe il corpo della lamba, allora il risultato del codice scritto sarà considerato come valore restituito, cioè

```java
() -> "I am Return";
// equivale a
() -> { return "I am Return"; }
```

Se l'argomento della funzione fosse solo uno, allora sarebbe possibile evitare le parentesi tonde:

```java
 a -> { return a + " op"; }
```

## Method Reference

È possibile riferirsi a un metodo già esistente tramite l'operatore `::`:

```java
Classe::metodo
// equivale a
Classe -> Classe.metodo()
```

Si può usare anche con oggetti, inclusi quelli invocati tramite `this`.

### Method Reference a Costruttore

È possibile invocare il metodo costruttore della classe tramite method reference; la sintassi è
```java
NomeClasse::new
```
Si usa `new` per convenzione di linguaggio (di fatti il compilatore non ha un nome proprio)



## Interfacce Funzionali Standard

- **`Consumer`**: svolge un'azione sul parametro passato
```java
interface Consumer<T> {
    public void accept(T t);
}
```

- **`Supplier`**: genera un risultato senza prendere input
```java
interface Comparable<T> {
    public T get();
}
```
:::oss
Il costruttore viene visto come una `Supplier`
:::

- **`Comparable`**: definisce il metodo di ordinamento naturale di un gruppo di oggetti
```java
interface Comparable<T> {
    public int compareTo(T o);
}
```

- **`Comparator`**: compara due oggetti
```java
interface Comparator<T> {
    public int compare(T o1, T o2);
}
```

- **`Predicate`**: testa sotto una specifica condizione
```java
interface Predicate<T> {
    public boolean test(T t);
}
```

- **`Function`**: svolge una funzione generica a 1 argomento
```java
interface Function<T, R> {
    public R apply(T t);
}
```


:::nb
Poiché i tipi primitivi non sono compatibili con gli oggetti, tutte queste interfacce hanno una versione con suffisso `Int`, per sostituire `int` a `T`, suffisso `Double`, suffisso `Long`;

Per `Function` c'è uno schema aggiuntivo per definire il tipo `R` tramite suffisso esteso `ToInt`, `ToLong`, `ToDouble`; diventa ad esempio:   
- `IntToDoubleFunction` per `public double apply(int t)`
- `ToLongFunction` per `public long apply(T t)`
:::

### Comparatori

La confrontabilità è una proprietà essenziale ma non strettamente necessaria per molti oggetti e non deve essere necessariamente relegata a un `equals`, ma piuttosto una relazione d'ordine.

L'interfaccia standard per implementare una classe con metodo `compareTo` è **`Comparable<T>`** ed è prassi strutturarla per restituire `+1` se l'oggetto che chiama il metodo è "maggiore" dell'instanza passata per argomento, `-1` se è "minore" o `0` se sono "uguali" (coerentemente con `equals`).

:::nota
Il metodo `sort` di `Arrays` usa di default il metodo `compareTo` degli elementi dell'array per ordinarli.
:::

Un comparatore è una classe che implementa l'interfaccia `Comparator<T>` e ha il metodo `compare(T a, T b)`; difatti è l'alternativa a implementare la comparabilità sull'oggetto.

Con una lambda expression si può creare un comparatore al volo:
```java
Arrays.sort(persone,(a,b) ->
/* passare l'array di persone permette
 * al compilatore di fare type inference 
 * sugli argomenti della lambda */
	a.getNome().compareTo(b.getNome()));
```

#### Comparing

L'interfaccia `Comparator<T>` ha anche un metodo fabbrica: **`comparing`** che costruisce comparatori:
```java
Comparator<T> {
	public int compare(T o1, T o2) {
		return o1.compareTo(o2);
	}
	public static <T, U extends Comparable<? super U>> Comparator<T> 
		comparing(Function<? super T, ? extends U> keyExtractor) {
		/* dove, `T` è il tipo degli elementi da 
		 * comparare e `U` quello del valore su cui 
		 * fare la comparazione */
    	return (o1, o2) -> {
        	U k1 = keyExtractor.apply(o1);
        	U k2 = keyExtractor.apply(o2);
        	return k1.compareTo(k2);
    	};
	}
}
```

Il sorting si riduce a 
```java
Arrays.sort(persone, Comparator.comparing(
	p -> p.getNome()
));
```

O più breve ancora:
```java
Arrays.sort(persone, Comparator.comparing(
	Persona::getNome
));
```

In pratica è ridotto allo schema:
```java
Arrays.sort(arrayDiClass, Comparator.comparing(
	Class::parameter
));
```
Oppure
```java
Collection.sort(collectionDiClass, Comparator.comparing(
	Class::parameter
));
```

:::nota
I tipi primitivi hanno il loro `comparing` con suffisso che indica il tipo (ad es. `comparingLong`)
:::

Inoltre, *è possibile concatenare operazioni di comparazione* per svolgerle in caso di risultato `0` dall'operazione precedente:

```java
Arrays.sort(persone,
	Comparator.comparing(Persona::getCognome)
		.thenComparing(Persona::getNome)
		.thenComparingInt(Persona::getEta)
);
```

:::nb
`comparing` è generica quindi in casi in cui si usa il comparatore concatenato su collezioni, il tipo generico potrebbe impedire la compilazione per incertezza:
```java
Collections.sort(playlist,
	Comparator.comparing(
		p1 -> p1.getTitle()
	).thenComparing(
		p1 -> p1.getDuration()
	).thenComparing(
		p1 -> p1.getArtist()
	)
);
```
NON compila.

Per risolvere, è necessario dare un'indicazione sul tipo, il metodo più semplice è quello di indicarlo nell'argomento di almeno una lambda (`(Song p1)`), ma è anche possibile usare la method reference per specificarlo:
```java
Collections.sort(playlist,
	Comparator.comparing(
		Song::getTitle
	).thenComparing(
		p1 -> p1.getDuration()
	).thenComparing(
		p1 -> p1.getArtist()
	)
);
```
Non è necessario farlo ovunque, una volta è sufficiente perché il compilatore sia in grado di inferire il tipo del comparatore da restituire a ogni concatenazione. Questo è necessario solo per le collezioni.
:::

## Iterazione Interna

In Java, le collezioni dispongono di un metodo `forEach`:
```java
public void forEach(Consumer<? super E> action);
```

L'uso è il seguente:
```java
List<Persona> persone = new ArrayList<>(/*  */);

persone.forEach( persona -> {
	System.out.println(persona)
});
```

Tuttavia, è possibile ricorrere anche ai method reference:
```java
persone.forEach(System.out::println);
```

Praticamente si può indicare a quale funzione passare i singoli elementi della collezione.

:::nb
In Java non è possibile modificare variabili all'interno di una lambda:
```java
int sum = 0;
persone.forEach(p -> sum += p.getEta());
// ↪ ERRORE	
```

L'unico modo per girare attorno a questo ostacolo è usare un oggetto wrapper:
```java
var w = new Object(){ int sum = 0; };
persone.forEach(p -> w.sum += p.getEta());
// ↪ CORRETTO	
```

Tutto questo è dovuto alla mancanza di supporto per le *closures*: una funzione che conserva riferimenti al suo contesto di creazione (in particolare, alle variabili esterne al corpo della stessa) anche quando eseguita fuori da quel contesto.
:::

## Composizione

I metodi `andThen` e `compose`, permettono di comporre due o più lambda per definire una funzione composta:

```java
f.andThen(g) === g(f(/*  */));
```
```java
f.compose(g) === f(g(/*  */));
```

I tipi di funzione devono essere omogenei.