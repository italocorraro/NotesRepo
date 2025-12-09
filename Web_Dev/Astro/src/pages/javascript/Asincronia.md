---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Asincronia in JavaScript'
metaTitle: "Appunti sull'Asincronia in JavaScript"
description: 'Appunti e note sul concetto di asincronia e promesse in JavaScript.'
author: 'Italo Corraro'
---

## Esecuzione Sincrona

Il codice JavaScript viene eseguito su un singolo *thread*, questo significa che JavaScript, normalmente, esegue le sue operazioni in modo sequenziale (esecuzione **sincrona**) e pertanto, perché una nuova operazione possa essere eseguita, quella precedente deve essere stata completata.

L'approccio sincrono funziona fin quando le operazioni possono essere completate in una quantità ristretta di tempo, ma operazioni tempo-intensive finiranno per congelare tutti gli script della pagina poichè solo una operazione può essere eseguita alla volta.

:::eg
Indica quanti numeri primi generare:
<input type="text" name="prime value ceil" id="quota" value="1000000">
<button type="button" id="generate">Genera numeri primi</button>

Risultato: <span id="output"></span>

=c===
```javascript
const MAX_PRIME = 1000000;

function isPrime(x) {
    for(let i = 2; i <= Math.sqrt(x); i++) {
        // verifichiamo che x non sia divisibile per i
        if(x % i === 0) {return false;} 
    }
    return x > 1;
}

const random = (max) => {
    // genera intero tra 0 e max
    return Math.floor(Math.random()*max);
}

function generatePrimes(howMany, maxPrime) {
    const primes = [];
    while(primes.length < howMany) {
        const candidate = random(maxPrime);
        if(isPrime(candidate)) {
            primes.push(candidate);
        }
    }
    return primes;
}

const primer = document.getElementById('quota');
const primesHere = document.getElementById('output');
const triggerPrime = document.getElementById('generate');

let lock = false;
triggerPrime.addEventListener('click', () => {
    if(lock) {return;}
    try {
        lock = true;
        primesHere.textContent = 'Generazione in corso...';
        setTimeout(
            () => {
                const primes = generatePrimes(primer.value, MAX_PRIME);
                primesHere.textContent = `Generati ${primes.length} numeri primi casuali`;
            }, 10
        )
        
    } finally { lock = false; }
})
```

Possiamo osservare come la generazione di numeri primi impieghi tempo (se non succede, chiedi di generare più numeri), inoltre, la pagina diventa irresponsiva nel mentre la funzione `generatePrimes` è in esecuzione.

Un modo semplice per verificarlo è avviare la generazione e cercare di interagire con i controlli.

<script>
const MAX_PRIME = 1000000;

function isPrime(x) {
    for(let i = 2; i <= Math.sqrt(x); i++) {
        // verifichiamo che x non sia divisibile per i
        if(x % i === 0) {return false;} 
    }
    return x > 1;
}

const random = (max) => {
    // genera intero tra 0 e max
    return Math.floor(Math.random()*max);
}

function generatePrimes(howMany, maxPrime) {
    const primes = [];
    while(primes.length < howMany) {
        const candidate = random(maxPrime);
        if(isPrime(candidate)) {
            primes.push(candidate);
        }
    }
    return primes;
}

const primer = document.getElementById('quota');
const primesHere = document.getElementById('output');
const triggerPrime = document.getElementById('generate');

let lock = false;
triggerPrime.addEventListener('click', () => {
    if(lock) {return;}
    try {
        lock = true;
        primesHere.textContent = 'Generazione in corso...';
        setTimeout(
            () => {
                const primes = generatePrimes(primer.value, MAX_PRIME);
                primesHere.textContent = `Generati ${primes.length} numeri primi casuali`;
            }, 10
        )
        
    } finally { lock = false; }
})
</script>

:::

### Callback Hell

Una prima soluzione è quella di ridurre l'operazione in una serie di funzioni di callback annidate, tuttavia questo genera un codice estremamente difficile da leggere e mantenere.

## Promesse

L'approccio moderno all'**asincronia** prevede l'utilizzo di un proxy per gestire l'operazione:

1. Le operazioni pesanti sono incapsulate in speciali funzioni asincrone,
1. Immediatamente dopo la chiamata, la funzione asincrona restituisce un proxy dello stato dell'operazione,
2. L'esecuzione dello script prosegue normalmente e intanto un "ascoltatore" (simile agli eventi) resta in attesa che il proxy produca una risposta da passare a una callback che la processerà

Il proxy che viene generato dalla funzione asincrona è un oggetto **`Promise`** che contiene due proprietà speciali: uno stato e un risultato.

La proprietà stato (`state`) può essere uno di tre valori