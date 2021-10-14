const { rgbToHexColor } = require(`./06. RGB to Hex`);
const { expect } = require(`chai`);

describe(`Test Group`, () => {
  it(`Elements within range`, () => {
    expect(rgbToHexColor(255, 0, 0)).to.equal(`#FF0000`);
    expect(rgbToHexColor(0, 255, 0)).to.equal(`#00FF00`);
    expect(rgbToHexColor(0, 0, 255)).to.equal(`#0000FF`);
  });

  it(`Invalid elements`, () => {
    expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
    expect(rgbToHexColor(255, 255, "255")).to.be.undefined;
    expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
    expect(rgbToHexColor("0", "0", "0")).to.be.undefined;
    expect(rgbToHexColor(255, 255)).to.be.undefined;
    expect(rgbToHexColor(255, 256, 0)).to.be.undefined;
    expect(rgbToHexColor(256, 255, 0)).to.be.undefined;
    expect(rgbToHexColor(256, 0, 255)).to.be.undefined;
  });
});
