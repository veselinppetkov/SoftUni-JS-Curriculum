const { chromium } = require(`playwright-chromium`);
const { expect } = require(`chai`);

let browser, page;

describe(`E2E Test package`, async function () {
  this.timeout(3000);

  before(async () => {
    browser = await chromium.launch();
  });
  after(async () => {
    await browser.close();
  });
  beforeEach(async () => {
    page = await browser.newPage();
  });
  afterEach(async () => {
    await page.close();
  });

  it(`Initial load`, async () => {
    await page.goto(`http://127.0.0.1:5500/01.%20Accordion/`);

    await page.waitForSelector(`.accordion`);

    const content = await page.textContent(`#main`);

    expect(content).to.contains(`Scalable Vector Graphics`);
    expect(content).to.contains(`Unix`);
    expect(content).to.contains(`Open standard`);
    expect(content).to.contains(`ALGOL`);
  });

  it(`moreBtn functionality`, async () => {
    await page.goto(`http://127.0.0.1:5500/01.%20Accordion/`);
    await page.waitForSelector(`.accordion`);

    await page.click(`text=More`);
    await page.waitForResponse(/articles\/details/i);

    const visible = await page.isVisible(`.accordion p`);
    expect(visible).to.be.true;
  });

  it(`lessBtn functionality`, async () => {
    await page.goto(`http://127.0.0.1:5500/01.%20Accordion/`);
    await page.waitForSelector(`.accordion`);

    await page.click(`text=More`);
    await page.waitForResponse(/articles\/details/i);

    await page.click(`text=Less`);

    const visible = await page.isVisible(`.accordion p`);
    expect(visible).to.be.false;
  });
});
