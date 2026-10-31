import { cp, mkdir, rm } from 'node:fs/promises';

const output = new URL('../dist/', import.meta.url);
const roots = [
  'index.html',
  '01-financial-accounting-1',
  '02-financial-accounting-2',
  '03-auditing-1',
  '04-auditing-2',
  '05-law',
  '06-taxation',
  '07-cost-accounting',
  '08-financial-management',
  'Final-Project',
  'exam',
  'shared',
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const root of roots) {
  await cp(new URL(`../${root}`, import.meta.url), new URL(`../dist/${root}`, import.meta.url), { recursive: true });
}
console.log(`Built static course preview in ${new URL('../dist/', import.meta.url).pathname}`);
