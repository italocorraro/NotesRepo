---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'File di Testo con Java'
metaTitle: 'File di Testo'
description: ''
author: 'Italo Corraro'
order: 21
---

Java usa una codifica di caratteri basata su =k==UNICODE==; la conversione da/a altri formati è gestita internamente dalle classi `Reader` e `Writer`.

## Reader

`java.io.Reader` *(abstract)*

Stream di lettura di **caratteri** (Unicode).

| Metodo | Return | Descrizione |
|---|---|---|
| `read()` | `int` | Legge un carattere (0–65535) o `-1` a fine stream |
| `read(cbuf: char[])` | `int` | Legge caratteri nell'array |
| `read(cbuf: char[], off: int, len: int)` | `int` | Legge al massimo `len` caratteri a partire da `off` |
| `read(target: CharBuffer)` | `int` | Legge caratteri in un `CharBuffer` (NIO) |
| `skip(n: long)` | `long` | Salta `n` caratteri |
| `ready()` | `boolean` | `true` se lo stream è pronto per la lettura senza bloccarsi |
| `mark(readAheadLimit: int)` | `void` | Segna la posizione corrente |
| `reset()` | `void` | Torna alla posizione marcata |
| `markSupported()` | `boolean` | `true` se mark/reset sono supportati |
| `transferTo(out: Writer)` | `long` | Copia tutto in un `Writer` |
| `close()` | `void` | Chiude il reader |

Il metodo `read` restituisce il codice del carattere Unicode (o -1); 

Un file viene aperto da un'istanza di `FileReader` o `FileWriter` che leggono byte per byte; questi vengono incapsulati rispettivamente in un `BufferedReader` o `BufferedWriter`.

:::eg
```java
public class Lettura {
    public static void main(String args[]) {
        // creazione file reader
        FileReader rd = null;
        try {
            r = new FileReader(args[0]);
        } catch(FileNotFoundException e) {
            System.out.println("File non trovato");
            System.exit(1);
        }
        // lettura
        try {
            int chCount = 0; 
            int x = rd.read();
            while(x >= 0) {
                // cast per convertire 
                // da int unicode a char
                char ch = (char) x;
                System.out.print(ch);
                x = rd.read();
            }
            System.out.println("\nTot caratteri: " + n);
        } catch(IOException e) {
            System.out.println("Errore di input");
            System.exit(2);
        }
    }
}
```
:::

## Writer

`java.io.Writer` *(abstract)*

Stream di scrittura di **caratteri** (Unicode).

| Metodo | Return | Descrizione |
|---|---|---|
| `write(c: int)` | `void` | Scrive un singolo carattere |
| `write(cbuf: char[])` | `void` | Scrive un array di caratteri |
| `write(cbuf: char[], off: int, len: int)` | `void` | Scrive `len` caratteri a partire da `off` |
| `write(str: String)` | `void` | Scrive una stringa |
| `write(str: String, off: int, len: int)` | `void` | Scrive una sottostringa |
| `append(csq: CharSequence)` | `Writer` | Aggiunge una `CharSequence`; restituisce `this` (fluent) |
| `append(csq: CharSequence, start: int, end: int)` | `Writer` | Aggiunge una parte di `CharSequence` |
| `append(c: char)` | `Writer` | Aggiunge un carattere |
| `flush()` | `void` | Forza la scrittura dei dati bufferizzati |
| `close()` | `void` | Flush + chiusura del writer |

## Buffered Reader

La classe `BufferedReader` incapsula un `Reader` permettendogli di registrare i byte di lettura in un buffer di accumulo:

