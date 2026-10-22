---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Input e Output in Java'
metaTitle: 'Input e Output'
description: ''
author: 'Italo Corraro'
order: 20
---

## File

La classe **`File`** (dal package `java.io`) modella il percorso a un file/directory (*può anche non esistere nulla a quel percorso*);
di fatti incapsula la stringa del percorso.

I metodi disponibili sono

<!-- metodi di File -->

Il metodo `toPath()`

### Separatore

Il separatore dei nomi dei file e directory in un percorso è 
- il carattere `/` in Unix & Mac (e nei JAR)
- il carattere `\` in Windows
Questo separatore è opportunamente contenuto nella costante `File.separator` in base al sistema ospitante.

:::nb
Il carattere `\` è speciale in Unix e và escapato con `\\`
:::

Il separatore dei percorsi è contenuto in `File.pathSeparator` ed è
- `:` in Unix & Mac (e nei JAR)
- `;` in Windows

### Problemi

- non lanciava eccezioni in caso di fallimento di un'operazione (restituiva solo un `boolean`)
- `rename` inconsistente tra piattaforme
- nessun supporto per link simbolici e collegamenti e nessuna capacità di individuare link circolari
- scarso supporto per metadati (informazioni sul file)
- poco performante su directory ampie

## Path

Dal package **`java.nio.file`**.

È un'interfaccia che modella un percorso.
Può generare un `File` con il metodo `toFile()`.

### Paths

Per costruirne un'istanza si usa la fabbrica `get` della libreria `Paths`.

| Metodo | Return | Descrizione |
|---|---|---|
| `get(strings: String...)` | `Path` | Crea un `Path` da una o più stringhe di percorso |
| `get(uri: URI)` | `Path` | Crea un `Path` da un `URI` |

:::nota
Il path viene assemblato da `get` usando l'opportuno separatore.   
Da **Java 11** sono disponibili `Path.of(String, String...)` e `Path.of(URI)` come equivalenti diretti.
:::

:::oss
In tutti i casi è consigliabile usare sempre `/` come separatore, poichè, anche quando ci si trova in Windows (dove serve `\`), il percorso viene automaticamente corretto dal costruttore
:::

### Metodi di Path
 
| Metodo | Return | Descrizione |
|---|---|---|
| `getFileName()` | `Path` | L'ultimo elemento del percorso (*nome file o cartella*) |
| `getParent()` | `Path` | Il percorso padre, o `null` se non esiste |
| `getRoot()` | `Path` | La radice del percorso (`/`, `C:\`…), o `null` |
| `getNameCount()` | `int` | Numero di elementi del percorso |
| `getName(index: int)` | `Path` | L'elemento in posizione `index` |
| `subpath(beginIndex: int, endIndex: int)` | `Path` | Sotto-percorso tra i due indici (esclusivo) |
| `isAbsolute()` | `boolean` | `true` se il percorso è assoluto |
| `toAbsolutePath()` | `Path` | Versione assoluta del percorso |
| `toRealPath(options: LinkOption...)` | `Path` | Percorso canonico reale (risolve symlink, richiede esistenza) |
| `toUri()` | `URI` | Rappresentazione URI del percorso |
| `resolve(other: Path \| String)` | `Path` | Combina il percorso con `other` |
| `resolveSibling(other: Path)` | `Path` | Risolve `other` rispetto al padre |
| `relativize(other: Path)` | `Path` | Percorso relativo da `this` a `other` |
| `normalize()` | `Path` | Elimina ridondanze (`.`, `..`) |
| `startsWith(other: Path)` | `boolean` | Verifica se inizia con `other` |
| `endsWith(other: Path)` | `boolean` | Verifica se termina con `other` |
| `compareTo(other: Path)` | `int` | Confronto lessicografico |
| `iterator()` | `Iterator<Path>` | Iteratore sugli elementi del percorso |

## Files

Dal package `java.nio.file.Files`.

`Files` è una libreria di sole funzioni statiche per operare su file e directory *di piccole dimensioni*.

### Lettura e scrittura

| Metodo | Return | Descrizione |
|---|---|---|
| `readAllBytes(path: Path)` | `byte[]` | Legge tutto il contenuto del file come array di byte |
| `readAllLines(path: Path, cs?: Charset)` | `List<String>` | Legge tutte le righe del file (charset UTF-8 di default) |
| `readString(path: Path, cs?: Charset)` | `String` | Legge tutto il contenuto come stringa |
| `lines(path: Path)` | `Stream<String>` | Stream lazy delle righe del file |
| `writeString(path: Path, csq: CharSequence, options: OpenOption...)` | `Path` | Scrive una stringa nel file |
| `write(path: Path, bytes: byte[], options: OpenOption...)` | `Path` | Scrive byte nel file |
| `write(path: Path, lines: Iterable<? extends CharSequence>, options: OpenOption...)` | `Path` | Scrive righe nel file |
| `newInputStream(path: Path, options: OpenOption...)` | `InputStream` | Apre uno stream di lettura |
| `newOutputStream(path: Path, options: OpenOption...)` | `OutputStream` | Apre uno stream di scrittura |
| `newBufferedReader(path: Path)` | `BufferedReader` | Apre un reader bufferizzato (UTF-8) |
| `newBufferedWriter(path: Path, options: OpenOption...)` | `BufferedWriter` | Apre un writer bufferizzato (UTF-8) |
| `newByteChannel(path: Path, options: OpenOption...)` | `SeekableByteChannel` | Canale di lettura/scrittura posizionabile |

### Copia e Cancellazione

| Metodo | Return | Descrizione |
|---|---|---|
| `copy(source: Path, target: Path, options: CopyOption...)` | `Path` | Copia un file |
| `copy(in: InputStream, target: Path, options: CopyOption...)` | `long` | Copia uno stream in un file |
| `copy(source: Path, out: OutputStream)` | `long` | Copia un file in uno stream |
| `move(source: Path, target: Path, options: CopyOption...)` | `Path` | Sposta/rinomina un file |
| `delete(path: Path)` | `void` | Elimina il file (lancia eccezione se non esiste) |
| `deleteIfExists(path: Path)` | `boolean` | Elimina il file se esiste |

### Creazione di File

| Metodo | Return | Descrizione |
|---|---|---|
| `createFile(path: Path, attrs: FileAttribute<?>...)` | `Path` | Crea un nuovo file vuoto |
| `createDirectory(dir: Path, attrs: FileAttribute<?>...)` | `Path` | Crea una directory |
| `createDirectories(dir: Path, attrs: FileAttribute<?>...)` | `Path` | Crea directory e tutte le intermedie |
| `createTempFile(prefix: String, suffix: String, attrs: FileAttribute<?>...)` | `Path` | Crea un file temporaneo nella dir di sistema |
| `createTempDirectory(prefix: String, attrs: FileAttribute<?>...)` | `Path` | Crea una directory temporanea |
| `createSymbolicLink(link: Path, target: Path, attrs: FileAttribute<?>...)` | `Path` | Crea un symlink |
| `createLink(link: Path, existing: Path)` | `Path` | Crea un hard link |

### Ispezione e attributi

| Metodo | Tipo di ritorno | Descrizione |
|---|---|---|
| `exists(path: Path, options: LinkOption...)` | `boolean` | Verifica se il path esiste |
| `notExists(path: Path, options: LinkOption...)` | `boolean` | Verifica se il path non esiste |
| `isRegularFile(path: Path, options: LinkOption...)` | `boolean` | Verifica se è un file regolare |
| `isDirectory(path: Path, options: LinkOption...)` | `boolean` | Verifica se è una directory |
| `isSymbolicLink(path: Path)` | `boolean` | Verifica se è un link simbolico |
| `isHidden(path: Path)` | `boolean` | Verifica se il file è nascosto |
| `isReadable(path: Path)` | `boolean` | Verifica se il file è leggibile |
| `isWritable(path: Path)` | `boolean` | Verifica se il file è scrivibile |
| `isExecutable(path: Path)` | `boolean` | Verifica se il file è eseguibile |
| `size(path: Path)` | `long` | Dimensione in byte del file |
| `getLastModifiedTime(path: Path, options: LinkOption...)` | `FileTime` | Data/ora ultima modifica |
| `setLastModifiedTime(path: Path, time: FileTime)` | `Path` | Imposta data/ora ultima modifica |
| `getAttribute(path: Path, attribute: String, options: LinkOption...)` | `Object` | Legge un attributo per nome |
| `setAttribute(path: Path, attribute: String, value: Object, options: LinkOption...)` | `Path` | Imposta un attributo |
| `readAttributes(path: Path, type: Class<A>, options: LinkOption...)` | `A` | Legge un set di attributi tipizzato |
| `getOwner(path: Path, options: LinkOption...)` | `UserPrincipal` | Legge il proprietario del file |
| `readSymbolicLink(link: Path)` | `Path` | Legge il target di un symlink |
| `isSameFile(path: Path, path2: Path)` | `boolean` | Verifica se due path puntano allo stesso file |
| `probeContentType(path: Path)` | `String` | Rileva il MIME type del file |

### Navigazione del filesystem

| Metodo | Tipo di ritorno | Descrizione |
|---|---|---|
| `list(dir: Path)` | `Stream<Path>` | Stream dei contenuti diretti della directory |
| `walk(start: Path, options: FileVisitOption...)` | `Stream<Path>` | Stream ricorsivo dell'albero di directory |
| `walk(start: Path, maxDepth: int, options: FileVisitOption...)` | `Stream<Path>` | Come sopra con profondità massima |
| `find(start: Path, maxDepth: int, matcher: BiPredicate<Path,BasicFileAttributes>, options: FileVisitOption...)` | `Stream<Path>` | Stream filtrato per attributo/predicato |
| `walkFileTree(start: Path, visitor: FileVisitor<? super Path>)` | `Path` | Visita ricorsiva con `FileVisitor` (pattern visitor) |
| `walkFileTree(start: Path, options: Set<FileVisitOption>, maxDepth: int, visitor: FileVisitor<? super Path>)` | `Path` | Come sopra con opzioni e profondità |
| `newDirectoryStream(dir: Path)` | `DirectoryStream<Path>` | Stream iterabile dei contenuti della directory |
| `newDirectoryStream(dir: Path, glob: String)` | `DirectoryStream<Path>` | Stream filtrato con glob pattern (es. `"*.java"`) |
| `getFileStore(path: Path)` | `FileStore` | Informazioni sul volume/partizione |


## Byte Stream

*Uno **stream** è un canala di comunicazione monodirezionale* (o input o output) la cui utilità sta' nel fatto di poter gestire un flusso di informazioni suddiviso in byte.

### Input Stream

**`InputStream`** è una classe astratta del package `java.io` che apre uno stream di lettura di **byte** grezzo.

| Metodo | Return | Descrizione |
|---|---|---|
| `read()` | `int` | Legge un byte (0–255) o `-1` a fine stream |
| `read(b: byte[])` | `int` | Legge byte nell'array; restituisce il numero letto o `-1` |
| `read(b: byte[], off: int, len: int)` | `int` | Legge al massimo `len` byte a partire da `off` |
| `readAllBytes()` | `byte[]` | Legge tutti i byte rimanenti |
| `readNBytes(len: int)` | `byte[]` | Legge esattamente `len` byte |
| `readNBytes(b: byte[], off: int, len: int)` | `int` | Come sopra, in un array esistente |
| `transferTo(out: OutputStream)` | `long` | Copia tutti i byte in un `OutputStream` |
| `close()` | `void` | Chiude lo stream e libera le risorse |

La classe è concretizzata da `FileInputStream`.

:::oss
Il metodo `read` legge un singolo byte (tra 0 e 255).
Se lo stream è finito allora restituisce `-1`,
ma se non c'è un terminatore appropriato a fine file, allora lo stream resta in attesa di risposta fino a lanciare un'eccezione.
:::

#### Utility:

| Metodo | Return | Descrizione |
|---|---|---|
| `skip(n: long)` | `long` | Salta `n` byte; restituisce quanti ne ha saltati |
| `available()` | `int` | Stima dei byte leggibili senza bloccarsi |
| `mark(readlimit: int)` | `void` | Segna la posizione corrente (se `markSupported()`) |
| `reset()` | `void` | Torna alla posizione marcata |
| `markSupported()` | `boolean` | `true` se mark/reset sono supportati |


### Output Stream

**`OutputStream`** è una classe astratta del package `java.io` che apre uno stream di scrittura di **byte** grezzo.

Quando si costruisce una sua istanza è bene tenere a mente che di default farà una sovrascrittura del file; per scrivere alla fine del file c'è la possibilità di passare un boolean come secondo argomento per attivare la scrittura in append.

La classe è concretizzata per prima da `FileOutputStream`.

:::nota
In scrittura non vengono immessi direttamente i byte uno per uno nel file di destinazione, ma vengono accumulati in un *buffer* fino al raggiungimento di una quota limite e a quel punto vengono davvero "scritti".   
Il metodo `flush` forza lo svuotamento del buffer.
:::  

| Metodo | Return | Descrizione |
|---|---|---|
| `write(b: int)` | `void` | Scrive un singolo byte |
| `write(b: byte[])` | `void` | Scrive tutti i byte dell'array |
| `write(b: byte[], off: int, len: int)` | `void` | Scrive `len` byte a partire da `off` |
| `flush()` | `void` | Forza la scrittura di eventuali dati bufferizzati |
| `close()` | `void` | Flush + chiusura dello stream |

## Adapter Streams

Attorno alle classi `InputStream` e `OutputStream` si sviluppano delle classi wrapper che rielaborano l'output grezzo dello strato interno per generare un componente di più alto livello dei soli byte.

Questi adattatori hanno sempre il costruttore che prende un `InputStream`/`OutputStream` come argomento.

Classi come `FilterInputStream` e `FilterOutputStream` costituiscono la base di `BufferedInputStream`, `DataInputStream`, `CheckedInputStream`, ecc.

### Data Input Stream

Dal package `java.io`, `DataInputStream` estende `FilterInputStream`;

legge tipi primitivi in modo portabile (big-endian) da un `InputStream`.

Questa classe implementa l'interfaccia **`DataInput`**, di cui i metodi:

| Metodo | Return | Descrizione |
|---|---|---|
| `readBoolean()` | `boolean` | Legge 1 byte e lo interpreta come boolean | 
| `readByte()` | `byte` | Legge 1 byte con segno |
| `readUnsignedByte()` | `int` | Legge 1 byte senza segno (0–255) |
| `readShort()` | `short` | Legge 2 byte come short con segno |
| `readUnsignedShort()` | `int` | Legge 2 byte come short senza segno |
| `readChar()` | `char` | Legge 2 byte come carattere Unicode |
| `readInt()` | `int` | Legge 4 byte come intero |
| `readLong()` | `long` | Legge 8 byte come long |
| `readFloat()` | `float` | Legge 4 byte come float |
| `readDouble()` | `double` | Legge 8 byte come double |
| `readUTF()` | `String` | Legge una stringa in formato UTF-8 modificato (preceduta da lunghezza) |
| `readFully(b: byte[])` | `void` | Legge esattamente `b.length` byte (blocca finché non li ottiene) |
| `readFully(b: byte[], off: int, len: int)` | `void` | Come sopra per `len` byte a partire da `off` |
| `skipBytes(n: int)` | `int` | Salta esattamente `n` byte |

### Object Input Stream

Dal package `java.io`, `ObjectInputStream` estende `InputStream` e implementa `DataInput` per cui è in grado di leggere tipi primitivi esattamente come `DataInputStream`.

Lo scopo principale della classe è deserializzare oggetti da uno stream (*SOLO se implementano `Serializable`*, che è un marker interface).

:::nota
Mantenere oggetti in memoria non è sempre una buona pratica dal punto di vista della sicurezza, per questo le classi che permettono serializzazione e deserializzazione implementano `Serializable`.

È prassi, per le classi che implementano `Serializable`, avere un campo `private static final long SerialVersionUID` che rappresenta la versione della classe per riconoscibilità.
:::
 
Oltre ai metodi già visti per i primitivi, ha:

| Metodo | Return | Descrizione |
|---|---|---|
| `readObject()` | `Object` | Deserializza e restituisce il prossimo oggetto |
| `readUnshared()` | `Object` | Come `readObject()` ma garantisce un'istanza non condivisa |
| `defaultReadObject()` | `void` | Legge i campi non-transient dell'oggetto corrente (usato in `readObject`) |
| `readFields()` | `ObjectInputStream.GetField` | Accesso ai campi per nome durante la deserializzazione |
| `resolveClass(desc: ObjectStreamClass)` | `Class<?>` | Override per controllo delle classi durante deserializzazione |
| `resolveObject(obj: Object)` | `Object` | Override per sostituire oggetti deserializzati |
| `registerValidation(obj: ObjectInputValidation, prio: int)` | `void` | Registra un validatore eseguito dopo la deserializzazione |
| `close()` | `void` | Chiude lo stream |

### Object Output Stream

`java.io.ObjectOutputStream` estende `OutputStream`.

Implementa l'interfaccia `DataOutput` da cui riceve i metodi:

| Metodo | Return | Descrizione |
|---|---|---|
| `writeBoolean(val: boolean)` | `void` | Scrive un boolean primitivo |
| `writeByte(val: int)` | `void` | Scrive un byte primitivo |
| `writeShort(val: int)` | `void` | Scrive uno short primitivo |
| `writeChar(val: int)` | `void` | Scrive un char primitivo |
| `writeInt(val: int)` | `void` | Scrive un int primitivo |
| `writeLong(val: long)` | `void` | Scrive un long primitivo |
| `writeFloat(val: float)` | `void` | Scrive un float primitivo |
| `writeDouble(val: double)` | `void` | Scrive un double primitivo |
| `writeUTF(str: String)` | `void` | Scrive una stringa in formato UTF-8 modificato |
| `writeBytes(str: String)` | `void` | Scrive una stringa come sequenza di byte (solo byte bassi) |
| `writeChars(str: String)` | `void` | Scrive una stringa come sequenza di `char` |

Serializza oggetti in uno stream (*SOLO se implementano `Serializable`*, che è un marker interface):

| Metodo | Return | Descrizione |
|---|---|---|
| `writeObject(obj: Object)` | `void` | Serializza un oggetto |
| `writeUnshared(obj: Object)` | `void` | Serializza senza condivisione di riferimenti |
| `defaultWriteObject()` | `void` | Scrive i campi non-transient dell'oggetto corrente (usato in `writeObject`) |
| `putFields()` | `ObjectOutputStream.PutField` | Accesso ai campi per nome durante la serializzazione |
| `writeFields()` | `void` | Scrive i campi impostati con `putFields()` |
| `reset()` | `void` | Resetta la tabella degli oggetti scritti (utile in loop) |
| `useProtocolVersion(version: int)` | `void` | Imposta la versione del protocollo di serializzazione |
| `flush()` | `void` | Forza la scrittura dei dati bufferizzati |
| `close()` | `void` | Flush + chiusura dello stream |

### Try Specializzato

Poiché un file viene sempre aperto in un blocco try-catch, è stata introdotta una sintassi specifica per incapsulare la creazione dello stream a inizio blocco:

```java
try(/* apertura risorse */) {
    /* .... */
} catch ...
```

Questo costrutto è utilizzabile solo per le istanze che implementano `AutoCloseable`; al termine del blocco, queste istanze vengono chiuse automaticamente.

### Input Stream Reader & Writer

La lettura da tastiera avviene tramite `System.in` che è un `InputStream` e fornisce un flosso di byte grezzi; teoricamnte `DataInputStream` dovrebbe funzionare da adapter, tuttavia non supporta caratteri unicode, quindi non converte i byte nei caratteri corrispondenti nel modo corretto.

Il modo per effettuare la lettura è di usare l'adapter `InputStreamReader` e incapsularlo in un `BufferedReader`.

```java
BufferedReader in = new BufferedReader(
    new InputStreamReader(system.in, "CP850")
);

System.out.println("> " + in.readLine());
```

`CP850` è il character encoding usato dal prompt comandi di Windows, ma non nelle altre finestre.

È possibile chiedere allo stream reader di usare il suo encoding con il metodo `getEncoding()`.

## File Interni ed Esterni

Il JAR compilato è in grado di utilizzare nativamente con le classi appena descritte solo i file interni al progetto che vengono denominati "risorse".

<!-- Needs more details -->
