import { visit } from "unist-util-visit";
import { h } from "hastscript";

/**
 * Plugin Remark: trasforma :::classe ... ::: in <div class="classe">...</div>
 * e lo appende come ultimo figlio dell'ultimo <li> precedente, se esiste,
 * altrimenti al nodo precedente generico.
 */
export default function remarkClassifyAppend() {
  return (tree) => {
    visit(tree, "containerDirective", (node, index, parent) => {
      if (!node.name) return;

      const className = node.name;
      const data = node.data ||= {};

      // Creiamo il nodo div
      const hastNode = h("div", { class: className });
      data.hName = hastNode.tagName;
      data.hProperties = hastNode.properties;

      // Rimuoviamo il nodo dalla sua posizione attuale
      if (parent && typeof index === "number") parent.children.splice(index, 1);

      // Trova l'ultimo listItem precedente, se esiste
      let targetNode = null;
      for (let i = index - 1; i >= 0; i--) {
        if (parent.children[i].type === "listItem") {
          targetNode = parent.children[i];
          break;
        }
      }

      // Se troviamo un listItem precedente, appendiamo lì
      if (targetNode) {
        targetNode.children ||= [];
        targetNode.children.push(node);
      } else {
        // Altrimenti appendiamo al nodo precedente generico
        const prevNode = parent.children[index - 1] || null;
        if (prevNode) {
          prevNode.children ||= [];
          prevNode.children.push(node);
        } else {
          parent.children.push(node);
        }
      }
    });
  };
}
