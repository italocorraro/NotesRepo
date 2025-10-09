
  (function () {
    // Evita redirect se siamo in locale
    const isLocal = location.hostname === "localhost" ||
                    location.hostname === "127.0.0.1" ||
                    location.protocol === "file:";

    if (isLocal) return;

    // Controlla se l'URL termina con /index.html
    const path = location.pathname;
    if (path.endsWith("/index.html")) {
      // Rimuove index.html dalla URL e fa il redirect
      const newPath = path.replace(/index\.html$/, "");
      const newUrl = location.origin + newPath + location.search + location.hash;
      window.location.replace(newUrl);
    }
  })();