---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Strutture Dati in Java'
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 18
---

## Iterable

Un *iteratore* implementa l'interfaccia `Iterable<E>` che è alla base delle collezioni di Java.

La caratteristica di un iteratore è la possibilità di essere percorso in un ciclo, ma non è necessariamente ordinato.

Un iteratore espone i metodi `hasNext()` e `next()` che permettono di percorrerlo e il metodo `remove()` che rimuove un elemento, ma è tecnicamente opzionale da implementare nel senso che se non lo si desidera implementare gli si fa lanciare un'eccezione.

In termini pratici, può essere percorso in un ciclo `for` non indicizzato:
```java
public class X implements Iterable<T> {/* ...  */};
for(T x : X) { /* .... */ }
```

:::nb
Aggiungere o rimuovere elementi da un iterabile mentre lo si sta percorrendo genera un'eccezione.
:::

## Collection

La `Collection<E>` è l'interfaccia di base per le collezioni derivate, ma non possiede proprietà d'ordine, unicità degli elementi o altre dinamicità che vengono invece implemenetate dalle interfacce derivate; deriva a sua volta da `Iterator<T>`.

Le collezioni più usate sono `List` e `Set`.

Istanze immutabili di una collezione si ottengono con il metodo fabbrica `of`.

:::nota
Le collezioni hanno dimensioni dinamiche e non fisse come gli array
:::

### Metodi di Base

Questi metodi sono comuni a tutte le classi implementanti `Collection`:

| Metodo | Descrizione |
|---|---|
| `add(E e)` | Aggiunge un elemento; restituisce un `boolean` in base a se ha avuto successo |
| `remove(Object o)` | Rimuove la prima occorrenza dell'elemento |
| `contains(Object o)` | Verifica se l'elemento è presente |
| `size()` | Numero di elementi |
| `isEmpty()` | Verifica se è vuota |
| `clear()` | Rimuove tutti gli elementi |
| `removeIf(Predicate<? super E> filter)` | Rimuove gli elementi che soddisfano la condizione |

### Metodi Iterativi

| Metodo | Descrizione |
|---|---|
| `iterator()` | Restituisce un `Iterator` per scorrere gli elementi |
| `stream()` | Restituisce uno `Stream<E>` per operazioni funzionali |
| `forEach(Consumer<? super E> action)` | Itera applicando un'azione |

### Metodi Relazionali

Questi metodi sono comuni a tutte le classi implementanti `Collection` e servono a svolgere operazioni con altre collezioni:

| Metodo | Descrizione |
|---|---|
| `toArray()` / `toArray(T[] a)` | Converte la collezione in array |
| `addAll(Collection<? extends E> c)`[^1] | Aggiunge tutti gli elementi di un'altra collezione |
| `removeAll(Collection<?> c)` | Rimuove tutti gli elementi presenti anche in `c` |
| `retainAll(Collection<?> c)` | Mantiene solo gli elementi presenti anche in `c` (intersezione) |
| `containsAll(Collection<?> c)` | Verifica se contiene tutti gli elementi di `c` |

[^1]: utile per "trasformare" una collezione di un tipo in un altro (compatibile)

### Metodi Fabbrica

Ogni collezione dispone del metodo `of()` che genera un'istanza *immutabile* della collezione da riempire immediatamente durante la costruzione:

```java
// da una lista inserita manualmente
List.of(E ...elements): List<E>;
Set.of(E ...elements): Set<E>
// da un'altra collezione
List.copyOf(
    Collection<? extends E> coll
): List<E>;
Set.copyOf(
    Collection<? extends E> coll
): Set<E>;
```

:::eg
```java
Set<String> ss = Set.of("Bologna", "Modena", /* .., .., ... */);
```
:::

Un'istanza immutabile non ammette alcun metodo modificatore, inoltre non ammette `null` tra i propri elementi.

:::nb
Non c'è il metodo fabbrica `of` o altri sulle interfacce derivate come `SortedSet`
:::

