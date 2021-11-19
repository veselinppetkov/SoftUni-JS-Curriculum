const { chromium } = require(`playwright-chromium`);
const { expect } = require(`chai`);

let browser, page;

const mockData = {
  "d953e5fb-a585-4d6b-92d3-ee90697398a0": {
    author: "J.K.Rowling",
    title: "Harry Potter and the Philosopher's Stone",
  },
  "d953e5fb-a585-4d6b-92d3-ee90697398a1": {
    author: "Svetlin Nakov",
    title: "C# Fundamentals",
  },
};
function json(data) {
  return {
    status: 200,
    headers: {
      "Text-Content": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  };
}

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

  it(`loads books`, async () => {
    await page.route(`**/jsonstore/collections/books`, (route) => {
      route.fulfill(json(mockData));
    });
    await page.goto(`http://localhost:5500/02.Book-Library/`);

    await page.click(`text=Load All Books`);

    await page.waitForSelector(`tbody >> tr`);

    const rows = await page.$$eval(`tr`, (rows) =>
      rows.map((r) => r.textContent.trim())
    );

    expect(rows[1]).to.contains(`Harry Potter`);
    expect(rows[1]).to.contains(`Rowling`);
    expect(rows[2]).to.contains(`Nakov`);
    expect(rows[2]).to.contains(`C#`);
  });

  it(`adds a book`, async () => {
    await page.goto(`http://localhost:5500/02.Book-Library/`);

    await page.fill(`form#createForm >> input[name="title"]`, "Godfather 3");
    await page.fill(`form#createForm >> input[name="author"]`, "Mario Puzo");

    const [responseFilled] = await Promise.all([
      page.waitForResponse((response) => response.status() == 200),
      page.click(`form#createForm >> text=Submit`),
    ]);

    const data = responseFilled.statusText();

    expect(data).to.equal(`OK`);
  });

  it(`edits a book`, async () => {
    await page.goto(`http://localhost:5500/02.Book-Library/`);

    await page.click(`text=Load All Books`);
    await page.waitForSelector(`tbody >> tr`);

    await page.click(`.editBtn`);
    await page.waitForSelector(`form#editForm`);

    await page.fill('form#editForm >> input[name="title"]', "LVMH");
    await page.fill('form#editForm >> input[name="author"]', "The best author");

    const [request] = await Promise.all([
      page.waitForRequest((request) => request.method() == "PUT"),
      page.waitForSelector(`form#editForm`),
      page.click(`form#editForm >> text=Save`),
    ]);

    const data = JSON.parse(request.postData());
    expect(data.title).to.equal("LVMH");
    expect(data.author).to.equal("The best author");
  });

  it(`deletes a book`, async () => {
    await page.goto(`http://localhost:5500/02.Book-Library/`);

    await page.click(`text=Load All Books`);
    await page.waitForSelector(`tbody >> tr`);

    await page.click(`button.deleteBtn`);
    await page.on("dialog", async (dialog) => await dialog.accept());

    const [request] = await Promise.all([
      page.waitForRequest((request) => request),
      page.click("tbody >> text=Delete"),
    ]);

    expect(request.method()).to.equal("DELETE");
  });
});
