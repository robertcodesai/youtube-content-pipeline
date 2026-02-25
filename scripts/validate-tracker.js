#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const TRACKER = path.join(__dirname, '..', 'TRACKER.md');
const VALID_STATUSES = ['💡 Idea', '📝 Scripting', '🎨 Thumbnail', '🎬 Filming', '✂️ Editing', '✅ Published'];

let errors = 0;

if (!fs.existsSync(TRACKER)) {
  console.error('❌ TRACKER.md not found');
  process.exit(1);
}

const content = fs.readFileSync(TRACKER, 'utf8');
const lines = content.split('\n');

// Find the table (skip header rows)
const tableLines = lines.filter(line => line.startsWith('|') && !line.includes('---') && !line.includes('Title'));

for (const line of tableLines) {
  const cols = line.split('|').map(c => c.trim()).filter(Boolean);

  if (cols.length < 6) {
    // Skip status legend table
    if (cols.length === 2) continue;
    console.error(`❌ Row has ${cols.length} columns (expected 6): ${line}`);
    errors++;
    continue;
  }

  const [title, status] = cols;

  if (!title || title.length === 0) {
    console.error(`❌ Empty title in row: ${line}`);
    errors++;
  }

  if (!VALID_STATUSES.some(s => status.includes(s.split(' ')[0]))) {
    console.error(`❌ Invalid status "${status}" in row: ${line}`);
    errors++;
  }
}

if (errors > 0) {
  console.error(`\n❌ ${errors} validation error(s) found`);
  process.exit(1);
} else {
  console.log('✅ TRACKER.md is valid');
}
