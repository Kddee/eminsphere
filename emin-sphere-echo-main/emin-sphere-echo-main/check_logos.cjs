const fs = require('fs');
const path = require('path');

// Check all cloned files for remaining old logo references
const dir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(dir).filter(f => f.startsWith('Cloned') && f.endsWith('.tsx'));

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const idx = content.indexOf('international-conference-alerts-logo');
  if (idx !== -1) {
    const snippet = content.substring(idx - 50, idx + 300);
    console.log('\n=== ' + f + ' ===');
    console.log(snippet);
  } else {
    console.log(f + ': CLEAN');
  }
});
