const snippets = {
                html: {
                    htmlCodeRespo: `<div class="grid-color" style="--col:1;--row:0;">`
                },
                css: {
                    cssCodeGrad: 
`#gradiente {
    background-image: 
        linear-gradient(to right, red, green, blue);
    color: aliceblue;
}`,
                    cssCodeImm:
`.immaginami {
    background-image: url('../../source/Crunch.png');
    color: beige;
}`,
                    cssCodeSov:
`#sovrapposition {
    background-image: 
        url('../../source/Crocco.png'),
        url('../../source/Crunch.png');
}`,
                    cssCodePos1: `background-position: left bottom;`,
                    cssCodePos2: `background-position: right top;`,
                    cssCodePos3: `background-position: center center;`,
                    cssCodePos4: `background-position: 30% 5%;`,
                    cssCodeMultiply:
`background-image: 
    url('../../source/Crocco.png'),
    url('../../source/Crunch.png');
background-blend-mode: normal, normal;
background-repeat: no-repeat;
background-size: auto, cover;
background-position: center center, left top;`,
                    cssCodeSprite:
`.icon-c {
    width: 77px;
    height: 77px;
    background-image: 
      url('../../source/Crocco\ 3x77.png');
}`,
                    cssCodeSprite1: `.icon-c-1 { background-position: 0 0; }`,
                    cssCodeSprite2: `.icon-c-2 { background-position: -77px 0; }`,
                    cssCodeSprite3: `.icon-c-3 { background-position: -154px 0; }`,
                    cssCodeSpriteRes:
`[data-sprite-1] {
    width: 100%;
    aspect-ratio: 1;
    background-image: 
      url('../../source/Crocco\ 3x77.png');
    background-size: cover;
}`, 
                    cssCodeSprite11:
`[data-sprite="1"] {
    background-position: 0 0 ;
}`,
                    cssCodeSprite22:
`[data-sprite="2"] {
    background-position: -100% 0 ;
}`,
                    cssCodeSprite33:
`[data-sprite="3"] {
    background-position: -200% 0 ;
}`,
                    cssCodeRespons:
`.grid-color {
    --cols: 3;
    --rows: 3;
    --col: 0;
    --row: 0;

    aspect-ratio: 375/300;
    width: 100%;
    background: url('../../source/Grid-color.png') repeat;
    background-size: 
      calc(100% * var(--cols)) 
      calc(100% * var(--rows));
    background-position: 
      calc(-100% * var(--col)) 
      calc(-100% * var(--row));
}`,
                    cssCodeRespo:
`/* Schema per sprite in formato griglia con celle flessibili: */
.icon {
    /* Numero totale di colonne e righe nello sprite: */
    --cols: 3;  /* n° di colonne */
    --rows: 1;  /* n° di righe */

    /* Coordinate della cella da mostrare: */
    --col: 0;   
    --row: 0;   

    /* Spaziature tra celle in %: */
    /*  gap-col(%) = 100 × gap-col(px) / larghezza-colonna(px) */
    --gap-c: 5%; /* spazio tra le colonne */
    /*  gap-row(%) = 100 × gap-row(px) / altezza-riga(px) */
    --gap-r: 5%; /* spazio tra le righe */

    /* Proporzioni costanti indipendenti dal contenitore: */
    aspect-ratio: 3 / 4;  /* rapporto larghezza/altezza della singola icona */

    /* Larghezza del contenitore: */
    width: 100%; /* va bene qualsiasi valore (è questo il punto) */

    /* Sprite di sfondo */
    background: url('sprite.png');
    background-repeat: repeat; /* ! necessario a scorrere lo sprite ! */

    /* Lo sprite viene dimensionato a partire dalle dimensioni del contenitore
       che vengono moltiplicate per il n° di colonne e di righe,
       in questo modo la singola cella ha le stesse dimensioni del contenitore  */
    background-size: 
      /* larghezza sprite = larghezza contenitore × n° colonne */
      calc((100% + var(--gap-c)) * var(--cols)) 
      /* altezza sprite = altezza contenitore × n° righe */
      calc((100% + var(--gap-r)) * var(--rows)); 

    /* Lo sprite viene spostato per mostrare solo la cella desiderata: */
    background-position: 
      /* spostamento orizzontale verso la colonna indicata */
      calc((-100% + var(--gap-c)) * var(--col))
      /* spostamento verticale verso la riga indicata */
      calc((-100% + var(--gap-r)) * var(--row));

    /* Di questo schema vanno adattati allo sprite reale:
       - le variabili (le definizioni iniziali), 
       - l'aspect ratio (dipende dalla singola cella),
       - l'URL dello sprite */
    /* Per scorrere le icone: modificare le variabili coordinate
       o inserendole nello stile in-line
       o creando classi apposite per ciascuna icona */
}`,
                    cssCodeRiResp:
`.icon {
    
    --cols: 3;  
    --rows: 1;  

    --col: 0;   
    --row: 0;   

    aspect-ratio: 3 / 4; 

    width: 100%; 

    background: url('sprite.png');
    background-repeat: repeat; 

    background-size: 
      calc(100% * var(--cols))  
      calc(100% * var(--rows)); 

    background-position: 
      calc(-100% * var(--col))   
      calc(-100% * var(--row));  
}`,
                    cssCodeOpt1:
`background-image: image-set(
  url("icon.png")    1x,
  url("icon@2x.png") 2x,
  url("icon@3x.png") 3x
);`,
                    cssCodeOpt2:
`background-image: image-set(
  url("icon.avif") type("image/avif"),
  url("icon.webp") type("image/webp"),
  url("icon.png")  type("image/png")
);`,
                    cssCodeOpt3:
`background-image: image-set(
  url("icon.avif")    type("image/avif") 1x,
  url("icon@2x.avif") type("image/avif") 2x,
  url("icon.webp")    type("image/webp") 1x,
  url("icon@2x.webp") type("image/webp") 2x,  
  url("icon.png")     type("image/png")  1x,
  url("icon@2x.png")  type("image/png")  2x
);`,
                    cssCodeOpt4:
`.icon {
    width: 100px;
    height: 100px;
    /* fallback in caso image-set 
       NON sia supportato */
    background-image: url("icon.png");
    /* lista immagini a due risoluzioni
       e in diversi formati */
    background-image: image-set(
      url("icon.avif")    type("image/avif") 1x,
      url("icon@2x.avif") type("image/avif") 2x,
      url("icon.webp")    type("image/webp") 1x,  
      url("icon@2x.webp") type("image/webp") 2x,
      url("icon.png")     type("image/png")  1x,
      url("icon@2x.png")  type("image/png")  2x
    );
}`
                }
            }