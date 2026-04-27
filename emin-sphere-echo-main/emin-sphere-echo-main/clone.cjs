const fs = require('fs');
const https = require('https');
const path = require('path');

const baseUrl = 'https://internationalconferencealerts.com';
let html = fs.readFileSync('target.html', 'utf8');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function run() {
  console.log("Extracting assets...");
  const publicDir = path.join(__dirname, 'public');
  
  // Extract CSS, JS, Img URLs (things starting with /css, /js, /img)
  // And replace them in the HTML with local paths
  const matches = [...html.matchAll(/(href|src)="(\/(css|js|img|assets)[^"]+)"/g)];
  
  const toDownload = [];
  const uniqueUrls = new Set();

  for (const match of matches) {
    const attr = match[1];
    const urlPath = match[2];
    if (uniqueUrls.has(urlPath)) continue;
    uniqueUrls.add(urlPath);
    
    const fullUrl = baseUrl + urlPath;
    const localPath = path.join(publicDir, urlPath);
    ensureDir(path.dirname(localPath));
    toDownload.push({ fullUrl, localPath, urlPath });
  }

  // Also replace any CSS background URLs if we can find them in HTML
  // We'll just do a basic replace for the HTML string
  let polishedHtml = html;
  
  console.log(`Downloading ${toDownload.length} assets...`);
  
  for (let i=0; i<toDownload.length; i++) {
     try {
       await download(toDownload[i].fullUrl, toDownload[i].localPath);
       console.log(`Downloaded ${toDownload[i].urlPath}`);
     } catch (e) {
       console.log(`Failed ${toDownload[i].urlPath}: ${e.message}`);
     }
  }

  // Extract just the body content
  const bodyStart = polishedHtml.indexOf('<body');
  const bodyEnd = polishedHtml.indexOf('</body>');
  
  let bodyContent = polishedHtml;
  if (bodyStart !== -1 && bodyEnd !== -1) {
     const bodyTagEnd = polishedHtml.indexOf('>', bodyStart) + 1;
     bodyContent = polishedHtml.substring(bodyTagEnd, bodyEnd);
  }

  // Escape special chars for JSON serialization
  const reactComponent = `
import React, { useEffect, useRef } from 'react';

const ClonedHomepage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // If there were any scripts in the body, they might need triggering here.
  }, []);

  return (
    <div 
      className="cloned-website-container"
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: ${JSON.stringify(bodyContent)} }} 
    />
  );
};

export default ClonedHomepage;
`;

  fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'ClonedHomepage.tsx'), reactComponent);
  console.log('Created ClonedHomepage.tsx!');
  
  // Update index.html to include their global styles and scripts
  let indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  
  const headInject = `
    <!-- Cloned Styles -->
    <link href="/css/style.css" rel="stylesheet" type="text/css">
    <link href="/css/new-form.css" rel="stylesheet" type="text/css">
    <link href="/css/responsive.css" rel="stylesheet" type="text/css">
    <link href="/css/common.css" rel="stylesheet" type="text/css">
    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="/js/jquery.min.js"></script>
    <script src="/css/bootstrap/bootstrap.min.js"></script>
    <!-- End Cloned Styles -->
  `;
  if (!indexHtml.includes('Cloned Styles')) {
      indexHtml = indexHtml.replace('</head>', headInject + '\n  </head>');
      fs.writeFileSync(path.join(__dirname, 'index.html'), indexHtml);
      console.log('Updated index.html');
  }

}

run().catch(console.error);
