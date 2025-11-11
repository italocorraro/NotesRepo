const snippets = {
    css: {
        cssCodeRotata: `transition-property: transform;
transition-duration: 2s;
transition-timing-function: linear;
transition-delay: 1s;`,
        cssCodeShort: `transition: transform 2s linear 1s;`,
        cssCodeTras: `.navigazione-esempio a {
    background-color: darkslategrey;
    color: whitesmoke;
    border: 0.2em solid darkslategrey;
    transition: 
      background-color 0.3s ease-in,
      color 0.5s ease-in,
      border 1s linear 1s;
}
.navigazione-esempio a:hover {
    background-color: whitesmoke;
    color: darkslategrey;
    border-color: darkred;
    text-decoration: underline;
}`,
        cssCodeOffT: `@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}`,
        cssCodeStart: `@starting-style `,
        cssCodeDisc: `#togDisplay {
    display: none;
    transition: 
      opacity 1s,
      display 1s; 
    transition-behavior: 
      allow-discrete;
}
#togDisplay.showing {
    display: block;
    opacity: 1;
}
@starting-style {
    .showing {
        opacity: 0;
    }
}`,
        cssCodeFade: `#togDd {
    display: none;
    opacity: 0;
    transition: 
      opacity 0.5s;
}
#togDd.shown {
    display: block;
}
#togDd.fade-in-out {
    opacity: 1;
}`,
        cssCodeBouns: `transition: 
  transform 2s 
  cubic-bezier(0.4, -0.3, 0.7, 2);`,
        cssCodeOri: `transform-origin: center;`,
        cssCodeOrig: `transform-origin: left top;`
    },

    js: {}
}