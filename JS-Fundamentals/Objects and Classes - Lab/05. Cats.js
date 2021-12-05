function cats(arr) {
  class cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let tokens of arr) {
    let [name, age] = tokens.split(" ");
    let newCat = new cat(name, age);
    newCat.meow();
  }
}
cats(["Mellow 2", "Tom 5", "BooBoo 10"]);
