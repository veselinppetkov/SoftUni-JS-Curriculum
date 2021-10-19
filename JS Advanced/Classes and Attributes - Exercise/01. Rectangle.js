class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  calcArea() {
    return Number(this.height * this.width);
  }
}

let rect = new Rectangle(4, 5, "Red");
console.log(typeof rect.width);
console.log(typeof rect.height);
console.log(typeof rect.color);
console.log(typeof rect.calcArea());
