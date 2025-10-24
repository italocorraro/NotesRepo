// snippets.js
const snippets = {
  html: {
    htmlCode1: ``
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
    cssCodeChild: `p > div`,
    cssCodeNot: `div:not(.active)`,
    cssCodeFocus: `input:focus { background-color: yellow; }`,
    cssCodeActive: `button:active { background-color: red; }`,
    cssCodeIS: `.active:is(p, div) `,
    cssCodeNoIS: `p.active, div.active`,
    cssCodeHas1: `form:has(input:invalid)`,
    cssCodeHas2: `label:has(+ input)`
  },
  js: {
    jsCode1: ``
  }
};
