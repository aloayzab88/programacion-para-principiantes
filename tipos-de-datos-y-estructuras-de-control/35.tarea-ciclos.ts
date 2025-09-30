//ts-worksheet

let base :number = 10;
let limit :number = 50;
let counter :number = 1;

while (counter <= limit) {
    console.log(`${base} x ${counter} = ${base * counter}`);
    counter++;
}

for (let counter: number = 1; counter <= 50; counter++) {
    console.log(`${base} x ${counter} = ${base * counter}`);
}