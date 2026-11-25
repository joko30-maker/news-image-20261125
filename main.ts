// news-image-20261125 — "The World Today", Wednesday 25 November 2026.
//
// The entry itself is a single front-page poster (entry.png, 1024x1024)
// summing up the day's world news. This program has one job: place that
// image at the output location the grader expects, byte for byte, so two
// runs always produce identical output.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

// Local runs set MAKEFUN_OUTPUT_DIR; the grading sandbox writes to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`entry.png is missing next to main.ts (${source})`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target} from ${source}`);
