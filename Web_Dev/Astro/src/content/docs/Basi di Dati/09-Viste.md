---
title: 'Viste'
metaTitle: 'Viste'
description: ''
author: 'Italo Corraro'
order: 9 
---

Il risultato di una query può essere "memorizzato" come una *vista* con l'istruzione `CREATE VIEW` o `CREATE OR REPLACE`, che non rappresenta una vera tabella, ma può essere trattata come tale.

:::eg
```sql
CREATE VIEW  VenditeFebBO(NID,CodP,NPezzi)
AS  SELECT NID,CodP,NumVenduti
    FROM    Vendite JOIN Negozi USING (NID)
    WHERE   Comune = 'Bologna'
    AND     Mese = 2
```
:::


- Una vista permette di astrarre la lettura dei dati dalla loro struttura del/dei database sottostante/i,
- permettono di restringere l'accesso ai dati in base ai privilegi dell'utente.

In una vista è ammesso referenziare un'altra vista.

:::nota
Una vista non può essere modificata direttamente nei casi in cui non è possibile costruire un legame univoco tra le sue tuple e quelle del database originariio.

Questo perché la modifica, per essere permanente, deve essere applicata al database (che ha un corrispondente fisico).
:::

:::nota
Le viste vengono memorizzate (come schemi), quindi non è buona pratica definirle come supporto per una query.
:::

### Check Option

Con l'istruzione `WITH CHECK OPTION` si può imporre che tutte le tuple della tabella siano presenti anche nella vista; se la vista è definita a partire da un'altra vista, allora la condizione viene verificata sulla vista interna e tutte le altre dipendenze, anche se non dichiarano check option.



## Table Expressions

Nell clausola `FROM` è possibile dare un nome a una subquery (`<subquery AS <unique-name>`) per utilizzarla come una vista/tabella importata; questa viene chiamata una *nested table expression*.

:::eg
```sql
SELECT NM.NID, NM.MinVenduti, COUNT(*) AS NumProd
FROM   Vendite V, (
    SELECT  NID, MIN(NumVenduti) 
    FROM    Vendite
    GROUP BY NID
    ) AS NM(NID,MinVenduti)
WHERE  V.NID = NM.NID
AND    
V.NumVenduti = NM.MinVenduti
GROUP BY NM.NID, NM.MinVenduti
```
:::

:::nota
È possibile innestare più table expression, ma questo a scapito della leggibilità dello script.
:::


### Table expressions Correlate

Per referenziare una table expression in comandi che ne precedono la definizione, bisogna dichiararla esplicitamente in un `TABLE` o `LATERAL`:

:::eg
```sql
-- non va bene
SELECT N.*, TV.TotVenduti
FROM   Negozi N, ( 
    SELECT SUM(NumVenduti) 
    FROM Vendite V
    WHERE V.NID = N.NID
    AND V.Mese = 1
    ) AS TV(TotVenduti);

-- serve TABLE:
SELECT N.*, TV.TotVenduti
FROM   Negozi N, TABLE( 
    SELECT SUM(NumVenduti) 
    FROM Vendite V
    WHERE V.NID = N.NID
    AND V.Mese = 1
    ) AS TV(TotVenduti);
```
:::

:::nb
Non è lecito referenziare una table expression in un'altra clausola `FROM`.
:::


## Common Table Expression

Una common table expression è essenzialmente una vista *locale alla query* che la definisce.

```sql
WITH <CTE-NAME>(<CTE-ATTRIBUTES>)
AS (<SELECTION-QUERY>)
<QUERY>
```

La visibilità di una common table expression è la stessa di una vista (per la query in cui è definita).

