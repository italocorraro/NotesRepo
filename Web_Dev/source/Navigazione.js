
import { navbar_build } from './nav_maker.js';
import { doubles } from './nav_maker.js';

const titolo = document.title;
let swapper = ``;

if(titolo.match('html')) {
    for(const doub of doubles) {
        if(titolo.match(doub.nome)) {
            swapper = `<a id="HCswitch" href="${doub.Curl}">to<br>CSS</a>`;
            break;
        }
    }
} else if(titolo.match('CSS')) {
    for(const doub of doubles) {
        if(titolo.match(doub.nome)) {
            swapper = `<a id="HCswitch" href="${doub.Hurl}">to<br>html</a>`;
            break;
        }
    }
}

let navigazione = `
    <div id="navbar">
${navbar_build}
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

    ${swapper}

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


    
  
      