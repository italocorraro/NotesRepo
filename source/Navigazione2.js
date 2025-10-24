let navigazione = `
    <div id="navbar">
        <ul>

<!--        Lista pagine HTML                          -->
            <li class="flip">
                <span>HTML</span>
            </li>
            <ul class="panel">
                <li><a href="../Sintassi html/">Sintassi</a></li>
                <li><a href="../Struttura Semantica/">Struttura Semantica</a></li>
                <li><a href="../L'elemento head/">L'elemento &lt;head&gt;</a></li>
                <li><a href="../Ancore/">Ancore</a></li>
                <li><a href="../Immagini/">Immagini</a></li>
                <li><a href="../Liste/">Liste</a></li>
                <li><a href="../Tabelle/">Tabelle</a></li>
                <li><a href="../Forms/">Forms</a></li>
                <li><a>Accessibilità</a></li>
                <li><a>Validazione</a></li>
                
                
                
            </ul>

<!--        Lista pagine CSS                          -->
            <li class="flip">
                <span>CSS</span>
            </li>
            <ul class="panel">
                <li><a href="../Sintassi CSS/">Sintassi</a></li>
                <li><a href="../Selectors/">Selettori</a></li>
                <li><a href="../Box Model/">Box Model</a></li>
                <li><a>Unità di misura</a></li>
                <li><a>Tipografia</a></li>
                <li><a>Colori</a></li>
                <li><a>Funzioni e variabili</a></li>
                <li><a>media queries</a></li>
                <li><a>Modali</a></li>
                <li><a>Transizioni</a></li>
                <li><a>Animazioni</a></li>
                <li><a href="../Layout con Float/">Layout con Float</a></li>
                <li><a href="../Layout con Flexbox/">Layout con Flexbox</a></li>
                <li><a href="../Layout con Grid/">Layout con Grid</a></li>
                <li><a>Altri Media</a></li>
            </ul>

<!--        Lista pagine JS                          -->
            <li class="flip">
                <span>JavaScript</span>
            </li>
            <ul class="panel">
                <li><a href="../Sintassi js/">Sintassi</a></li>
                <li><a>Variabili</a></li>
                <li><a>Tipi di dato</a></li>
                <li><a>Operatori</a></li>
                <li><a>Condizionali</a></li>
                <li><a>Loop</a></li>
                <li><a href="../Funzioni/">Funzioni</a></li>
                <li><a>Funzioni di Supporto</a></li>
                <li><a>Array</a></li>
                <li><a>Oggetti</a></li>
                <li><a>Mappe</a></li>
                <li><a href="../Espressioni Regolari/">Espressioni Regolari</a></li>
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
                <li><a href="../Sintassi md/">Sintassi</a></li>
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
<!--        Barra di Navigazione (schermi piccoli) -->
    <div class="headbar"></div>

    <div class="navtoggle" id="navtoggle2">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>

    <div id="toctoggle">
        <div class="square1"></div>
        <div class="square2"></div>
    </div>

    <div id="touchlock"></div>`;

$(function() {
    $("body").prepend(navigazione);

    // Aggiunta evento per menu a tendina
    $(".flip").click(function() {
      $(this).toggleClass("active");
      $(this).next(".panel").slideToggle("fast");
    });


    $("#navtoggle2").click(function() {
        $("aside.sidebar_right").hasClass("tocactive") ? null : $("body").toggleClass("scrollLock");
        $("#toctoggle").removeClass("tochange");
        $("aside.sidebar_right").removeClass("tocactive");
        $(this).toggleClass("change");
        $("#navbar").toggleClass("navactive");
    });

    $("#toctoggle").click(function () {
        $("#navbar").hasClass("navactive") ? null : $("body").toggleClass("scrollLock");
        $("#navtoggle2").removeClass("change");
        $("#navbar").removeClass("navactive");
        $(this).toggleClass("tochange");
        $("aside.sidebar_right").toggleClass("tocactive");
    });

    $(document).on("click", " aside.sidebar_right a", function () {
        $("body").removeClass("scrollLock");
        $("#toctoggle").removeClass("tochange");
        $("aside.sidebar_right").removeClass("tocactive");
    });

})


    
  
      