const { expect } = require(`chai`);
const lookupChar = require(`./03. Char Lookup`);

describe(`Test package`, () => {
  it(`Are both elements valid?`, () => {
    expect(lookupChar("Test", "1")).to.equal(undefined);
    expect(lookupChar("Test", 1.22)).to.equal(undefined);
    expect(lookupChar(1, 5)).to.equal(undefined);
    expect(lookupChar(25, "Test")).to.equal(undefined);
    expect(lookupChar(NaN, 5)).to.equal(undefined);
    expect(lookupChar("Test", null)).to.equal(undefined);
    expect(lookupChar("Test", 3)).to.equal("t");
  });

  it(`Invalid index`, () => {
    expect(lookupChar("Test", 10)).to.equal(`Incorrect index`);
    expect(lookupChar("Test", -3)).to.equal(`Incorrect index`);
    expect(lookupChar("Test", 4)).to.equal(`Incorrect index`);
  });

  it(`If both elements valid`, () => {
    expect(lookupChar("Test", 3)).to.equal(`t`);
    expect(lookupChar("D", 0)).to.equal(`D`);
  });
});
