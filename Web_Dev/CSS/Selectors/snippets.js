// snippets.js
const snippets = {
  html: {
    htmlCode1: `<div data-garden-items="garofani denti-di-leone margherite crisantemi"></div>`,
    htmlCode2: `<div class="container">
    <div class="class-1">1</div>
    <div class="class-2">1</div>
</div>`
  },
  css: {
    cssCodeElem: `p {font-size: 20px;}`,
    cssCodeClass: `.classSelector {font-size: large;}`,
    cssCodeID: `#idSelector {font-size: 2rem;}`,
    cssCodeUniv: `* {font-size: 1vw;}`,
    cssCodeOR: 
`p.main_paragraph, #yo_mama, .apply_at_me {
  font-weight: bold;
}`,
    cssCodeProx: `p + div`,
    cssCodeMin: `p ~ div`,
    cssCodeChild: `div > p`,
    cssCodeNot: `div:not(.active)`,
    cssCodeFocus: `input:focus { background-color: yellow; }`,
    cssCodeActive: `button:active { background-color: red; }`,
    cssCodeIS: `.active:is(p, div) `,
    cssCodeNoIS: `p.active, div.active`,
    cssCodeHas1: `form:has(input:invalid)`,
    cssCodeHas2: `label:has(+ input)`,
    cssCodeAtt1: `a[target] { background-color: yellow; }`,
    cssCodeAtt2: `div[data-custom-id="0061"] {
  background-color: yellow;
}`,
    cssCodeAtt3:
`[data-garden-items~="margherite"]`,
    cssCodePseudo1: 
`p.eg {
    background-color: rgba(255, 243, 134, 0.4);
    border-left-color: yellow;
}
.eg::before { content: "Esempio: "; }`,
    cssCodePseudo2:
`h2::after {
    cursor: pointer;
    content: "<";
    float: right;
    margin-right: clamp(2px, 0.8vw, 8px);
    transition: 0.3s;
}`, 
    cssCodePseudo3: `::marker { color: aqua; font-size: 130%; }`,
    cssCodePseudo4: `::selection { 
    background-color: wheat; 
    color: brown;
}`,
    cssCodePseudo5: `::backdrop {
    background-color: rgba(127, 255, 212, 0.308);
    backdrop-filter: blur(0.2rem);
}`,
    cssCodePseudo6:
`::placeholder {
    color: aquamarine;
    font-family: cursive;
}`,
    cssCodeSpec1: `p > div`,
    cssCodeSpec2: `div:first-child`,
    cssCodeSpec3: `div.class-1, div.class-2 {
    color: blue;
}`,
    cssCodeSpec4: `div:is(.class-1,.class-2) {
    color: red;
}`,
    cssCodeSpec5: `div.class-1, .container div.class-2 {
    color: red;
}`,
    cssCodeSpec6: `div div:is(.class-1,.class-2) {
    color: blue;
}`,
    cssCodeSpex: 
`div.class-1, div.class-2 {
    color: blue;
}
:is(div.class-1, .class-2) {
    color: red;
}`,
    cssCodeSpex1: `div.class-1`
  },
  js: {
    jsCode1: ``
  }
};
