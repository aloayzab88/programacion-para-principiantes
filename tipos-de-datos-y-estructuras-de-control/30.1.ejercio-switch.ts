//ts-worksheet
let userSelection: number = 5;
let drink: string = '';

if (userSelection >= 5 || userSelection <= 0) {
    throw new Error('Invalid drink selection'); 
}

switch (userSelection) {
    case 1: drink = 'american'; break;
    case 2: drink = 'expresso'; break;
    case 3: drink = 'capuccino'; break;
    case 4: drink = 'te'; break;
    default:
        throw new Error('Invalid drink selection'); 
}

console.log(`Client selection: ${drink}`);