| Metodo | Return | Descrizione  |
| ----------- | --------- | ----- |
| `read()`  | `int`  | Legge un singolo carattere (come codice Unicode), ritorna -1 se fine stream |
| `read(cbuf: char[])`  | `int` | Legge caratteri in un array   |
| `read(cbuf: char[], off: int, len: int)` | `int`  | Legge fino a `len` caratteri nell’array a partire da `off` |
| `readLine()`   | `String`  | Legge una riga di testo (senza newline), ritorna `null` a fine stream  |
| `skip(n: long)` | `long`  | Salta `n` caratteri   |
| `ready()`      | `boolean`  | Indica se lo stream è pronto per la lettura senza blocco   |
| `mark(readAheadLimit: int)`  | `void`  | Marca una posizione nello stream    |
| `reset()`      | `void`   | Torna all’ultima posizione marcata  |
| `markSupported()`    | `boolean`   | Indica se mark/reset sono supportati |
| `close()`      | `void`   | Chiude lo stream  |

Questa classe continua a leggere fin quando non trova il terminatore o nulla da leggere; in tal caso restituisce `null`.

:::eg
```java
BufferedReader f = null;
try {
    f = new BufferedReader(new FileReader("f.txt"));

    while((String line = f.readLine()) != null) {
        /* ... */
    }
}
```
:::

## Buffered Writer

| Metodo | Return | Descrizione |
| ----- | ---- | ----- |
| `write(int c)`  | `void`  | Scrive un singolo carattere   |
| `write(char[] cbuf)`     | `void`  | Scrive un array di caratteri |
| `write(char[] cbuf, int off, int len)`  | `void`  | Scrive parte di un array     |
| `write(String s)` `void`          | Scrive una stringa  |
| `write(String s, int off, int len)`   | `void` | Scrive parte di una stringa  |
| `newLine()`  | `void`   | Scrive un separatore di riga del sistema           |
| `flush()`  | `void`    | Forza la scrittura dei dati nel stream sottostante |
| `close()`  | `void`     | Chiude lo stream dopo aver svuotato il buffer      |
| `append(CharSequence csq)`  | `Writer` | Aggiunge una sequenza di caratteri   |
| `append(CharSequence csq, int start, int end)` | `Writer`  | Aggiunge una sottosequenza   |
| `append(char c)`| `Writer`    | Aggiunge un singolo carattere |

Questa classe però non offre metodi per stampa di righe e, inoltre, non gestisce le eccezioni.

### Print Writer

**`PrintWriter`** scrive rappresentazioni testuali di valori primitivi e oggetti su uno stream di caratteri. 

Non lancia `IOException`: gli errori vengono tracciati internamente e sono consultabili con `checkError()`.

#### Costruttori

- `PrintWriter(out: Writer)`
- `PrintWriter(out: Writer, autoFlush: boolean)` flush automatico dopo `println`, `printf`, `format`
- `PrintWriter(out: OutputStream)`: wrappa in un `OutputStreamWriter`
- `PrintWriter(file: File)` / `PrintWriter(fileName: String)` 

#### Metodi `print`

Il metodo `print(x: ?): void` può scrivere primitivi quali `boolean`, `char` (sia singolo che array `char[]`), `int`, `long`, `float` e `double`;   
può inoltre scrivere stringhe e oggetti: 
- `String` (scrive `"null"` se è `null`), 
- `Object` (scrive appoggiandosi alla `toString`; `"null"` se è `null`) 

Il metodo `println(x: ?): void` è analogo a `print`, ma aggiunge un terminatore di riga (in base al sistema `\n` o `\r\n`) a fine stampa.

:::eg
```java
PrintWriter f = new PrintWriter(new FileWriter("f.txt"));
/* *usare i metodi print/println* */

// Oppure più breve:
PrintWriter f = new PrintWriter("f.txt");
```
:::

#### Metodi `printf` / `format`

Equivalenti tra loro; usano la sintassi `String.format()` con `Locale` opzionale.

| Metodo | Return | Descrizione |
|---|---|---|
| `printf(format: String, args: Object...)` | `PrintWriter` | Scrive una stringa formattata con il `Locale` di default |
| `printf(l: Locale, format: String, args: Object...)` | `PrintWriter` | Scrive una stringa formattata con `Locale` specificato |
| `format(format: String, args: Object...)` | `PrintWriter` | Alias di `printf(String, Object...)` |
| `format(l: Locale, format: String, args: Object...)` | `PrintWriter` | Alias di `printf(Locale, String, Object...)` |

