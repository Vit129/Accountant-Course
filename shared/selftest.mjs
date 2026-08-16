#!/usr/bin/env node
// Self-test harness for every lesson in every subject track.
//
// Invariant checked per lesson: lesson.validate(lesson.solution, ...) must NOT throw,
// and lesson.validate(lesson.template, ...) MUST throw (the unfilled template placeholder
// should never pass). Guards against drift between a lesson's solution/template text and
// its validate() regex.
//
// Run: npm test  (or: node shared/selftest.mjs)

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const TRACKS = [
  '01-financial-accounting-1',
  '02-financial-accounting-2',
  '03-auditing-1',
  '04-auditing-2',
  '05-law',
  '06-taxation',
  '07-cost-accounting',
  '08-financial-management',
  'Final-Project',
];


let totalPass = 0;
let totalFail = 0;
let totalLessons = 0;
const failures = [];

for (const track of TRACKS) {
  const sandbox = {
    console,
    document: { getElementById: () => null, addEventListener: () => {}, querySelector: () => null },
    localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);

  const lessonsDir = path.join(ROOT, track, 'lessons');
  if (fs.existsSync(lessonsDir) && fs.statSync(lessonsDir).isDirectory()) {
    const partFiles = fs.readdirSync(lessonsDir)
      .filter(file => file.endsWith('.js'))
      .sort();
    for (const file of partFiles) {
      const partSrc = fs.readFileSync(path.join(lessonsDir, file), 'utf8');
      vm.runInContext(partSrc, sandbox);
    }
  }

  const filePath = path.join(ROOT, track, 'lessons.js');
  const src = fs.readFileSync(filePath, 'utf8');
  vm.runInContext(src, sandbox);

  const lessons = vm.runInContext('window.LESSONS', sandbox);
  let pass = 0;
  let fail = 0;

  for (const lesson of lessons) {
    try {
      lesson.validate(lesson.solution, () => {});
      pass++;
    } catch (e) {
      fail++;
      failures.push(`${track} :: ${lesson.id} — SOLUTION FAILED: ${e.message}`);
    }
    try {
      lesson.validate(lesson.template, () => {});
      fail++;
      failures.push(`${track} :: ${lesson.id} — TEMPLATE SHOULD HAVE THROWN BUT DIDN'T`);
    } catch (e) {
      pass++;
    }
  }

  console.log(`${track}: ${lessons.length} lessons, ${pass} checks passed, ${fail} failed`);
  totalPass += pass;
  totalFail += fail;
  totalLessons += lessons.length;
}

console.log(`\nTOTAL: ${totalLessons} lessons, ${totalPass} passed, ${totalFail} failed`);

if (failures.length) {
  console.log('\nFailures:');
  for (const f of failures) console.log(`  - ${f}`);
  process.exit(1);
}
