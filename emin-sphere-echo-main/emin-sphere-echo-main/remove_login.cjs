const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(dir).filter(f => f.startsWith('Cloned') && f.endsWith('.tsx'));

// Patterns to remove - the login nav section appears in multiple forms

// Pattern 1 (desktop nav): <nav class=\"navbar p-0\">...<a...login...></nav>
// Pattern 2 (mobile nav): <li class=\"nav-item mt-2\">...<a...login-button-menu...></li>
// Pattern 3: standalone login link

let total = 0;
files.forEach(f => {
  const filepath = path.join(dir, f);
  let content = fs.readFileSync(filepath, 'utf8');
  const before = content;

  // Remove desktop login nav block
  // <nav class=\"navbar p-0\">...(login stuff)...</nav>
  // We'll use index-based removal
  const loginNavStart = '<nav class=\\"navbar p-0\\">';
  const loginNavEnd = '</nav>';
  
  let i = 0;
  while (true) {
    const start = content.indexOf(loginNavStart, i);
    if (start === -1) break;
    const end = content.indexOf(loginNavEnd, start);
    if (end === -1) break;
    content = content.substring(0, start) + content.substring(end + loginNavEnd.length);
    i = start;
  }

  // Remove mobile login li block
  // <li class=\"nav-item mt-2\"><a class=\"nav-link login-btn...Login...></li>
  const mobileLoginStart = '<li class=\\"nav-item mt-2\\">';
  const mobileLoginEnd = '</li>';
  i = 0;
  while (true) {
    const start = content.indexOf(mobileLoginStart, i);
    if (start === -1) break;
    const end = content.indexOf(mobileLoginEnd, start);
    if (end === -1) break;
    // Only remove if it contains login
    const block = content.substring(start, end + mobileLoginEnd.length);
    if (block.includes('login-button-menu') || block.includes('login-btn')) {
      content = content.substring(0, start) + content.substring(end + mobileLoginEnd.length);
      i = start;
    } else {
      i = end + 1;
    }
  }

  // Remove standalone login links (any remaining <a...login-button-menu...>)
  const loginLinkStart = '<a class=\\"nav-link login-btn';
  i = 0;
  while (true) {
    const start = content.indexOf(loginLinkStart, i);
    if (start === -1) break;
    const end = content.indexOf('</a>', start);
    if (end === -1) break;
    content = content.substring(0, start) + content.substring(end + 4);
    i = start;
  }

  if (content !== before) {
    fs.writeFileSync(filepath, content);
    total++;
    console.log('Removed login from: ' + f);
  } else {
    console.log('No change: ' + f);
  }
});
console.log('Done. Updated ' + total + ' files.');