:::oss
Restituiscono tutti `this`, quindi possono essere usati a cascata.
:::

#### Metodi di Controllo e Utilità

| Metodo | Tipo di ritorno | Descrizione |
|---|---|---|
| `checkError()` | `boolean` | Fa flush e restituisce `true` se si è verificato un errore (unico modo per rilevare errori, poiché non vengono lanciate eccezioni) |
| `flush()` | `void` | Forza la scrittura dei dati bufferizzati sullo stream sottostante |
| `close()` | `void` | Flush + chiusura del writer e delle risorse associate |


##### Specifiers

| Specifier | Tipo | Esempio output |
|---|---|---|
| `%s` | `String` / `Object.toString()` | `"hello"` |
| `%d` | `int`, `long` | `42` |
| `%f` | `float`, `double` | `3.140000` |
| `%.2f` | `float`, `double` | `3.14` |
| `%e` | `float`, `double` | `3.14e+00` |
| `%b` | `boolean` | `true` |
| `%c` | `char` | `A` |
| `%n` |: | Separatore di linea di sistema (preferibile a `\n`) |
| `%t` | `Date`/`Calendar`/`Temporal` | (vedi sotto-specifier `%tY`, `%tm`, ecc.) |
| `%10s` |: | Stringa allineata a destra in campo di 10 |
| `%-10s` |: | Stringa allineata a sinistra in campo di 10 |
| `%05d` |: | Intero con zero-padding: `00042` |
| `%X` | `int` | Esadecimale maiuscolo: `2A` |
| `%o` | `int` | Ottale: `52` |


## Console

La console in Java non è riferita al metodo `print` di `System.out`, ma a un oggetto *singleton* `Console`;

la console non viene istanziata, ma può essere invocata con `System.console()` ed è in grado di svolgere sia letture che scritture dalla sua interfaccia:

```java
Console console = System.console();
String username = console.readLine("User Name? ");
char[] password = console.readPassword("Password? ");
/* la lettura password nasconde 
 * automaticamente i caratteri digitati 
 * dall'utente */
/* ... */
Arrays.fill(password, ' ');
/* è pratica di sicurezza svuotare l'array
 * contiene la password dopo l'uso */
```

:::eg
```java
Console console;
char[] password;
if((console = System.console()) != null &&
    (password = console.readPassword("[%s]", "Password: ")) != null) {
        /* .... */
        Arrays.fill(password, ' ');
    }
```
:::

## Parsing

Una volta letta una stringa, il passo successivo è il *parsing* di questa, serve, cioè, estrarne le parti costituenti (*token*) in una forma strutturata utilizzabile dal programma

### String Tokenizer

La classe `StringTokenizer` avvolge una stringa di testo (già letto) e ne estrae le parti.

```java
StringTokenizer stk = new StringTokenizer(s);
String token = stk.nextToken();
```
di default, i separatori dei token sono lo spazio, tabulazione e l'a capo;

alternativamente, è possibile passare il separatore come secondo argomento al  costruttore
```java
StringTokenizer stk = new StringTokenizer(s, ";");
```
oppure, direttamente alla richiesta del token:
```java
String token = stk.nextToken("|");
```

:::oss
Questa classe è utile per il parsing di stringhe con un pattern che non può essere scomposto con `split`
:::

:::nb
Questa classe va istanziata *per ogni riga letta*.

Questa classe è deprecata e poco performante su stringhe lunghe.
:::

:::eg
```java
// rdr: BufferedReader
while (
    (String riga = rdr.readLine()) !=null {
        StringTokenizer t = new StringTokenizer(riga, "$\n\r");
        String nomeCognome = t.nextToken().trim();
        String indirizzo = t.nextToken().trim();
        String città = t.nextToken().trim();
    }
)
```
:::

### Scanner

La classe `Scanner` (dal package `java.util`) è l'evoluzione di `StringTokenizer`; oltre a poter decostruire una riga, può fare parsing anche costruendolo sopra a un `Reader`, `FileStream` o `InputStream`.

