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

    turnOn() {
        if (this.isRunning) return `The car is already on.`;

        if (this.fuelTank <= 0) return `The gas tank is empty.`
        
        this.isRunning = true;
        return `The car is on.`;
    }
}

let myCar = new Car();
console.log(myCar);
myCar.turnOn();
myCar.turnOn();
