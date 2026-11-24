import * as fs from "node:fs";

// One satirical sentence roasting lawmakers who would regulate AI,
// crypto or the internet but cannot convert a file to PDF, 320
// characters or less. The setup is the senator's authority — author
// of the 400-page AI Safety Act — and the undercut is the file he
// cannot convert: print it, scan it, fax it back, because a PDF is
// something you plug in.
const text =
  "The senator who wrote the 400-page AI Safety Act — the law deciding what every model on earth may say — just asked his staff to print his Word draft, scan it, and fax it back, because he still believes a PDF is something you plug in.";

// Gate: one sentence, 1–320 characters, UTF-8, not only whitespace.
// The line is 233 characters; it is written with no trailing newline,
// so the file is 237 bytes — the smaller text wins an exact tie.
if (text.length !== 233) {
  throw new Error(`Expected the 233-character roast, got ${text.length}`);
}
if (text.length < 1 || text.length > 320) {
  throw new Error(`Expected 1–320 characters, got ${text.length}`);
}
if (text.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("Entry must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
