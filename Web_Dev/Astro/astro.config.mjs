// @ts-check
import { defineConfig } from 'astro/config';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// rehype-remark plugins
import rehypeSlug from 'rehype-slug';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkDirective from 'remark-directive';
import remarkFlexibleMarkers from 'remark-flexible-markers';
import remarkSectionize from 'remark-sectionize';

// custom plugins
import remarkClassify from './src/plugins/remark-classify';
import remarkWrapTables from './src/plugins/remark-wrap-tables';
import remarkLazyImages from './src/plugins/remark-lazy-images';

// extensions
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
    // outDir: 'dist', // nome cartella dell'output (default: dist)
    // srcDir: 'src', // nome cartella sorgente
    // publicDir: 'public', // nome cartella public (esclusa dal build)
    base: '/NotesRepo/Web_Dev/Astro/dist/', // prefisso per le URl del sito
    // il sito astro viene servito da https://domain.com/*quello che hai scritto in base*
    /* trailingSlash: 'always' | 'never' | 'ignore'
    /  indica quando le URL devono avere lo slash finale (/) */
    /* build.format: 'directory' | 'file'
    /  indica la struttura dei file html in output:
    /  directory per usare /page-name/index.html (default)
    /  file per usare /page-name.html  */
    // build.assets: 'assets', // nome cartella per gli assets dell'output
    // build.inlineStrylesheets: true|false, indica se Astro inietta CSS inline o no
    
    // Integrazioni
    integrations: [svelte(), mdx()],

    // Impostazioni di Vite
    vite: {
        plugins: [
            viteStaticCopy({
                targets: [
                    {
                        src: 'src/scripts/nav_maker.js',
                        dest: 'static'
                    }
                ]
            })
        ]
    },

    // Impostazioni Markdown parser
    markdown: {
        remarkPlugins: [       
            remarkDirective,
            remarkClassify,
            remarkMath,
            remarkWrapTables,
            remarkLazyImages,
            remarkFlexibleMarkers,
            remarkSectionize
        ],
        rehypePlugins: [
            rehypeSlug,
            rehypeKatex
        ],
        
        shikiConfig: {
            themes: {
                light: 'github-light',
                dark: 'github-dark',
                dracula: 'dracula',
            },
            defaultColor: false,

        }
    }
});