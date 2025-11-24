---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Remark Plugins'
description: 'Note sui plugin remark.'
author: 'Italo Corraro'
---

## remark-flexible-markers

[github reference][rfm]

[rfm]: https://github.com/ipikuka/remark-flexible-markers "remark-flexible-markers"

Testo tra due `==`;   
il primo può avere una lettera tra gli `=`   
la lettera è legata a:

```javascript
type Key = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" 
         | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";

type Dictionary = Partial<Record<Key, string>>;

const dictionary: Dictionary = {
  a: "amber",
  b: "blue",
  c: "cyan",
  d: "brown",
  e: "espresso",
  f: "fuchsia",
  g: "green",
  h: "hotpink",
  i: "indigo",
  j: "jade",
  k: "kiwi",
  l: "lime",
  m: "magenta",
  n: "navyblue",
  o: "orange",
  p: "purple",
  q: "pink",
  r: "red",
  s: "silver",
  t: "teal",
  u: "umber",
  v: "violet",
  w: "white",
  x: "gray",
  y: "yellow",
  z: "black",
};
```

:::output
```html
<mark class=`flexible-marker flexible-marker-{key}`></mark>
```