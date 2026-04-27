const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src/pages');
const files = ['ClonedAddEvent.tsx', 'ClonedHomepage.tsx', 'ClonedJournal.tsx', 'ClonedSubscribe.tsx', 'ClonedUpcoming.tsx'];

// These files have a DIFFERENT pattern: the img tag is NOT closed before next tag, it bleeds into the button.
// Pattern found (as it appears reading as raw string):
// <a class=\\\"navbar-brand\\\" href=\\\"/\\\"><img src=\\\"/img/international-conference-alerts-logo.png\\\"\n                    <button ...
// So the <a> tag is NOT properly closed around the img. We need to inject after it.
// We'll search for the bare <a...><img... needle, ending with the img src attribute, then find the end of that broken img tag.

// The actual pattern (as raw JS string read from file):
// `<a class=\\\"navbar-brand\\\" href=\\\"/\\\"><img src=\\\"/img/international-conference-alerts-logo.png\\\"\n                    <button`
// we need to replace: `<a class=\\\"navbar-brand\\\" href=\\\"/\\\"><img src=\\\"/img/international-conference-alerts-logo.png\\\"` 
// with our full brand block, and remove the next line `<button` remains untouched

const oldLogo = '<a class=\\\\\\"navbar-brand\\\\\\" href=\\\\\\"/\\\\\\"><img src=\\\\\\"/img/international-conference-alerts-logo.png\\\\\\"';

const newBrand = '<a class=\\\\\\"navbar-brand\\\\\\" href=\\\\\\"/\\\\\\" style=\\\\\\"display:flex;align-items:center;gap:10px;text-decoration:none;\\\\\\"><img src=\\\\\\"/assets/company logo .png\\\\\\" alt=\\\\\\"Eminsphere\\\\\\" style=\\\\\\"height:50px;width:auto;object-fit:contain;\\\\\\"><div style=\\\\\\"display:flex;flex-direction:column;justify-content:center;line-height:1.3;\\\\\\"><strong style=\\\\\\"font-size:16px;color:#0f1b35;font-family:sans-serif;\\\\\\">Eminsphere<span style=\\\\\\"color:#2563eb;\\\\\\">&#x2122;</span></strong><small style=\\\\\\"font-size:7px;text-transform:uppercase;color:#475569;font-family:sans-serif;display:block;margin-top:2px;\\\\\\">Global Academic, Research &amp; Innovation Platform<br>ISO 9001:2015 Certified | Quality Management System<br>Certification issued by an accredited certification body</small></div></a><img src=\\\\\\"doesnotexist\\\\\\"';

let count = 0;
files.forEach(f => {
  const filepath = path.join(dir, f);
  let content = fs.readFileSync(filepath, 'utf8');
  const before = content;

  if (content.includes(oldLogo)) {
    // We replace the broken logo start. The img tag continues with attributes and bleeds. 
    // Strategy: find the old logo anchor start, find where alt= or width= ends, replace up to there.
    // Since the img tag is malformed (no closing >), find next > after the logo src
    const logoStart = content.indexOf(oldLogo);
    if (logoStart !== -1) {
      // The malformed img continues until the > of the button (since the a tag is never properly closed)
      // Actually the img tag DID get replaced partially — let's just replace the a+img start and add our brand block
      // Find end of the broken <img> tag - there's a line break then <button, so we find the \n after the src attr
      const afterLogo = logoStart + oldLogo.length;
      const nextNewline = content.indexOf('\\n', afterLogo);
      // Replace from logoStart up to and including that line break
      const before_block = content.substring(0, logoStart);
      const after_block = content.substring(nextNewline + 2); // skip the newline + spaces
      content = before_block + newBrand + '\\n                    ' + after_block;
      console.log('Updated: ' + f);
      count++;
    }
  } else {
    console.log('No match: ' + f);
  }

  if (content !== before) fs.writeFileSync(filepath, content);
});
console.log('Done. Updated ' + count + ' files.');
