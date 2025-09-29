//ts-worksheet
let weekDay: number = 2;
let day: string;

if (weekDay <= 0 || weekDay > 7) {
    throw new Error('Invalid weekDay');
}

switch (weekDay) {
    case 1:
        day = 'moday';
        break;
    case 2:
        day = 'tuesday';
        break
    case 3:
        day = 'wednesday';
        break
    case 4:
        day = 'thursday';
        break
    case 5:
        day = 'friday';
        break
    case 6:
        day = 'saturday';
        break
    case 7:
        day = 'sunday';
        break
    default:
        throw new Error('Invalid weekDay');
}

console.log(`Today is ${day}`);
