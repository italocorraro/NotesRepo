import { visit } from "unist-util-visit";

export default function remarkLazyImages() {
  return (tree) => {
    visit(tree, ["image", "imageReference", "mdxJsxFlowElement", "mdxJsxTextElement"], (node) => {

      // Immagini Markdown inline: ![alt](src)
      if (node.type === "image" || node.type === "imageReference") {
        node.data ||= {};
        node.data.hProperties ||= {};
        node.data.hProperties.loading = "lazy";
        return;
      }

      // Immagini referianziate: <img src="..." />
      if (
        (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") &&
        node.name === "img"
      ) {
        node.attributes ||= [];
        const exists = node.attributes.find((a) => a.name === "loading");
        if (!exists) {
          node.attributes.push({
            type: "mdxJsxAttribute",
            name: "loading",
            value: "lazy",
          });
        }
      }
    });
  };
}
