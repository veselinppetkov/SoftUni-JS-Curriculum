class Laptop {
  constructor(info, quality) {
    this.info = info;
    this.quality = quality;
    this.isOn = false;
    this.price = 800 - info.age * 2 + this.quality * 0.5;
    this.turnOn = function () {
      this.isOn = true;
      this.quality--;
      this.price = 800 - info.age * 2 + this.quality * 0.5;
    };
    this.turnOff = function () {
      this.isOn = false;
      this.quality--;
      this.price = 800 - info.age * 2 + this.quality * 0.5;
    };
    this.showInfo = function () {
      return JSON.stringify(this.info);
    };
  }
}

let info = { producer: "Dell", age: 2, brand: "XPS" };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
laptop.price = 800 - laptop.info.age * 2 + laptop.quality * 0.5;
console.log(laptop.price);
