const fs = require('fs');
const html = fs.readFileSync('src/pages/ClonedUpcoming.tsx', 'utf8');
const regex = /href=\\"([^\\"]+)\\"/g;
let match;
let count = 0;
while ((match = regex.exec(html)) !== null && count < 20) {
    if (match[1].startsWith('/') || match[1].includes('.php')) {
        console.log(match[1]);
        count++;
    }
}
