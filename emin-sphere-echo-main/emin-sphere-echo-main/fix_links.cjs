const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const files = fs.readdirSync(pagesDir).filter(f => f.startsWith('Cloned') && f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace absolute navigation links explicitly inside strings.
  // Note: dangerouslySetInnerHTML stringifies HTML so standard attributes are escaped, like href=\"https...
  content = content.replace(/href=\\"https:\/\/internationalconferencealerts\.com\//g, 'href=\\"/');
  content = content.replace(/href="https:\/\/internationalconferencealerts\.com\//g, 'href="/');
  
  content = content.replace(/action=\\"https:\/\/internationalconferencealerts\.com\//g, 'action=\\"/');
  content = content.replace(/action="https:\/\/internationalconferencealerts\.com\//g, 'action="/');
  
  // Replace references without trailing slash just in case
  content = content.replace(/href=\\"https:\/\/internationalconferencealerts\.com\\"/g, 'href=\\"/\\"');
  content = content.replace(/href="https:\/\/internationalconferencealerts\.com"/g, 'href="/"');

  fs.writeFileSync(filePath, content);
  console.log('Fixed links in', file);
}
console.log('Done fixing links!');
