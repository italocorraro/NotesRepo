## Numeri

In JavaScript i numeri sono trattati tutti come floating point a 64 bit, l'equivalente dei `double`; non ci sono degli interi, ma non vengono mostrati decimali non necessari

* gli interi sono limitati a 15 caratteri, oltre questo numero avviene overflow
* l'aritmetica con i numeri a virgola mobile non è precisa al 100%
* I numeri preceduti da `0x` sono interpretati come esadecimali
* I numeri preceduti da `0` (non con virgola) sono (a volte) interpretati come ottali

---

:::nota
JavaScript accetta la notazione scientifica per i Number:
```javascript
let x = 834e5 // = 83400000
```
:::

L'oggetto `Number` può essere usato per convertire in 'number' i valori passati per argomento; se il valore non è convertibile in numero, allora l'operazione restituisce `NaN` (_not a number_), che è una proprietà dell'oggetto globale

:::warn
`typeof NaN` restituisce `number`!
:::

`Infinity` e `-Infinity` sono numeri e raccolgono qualsiasi valore fuori dai limiti

:::warn
`typeof Infinity` restituisce `number`!

Inoltre, dividere per 0 un numero restituisce `Infinity` (con segno)
:::