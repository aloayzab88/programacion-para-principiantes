//ts-worksheet
let maxAttempts :number = 3;
let failAttempts :number = 0;
let correctPin :number = 1234;

while (failAttempts < maxAttempts) {
    let userPin :number = 4321;
    if (userPin == correctPin) {
        console.log('Welcome to the system.');
        break;
    } else {
        failAttempts++;
        console.log(`Wrong PIN. ${maxAttempts - failAttempts} attemps left.`);
    }
    if (failAttempts == maxAttempts) console.log(`Account blocked for security.`);
}