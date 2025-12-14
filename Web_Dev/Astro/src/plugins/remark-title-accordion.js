import { findAfter } from 'unist-util-find-after';
import { visit } from 'unist-util-visit';

const ACCORDION_CLASS = 'after-h2'; // La classe personalizzata

export default function remarkTitleAccordion() {
  return transform;
}

function transform(tree) {
  visit(
    tree,
    node => node.type === 'heading' && node.depth === 2, // Trova tutti gli h2
    wrapInDiv
  );
}

function wrapInDiv(node, index, parent) {
  const start = node;
  const startIndex = index;
  const depth = start.depth;

  // Funzione per determinare se siamo arrivati alla fine del blocco di contenuti
  const isEnd = (node) => node.type === 'heading' && node.depth <= depth;

  // Troviamo il nodo di fine (un altro h2 o un nodo di livello superiore)
  const end = findAfter(parent, start, isEnd);
  const endIndex = parent.children.indexOf(end);

  // Prendiamo i nodi tra il titolo e il prossimo h2 (o titolo superiore)
  const between = parent.children.slice(
    startIndex + 1, // Non includiamo il nodo h2 stesso
    endIndex > 0 ? endIndex : undefined
  );

  // Creiamo un nuovo nodo div che avvolge i contenuti trovati
  const div = {
    type: 'element',
    tagName: 'div',
    data: {
      hProperties: { 
                className: ACCORDION_CLASS
            },
    },
    children: between
  };

  // Sostituiamo il contenuto tra l'h2 e il prossimo titolo con il nuovo div
  parent.children.splice(startIndex + 1, between.length, div);
}

