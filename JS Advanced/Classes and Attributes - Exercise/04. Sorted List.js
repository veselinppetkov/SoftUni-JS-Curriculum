class List {
  constructor() {
    this.collection = [];
    this.size = this.collection.length;
  }
  add(number) {
    this.collection.push(number);
    this.collection.sort((a, b) => a - b);
    this.size++;
    return;
  }
  remove(index) {
    if (this.collection[index] != undefined) {
      this.collection.splice(index, 1);
      this.collection.sort((a, b) => a - b);
      this.size--;
      return;
    } else {
      throw new Error(`Invalid index`);
    }
  }
  get(index) {
    if (this.collection[index] != undefined) {
      return this.collection[index];
    } else {
      throw new Error(`Invalid index`);
    }
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
