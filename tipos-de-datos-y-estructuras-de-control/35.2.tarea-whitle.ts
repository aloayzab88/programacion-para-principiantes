//ts-worksheet

let gas :number = 50;
let kmTraveled :number = 0;

while (gas > 0) {
    let gasUsed : number = Math.floor(Math.random() * 5) + 1;
    gas-= gasUsed;
    kmTraveled++;
}

console.log(`With 50L of gas we travelled ${kmTraveled}km`);
