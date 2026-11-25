// One-Line Laugh-Off — make.fun bounty u-zkhiel-one-line-laugh-off-714618ae
// Entry: a single funny line about a smartwatch congratulating its owner.
// 115 characters (max 200), one line, no trailing newline.
// Writes to /output/entry.txt (or $OUTPUT_DIR/entry.txt locally).
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My smartwatch congratulated me on 10,000 steps — it counted the three times I paced while waiting for my microwave.";

// Code points, so an astral character counts as one.
const LENGTH = [...TEXT].length;

const PROBLEMS: string[] = [];
if (LENGTH < 1 || LENGTH > 200) {
  PROBLEMS.push(`entry must be 1-200 characters, got ${LENGTH}`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  PROBLEMS.push("entry must be a single line with no line breaks");
}
if (TEXT.trim().length === 0) {
  PROBLEMS.push("entry must not be only whitespace");
}
if (TEXT !== TEXT.trim()) {
  PROBLEMS.push("entry must not have leading or trailing whitespace");
}
if (PROBLEMS.length > 0) {
  throw new Error(PROBLEMS.join("; "));
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// A plain string write adds no trailing newline.
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
