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
          href: "https://github.com/raillen/ori-lang",
        },
      ],
      components: {
        Hero: "./src/components/Hero.astro",
      },
      customCss: ["./src/styles/custom.css"],
      head: [
        // Anti-FOUC: apply theme before paint
        {
          tag: "script",
          attrs: { src: "/theme-init.js" },
        },
        // Geist Variable (UI) + Geist Mono Variable (code)
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://cdn.jsdelivr.net",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/@fontsource-variable/geist@5.1.1/index.css",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/@fontsource-variable/geist-mono@5.1.1/index.css",
          },
        },
        // Inter + JetBrains Mono (fallbacks)
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.1.1/400.css",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.1.1/500.css",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.1.1/600.css",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.1.1/700.css",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5.1.1/400.css",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5.1.1/500.css",
          },
        },
        // Noto Sans JP (Japanese)
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/@fontsource-variable/noto-sans-jp@5.1.1/index.css",
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
          translations: {
            "pt-BR": "Referência",
            es: "Referencia",
            ja: "リファレンス",
          },
          items: [
            { label: "Overview", link: "/reference/" },
            {
              label: "Error Codes",
              link: "/reference/errors/",
            },
            {
              label: "Stdlib",
              collapsed: true,
              items: [
                {
                  label: "Core",
                  collapsed: true,
                  items: [
                    { label: "ori", link: "/reference/stdlib/ori/" },
                    { label: "int", link: "/reference/stdlib/int/" },
                    { label: "float", link: "/reference/stdlib/float/" },
                    { label: "string", link: "/reference/stdlib/string/" },
                    { label: "len", link: "/reference/stdlib/len/" },
                  ],
                },
                {
                  label: "Collections",
                  collapsed: true,
                  items: [
                    { label: "ori.list", link: "/reference/stdlib/ori-list/" },
                    { label: "ori.map", link: "/reference/stdlib/ori-map/" },
                    { label: "ori.set", link: "/reference/stdlib/ori-set/" },
                    { label: "ori.queue", link: "/reference/stdlib/ori-queue/" },
                    { label: "ori.stack", link: "/reference/stdlib/ori-stack/" },
                    { label: "ori.deque", link: "/reference/stdlib/ori-deque/" },
                    { label: "ori.linked_list", link: "/reference/stdlib/ori-linkedlist/" },
                    { label: "ori.doubly_linked_list", link: "/reference/stdlib/ori-doublylinkedlist/" },
                    { label: "ori.hash_table", link: "/reference/stdlib/ori-hashtable/" },
                    { label: "ori.heap", link: "/reference/stdlib/ori-heap/" },
                    { label: "ori.tree", link: "/reference/stdlib/ori-tree/" },
                    { label: "ori.graph", link: "/reference/stdlib/ori-graph/" },
                  ],
                },
                {
                  label: "I/O & System",
                  collapsed: true,
                  items: [
                    { label: "ori.io", link: "/reference/stdlib/ori-io/" },
                    { label: "ori.fs", link: "/reference/stdlib/ori-fs/" },
                    { label: "ori.os", link: "/reference/stdlib/ori-os/" },
                    { label: "ori.net", link: "/reference/stdlib/ori-net/" },
                    { label: "ori.process", link: "/reference/stdlib/ori-process/" },
                    { label: "ori.path", link: "/reference/stdlib/ori-path/" },
                    { label: "ori.json", link: "/reference/stdlib/ori-json/" },
                    { label: "ori.format", link: "/reference/stdlib/ori-format/" },
                    { label: "ori.convert", link: "/reference/stdlib/ori-convert/" },
                    { label: "ori.time", link: "/reference/stdlib/ori-time/" },
                    { label: "ori.random", link: "/reference/stdlib/ori-random/" },
                    { label: "ori.bytes", link: "/reference/stdlib/ori-bytes/" },
                  ],
                },
                {
                  label: "Concurrency",
                  collapsed: true,
                  items: [
                    { label: "ori.channel", link: "/reference/stdlib/ori-channel/" },
                    { label: "ori.concurrent.utils", link: "/reference/stdlib/ori-concurrent-utils/" },
                    { label: "ori.task", link: "/reference/stdlib/ori-task/" },
                    { label: "ori.atomic", link: "/reference/stdlib/ori-atomic/" },
                    { label: "ori.lazy", link: "/reference/stdlib/ori-lazy/" },
                  ],
                },
                {
                  label: "Algorithms",
                  collapsed: true,
                  items: [
                    { label: "ori.list.algorithms", link: "/reference/stdlib/ori-list-algorithms/" },
                    { label: "ori.map.algorithms", link: "/reference/stdlib/ori-map-algorithms/" },
                    { label: "ori.set.algorithms", link: "/reference/stdlib/ori-set-algorithms/" },
                    { label: "ori.graph.algorithms", link: "/reference/stdlib/ori-graph-algorithms/" },
                    { label: "ori.tree.algorithms", link: "/reference/stdlib/ori-tree-algorithms/" },
                    { label: "ori.math.algorithms", link: "/reference/stdlib/ori-math-algorithms/" },
                    { label: "ori.string.algorithms", link: "/reference/stdlib/ori-string-algorithms/" },
                    { label: "ori.bytes.algorithms", link: "/reference/stdlib/ori-bytes-algorithms/" },
                  ],
                },
                {
                  label: "Utils",
                  collapsed: true,
                  items: [
                    { label: "ori.list.utils", link: "/reference/stdlib/ori-list-utils/" },
                    { label: "ori.map.utils", link: "/reference/stdlib/ori-map-utils/" },
                    { label: "ori.set.utils", link: "/reference/stdlib/ori-set-utils/" },
                    { label: "ori.string.utils", link: "/reference/stdlib/ori-string-utils/" },
                    { label: "ori.math.utils", link: "/reference/stdlib/ori-math-utils/" },
                    { label: "ori.io.utils", link: "/reference/stdlib/ori-io-utils/" },
                    { label: "ori.fs.utils", link: "/reference/stdlib/ori-fs-utils/" },
                    { label: "ori.os.utils", link: "/reference/stdlib/ori-os-utils/" },
                    { label: "ori.net.utils", link: "/reference/stdlib/ori-net-utils/" },
                    { label: "ori.process.utils", link: "/reference/stdlib/ori-process-utils/" },
                    { label: "ori.json.utils", link: "/reference/stdlib/ori-json-utils/" },
                    { label: "ori.format.utils", link: "/reference/stdlib/ori-format-utils/" },
                    { label: "ori.convert.utils", link: "/reference/stdlib/ori-convert-utils/" },
                    { label: "ori.time.utils", link: "/reference/stdlib/ori-time-utils/" },
                    { label: "ori.random.utils", link: "/reference/stdlib/ori-random-utils/" },
                    { label: "ori.bytes.utils", link: "/reference/stdlib/ori-bytes-utils/" },
                    { label: "ori.iter.utils", link: "/reference/stdlib/ori-iter-utils/" },
                    { label: "ori.deque.utils", link: "/reference/stdlib/ori-deque-utils/" },
                    { label: "ori.linked_list.utils", link: "/reference/stdlib/ori-linkedlist-utils/" },
                    { label: "ori.doubly_linked_list.utils", link: "/reference/stdlib/ori-doublylinkedlist-utils/" },
                    { label: "ori.hash_table.utils", link: "/reference/stdlib/ori-hashtable-utils/" },
                    { label: "ori.heap.utils", link: "/reference/stdlib/ori-heap-utils/" },
                    { label: "ori.queue.utils", link: "/reference/stdlib/ori-queue-utils/" },
                    { label: "ori.stack.utils", link: "/reference/stdlib/ori-stack-utils/" },
                  ],
                },
                {
                  label: "Testing",
                  collapsed: true,
                  items: [
                    { label: "ori.test", link: "/reference/stdlib/ori-test/" },
                    { label: "ori.test.utils", link: "/reference/stdlib/ori-test-utils/" },
                    { label: "ori.validate", link: "/reference/stdlib/ori-validate/" },
                  ],
                },
              ],
            },
          ],
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
