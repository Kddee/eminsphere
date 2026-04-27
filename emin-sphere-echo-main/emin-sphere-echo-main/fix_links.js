const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const files = fs.readdirSync(pagesDir).filter(f => f.startsWith('Cloned') && f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace absolute navigation links
  content = content.replace(/href=\\"https:\/\/internationalconferencealerts\.com\//g, 'href=\\"/');
  content = content.replace(/href="https:\/\/internationalconferencealerts\.com\//g, 'href="/');
  
  content = content.replace(/action=\\"https:\/\/internationalconferencealerts\.com\//g, 'action=\\"/');
  content = content.replace(/action="https:\/\/internationalconferencealerts\.com\//g, 'action="/');
  
  // Replace the no trailing slash ones just in case
  content = content.replace(/href=\\"https:\/\/internationalconferencealerts\.com\\"/g, 'href=\\"/\\"');
  content = content.replace(/href="https:\/\/internationalconferencealerts\.com"/g, 'href="/"');

  fs.writeFileSync(filePath, content);
  console.log('Fixed links in', file);
}
console.log('Done!');
