//Ejercicio 10: Factorial de un número (Ejercicio entrevista) 
//Crea una función expresada llamada calcularFactorial 
// que reciba un número y devuelva su factorial. 

let calcularFactorial = function(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++){
        factorial = factorial * i 
    }
    return factorial;
};

let numero = 6;
console.log(`El factorial de ${numero} es: ${calcularFactorial(numero)}`);