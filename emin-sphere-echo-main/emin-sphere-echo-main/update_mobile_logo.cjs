const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src/pages');
const files = ['ClonedAddEvent.tsx', 'ClonedHomepage.tsx', 'ClonedJournal.tsx', 'ClonedSubscribe.tsx', 'ClonedUpcoming.tsx'];

// Current mobile logo pattern (already updated to use our logo):
// <a class=\"navbar-brand mb-0\" href=\"/\">\n                    <img src=\"/assets/company logo .png\" alt=\"Eminsphere\" style=\"height:50px;width:auto;object-fit:contain;\">\n                </a>
const oldMobile = '<a class=\\"navbar-brand mb-0\\" href=\\"/\\">\\n                    <img src=\\"/assets/company logo .png\\" alt=\\"Eminsphere\\" style=\\"height:50px;width:auto;object-fit:contain;\\">\\n                </a>';

const newMobile = '<a class=\\"navbar-brand mb-0\\" href=\\"/\\" style=\\"display:flex;align-items:center;gap:8px;text-decoration:none;\\"><img src=\\"/assets/company logo .png\\" alt=\\"Eminsphere\\" style=\\"height:40px;width:auto;object-fit:contain;\\"><div style=\\"display:flex;flex-direction:column;justify-content:center;line-height:1.2;\\"><strong style=\\"font-size:14px;color:#0f1b35;font-family:sans-serif;font-weight:900;\\">Eminsphere<span style=\\"color:#2563eb;\\">&#x2122;</span></strong><small style=\\"font-size:6.5px;text-transform:uppercase;color:#475569;font-family:sans-serif;display:block;margin-top:2px;\\">Global Academic, Research &amp; Innovation Platform</small></div></a>';

let count = 0;
files.forEach(f => {
  const filepath = path.join(dir, f);
  let content = fs.readFileSync(filepath, 'utf8');
  const before = content;

  if (content.includes(oldMobile)) {
    content = content.split(oldMobile).join(newMobile);
    console.log('Updated mobile logo in: ' + f);
    count++;
  } else {
    console.log('No match in: ' + f);
  }

  if (content !== before) fs.writeFileSync(filepath, content);
});
console.log('Done. Updated ' + count + ' files.');
