const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(dir).filter(f => f.startsWith('Cloned') && f.endsWith('.tsx'));

// Mobile logo block pattern:
// <a class=\"navbar-brand mb-0\" href=\"/\">\n                    <img src=\"/img/international-conference-alerts-logo.png\" alt=\"international-conference-alerts-logo\" width=\"150px\">\n                </a>
const mobileLike = '<a class=\\"navbar-brand mb-0\\" href=\\"/\\">';

// Footer logo: a big <img src="/img/international..." in the footer with large dimensions
// <img src=\"/img/international-conference-alerts-logo.png\" 
const smallLogoReplacement = '<img src=\\"/assets/company logo .png\\" alt=\\"Eminsphere\\" style=\\"height:50px;width:auto;object-fit:contain;\\">';

let totalCount = 0;
files.forEach(f => {
  const filepath = path.join(dir, f);
  let content = fs.readFileSync(filepath, 'utf8');
  const before = content;

  // Replace ALL remaining /img/international-conference-alerts-logo.png references
  // with our new logo, but preserve surrounding structure
  // For footer big logos (usually width=200, 220 etc.), replace the entire img tag
  const imgSearch = '<img src=\\"/img/international-conference-alerts-logo.png\\"';
  
  if (content.includes(imgSearch)) {
    // Replace each occurrence: find end of img tag (either /> or >) 
    let i = 0;
    while (true) {
      const idx = content.indexOf(imgSearch, i);
      if (idx === -1) break;
      // Find end of this img tag
      let endIdx = content.indexOf('>', idx);
      if (endIdx === -1) break;
      // Replace entire img tag with simple sized logo
      content = content.substring(0, idx) + smallLogoReplacement + content.substring(endIdx + 1);
      i = idx + smallLogoReplacement.length;
      totalCount++;
    }
    console.log('Cleaned remaining logos in: ' + f);
  }

  if (content !== before) fs.writeFileSync(filepath, content);
});
console.log('Done. Cleaned ' + totalCount + ' additional logo references.');
