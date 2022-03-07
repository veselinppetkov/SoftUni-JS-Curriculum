abstract class Melon {
    constructor(
        public weight:number,
        public melonSort:string
    ) {}
}   
class Watermelon extends Melon {
    constructor(weight: number, melonSort:string) {
        super(weight,melonSort)
    }
    private elementIndex: number = this.weight * this.melonSort.length;

    toString(): string {
        return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
    }
}
class Firemelon extends Melon {
    constructor(weight: number, melonSort:string) {
        super(weight,melonSort)
    }
    private elementIndex: number = this.weight * this.melonSort.length;

    toString(): string {
        return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
    }
}
class Earthmelon extends Melon {
    constructor(weight: number, melonSort:string) {
        super(weight,melonSort)
    }
    private elementIndex: number = this.weight * this.melonSort.length;

    toString(): string {
        return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
    }
}
class Airmelon extends Melon {
    constructor(weight: number, melonSort:string) {
        super(weight,melonSort)
    }
    private elementIndex: number = this.weight * this.melonSort.length;

    toString(): string {
        return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
    }
}

class Melolemonmelon extends Watermelon {
    private melons: string[];
    private melon: string;

    constructor(weight:number, melonSort:string) {
        super(weight, melonSort)
        this.melons = [`Firemelon`, `Earthmelon`, `Airmelon`,`Watermelon`];
        this.melon = `Watermelon`
    }

    public morph(): void {
    this.melon = this.melons.shift()
    this.melons.push(this.melon);
    }

}
 
let watermelon: Watermelon = new Watermelon(12.5, `Kingsize`)
console.log(watermelon.toString())
console.log(`-------------------------`)

let firemelon: Firemelon = new Firemelon(16, `Big size`)
console.log(firemelon.toString())
console.log(`-------------------------`)


let earthmelon: Earthmelon = new Earthmelon(3, `Smallsize`)
console.log(earthmelon.toString())
console.log(`-------------------------`)


let airmelon: Airmelon = new Airmelon(6, `Medium`)
console.log(airmelon.toString())
console.log(`-------------------------`)


let melolemonmelon: Melolemonmelon = new Melolemonmelon(7, `Special`)
console.log(melolemonmelon.toString())
console.log(`-------------------------`)

melolemonmelon.morph()
console.log(melolemonmelon.toString())
console.log(`-------------------------`)

melolemonmelon.morph()
console.log(melolemonmelon.toString())
console.log(`-------------------------`)

melolemonmelon.morph()
console.log(melolemonmelon.toString())
console.log(`-------------------------`)

melolemonmelon.morph()
console.log(melolemonmelon.toString())


