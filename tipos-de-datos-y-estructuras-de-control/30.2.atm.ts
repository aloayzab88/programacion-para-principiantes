//ts-worksheet

/* 
    Imagina que estás programando un cajero automático.
    El usuario selecciona una opción en el menú principal escribiendo un número(1 al 4):

    1 → Consultar saldo
    2 → Depositar dinero
    3 → Retirar dinero
    4 → Salir

    Reglas:

    El saldo inicial es de 1000.

    Si selecciona 1, debe mostrarse el saldo actual.

    Si selecciona 2, debe pedir cuánto depositar y sumarlo al saldo.

    Si selecciona 3, debe pedir cuánto retirar:

    Si el monto es mayor al saldo, debe mostrar un error.

    Si no, se descuenta del saldo.

    Si selecciona 4, debe terminar el programa mostrando un mensaje de despedida.

    Cualquier otra opción debe lanzar un error de selección inválida. 
*/

let balance: number = 1000;
let amount: number = 100;
const checkBalance: number = 1;
const deposit :number = 2;
const withdraw :number = 3;
const exit: number =4;
let userInput: number = 3;

switch (userInput) {
    case checkBalance:
        console.log(`Current balance: ${balance}`);
        break;
    case deposit: 
        balance += amount;
        console.log(`Added ${amount} to account. \nNew balance: ${balance}.`);
        break;
    case withdraw: 
        if (balance < amount) {
            throw new Error('Insufficient funds');
        }
        balance -= amount;
        console.log(`Removed ${amount} from account. \nNew balance: ${balance}.`);
        break;
    case exit:
        console.log('Good bye');
        break;
    default:
        throw new Error('Invalid user input.');
}