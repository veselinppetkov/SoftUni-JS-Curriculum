class Box<T> {
    private boxes: T[] = [];

    public add(element: T) {
    this.boxes.push(element)
    }

    public remove() {
    this.boxes.pop()
    }

    get count(): number{
        return this.boxes.length
    }
}

let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);


console.log(`-----------`)

let box2 = new Box<String>();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.count);
box2.remove();
console.log(box2.count);


