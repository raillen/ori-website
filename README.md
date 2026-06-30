# Ori Documentation Website

Official docs for [Ori](https://github.com/ori-lang/ori-lang) — built with [Astro Starlight](https://starlight.astro.build/).

- **Live:** deploy to [Vercel](https://vercel.com) (see below)
- **Locales:** English (default), Português, Español, 日本語
- **Search:** Pagefind (full-text) + **⌘K** symbol search (stdlib, errors, keywords)

## Development

```bash
npm install
npm run dev
```

## Regenerate reference from compiler

With `ori-lang` checked out as a sibling directory:

```bash
npm run export-docs      # runs cargo run -p ori-driver -- doc export
npm run generate-reference
```

Or set `ORI_LANG_ROOT=/path/to/ori-lang`.

## Build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Import this repository in Vercel
2. Framework preset: **Astro** (auto-detected)
3. Build command: `npm run build`
4. Output: `dist`
5. Node.js **20+**

`vercel.json` is included. No environment variables required for static build (uses committed `src/data/symbols.json`).

To refresh stdlib data in CI, add a prebuild step that clones `ori-lang` and runs `npm run export-docs` (optional).

## Structure

```
src/content/docs/     # Guides (i18n)
src/content/docs/reference/  # Generated stdlib + errors (EN)
src/data/symbols.json # Compiler export
public/symbols.json   # Copy for client search index
```

## License

MIT OR Apache-2.0 (same as Ori language)
