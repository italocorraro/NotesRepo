import { visit } from "unist-util-visit";
import { h } from "hastscript";

// 
const insert = 'inserto';
// Liste alias note: 
const inserti = {
  note: {
    titolo: 'Nota: ',
    class: 'nota',
    aria: 'Nota generica',
    alias: ['nota', 'note', 'Note', 'Nota']
  },
  oss: {
    titolo: 'Osservazione: ',
    class: 'osservazione',
    aria: 'Osservazione',
    alias: ['oss', 'osservazione', 'observation', 'obs']
  },
  att: {
    titolo: 'Attenzione! ',
    class: 'attenzione',
    aria: 'Avvertimento',
    alias: ['att', 'warn', 'attenzione', 'warning']
  },
  nb: {
    titolo: 'Nota Bene: ',
    class: 'notabene',
    aria: 'Nota importante',
    alias: ['nb', 'notabene', 'NB', 'nB']
  },
  eg: {
    titolo: 'Esempio: ',
    class: 'esempio',
    aria: 'Esempio',
    alias: ['eg', 'es', 'ex', 'esempio', 'example']
  },
  out: {
    titolo: 'Output: ',
    class: 'output',
    aria: 'Output del codice precedente',
    alias: ['out', 'output']
  },
  tab: {
    element: 'div',
    titolo: '',
    class: 'mark-tab',
    aria: 'Tabella di Sintassi',
    alias: ['sint', 'sintassi']
  },
  exp: {
    element: 'div',
    titolo: '',
    class: 'exp-tab',
    aria: 'Tabella con contenuto',
    alias: ['exp', 'espanso']
  }
}


/**
 * Plugin Remark che trasforma 
 * :::class ... ::: 
 *    in 
 * <div class="classe"><p>...</p></div>
 */

export default function remarkClassify() {
  return function (tree) {
    visit(tree, "containerDirective", (node) => {
      if (!node.name) return;

      const data = node.data ||= {};

      const cN = node.name;
      let className = '';
      let aria = '';
      let heading = '';
      let el = 'aside';
      // role = 'note';

      for (const ins in inserti) {
        if (inserti[ins].alias.includes(cN)) {
          el = inserti[ins].element ?? el;
          className = inserti[ins].class;
          aria = inserti[ins].aria;
          heading = inserti[ins].titolo;
          break;
        }
      }

      if (!className) return;

      const hastNode = h(el, { 
        class: `${insert} ${className}`,
        "aria-label": aria,
        "data-heading": heading,
      });

      data.hName = hastNode.tagName;
      data.hProperties = hastNode.properties;

    });
  };
}