### Conversione

è possibile passare da collezione a array e viceversa con i metodi `Arrays.asList(E[] array): List<E>` e `toArray` visto prima.

:::nb
Per passare da una collezione a un array occorre passare un "falso argomento" poiché il tipo generico della collezione si perde a runtime e, durante l'esecuzione di `toArray`, la collezione è considerata come fosse composta di `Object` generici; 

è necessario indicare il tipo della collezione con un argomento che lo passi esplicitamente:
```java
String[] aa = ll.toArray(new String[0]);
```
:::

È anche possibile passare da una collezione a un altra semplicemente passando quella da copiare al costruttore:
```java
List<String> ll = List.of("Margherita", "Rosa");
Set<String> ss = new HashSet(ll);
```

:::warn
La copia fatta in questo modo è una *copia superficiale*, cioè una copia dei rifermenti agli oggetti originali
:::

### Scorciatoie

In java è possibile usare il *diamond operator* (`<>`) per accorciare la dichiarazione:

`List<E> ll = new LinkedList<>();`

Altrimenti sarebbe necessario ripetere il tipo ogni volta.

:::oss
Tecnicamente è anche possibile usare `var` per inferire il tipo della collezione invece che dichiararlo, tuttavia così si perderebbe la versatilità di dichiarare la collezione con il tipo di un'interfaccia invece che con una classe:
```java
var list = new LinkedList<String>();
// il tipo di list è LinkedList<String>
list = new ArrayList<String>();
// fallisce

List<String> list = new LinkedList<>();
// il tipo è List<String>
list = new ArrayList<String>();
// concesso
```
:::

## List

L'interfaccia **`List<E>`** *contiene un insieme ordinato di elementi* ed è implementata da
- `LinkedList`: è ottimizzata per aggiunte e remozioni frequenti dei suoi elementi,
- `ArrayList`: un array con dimensioni dinamiche

### Metodi Ausiliari

*Per effettuare l'ordinamento*:
```java
Collections.sort(List<E> list);
```
Opzionalmente si può passare un secondo parametro alla funzione per usare un diverso principio di ordinamento.

*Per effettuare una ricerca*:
```java
List<MyObj> lista = /* ... */;
Collections.binarySearch(lista, new MyObj(/* ... */));
// restituisce l'indice dell'oggetto cercato, -1 altrimenti
```

### Metodi di List

| Metodo | Descrizione |
|---|---|
| `get(int index)` | Restituisce l'elemento in posizione `index` |
| `set(int index, E element)` | Sostituisce l'elemento in posizione `index` |
| `add(int index, E element)` | Inserisce un elemento in una posizione specifica |
| `remove(int index)` | Rimuove l'elemento in posizione `index` |
| `indexOf(Object o)` / `lastIndexOf(Object o)` | Posizione della prima/ultima occorrenza |
| `subList(int from, int to)` | Restituisce una vista parziale della lista |
| `sort(Comparator<? super E> c)` | Ordina la lista in place |
| `listIterator()` | Iterator bidirezionale per `List` |

### ListIterator

Espande `List` con un'interfaccia che implementa anche `previous()` e `hasPrevious()`.

## Set

L'interfaccia **`Set<E>`** *contiene un insieme di elementi unici* ed è implementata da

- `HashSet`: collezione non ordinata di elementi unici,
- `TreeSet`: collezione ordinata di elementi unici,
- `LinkedHashSet`: collezione che mantiene l'ordine di inserimento degli elementi

### Metodi

- `add` permette di aggiungere un elemento al set; restituisce un `boolean` che rappresenta il risultato dell'operazione (inserire un duplicato è considerato un fallimento poichè viene rigettato e restituisce `false`).

### SortedSet

