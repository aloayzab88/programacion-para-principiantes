//ts-worksheet
let numbers :number[] = [3, 7, 12, 5, 9, 21, 14];
let multipleOf :number = 3;
let multipleCounter :number = 0;

for (let index = 0; index < numbers.length; index++) {
    if (!(numbers[index] % multipleOf)) {
        multipleCounter++;
    }
}

console.log(`There is ${multipleCounter} number(s) multiple of ${multipleOf}`);
