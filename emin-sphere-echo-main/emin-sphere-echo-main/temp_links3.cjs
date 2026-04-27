const fs = require('fs');
const html = fs.readFileSync('src/pages/ClonedUpcoming.tsx', 'utf8');
const regex = /href=\\"([^\\"]+)\\"/g;
let match;
let links = new Set();
while ((match = regex.exec(html)) !== null) {
    if (!match[1].endsWith('.png') && !match[1].endsWith('.css') && match[1].length > 3) {
        links.add(match[1]);
    }
}
console.log(Array.from(links).slice(0, 30));
