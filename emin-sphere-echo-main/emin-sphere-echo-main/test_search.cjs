const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src/pages');
const files = ['ClonedAddEvent.tsx', 'ClonedHomepage.tsx', 'ClonedJournal.tsx', 'ClonedSubscribe.tsx', 'ClonedUpcoming.tsx'];

// The brand HTML to inject (this will be embedded inside a JS string in the TSX, 
// so special chars like quotes are escaped with \" in the file)
function buildBrand(height) {
  return [
    '<a class=\\"navbar-brand\\" href=\\"/\\" style=\\"display:flex;align-items:center;gap:10px;text-decoration:none;\\">',
    '<img src=\\"/assets/company logo .png\\" alt=\\"Eminsphere\\" style=\\"height:' + height + ';width:auto;object-fit:contain;\\">',
    '<div style=\\"display:flex;flex-direction:column;justify-content:center;line-height:1.3;\\">',
    '<strong style=\\"font-size:16px;color:#0f1b35;font-family:sans-serif;font-weight:900;\\">Eminsphere<span style=\\"color:#2563eb;\\">&#x2122;</span></strong>',
    '<small style=\\"font-size:7px;text-transform:uppercase;color:#475569;font-family:sans-serif;display:block;margin-top:3px;\\">',
    'Global Academic, Research &amp; Innovation Platform<br>',
    'ISO 9001:2015 Certified &nbsp;|&nbsp; Quality Management System<br>',
    'Certification issued by an accredited certification body',
    '</small>',
    '</div>',
    '</a>',
  ].join('');
}

// Both have the logo in the dangerouslySetInnerHTML string. Since it's in an escaped JS string,
// the actual string we see in raw file is: <a class=\"navbar-brand\" href=\"/\"><img src=\"/img/international-conference-alerts-logo.png\"
// where \" = backslash + quote (2 chars). The file stores them as \\ + " (3 chars total from raw file perspective? no.)
// 
// Actually in the raw file: the TSX contains `dangerouslySetInnerHTML={{ __html: "... <a class=\"navbar-brand\" ...>` 
// So in the raw file text: you see literally: <a class=\"navbar-brand\" href=\"/\"><img src=\"/img/international...
// Those backslash-quotes ARE the actual chars in the file

// So the file has:  \" (backslash quote) as escapin. Let's test:
const testFile = path.join(dir, 'ClonedHomepage.tsx');
const raw = fs.readFileSync(testFile, 'utf8');
const search1 = '<a class=\\"navbar-brand\\" href=\\"/\\"><img src=\\"/img/international-conference-alerts-logo.png\\"';
console.log('Search1 found in ClonedHomepage:', raw.includes(search1));

// Find and print context to verify
const idx = raw.indexOf(search1);
if (idx !== -1) {
  console.log('Found at index', idx);
  console.log('Context around:', raw.substring(idx, idx + 200));
}
