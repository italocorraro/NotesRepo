

In typescript è possibile dichiarare dei tipi speciali a partire da un tipo standard intersecato con un *branding*; tale tipo non sarà più compatibile con la versione standard.

Questi tipi non aggiungono alcuna proprietà ai dati e spariscono dopo la compilazione; lo scopo pricipale è quello di agire da *tag* per i dati in modo da rafforzare la sicurezza dei tipi.

## Shallow Branding

Per creare un tipi branded da `string` basta aggiungere una proprietà unica:

```ts
type uppercaseString = string & { __brand: "isUppercase" }
```

Un tipo così però non genera nessun vincolo sul dato tipizzato;

solitamente si usano in congiunzione con un validatore:

```ts
function asUppercaseString(string: string): uppercaseString {
    return string.toUpperCase() as uppercaseString;
}
```

## A Che Scopo?

Marchiare i tipi (specialmente quelli primitivi) è un modo per rafforzare la sicurezza dei dati e rendere esplicito l'intento di utilizzo dei tali.

:::eg
Non è possibile distinguere numeri interi, positivi, negativi eccetera in TypeScript;
per questo scopo possiamo aiutarci con dei tipi branded:
```ts
type int = number & { __brand: "positive" }
function intSum(a: int, b: int): int {
    return a + b as int;
}
```

Tutti i numeri che non hanno il branding assegnato non potranno essere passati alla funzione.
:::

## Symbol Branding

Utilizzare una proprietà qualsiasi non garantisce unicità assoluta, poichè chiunque potrebbe creare un tipo con lo stesso brand che risulterebbe poi compatibile con l'altro, rompendo la sicurezza di tipo:

```ts
type uppercaseString = string & { __brand: "isUppercase" }
type anotherUppercaseString = string & { __brand: "isUppercase" }
```

Questi due tipi branded sono compatibili tra loro.

Per creare un tipo veramente unico possiamo ricorrere a `symbol` che è unico di natura:

```ts
declare const UppercaseSymbol: unique symbol;

type uppercaseString = string & { [UppercaseSymbol]: void };
```

:::eg
```ts
declare const metersSymbol: unique symbol;
declare const kilometersSymbol: unique symbol;

type Meters = number & { [metersSymbol]: void };
type Kilometers = number & { [kilometersSymbol]: void };
```
:::