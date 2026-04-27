const fs = require('fs');
const https = require('https');
const path = require('path');

const baseUrl = 'https://internationalconferencealerts.com';
let links = new Set();

function extractLinks(content) {
    // Find href="/event/..."
    const regex = /href="\/event\/([^"]+)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        links.add(`/event/${match[1]}`);
    }
}

// Extract from ClonedHomepage and ClonedUpcoming
if (fs.existsSync(path.join(__dirname, 'src', 'pages', 'ClonedHomepage.tsx'))) {
    extractLinks(fs.readFileSync(path.join(__dirname, 'src', 'pages', 'ClonedHomepage.tsx'), 'utf8'));
}
if (fs.existsSync(path.join(__dirname, 'src', 'pages', 'ClonedUpcoming.tsx'))) {
    extractLinks(fs.readFileSync(path.join(__dirname, 'src', 'pages', 'ClonedUpcoming.tsx'), 'utf8'));
}

const pagesToClone = Array.from(links).slice(0, 40); // Limit to 40 events to prevent massive compilation

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
         return resolve(fetchHtml(res.headers.location));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function sanitizeComponentName(link) {
    let parts = link.split('/');
    let basename = parts[parts.length - 1].replace(/\.php$/, '');
    basename = basename.replace(/[^a-zA-Z0-9]/g, '');
    return 'ClonedEvent' + basename.substring(0, 15);
}

async function run() {
  let routeImports = '';
  let routeElements = '';

  console.log(`Found ${links.size} event links. Cloning the first ${pagesToClone.length}...`);

  for (const link of pagesToClone) {
    console.log(`Cloning ${link}...`);
    try {
      const html = await fetchHtml(baseUrl + link);
      let bodyContent = html;
      
      const bodyStart = html.indexOf('<body');
      const bodyEnd = html.indexOf('</body>');
      if (bodyStart !== -1 && bodyEnd !== -1) {
         const bodyTagEnd = html.indexOf('>', bodyStart) + 1;
         bodyContent = html.substring(bodyTagEnd, bodyEnd);
      }
      
      bodyContent = bodyContent.replace(/href="https:\/\/internationalconferencealerts\.com([^"]*)"/g, 'href="$1"');

      const compName = sanitizeComponentName(link);

      const code = `
import React, { useEffect, useRef } from 'react';

const ${compName} = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div 
      className="cloned-website-container"
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: ${JSON.stringify(bodyContent)} }} 
    />
  );
};

export default ${compName};
`;
      fs.writeFileSync(path.join(__dirname, 'src', 'pages', `${compName}.tsx`), code);
      
      routeImports += `import ${compName} from "./pages/${compName}";\n`;
      routeElements += `          <Route path="${link}" element={<${compName} />} />\n`;
    } catch(e) {
      console.log(`Error cloning ${link}:`, e.message);
    }
  }

  // Update App.tsx
  let appTsx = fs.readFileSync(path.join(__dirname, 'src', 'App.tsx'), 'utf8');
  
  appTsx = appTsx.replace('import Index from "./pages/Index.tsx";', 
                          'import Index from "./pages/Index.tsx";\n' + routeImports);
  
  appTsx = appTsx.replace('{/* Upcoming conference pages */}', 
                          '{/* Upcoming conference pages */}\n' + routeElements);
                          
  fs.writeFileSync(path.join(__dirname, 'src', 'App.tsx'), appTsx);
  console.log("Done inserting all event routes into App.tsx!");
}

run().catch(console.error);
