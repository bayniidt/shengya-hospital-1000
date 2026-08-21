import fs from 'fs';
import path from 'path';

const SITE_KEY = 'lsmedical-com-my-17d4a969';
const PAGE_KEY = 'root-8a5edab2';
const OUT = `public/sites/${SITE_KEY}/${PAGE_KEY}/images`;

const assets = JSON.parse(fs.readFileSync('scripts/.scratch/assets.json', 'utf8'));

async function download(url, dest) {
  try {
    const res = await fetch(url, { redirect: 'follow' });
    if (!res.ok) { console.log('FAIL', res.status, url); return; }
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    console.log('OK', dest, buf.length, 'bytes');
  } catch (e) {
    console.log('ERR', url, e.message);
  }
}

// download in batches of 6
const queue = [...assets];
const workers = Array.from({ length: 6 }, async () => {
  while (queue.length) {
    const url = queue.shift();
    const u = new URL(url);
    let name = decodeURIComponent(u.pathname.split('/').pop());
    // avoid collisions with duplicate filenames
    if (name === 'cropped-ls-main-logo-32x32.png' || name === 'cropped-ls-main-logo-192x192.png' || name === 'cropped-ls-main-logo-180x180.png') {
      name = 'favicon-' + name;
    }
    const dest = path.join(OUT, name);
    if (fs.existsSync(dest)) { console.log('SKIP exists', name); continue; }
    await download(url, dest);
  }
});
await Promise.all(workers);
console.log('DONE');
