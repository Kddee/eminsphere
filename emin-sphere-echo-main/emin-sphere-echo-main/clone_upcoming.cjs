const fs = require('fs');
const https = require('https');
const path = require('path');

const baseUrl = 'https://internationalconferencealerts.com';
const targetUrl = 'https://internationalconferencealerts.com/upcoming-conferences.php';

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  console.log("Fetching Upcoming Conferences...");
  const html = await fetchHtml(targetUrl);
  
  const bodyStart = html.indexOf('<body');
  const bodyEnd = html.indexOf('</body>');
  
  let bodyContent = html;
  if (bodyStart !== -1 && bodyEnd !== -1) {
     const bodyTagEnd = html.indexOf('>', bodyStart) + 1;
     bodyContent = html.substring(bodyTagEnd, bodyEnd);
  }

  // Replace links or let them be.
  const reactComponent = `
import React, { useEffect, useRef } from 'react';

const ClonedUpcoming = () => {
  const containerRef = useRef(null);

  return (
    <div 
      className="cloned-website-container"
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: ${JSON.stringify(bodyContent)} }} 
    />
  );
};

export default ClonedUpcoming;
`;

  fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'ClonedUpcoming.tsx'), reactComponent);
  console.log('Created ClonedUpcoming.tsx!');
}

run().catch(console.error);
