---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Plugin WordPress'
metaTitle: ''
description: ''
author: 'Italo Corraro'
order: 398488484 
---


## Security

Per impedire l'accesso al codice sorgente del plugin, è bene bloccare la lettura da percorso assoluto:
```php
defined( 'ABSPATH' ) || exit;
```
Questo snippet chiude l'esecuzione se `ABSPATH` non è definito; bloccando accessi all'infuori di WordPress

Bloccare l'accesso al file aprendolo dal percorso assoluto della cartella è possibile utilizzando un file *index.php* che semplicemente non fa' nulla (al percorso `http://site-domain/wp-content/plugins/plugin-name/` si apre automaticamente tutta la cartella; di default però, se una cartella contiene un file "index", allora apre direttamente quel file invece)


## Conflitti di Namespace

Per evitare conflitti con altri plugin, è bene evitare di costruirne uno che usa nomi comuni; questo perché tutto ciò che non è contenuto in un blocco, viene definito nel Namespace globale, è buona pratica utilizzare un prefisso che renda quanto più possibile unico il nome delle funzioni del plugin.

È possibile impedire la definizione di un duplicato controllando se questo non esiste già:
```php
if(!class_exists('className')) {
    class className {
        // 
    }
}
if(!function_exists('func_test')) {
    function func_test() {
        //
    }
}
```

## Hooks

Gli **hooks** sono specifici momenti della costruzione della pagina Wordpress a cui è concesso agganciarsi per inserire/modificare i contenuti.

Ad un funzione di hook vanno forniti:
- il nome del momento a cui agganciarsi
- il nome della funzione di callback da eseguire

<a href='https://developer.wordpress.org/apis/hooks/' target='_blank'>Qui</a>
un riferimento ai possibili nomi da fornire per agganciarsi a una certa azione.

Esistono due tipi di hooks: *action* e *filter*.

### Action



## Iniettare CSS e JS

```php
add_action('wp_print_styles', 'custom-stylesheet-name');
```
