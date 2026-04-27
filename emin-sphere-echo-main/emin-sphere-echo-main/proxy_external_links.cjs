const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.startsWith('Cloned') && f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find any remaining href="http..." or href="https..." and rewrite them to /preview?url=...
  // Carefully handle both single and double quotes. We only replace external links not starting with /
  const regex = /(href|action)=['\\"]+(https?:\/\/(?!localhost)[^\\"]*)['\\"]+/g;
  
  content = content.replace(regex, (match, attr, externalUrl) => {
      // Don't proxy social media links or mailto
      if (externalUrl.includes('facebook.com') || 
          externalUrl.includes('twitter.com') || 
          externalUrl.includes('instagram.com') || 
          externalUrl.includes('linkedin.com') ||
          externalUrl.includes('mailto:')) {
          return match;
      }

      // Convert to a preview query string URL, making sure to preserve the escaped quotes format
      let proxyUrl = `/preview?url=${encodeURIComponent(externalUrl)}`;
      return `${attr}=\\"${proxyUrl}\\"`; 
  });

  fs.writeFileSync(filePath, content);
  console.log('Proxied external links in', file);
}

// Add the route to App.tsx
let appTsx = fs.readFileSync(path.join(__dirname, 'src', 'App.tsx'), 'utf8');
if (!appTsx.includes('ClonedPreview')) {
  appTsx = appTsx.replace('import ClonedWildcard', 'import ClonedPreview from "./pages/ClonedPreview";\nimport ClonedWildcard');
  appTsx = appTsx.replace('<Route path="*" element={<ClonedWildcard />} />', '<Route path="/preview" element={<ClonedPreview />} />\n          <Route path="*" element={<ClonedWildcard />} />');
  fs.writeFileSync(path.join(__dirname, 'src', 'App.tsx'), appTsx);
  console.log('Added ClonedPreview route to App.tsx');
}

console.log('Done proxying all external links!');
