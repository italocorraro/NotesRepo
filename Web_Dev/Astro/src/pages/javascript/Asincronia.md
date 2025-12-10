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
            }, 0
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
    triggerPrime.setAttribute('disabled', 'true');
    try {
        lock = true;
        primesHere.textContent = 'Generazione in corso...';
        setTimeout(
            () => {
                const primes = generatePrimes(primer.value, MAX_PRIME);
                primesHere.textContent = `Generati ${primes.length} numeri primi casuali`;
            }, 0
        )
        
    } finally { 
        lock = false; 
        triggerPrime1.removeAttribute('disabled');
    }
})
</script>

:::

### Esecuzione Asincrona

La programmazione **asincrona** permette a JavaScript di seguire l'esecuzione di operazioni secondarie mentre procede con l'esecuzione del thread principale.

## Callback

Una prima soluzione è quella di dividere l'operazione pesante in una serie di funzioni di callback annidate, tuttavia questo genera un codice estremamente difficile da leggere e mantenere.

:::eg
Consideriamo, per iniziare, tre funzioni che chiamano la console e diamogli un timer per simulare il tempo di esecuzione:
```js
setTimeout(() => 
    console.log('Prima operazione'),
    2000 );
setTimeout(() =>
    console.log('Seconda operazione'),
    1600 );
setTimeout(() => 
    console.log('Terza operazione'),
    1200 );
```
<button type="button" id="call1">Avvia:</button>
<p id="call1T" style="white-space: pre;"></p>

<script>
const call1 = document.getElementById('call1');
const call1Targ = document.getElementById('call1T');

lock1 = false;
call1.addEventListener('click', () => {
    if(lock1) {
        console.log("Attendi il completamento dell'operazione in corso");
        return;
    }
    lock1 = true;
    call1Targ.textContent = '';
    setTimeout(() => {
        call1Targ.textContent += 'Prima operazione\n';
        lock1 = false; 
    }, 2000 );
    setTimeout(() =>
        call1Targ.textContent += 'Seconda operazione\r\n',
        1600 );
    setTimeout(() => 
        call1Targ.textContent +='Terza operazione\r\n',
        1200 );
})
</script>

Le operazioni vengono iniziate sequenzialmente, ma questo riguarda solo la partenza dei timer, infatti in output le troviamo in ordine da quella più breve a quella più lunga;

per poter dare un ordine indipendente dal tempo di esecuzione, potrebbe non bastare chiamare le funzioni in ordine, un modo migliore è di passare la funzione che vogliamo eseguire dopo come argomento a quella in esecuzione, cioè usare una *funzione di callback*:

```js
const task1 = (callback) => {
    setTimeout(() => {
        console.log('Prima operazione');
        callback();
    }
    2000 );
}
const task2 = (callback) => {
    setTimeout(() => {
        console.log('Seconda operazione');
        callback();
    }
    1600 );
}
const task3 = (callback) => {
    setTimeout(() => {
        console.log('Terza operazione');
        callback();
    }
    1200 );
}
```
Chiamiamole nella sequenza desiderata:
```js
task1(() => {
    task2(() => {
        task3(() => 
            null)
    })
});
```
<button type="button" id="call2">Avvia:</button>
<p id="call2T" style="white-space: pre;"></p>

<script>
const call2 = document.getElementById('call2');
const call2Targ = document.getElementById('call2T');

lock2 = false;
call2.addEventListener('click', () => {
    if(lock1) {
        console.log("Attendi il completamento dell'operazione in corso");
        return;
    }
    lock2 = true;
    call2Targ.textContent = '';
    setTimeout(() => {
        call2Targ.textContent += 'Prima operazione\n';
        setTimeout(() => {
            call2Targ.textContent += 'Seconda operazione\r\n';
            setTimeout(() => {
                call2Targ.textContent +='Terza operazione\r\n';
                lock2 = false; 
            }, 1200 );
        }, 1600 );     
    }, 2000 );  
});
</script>

Questo sarebbe il risultato del suddividere una grossa operazione in sotto operazioni da eseguire ordinatamente, tuttavia, questo metodo diventa ingestibile molto presto, infatti, se avessimo necessità di dividere un'operazione in 9 step:
```js
step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                step5(() => {
                    step6(() => {
                        step7(() => {
                            step8(() => {
                                step9(() => 
                                    null;
                                )
                            })
                        })
                    })
                })
            })
        })
    })
});
```
Ci ritroveremmo con una piramide di callback detta *callback hell*.
:::

:::oss
Riprendendo l'esempio dei numeri primi, possiamo suddividere in step la generazione di numeri primi:

