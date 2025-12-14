---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Struttura CSS'
metaTitle: "Struttura CSS"
description: 'Appunti e note sulla strutturazione di un documento css.'
author: 'Italo Corraro'
---

## Organizzazione

Una parte fondamentale della costruzione di un foglio di stile CSS è quello di dargli una forma facilmente leggibile, navigabile e manutenibile.

* **Sezionamento**: il documento va diviso in sezioni logiche; 
    * ogni sezione può essere a sua volta divisa in sottosezioni con un uso dei commenti per indicarlo
    * le macro-sezioni possono indicare l'area logica di applicazione
    * le sottosezioni possono indicare l'elemento o gruppo di elmenti di cui si va a impostare lo stile
* **Variabili**: l'uso di variabili permette di riferisi in un unico punto a diversi aspetti dello stile;
    * le variabili di layout possono legarsi a elementi dimensionali per impostare in modo centralizzato la struttura del documento
    * le variabili di colore possono legarsi agli aspetti del tema in modo centralizzato permettendo di modificare l'aspetto cromatico del documento in modo compatto
    * le variabili 

## Variabili Globali

Il primo passo nella costruzione di un documento CSS è quello di riservarsi 

### Tipografia

Un gruppo di variabili si può riservare alla strutturazione degli aspetti prettamente tipografici del documento:

```css
/* Arg: 1 *
 * ### Variabili Globali Layout
 * START */
:root, :host {

    /* ## Tipografia Generale START*/

    /* # font-family */
    --font-family-serif: /* font con grazie */;
    --font-family-sans: /* font senza grazie 
    * (più leggibile) */;
    --font-family-monospace: /* font monospaziato */;
    --font-family: /* font generale per il testo (può usare una variabile) */;
    --font-family-header: /* font specifico per i titoli (opzionale e si può suddividere anche le variabili precedenti a questo modo) */;

    /* # font-layout */
    --line-height: /* altezza righe (di solito 1.5) */;
    --font-weight: /* valore del font-weight per il testo normale (da basarsi anche sul font-family usato */;
    --table-head-foot-font-weight: /* diverso font weight per gli elementi thead e tfoot delle tabelle
    --text-underline-offset: /* standardizzazione della sottolineatura */;
    --title-font-weight: /* */;
    --title-font-size-increase: /* incremento crescente per ogni grado del titolo rispetto al font normale */

    /* ## Tipografia Generale END*/

}
```

### Uniformazione Blocchi

```css
/* Arg: 1 *
 * ### Variabili Globali 
 * START */
:root, :host {

    /* ## Layout Blocchi START*/

    /* # contorni */
    --border-width: /* spessore bordo */;
    --border-radius: /* arrotondamento bordo */;
    --outline-width: /* spessore outline */;
    --form-el-outline-width: /* */;
    --outline-offset: /* separazione tra bordo e outline */;
    

    /* # spaziature */
    --spacing: /* distanziamento generico */;
    --block-spacing-vertical: ;
    --block-spacing-horizontal: ;
    --typography-spacing-vertical: ;
    --form-el-spacing-vertical: ;
    --form-el-spacing-horizontal: ;
    --title-spacing-top: ;
    --title-spacing-bottom: ;

    /* # ombreggiature */
    --box-shadow-focus: ;
    --control-shadow-active

    /* ## Layout Blocchi END*/

}
```

### Animazioni e Transizioni

```css
:root, :host {
    --scroll-behavior: smooth;
    --transition: 0.2s ease;
    
}
```

### aspe

:::eg
```css
/* Arg: 1 *
 * ### Variabili Globali Layout
 * START */
:root, :host {

    /* ## Tipografia Generale START*/

    /* # font-family */
    --font-family-serif: Georgia, 'Times New Roman', Times, serif;
    --font-family-sans: system-ui, 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    --font-family-monospace: ui-monospace, Menlo, Consolas, 'Courier New', Courier, monospace;
    --font-family: var(--font-family-sans);
    --font-family-header: var(--font-family-serif);

    /* # font-layout */
    --line-height: 1.5;
    --font-weight: 400;
    --text-underline-offset: 0.1rem;

    /* ## Tipografia Generale END*/

}
```
:::

