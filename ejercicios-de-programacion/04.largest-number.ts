//ts-worksheet

/* 
4 - Dado el siguiente arreglo: let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5]; 
Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor ?  
*/

let numbers: number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5];
let largest: number = -Infinity;

for (let index = 0; index < numbers.length; index++) {
    largest = numbers[index] > largest ? numbers[index] : largest;
}

console.log(largest);
