class Box {
    constructor() {
        this.boxes = [];
    }
    add(element) {
        this.boxes.push(element);
    }
    remove() {
        this.boxes.pop();
    }
    get count() {
        return this.boxes.length;
    }
}
let box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);
console.log(`-----------`);
let box2 = new Box();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.count);
box2.remove();
console.log(box2.count);