È anche in grado di risolvere i problemi di encoding dei caratteri autonomamente e tiene anche conto del `locale`.

Il delimitatore di default è qualsiasi sequenza di whitespace (`\s+`).

#### Costruttori 

- `Scanner(source: InputStream, charsetName?: String)`: legge da uno stream di byte (es. `System.in`); opzionalmente è possibile configurare il charset
- `Scanner(source: Readable)`: legge da qualsiasi `Readable` (es. `Reader`)
- `Scanner(source: File, charsetName?: String)`: legge da file, eventualmente con charset specifico (può lanciare eccezioni)
- `Scanner(source: Path)`: legge da `Path`
- `Scanner(source: String)`: legge da una stringa
- `Scanner(source: InputStream)`: legge da tastiera

#### Metodi di Cattura Token

Lo `Scanner`permette di conoscere in anticipo (senza consumarlo) l'input successivo:

- `hasNext(pattern?: String | Pattern)`: restituisce `true` se il prossimo token corrisponde al pattern regex (stringa grezza o pattern compilato); se nessun pattern viene usato, allora verifica solo se c'è un token
- `hasNextBoolean()`: restituisce `true` se il prossimo token è interpretabile come `boolean`
- `hasNextByte(radix?: int)`: restituisce `true` se il prossimo token è un `byte` nella radice specificata (*default: 10*)
- `hasNextShort(radix: int)`: restituisce `true` se il prossimo token è uno `short` nella radice specificata
- `hasNextInt(radix: int)`: restituisce `true` se il prossimo token è un `int` nella radice specificata 
- `hasNextLong(radix: int)`: restituisce `true` se il prossimo token è un `long` nella radice specificata 
- `hasNextFloat()`: restituisce `true` se il prossimo token è interpretabile come `float`
- `hasNextDouble()`: restituisce `true` se il prossimo token è interpretabile come `double`
- `hasNextBigInteger()`: restituisce `true` se il prossimo token è interpretabile come `BigInteger` 
- `hasNextBigDecimal()`: restituisce `true` se il prossimo token è interpretabile come `BigDecimal` 
- `hasNextLine()`: restituisce `true` se c'è un'altra riga disponibile nell'input 

I metodi `next` bloccano il flusso finché non è disponibile un token. Lanciano `NoSuchElementException` se non ci sono altri token, `IllegalStateException` se lo scanner è chiuso.

Tutti questi metodi sono esattamente gli stessi di `hasNext`, semplicemente restituiscono il token invece di verificarne la presenza.

#### Metodi di Configurazione

Per configurare:

| Metodo | Return | Descrizione |
|---|---|---|
| `useDelimiter(pattern: String)` | `Scanner` | Imposta il delimitatore tramite pattern regex |
| `useDelimiter(pattern: Pattern)` | `Scanner` | Imposta il delimitatore tramite `Pattern` compilato |
| `useRadix(radix: int)` | `Scanner` | Imposta la radice di default per la lettura di numeri interi |
| `useLocale(locale: Locale)` | `Scanner` | Imposta il `Locale` per la formattazione dei numeri |
| `reset()` | `Scanner` | Reimposta delimitatore, radice e locale ai valori di default |

Tutti questi metodi restituiscono `this`, quindi possono essere concatenati.

Per conoscere l'attuale configurazione:

| Metodo | Return | Descrizione |
|---|---|---|
| `delimiter()` | `Pattern` | Restituisce il delimitatore corrente |
| `radix()` | `int` | Restituisce la radice corrente (*default: 10*) |
| `locale()` | `Locale` | Restituisce il `Locale` corrente |

Altri metodi utili:

| Metodo | Return | Descrizione |
|---|---|---|
| `match()` | `MatchResult` | Restituisce il `MatchResult` dell'ultima operazione di scansione riuscita |
| `tokens()` | `Stream<String>` | Stream di tutti i token rimanenti |
| `close()` | `void` | Chiude lo scanner e la sorgente sottostante (se implementa `Closeable`) |


