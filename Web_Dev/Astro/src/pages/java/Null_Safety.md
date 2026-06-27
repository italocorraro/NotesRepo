---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Null Safety in Java'
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 17
---

Il concetto di assenza è un concetto importante in programmazione e va gestita opportunamente.

## Null

*Il `null` rappresenta l'assenza di un oggetto.*

In una grande quantità di casi, una chiamata a funzione può restituire un `null` quando non trova qualcosa, ma il problema non è questo nello specifico, *ma il fatto che non sia considerato un errore*:

non appena quel `null` verrà richiesto da una funzione che non se lo aspetta, verrà lanciata un'eccezione, *ma nel luogo della chiamata che si è trovata il `null`*.   

I `null` rappresentano un problema per il debug perché sono praticamente delle mine vaganti; il punto in cui bloccano il codice non è quasi mai il punto in cui sono stati generati.

## NaN

Altre costanti speciali sono `NaN` (*Not a Number*) che è un `float`, poi ci sono `POSITIVE_INFINITY` e `NEGATIVE_INFINITY`. 

Anche pericoloso è il fatto che `NaN != NaN`! Per verificare se un numero non è un numero c'è il metodo speciale `isNaN`.   
Analogo per gli infiniti.

Qualunque operazione aritmetica con una di queste costanti risulterà in una sua propagazione.

## Controlli

Poiché è possibile ricevere questi valori imprevisti, si finisce con il dover piazzare una miriade di controlli quando l'operazione non ha risultato certo.

## Optional

Il concetto di oggetto opzionale, ovvero che può mancare/essere `null` è espressa in Java dall'adattatore **`Optional<T>`**, che *non è un `null`, ma (nel caso) lo contiene*.

`Optional<T>` contiene 
- o `null`
- o `T` (un certo tipo)
tuttavia, `Optional` stesso non può *mai* essere `null`.

:::nota
`Optional` può avere tanti usi, ma non va inteso come scusa per evitare di validare i dati, piuttosto può essere usato per risultati legittimamente incerti (in questo modo è nota l'incertezza anche al ricevente) oppure per implementare parametri opzionali.
:::

### La Classe Optional

- `Optional.of`: crea un'istanza di `Optional` incapsulando un valore passato per argomento
- `Optional.empty`: esprime il "niente"
- `Optional.isPresent`/`Optional.isEmpty`: verificano la presenza/assenza del valore
- `Optional.get`/`Optional.getOrElse`: estrae il valore (se c'è); nel secondo caso si può usare un valore di fallback nel caso il valore sia assente

### Le Classi Optional dei Primitivi

Per i tipi primitivi esistono classi ausiliarie poiché non possono usare quella base non essendo né classi né interfacce.

Ne esistono (solo) 3:
- `OptionalInt`
- `OptionalLong`
- `OptionalDouble`
I valori primitivi contenuti (forse) internamente si estraggono con i metodi `getAsInt`, `getAslong` e `getAsDouble` rispettivamente.