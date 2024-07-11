import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "FACTURED",
      description: "Manual de referencia pa emicion de facturas electronicas",
      favicon: "/favicon.ico",
      defaultLocale: 'es',

      lastUpdated: true,
      
      head: [
        // Example: add Fathom analytics script tag.
        {
          tag: 'script',
          attrs: {
            src: 'https://cdn.usefathom.com/script.js',
            'data-site': 'MY-FATHOM-ID',
            defer: true,
          },
        },
        {
          tag:'meta',
          attrs:{
            property:'og:locale',
            content:'es',
          }
        }
      ],
      customCss: [
        "./src/styles/globals.css",
      ],
      //disable404Route:true,  //Disabling the default 404 page
      tableOfContents: {
        minHeadingLevel: 1,
        maxHeadingLevel: 3,
      },
      logo: {
        replacesTitle: true,
        dark: "./src/assets/factured_white.svg",
        light: "./src/assets/factured.svg",
        
      },
      sidebar: [
        {
          label: "Inicio",
          link: "/",
        },
        {
          label: "Guias",
          collapsed: true,

          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Guia de ejemplo",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "Referencia",
          collapsed: true,
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
    tailwind(),
  ],
});
