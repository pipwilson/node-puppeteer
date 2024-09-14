const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://how-many-people-in-space.onrender.com/');
  await page.screenshot({path: 'spaaaaaace.png'});
  await browser.close();
})();