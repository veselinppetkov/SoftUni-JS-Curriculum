const isSymmetric = require(`./05. Check for Symmetry`);
const { expect } = require(`chai`);

describe(`Test Group`, () => {
  it(`Symetric checker`, () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });

  it(`Non-symetric checker`, () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
  });

  it(`Incorrect element`, () => {
    expect(isSymmetric([1, 2, "1"])).to.be.false;
  });

  it(`Array checker`, () => {
    expect(isSymmetric(1)).to.be.false;
  });

  it(`String parameter checker`, () => {
    expect(isSymmetric("abba")).to.be.false;
  });

  // Test overloading

  it(`Symetric checker with odd number of elements`, () => {
    expect(isSymmetric([1, 2, 1])).to.be.true;
  });

  it(`Symetric array with strings`, () => {
    expect(isSymmetric(["a", "b", "b", "a"])).to.be.true;
  });

  it(`Non-Symetric array with strings`, () => {
    expect(isSymmetric(["a", "b", "c"])).to.be.false;
  });
});
