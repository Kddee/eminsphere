import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER_CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER_ERROR:', err.message));
  page.on('requestfailed', request => {
    console.log(`BROWSER_404: ${request.url()} - ${request.failure()?.errorText || 'Failed'}`);
  });
  
  try {
    await page.goto('http://localhost:8080', { waitUntil: 'load' });
    const content = await page.content();
    console.log('CONTENT_LENGTH:', content.length);
  } catch (e) {
    console.log('GOTO_ERROR:', e.message);
  }

  await browser.close();
})();
