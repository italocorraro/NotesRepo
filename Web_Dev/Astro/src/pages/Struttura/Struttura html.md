---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Struttura html'
metaTitle: "Struttura html"
description: 'Appunti e note sulla strutturazione di un documento html.'
author: 'Italo Corraro'
---

## html

Il tag `html` avvolge tutto il documento;

Le proprietà principali da assegnargli sono
* **`lang`**: lingua del documento
* **`dir`**: direzione di lettura del testo

Gli si possono anche assegnare proprietà `data-*`, solitamente per qualcosa che coinvolge l'intero documento, ma anche `class`

:::eg
```html
<html lang="it" dir="ltr" data-theme="dark" class="dark-theme">
    <head>
        <!-- roba -->
    </head>
    <body>
        <!-- roba -->
    </body>
</html>
```
:::

## head

### Fondamentali Generici

Questi elementi andrebbero SEMPRE impostati per un documento html:

* La **codifica** dei caratteri:
```html
<meta charset="UTF-8">
```
* Impostare la **viewport** per adattarsi a schermi diversi:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
* X-UA campatibile (opzionale per IE):
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

### Specifici del Sito

* L'**icona** per la pagina/sito (`sizes` può usare diversi multipli di 4, ma sempre quadrati; non usare se l'icona è SVG):
```html
<link rel="icon" sizes="32x32" href="favicon.png" type="image/png">
```
* Link al documento **sitemap**:
```html
<link rel="sitemap" href="/sitemap.xml">
```
* **icona shortcut**:
```html
<link rel="shortcut icon" href="favicon.svg" type="image/svg+xml">
```
* Link al documento **manifest** per una web app:
```html
<link rel="manifest" href="manifest.json">
```


### Specifici della Pagina

* Il **titolo della pagina**; a volte comprende anche il nome generale del sito:
```html
<title>Pagina del sito | Sito</title>
```
* La **descrizione della pagina** (dei suoi contenuti):
```html
<meta name="description" content="descrizione della pagina">
```
* Il **link canonico** completo della pagina
```html
<link rel="canonical" href="https://example.com/pagina">
```
* **Autore** della pagina/articolo:
```html
<meta name="author" content="Nome Autore">
```


### Protocollo Open Graph 

* **Titolo**:
```html
<meta property="og:title" content="Titolo pagina">
```
* **Descrizione**:
```html
<meta property="og:description" content="Descrizione per social">
```
* **Tipo**:
```html
<meta property="og:type" content="website">
```
* **URL canonico**:
```html
<meta property="og:url" content="https://example.com/pagina">
```
* **Immagine di riferimento**:
```html
<meta property="og:image" content="https://example.com/image.jpg">
```
* *tipo immagine*:
```html
<meta property="og:image:type" content="image/jpeg">
```
* *larghezza immagine*:
```html
<meta property="og:image:width" content="800">
```
* *altezza immagine*:
```html
<meta property="og:image:height" content="400">
```
* *testo alternativo immagine*:
```html
<meta property="og:image:alt" content="testo alternativo per l'immagine">
```

:::nb
L'immagine di riferimento per lo standard *Open Graph* preferisce un aspect-ratio di ~$2:1$
:::

* **Lingua** della pagina/sito:
```html
<meta property="og:locale" content="it_IT">
```
* **Nome del sito**:
```html
<meta property="og:site_name" content="Nome sito">
```

### Twitter Card

* **Tipo di Card**:
```html
<meta name="twitter:card" content="summary_large_image">
```
* **Titolo pagina**:
```html
<meta name="twitter:title" content="Titolo Pagina">
```
* **Descrizione**:
```html
<meta name="twitter:description" content="Descrizione pagina...">
```
* **Immagine per la Card**:
```html
<meta name="twitter:card" content="https://www.example.com/twitter/image.webp">
```

### Esempio Completo 

```html
<head>
    <!-- || Generic foundamentals -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- || SEO tags START -->

    <!-- Site-specific tags -->
    <link rel="icon" sizes="32x32" href="favicon.png" type="image/png">
    <link rel="sitemap" href="/sitemap.xml">
    <link rel="manifest" href="manifest.json">

    <!-- Page-specific tags -->
    <title>TitoloPagina</title>
    <link rel="canonical" href="https://example.com/pagina">

    <!-- SEO Generic tags -->
    <meta name="author" content="NomeAutore">
    <meta name="description" content="descrizione della pagina">

    <!-- Open Graph tags -->
    <meta property="og:title" content="TitoloPagina">
    <meta property="og:description" content="descrizione della pagina">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="NomeSito">
    <meta property="og:locale" content="it_IT">
    <meta property="og:image" content="URLImmagine">
    <meta property="og:image:type" content="TipoImmagine">
    <meta property="og:image:width" content="LarghezzaImmagine">
    <meta property="og:image:height" content="AltezzaImmagine"> 

    <!-- Twitter Card tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="TitoloPagina">
    <meta name="twitter:description" content="descrizione della pagina">
    <meta name="twitter:image" content="URLImmagine">    
    <meta name="author" content="NomeAutore">

    <!-- || SEO tags END -->

    <!-- || Resources Loading START -->
    
    <!-- Site's resources loading -->
    <link rel="stylesheet" href="/global-styles.css">
    <script src="/global-scripts.js"></script>
    <!-- Page's resources loading -->
    <link rel="stylesheet" href="/local-styles.css">
    <script src="/local-scripts.js"></script>
    <style>/* inline local styles */</style>

    <!-- || Resources Loading END -->
</head>
```

