//ts-worksheet

class Car {
    maker: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;
    manufacturingDate: string;

    constructor() {
        this.maker = 'No brand';
        this.doors = 4;
        this.fuelTank = 100;
        this.isRunning = false;
        this.type = 'No type';
        this.manufacturingDate = '00-00-0000'
    }
}

let myCar = new Car();
console.log(myCar);
