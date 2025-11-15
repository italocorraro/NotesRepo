const snippets = {
    css: {
        cssCodeSh1: `box-shadow: 1em 1em red;`,
        cssCodeSh2: `box-shadow: 1em 1em red inset;`,
        cssCodeSh3: `box-shadow: 1em 1em 1em red;`,
        cssCodeSh4: `box-shadow: 1em 1em 1em 1em red;`,
        cssCodeSh5: `box-shadow: 1em 1em 1em red inset;`,
        cssCodeSh6: `box-shadow: 1em 1em 1em 1em red inset;`,
        cssCodeSh7: `box-shadow: 
  0.6em 0.6em 0.5em rgb(255, 87, 87),
  0.9em 0.9em 0.5em rgb(255, 51, 51),
  1.2em 1.2em 0.5em rgb(57, 0, 0);`,
        cssCodeSh8: `box-shadow: 
  0.2em 0.2em black,
  0.4em 0.4em yellow,
  0.6em 0.6em blue,
  0.8em 0.8em red,
  1em 1em green,
  1.2em 1.2em purple;`,
cssCodeFilter: `filter: 
  drop-shadow(5px 5px 1px rgba(0, 0, 0, 50%));`,
        cssCodeShape: `shape-outside: circle(50%);`,
        cssCodeWrong: `a:active { color: red; }
a:hover { color: white; }`,
cssCodeLink: `a:link { color: rgb(51, 102, 204); }
a:visited { color: rgb(51, 102, 204); }
a:hover { 
  color: rgb(48, 86, 169);
  text-decoration: underline; 
}
a:active { color: rgb(35, 53, 102); }`,
cssCodeIcon: `a[href^='http']::after {
    content: '';
    display: inline-block;
    background-image: url(icon.png);
    background-size: 100% 100%;
    height: 1em;
    aspect-ratio: 1;
}`,
cssCodeSnap1: `.scrollable {
    scroll-snap-type: x mandatory;
}
.scrollable div {
    scroll-snap-align: start;
}`,
cssCodeSnap2: `.scrollable {
    scroll-snap-type: x proximity;
}
.scrollable div {
    scroll-snap-align: start;
}`
    }
}