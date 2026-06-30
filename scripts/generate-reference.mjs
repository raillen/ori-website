/**
 * Generate Starlight MDX reference pages from symbols.json.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "src", "data", "symbols.json");
const refDir = path.join(root, "src", "content", "docs", "reference");

if (!fs.existsSync(dataPath)) {
  console.warn("symbols.json missing — run npm run export-docs first");
  process.exit(0);
}

const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

function slugify(s) {
  return s.replace(/\./g, "-").replace(/[^a-zA-Z0-9-]/g, "").toLowerCase();
}

function layerBadge(layer) {
  return layer === "runtime" ? "Layer 1 · runtime" : "Layer 2 · .orl";
}

const stdlibDocsPath = path.join(root, "src", "data", "stdlib-docs.json");
const stdlibDocs = fs.existsSync(stdlibDocsPath)
  ? JSON.parse(fs.readFileSync(stdlibDocsPath, "utf8"))
  : {};

// Clean generated dirs
for (const sub of ["stdlib", "errors"]) {
  const p = path.join(refDir, sub);
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

fs.mkdirSync(path.join(refDir, "stdlib"), { recursive: true });
fs.mkdirSync(path.join(refDir, "errors"), { recursive: true });

// Index
const modules = [...new Set(data.symbols.map((s) => s.module))].sort();
fs.writeFileSync(
  path.join(refDir, "index.mdx"),
  `---
title: Reference overview
description: Stdlib modules, diagnostic codes, and language symbols for Ori.
---

Browse the **standard library** by module or search with **⌘K** (symbol search in the header).

## Stdlib modules

${modules.map((m) => `- [${m}](/reference/stdlib/${slugify(m)}/)`).join("\n")}

## Diagnostic codes

See [Error catalog](/reference/errors/) (${data.errors.length} curated entries).

## Keywords

${data.keywords.map((k) => `\`${k}\``).join(", ")}
`,
);

// Stdlib modules
const byModule = new Map();
for (const sym of data.symbols) {
  if (!byModule.has(sym.module)) byModule.set(sym.module, []);
  byModule.get(sym.module).push(sym);
}

for (const [module, symbols] of [...byModule.entries()].sort()) {
  const slug = slugify(module);
  const dir = path.join(refDir, "stdlib", slug);
  fs.mkdirSync(dir, { recursive: true });

  const rows = symbols
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((s) => {
      const aliasText = s.aliases?.length ? ` · **Aliases:** ${s.aliases.map((a) => `\`${a}\``).join(", ")}` : "";
      const srcText = s.source ? ` · **Source:** \`${s.source}\`` : "";
      const meta = `*${layerBadge(s.layer)}*${aliasText}${srcText}`;
      
      let docBlock = "";
      if (stdlibDocs[s.id]) {
        const d = stdlibDocs[s.id];
        docBlock = `\n\n${d.description}\n\n* **Applicability:** ${d.applicability}\n\n\`\`\`ori\n// Example\n${d.example}\n\`\`\``;
      }

      return `### \`${s.name}\`

\`\`\`ori
${s.signature}
\`\`\`

${meta}${docBlock}
`;
    })
    .join("\n");

  let moduleDesc = `Standard library module \`${module}\`.`;
  if (stdlibDocs[module] && typeof stdlibDocs[module] === "object" && stdlibDocs[module].description) {
    moduleDesc = stdlibDocs[module].description;
  }

  fs.writeFileSync(
    path.join(dir, "index.mdx"),
    `---
title: "${module}"
description: "${moduleDesc.split("\n")[0].replace(/"/g, '\\"')}"
---

${moduleDesc}

${rows}
`,
  );
}

// Errors
const errorPages = data.errors
  .map((e) => {
    return `## \`${e.code}\`

**Severity:** \`${e.severity}\`

${e.summary}

**Cause:** ${e.cause}

**Fix:** ${e.fix}

`;
  })
  .join("\n");

fs.writeFileSync(
  path.join(refDir, "errors", "index.mdx"),
  `---
title: Error catalog
description: Diagnostic codes with causes and suggested fixes.
---

Use \`ori explain <code>\` in the CLI for the same content in the terminal.

${errorPages}
`,
);

// Copy symbols to public for client search
const publicData = path.join(root, "public", "symbols.json");
fs.mkdirSync(path.dirname(publicData), { recursive: true });
fs.copyFileSync(dataPath, publicData);

console.log(
  `Generated ${byModule.size} stdlib module pages, ${data.errors.length} errors`,
);
