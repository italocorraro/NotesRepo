---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Date e Gestione del Tempo in Java'
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 6
---

## Date Time API

Java fornisce un'API (Application Programming Interface) per la gestione standardizzata del tempo con il package `java.time`.

L'API in questione fornisce diverse entità:
- gli oggetti vengono costruiti tramite una "fabbrica" (metodo `of`) che funge da tramite con il vero costruttore di oggetti che è privato
- gli oggetti creati sono immutabli; ogni "modifica" genera invece un nuovo oggetto

Inoltre, l'API distingue Tempo relativo da assoluto, cioè data e ora locali da un valore standard privo di localizzazione;

implementa anche i concetti di giorno, mese, anno, calendario...

## Classi Locali

`java.time` contiene le classi:

- `LocalDate` per rappresentare una data (anno-mese-giorno)
- `LocalTime` per rappresentare un orario (ore-minuti-secondi-nanosecondi)
- `LocalDateTime` per rappresentare data e orario

Il metodo `of` costruisce una data/orario e lo possiedono tutte queste classi.   
Il metodo `now` restituisce la data/orario correnti

### Metodi Factory

I metodi *statici* `of` i vari `of*` costruiscono oggetti con i dati forniti:
- `ofMonth` parte dal mese
- `ofDay` parte dal giorno
- `ofYear` parte dall'anno

### Metodi Accessor

Le classi `LocalDate` e `LocalTime` possiedono diversi metodi accessor per leggere dati selezionati:
- da `LocalDate`
    - il giorno con `getDayOfMonth`
    - il mese con `getMonth`
    - l'anno con `getYear`
    - il giorno dell'anno con `getDayOfYear`
    - il giorno della settimana con `getDayOfWeek`
    - verificare se l'anno è bisestile con `isLeapYear`
- da `LocalTime`
    - l'ora con `getHour`
    - i minuti con `getMinute`
    - i secondi con `getSecond`
    - i nanosecondi con `getNano`

### Metodi Aritmetici

Da una data possiamo:

- aggiungere ore/minuti/giorni/settimane/mesi/anni con i metodi `plus*`
- sottrarre con i metodi `minus*`
- cambiare parti selezionate con i metodi `with*`

### Metodi di Confronto

Con i metodi

- `isBefore`
- `isAfter`
- `isEqual` (da preferire ad `equals`)

### Metodi di Conversione

- `to*`

### Periodi

La classe `Period` modella un periodo di tempo misurato in anni, mesi e/o giorni:

```java
Period p = Period.ofMonths(5)
                 .plusDays(5);
Period t = Period.ofDays(5);
```

`Period` possiede anche tutti i meodi accessor delle classi di tempo locale e, inoltre, il metodo `between` di queste classi è una "sottrazione" tra due date che restituisce un istanza di `Period`; il metodo `addTo` permette di aggiungere un `Period` a un `LocalDate` (o `LocalTime`).

:::nb
Il metodo `addTo` *non restituisce un `Local*`*, ma un oggetto più generale istanza di `Temporal`; è necessario un type-cast per restringere a `Local*`
:::

:::oss
Le classi temporali tengono conto automaticamente dell'ora legale
:::

## Classi Assolute

Le classi `Instant`, `OffsetDateTime` e `ZonedDateTime` registrano un istante sulla linea temporale dal 1° gennaio 1970 ore 00:00 con precisione al nanosecondo.

- `Instant` rappresenta semplicemente la quantità di nanosecondi trascorsi dalla data di riferimento
- `OffsetDateTime` include un offset espresso rispetto al tempo UTC/Greenwich e un `LocalDateTime` per rappresentare la data assoluta come data locale corretta con l'offset rispetto all'UTC
- `ZonedDateTime` implementa tutte le regole per esprimere date assolute relative alle varie time-zones

La classe `OffsetDateTime` deve conoscere il dato offset come un oggetto `ZoneOffset` o `ZoneId` (per ricavare l'offset)

:::eg
```java
OffsetDateTime off0 = OffsetDateTime.now(ZoneId.of("Europe/Rome"));
System.out.println(off0);
// ↪ 2026-02-23T12:59:38.287161797+01:00
/* La prima parte è la data locale di Roma (Europa);
 * il +01:00 è l'offset tra l'ora locale e UTC */

OffsetDateTime off1 = OffsetDateTime.now(ZoneOffset.of("+01:00"));
System.out.println(off1);
// ↪ 2026-02-23T12:59:38.291331676+01:00

OffsetDateTime off2 = OffsetDateTime.parse("2026-02-23T12:48:04.189559933+01:00");
System.out.println(off2);
// ↪ 2026-02-23T12:48:04.189559933+01:00

OffsetDateTime off3 = OffsetDateTime.ofInstant(Instant.now(), ZoneId.systemDefault());
System.out.println(off3);
// ↪ 2026-02-23T12:59:38.301125577+01:00

OffsetDateTime off4 = OffsetDateTime.of(LocalDateTime.now(), ZoneOffset.of("+01:00"));
System.out.println(off4);
// ↪ 2026-02-23T12:59:38.307745675+01:00

OffsetDateTime off5 = OffsetDateTime.now(ZoneId.of("UTC"));
System.out.println(off5);
// ↪ 2026-02-23T11:59:38.312755639Z
```
:::

### Duration

La classe `Duration` definisce un lasso di tempo (tra due istanti) misurato in nanosecondi; il metodo statico `between` restituisce un'istanza di `Duration` tra due `Instant` passati per argomento.

Anche la classe `Duration` fornisce metodi `plus*`, `minus*` e `with*` per produrre nuove `Duration`.

`Duration` fornisce anche metodi `to*` per ottenere il corrispettivo (arrotondato per difetto) di giorni/ore/minuti/ecc...



