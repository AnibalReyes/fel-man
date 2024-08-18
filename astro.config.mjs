import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "FACTURED",
    defaultLocale: 'es',
    locales: {
      es: {
        label: 'Español',
      },
    },
    customCss: [
      './src/styles/globals.css',
    ],
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
        defer: true
      }
    }, {
      tag: 'meta',
      attrs: {
        property: 'og:locale',
        content: 'es'
      }
    }],
    customCss: ["./src/styles/globals.css"],
    //disable404Route:true,  //Disabling the default 404 page
    tableOfContents: {
      minHeadingLevel: 1,
      maxHeadingLevel: 3
    },
    logo: {
      replacesTitle: true,
      dark: "./src/assets/factured_white.svg",
      light: "./src/assets/factured.svg"
    },
    sidebar: [{
      label: "Inicio",
      link: "/"
    }, {
      label: "Inicio de sesión",
      collapsed: true,
      autogenerate: {
        directory: "login"
      }
    }, {
      label: "Conceptos",
      collapsed: true,
      autogenerate: {
        directory: "concepts"
      }
    }, {
      label: "Transmisión",
      collapsed: true,
      autogenerate: {
        directory: "transmission"
      }
    }, {
      label: "Consulta de Transmisiones",
      collapsed: true,
      autogenerate: {
        directory: "transmissionConsultation"
      }
    }, {
      label: "Clientes",
      collapsed: true,
      autogenerate: {
        directory: "customers"
      }
    }, {
      label: "Usuarios",
      collapsed: true,
      autogenerate: {
        directory: "users"
      }
    }, {
      label: "Sucursales",
      collapsed: true,
      autogenerate: {
        directory: "branchOffices"
      }
    }, {
      label: "Puntos de Venta",
      collapsed: true,
      autogenerate: {
        directory: "pointsOfSale"
      }
    }, {
      label: "Productos",
      collapsed: true,
      autogenerate: {
        directory: "products"
      }
    }, {
      label: "Roles y Permisos",
      collapsed: true,
      autogenerate: {
        directory: "rolesAndPermissions"
      }
    }, {
      label: "Perfil",
      collapsed: true,
      autogenerate: {
        directory: "profile"
      }
    }
  ]
  }),
  tailwind({
    applyBaseStyles: false,
  }),

  react()
]
});