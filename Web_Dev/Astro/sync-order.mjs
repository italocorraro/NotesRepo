import { readdirSync, readFileSync, renameSync } from 'node:fs';
import { join, dirname } from 'node:path';

const DIR = process.argv[2] ?? './src/content/docs';
const files = readdirSync(DIR, { recursive: true }).filter((f) => f.endsWith('.md'));

for (const rel of files) {
  const path = join(DIR, rel);
  const text = readFileSync(path, 'utf8');
  const m = text.match(/^---\r?\n[\s\S]*?^order:\s*(\d+)/m);
  if (!m) { console.warn(`Nessun order: ${rel}`); continue; }

  const base = rel.split(/[\\/]/).pop().replace(/^\d+-/, '');
  const newName = `${m[1].padStart(2, '0')}-${base}`;
  const target = join(dirname(path), newName);
  if (target !== path) {
    renameSync(path, target);
    console.log(`${rel} -> ${newName}`);
  }
}