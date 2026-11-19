import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const backend = path.resolve(root, '../backend');
const assets = ['bid_workbench.html', 'bid_workbench.js', 'workbench_theme.css',
  'admin_dashboard.html', 'admin_dashboard.js', 'admin_dashboard.css'];
const manifest = path.join(backend, 'PACKAGE_MANIFEST.sha256');
const lines = (await readFile(manifest, 'utf8')).trimEnd().split(/\r?\n/);
const hashes = new Map();
for (const name of assets) {
  const bytes = await readFile(path.join(root, 'dist', name));
  hashes.set('frontend/' + name, createHash('sha256').update(bytes).digest('hex'));
}
await mkdir(path.join(backend, 'frontend'), { recursive: true });
for (const name of assets) {
  await copyFile(path.join(root, 'dist', name), path.join(backend, 'frontend', name));
}
const updated = lines.map(line => {
  const key = line.slice(66);
  return hashes.has(key) ? hashes.get(key) + '  ' + key : line;
});
await writeFile(manifest, updated.join('\n') + '\n');
console.log('Installed both screens in the sibling backend.');
