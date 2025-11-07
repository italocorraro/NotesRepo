
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

const base = '../../';

const navbar = [
  {
    name: 'HTML',
    content: [
      { name: 'Sintassi html', URL: base + 'html/Sintassi html/' },
      { name: 'Struttura Semantica', URL: base + 'html/Struttura Semantica/' },
      { name: "L'elemento &lt;head&gt;", URL: base + "html/L'elemento head/" },
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
      { name: 'Tipografia', URL: '#' },
      { name: 'Tabelle', URL: base + 'CSS/Tabelle/' },
      { name: 'Form', URL: base + 'CSS/Form/' },
      { name: 'Modali', URL: '#' },
      { name: 'media queries', URL: '#' },
      { name: 'Layout con Float', URL: base + 'CSS/Layout con Float/' },
      { name: 'Layout con Flexbox', URL: base + 'CSS/Layout con Flexbox/' },
      { name: 'Layout con Grid', URL: base + 'CSS/Layout con Grid/' },
      { name: 'Altri Stili', URL: '#' },
      { name: 'Transizioni', URL: '#' },
      { name: 'Animazioni', URL: '#' }
    ]
  },
  {
    name: 'JavaScript',
    content: [
      { name: 'Sintassi', URL: '#' },
      { name: 'Variabili', URL: '#' },
      { name: 'Tipi di dato', URL: '#' },
      { name: 'Operatori', URL: '#' },
      { name: 'Condizionali', URL: '#' },
      { name: 'Loop', URL: '#' },
      { name: 'Funzioni', URL: '#' },
      { name: 'Funzioni di Supporto', URL: '#' },
      { name: 'Array', URL: '#' },
      { name: 'Oggetti', URL: '#' },
      { name: 'Mappe', URL: '#' },
      { name: 'Espressioni Regolari', URL: '#' },
      { name: 'Debug', URL: '#' },
      { name: 'Eventi', URL: '#' },
      { name: 'Manipolazione del DOM', URL: '#' },
      { name: 'Moduli', URL: '#' },
      { name: 'storage API', URL: '#' },
      { name: 'URL API', URL: '#' },
      { name: 'Asincronia', URL: '#' },
      { name: 'Promesse', URL: '#' }
    ]
  },
  {
    name: 'Accessibilità',
    content: [
      // Vuoto
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
      {
        name: 'Sintassi',
        URL: 'https://github.com/italocorraro/NotesRepo/blob/main/Markdown/Sintassi%20md.md'
      }
    ]
  },
  {
    name: 'Svelte',
    content: [
      // Vuoto
    ]
  },
  {
    name: 'Astro',
    content: [
      // Vuoto
    ]
  }
];


const navbar_build = costruisciNav(navbar);
const doubles = cercaDoppiHC(navbar);

export { navbar_build };
export { doubles };
