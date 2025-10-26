$(function () {
  // Usa oggetto globale se esiste
  window.snippets = window.snippets || {
    html: {},
    css: {},
    js: {}
  };

  // Normalizza indentazione multilinea
  function normalizeIndentation(str) {
    const lines = str.split("\n");
    if (lines.length < 2) return str;

    const indentLengths = lines.slice(1)
      .filter(line => line.trim().length > 0)
      .map(line => line.match(/^ */)[0].length);

    const minIndent = Math.min(...indentLengths);

    const cleaned = [
      lines[0],
      ...lines.slice(1).map(line => line.slice(minIndent))
    ];

    return cleaned.join("\n");
  }

  // Estrai dinamicamente snippet da classi come htmlCode*, cssCode*, jsCode*
  ["html", "css", "js"].forEach(type => {
    snippets[type] = snippets[type] || {};

    $(`[class^=${type}Code]`).each(function () {
      const original = $(this).clone(); // Clona l'elemento per manipolarlo senza toccare il DOM

      const classList = original.attr("class").split(" ");
      const keyClass = classList.find(c => c.startsWith(`${type}Code`));

      if (!keyClass || snippets[type][keyClass]) return;

      // Rimuovi SOLO la classe snippet tipo htmlCodeX dal clone
      const filteredClasses = classList.filter(c => c !== keyClass);
      if (filteredClasses.length > 0) {
        original.attr("class", filteredClasses.join(" "));
      } else {
        original.removeAttr("class");
      }

      let code;

      if (original.prop("tagName").toLowerCase() === "script") {
        code = original.html();
      } else {
        code = original.prop("outerHTML");
      }

      code = normalizeIndentation(code.trim());
      snippets[type][keyClass] = code;
    });
  });

  // Escape HTML
  const escapeHtml = str =>
    str.replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;")
       .replace(/'/g, "&#039;");

  // Mappa tag custom
  const mappings = [
    { tag: "s", lang: "html", wrapInSpan: false, type: "html" },
    { tag: "u", lang: "html", wrapInSpan: true, type: "html" },
    { tag: "rp", lang: "css", wrapInSpan: false, type: "css" },
    { tag: "rt", lang: "css", wrapInSpan: true, type: "css" },
    { tag: "kbd", lang: "javascript", wrapInSpan: false, type: "js" },
    { tag: "q", lang: "javascript", wrapInSpan: true, type: "js" }
  ];

  // Sostituisci tag custom con blocchi evidenziati
  mappings.forEach(({ tag, lang, wrapInSpan, type }) => {
    $(tag).each(function () {
      const id = $(this).attr("id");
      const content = snippets[type][id];
      if (!content) return;

      const escaped = escapeHtml(content);
      const codeBlock = `<pre><code class="language-${lang}">${escaped}</code></pre>`;
      const wrapped = wrapInSpan ? `<span class="linear">${codeBlock}</span>` : codeBlock;

      $(this).replaceWith(wrapped);
    });
  });

  // Carica highlight.js
  const script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js";
  script.onload = () => hljs.highlightAll();
  document.head.appendChild(script);
});
