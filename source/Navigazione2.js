let navigazione = `
    
    <div id="navbar">
        <ul>

<!--        Lista pagine HTML                          -->
            <li class="flip">
                <span>HTML</span>
            </li>
            <ul class="panel">
                <li><a href="../Forms/">Forms</a></li>
                
            </ul>

<!--        Lista pagine CSS                          -->
            <li class="flip">
                <span>CSS</span>
            </li>
            <ul class="panel">
                <li><a href="../Selectors">Selectors</a></li>
            </ul>

<!--        Lista pagine JS                          -->
            <li class="flip">
                <span>JavaScript</span>
            </li>
            <ul class="panel">
                <li><a>WIP</a></li>
<!--        Lista pagine JQ                          -->
                <li class="flip">
                    <span>JQuery</span>
                </li>
                <ul class="panel">
                    <li><a>WIP</a></li>
                </ul>

            </ul>
<!--        Lista pagine Vue                         -->
            <li class="flip">
                <span>Vue</span>
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


    
  
      