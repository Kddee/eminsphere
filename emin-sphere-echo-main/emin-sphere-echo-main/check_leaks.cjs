const fs = require('fs');
const files = fs.readdirSync('src/pages').filter(f => f.startsWith('Cloned') && !f.includes('Wildcard'));
files.forEach(f => {
  const content = fs.readFileSync('src/pages/' + f, 'utf8');
  const regex = /.{0,20}internationalconferencealerts\.com.{0,20}/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
      if (match[0].includes('href') || match[0].includes('action')) {
          console.log(f, match[0]);
      }
  }
});
