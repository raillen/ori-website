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
        {
          icon: "github",
          label: "Releases",
          href: "https://github.com/raillen/ori-lang/releases",
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
              label: "Language map",
              link: "/language/feature-map/",
              translations: {
                "pt-BR": "Mapa da linguagem",
                es: "Mapa del lenguaje",
                ja: "Language map",
              },
            },
            {
              label: "Types & values",
              link: "/language/types/",
            },
            {
              label: "Lexical writing",
              link: "/language/lexical-writing/",
              translations: {
                "pt-BR": "Léxico e escrita",
                es: "Escritura léxica",
                ja: "Lexical writing",
              },
            },
            {
              label: "Functions and closures",
              link: "/language/functions-and-closures/",
              translations: {
                "pt-BR": "Funções e closures",
                es: "Funciones y closures",
                ja: "Functions and closures",
              },
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
              label: "Statements and patterns",
              link: "/language/statements-and-patterns/",
              translations: {
                "pt-BR": "Statements e padrões",
                es: "Sentencias y patrones",
                ja: "Statements and patterns",
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
              label: "Error handling",
              link: "/language/error-handling/",
              translations: {
                "pt-BR": "Tratamento de erros",
                es: "Manejo de errores",
                ja: "Error handling",
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
              label: "Resources and memory",
              link: "/language/resources-and-memory/",
              translations: {
                "pt-BR": "Recursos e memória",
                es: "Recursos y memoria",
                ja: "Resources and memory",
              },
            },
            {
              label: "Async and concurrency",
              link: "/language/async-and-concurrency/",
              translations: {
                "pt-BR": "Async e concorrência",
                es: "Async y concurrencia",
                ja: "Async and concurrency",
              },
            },
            {
              label: "Advanced types",
              link: "/language/advanced-types-and-generics/",
              translations: {
                "pt-BR": "Tipos avançados",
                es: "Tipos avanzados",
                ja: "Advanced types",
              },
            },
            {
              label: "Advanced traits",
              link: "/language/advanced-traits/",
              translations: {
                "pt-BR": "Traits avançadas",
                es: "Traits avanzados",
                ja: "Advanced traits",
              },
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
              label: "Error-handling patterns",
              link: "/cookbook/error-handling-patterns/",
              translations: {
                "pt-BR": "Padrões de erro",
                es: "Patrones de error",
                ja: "Error-handling patterns",
              },
            },
            {
              label: "Tests and docs",
              link: "/cookbook/testing-and-docs/",
              translations: {
                "pt-BR": "Testes e docs",
                es: "Pruebas y docs",
                ja: "Tests and docs",
              },
            },
            {
              label: "Stdlib recipes",
              link: "/cookbook/stdlib-recipes/",
              translations: {
                "pt-BR": "Receitas de stdlib",
                es: "Recetas de stdlib",
                ja: "Stdlib recipes",
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
            {
              label: "JSON to-do",
              link: "/cookbook/projects/json-todo/",
              translations: {
                "pt-BR": "To-do com JSON",
                es: "To-do con JSON",
                ja: "JSON to-do",
              },
            },
            {
              label: "Log analyzer",
              link: "/cookbook/projects/log-analyzer/",
              translations: {
                "pt-BR": "Analisador de logs",
                es: "Analizador de logs",
                ja: "Log analyzer",
              },
            },
            {
              label: "File organizer",
              link: "/cookbook/projects/file-organizer/",
              translations: {
                "pt-BR": "Organizador de arquivos",
                es: "Organizador de archivos",
                ja: "File organizer",
              },
            },
            {
              label: "Async worker queue",
              link: "/cookbook/projects/async-worker-queue/",
              translations: {
                "pt-BR": "Fila async",
                es: "Cola async",
                ja: "Async worker queue",
              },
            },
            {
              label: "Route planner",
              link: "/cookbook/projects/route-planner/",
              translations: {
                "pt-BR": "Planejador de rotas",
                es: "Planificador de rutas",
                ja: "Route planner",
              },
            },
            {
              label: "Config loader",
              link: "/cookbook/projects/config-loader/",
              translations: {
                "pt-BR": "Loader de config",
                es: "Cargador de config",
                ja: "Config loader",
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
            {
              label: "CLI workflows",
              link: "/cli/workflows/",
              translations: {
                "pt-BR": "Fluxos da CLI",
                es: "Flujos de CLI",
                ja: "CLI workflows",
              },
            },
            {
              label: "Runtime & backends",
              link: "/development/runtime-and-backends/",
              translations: {
                "pt-BR": "Runtime e backends",
                es: "Runtime y backends",
                ja: "Runtime and backends",
              },
            },
            {
              label: "Stdlib architecture",
              link: "/development/stdlib-architecture/",
              translations: {
                "pt-BR": "Arquitetura da stdlib",
                es: "Arquitectura de stdlib",
                ja: "Stdlib architecture",
              },
            },
            {
              label: "LSP and editor",
              link: "/development/lsp-and-editor/",
              translations: {
                "pt-BR": "LSP e editor",
                es: "LSP y editor",
                ja: "LSP and editor",
              },
            },
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
        {
          label: "Downloads",
          link: "https://github.com/raillen/ori-lang/releases",
          translations: {
            "pt-BR": "Downloads",
            es: "Descargas",
            ja: "ダウンロード",
          },
        },
      ],
    }),
  ],
});
