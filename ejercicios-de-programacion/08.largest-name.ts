//ts-worksheet

/* 
8- Crear una función que reciba como argumento un arreglo, la función debe de retornar el  nombre que tenga más letras del arreglo, y debe de trabajar así: 
let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier']; 
let hero = largestNameOfArray( heroes ); 
console.log( hero ); // Profesor Charles Xavier
*/

let heroes: string[] = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier']; 

const largestNameOfArray = (names: string[]): string => { 
    let largestName: string = '';
    for (let index = 0; index < names.length; index++) {
        largestName = largestName.length > names[index].length ? largestName : names[index];
    }
    return largestName;
}

let hero = largestNameOfArray(heroes); 
console.log(hero)