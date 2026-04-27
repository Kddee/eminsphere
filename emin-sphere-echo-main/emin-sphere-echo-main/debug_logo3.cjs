const fs = require('fs');
const path = require('path');

// First debug: check exact chars around the logo tag in ClonedHomepage
const filepath = path.join(__dirname, 'src/pages/ClonedHomepage.tsx');
const content = fs.readFileSync(filepath, 'utf8');
const idx = content.indexOf('international-conference-alerts-logo.png');
const snippet = content.substring(idx - 200, idx + 400);
console.log(JSON.stringify(snippet));