## Uniformazione Globale

### Impostazione base

```css
html, body {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0;
    scroll-behavior: var(--scroll-behavior);
    scrollbar-color: var(--scrollbar-color);
}
*, *::before, *::after {
    box-sizing: inherit;
}
::before, ::after {
  text-decoration: inherit;
  vertical-align: inherit;
}
button, input, select, textarea {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
button, input, select, textarea {
  font-family: inherit;
  font-size: 100%;
}
pre, code, kbd, samp {
    font-family: var(--font-family-monospace);
}

:where(:root),
:where(:host) {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  background-color: var(--background-color);
  color: var(--font-color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  line-height: var(--line-height);
  font-family: var(--font-family);
  text-underline-offset: var(--text-underline-offset);
  text-rendering: optimizeLegibility;
  overflow-wrap: break-word;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}
```

### Impostazioni Tipografiche

```css
b, strong {
  font-weight: bolder;
}

sub, sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}

address,
blockquote,
dl,
ol,
p,
pre,
table,
ul {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-style: normal;
  font-weight: var(--font-weight);
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin-top: var(--title-spacing-top);
  margin-bottom: var(--title-spacing-bottom);
  font-weight: var(--title-font-weight);
  line-height: var(--line-height);
  font-family: var(--title-font-family);
}

h1 {
    color: var(--h1-color);
    font-size: calc(1rem + 6*var(--title-font-size-increase))

}

h2 {
  color: var(--h2-color);
  font-size: calc(1rem + 5*var(--title-font-size-increase))
}

h3 {
  color: var(--h3-color);
  font-size: calc(1rem + 4*var(--title-font-size-increase))
}

h4 {
  color: var(--h4-color);
  font-size: calc(1rem + 3*var(--title-font-size-increase))
}

h5 {
  color: var(--h5-color);
  font-size: calc(1rem + 2*var(--title-font-size-increase))
}

h6 {
  color: var(--h6-color);
  font-size: calc(1rem + var(--title-font-size-increase))
}

:where(article, address, blockquote, dl, figure, form, ol, p, pre, table, ul) ~ :is(h1, h2, h3, h4, h5, h6) {
  margin-top: var(--typography-spacing-top);
}

p {
  margin-bottom: var(--typography-spacing-vertical);
}

hgroup {
  margin-bottom: var(--typography-spacing-vertical);
}
hgroup > * {
  margin-top: 0;
  margin-bottom: 0;
}
hgroup > *:not(:first-child):last-child {
  --color: var(--muted-color);
  --font-weight: unset;
  font-size: 1rem;
}

:where(ol, ul) li {
  margin-bottom: calc(var(--typography-spacing-vertical) * 0.25);
}

:where(dl, ol, ul) :where(dl, ol, ul) {
  margin: 0;
  margin-top: calc(var(--typography-spacing-vertical) * 0.25);
}

ul li {
  list-style: square;
}

mark {
  padding: 0.125rem 0.25rem;
  background-color: var(--mark-background-color);
  color: var(--mark-color);
  vertical-align: baseline;
}

blockquote {
  display: block;
  margin: var(--typography-spacing-vertical) 0;
  padding: var(--spacing);
  border-right: none;
  border-left: 0.25rem solid var(--blockquote-border-color);
  border-inline-start: 0.25rem solid var(--blockquote-border-color);
  border-inline-end: none;
}
blockquote footer {
  margin-top: calc(var(--typography-spacing-vertical) * 0.5);
  color: var(--blockquote-footer-color);
}

abbr[title] {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}

ins {
  color: var(--ins-color);
  text-decoration: none;
}

del {
  color: var(--del-color);
}

::-moz-selection {
  background-color: var(--text-selection-color);
}

::selection {
  background-color: var(--text-selection-color);
}
```

