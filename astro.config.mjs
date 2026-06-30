import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://ori-lang.dev",
  integrations: [
    starlight({
      title: "Ori",
      tagline: "An evolving language to study compilers, runtimes, AI, and language design.",
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

      sidebar: [
        {
          label: "Start",
          translations: {
            "pt-BR": "Começar",
            es: "Empezar",
            ja: "はじめる",
          },
          items: [
            {
              label: "Introduction",
              link: "/",
              translations: {
                "pt-BR": "Introdução",
                es: "Introducción",
                ja: "イントロダクション",
              },
            },
            {
              label: "Language Manifesto",
              link: "/manifesto/",
              translations: {
                "pt-BR": "Manifesto da Linguagem",
                es: "Manifesto del Lenguaje",
                ja: "言語マニフェスト",
              },
            },
            {
              label: "Getting started",
              link: "/getting-started/",
              translations: {
                "pt-BR": "Primeiros passos",
                es: "Primeros pasos",
                ja: "はじめに",
              },
            },
            {
              label: "Hello world",
              link: "/examples/hello-world/",
              translations: {
                "pt-BR": "Hello world",
                es: "Hello world",
                ja: "Hello world",
              },
            },
          ],
        },
        {
          label: "Language",
          translations: {
            "pt-BR": "Linguagem",
            es: "Lenguaje",
            ja: "言語",
          },
          items: [
            {
              label: "Types & values",
              link: "/language/types/",
            },
            {
              label: "Modules and imports",
              link: "/language/modules-and-imports/",
              translations: {
                "pt-BR": "Módulos e imports",
                es: "Módulos e imports",
                ja: "モジュールと import",
              },
            },
            {
              label: "Composition and traits",
              link: "/language/composition-and-traits/",
              translations: {
                "pt-BR": "Composição e traits",
                es: "Composición y traits",
                ja: "合成と traits",
              },
            },
            {
              label: "Control flow and data",
              link: "/language/control-flow-and-data/",
              translations: {
                "pt-BR": "Fluxo e dados",
                es: "Flujo y datos",
                ja: "制御フローとデータ",
              },
            },
            {
              label: "Errors, null, void",
              link: "/language/errors-null-void/",
              translations: {
                "pt-BR": "Erros, null, void",
                es: "Errores, null, void",
                ja: "エラーと null/void",
              },
            },
            {
              label: "If expressions",
              link: "/language/if-expressions/",
            },
            {
              label: "Standard library in practice",
              link: "/language/stdlib-in-practice/",
              translations: {
                "pt-BR": "Stdlib na prática",
                es: "Stdlib en práctica",
                ja: "標準ライブラリ実践",
              },
            },
          ],
        },
        {
          label: "Cookbook",
          translations: {
            "pt-BR": "Guias práticos",
            es: "Recetario",
            ja: "クックブック",
          },
          items: [
            {
              label: "Overview",
              link: "/cookbook/",
              translations: {
                "pt-BR": "Visão geral",
                es: "Vista general",
                ja: "概要",
              },
            },
            {
              label: "Write clean Ori",
              link: "/cookbook/write-clean-ori/",
              translations: {
                "pt-BR": "Escrever Ori limpo",
                es: "Escribir Ori limpio",
                ja: "読みやすい Ori",
              },
            },
            {
              label: "Organize code",
              link: "/cookbook/organize-code/",
              translations: {
                "pt-BR": "Organizar código",
                es: "Organizar código",
                ja: "コード構成",
              },
            },
            {
              label: "Project tutorials",
              link: "/cookbook/projects/",
              translations: {
                "pt-BR": "Tutoriais de projeto",
                es: "Tutoriales de proyecto",
                ja: "プロジェクトチュートリアル",
              },
            },
            {
              label: "Modular calculator",
              link: "/cookbook/projects/modular-calculator/",
              translations: {
                "pt-BR": "Calculadora modular",
                es: "Calculadora modular",
                ja: "モジュラー計算機",
              },
            },
            {
              label: "Terminal bank",
              link: "/cookbook/projects/terminal-bank/",
              translations: {
                "pt-BR": "Banco de terminal",
                es: "Banco de terminal",
                ja: "ターミナル銀行",
              },
            },
            {
              label: "Book library",
              link: "/cookbook/projects/book-library/",
              translations: {
                "pt-BR": "Biblioteca de livros",
                es: "Biblioteca de libros",
                ja: "本のライブラリ",
              },
            },
            {
              label: "Terminal to-do",
              link: "/cookbook/projects/terminal-todo/",
              translations: {
                "pt-BR": "To-do no terminal",
                es: "To-do en terminal",
                ja: "ターミナル To-do",
              },
            },
          ],
        },
        {
          label: "Technical Details",
          translations: {
            "pt-BR": "Detalhes Técnicos",
            es: "Detalles Técnicos",
            ja: "技術的な詳細",
          },
          items: [
            {
              label: "Compiler & Dev",
              link: "/development/",
              translations: {
                "pt-BR": "Compilador & Dev",
                es: "Compilador y Dev",
                ja: "コンパイラと開発",
              },
            },
            {
              label: "CLI Overview",
              link: "/cli/overview/",
              translations: {
                "pt-BR": "Visão Geral da CLI",
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
            "pt-BR": "Referência",
            es: "Referencia",
            ja: "リファレンス",
          },
        },
      ],
    }),
  ],
});
