const fs = require('fs');
const html = fs.readFileSync('target.html', 'utf8');

// Regex to find image srcs
const imgRegex = /<img[^>]+src="([^">]+)"/g;
let match;
const urls = [];

while ((match = imgRegex.exec(html)) !== null) {
  let url = match[1];
  if (!url.startsWith('http')) {
      url = 'https://internationalconferencealerts.com' + (!url.startsWith('/') ? '/' : '') + url;
  }
  urls.push(url);
}

console.log(`Found ${urls.length} image URLs.`);
const uniqueUrls = [...new Set(urls)];

fs.writeFileSync('imgs.json', JSON.stringify(uniqueUrls, null, 2));
console.log('Saved to imgs.json');
