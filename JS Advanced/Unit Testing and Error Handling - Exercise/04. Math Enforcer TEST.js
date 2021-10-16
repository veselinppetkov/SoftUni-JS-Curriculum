const { expect } = require(`chai`);
const mathEnforcer = require(`./04. Math Enforcer`);

describe(`Add five test package`, () => {
  it(`isNumber`, () => {
    expect(mathEnforcer.addFive("5")).to.equal(undefined);
    expect(mathEnforcer.addFive()).to.equal(undefined);
    expect(mathEnforcer.addFive([1, 2, 3])).to.equal(undefined);
    expect(mathEnforcer.addFive(5)).to.equal(10);
    expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
    expect(mathEnforcer.addFive(-5)).to.equal(0);
  });

  describe(`Subtract ten test package`, () => {
    it(`isNumber`, () => {
      expect(mathEnforcer.subtractTen("5")).to.equal(undefined);
      expect(mathEnforcer.subtractTen()).to.equal(undefined);
      expect(mathEnforcer.subtractTen([1, 2, 3])).to.equal(undefined);
      expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01);
      expect(mathEnforcer.subtractTen(15)).to.equal(5);
      expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
      expect(mathEnforcer.subtractTen(4)).to.equal(-6);
    });
  });

  describe(`Sum test package`, () => {
    it(`Both valid`, () => {
      expect(mathEnforcer.sum(1, "2")).to.equal(undefined);
      expect(mathEnforcer.sum("2", 1)).to.equal(undefined);
      expect(mathEnforcer.sum("1", "2")).to.equal(undefined);
      expect(mathEnforcer.sum("Test", "Test")).to.equal(undefined);
      expect(mathEnforcer.sum(1)).to.equal(undefined);
      expect(mathEnforcer.sum(1, [1, 2, 3])).to.equal(undefined);
      expect(mathEnforcer.sum(1, 4)).to.equal(5);
      expect(mathEnforcer.sum(2.25, 3.8)).to.be.closeTo(6.05, 0.01);
      expect(mathEnforcer.sum(-1, -4)).to.equal(-5);
      expect(mathEnforcer.sum(0, 0)).to.equal(0);
    });
  });
});
