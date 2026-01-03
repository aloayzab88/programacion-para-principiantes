//ts-worksheet

function printTable(columns: number, rows: number) {
    for (let counterRows = 1; counterRows <= rows; counterRows++) {
        let row: string = '';
        for (let counterColumns = 1 ; counterColumns <= columns; counterColumns++) {
            const cell: number = counterRows * counterColumns;
            row+= '  ' + cell + '  ';
        }
        console.log(row);
    }
}

printTable(5,5);  