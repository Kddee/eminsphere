const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.startsWith('Cloned') && f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace absolute single quote and double quote permutations!
  // Including raw unescaped double quotes and escaped quotes in strings.
  const regex = /(href|action)=['\\"]+https?:\/\/(?:www\.)?internationalconferencealerts\.com\/?([^'\\"]*)['\\"]+/g;
  
  content = content.replace(regex, (match, attr, uriPath) => {
      let newPath = '/' + uriPath;
      if (newPath === '//') newPath = '/';
      // Restore preserving the JSON escaped quotes! If it was \\", keep \\"
      return `${attr}=\\"${newPath}\\"`; 
  });

  fs.writeFileSync(filePath, content);
  console.log('Fixed absolute links in', file);
}
console.log('Done cleaning single/double quote URLs!');
