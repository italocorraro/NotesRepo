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
        cssCodeOrig: `transform-origin: left top;`,
        cssCodeAnim: 
`@keyframes animationName {
    from {property: 'value';}
    to {property: 'value';}
}`,
cssCodeAnima: 
`@keyframes animationName {
    0% {property: 'value';}
    25% {property: 'value';}
    50% {property: 'value';}
    75% {property: 'value';}
    100% {property: 'value';}
}`,
cssCodeAnim1: `#anim1 {
    animation-name: animate;
    animation-duration: 2s;
    animation-iteration-count: 3;
}
@keyframes animate {
    from { background-color: aqua; }
    to {
        background-color: black;
        border-radius: 0;
    }
}`,
cssCodeAnim2: `#anim2 {
    animation-name: animate2;
    animation-duration: 5s;
    animation-direction: alternate;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
@keyframes animate2 {
    0% { opacity: 0; }
    30% {
        opacity: 0.6;
        border: 0.5em solid white;
    }
    50% {
        opacity: 0.8;
        border: 0.3em solid white;
        border-bottom: 1em solid white;
        border-top: 1em solid white;
    }
    75% {
        opacity: 0.9;
        border: 0 solid white;
        border-bottom: 2em solid white;
        border-top: 2em solid white;
    }
    100% {
        border-bottom: 3em solid whitesmoke;
        border-top: 3em solid whitesmoke;
        opacity: 1;
    }
}`,
cssCodeAnim3: `#anim3 {
    animation-name: animate3;
    animation-duration: 5s;
    animation-direction: alternate-reverse;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
}
@keyframes animate3 {
    0% { 
        scale: 0%; 
    }
    25% {
        rotate: 740deg;
    }
    100% {
        translate: 200% 0;
    }
}`
    },

    js: {}
}