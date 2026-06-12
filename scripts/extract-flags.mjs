import fs from 'fs';

const js = fs.readFileSync(new URL('../ampay-bundle.js', import.meta.url), 'utf8');
const match = js.match(/Zo="(data:image\/svg\+xml[^"]+)"/);
if (match) {
  const svg = decodeURIComponent(match[1].replace('data:image/svg+xml,', ''));
  fs.writeFileSync(new URL('../client/public/assets/japan-flag.svg', import.meta.url), svg);
  console.log('Saved japan-flag.svg');
}
