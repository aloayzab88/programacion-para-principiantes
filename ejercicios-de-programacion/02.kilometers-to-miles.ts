//ts-worksheet

/* 
2 - Convertir de kilómetros a millas, sabiendo que: (1 kilómetro es igual a 0.62 millas ) 
Ejemplo: 10 kilómetros = 6.21 millas 
*/

const kmToMiles = (kms: number): string => `${kms} kilometers = ${kms * 0.62} miles`;

console.log(kmToMiles(2));
