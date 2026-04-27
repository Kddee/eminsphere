const fs = require('fs');
const path = require('path');

// Read the raw bytes of the file and find/replace as raw strings
const filepath = path.join(__dirname, 'src/pages/ClonedAllEvents.tsx');
const content = fs.readFileSync(filepath, 'utf8');

const idx = content.indexOf('international-conference-alerts-logo');
if (idx === -1) {
  console.log('Not found');
  process.exit(0);
}

// Get 150 before and 400 after, print as raw bytes
const snippet = content.substring(idx - 150, idx + 400);
console.log('RAW SNIPPET:');
for (let i = 0; i < snippet.length; i++) {
  process.stdout.write(snippet[i].charCodeAt(0) < 32 ? `[${snippet.charCodeAt(i)}]` : snippet[i]);
}
console.log('\n---END---');
