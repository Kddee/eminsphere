const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(dir).filter(f => f.startsWith('Cloned') && f.endsWith('.tsx'));

let total = 0;
files.forEach(f => {
  const filepath = path.join(dir, f);
  let content = fs.readFileSync(filepath, 'utf8');
  const before = content;

  // ── 1. Rename "Journal Publication" → "Paper Publication" ──
  content = content.split('>Journal Publication<').join('>Paper Publication<');

  // ── 2. Remove "Add Event" nav-item (desktop) ──
  // Find and remove any <li> that contains Add Event link
  const addEventLink = 'href=\\"/add-event.php\\">Add Event</a>';
  let idx = content.indexOf(addEventLink);
  while (idx !== -1) {
    // Search backwards for the opening <li
    let liStart = content.lastIndexOf('<li', idx);
    // Search forwards for </li>
    let liEnd = content.indexOf('</li>', idx) + 5;
    if (liStart !== -1 && liEnd > idx) {
      content = content.substring(0, liStart) + content.substring(liEnd);
    }
    idx = content.indexOf(addEventLink);
  }

  // ── 3. Remove search bar wrapper div (desktop - contains "open-search" input) ──
  // The wrapper starts with a specific div class
  const searchMarkers = [
    '<div class=\\" pl-4 pl-md-0 ml-0 ml-md-3\\">',
    '<div class=\\"pl-4 pl-md-0 ml-0 ml-md-3\\">'
  ];

  for (const marker of searchMarkers) {
    let i = 0;
    while (true) {
      const start = content.indexOf(marker, i);
      if (start === -1) break;
      const lookahead = content.substring(start, Math.min(start + 600, content.length));
      if (lookahead.includes('open-search') || lookahead.includes('Search by')) {
        // Find matching </div> by counting depth in the actual chars
        let depth = 0;
        let j = start;
        let found = false;
        while (j < content.length) {
          if (content[j] === '<') {
            if (content.substring(j, j + 4) === '<div') { depth++; j += 4; continue; }
            if (content.substring(j, j + 6) === '</div>') {
              depth--;
              if (depth === 0) {
                content = content.substring(0, start) + content.substring(j + 6);
                found = true;
                break;
              }
              j += 6; continue;
            }
          }
          j++;
        }
        if (!found) { i = start + marker.length; }
        // Stay at same position to catch any other matching divs
      } else {
        i = start + marker.length;
      }
    }
  }

  // ── 4. Remove mobile search bar (desk-hide rounded pill) ──
  const mobileMarker = '<div class=\\"rounded rounded-pill shadow-sm desk-hide\\"';
  let mi = 0;
  while (true) {
    const start = content.indexOf(mobileMarker, mi);
    if (start === -1) break;
    let depth = 0;
    let j = start;
    while (j < content.length) {
      if (content[j] === '<') {
        if (content.substring(j, j + 4) === '<div') { depth++; j += 4; continue; }
        if (content.substring(j, j + 6) === '</div>') {
          depth--;
          if (depth === 0) {
            content = content.substring(0, start) + content.substring(j + 6);
            break;
          }
          j += 6; continue;
        }
      }
      j++;
    }
    mi = start;
  }

  if (content !== before) {
    fs.writeFileSync(filepath, content);
    total++;
    console.log('Updated: ' + f);
  } else {
    console.log('No change: ' + f);
  }
});
console.log('\nDone. Updated ' + total + ' files.');
