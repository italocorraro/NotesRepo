---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'GitHub Flavored Markdown'
description: 'Appunti sulla sintassi Markdown in GitHub.'
author: 'Italo Corraro'
---
## Indice

## Stili Aggiunti

### Testo Barrato

Per creare testo barrato bisogna includerlo in uno o due tilde `~`:

:::sint
```markdown
```
```html
```
```markdown
~testo barrato~
```
```html
<del>testo barrato</del>
```
```markdown
~~testo barrato~~
```
```html
<del>testo barrato</del>
```
:::

:::nb
l'elemento `<del>` rappresenta del contenuto eliminato ed è spesso ignorato dagli screen reader
:::

## Tabelle

Per creare una tabella si definiscono prima gli header, poi una seconda riga di intermezzo con dei trattini, infine si possono aggiungere righe alla tabella:

:::sint
```markdown
```
```html
```
```markdown
| header-1 | header-2 |
| -------- | -------- |
| cont-1   | cont-2   |
| cont-3   | cont-4   |
```
```html
<table>
  <thead>
    <tr>
      <th>header-1</th>
      <th>header-2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>cont-1</td>
      <td>cont-2</td>
    </tr>
    <tr>
      <td>cont-3</td>
      <td>cont-4</td>
    </tr>
  </tbody>
</table>
```
:::

:::out
| header-1 | header-2 |
| -------- | -------- |
| cont-1   | cont-2   |
| cont-3   | cont-4   |
:::

:::nota
le barre `|` esterne non sono strettamente necessarie
:::

Usando due punti `:` nella riga che separa `thead` da `tbody` si può decidere l'allineamento per la colonna; inoltre non è necessario alcun allineamento del testo, solo che il numero di celle combaci per ogni riga e che i trattini nella riga d'intermezzo siano almeno tre:

```markdown
 header-1 | header-2 | header-3 
 :---: | :--- | ---:
 all. centrale | all. a sinistra | all. a destra
```

:::out
 header-1 | header-2 | header-3 
 :---: | :--- | ---:
 all. centrale | all. a sinistra | all. a destra
:::


## Note a Piè di Pagina

Le footnotes[^f] (*note a piè di pagina*) possono essere inserite, prima creando un riferimento nel testo:

[^f]: questa è una nota a piè di pagina

```markdown
Questo a fianco serve a creare il collegamento[^nota1].
```

e poi si riempie la nota in un altro punto successivo del documento (non deve essere per forza alla fine):

```markdown
[^nota1]: questa è la nota corrispondente
```

Qualunque testo o numero può essere inserito per identificare la nota; l'unica parte necessaria è `[^`__\*__`]`

## Checklist


:::sint
```markdown
```
```html
```
```markdown
- [ ] da fare
- [x] fatto
```
```html
<ul class="contains-task-list">
  <li class="task-list-item">
    <input type="checkbox" disabled>
    " da fare"
  </li>
  <li class="task-list-item">
    <input type="checkbox" disabled checked>
    " fatto"
  </li>
</ul>
```
:::

:::out
- [ ] da fare
- [x] fatto
:::

:::nb
Le checklist così create non hanno `label` associate ad ogni input!
:::