L'interfaccia `SortedSet<T>` estende `Set<T>` aggiungendovi la proprietà di ordinamento con il seguente vincolo:
- gli elementi devono essere istanze di `Comparable<T>`, oppure occorre fornire un `Comparator<T>` opportuno al momento della costruzione della collezione
- la navigazione attraverso il set ordinato avviene seguendo l'ordine stabilito

| Metodo | Descrizione |
|---|---|
| `first()` / `last()` | Elemento minimo/massimo secondo l'ordinamento |
| `floor(E e)` / `ceiling(E e)` | Elemento ≤ / ≥ a `e` |
| `lower(E e)` / `higher(E e)` | Elemento < / > a `e` |
| `headSet(E toElement)` / `tailSet(E fromElement)` | Sottoinsiemi |
| `pollFirst()` / `pollLast()` | Estrae e rimuove il minimo/massimo |


## Map

Le `Map<K, V>` *non fanno parte delle collezioni* poiché sono strutture bidimensionali simili a una tabella a due colonne; funzionano in modo simile a degli oggetti in quanto creano un'associazione univoca tra una coppia chiave-valore, dove la chiave è unica per la mappa.

*Le mappe permettono di accedere ai valori tramite la chiave corrispondente con una complessità operativa unitaria (`O(1)`)*, cioè non vengono percorse per trovare il valore, ma sono in grado di risalirvi immediatamente dalla chiave.

La corrispondenza univoca tra chiave e valore è ottenuta tramite una *hash table*.

- `HashMap`: contiene un insieme di coppie chiave-valore senza ordine,
- `TreeMap`: contiene un insieme ordinato per chiave di coppie,
- `LinkedHashMap`: contiene un insieme di coppie ordinato secondo l'ordine di inserimento

### Metodi di Base di Map

| Metodo | Descrizione |
|---|---|
| `put(K key, V value)` | Inserisce/aggiorna una coppia chiave-valore |
| `get(Object key)` | Restituisce il valore associato alla chiave (null se assente) |
| `remove(Object key)` | Rimuove la coppia associata alla chiave |
| `containsKey(Object key)` | Verifica la presenza di una chiave |
| `containsValue(Object value)` | Verifica la presenza di un valore |
| `size()` / `isEmpty()` / `clear()` | Come in `Collection` |
| `keySet()` | Restituisce un `Set<K>` con tutte le chiavi |
| `values()` | Restituisce una `Collection<V>` con tutti i valori |
| `entrySet()` | Restituisce un `Set<Map.Entry<K,V>>` (il modo più efficiente per iterare su chiavi+valori) |
| `putAll(Map<? extends K,? extends V> m)` | Inserisce tutte le coppie di un'altra mappa |

### Metodi Aggiuntivi

| Metodo | Descrizione |
|---|---|
| `getOrDefault(Object key, V defaultValue)` | Restituisce il valore o un default se la chiave manca |
| `putIfAbsent(K key, V value)` | Inserisce solo se la chiave non è già presente |
| `computeIfAbsent(K key, Function<K,V> f)` | Calcola e inserisce un valore solo se la chiave manca (ottimo per mappe di liste/contatori) |
| `computeIfPresent(K key, BiFunction<K,V,V> f)` | Aggiorna il valore solo se la chiave è già presente |
| `compute(K key, BiFunction<K,V,V> f)` | Calcola un nuovo valore in base a chiave e valore corrente |
| `merge(K key, V value, BiFunction<V,V,V> f)` | Combina il valore esistente con uno nuovo (ottimo per somme/contatori) |
| `forEach(BiConsumer<K,V> action)` | Itera su tutte le coppie chiave-valore |
| `replace(K key, V value)` | Sostituisce il valore solo se la chiave esiste |
| `replaceAll(BiFunction<K,V,V> f)` | Sostituisce tutti i valori applicando una funzione |

### Metodo Fabbrica

`Map` implementa il metodo fabbrica `of` che crea un'istanza *immutabile* di una mappa a partire da coppie chiave-valore fornite per argomento: `Map.of(K k1, V v1, K k2, V v2 ...): Map<K,V>`

