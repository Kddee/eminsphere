const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(dir).filter(f => f.startsWith('Cloned') && f.endsWith('.tsx'));

const desktopLogo = `<a class=\\"navbar-brand\\" href=\\"/\\" style=\\"display:flex;align-items:center;gap:10px;text-decoration:none;\\"><img src=\\"/assets/company logo .png\\" alt=\\"Eminsphere\\" style=\\"height:50px;width:auto;object-fit:contain;\\"><div style=\\"display:flex;flex-direction:column;justify-content:center;\\"><span style=\\"font-weight:900;font-size:17px;color:#0f1b35;line-height:1;font-family:sans-serif;\\">Eminsphere<span style=\\"color:#2563eb;\\">™</span></span><span style=\\"font-size:7.5px;text-transform:uppercase;font-weight:700;color:#475569;line-height:1.4;margin-top:3px;font-family:sans-serif;display:block;\\">Global Academic, Research &amp; Innovation Platform<br>ISO 9001:2015 Certified &nbsp;|&nbsp; Quality Management System<br>Certification issued by an accredited certification body</span></div></a>`;

const mobileLogo = `<a class=\\"navbar-brand mb-0\\" href=\\"/\\" style=\\"display:flex;align-items:center;gap:8px;text-decoration:none;\\"><img src=\\"/assets/company logo .png\\" alt=\\"Eminsphere\\" style=\\"height:40px;width:auto;object-fit:contain;\\"><div style=\\"display:flex;flex-direction:column;justify-content:center;\\"><span style=\\"font-weight:900;font-size:15px;color:#0f1b35;line-height:1;font-family:sans-serif;\\">Eminsphere<span style=\\"color:#2563eb;\\">™</span></span><span style=\\"font-size:7px;text-transform:uppercase;font-weight:700;color:#475569;line-height:1.4;margin-top:2px;font-family:sans-serif;display:block;\\">Global Academic Research Platform</span></div></a>`;

let count = 0;
files.forEach(f => {
  const filepath = path.join(dir, f);
  let content = fs.readFileSync(filepath, 'utf8');

  // The HTML is stored as a JS string, so actual " are escaped as \"
  // The logo img tag patterns to replace:
  
  // 1. Desktop: `<a class=\"navbar-brand\" href=\"/\"><img src=\"/img/international-conference-alerts-logo.png\"\n                            alt=\"international-conference-alerts-logo\" width=\"180px\"></a>`
  // 2. Mobile:  `<a class=\"navbar-brand mb-0\" href=\"/\">\n                    <img src=\"/img/international-conference-alerts-logo.png\" alt=\"international-conference-alerts-logo\" width=\"150px\">\n                </a>`
  
  const before = content;

  // Desktop pattern (with escaped quotes in JS string)
  content = content.split('<a class=\\"navbar-brand\\" href=\\"\\/\\"><img src=\\"\\/img\\/international-conference-alerts-logo.png\\"').join(
    desktopLogo + '<!-- removed:'
  );
  // Remove the leftovers (width="180px"></a>)
  content = content.split('\\"\\n                            alt=\\"international-conference-alerts-logo\\" width=\\"180px\\"></a><!-- removed:').join('');
  content = content.split('\\n                            alt=\\"international-conference-alerts-logo\\" width=\\"180px\\"></a>').join('');

  // Mobile pattern
  content = content.split('<a class=\\"navbar-brand mb-0\\" href=\\"\\/\\">\\n                    <img src=\\"\\/img\\/international-conference-alerts-logo.png\\" alt=\\"international-conference-alerts-logo\\" width=\\"150px\\">\\n                <\\/a>').join(mobileLogo);

  if (content !== before) { count++; console.log('Updated: ' + f); }
  else { console.log('No change: ' + f); }

  fs.writeFileSync(filepath, content);
});
console.log(`Done. Updated ${count} files.`);
