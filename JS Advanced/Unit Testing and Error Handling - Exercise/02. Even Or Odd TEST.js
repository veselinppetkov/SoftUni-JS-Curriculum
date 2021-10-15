const { expect } = require(`chai`);
const isOddOrEven = require(`./02. Even Or Odd`);

describe(`Test package`, () => {
  it(`isString`, () => {
    expect(isOddOrEven(1)).to.be.undefined;
    expect(isOddOrEven([1, 2, 3])).to.be.undefined;
    expect(isOddOrEven({})).to.be.undefined;
  });

  it(`Is Even or Odd`, () => {
    expect(isOddOrEven("hello")).to.equal("odd");
    expect(isOddOrEven("hi")).to.equal("even");
  });
});
