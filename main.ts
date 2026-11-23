import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Emoji, One Smile — entry: 🤗 (U+1F917 HUGGING FACE).
// A smiling face with open arms: warm at first glance, universal,
// clearly chosen rather than the default smiley, and right for a
// stranger — no intimacy, sarcasm, or flirtation.
const EMOJI = "🤗";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, EMOJI, "utf8");

// Guard: the gate requires exactly one emoji, 1–8 UTF-8 characters,
// no trailing newline. Fail loudly instead of submitting a bad file.
const written = Buffer.from(EMOJI, "utf8");
if ([...EMOJI].length !== 1 || written.length !== 4) {
  throw new Error(`entry must be exactly one emoji (4 bytes), got ${written.length} bytes`);
}
