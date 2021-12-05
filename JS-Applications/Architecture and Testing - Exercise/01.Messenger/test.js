const { chromium } = require(`playwright-chromium`);
const { expect } = require(`chai`);

let browser, page;

describe(`Test package`, async function () {
  this.timeout(10000);

  before(async () => {
    browser = await chromium.launch({ headless: false, slowMo: 1000 });
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

  it(`loads messages`, async () => {
    await page.goto(`http://localhost:5500/01.Messenger/`);

    const [response] = await Promise.all([
      page.waitForResponse((response) => response.status() == 200),
      page.click(`text=Refresh`),
    ]);

    expect(response.status()).to.equal(200);
  });

  it.only(`send messages`, async () => {
    await page.goto(`http://localhost:5500/01.Messenger/`);

    await page.fill(`text=Name`, "Peter");
    await page.fill(`text=Message`, "I' am back!");

    const [request] = await Promise.all([
      page.waitForRequest((request) => request.method() == "POST"),
      page.click(`text=Send`),
    ]);

    const data = JSON.parse(request.postData());
    expect(data.author).to.equal(`Peter`);
    expect(data.content).to.equal("I' am back!");
  });
});
