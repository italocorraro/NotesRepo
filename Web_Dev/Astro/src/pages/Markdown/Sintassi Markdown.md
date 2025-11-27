---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Sintassi Markdown'
metaTitle: 'Appunti sulla Sintassi del Markdown'
description: 'Appunti sulla sintassi di Markdown.'
author: 'Italo Corraro'
---

## Sintassi base

### Titoli

In markdown i titoli sono preceduti da tanti cancelletti quanto il loro grado (il grado maggiore è 1):

:::sint
```markdown
```
```html
```
```markdown
# Titolo
```
```html
<h1>Titolo</h1>
```
```markdown
## Titolo
```
```html
<h2>Titolo</h2>
```
```markdown
### Titolo
```
```html
<h3>Titolo</h3>
```
```markdown
#### Titolo
```
```html
<h4>Titolo</h4>
```
```markdown
##### Titolo
```
```html
<h5>Titolo</h5>
```
```markdown
###### Titolo
```
```html
<h6>Titolo</h6>
```
:::

### Paragrafi

Per creare un paragrafo bisogna lasciare un rigo vuoto a separare il testo:

:::sint
```markdown
```
```html
```
```markdown
paragrafo 1

paragrafo 2
```
```html
<p>paragrafo 1</p>
<p>paragrafo 2</p>
```
:::

:::out
paragrafo 1

paragrafo 2
:::

### A Capo

Per andare a capo (senza iniziare un nuovo paragrafo) si lasciano 2 o più spazi bianchi e poi si va a capo per generare l'elemento `<br>`, oppure si usa il carattere `\` e poi si va a capo:

:::sint
```markdown
```
```html
```
```markdown
   

```
```html
<br>
```
```markdown
\

```
```html
<br>
```
:::

### Barra Separatrice

Per creare l'elemento `<hr>`, cioè una barra separatrice orizzontale, si usano tre asterischi o barrette o underscore:

:::sint
```markdown
```
```html
```
```markdown
***

---

___
```
```html
<hr>
```
:::

:::out
***

---

___
:::
:::warn
Lasciare sempre un rigo prima di una barra separatrice o la sua sintassi poterebbe venire interpretata diversamente dal parser
:::

### Enfasi e Grassetto

Per dare lo stile corsivo o grassetto ad una porzione di testo si usano asterischi o trattini (1 per il corsivo, 2 per il grassetto):

:::sint
```markdown
```
```html
```
```markdown
*enfasi*
_enfasi_
```
```html
<em>enfasi</em>
```
```markdown
**grassetto**
__grassetto__
```
```html
<strong>enfasi</strong>
```
```markdown
***grande enfasi***
```
```html
<strong><em>grande enfasi</em></strong>
<em><strong>grande enfasi</strong></em>
```
:::

:::nota
La sintassi con asterischi è da preferirsi 
:::

### Blocchi Citazione

Un blocco citazione è rappresentato preponendo a ciascun rigo il carattere `>`:

:::sint
```markdown
```
```html
```
```markdown
> Questo è un blocco per una citazione
> e non si interrompe andando a capo
```
```html
<blockquote>
  <p>
      Questo è un blocco per una citazione 
      e non si interrompe andando a capo
  </p>
</blockquote>
```
```markdown
> Devo lasciare un rigo
> per andare a capo:
>
> visto?
```
```html
<blockquote>
  <p>
      Devo lasciare un rigo
      per andare a capo:
  </p>
  <p>
      visto?
  </p>
</blockquote>
```
```markdown
> Questi blocchi si possono innestare
>> aggiungendo un altro ">"
```
```html
<blockquote>
  <p>
      Questi blocchi si possono innestare
      <blockquote>
        <p>
          aggiungendo un altro "&gt;"
        </p>
      </blockquote>
  </p>
</blockquote>
```
:::

:::out
> Questo è un blocco per una citazione
> e non si interrompe andando a capo

> Devo lasciare un rigo
> per andare a capo:
>
> visto?

> Questi blocchi si possono innestare
>> aggiungendo un altro ">"
:::

## Liste

### Liste Generiche

Per creare una lista generica si usano i caratteri `-`, `+` o `*`;    
per creare liste innestate, si lasciano 4 spazi vuoti prima dell'elemento innestato

:::sint
```markdown
```
```html
```
```markdown
- list-el
- list-el
```
```html
<ul>
  <li>list-el</li>
  <li>list-el</li>
</ul>
```
```markdown
+ list-el
+ list-el
```
```html
<ul>
  <li>list-el</li>
  <li>list-el</li>
</ul>
```
```markdown
* list-el
* list-el
```
```html
<ul>
  <li>list-el</li>
  <li>list-el</li>
</ul>
```
```markdown
* list-el 
* list-el
    * indent-list-el
```
```html
<ul>
  <li>list-el</li>
  <li>list-el
    <ul>
      <li>indent-list-el</li>
    </ul>
  </li>
</ul>
```
:::

:::output
+ list-el
+ list-el
    + list-el
:::

### Liste Ordinate

