const { createCalculator } = require(`./07. Add n Subtract`);
const { expect } = require(`chai`);

describe(`Test package #1`, () => {
  let instance = null;

  beforeEach(() => {
    instance = createCalculator();
  });

  it(`All methods`, () => {
    expect(instance).to.has.ownProperty(`add`);
    expect(instance).to.has.ownProperty(`subtract`);
    expect(instance).to.has.ownProperty(`get`);
  });

  it(`Empty`, () => {
    expect(instance.get()).to.equal(0);
  });

  it(`Adds single number`, () => {
    instance.add(1);
    expect(instance.get()).to.equal(1);
  });

  it(`Adds multiple number`, () => {
    instance.add(1);
    instance.add(2);
    expect(instance.get()).to.equal(3);
  });

  it(`Subtracts single number`, () => {
    instance.add(1);
    instance.subtract(2);
    expect(instance.get()).to.equal(-1);
  });

  it(`Adds multiple number`, () => {
    instance.add(5);
    instance.subtract(2);
    instance.subtract(1);
    expect(instance.get()).to.equal(2);
  });

  it(`Adds multiple number and subtracts`, () => {
    instance.add("5");
    instance.add("3");
    instance.subtract("2");
    expect(instance.get()).to.equal(6);
  });

  it(`Numbers as strings`, () => {
    instance.add("1");
    instance.subtract("2");
    expect(instance.get()).to.equal(-1);
  });
});
