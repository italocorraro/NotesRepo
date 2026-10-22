---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Internazionalizzazione in Java'
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 7
---

Java implementa la localizzazione della cultura di un luogo tramite la classe `java.util.Locale`; 

una *cultura locale* è identificata da lingua e paese di riferimento:
- la *lingua* è espressa da due caratteri minuscoli
- il *paese* è espresso da due caratteri maiuscoli

Java implementa principalmente due formattatori:
- uno per i formati numerici
- uno per i formati di date e orari

Entrambe le famiglie di classi formattatori usando dei metodi "fabbrica"

## Formattatori Numerici

I formattatori numerici sono tutti costruiti a partire dalla classe `java.text.NumberFormat` che espon i metodi `get**` per costruirli

```java
// per formattare numeri
NumberFormat fN = NumberFormat.getNumberInstance(); 
// per formattare percentuali
NumberFormat fP = NumberFormat.getPercentInstance(); 
// per formattare valute
NumberFormat fV = NumberFormat.getCurrencyInstance(); 
```

Gli oggetti formattatori possono essere personalizzati per formattare in un certo modo:

```java
NumberFormat fN = NumberFormat.getNumberInstance(); 
// vogliamo solo 2 cifre decimali:
fN.setMaximumFractionDigits(2);
// possiamo usarlo per tagliare alla seconda cifra decimale
System.out.printl(fN.format(34.67273));
// ↪ 34,67
```

:::oss
Il `Locale` di default è `it_IT`, quindi i numeri sono formattati e scritti secondo la convenzione italiana
:::eg
```java
NumberFormat fN = NumberFormat.getNumberInstance(Locale.CANADA); 
System.out.printl(fN.format(34.67273));
// ↪ 34.67
```
La convenzione canadese vuole il `.` invece della `,` per separare i decimali
:::


## Formattatori Date e Ore

La classe `DateTimeFormatter`, dal package predefinito `java.time.format` permette di costruire formattatori in diversi modi:
- i pattern predisposti come costanti, in particolare gli standard ISO (anno-mese-giorno-ora-minuto...) e RFC
- un formato personalizzato fornito tramite una stringa al metodo statico `ofPattern`

:::eg
```java
print(DateTimeFormatter.BASIC_ISO_DATE.format(LocalDate.now()));
// ↪ 20260223
print(DateTimeFormatter.ISO_LOCAL_DATE.format(LocalDate.now()));
// ↪ 2026-02-23
print(DateTimeFormatter.ISO_OFFSET_DATE_TIME.format(OffsetTime.now()));
// ↪ 2026-02-23T08:28:39.278+01:00
```
:::

## Format Style

La classe `FormatStyle` possiede 4 costanti che permettono di indiacare quanto esplicite vogliamo le informazioni che stiamo formattando:

```java
System.out.println(DateTimeFormatter.ofLocalizedDate(FormatStyle.FULL).format(LocalDate.now()));
// ↪ Monday, February 23, 2026
System.out.println(DateTimeFormatter.ofLocalizedDate(FormatStyle.LONG).format(LocalDate.now()));
// ↪ February 23, 2026
System.out.println(DateTimeFormatter.ofLocalizedDate(FormatStyle.MEDIUM).format(LocalDate.now()));
// ↪ Feb 23, 2026
System.out.println(DateTimeFormatter.ofLocalizedDate(FormatStyle.SHORT).format(LocalDate.now()));
// ↪ 2/23/2026
```

## Patterns

I pattern possono essere costruiti concatenando i vari simboli disponibili:

Simbolo | Significato | Esempio
--- | --- | ---
y | Anno (AD) | 2018; 18
M | Mese dell'anno | 07; 7; July; Jul   
d | Giorno del mese	| 10
E | Giorno della settimana | Tuesday; Tue; T 
a | AM/PM | PM
H | Ora del giorno (0-23) | 0
h | Ora am/pm (1-12) | 12
m | Minuto dell'ora | 30
s | Secondi del minuto | 55
S | Millisecondi | 978
z | Time zone name | Pacific Standard Time; PST
Z | Zone-offset	| +0000; -0800; -08:00 
x | zone-offset	| +0000; -08; -0830; -08:30; -083015; -08:30:15 

:::eg
```java
DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss.SSSZ");
ZonedDateTime zdt = ZonedDateTime.from(fmt.parse("25-12-2018 18:20:45.345+0800"));
System.out.println(zdt);
// ↪ 2018-12-25T18:20:45.345+08:00
System.out.println(fmt.format(zdt));
// ↪ 25-12-2018 18:20:45.345+0800
```
:::