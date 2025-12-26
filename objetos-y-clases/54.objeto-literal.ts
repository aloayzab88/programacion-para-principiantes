//ts-worksheet
let person = {
    name: 'Sandra',
    age: 38,
    isActive: true,
    hobbies: ['felting', 'toy making', 'design'],
    greet() {
        return `My name is ${this.name}`;
        
    }
}

console.log(person);
console.log(person.name);
person.greet();
