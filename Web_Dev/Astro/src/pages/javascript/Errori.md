---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Errori in JavaScript'
metaTitle: 'Appunti sugli errori in JavaScript'
description: 'Appunti e note sugli errori in JavaScript.'
author: 'Italo Corraro'
---

In JavaScript esiste un unico momento in cui gli errori si manifestano: il **runtime**. Non esiste distinzione compile-time come in Java tra `Error` e `Exception`. Tutti gli errori estendono la classe base **`Error`**.

## Struttura Base di `Error`

```javascript
const err = new Error("messaggio");
err.name;    // tipo dell'errore (es. "TypeError")
err.message; // messaggio descrittivo
err.stack;   // stack trace come stringa
```

## Errori standard 

Questi sono disponibili in qualsiasi ambiente JavaScript.

| Tipo | Occorrenza | Esempio |
|------|--------------------|---------|
| `Error` | Classe base generica, usata per errori custom | `throw new Error("qualcosa è andato storto")` |
| `TypeError` | Operazione su un valore del tipo sbagliato | `null.property`, `undefined()` |
| `ReferenceError` | Accesso a una variabile non dichiarata | `console.log(x)` dove `x` non esiste |
| `SyntaxError` | Codice JavaScript sintatticamente non valido | `JSON.parse("{ non valido }")` |
| `RangeError` | Valore fuori dal range consentito | `new Array(-1)`, ricorsione infinita |
| `URIError` | Uso scorretto delle funzioni URI | `decodeURIComponent('%')` |


### Errori in Ambiente Browser

| Tipo | Occorrenza | Esempio |
|------|--------------------|------|
| `DOMException` | Operazione illegale sulle API del DOM | `document.querySelector(null)`, accesso a origini diverse (CORS) |
| `SecurityError` | Violazione di sicurezza (sottoclasse di `DOMException`) | Accesso a `localStorage` in iframe cross-origin |
| `NetworkError` | Richiesta di rete fallita | `fetch()` su URL irraggiungibile |
| `AbortError` | Operazione interrotta con `AbortController` | `fetch()` con `.abort()` |
| `NotFoundError` | Risorsa DOM non trovata | Rimozione di un nodo già rimosso |
| `InvalidStateError` | Operazione su oggetto in stato non valido | `MediaSource` o `IDBTransaction` già chiuse |

:::eg
Esempio `DOMException`:
```js
try {
    document.querySelector(null);
} catch (e) {
    e instanceof DOMException; 
    // true
    e.name;                    
    // "SyntaxError" (nome interno DOMException)
}
```
:::

### Errori in Ambiente Node.js

| Tipo | Quando si verifica | Note |
|------|--------------------|------|
| `Error` (system errors) | Errori di sistema OS-level | Hanno proprietà aggiuntive: `code`, `syscall`, `path` |
| `ENOENT` | File o directory non trovata | `fs.readFile("non-esiste.txt")` |
| `EACCES` | Permessi insufficienti per accedere a una risorsa | Lettura di file senza permessi |
| `EADDRINUSE` | Porta già in uso | `server.listen(3000)` quando la porta è occupata |
| `ECONNREFUSED` | Connessione rifiutata dal server remoto | `http.get()` su porta chiusa |
| `ETIMEDOUT` | Timeout di connessione | Richiesta di rete senza risposta |
| `AssertionError` | Fallimento di `assert` del modulo `node:assert` | `assert.strictEqual(1, 2)` |

:::eg
System error in `Node.js`:
```js
const fs = require("fs"); // CommonJS!
try {
    fs.readFileSync("non-esiste.txt");
} catch (e) {
    e.code;    // "ENOENT"
    e.syscall; // "open"
    e.path;    // "non-esiste.txt"
}
```
:::

### Errori Operazioni Asincrone

Gli errori in contesti asincroni non propagano come eccezioni sincrone: vanno catturati esplicitamente.

:::eg
Con `Promise`:
```js
fetch("https://esempio.com")
    .then(res => res.json())
    .catch(err => console.error(err.name, err.message));
```

Con `async`/`await`:
```js
async function carica() {
    try {
        const res = await fetch("https://esempio.com");
        const data = await res.json();
    } catch (err) {
        // cattura sia errori di rete che di parsing
        console.error(err);
    }
}
```

Errori non catturati da `Promise`
```js
process.on("unhandledRejection", (reason) => {
  console.error("Promise non gestita:", reason);
});
```
:::

## Errori Custom

È pratica comune estendere `Error` per creare tipi semantici specifici all'applicazione.

:::::eg
```javascript
class ValidationError extends Error {
    constructor(message, field, options) {
        super(message, options);
        this.name = "ValidationError";
        this.field = field;
    }
}
```
```js
class HttpError extends Error {
    constructor(statusCode, message, options) {
        super(message, options);
        this.name = "HttpError";
        this.statusCode = statusCode;
    }
}
```
:::eg
```js
try {
    throw new ValidationError("Campo obbligatorio", "email");
} catch (e) {
    if (e instanceof ValidationError) {
        console.error(`Campo "${e.field}": ${e.message}`);
    }
}
```
:::
:::::

## Confronto rapido Java vs JavaScript

| Concetto Java | Equivalente JavaScript |
|---------------|----------------------|
| `Throwable` | `Error` (classe base) |
| `Error` (es. `OutOfMemoryError`) | Nessun equivalente diretto; JS non gestisce errori JVM |
| `RuntimeException` | Tutti gli errori JS (sono tutti runtime) |
| `Checked Exception` | **Non esiste** in JavaScript |
| Eccezioni custom (`extends Exception`) | Classi custom (`extends Error`) |
| `catch (IOException \| SQLException e)` | `catch (e)` unico blocco (nessun type-check) |