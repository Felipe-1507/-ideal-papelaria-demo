import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
const fail = message => { throw new Error(message); };
const html = fs.readFileSync(path.join(dist,'index.html'),'utf8');
const app = fs.readFileSync(path.join(dist,'app.js'),'utf8');
const css = fs.readFileSync(path.join(dist,'style.css'),'utf8');
const references = [...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map(m=>m[1]);
references.push(...[...css.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)].map(m=>m[1]));
for(const reference of references.filter(r=>!r.includes(':')&&!r.startsWith('//'))){
  const relative=reference.split(/[?#]/)[0];
  if(!fs.existsSync(path.join(dist,relative)))fail('Arquivo ausente: '+relative);
}
const productImages=[...app.matchAll(/image:'([^']+)'/g)].map(m=>m[1]);
for(const image of productImages)if(!fs.existsSync(path.join(dist,'assets',image)))fail('Imagem ausente: '+image);
if(!html.includes('name="robots" content="noindex, nofollow"'))fail('Prévia deve manter noindex.');
if(!html.includes('https://ideal.felipeferreira.dev/assets/'))fail('Metadado social não usa o domínio de demonstração.');
if(!app.includes('https://wa.me/551532732891?text='))fail('Número do WhatsApp oficial alterado.');
if(fs.readFileSync(path.join(dist,'CNAME'),'utf8').trim()!=='ideal.felipeferreira.dev')fail('Domínio CNAME divergente.');
const syntax=spawnSync(process.execPath,['--check',path.join(dist,'app.js')],{encoding:'utf8'});
if(syntax.status!==0)fail(syntax.stderr);
console.log(`OK: ${references.length} referências, ${productImages.length} imagens de produtos, JavaScript e configuração da prévia.`);
