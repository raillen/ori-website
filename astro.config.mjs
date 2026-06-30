import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://ori-lang.dev",
  integrations: [
    starlight({
      title: "Ori",
      tagline: "A reading-first, explicitly typed programming language",
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        pt: {
          label: "Português",
          lang: "pt-BR",
        },
        es: {
          label: "Español",
          lang: "es",
        },
        ja: {
          label: "日本語",
          lang: "ja",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ori-lang/ori-lang",
        },
      ],
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+JP:wght@400;500;700&display=swap",
          },
        },
      ],
      components: {
        SiteTitle: "./src/components/SiteTitle.astro",
      },
      sidebar: [
        {
          label: "Start",
          translations: {
            pt: "Começar",
            es: "Empezar",
            ja: "はじめる",
          },
          items: [
            {
              label: "Introduction",
              link: "/",
              translations: {
                pt: "Introdução",
                es: "Introducción",
                ja: "イントロダクション",
              },
            },
            {
              label: "Language Manifesto",
              link: "/manifesto/",
              translations: {
                pt: "Manifesto da Linguagem",
                es: "Manifesto del Lenguaje",
                ja: "言語マニフェスト",
              },
            },
            {
              label: "Getting started",
              link: "/getting-started/",
              translations: {
                pt: "Primeiros passos",
                es: "Primeros pasos",
                ja: "はじめに",
              },
            },
            {
              label: "Hello world",
              link: "/examples/hello-world/",
              translations: {
                pt: "Hello world",
                es: "Hello world",
                ja: "Hello world",
              },
            },
          ],
        },
        {
          label: "Language",
          translations: {
            pt: "Linguagem",
            es: "Lenguaje",
            ja: "言語",
          },
          items: [
            {
              label: "Types & values",
              link: "/language/types/",
            },
            {
              label: "Errors, null, void",
              link: "/language/errors-null-void/",
              translations: {
                pt: "Erros, null, void",
                es: "Errores, null, void",
                ja: "エラーと null/void",
              },
            },
            {
              label: "If expressions",
              link: "/language/if-expressions/",
            },
          ],
        },
        {
          label: "Technical Details",
          translations: {
            pt: "Detalhes Técnicos",
            es: "Detalles Técnicos",
            ja: "技術的な詳細",
          },
          items: [
            {
              label: "Compiler & Dev",
              link: "/development/",
              translations: {
                pt: "Compilador & Dev",
                es: "Compilador y Dev",
                ja: "コンパイラと開発",
              },
            },
            {
              label: "CLI Overview",
              link: "/cli/overview/",
              translations: {
                pt: "Visão Geral da CLI",
                es: "Descripción de CLI",
                ja: "CLIの概要",
              },
            },
            { label: "doctor", link: "/cli/doctor/" },
            { label: "explain", link: "/cli/explain/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
          translations: {
            pt: "Referência",
            es: "Referencia",
            ja: "リファレンス",
          },
        },
      ],
    }),
  ],
});
