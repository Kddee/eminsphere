const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(dir).filter(f => f.startsWith('Cloned') && f.endsWith('.tsx'));

const newLogoHtml = `<a class="navbar-brand" href="/" style="display:flex; align-items:center; gap:10px; text-decoration:none;">
    <img src="/assets/company logo .png" alt="Eminsphere" style="height:45px; width:auto; border-radius:4px;">
    <div style="font-family:Assistant, sans-serif; display:flex; flex-direction:column; justify-content:center;">
        <span style="font-weight:900; font-size:18px; color:#0f1b35; line-height:1;">Eminsphere<span style="color:#2563eb;">™</span></span>
        <span class="mob-hide" style="font-size:8px; text-transform:uppercase; font-weight:700; color:#475569; line-height:1.2; margin-top:4px;">
            Global Academic, Research &amp; Innovation Platform<br>
            ISO 9001:2015 Certified<br>
            Quality Management System<br>
            Certification issued by an accredited certification body
        </span>
    </div>
</a>`;

const newLogoMobileHtml = `<a class="navbar-brand mb-0" href="/" style="display:flex; align-items:center; gap:10px; text-decoration:none;">
    <img src="/assets/company logo .png" alt="Eminsphere" style="height:40px; width:auto; border-radius:4px;">
    <div style="font-family:Assistant, sans-serif; display:flex; flex-direction:column; justify-content:center;">
        <span style="font-weight:900; font-size:16px; color:#0f1b35; line-height:1;">Eminsphere<span style="color:#2563eb;">™</span></span>
    </div>
</a>`;

files.forEach(f => {
  const filepath = path.join(dir, f);
  let content = fs.readFileSync(filepath, 'utf8');

  let updatedString = content;

  // Manual replacement for desktop
  const desktopSearch = '<a class="navbar-brand" href="/"><img src="/img/international-conference-alerts-logo.png"\\n                            alt="international-conference-alerts-logo" width="180px"></a>';
  const mobileSearch = '<a class="navbar-brand mb-0" href="/">\\n                    <img src="/img/international-conference-alerts-logo.png" alt="international-conference-alerts-logo" width="150px">\\n                </a>';
  
  // They are inside JSON strings so newlines might be actual newlines AND escaped \n
  
  // Using simple substring index replacement logic just in case:
  const fix1End = 'width="180px"></a>';
  const parts1 = updatedString.split(fix1End);
  if (parts1.length > 1) {
    let replaced = false;
    for (let i = 0; i < parts1.length - 1; i++) {
        let textBefore = parts1[i];
        let idxx = textBefore.lastIndexOf('<a class="navbar-brand" href="/">');
        if (idxx !== -1) {
            parts1[i] = textBefore.substring(0, idxx) + newLogoHtml;
            replaced = true;
        } else {
            parts1[i] += fix1End;
        }
    }
    if (replaced) updatedString = parts1.join('');
  }

  const fix2End = 'width="150px">\\n                </a>';
  let parts2 = updatedString.split(fix2End);
  // fallback for actual newline
  if (parts2.length === 1) parts2 = updatedString.split('width="150px">\n                </a>');
  
  if (parts2.length > 1) {
    let replaced = false;
    for (let i = 0; i < parts2.length - 1; i++) {
        let textBefore = parts2[i];
        let idxx = textBefore.lastIndexOf('<a class="navbar-brand mb-0" href="/">');
        if (idxx !== -1) {
            parts2[i] = textBefore.substring(0, idxx) + newLogoMobileHtml;
            replaced = true;
        } else {
            parts2[i] += 'width="150px">\n                </a>';
        }
    }
    if (replaced) updatedString = parts2.join('');
  }

  // Also catch simple one line
  updatedString = updatedString.replace(/<a class="navbar-brand" href="\/"><img src="\/img\/international-conference-alerts-logo\.png".*?width="180px"><\/a>/g, newLogoHtml);
  
  if (content !== updatedString) {
      fs.writeFileSync(filepath, updatedString);
      console.log('Updated ' + f);
  }
});
