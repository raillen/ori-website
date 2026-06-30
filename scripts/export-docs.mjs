/**
 * Regenerate symbols.json from the Ori compiler (ori-lang repo).
 * Set ORI_LANG_ROOT to the compiler workspace, or use ../ori-lang by default.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const oriLang =
  process.env.ORI_LANG_ROOT ??
  path.resolve(root, "..", "ori-lang");
const out = path.join(root, "src", "data", "symbols.json");

console.log(`Exporting docs from ${oriLang} → ${out}`);

const result = spawnSync(
  "cargo",
  ["run", "-p", "ori-driver", "--", "doc", "export", "--out", out],
  { cwd: oriLang, stdio: "inherit", shell: process.platform === "win32" },
);

if (result.status !== 0) {
  console.error("export-docs failed — keeping committed symbols.json if present");
  process.exit(result.status ?? 1);
}

console.log("symbols.json updated");
