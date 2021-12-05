function Hierarchy() {
  class Figure {
    constructor(units = "cm") {
      this.units = units;
    }
    get area() {}
    changeUnits(newUnit) {
      this.units = newUnit;
    }
    scaleParam(param) {
      switch (this.units) {
        case "m":
          param /= 10;
          break;
        case "cm":
          break;
        case "mm":
          param *= 10;
          break;
        default:
          break;
      }
      return param;
    }
    toString() {
      return `Figures units: ${this.units}`;
    }
  }

  class Circle extends Figure {
    constructor(radius, units) {
      super(units);
      this._radius = radius;
    }
    get area() {
      return Number(Math.PI) * Number(Math.pow(this.radius, 2));
    }
    get radius() {
      return this.scaleParam(this._radius);
    }
    toString() {
      return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units) {
      super(units);
      this._width = width;
      this._height = height;
    }
    get area() {
      return this.width * this.height;
    }

    get height() {
      return this.scaleParam(this._height);
    }

    get width() {
      return this.scaleParam(this._width);
    }

    toString() {
      return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
    }
  }

  return {
    Figure,
    Circle,
    Rectangle,
  };
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
console.log(`----------------------`);
let r = new Rectangle(3, 4, "mm");
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40
console.log(`----------------------`);
r.changeUnits("cm");
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4
console.log(`----------------------`);
c.changeUnits("mm");
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
