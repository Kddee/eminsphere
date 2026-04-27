const fs = require('fs');
const https = require('https');
const path = require('path');

const baseUrl = 'https://internationalconferencealerts.com';
const pagesToClone = [
  { path: '/add-event.php', componentName: 'ClonedAddEvent' },
  { path: '/subscribe.php', componentName: 'ClonedSubscribe' },
  { path: '/journal.php', componentName: 'ClonedJournal' },
  { path: '/blog', componentName: 'ClonedBlog' },
  { path: '/login-page', componentName: 'ClonedLogin' },
  { path: '/all-events.php', componentName: 'ClonedAllEvents' },
  { path: '/upcoming-conferences.php', componentName: 'ClonedUpcoming' },
  { path: '/engineering-conference', componentName: 'ClonedEngineering' },
  { path: '/business-and-economics-conference', componentName: 'ClonedBusiness' },
  { path: '/education-conference', componentName: 'ClonedEducation' }
];

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
       // handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
         return resolve(fetchHtml(res.headers.location));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  let routeImports = '';
  let routeElements = '';

  for (const page of pagesToClone) {
    console.log(`Cloning ${page.path}...`);
    try {
      const html = await fetchHtml(baseUrl + page.path);
      let bodyContent = html;
      
      const bodyStart = html.indexOf('<body');
      const bodyEnd = html.indexOf('</body>');
      if (bodyStart !== -1 && bodyEnd !== -1) {
         const bodyTagEnd = html.indexOf('>', bodyStart) + 1;
         bodyContent = html.substring(bodyTagEnd, bodyEnd);
      }
      
      // replace strict https://internationalconferencealerts.com hrefs with local
      bodyContent = bodyContent.replace(/href="https:\/\/internationalconferencealerts\.com([^"]*)"/g, 'href="$1"');

      const code = `
  import React, { useEffect, useRef } from 'react';

  const ${page.componentName} = () => {
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

  export default ${page.componentName};
  `;
      fs.writeFileSync(path.join(__dirname, 'src', 'pages', `${page.componentName}.tsx`), code);
      
      routeImports += `import ${page.componentName} from "./${page.componentName}";\n`;
      routeElements += `          <Route path="${page.path}" element={<${page.componentName} />} />\n`;
      if (page.path.endsWith('.php')) {
          routeElements += `          <Route path="${page.path.replace('.php', '')}" element={<${page.componentName} />} />\n`;
      }
    } catch(e) {
      console.log(`Error cloning ${page.path}:`, e.message);
    }
  }

  // Update App.tsx
  let appTsx = fs.readFileSync(path.join(__dirname, 'src', 'App.tsx'), 'utf8');
  
  // We need to carefully inject it.
  appTsx = appTsx.replace('import Index from "./pages/Index.tsx";', 
                          'import Index from "./pages/Index.tsx";\n' + routeImports);
  
  appTsx = appTsx.replace('<Route path="/" element={<Index />} />', 
                          '<Route path="/" element={<Index />} />\n' + routeElements);
                          
  fs.writeFileSync(path.join(__dirname, 'src', 'App.tsx'), appTsx);
  console.log("Done inserting all cloned routes into App.tsx!");
}

run().catch(console.error);
