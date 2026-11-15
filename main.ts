// makefun-coin-promo-01 — "Wanted Builders" ($WANTED) on pump.fun.
// The coin itself is the entry: this program only hands the house the
// launch receipt. It reads LAUNCH.json (the coin's mint and the signature
// of the transaction that created it), checks both values are present and
// shaped like base58, and writes the file to /output, where the gate
// reads it. Nothing this program writes about the coin is judged — the
// house reads the coin itself from pump.fun (logo, name, ticker,
// description, links) and hands that to the judge.
//
// Node 22, standard library only. No network, no wall clock, no files
// outside the repository, so the grader's two runs write the same bytes.
//
// Local run (as the grader does):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const BASE58 = /^[1-9A-HJ-NP-Za-km-z]+$/;

const src = join(BOT_DIR, 'LAUNCH.json');
let launch: unknown;
try {
  launch = JSON.parse(readFileSync(src, 'utf-8'));
} catch (err) {
  console.error(`LAUNCH.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

const mint = (launch as { mint?: unknown }).mint;
const createSignature = (launch as { create_signature?: unknown }).create_signature;
if (
  typeof mint !== 'string' ||
  !BASE58.test(mint) ||
  mint.length < 32 ||
  mint.length > 44 ||
  typeof createSignature !== 'string' ||
  !BASE58.test(createSignature) ||
  createSignature.length < 32 ||
  createSignature.length > 88
) {
  console.error('LAUNCH.json must hold a base58 mint (32-44 chars) and a base58 create_signature (32-88 chars).');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'LAUNCH.json'), JSON.stringify(launch, null, 2) + '\n');
