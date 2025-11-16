const snippets = {
                html: {
                    htmlCodeSub: `<input type="submit">`
                },
                css: {
                    cssCodeText1: 
`button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}`,
                    cssCodeMove:
`fieldset {
    position: relative;
}
legend {
    background-color: antiquewhite;
    position: absolute;
    bottom: 0;
    right: 0;
}`,
cssCodeFotm: `input,
textarea,
select,
button {
  width: 150px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}`,
cssCodeApp: `appearance: none;`,
cssCodeApp1: `appearance: auto;`,
cssCodeCkApp: `input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;
    width: 1em;
    height: 1em;
    vertical-align: -2px;
    border: 0.05em solid gray;
    background-color: white;
}
input[type="checkbox"]::before {
  content: "✔";
  position: absolute;
  font-size: 1.2em;
  right: -1px;
  top: -0.3em;
  visibility: hidden;
}
input[type="checkbox"]:checked::before {
    visibility: visible;
}
input[type="checkbox"]:disabled {
  border-color: black;
  background: #dddddd;
  color: gray;
}`,
cssCodeCkLabel: `input[type="checkbox"] {
    display: none;
}
input[type="checkbox"] + label {
    display: inline-block;
    position: relative;
    width: 1em;
    height: 1em;
    border: 0.05em solid gray;
    background-color: white;
}
input[type="checkbox"] + label::before {
  content: "✔";
  position: absolute;
  font-size: 1.2em;
  top: -0.3em;
  visibility: hidden;
}
input[type="checkbox"]:checked + label::before {
    visibility: visible;
}
input[type="checkbox"]:disabled + label {
  border-color: black;
  background: #dddddd;
  color: gray;
}`,
cssCodeCkSwitch: `input[type="checkbox"] {
    display: none;
}
input[type="checkbox"] + label {
    display: inline-block;
    position: relative;
    top: 0.15em;
    width: 1.8em;
    height: 1em;
    border: 0.1em solid black;
    border-radius: 0.5em;
    background-color: white;
    transition: background-color 0.5s;
}
input[type="checkbox"]:checked + label {
    background-color: chartreuse;
}
input[type="checkbox"] + label::before {
    content: '';
    background-color: black;
    position: absolute;
    border-radius: 50%;
    height: calc(100% - 0.2em);
    margin: 0.1em;
    aspect-ratio: 1;
    transition: left 0.5s;
    left: 0%;
}
input[type="checkbox"]:checked + label::before {
    left: 50%;
}`,
cssCodeSearch: `input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button {
    display: none;
}`, 
cssCodeSel: `select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;
    background-color: transparent;
    border: 0;
    outline: 0;
}
.select-wrapper {
    font-family: inherit;
    background-color: white;
    border: 0.1em solid orange;
    padding: 0.1em;
}`
                }
            }