### link

```css
:where(a:not([role=button])),
[role=link] {
  --color: var(--primary);
  --background-color: transparent;
  --underline: var(--primary-underline);
  outline: none;
  background-color: var(--background-color);
  color: var(--color);
  -webkit-text-decoration: var(--text-decoration);
  text-decoration: var(--text-decoration);
  text-decoration-color: var(--underline);
  text-underline-offset: 0.125em;
  transition: background-color var(--transition), color var(--transition), box-shadow var(--transition), -webkit-text-decoration var(--transition);
  transition: background-color var(--transition), color var(--transition), text-decoration var(--transition), box-shadow var(--transition);
  transition: background-color var(--transition), color var(--transition), text-decoration var(--transition), box-shadow var(--transition), -webkit-text-decoration var(--transition);
}
:where(a:not([role=button])):is([aria-current]:not([aria-current=false]), :hover, :active, :focus),
[role=link]:is([aria-current]:not([aria-current=false]), :hover, :active, :focus) {
  --color: var(--primary-hover);
  --underline: var(--primary-hover-underline);
  --text-decoration: underline;
}
:where(a:not([role=button])):focus-visible,
[role=link]:focus-visible {
  box-shadow: 0 0 0 var(--outline-width) var(--primary-focus);
}
:where(a:not([role=button])).secondary,
[role=link].secondary {
  --color: var(--secondary);
  --underline: var(--secondary-underline);
}
:where(a:not([role=button])).secondary:is([aria-current]:not([aria-current=false]), :hover, :active, :focus),
[role=link].secondary:is([aria-current]:not([aria-current=false]), :hover, :active, :focus) {
  --color: var(--secondary-hover);
  --underline: var(--secondary-hover-underline);
}
:where(a:not([role=button])).contrast,
[role=link].contrast {
  --color: var(--contrast);
  --underline: var(--contrast-underline);
}
:where(a:not([role=button])).contrast:is([aria-current]:not([aria-current=false]), :hover, :active, :focus),
[role=link].contrast:is([aria-current]:not([aria-current=false]), :hover, :active, :focus) {
  --color: var(--contrast-hover);
  --underline: var(--contrast-hover-underline);
}

a[role=button] {
  display: inline-block;
}
```

### button