=c===
```js
function generatePrimesSequence(array, nowMany, howMany, maxPrime, currentStep, step) {
    const STEP = step;
    if(array.length >= maxPrime) {
        currentStep();
        lock = false;
        return;
    }
    while(array.length < (nowMany + STEP)) {
        const candidate = random(maxPrime);
        if(isPrime(candidate)) {
            array.push(candidate);
        }
    }
    setTimeout(() => {
        currentStep();
        console.log(nowMany = array.length);
        generatePrimesSequence(array, nowMany, howMany, maxPrime, currentStep, STEP);
    }, 0);
}

triggerPrime.addEventListener('click', () => {
    if(lock) {return;}
    lock = true;
    primesHere.textContent = 'Generazione in corso...';
    setTimeout(
        () => {
            const primes = [];
            generatePrimesSequence(primes, 0, primer1.value, MAX_PRIME, 
            () => {
                primesHere.textContent = `Generati ${primes.length} numeri primi casuali`;
            }, 1000);
        }, 0
    )
});
```

Indica quanti numeri primi generare:
<input type="text" name="prime value ceil" id="quota1" value="1000000">
<button type="button" id="generate1">Genera numeri primi</button>

Risultato: <span id="output1"></span>

In questo esempio, abbiamo scaglionato la generazione di numeri primi in modo da crearne 1000 alla volta; ogni 1000 numeri primi creati, viene chiamata ricorsivamente la funzione generatrice per crearne altri 1000 fino al raggiungimento dell'obiettivo.

Osserviamo che in realtà JavaScript sta' comunque eseguendo 1 operazione alla volta, tuttavia la generazione di 1000 numeri primi è sufficientemente piccola da poterna alternare all'esecuzione del thread principale,

infatti, se aumentiamo lo step a 10000:

Indica quanti numeri primi generare:
<input type="text" name="prime value ceil" id="quota2" value="1000000">
<button type="button" id="generate2">Genera numeri primi</button>

Risultato: <span id="output2"></span>

Osserviamo che la pagina non rimane congelata, ma va' invece a scatti.

:::nb
È strettamente necessario usare `setTimeout` in questa situazione (ricorsione) per permettere al browser di tornare al thread principale alla fine della generazione dei numeri primi ad ogni step

<script>

function generatePrimesSequence(array, nowMany, howMany, maxPrime, currentStep, step) {
    const STEP = step;
    if(array.length >= maxPrime) {
        currentStep();
        lock = false;
        triggerPrime1.removeAttribute('disabled');
        triggerPrime2.removeAttribute('disabled');
        return;
    }
    while(array.length < (nowMany + STEP)) {
        const candidate = random(maxPrime);
        if(isPrime(candidate)) {
            array.push(candidate);
        }
    }
    setTimeout(() => {
        currentStep();
        console.log(nowMany = array.length);
        generatePrimesSequence(array, nowMany, howMany, maxPrime, currentStep, STEP);
    }, 0);
}


const primer1 = document.getElementById('quota1');
const primesHere1 = document.getElementById('output1');
const triggerPrime1 = document.getElementById('generate1');


triggerPrime1.addEventListener('click', () => {
    if(lock) {return;}
    lock = true;
    triggerPrime1.setAttribute('disabled', 'true');
    primesHere1.textContent = 'Generazione in corso...';
    setTimeout(
        () => {
            const primes = [];
            generatePrimesSequence(primes, 0, primer1.value, MAX_PRIME, 
            () => {
                primesHere1.textContent = `Generati ${primes.length} numeri primi casuali`;
            }, 1000);
        }, 0
    )
});

const primer2 = document.getElementById('quota2');
const primesHere2 = document.getElementById('output2');
const triggerPrime2 = document.getElementById('generate2');


triggerPrime2.addEventListener('click', () => {
    if(lock) {return;}
    lock = true;
    triggerPrime2.setAttribute('disabled', 'true');
    primesHere2.textContent = 'Generazione in corso...';
    setTimeout(
        () => {
            const primes = [];
            generatePrimesSequence(primes, 0, primer2.value, MAX_PRIME, 
            () => {
                primesHere2.textContent = `Generati ${primes.length} numeri primi casuali`;
            }, 10000);
        }, 0
    )
});
</script>

:::

## Event Loop

### Microtask e Macrotask

JavaScript resta single-threaded, cioè può eseguire solo una operazione alla volta, tuttavia, le operazioni sincrone non sono l'unico tipo di operazioni che JavaScript può gestire; due tipi di operazioni asincrone possono essere gestite da JavaScript:
* *Microtask*: operazioni asincrone ad alta priorità, come le callback delle `Promise`
* *Macrotask*: operazioni asincrone a bassa priorità, come quelle in callback a `setTimeout`, `setInterval` o gli eventi del DOM (`addEventListener`)

*Le operazioni sincrone vengono eseguite immediatamente da JavaScript, mentre i microtask e i macrotask vengono eseguiti solo quando JavaScript è "libero"*.

### Task e Microtask Queue

