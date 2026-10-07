import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
const root = path.resolve(import.meta.dirname, '..');
const json = (rel) => JSON.parse(readFileSync(path.join(root, rel), 'utf8').replace(/^\uFEFF/, ''));
test('marketplace resolve um plugin contido com skill e versão coerente', () => {
  const market = json('.claude-plugin/marketplace.json');
  const manifest = json('.claude-plugin/plugin.json');
  assert.equal(manifest.version, json('package.json').version);
  assert.equal(market.plugins.length, 1);
  for (const item of market.plugins) {
    assert.equal(item.name, manifest.name);
    const dir = path.resolve(root, item.source);
    assert.ok(dir === root || dir.startsWith(root + path.sep));
    assert.ok(existsSync(path.join(dir, 'skills/revisao-seguranca/SKILL.md')));
  }
});
test('skill discoverable e referência em inglês existente', () => {
  const skill = readFileSync(path.join(root, 'skills/revisao-seguranca/SKILL.md'), 'utf8');
  assert.match(skill, /^---\r?\nname: revisao-seguranca\r?\ndescription: .+\r?\n---/);
  assert.ok(existsSync(path.join(root, 'skills/revisao-seguranca/references/review.en-US.md')));
});
