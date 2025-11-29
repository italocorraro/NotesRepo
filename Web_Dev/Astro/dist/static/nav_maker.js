
function costruisciNav(barra) {
    const br = `\n\t\t`;
    const br2 = `\n\t\t\t`;
    let navigazione = `<ul>\n\t`;
    for(const navItem of barra) {
        if(!navItem.content || navItem.content.length < 1) continue;

        navigazione += `<li class="flip"><span>${navItem.name}</span></li>${br}<ul class="panel">`;
        for(const subItem of navItem.content) {
            navigazione += `${br2}<li><a href="${subItem.URL}">${subItem.name}</a></li>`;
        }
        
        navigazione += `${br}</ul>`;
    }
    navigazione += `\n</ul>`;
    return navigazione;
}

function cercaDoppiHC(barra) {
  let html = [];
  let css = [];
  let doppi = [];
  for(const item of barra) {
    switch(item.name) {
      case 'HTML':
        html = item.content;
        break;
      case 'CSS':
        css = item.content;
        break;
      default: break;
    }
  }
  let i = 0;
  for(const ht of html) {
    const nomeH = ht.name;
    for(const cs of css) {
      const nomeC = cs.name;
      if(nomeC == nomeH) {
        doppi[i] = { nome: nomeC, Hurl: ht.URL, Curl: cs.URL };
        i++;
        continue;
      }
    }
  }
  return doppi;
}

const base = '/NotesRepo/Web_Dev/';
const astro = base + 'Astro/dist/';

const navbar = [
  {
    name: 'HTML',
    content: [
      { name: 'Sintassi html', URL: base + 'html/Sintassi html/' },
      { name: 'Struttura Semantica', URL: base + 'html/Struttura Semantica/' },
      { name: "L'elemento <head>", URL: base + "html/L'elemento head/" },
      { name: 'Ancore', URL: base + 'html/Ancore/' },
      { name: 'Liste', URL: base + 'html/Liste/' },
      { name: 'Immagini', URL: base + 'html/Immagini/' },
      { name: 'Altri Media', URL: base + 'html/Altri Media/' },
      { name: 'Tabelle', URL: base + 'html/Tabelle' },
      { name: 'Form', URL: base + 'html/Forms/' }
    ]
  },
  {
    name: 'CSS',
    content: [
      { name: 'Sintassi CSS', URL: base + 'CSS/Sintassi CSS/' },
      { name: 'Selettori', URL: base + 'CSS/Selectors/' },
      { name: 'Box Model', URL: base + 'CSS/Box Model/' },
      { name: 'Unità di misura', URL: base + 'CSS/Unità di Misura/' },
      { name: 'Colori', URL: base + 'CSS/Colori/' },
      { name: 'Immagini', URL: base + 'CSS/Immagini/' },
      { name: 'Funzioni e Variabili', URL: base + 'CSS/Funzioni e Variabili/' },
      { name: 'Background', URL: base + 'CSS/Background/' },
      { name: 'Tipografia', URL: base + 'CSS/Tipografia/' },
      { name: 'Liste', URL: base + 'CSS/Altri Stili/#liste'},
      { name: 'Ancore', URL: base + 'CSS/Altri Stili/#ancore'},
      { name: 'Tabelle', URL: base + 'CSS/Tabelle/' },
      { name: 'Form', URL: base + 'CSS/Form/' },
      { name: 'Media Queries', URL: base + 'CSS/Media Queries/' },
      { name: 'Layout con Float', URL: base + 'CSS/Layout con Float/' },
      { name: 'Layout con Flexbox', URL: base + 'CSS/Layout con Flexbox/' },
      { name: 'Layout con Grid', URL: base + 'CSS/Layout con Grid/' },
      { name: 'Altri Stili', URL: base + 'CSS/Altri Stili/' },
      { name: 'Animazioni & Transizioni', URL: base + 'CSS/Transizioni-Animazioni/' }
    ]
  },
  {
    name: 'JavaScript',
    content: [
      { name: 'Sintassi', URL: astro + 'javascript/Sintassi Base/'},
      { name: 'Tipi Primitivi', URL: astro + 'javascript/Tipi Primitivi/' },
      { name: 'Operatori', URL: astro + 'javascript/Operatori/' },
      { name: 'Array', URL: astro + 'javascript/Array/' },
      { name: 'Condizionali', URL: astro + 'javascript/Condizionali/' },
      { name: 'Iterazione', URL: astro + 'javascript/Iterazione/' },
      { name: 'Funzioni', URL: astro + 'javascript/Funzioni/' },
      { name: 'Funzioni di Supporto', URL: '#' },
      { name: 'Strict Mode', URL: astro + 'javascript/Strict Mode/' },
      { name: 'Oggetti', URL: astro + 'javascript/Oggetti/' },
      { name: 'Mappe', URL: '#' },
      { name: 'Espressioni Regolari', URL: '#' },
      { name: 'Debug', URL: '#' },
      { name: 'Eventi', URL: '#' },
      { name: 'Manipolazione del DOM', URL: '#' },
      { name: 'Moduli', URL: '#' },
      { name: 'Storage API', URL: '#' },
      { name: 'URL API', URL: '#' },
      { name: 'Asincronia', URL: '#' },
      { name: 'Promesse', URL: '#' }
    ]
  },
  {
    name: 'Struttura Pagine',
    content: [
      { name: 'Struttura html', URL: '#' },
      { name: 'Struttura CSS', URL: '#' },
      { name: 'Testata del Sito', URL: '#' }
    ]
  },
  {
    name: 'TypeScript',
    content: [
      // Vuoto
    ]
  },
  {
    name: 'Git',
    content: [
      // Vuoto
    ]
  },
  {
    name: 'Markdown',
    content: [
      { name: 'Sintassi', URL: astro + 'Markdown/Sintassi Markdown/' },
      { name: 'GitHub Flavored', URL: astro + 'Markdown/GFM/' },
      { name: 'Remark Plugins', URL: '#' }
    ]
  },
  {
    name: 'Svelte',
    content: [
      { name: 'Sintassi', URL:  '#' }
    ]
  },
  {
    name: 'Astro',
    content: [
      { name: 'Basi', URL: '#' },
    ]
  }
];

/*const testPosts = Object.values(import.meta.glob('../pages/posts/*.md', { eager: true }));

const nons = navbar[8].content.length;
for(let k=0; k<testPosts.length; k++) {
  let i = k + nons;
  let post = testPosts[k];
  navbar[8].content[i] = {
    name: post.frontmatter.title,
    URL: post.url
  }
} */

const navbar_build = costruisciNav(navbar);
const doubles = cercaDoppiHC(navbar);

export { navbar_build };
export { doubles };
export { navbar };