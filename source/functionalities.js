// Mette ad ogni h2 la funzione di collasso per la sezione successiva
    $("h2").addClass("active");
        $("h2").click(function() {
            $(this).toggleClass("active");
            $(this).toggleClass("spaceme");
            $(this).next("div").slideToggle("fast");
        });

// Crea ID ai titoli h2 e h3 e li schiaffa nell'indice (Table of Contents)
$(document).ready(function () {
  var $indiceContainer = $("#indice");
  var $headers = $("h2, h3");
  var $ol = $("<ol></ol>");
  var currentH2Item = null;

  $headers.each(function () {
    var $el = $(this);
    var tag = $el.prop("tagName").toLowerCase();
    var text = $el.text().trim();

    // Genera ID valido (toglie apici, spazi)
    var id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    // Aggiunge -1 (o più alto) se l'ID non è unico
    let uniqueId = id;
    let counter = 1;
    while ($("#" + uniqueId).length > 0) {
      uniqueId = id + "-" + counter;
      counter++;
    }

    $el.attr("id", uniqueId);

    // Crea l'ancora al titolo
    var $link = $("<a></a>")
      .attr("href", "#" + uniqueId)
      .text(text);
    var $li = $("<li></li>").append($link);

    if (tag === "h2") {
      // Crea l'elemento dell'indice h2
      currentH2Item = $li;
      $ol.append(currentH2Item);
    } else if (tag === "h3" && currentH2Item) {
      // Sottovoce annidata nell'ultimo h2 se è h3
      var $subList = currentH2Item.children("ol");
      if ($subList.length === 0) {
        $subList = $("<ol></ol>");
        currentH2Item.append($subList);
      }
      $subList.append($li);
    }
  });

  // Inserisci l'indice nella pagina
  $indiceContainer.append("<h3>Table of Contents</h3>");
  $indiceContainer.append($ol);
});

  // Lega un input range a un elemento con classe range-edit
  const modificati = document.querySelectorAll(".range-edit");

  for(const modificato of modificati) {
    let maybeRange = modificato.nextElementSibling;
    while(maybeRange) {
      if(maybeRange.getAttribute("type")==="range") {
        maybeRange.addEventListener("input", () => {
          modificato.style.width = maybeRange.value + '%';
        });
        break;
      }
      maybeRange = maybeRange.nextElementSibling;
    }
  }


