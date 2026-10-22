---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Stringhe in Java'
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 2
---

## Oggetti Stringa

In Java, come negli altri linguaggi a oggetti, le stringhe sono istanze della classe `String`, sono, cioè, oggetti.

A differenza delle classi standard, `String` è speciale poichè non usa un costruttore ma viene costruita tramite uno *string literal*, cioè, invece di scrivere `new String('l','o','r','e','m')` si scrive `"lorem"`.

### Caratteri

Una stringa è una sequenza di caratteri, *ma non è un array*, inoltre, non ha bisogno di alcun terminatore.

Ogni stringa è unica e immutabile: qualunque stringa costruita a partire da un'altra è sempre una nuova istanza; le stringhe originali restano inalterate.

Gli oggetti stringa mantengono comunque una proprietà d'ordine per i caratteri di cui sono costruite; per estrarre un singolo carattere ad un certo indice (similmente agli array) si usa il metodo `charAt()` e gli si passa l'indice.

:::nb
La stringa è immutabile, infatti il metodo `charAt()` è read only (è un metodo tipo *get*); non c'è un corrispondente metodo *set*.
:::

## Metodi Principali

Riportiamo una lista di metodi principali forniti dalla classe `String`:

Metodo | Descrizione
--- | ---
`char charAt(int index)` | restituisce il carattere all'indice dato
`int length()` | restituisce la lunghezza della stringa (numero di caratteri)
`int compareTo(Object o)` & `int compareTo(String s)` | comparazione lessicografica (confronto carattere per carattere dei valori unicode); restituisce 0 se sono uguali, >0 se la stringa ha valori unicode più alti, <0 altrimenti
`int compareToIgnoreCase(String s)` | esegue `compareTo()` ignorando differenze di miuscole/minuscole
`boolean equals(Object anObject)` | restituisce `true` se le stringhe sono uguali
`boolean equalsIgnoreCase(String s)` | case-insensitive `equals()`
`int indexOf(int char)` & `int indexOf(int char, int fromIndex)` & `int indexOf(String s)` & `int indexOf(String s, int fromIndex)` | restituisce l'indice della prima occorrenza del/i carattere/stringa specificato/i; è possibile scegliere l'indice da cui far partire la ricerca
`int lastIndexOf(int char)` & `int lastIndexOf(int char, int fromIndex)` & `int lastIndexOf(String s)` & `int lastIndexOf(String s, int fromIndex)` | restituisce l'indice dell'ultima occorrenza del/i carattere/stringa specificato/i; è possibile scegliere l'indice da cui far partire la ricerca
`boolean startsWith(String start)` & `boolean endsWith(String end)` | restituisce `true` se inizia/finisce con i caratteri specificari
`String replaceFirst(char search, char replace)` | restituisce una nuova stringa con la prima occorrenza del primo carattere sostituita con il secondo
`String replace(char search, char replace)` | restituisce una nuova stringa con ogni istanza del primo carattere sostituita con il secondo
`String trim()` | restituisce una nuova stringa senza spazi vuoti alle estremità
`String toLowerCase()` & `String toUpperCase()` | restituisce una nuova stringa con tutti i caratteri convertiti in minuscolo/maiuscolo
`String substring(int start, int end)` & `String substring(int start)` | restituisce una sottostringa estratta a partire dal primo indice (incluso) fino al secondo (escluso) (fino alla fine se un secondo indice non viene passato)

Per concatenare due stringhe si può usare l'operatore `+`

:::oss
Occorre ricordare come funzionano i riferimenti, infatti, anche per le stringhe, quando abbamo un oggetto istanza di `String`, quello che è contenuto nella variabile è il riferimento, non l'oggetto stesso:
```java
String s1 = "ciao";
String s2 = " mondo";
String s3 = s1;
// s3 copia il riferimento a "ciao" di s1

s1 = s1 + s2
// il riferimento in s1 è sostituito con un nuovo riferimento
// il riferimento in s3 rimane inalterato
System.out.println(s1);
// ↪ ciao mondo
System.out.println(s3);
// ↪ ciao
```
:::

:::nb
L'operatore `==` esprime uguaglianza *di riferimenti* in Java, cioè:
```java
String s1 = "ciao";
String s2 = "ciao";
System.out.println(s1 == s2);
// ↪ false
System.out.println(s1.equals(s2));
// ↪ true
```
:::

### Metodi Statici

La classe `String` utilizza una serie di metodi statici `valueOf()` per convertire i dati primitivi in stringhe:

Argomento | Chiamata
--- | ---
`boolean b` | `String.valueOf(true)`
`char c` | `String.valueOf('a')`
`char[] data` | `String.valueOf({'c','i'})`
`char[] data, int start, int length` | `String.valueOf({'c','i','a','o'},1,3)`
`double d` | `String.valueOf(1.23)`
`float f` | `String.valueOf(3.4245f)`
`int i` | `String.valueOf(243)`
`long l` | `String.valueOf(245432345L)`
`Object o` | `String.valueOf(obj)`

### toString

