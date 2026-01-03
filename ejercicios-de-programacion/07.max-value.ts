//ts-worksheet

/* 
7- Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar  max, la función debe de determinar cual es el mayor de los 3 y retornarlo... la función debe de  trabajar así: 
let maxValue = max( 5, 2, 6); 
 console.log( maxValue ); // 6
*/

function max(...args: number[]): number {
    let largestNumber: number = -Infinity;
    for (let index = 0; index < args.length; index++) {
        largestNumber = largestNumber > args[index] ? largestNumber : args[index] ;
    }
    return largestNumber;
}

let maxValue = max(5, 2, 6);
console.log(maxValue);
