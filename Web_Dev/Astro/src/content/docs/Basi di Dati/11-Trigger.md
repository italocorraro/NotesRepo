---
title: 'Trigger SQL'
metaTitle: 'Trigger SQL'
description: ''
author: 'Italo Corraro'
order: 11
---

Un trigger permette di stabilire un comportamento autamatico come conseguenza di una certa azione.

Un trigger si attiva a un certo **evento**, se si verifica una certa **condizione** (opzionale) ed esegue una certa **azione**.

```sql
CREATE TRIGGER NewRecord
-- Evento
AFTER INSERT ON Partite
-- Condizione (mancante)
-- Azione
REFERENCING NEW AS N
FOR EACH ROW
WHEN (N.Score > (SELECT BEST_SCORE FROM))
--- ...
```

:::nb
Un trigger si può definire solo su singole tabelle.
:::

## Usi Tipici

- Mantenere intatti i vincoli di integrità
- Aggiornare dati derivati
- gestione di eccezioni

I vincoli più complessi da definire direttamente sulla tabella 

## Tempistiche

Un trigger deve indicare il momento in cui viene eseguita l'azione:
- `BEFORE TRIGGER` scatta prima che l'evento si verifichi, permettendo di condizionare l'esito dell'operazione che l'ha attivato; non è possibile fare modifiche al database con questo tipo di trigger, solo alle tuple nuove tramite l'istruzione `SET`,
- `AFTER TRIGGER` scatta dopo l'evento e permette di correggere o aggiornare in risposta all'operazione; in alcuni casi possono individuare errori che non sono visibili al before trigger

- `ROW TRIGGER` usa `FOR EACH ROW`
- `STATEMENT TRIGGER` usa `FOR EACH STATEMENT`

Per inviare un errore si usa l'istruzione `SIGNAL`.

:::nb
Non è possibile creare un `BEFORE STATEMENT TRIGGER`.
:::

:::eg
Imponiamo che lo stipendio di un nuovo impiegato sia pari al minimo per il suo dipartimento
```sql
CREATE TRIGGER EmpMinSalary
BEFORE INSERT ON Employee
REFERENCING NEW AS NewEmp
FOR EACH ROW
SET NewEmp.Salary = (
    SELECT MIN(Salary) FROM Employee
    WHERE WorkDept = NewEmp.Workdept
);
```
:::

:::nota
Gli after trigger possono anche svolgere azioni verso l'esterno del database.
:::

## Transizione

I trigger hanno accesso ad alcuni costrutti di transizione che esistono in relazione all'evento:
- `OLD_TABLE``NEW_TABLE` sono legati agli stati della tabella; non possono essere usati da un `BEFORE TRIGGER`
- `OLD` e `NEW` sono legati agli stati della tupla

:::nota
Non tutti hanno senso per qualsiasi evento; ad esempio `OLD` non ha senso quando si inserisce una nuova tupla (prima non esisteva).
:::

:::nb
Non ci sono ulteriori stati intermedi, contano solo prima e dopo; i `BEFORE TRIGGER` si attivano e risolvono prima del completamento dell'operazione; se un'operazione viene bloccata, indipendentemente dallo stato di completamento, tutto il suo svolgimento viene annullato.
:::


## Trigger Multipli

Quando più trigger condividono lo stesso evento o vengono attivati "in contemporanea", la priorità è data a quelli definiti prima.

Un trigger può attivarne altri in cascata, questo permette ricorsione possibilmente anche infinita.

:::nota
DB2 ha un limite alle chiamate ricorsive di un trigger pari a 16.
:::

## Statement Composti

Nel blocco 
```sql
BEGIN ATOMIC 
--- istruzioni varie terminate con ;
END
```

### Variabili

```sql
DECLARE <var-name> <var-type>;
SET <var-name> = <query-scalare>
```

## Controllo di Flusso

```sql
IF (<condizione>)
THEN <istruzione>;
[ELSE <istruzione-alternativa>;]
END IF
```

## Trigger INSTEAD OF

Serve a sostituire per intero l'evento con l'azione del trigger

## Riassunto

```sql
CREATE [OR REPLACE] TRIGGER <trigger-label>
<BEFORE|AFTER|INSTEAD OF> <evento> ON <oggetto-evento>
[WHEN <condizioni>]
REFERENCES <NEW|OLD> AS <label>
FOR EACH <STATEMENT|ROW>
<azione>
```

