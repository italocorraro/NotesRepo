import { visit } from "unist-util-visit";

export default function remarkWrapTables() {
  return (tree) => {
    visit(tree, "table", (node, index, parent) => {
      if (!parent || typeof index !== "number") return;

      const wrapper = {
        type: "div",
        data: {
            hName: 'div',
            hProperties: { 
                className: 'table-wrapper',
                tabindex: '0',
            },
          },
        children: [node]
      };

      parent.children[index] = wrapper;
    });
  };
}
