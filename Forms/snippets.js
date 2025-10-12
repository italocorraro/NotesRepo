// snippets.js
const snippets = {
  html: {
    htmlCode1: `<form action="/action.php">`,
    htmlCodeInput: `<input>`,
    htmlCodeHidden: `<input type="hidden" id="custId" name="custId" value="3487">`,
    htmlCodeLabel: 
`<input type="checkbox" id="ceci">
<label for="ceci">laber per checkbox ceci</label>`
  },
  css: {
    cssCodeCheckbox: 
`:checked + label.colourme {
  background-color: brown;
}
label.colourme {
  background-color: goldenrod;
}
.solobox {
  cursor: pointer;
  display: block; 
  width: 2rem; 
  height: 2rem; 
  border: 0.2em solid yellowgreen;
  border-radius: 0.2em;
  margin-right: 0.2em;
}`
  },
  js: {
    jsCode1: ``
  }
};
