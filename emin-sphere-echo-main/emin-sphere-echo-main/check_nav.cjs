const fs = require('fs');
const html = fs.readFileSync('target.html', 'utf8');
const match = html.indexOf('<div class="collapse navbar-collapse"');
if (match !== -1) {
    console.log(html.substring(match, match + 2000));
} else {
    console.log('Not found');
}