:::sint
```markdown
```
```html
```
```markdown
1. primo
2. secondo
```
```html
<ul>
  <li>primo</li>
  <li>secondo</li>
</ul>
```
```markdown
1. primo
1. secondo
```
```html
<ul>
  <li>primo</li>
  <li>secondo</li>
</ul>
```
```markdown
2. secondo
1. terzo
```
```html
<ul start="2">
  <li>primo</li>
  <li>secondo</li>
</ul>
```
```markdown
1. primo
9. settimo
5. ottavo
124. centesimo
```
```html
<ul>
  <li>primo</li>
  <li>secondo</li>
</ul>
```
:::

:::out
1. primo
1. secondo
---
2. secondo
4. terzo
---
1. primo
9. settimo
5. ottavo
124. centesimo
:::

## Link e Immagini

### Link

Per creare un link lo si chiude in parentesi quadre;

* possiamo poi definire l'URL in parentesi tonde a fianco destro,
* possiamo aggiungere l'attributo `title` tra virgolette, dopo l'URL
* possiamo separare il link dalla definizione inserendo la definizione in seguito nel documento e legandola al link con un tag tra `[]`, oppure usare il testo del link stesso

Quindi:

:::sint
```markdown
```
```html
```
```markdown
[sono un link](./#link)
```
```html
<a href="./#link">
  sono un link
</a>
```
```markdown
[sono un link](./#link "torna qui")
```
```html
<a href="./#link" 
title="torna qui">
  sono un link
</a>
```
```markdown
[sono un link][lonk]

[lonk]: ./#link "torna qui"
```
```html
<a href="./#link" 
title="torna qui">
  sono un link
</a>
```
```markdown
[sono un link]

[sono un link]: ./#link "torna qui"
```
```html
<a href="./#link" 
title="torna qui">
  sono un link
</a>
```
:::

:::out
[sono un link](./#link)

---

[sono un link](./#link "torna qui")

---

[sono un link][lonk]

[lonk]: ./#link "torna qui"

---

[sono un link]

[sono un link]: ./#link "torna qui"
:::

:::nota
Qualsiasi URL incluso tra `<>` verrà automaticamente trasformato in un link:
:::eg
<./#link>   questo non funziona   
<https://italocorraro.github.io/NotesRepo/Web_Dev/Astro/dist/Markdown/Sintassi%20Markdown/#link> questo sì
:::

### Immagini

Le immagini si creano con pressocchè la stessa logica dei link,   
le uniche due differenze sono che 
* le immagini iniziano con un `!`
* il testo tra `[]` è quello dell'attributo `alt`

Quindi:

:::sint
```markdown
```
```html
```
```markdown
![Logo pappagallo](/NotesRepo/Web_Dev/Astro/dist/Crocco.png)
```
```html
<img src="/NotesRepo/Web_Dev/Astro/dist/Crocco.png"
alt="Logo pappagallo">
```
```markdown
![Logo pappagallo][logo]

[logo]: /NotesRepo/Web_Dev/Astro/dist/Crocco.png
```
```html
<img src="/NotesRepo/Web_Dev/Astro/dist/Crocco.png"
alt="Logo pappagallo">
```
```markdown
![Logo pappagallo]

[Logo pappagallo]: /NotesRepo/Web_Dev/Astro/dist/Crocco.png
```
```html
<img src="/NotesRepo/Web_Dev/Astro/dist/Crocco.png"
alt="Logo pappagallo">
```
:::

:::out
![Logo pappagallo](/NotesRepo/Web_Dev/Astro/dist/Crocco.png)

---

![Logo pappagallo][logo]

[logo]: /NotesRepo/Web_Dev/Astro/dist/Crocco.png

---

![Logo pappagallo]

[Logo pappagallo]: /NotesRepo/Web_Dev/Astro/dist/Crocco.png
:::

## Codice

### Codice Inline

Per scrivere codice inline lo si chiude tra `` ` ``:

:::sint
```markdown
```
```html
```
```markdown
`questo è codice`
```
```html
<code>questo è codice</code>
```
```markdown
`` ` `` 
```
```html
<code>`</code>
```
:::

:::out
`questo è codice`

---

`` ` ``
:::

### Blocco di Codice

Per un blocco di codice, lo includiamo tra `` ``` ``;   
se disponibile, tramite integrazione, è possibile ottenere la stilizzazione del codice tipica dei code editor:

:::sint
```markdown
```
```html
```
```markdown
``
questo è codice
``
```
```html
<pre>
  <code>
    questo è codice
  </code>
</pre>
```
```markdown
``javascript
const x = 24;
``
```
```html
<pre data-language="javascript">
  <code>
    <span>const x = 24;</span>
  </code>
</pre>
```
:::

:::out
 ```
questo è codice
```

___

```javascript
const x = 24;
``` 
:::

---

| Link di riferimento: |
| :--- |
| [repository di un tizio](https://github.com/adam-p/markdown-here/wiki/markdown-cheatsheet) |
| [github flavored markdown](https://github.github.com/gfm/) |

<style>
    #blocco-di-codice ~ .mark-tab > :nth-child(2n + 3)::before, 
    #blocco-di-codice ~ .mark-tab > :nth-child(2n + 3)::after {
        all: unset;
        content: '`';
    }
</style>

