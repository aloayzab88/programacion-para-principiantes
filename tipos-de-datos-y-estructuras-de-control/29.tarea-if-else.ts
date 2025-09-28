//ts-worksheet
/* 
    Realizar un programa que muestre la nota del alumno como: A, B, C, D, F
    done:
    A >= 90
    B >= 80
    C >= 70
    D >= 60
    F < 60
*/

let score :number = 50;
let grade :string;

if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B'
} else if (score >= 70) {
    grade = 'C'
} else if (score >= 60) {
    grade = 'D'
} else {
    grade = 'F'
} 

console.log(`The student grade is ${grade}`);