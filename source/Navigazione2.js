let navigazione = `

    <div id="navbar">
        <ul>

<!--        Lista pagine HTML                          -->
            <li class="flip">
                <span>HTML</span>
            </li>
            <ul class="panel">
                <li><a>Sintassi</a></li>
                <li><a>Struttura Semantica</a></li>
                <li><a>L'elemento &lt;head&gt;</a></li>
                <li><a>Ancore</a></li>
                <li><a>Immagini</a></li>
                <li><a>Entità</a></li>
                <li><a>Liste</a></li>
                <li><a>Tabelle</a></li>
                <li><a href="../Forms/">Forms</a></li>
                <li><a>Attributi</a></li>
                <li><a>APIs</a></li>
                <li><a>Accessibilità</a></li>
                <li><a>Validazione</a></li>
                
                
                
            </ul>

<!--        Lista pagine CSS                          -->
            <li class="flip">
                <span>CSS</span>
            </li>
            <ul class="panel">
                <li><a>Sintassi</a></li>
                <li><a href="../Selectors">Selettori</a></li>
                <li><a>Box Model</a></li>
                <li><a>Unità di misura</a></li>
                <li><a>Tipografia</a></li>
                <li><a>Colori</a></li>
                <li><a>Funzioni e variabili</a></li>
                <li><a>media queries</a></li>
                <li><a>Modali</a></li>
                <li><a>Transizioni</a></li>
                <li><a>Animazioni</a></li>
                <li><a>Layout con Float</a></li>
                <li><a>Layout con Flexbox</a></li>
                <li><a>Layout con Grid</a></li>
                <li><a>Altri Media</a></li>
            </ul>

<!--        Lista pagine JS                          -->
            <li class="flip">
                <span>JavaScript</span>
            </li>
            <ul class="panel">
                <li><a>Sintassi</a></li>
                <li><a>Variabili</a></li>
                <li><a>Tipi di dato</a></li>
                <li><a>Operatori</a></li>
                <li><a>Condizionali</a></li>
                <li><a>Loop</a></li>
                <li><a>Funzioni</a></li>
                <li><a>Funzioni di Supporto</a></li>
                <li><a>Array</a></li>
                <li><a>Oggetti</a></li>
                <li><a>Mappe</a></li>
                <li><a>Espressioni Regolari</a></li>
                <li><a>Debug</a></li>
                <li><a>Eventi</a></li>
                <li><a>Manipolazione del DOM</a></li>
                <li><a>Moduli</a></li>
                <li><a>storage API</a></li>
                <li><a>URL API</a></li>
                <li><a>Asincronia</a></li>
                <li><a>Promesse</a></li>
            </ul>
<!--        Lista pagine Git                         -->
            <li class="flip">
                <span>Git</span>
            </li>
            <ul class="panel">
                <li><a>WIP</a></li>
            </ul>
<!--        Lista pagine Vue                         -->
            <li class="flip">
                <span>Vue</span>
            </li>
            <ul class="panel">
                <li><a>WIP</a></li>
            </ul>
<!--        Lista pagine Markdown                         -->
            <li class="flip">
                <span>Markdown</span>
            </li>
            <ul class="panel">
                <li><a>WIP</a></li>
            </ul>
<!--        Lista pagine Vite                         -->
            <li class="flip">
                <span>Vite</span>
            </li>
            <ul class="panel">
                <li><a>WIP</a></li>
            </ul>
            
        </ul>
    </div>


    <div class="headbar"></div>
    <div class="navtoggle" id="navtoggle2">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>
  `;

$(function() {
    $("body").prepend(navigazione);

    // Aggiunta evento per menu a tendina
    $(".flip").click(function() {
      $(this).toggleClass("active");
      $(this).next(".panel").slideToggle("fast");
    });

    // Aggiunta evento hamburger dopo caricamento dinamico
    $("#navtoggle2").click(function() {
      $(this).toggleClass("change");
      $("#navbar").toggleClass("navactive");
    });
})


    
  
      