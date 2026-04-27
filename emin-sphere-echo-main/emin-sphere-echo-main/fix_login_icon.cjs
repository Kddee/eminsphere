const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(dir).filter(f => f.startsWith('Cloned') && f.endsWith('.tsx'));

// Fix the broken login icon inside the Login button
// Pattern: <img src=\"/image/email/login.png\" width=\"18px\" height=\"18px\" alt=\"Login\">
const oldLogin = '<img src=\\"/image/email/login.png\\" width=\\"18px\\" height=\\"18px\\" alt=\\"Login\\">';
// Replace with a simple SVG person icon
const newLogin = '<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"18\\" height=\\"18\\" viewBox=\\"0 0 24 24\\" fill=\\"currentColor\\"><path d=\\"M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z\\"/></svg>';

let count = 0;
files.forEach(f => {
  const filepath = path.join(dir, f);
  let content = fs.readFileSync(filepath, 'utf8');
  const before = content;

  if (content.includes(oldLogin)) {
    content = content.split(oldLogin).join(newLogin);
    console.log('Fixed login icon in: ' + f);
    count++;
  }

  if (content !== before) fs.writeFileSync(filepath, content);
});
console.log('Done. Fixed ' + count + ' files.');
