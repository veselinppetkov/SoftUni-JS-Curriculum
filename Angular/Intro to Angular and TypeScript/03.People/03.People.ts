abstract class Employee {
    public salary:number = 0;
    public tasks: string[] = [];

    constructor(
        public name:string,
        public age:number,
    ) {}

    public work(): void {
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(this.name + currentTask)
    }

    public collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`)
    }

    public getSalary(): number {
        return this.salary;
    }

}

class Junior extends Employee {
    constructor(name: string, age:number) {
        super(name,age);
        this.tasks.push(` is working on a simple task.`)
    }
}

class Senior extends Employee {
    constructor(name: string, age:number) {
        super(name,age);
        this.tasks.push(` is working on a complicated task.`);
        this.tasks.push(` is taking time off work.`);
        this.tasks.push(` is supervising junior workers.`);
    }
}

class Manager extends Employee {
    public divident: number;

    constructor(name: string, age:number) {
        super(name,age)
        this.divident = 0;
        this.tasks.push(` scheduled a meeting.`)
        this.tasks.push(` is preparing a quarterly meeting.`)
    }

    public getSalary(): number {
        return this.salary + this.divident
    }
}

const junior = new Junior(`Ivan`, 24);
junior.salary = 1000;
junior.collectSalary();
junior.work();

console.log(`-----------------`);

const senior = new Senior(`George`, 29);
senior.salary = 3000;
senior.collectSalary();
senior.work();
senior.work();
senior.work();

console.log(`-----------------`);

const manager = new Manager(`Elon`, 55);
manager.salary = 30000;
manager.divident = manager.salary * 0.05;
manager.collectSalary();
manager.work();
manager.work();

