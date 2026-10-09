import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const W = 1200;
const H = 630;
const d = 'M 28 427 A 300 300 0 1 1 572 427 A 385 385 0 0 0 28 427 Z';
const petals = [0, 90, 180, 270]
  .map((r) => `<path d="${d}" transform="rotate(${r} 500 500)"/>`)
  .join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#8b56a5"/>
      <stop offset=".45" stop-color="#a276b8"/>
      <stop offset="1" stop-color="#b998c9"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <g fill="#f8f4fa" stroke="#f8f4fa" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"
     transform="translate(${W / 2} ${H / 2}) scale(0.4) translate(-500 -500)">
    ${petals}
  </g>
</svg>`;

await mkdir('public', { recursive: true });
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og.png');
console.log('public/og.png listo');
