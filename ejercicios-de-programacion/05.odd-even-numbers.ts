//ts-worksheet

/* 
5- Dado el siguiente arreglo: let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ]; 
Haga una impresión en consola así: 
1 es un número impar 
2 es un número par
3 es un número impar
..
6 es un número par 
*/

let numbers: number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5]; 

for (let index = 0; index < numbers.length; index++) {
    console.log(`${numbers[index]} is an ${numbers[index] % 2 ? 'odd': 'even'} number`);    
}