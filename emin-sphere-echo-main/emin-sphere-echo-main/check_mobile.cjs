const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(dir).filter(f => f.startsWith('Cloned') && f.endsWith('.tsx'));

// Check for mobile logo pattern
const mobileSearch = 'navbar-brand mb-0';
files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  if (content.includes('navbar-brand mb-0')) {
    const idx = content.indexOf('navbar-brand mb-0');
    console.log(f + ':');
    console.log(content.substring(idx - 5, idx + 300));
    console.log('---');
  }
});
