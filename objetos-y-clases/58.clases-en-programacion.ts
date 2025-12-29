//ts-worksheet

class Car {
    maker: string;
    doors: number;
    fuelTank: number;
    fuelTankCapacity: number;
    isRunning: boolean;
    type: string;
    manufacturingDate: string;

    constructor() {
        this.maker = 'No brand';
        this.doors = 4;
        this.fuelTank = 0;
        this.fuelTankCapacity = 100;
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

    fillTank(gas: number) {
        if (gas <= 0 ) throw new Error('Added must be positive');

        const newFuelTank: number = this.fuelTank + gas;

        if (newFuelTank > this.fuelTankCapacity) {
            const excedent = newFuelTank - this.fuelTankCapacity;
            this.fuelTank = this.fuelTankCapacity;
            return `Gas tank is full. ${excedent} was not added`;
        } else {
            this.fuelTank = newFuelTank;
            return `Gas tanks is at ${this.fuelTank}`
        }
        
    }
}

let myCar = new Car();
console.log(myCar);
myCar.turnOn();
myCar.turnOn();
myCar.fillTank(40);
myCar.fillTank(50);
myCar.fillTank(50);