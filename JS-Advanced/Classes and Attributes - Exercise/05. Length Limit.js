class Stringer {
  constructor(string, length) {
    this.innerString = string;
    this.innerLength = length;
  }
  increase(value) {
    this.innerLength += value;
  }
  decrease(value) {
    if (this.innerLength - value < 0) {
      return (this.innerLength = 0);
    }
    this.innerLength -= value;
  }
  toString() {
    if (this.innerString.length > this.innerLength) {
      let innerCopy = this.innerString.substring(0, this.innerLength);
      return (innerCopy += `...`);
    }
    return this.innerString;
  }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
