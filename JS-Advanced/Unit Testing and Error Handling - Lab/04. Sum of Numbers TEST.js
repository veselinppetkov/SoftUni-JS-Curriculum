const sum = require(`./04. Sum of Numbers`);
const { expect } = require(`chai`);

describe(`Test Group`, () => {
  it(`Array of numbers checker`, () => {
    expect(sum([1, 2, 3])).to.be.a(`number`);
  });

  it(`Sum checker`, () => {
    expect(sum([1, 2, 3])).to.be.equal(6);
  });
});
