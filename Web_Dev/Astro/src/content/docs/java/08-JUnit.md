---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Testing in Java'
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 8
---

## Struttura di JUnit

JUnit è un'applicazione Java che svolge blocchi di test e riporta i risultati: errori, successi e fallimenti.

JUnit svolge i test su parti quanto più piccole di codice possibile ma soprattutto, *le unità di test sono indipendenti tra loro*, in questo modo non ha necessità di fermarsi per un test fallito e può svolgere i test su ogni unità a prescindere dei risultati di ciascuno.

JUnit ha 3 strati:

- **JUnit Platform**: è la base del framework di testing
    - definisce la TestEngine API per
    - fornisce un Launcher specializzato per uso da riga di comando
    - fornisce un Runner basato su JUnit 4 per totale retrocompatibilità che esegue i test
- **JUnit Jupiter**: modello per la scrittura dei test di JUnit 5
- **JUnit Vintage**: per test in JUnit 4

Definiamo:

- **Test Fixture** una classe i cui metodi realizzano i vari casi di test che si vuole raggruppare, ma non sono necessariamente limitati a questo; i test sono *necessariamente* preceduti da un tag `@Test`
- **mock** che simula il funzionamento di un altro componente che non sta' venendo testato, ma dai cui risultati dipende il componente che sta' venendo testato: l'obiettivo è quello di rendere i test dei singoli componenti indipendenti tra loro anche quando un certo componente dipende da un altro, in questi casi si fornisce un *mock* della dipendenza che ne simula un comportamento corretto


:::eg
```java
public class MyCalendarTest {
    @Test
    public void testAdd() {
        LocalDateTime from = LocalDateTime.of(2019, Month.MARCH, 10, 12, 30 ,0);
        LocalDateTime to   = LocalDateTime.of(2019, Month.MARCH, 10, 15, 30 ,0);
        Appointment app    = new Appointment("Compleanno", from, to);
        myCal.add(app);
        int expected = 1;
        org.junit.jupiter.api.Assertions.assertEquals(expected, myCal.getAllAppointments().size());
    }
}
```
La classe `Assertions` appartenente all'API di JUnit e mette a disposizione diversi metodi `assert` che vengono lanciati direttamente da JUnit (Jupiter in questo caso)
:::

:::nb
La `assertEquals` non chiama automaticamente i metodi `equals` definiti nella classe

I test tipo `equals` vanno fatti con cautela tra numeri a virgola mobile poiché sono memorizzati in modo approssimato anche quando sembrerebbero uguali (è solo una rappresentazione; il dato di per sé potrebbe essere diverso)
:::eg
```java
double d1 = 0.1*3;
double d2 = 1.0 - 0.7;
double d3 = 0.3;
System.out.println(d1 == d2);
// ↪ true (normale)
System.out.println(d2 == d3);
// ↪ false (?)
System.out.println(d3 == d1);
// ↪ false (?)
```
:::

## Annotazioni

Una suite di test può avere necessità di svolgere certi test o operazioni più volte all'interno della classe; in questi casi è conveniente usare le annotazioni messe a disposizione:

- `@BeforeAll`/`@AfterAll`: una singola funzione *statica* che viene eseguita prima/dopo una classe di test
- `@BeforeEach`/`@AfterEach`: un singolo metodo *non statico* che viene eseguito prima/dopo ogni singolo metodo di test (`@Test`)

## Risulati

I risultati di un test possono essere tre:

- *successo*: l'asserzione è vera
- *fallimento*: lo svolgimento del test si è concluso correttamente, ma l'asserzione ha dato esito negativo; viene inoltre fornito il dato calcolato che è stato passato alla assert
- *errore*: lo svolgimento del test *non si è concluso* poiché si è verificata un'eccezione; viene riportato lo *stack trace* che indica l'ordine delle chiamate e i loro risultati

