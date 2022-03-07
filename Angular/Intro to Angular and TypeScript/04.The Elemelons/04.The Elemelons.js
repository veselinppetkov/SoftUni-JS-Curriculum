class Melon {
    constructor(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}
class Watermelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elementIndex = this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}
class Firemelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elementIndex = this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}
class Earthmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elementIndex = this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}
class Airmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elementIndex = this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}
class Melolemonmelon extends Watermelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.melons = [`Firemelon`, `Earthmelon`, `Airmelon`, `Watermelon`];
        this.melon = `Watermelon`;
    }
    morph() {
        this.melon = this.melons.shift();
        this.melons.push(this.melon);
    }
}
let watermelon = new Watermelon(12.5, `Kingsize`);
console.log(watermelon.toString());
console.log(`-------------------------`);
let firemelon = new Firemelon(16, `Big size`);
console.log(firemelon.toString());
console.log(`-------------------------`);
let earthmelon = new Earthmelon(3, `Smallsize`);
console.log(earthmelon.toString());
console.log(`-------------------------`);
let airmelon = new Airmelon(6, `Medium`);
console.log(airmelon.toString());
console.log(`-------------------------`);
let melolemonmelon = new Melolemonmelon(7, `Special`);
console.log(melolemonmelon.toString());
console.log(`-------------------------`);
melolemonmelon.morph();
console.log(melolemonmelon.toString());
console.log(`-------------------------`);
melolemonmelon.morph();
console.log(melolemonmelon.toString());
console.log(`-------------------------`);
melolemonmelon.morph();
console.log(melolemonmelon.toString());
console.log(`-------------------------`);
melolemonmelon.morph();
console.log(melolemonmelon.toString());