Le funzioni `setTimeout`, `setInterval`, `addEventListener` e simili sono tutte =u=funzioni sincrone== che vengono eseguite subito, non appena raggiunte dall'interprete del browser;

quelle asincrone sono le loro funzioni di callback: 
1. la =u=*funzione sincrona*== (tipo `setTimeout`) viene eseguita *immediatamente*
2. la =u=*funzione di callback*== interna è un microtask/macrotask e viene *registrata per essere eseguita seccessivamente* (in una lista di operazioni a bassa priorità)
3. la funzione sincrona ha completato la sua esecuzione e quindi il *compilatore può proseguire con il thread principale*
4. quando il compilatore non ha operazioni principali da eseguire, ne *esegue una dalla lista a bassa priorità*

:::eg
Osserviamo l'ordine di esecuzione di una sequenza di operazioni sincrone, intermezzate da alcune asincrone: 

```js
console.log('Partenza (sync)'); // sync
console.log('Continuo (sync)'); // sync
setTimeout(() => { 
    // registra macrotask 1
    console.log('Asincrono-1 (macro)')}, 0);
console.log('Ancora (sync)'); // sync
Promise.resolve().then(() => { 
    // registra microtask
    console.log("Asincrono-2 (micro)")});
console.log('e ancora (sync)'); // sync
setTimeout(() => { 
    // registra macrotask 2
    console.log('Asincrono-3 (macro)')}, 0);
console.log('Fine (sync)'); // sync
// esegue microtask
// esegue macrotask 1
// esegue macrotask 2
```

<button type="button" id="eg1">Avvia</button>

Risultato: <span id="outscoop" style="white-space: pre;"></span>
<script>
const classOut = document.getElementById('outscoop');
document.getElementById('eg1').addEventListener('click', () => {
    classOut.textContent = '\r\nPartenza (sync)\r\n';
    classOut.textContent += 'Continuo (sync)\r\n';
    setTimeout(() => {
        classOut.textContent += 'Asincrono-1 (macro)\r\n';
    }, 0);
    classOut.textContent += 'Ancora (sync)\r\n';
    Promise.resolve().then(() => {
        classOut.textContent += 'Asincrono-2 (micro)\r\n';
        })
    classOut.textContent += 'e ancora (sync)\r\n';
    setTimeout(() => {
        classOut.textContent += 'Asincrono-3 (macro)\r\n';
    }, 0);
    classOut.textContent += 'Fine (sync)\r\n';
})
</script>

Osserviamo che *le operazioni asincrone vengono eseguite per ultime*, anche se il timer impostato per il delay della loro esecuzione è $0ms$, questo perché le callback di `setTimeout` e `Promise` sono eseguite in modo asincrono, non sincrono; hanno priorità inferiore alle altre operazioni sincrone, quindi, in una ipotetica coda di esecuzione delle operazioni, quelle asincrone vengono messe alla fine, dopo quelle sincrone.

Questo meccanismo permette al compilatore di concentrarsi sulle operazioni sincrone (del thread principale) senza quindi bloccare l'esecuzione dello script per operazioni più pesanti, che andrebbero eseguite in modo asincrono
:::

L'*event loop* gestisce l'ordine delle operazioni eseguite scegliendole tra tre liste ordinate:

* **Call Stack**: la lista delle chiamate tiene traccia delle chiamate di funzione nel codice e, ogni volta che una avviene, l'esecuzione della funzione chiamata viene messa in coda alla lista; JavaScript esegue sempre l'*ultima* operazione della lista, quindi la *call stack* segue un principio LIFO (*Last-In-First-Out*), cioè l'ultima ad essere inserita nella lista è la prima ad essere eseguita
* **Task Queue**: la lista dei macrotask comprende delle callback generate dal completamento di funzioni quali `setTimeout`, `setInterval`, `fetch` o eventi del DOM
* **Microtask Queue**: la lista dei microtask comprende principalmente le callback delle `Promise`

L'**Event Loop** (*ciclo degli eventi*): tiene traccia delle tre liste; se la call stack è vuota, passa una operazione dalla microtask queue alla call stack, se anche la microtask queue è vuota, allora prende l'operazione dalla task queue.

## Promesse

L'approccio moderno all'**asincronia** prevede l'utilizzo di un proxy per gestire l'operazione:

1. Le operazioni pesanti sono incapsulate in speciali funzioni asincrone,
1. Immediatamente dopo la chiamata, la funzione asincrona restituisce un proxy dello stato dell'operazione,
2. L'esecuzione dello script prosegue normalmente e intanto un "ascoltatore" (simile agli eventi) resta in attesa che il proxy produca una risposta da passare a una callback che la processerà

Il proxy che viene generato dalla funzione asincrona è un oggetto **`Promise`** che contiene due proprietà speciali: uno stato e un risultato.

La proprietà stato (`state`) può essere uno di tre valori