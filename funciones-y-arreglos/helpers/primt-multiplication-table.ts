//ts-worksheet

export function printMultiplicationTabel(base:number, limit:number = 10) {
    if (limit <= 0) {
        throw new Error('Limit must be a positive number');
        
    }
    for (let counter:number = 1; counter <= limit; counter++) {
        console.log(`${base} x ${counter} = ${base * counter}`);
    }
}