```css
button {
  margin: 0;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}

button,
[type=submit],
[type=reset],
[type=button] {
  -webkit-appearance: button;
}

button,
[type=submit],
[type=reset],
[type=button],
[type=file]::file-selector-button,
[role=button] {
  --background-color: var(--primary-background);
  --border-color: var(--primary-border);
  --color: var(--primary-inverse);
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical) var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
}
button:is([aria-current]:not([aria-current=false])), button:is(:hover, :active, :focus),
[type=submit]:is([aria-current]:not([aria-current=false])),
[type=submit]:is(:hover, :active, :focus),
[type=reset]:is([aria-current]:not([aria-current=false])),
[type=reset]:is(:hover, :active, :focus),
[type=button]:is([aria-current]:not([aria-current=false])),
[type=button]:is(:hover, :active, :focus),
[type=file]::file-selector-button:is([aria-current]:not([aria-current=false])),
[type=file]::file-selector-button:is(:hover, :active, :focus),
[role=button]:is([aria-current]:not([aria-current=false])),
[role=button]:is(:hover, :active, :focus) {
  --background-color: var(--primary-hover-background);
  --border-color: var(--primary-hover-border);
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  --color: var(--primary-inverse);
}
button:focus, button:is([aria-current]:not([aria-current=false])):focus,
[type=submit]:focus,
[type=submit]:is([aria-current]:not([aria-current=false])):focus,
[type=reset]:focus,
[type=reset]:is([aria-current]:not([aria-current=false])):focus,
[type=button]:focus,
[type=button]:is([aria-current]:not([aria-current=false])):focus,
[type=file]::file-selector-button:focus,
[type=file]::file-selector-button:is([aria-current]:not([aria-current=false])):focus,
[role=button]:focus,
[role=button]:is([aria-current]:not([aria-current=false])):focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)), 0 0 0 var(--outline-width) var(--primary-focus);
}

[type=submit],
[type=reset],
[type=button] {
  margin-bottom: var(--spacing);
}

:is(button, [type=submit], [type=button], [role=button]).secondary,
[type=reset],
[type=file]::file-selector-button {
  --background-color: var(--secondary-background);
  --border-color: var(--secondary-border);
  --color: var(--secondary-inverse);
  cursor: pointer;
}
:is(button, [type=submit], [type=button], [role=button]).secondary:is([aria-current]:not([aria-current=false]), :hover, :active, :focus),
[type=reset]:is([aria-current]:not([aria-current=false]), :hover, :active, :focus),
[type=file]::file-selector-button:is([aria-current]:not([aria-current=false]), :hover, :active, :focus) {
  --background-color: var(--secondary-hover-background);
  --border-color: var(--secondary-hover-border);
  --color: var(--secondary-inverse);
}
:is(button, [type=submit], [type=button], [role=button]).secondary:focus, :is(button, [type=submit], [type=button], [role=button]).secondary:is([aria-current]:not([aria-current=false])):focus,
[type=reset]:focus,
[type=reset]:is([aria-current]:not([aria-current=false])):focus,
[type=file]::file-selector-button:focus,
[type=file]::file-selector-button:is([aria-current]:not([aria-current=false])):focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)), 0 0 0 var(--outline-width) var(--secondary-focus);
}

:is(button, [type=submit], [type=button], [role=button]).contrast {
  --background-color: var(--contrast-background);
  --border-color: var(--contrast-border);
  --color: var(--contrast-inverse);
}
:is(button, [type=submit], [type=button], [role=button]).contrast:is([aria-current]:not([aria-current=false]), :hover, :active, :focus) {
  --background-color: var(--contrast-hover-background);
  --border-color: var(--contrast-hover-border);
  --color: var(--contrast-inverse);
}
:is(button, [type=submit], [type=button], [role=button]).contrast:focus, :is(button, [type=submit], [type=button], [role=button]).contrast:is([aria-current]:not([aria-current=false])):focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)), 0 0 0 var(--outline-width) var(--contrast-focus);
}

:is(button, [type=submit], [type=button], [role=button]).outline,
[type=reset].outline {
  --background-color: transparent;
  --color: var(--primary);
  --border-color: var(--primary);
}
:is(button, [type=submit], [type=button], [role=button]).outline:is([aria-current]:not([aria-current=false]), :hover, :active, :focus),
[type=reset].outline:is([aria-current]:not([aria-current=false]), :hover, :active, :focus) {
  --background-color: transparent;
  --color: var(--primary-hover);
  --border-color: var(--primary-hover);
}

:is(button, [type=submit], [type=button], [role=button]).outline.secondary,
[type=reset].outline {
  --color: var(--secondary);
  --border-color: var(--secondary);
}
:is(button, [type=submit], [type=button], [role=button]).outline.secondary:is([aria-current]:not([aria-current=false]), :hover, :active, :focus),
[type=reset].outline:is([aria-current]:not([aria-current=false]), :hover, :active, :focus) {
  --color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}

:is(button, [type=submit], [type=button], [role=button]).outline.contrast {
  --color: var(--contrast);
  --border-color: var(--contrast);
}
:is(button, [type=submit], [type=button], [role=button]).outline.contrast:is([aria-current]:not([aria-current=false]), :hover, :active, :focus) {
  --color: var(--contrast-hover);
  --border-color: var(--contrast-hover);
}

:where(button, [type=submit], [type=reset], [type=button], [role=button])[disabled],
:where(fieldset[disabled]) :is(button, [type=submit], [type=button], [type=reset], [role=button]) {
  opacity: 0.5;
  pointer-events: none;
}
```