:::eg
```java
/* Lettura da tastiera */
Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
String line = sc.nextLine();
sc.close();
```
```java
/* Lettura da file */
try (
    Scanner sc = new Scanner(Path.of("data.txt"))
) {
    while (sc.hasNextLine()) {
        System.out.println(sc.nextLine());
    }
}
```
```java
/* Lettura interi */
Scanner sc = new Scanner("10,20,30")
                .useDelimiter(",");
while (sc.hasNextInt()) {
    System.out.println(sc.nextInt()); 
    // ↪ 10
    // ↪ 20
    // ↪ 30
}
```
```java
// rdr: BufferedReader
while((riga = rdr.readLine()) != null) {
    Scanner sc = new Scanner(riga);
    sc.useDelimiter(",");
    String nomeCognome = sc.next();
    // \s* <= regex "0 o più spazi"
    // \s*,\s* <= regex "virgola tra 0 o più spazi"
    sc.skip("\\s*,\\s*");
    sc.useDelimiter("-");
    String indirizzo = sc.next();
    sc.skip("\\s*-\\s*");
    sc.useDelimiter("\n\r");
    String citta = sc.next();
    /* .... */
}
```
:::

:::nota
Dopo qualsiasi `nextXxx()` il cursore si fermerà *dopo* il valore letto ma *prima* del carattere`\n`. 

Una chiamata immediata a `nextLine()` leggerà la riga vuota residua. 
:::

### Manipolazione di Stringhe

La classe `String` mette a disposizione delle sue istanze alcuni metodi utili a tokenizzare e manipolare stringhe:

| Metodo | Return | Descrizione |
|---|---|---|
| `endsWith(suffix: String)` | `boolean` | Verifica se la stringa termina con il suffisso indicato |
| `startsWith(prefix: String)` | `boolean` | Verifica se la stringa comincia con il prefisso indicato |
| `isEmpty()` | `boolean` | Verifica se la stringa ha lunghezza nulla |
| `isBlank()` | `boolean` | Verifica se la stringa è composta di soli spazi vuoti |
| `trim()` | `String` | Resituisce una nuova stringa dove rimuove tutti gli spazi vuoti agli estremi |
| `toUpperCase()` | `String` | Converte tutti i caratteri in maiuscolo |
| `toLowerCase()` | `String` | Converte tutti i caratteri in minuscolo |
| `replaceAll(regex: String, replacement: String)` | `String` | Sostituisce tutte le corrispondenze del pattern con la stringa di rimpiazzo |
| `substring(beginIndex: int, endIndex?: int)` | `String` | Restituisce una sottostringa estratta agli estremi indicati (`[begin;end)`) (se `endIndex` non è indicato, allora sarà considerato l'indice finale della stringa) |
| `split(regex: String)` | `String[]` | Separa la stringa in un array, spezzando dove trova corrispondenze con il pattern fornito |

Di particolare interesse è il metodo `split` che permette di ridurre facilmente una stringa separata da semplici caratteri senza pattern complessi e il metodo `substring` per campi dalla lunghezza/posizionamento fissi nella riga.

:::oss
Tramite `match`, è possibile replicare (in forme anche più dettagliate) il comportamento di `StringTokenizer` con meno overhead, ma è necessario approntare il pattern regex giusto.

:::eg
```java
String firstChunk = whole.substring(0,20);
String secondChunk = whole.substring(20,40);
```
```java
Pattern p = Pattern.compile("(.{20})(.{20})");
Matcher m = p.matcher(whole);
if (m.matches()) {
    String firstChunk = m.group(1);
    String secondChunk = m.group(2);
}
```
```java
Pattern p = Pattern.compile("(?<ck>.{20})(?<st>.{20})");
Matcher m = p.matcher(whole);
if (m.matches()) {
    String firstChunk = m.group("ck");
    String secondChunk = m.group("st");
}
```
Le espressioni regolari sono più orientate a pattern complessi; per il caso dell'esempio è chiaramente `substring` ad essere più conveniente.
:::
