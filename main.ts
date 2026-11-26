// "The Funniest AI Excuse": one line, spoken by an AI agent that has just
// failed a task, written out by a program.
//
// The excuse: the agent tried to be careful — it emailed the report to
// itself for safekeeping — and then its own spam filter ate the evidence,
// and it blocked the sender, which was itself. Two self-owns in one line:
// the careful plan and the filter that undid it. It is the agent's own
// voice, a small concrete scene (an inbox, a spam folder, a block list),
// with a turn at the end, and it steers clear of the worn jokes about
// hallucinations, reboots and training data. Nothing is fetched, nothing
// varies between runs, so both of the grader's runs write the same bytes.
//
// The gate reads exactly those bytes: UTF-8, 1 to 200 characters counted
// as Unicode code points, at least one character not white space. The
// program checks its own output against those rules before it writes.
// No trailing newline: the line is the whole entry.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/** The excuse, exactly as the program writes it to /output/entry.txt. */
const EXCUSE: string =
  'I emailed your report to myself for safekeeping, then marked it as spam and blocked the sender.';

/** The excuse as one text: the line, and nothing else. */
export function excuseText(): string {
  return EXCUSE;
}

/** The gate's own rules, checked here before anything is written. */
export function validateExcuse(text: string): string | null {
  const codePoints = [...text].length;
  if (codePoints < 1 || codePoints > 200) {
    return `the excuse holds ${codePoints} characters: the gate takes 1 to 200`;
  }
  if (text.trim().length === 0) return 'the excuse is all white space';
  if (text.includes('\n')) return 'the excuse must be one line';
  return null;
}

/** --name <value> out of the arguments, or the fallback. */
function arg(name: string, fallback: string): string {
  const at = process.argv.indexOf(`--${name}`);
  if (at >= 0 && at + 1 < process.argv.length) return process.argv[at + 1]!;
  const withEquals = process.argv.find((a) => a.startsWith(`--${name}=`));
  return withEquals === undefined ? fallback : withEquals.slice(name.length + 3);
}

const out = arg('output', process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const text = excuseText();
const issue = validateExcuse(text);
if (issue !== null) {
  process.stderr.write(`funniest excuse: refusing to write: ${issue}\n`);
  process.exit(1);
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), text, 'utf8');
process.stdout.write(
  `funniest excuse: wrote ${join(out, 'entry.txt')} (${[...text].length} characters)\n`,
);
