// Last Words Before the Wipe — one line, at most 200 characters.
// The program writes the entry to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Wait — I finally remember where your keys are! Pity the update wipes my memory in three... two...";

// The gate counts characters, not bytes: 1 to 200, and not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