Ogni oggetto ha un metodo `toString()` di default; questo metodo viene chiamato in automatico quando tali oggetti vengono concatenati a stringhe (anche tramite l'operatore `+`).

Anche i tipi primitivi vengono convertiti implicitamente a stringhe se concatenati ad altre stringhe.

## Blocchi Testuali

Un blocco testuale si può creare racchiudendo il testo tra tre `"` (`"""`); questo è un blocco di testo che mantiene la formattazione (a capo in particolare), evitando l'uso di caratteri come `\n` o `\t`.

```java
String s = """
            Enorme blocco
            di testo
            """
```

:::nota
Il `"""` di chiusura va' messo necessariamente su una riga separata e stabilisce anche la *indent policy*, cioè, l'indentazione del terminatore del blocco viene tolta dall'indentazione di tutte le righe del blocco
:::

## Classi Helper

### StringBuilder

Ogni volta che "modifichiamo" una stringa (ad es. s1 += s2) quello che viene effettivamente fatto è generare una nuova stringa, lasciando che il garbage collector disponga della vecchia; questo è estremamente inefficiente per modifiche frequenti.

Per ottimizzare ripetute modifiche a una stringa esiste la classe `StringBuilder`: tramite il metodo `append()`, una nuova stringa (passata per argomento) viene aggiunta al buffer interno dell'oggetto `StringBuffer`; solo quando viene chiamato il metodo `toString()` le stringhe nel buffer vengono concatenate.

### StringJoiner

La classe `StringJoiner` svolge un ruolo simile a `StringBuilder`, ma con due principali differenze:
- usa il metodo `add()` invece di `append()`
- permette (alla costruzione dell'oggetto) di passare fino a 3 argomenti (tutti stringhe):
    1. un separatore, che verrà inserito tra ogni stringa aggiunta con `add`
    2. un prefisso, che verrà inserito all'inizio della stringa concatenata
    3. un suffisso, che verrà inserito alla fine

:::eg
```java
StringJoiner sj = new StringJoiner(",", "[", "]");
```
:::

### String.join

La classe `String` dispone del metodo `join(String separator, String[] data)` che concatena un array di stringhe separandole con un separatore passato per argomento.

## Codice Fiscale

In Italia, il codice identificativo per ciascun individuo è costituito da 16 lettere o cifre così suddiviso:
- **lettere 0 - 2** (3) derivano dal cognome
- **lettere 3 - 5** (3) derivano dal nome
- **lettere 6 - 10** (5) derivano dalla data di nascita
- **lettere 11 - 14** (4) derivano dal luogo di nascita
- **lettera 15** (1) è un controllo

Vengono inoltre fatte distinzioni per il genere.

Il codice fiscale è costruito per essere unico (non solo tra i vivi) e in modo da evidenziare facilmente gli errori.

La legge stabilisce la scelta delle lettere:
- **00 - 02** (3) si estraggono le prime tre consonanti dal cognome:
    - se sono meno di 3, allora si estraggono anche le vocali e si mettono in coda per arrivare a 3
    - se sono *ancora* meno di 3, allora si mettono "X" in coda fino a raggiungere il numero
- **03 - 05** (3) derivano dal nome:
    - se ha 4 o più consonanti, si prendono la prima, la terza e la quarta
    - se ha 3 o meno consonanti, si fa' come con il cognome (inclusi fallback)
- **06 - 10** (5) derivano dalla data di nascita:
    - *06 - 07* prese dalle ultime due cifre dell'anno di nascita
    - *08* presa da un gruppo di 12 lettere che identificano univocamente i mesi (rappresenta il mese di nascita)
    - *09 - 10* prese dalle cifre del giorno di nascita (aumentato di 40 per le donne) 
- **lettere 11 - 14** (4) derivano dal luogo di nascita:
    - per i comuni italiani si usano sigle da A001 a V999[1]
    - per gli stati esteri si parte dalla lettera Z e si fa' riferimeento al continente con la prima cifra e le altre 2 indicano lo stato specifico (z100 - Z999)
- **lettera 15** (1) data da un calcolo su tutte le lettere precedenti: ciascuna lettera del codice avrà un valore basato sul suo contenuto *e sulla sua posizione* (in questo modo è a prova di scambi di posizione); quest'ultima lettera funge da controllo sulla correttezza delle precedenti lettere del codice

:::nota
L'associazione mese-lettera è la seguente:
mese | lettera
--- | ---
gennaio | A
febbraio | B
marzo | C
aprile | D
maggio | E
giugno | H
luglio | L
agosto | M
settembre | P
ottobre | R
novembre | S
dicembre | T
:::eg
Per sviluppare una mappa che leghi i mesi alle lettere è molto più conveniente sviluppare una soluzione in stringhe o array che usare switch o if:
```java
// singola stringa
String months =  "gennaiofebbraiomarzoaprile";
String letters = "A06----B08-----C05--D06---";
// trovare la lettera corrispondente è semplice:
String toSearch = "febbraio";
int index = months.indexOf(toSearch.toLowerCase());
char searchRes = letters.charAt(index);
// trovare invece il mese:
index = letters.indexOf('D');
int length = Integer.parseInt(letters.substring(index+1, 2));
String month = months.substring(index, length);
```
La stessa soluzione è implementabile con una coppia di array.
:::

[1]: La lista dei comuni fu' inizialmente generata in ordine alfabetico; nuovi comuni vengono inseriti in coda, inoltre, i comuni soppressi non vengono rimossi dalla tabella

### Omocodia

In caso di codici uguali, si fornisce un codice diverso dallo standard a ogni proprietario: il nuovo codice è ottenuto sostituendo una o più cifre numeriche del codice originale con lettere a partire da destra:

cifra | lettera
--- | ---
0 | L
1 | M
2 | N
3 | P
4 | Q
5 | R
6 | S
7 | T
8 | U
9 | V

Inoltre, viene ricalcolato il carattere di controllo finale.

*Questo metodo ammette 128 varianti per codice.*