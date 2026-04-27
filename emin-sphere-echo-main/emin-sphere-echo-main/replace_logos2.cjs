const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(dir).filter(f => f.startsWith('Cloned') && f.endsWith('.tsx'));

// Exact pattern as seen in the file (after reading to string):
// <a class=\"navbar-brand\" href=\"/\">\n               <img src=\"/img/international-conference-alerts-logo.png\" alt=\"Logo\" width=\"100\" class=\"listing-logo\">\n               </a>
const searchNeedle = '<a class=\\"navbar-brand\\" href=\\"/\\">\\n               <img src=\\"/img/international-conference-alerts-logo.png\\" alt=\\"Logo\\" width=\\"100\\" class=\\"listing-logo\\">\\n               </a>';

const replacement = '<a class=\\"navbar-brand\\" href=\\"/\\" style=\\"display:flex;align-items:center;gap:10px;text-decoration:none;\\"><img src=\\"/assets/company logo .png\\" alt=\\"Eminsphere\\" style=\\"height:45px;width:auto;object-fit:contain;\\"><div style=\\"display:flex;flex-direction:column;justify-content:center;line-height:1.2;\\"><strong style=\\"font-size:15px;color:#0f1b35;font-family:sans-serif;\\">Eminsphere<span style=\\"color:#2563eb;\\">&#x2122;</span></strong><small style=\\"font-size:7px;text-transform:uppercase;color:#475569;font-family:sans-serif;display:block;\\">Global Academic, Research &amp; Innovation Platform<br>ISO 9001:2015 Certified | Quality Management System</small></div></a>';

let count = 0;
files.forEach(f => {
  const filepath = path.join(dir, f);
  let content = fs.readFileSync(filepath, 'utf8');
  const before = content;

  if (content.includes(searchNeedle)) {
    content = content.split(searchNeedle).join(replacement);
    console.log('Updated: ' + f);
    count++;
  } else {
    console.log('No match: ' + f);
  }

  if (content !== before) fs.writeFileSync(filepath, content);
});
console.log(`Done. Updated ${count} files.`);
