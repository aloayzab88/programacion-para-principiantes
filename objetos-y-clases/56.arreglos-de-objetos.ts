//ts-worksheet

interface FamilyMember {
    name: string,
    age: number,
    atHome: boolean
}

let sandra: FamilyMember = {
    name: 'Sandra',
    age: 38,
    atHome: true
}

let alejandro: FamilyMember = {
    name: 'Alejandro',
    age: 37,
    atHome: true
}

let freya: FamilyMember = {
    name: 'Freya',
    age: 8,
    atHome: true
}

let rocket: FamilyMember = {
    name: 'Rocket',
    age: 8,
    atHome: true
}

let family: FamilyMember[] = [sandra, alejandro, freya, rocket];

for (let index = 0; index < family.length; index++) {
    let member = family[index]
    console.log(`${member.name} is ${member.age} years old`);
}