const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.startsWith('Cloned') && f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace href and action containing the exact domain or www variant.
  // Match `href=\"https://...` or `href="https://...`
  // We use capturing groups for the quote type and whatever follows the domain.
  
  const attrRegex = /(href|action)=(\\"|")https?:\/\/(?:www\.)?internationalconferencealerts\.com\/?([^\\"]*)\2/g;
  
  content = content.replace(attrRegex, (match, attr, quote, uriPath) => {
      // Ensure the path always starts with a slash
      let newPath = '/' + uriPath;
      if (newPath === '//') newPath = '/';
      return `${attr}=${quote}${newPath}${quote}`;
  });

  fs.writeFileSync(filePath, content);
  console.log('Fixed absolute links in', file);
}
console.log('Done deep-cleaning absolute links!');
