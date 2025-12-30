//ts-worksheet

class Car {
    // This property can be read only at run time
    readonly maker: string;
    // this means that this property can't be set outside the class during development, doesn't work on the copiled file
    readonly doors: number; 
    // but this property with # can't be set or get even on the compiled file
    #fuelTank: number; 
    #fuelTankCapacity: number;
    #isRunning: boolean;
    readonly type: string;
    // The property only can be used inside the class at run time, doesn't work at compilation.
    private readonly manufacturingDate: string; 

    constructor(maker: string, doors: number, fuelTank: number, fuelTankCapacity: number, type: string, manufacturingDate: string) {
        this.maker = maker;
        this.doors = doors;
        this.#fuelTank = fuelTank;
        this.#fuelTankCapacity = fuelTankCapacity;
        this.#isRunning = false;
        this.type = type;
        this.manufacturingDate = manufacturingDate
    }

    get fuelTank(): number {
        return this.#fuelTank;
    }

    get fuelTankCapacity(): number {
        return this.#fuelTankCapacity;
    }

    get isRunning(): boolean {
        return this.#isRunning;
    }

    turnOn() {
        if (this.#isRunning) return `The car is already on.`;

        if (this.#fuelTank <= 0) return `The gas tank is empty.`
        
        this.#isRunning = true;
        return `The car is on.`;
    }

    fillTank(gas: number) {
        if (gas <= 0 ) throw new Error('Added gas must be positive number');

        const newFuelTank: number = this.#fuelTank + gas;

        if (newFuelTank > this.#fuelTankCapacity) {
            const excedent = newFuelTank - this.#fuelTankCapacity;
            this.#fuelTank = this.#fuelTankCapacity;
            return `Gas tank is full. ${excedent} was not added`;
        } else {
            this.#fuelTank = newFuelTank;
            return `Gas tanks is at ${this.#fuelTank}`
        }
        
    }
}

let myCar = new Car('Toyota', 4, 0, 100, 'Sedan', '2025-12-29');
console.log(myCar);
myCar.turnOn();
myCar.turnOn();
myCar.fillTank(40);
myCar.fillTank(50);
myCar.fillTank(50);