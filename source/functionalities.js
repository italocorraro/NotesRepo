// Mette ad ogni h2 la funzione di collasso per la sezione successiva
    $("h2").addClass("active");
        $("h2").click(function() {
            $(this).toggleClass("active");
            $(this).toggleClass("spaceme");
            $(this).next("section").slideToggle("fast");
        });

// Applica stile agli elementi html riportati    
    $(document).ready(function () {
        $("kbd, pre").each(function () {
        var $el = $(this);

        // Ottieni il contenuto HTML originale di questo elemento
        var originalText = $el.html();

        // Applica le trasformazioni una per una
        var updatedHtml_1 = originalText.replace(/"(.*?)"/g, '<s>"$1"</s>');
        var updatedHtml_2 = updatedHtml_1.replace(/(\s)([^\s=]+)(?==)/g, '$1<q>$2</q>');
        var updatedHtml_3 = updatedHtml_2.replace(/&lt;(.*?)&gt;/g, '&lt;<i>$1</i>&gt;');
        var updatedFinal  = updatedHtml_3.replace(/=/g, '<span class="normalMe">=</span>');

        // Imposta il contenuto modificato di questo elemento
        $el.html(updatedFinal);
        });
    });


