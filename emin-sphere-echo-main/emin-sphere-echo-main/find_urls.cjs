const fs = require('fs');
const files = fs.readdirSync('src/pages').filter(f => f.startsWith('Cloned') && f.endsWith('.tsx'));
let found = new Set();
const regex = /https?:\/\/(www\.)?internationalconferencealerts\.com[^\s\\"]*/g;

files.forEach(f => {
  const content = fs.readFileSync('src/pages/' + f, 'utf8');
  let match;
  while ((match = regex.exec(content)) !== null) {
      found.add(match[0]);
  }
});

console.log('Found full URLs:', Array.from(found).slice(0, 20));