:::nota
Con astro:

> **MetaStandard:**
> =c===
> ```astro
> {/* || Generic foundamentals */}
> <meta charset="UTF-8">
> <meta name="viewport" content="width=device-width, initial-scale=1.0">
> <meta http-equiv="X-UA-Compatible" content="IE=edge">
> ```

> **MetaPage:**
> =c===
> ```astro
> --- 
> import { iconUrl, iconSize, iconType, sitemapUrl, manifestUrl, pageTitle, pageUrl, pageAuthor, pageDesc } from Astro.props;
> ---
>
> {/* || Site-specific tags */}
> <link rel="icon" sizes="32x32" href={iconUrl} type={iconType}>
> <link rel="sitemap" href={sitemapUrl}>
> <link rel="manifest" href={manifestUrl}>
> {/* Page-specific tags */}
> <title>{pageTitle}</title>
> <link rel="canonical" href={pageUrl}>
> {/* SEO Generic tags */}
> <meta name="author" content={pageAuthor}>
> <meta name="description" content={pageDesc}>
> ```

> **MetaOpenGraph:**
> =c===
> ```astro
> --- 
> import { pageTitle, pageDesc, siteName, imageUrl, imageType, imageW, imageH } from Astro.props;
> ---
>
> {/* Open Graph tags */}
> <meta property="og:title" content={pageTitle}>
> <meta property="og:description" content={pageDesc}>
> <meta property="og:type" content="website">
> <meta property="og:site_name" content={siteName}>
> <meta property="og:locale" content="it_IT">
> <meta property="og:image" content={imageUrl}>
> <meta property="og:image:type" content={imageType}>
> <meta property="og:image:width" content={imageW}>
> <meta property="og:image:height" content={imageH}> 
> ```

> **MetaTwitter:**
> =c===
> ```astro
> --- 
> import { pageTitle, pageDesc, imageUrl, pageAuthor } from Astro.props;
> ---
>
> {/* Twitter Card tags */}
> <meta name="twitter:card" content="summary_large_image">
> <meta name="twitter:title" content={pageTitle}>
> <meta name="twitter:description" content={pageDesc}>
> <meta name="twitter:image" content={imageUrl}>    
> <meta name="author" content={pageAuthor}> 
> ```
:::

## body

Partendo dall'esterno, possiamo dividere il `body` del documento principalmente in alcuni elementi:

* **`header`**: l'header più esterno serve principalemente come testata del sito comune a tutte le pagine, contiene spesso il titolo/logo del sito, la sua navigazione principale e spesso è mantenuto fisso in cima alla pagina
* **`main`**: contenuto principale della pagina; in particolare quelle parti che appartengono specificamente alla pagina e non al sito
* **`aside`**: contenuto accessorio; tipicamente pubblicità, link correlati (ma non appartenenti alla pagina), sidebar e simili che non hanno relazione stretta con il contenuto principale della pagina
* **`footer`**: fine-pagina; generalmente contiene informazioni relative al sito e/o la sua navigazione, come copyright, link secondari/partner, contatti, info sul team e simili

### titoli e sezioni

Gli elementi per titoli (`h1`-`h6`) sono usati sempre all'inizio di specifiche sezioni per caratterizzare il contenuto:
* `h1` è unico per la pagina; se si riferisce al contenuto della pagina allora è da inserire nel `main`, se invece è comune al sito, allora va bene nell'`header` principale
* gli altri titoli fanno generalmente capo a `section`, `article` e tutti gli altri elementi che possono necessitare di un titolo

### footer (sito)

### main

### nav





























<style>
section:has(> h3) .astro-code:before {
    content: none;
}
section:has(> h3:not(#esempio-completo)) .astro-code {
    white-space: normal;
}

ul:has(+ .astro-code) {
    margin-bottom: 0;
}
ul + .astro-code {
    margin-top: 0.3rem;
    margin-left: 40px;
    max-width: calc(100% - 40px);
}
ul:has(+ .astro-code) :last-child  {
    margin-bottom: 0;
}
</style>