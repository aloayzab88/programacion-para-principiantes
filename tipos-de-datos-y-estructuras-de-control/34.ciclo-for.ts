//ts-worksheet

for (let counter = 1; counter <= 10; counter++) {
    if (counter === 3) {
        continue;
    }
    
    console.log(`counter is ${counter}`);

    if (counter === 5) break;
}

console.log('End of program');