Ce ne sono tre varianti:
```java
// da coppie inserite manualmente
Map.of(
    K k1, V v1, 
    K k2, V v2 
    ...
): Map<K,V>;
// da entries inserite manualmente
Map.ofEntries(
    Map.Entry<? extends K,? extends V> 
    ...entries
): Map<K,V>;
// da un'altra mappa compatibile
Map.copyOf(
    Map<? extends K,? extends V> map
): Map<K,V>;
```
### Entry

<!--  -->

### Metodi di SortedMap

Questi metodi sono utili per sfruttare la proprietà di ordinamento di `TreeMap` che implementa `SortedMap` 

| Metodo | Descrizione |
|---|---|
| `firstKey()` / `lastKey()` | Chiave minima/massima |
| `firstEntry()` / `lastEntry()` | Coppia minima/massima |
| `floorKey(K key)` / `ceilingKey(K key)` | Chiave ≤ / ≥ |
| `headMap(K toKey)` / `tailMap(K fromKey)` | Sotto-mappe |

## Classi Wrapper

Per adattare i dati primitivi all'uso con gli oggetti si usano delle classi wrapper omonime del tipo (tranne `Integer` e `Character`) che contengono il valore primitivo.

Costruire un oggetto da un primitivo è fatto tramite il metodo fabbrica `valueOf` che fa caching delle risorse; usare il costruttore stesso della classe è un metodo deprecato.

Tutte le istanze sono *value based*, cioè sono immutabili e qualunque operazione che dovrebbe alterarli (ad esempio una somma) ne restituisce una nuova istanza.

Per ottenere il valore contenuto nella classe si usano i metodi `intValue`, `doubleValue` ecc...

:::nota
Da Java 5, il compilatore esegue automaticamente il wrapping quando necessario:
```java
Integer k = 28; // Integer.valueOf(28)
int x = k + 7; // k.intValue() + 7
```

Anche per le collezioni (che non supportano i tipi primitivi) il compilatore fa' wrapping automatico:
```java
java.util.List<Integer> list = new java.util.List<Integer>();
list.add(7);
int g = list.get(0);
```
:::

## Casi d'Uso

Riassumendo le proprietà principali delle strutture dati viste:

- I `Set` non sono ordinati, contengono solo elementi unici
    - `HashSet`: uso generale,
    - `TreeSet`: elementi ordinati *automaticamente*,
    - `LinkedHashSet`: ordinata secondo l'ordine di inserimento
- Le `List` sono ordinate, ammettono duplicati e permettono accesso tramite indice numerico
    - `ArrayList`: per operazioni di lettura ottimizzate, 
    - `LinkedList`: per operazioni di aggiunta/rimozione ottimizzate
- Le `Map` non sono ordinate, contengono coppie chiave-valore di cui le chiavi tutte uniche, consentono accesso rapido ai valori tramite le chiavi
    - `HashMap`: uso generale,
    - `TreeMap`: ordinato per chiave di coppia,
    - `LinkedHashMap`: ordinato secondo l'ordine di inserimento

### Tabella Riassuntiva

 Classe | Ordine | Duplicati | Accesso 
 --- | --- | --- | ---
 `ArrayList` | *manuale* | ammessi | *indice*
 `LinkedList` | *manuale* | ammessi | ***indice***[^2]
 `HashSet` | nessuno | *rimossi* | standard
 `TreeSet` | ***automatico***[^3] | *rimossi* | standard
 `LinkedHashSet` | *inserimento* | *rimossi* | standard
 `HashMap` | nessuno | *sovrascritti* | ***chiave***[^2]
 `TreeMap` | ***auto per chiave***[^3] | *sovrascritti* | ***chiave***[^2]
 `LinkedHashMap` | *inserimento*  | *sovrascritti* | ***chiave***[^2]

[^2]: accesso rapido ottimizzato
[^3]: gli elementi si ordinano in automatico ad ogni modifica
