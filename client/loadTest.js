const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch({ timeout: 60000 }); // Increase timeout to 60 seconds


  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');

  // Navigate to the transaction page
  await page.type('input[name=addressTo]', 'receiver_address');
  await page.type('input[name=amount]', '100');
  await page.type('input[name=keyword]', 'test_keyword');
  await page.type('input[name=message]', 'Test transaction message');

  // Mock transaction initiation
  await page.click('#initiate-transaction-button');

  // Mock transaction approval
  await page.waitForSelector('#approve-transaction-button');
  await page.click('#approve-transaction-button');

  // Wait for confirmation and capture screenshot
  await page.waitForSelector('#transaction-confirmed');
  await page.screenshot({ path: 'transaction_approved.png' });

  await browser.close();
})();
