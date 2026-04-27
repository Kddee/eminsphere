const fs = require('fs');
const path = require('path');

// Read ClonedAllEvents file to see exact string
const filepath = path.join(__dirname, 'src/pages/ClonedAllEvents.tsx');
const content = fs.readFileSync(filepath, 'utf8');

// Find the context around the logo
const idx = content.indexOf('international-conference-alerts-logo');
if (idx === -1) {
  console.log('Logo string not found in ClonedAllEvents!');
} else {
  // Print 200 chars before and 300 after
  console.log('CONTEXT:');
  console.log(JSON.stringify(content.substring(idx - 100, idx + 400)));
}
