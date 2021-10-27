function solve() {
  class Balloon {
    constructor(color, hasWeight) {
      this.color = color;
      this.hasWeight = Number(hasWeight);
    }
  }

  class PartyBalloon extends Balloon {
    constructor(color, hasWeight, ribbonColor, ribbonLength) {
      super(color, hasWeight);
      this._ribbon = {
        color: ribbonColor,
        lenght: Number(ribbonLength),
      };
    }
    get ribbon() {
      return this._ribbon;
    }
  }

  class BirthdayBalloon extends PartyBalloon {
    constructor(color, hasWeight, ribbonColor, ribbonLength, text) {
      super(color, hasWeight, ribbonColor, ribbonLength);
      this._text = text;
    }
    get text() {
      return this._text;
    }
  }

  return {
    Balloon: Balloon,
    PartyBalloon: PartyBalloon,
    BirthdayBalloon: BirthdayBalloon,
  };
}
