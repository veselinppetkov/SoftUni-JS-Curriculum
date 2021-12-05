const testNumbers = require(`./03. Test Numbers`);
const { expect } = require(`chai`);

describe(`Test package`, () => {
  describe(`sumNumber method`, () => {
    it(`Check if parameters are nums`, () => {
      expect(testNumbers.sumNumbers(1, 2)).to.equal("3.00");
      expect(testNumbers.sumNumbers(-1, -2)).to.equal("-3.00");
      expect(testNumbers.sumNumbers(1, -2)).to.equal("-1.00");
      expect(testNumbers.sumNumbers(-1, 5)).to.equal("4.00");
      expect(testNumbers.sumNumbers(1.5, 3.5)).to.equal("5.00");
    });

    it(`Check if parameters are not nums`, () => {
      expect(testNumbers.sumNumbers("1", 2)).to.be.undefined;
      expect(testNumbers.sumNumbers(1, "2")).to.be.undefined;
      expect(testNumbers.sumNumbers(2)).to.be.undefined;
      expect(testNumbers.sumNumbers("1", "2")).to.be.undefined;
      expect(testNumbers.sumNumbers([])).to.be.undefined;
      expect(testNumbers.sumNumbers("", 4)).to.be.undefined;
    });
  });
  describe(`numberChecker method`, () => {
    it(`Check if parameter is a number`, () => {
      expect(() => testNumbers.numberChecker("a")).to.throw();
      expect(() => testNumbers.numberChecker()).to.throw();
      expect(() => testNumbers.numberChecker([1, 2, 3])).to.throw();
      expect(() => testNumbers.numberChecker("1")).to.not.throw();
    });

    it(`Check if num is a odd`, () => {
      expect(testNumbers.numberChecker(2)).to.equal("The number is even!");
    });
    it(`Check if num is a even`, () => {
      expect(testNumbers.numberChecker(1)).to.equal("The number is odd!");
    });
  });

  describe(`averageSumArray method`, () => {
    it(`Check interator`, () => {
      expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
    });
    it(`Check interator`, () => {
      expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
    });
  });
});
