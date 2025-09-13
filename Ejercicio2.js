//Ejercicio 2: Número mayor (función expresada) 
//Crea una función expresada llamada encontrarMayor que reciba dos 
//números como parámetros y devuelva el número mayor.

const encontrarMayor = function(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};

let numero1 = 10;
let numero2 = 33;

console.log(`El número mayor ente ${numero1} y ${numero2} es: ${encontrarMayor(numero1, numero2)}`);