// Mette ad ogni h2 la funzione di collasso per la sezione successiva
    $("h2").addClass("active");
        $("h2").click(function() {
            $(this).toggleClass("active");
            $(this).toggleClass("spaceme");
            $(this).next("section").slideToggle("fast");
        });

// Stilizza il codice html non compilato    
    $(document).ready(function () {
        $(".htmlStyle").each(function () {

            // Acquisisce il contenuto del singolo elemento
            var originalText = $(this).html();

            // Applica le trasformazioni (non cambiare ordine!)

            var updatedHtml_1 = originalText.replace(/(\s)([^\s=]+)(?==)/g, '$1<q>$2</q>');

            var updatedHtml_2 = updatedHtml_1.replace(/&lt;(.*?)&gt;/g, '&lt;<i>$1</i>&gt;');

            var updatedHtml_3  = updatedHtml_2.replace(/=/g, '<span>=</span>');
            
            var updatedFinal = updatedHtml_3.replace(/"(.*?)"/g, '<s>"$1"</s>');

            // Formatta il contenuto modificato del singolo elemento
            $(this).html(updatedFinal);
        });
    });
$(document).ready(function () {
  $(".cssStyle").each(function () {
    
    var ogText = $(this).text()
    // Si suppone che gli unici > siano selettori e non html
        .replace(/\>/g, '<q>\></q>');

    // Divisione per righe
    var lines = ogText.split("\n");

    // Evidenzia intestazioni e proprietà
    var updatedLines = lines.map(function (line) {
      return line
        .replace(/^([^{]*\{)/g, "<s>$1</s>")              
        .replace(/^([^:]+)(:)/g, "<i>$1</i>$2");           
    });

    // Unisci tutto il testo in una stringa
    var updatedCss = updatedLines.join("\n")
        // Evidenzia i valori tra : e ;
        .replace(/:(.*?);/g, ':<b>$1</b>;')
        // Evidenzia valori tra : e (
          .replace(/:([^()]*)\(/g, ':<rt>$1</rt>(')
        // Evidenzia parentesi tonde
        .replace(/[()]/g, '<u>$&</u>')
        // Virgole, &, ~ e + 
        .replace(/,/g, '<q>,</q>')
        .replace(/&/g, '<q>&</q>')
        .replace(/~/g, '<q>~</q>')
        .replace(/\+/g, '<q>+</q>');
        
    // Evidenzia le graffe con colore diverso se annidate
    let finalCss = "";
    let depth = 0;

    for (let i = 0; i < updatedCss.length; i++) {
        // Scorre TUTTO il testo per verificare dove si chiudono le graffe
        let char = updatedCss[i];

      if (char === "{") {
        depth++;
        if (depth === 1) {
          finalCss += "<span>{</span>";
        } else {
          finalCss += "<strong>{</strong>";
        }
      } else if (char === "}") {
        if (depth === 1) {
          finalCss += "<span>}</span>";
        } else {
          finalCss += "<strong>}</strong>";
        }
        depth = Math.max(depth - 1, 0);
      } else {
        finalCss += char;
      }
    }

    // Inserisce il risultato aggiornato
    $(this).html(finalCss);
  });
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



