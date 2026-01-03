//ts-worksheet

/* 
9- Crear una función que reciba un arreglo como argumento, la función debe de retornar un nuevo arreglo pero filtrando todos los nombres que empiezan con una determinada letra. 
Ejemplo: let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel']; 
let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );  
console.log( herosWithLetterS ); // She Hulk, Spiderman
*/

let heroesNames: string[] = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];

const heroesThatStartsWith = (heroes: string[], letter: string) => {
    let newHeroes: string[] = [];

    for (let index = 0; index < heroes.length; index++) {
        if (heroes[index].startsWith(letter)) newHeroes.push(heroes[index])
    }

    return newHeroes;

}

let herosWithLetterS = heroesThatStartsWith(heroesNames, 'S'); 
console.log(herosWithLetterS);