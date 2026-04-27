const fs = require('fs');
const html = fs.readFileSync('src/pages/ClonedUpcoming.tsx', 'utf8');
const regex = /href=\\"([^\\"]+)\\"/g;
let match;
let eventLinks = [];
while ((match = regex.exec(html)) !== null) {
    if (match[1].includes('-conference-in-') || match[1].includes('event')) {
        eventLinks.push(match[1]);
    }
}
console.log(eventLinks.slice(0, 10));
