const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src/pages');
const files = ['ClonedAddEvent.tsx', 'ClonedHomepage.tsx', 'ClonedJournal.tsx', 'ClonedSubscribe.tsx', 'ClonedUpcoming.tsx'];

const brandHtml = '<a class=\\"navbar-brand\\" href=\\"/\\" style=\\"display:flex;align-items:center;gap:10px;text-decoration:none;\\"><img src=\\"/assets/company logo .png\\" alt=\\"Eminsphere\\" style=\\"height:50px;width:auto;object-fit:contain;\\"><div style=\\"display:flex;flex-direction:column;justify-content:center;line-height:1.3;\\"><strong style=\\"font-size:16px;color:#0f1b35;font-family:sans-serif;font-weight:900;\\">Eminsphere<span style=\\"color:#2563eb;\\">&#x2122;</span></strong><small style=\\"font-size:7px;text-transform:uppercase;color:#475569;font-family:sans-serif;display:block;margin-top:3px;\\">Global Academic, Research &amp; Innovation Platform<br>ISO 9001:2015 Certified | Quality Management System<br>Certification issued by an accredited certification body</small></div></a>';

// The old logo anchor starts with this and the img doesn't close before next tag
const oldAnchorStart = '<a class=\\"navbar-brand\\" href=\\"/\\"><img src=\\"/img/international-conference-alerts-logo.png\\"';

let count = 0;
files.forEach(f => {
  const filepath = path.join(dir, f);
  let content = fs.readFileSync(filepath, 'utf8');
  const before = content;
  let i = 0;

  while (true) {
    const idx = content.indexOf(oldAnchorStart, i);
    if (idx === -1) break;
    
    // Find the next occurrence of `<button` after the logo (this is where the img bleeds into)
    const btnIdx = content.indexOf('<button', idx + oldAnchorStart.length);
    if (btnIdx === -1) break;
    
    // Replace from idx up to (but not including) btnIdx with our brand block
    content = content.substring(0, idx) + brandHtml + '\\n                    ' + content.substring(btnIdx);
    i = idx + brandHtml.length;
    count++;
    console.log('Updated occurrence in: ' + f);
  }

  if (content !== before) fs.writeFileSync(filepath, content);
});
console.log('Done. Total replacements: ' + count);
