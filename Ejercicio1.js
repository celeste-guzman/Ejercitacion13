//Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista) 
//Crea una función declarada llamada calcularAreaTriangulo que reciba dos 
//parámetros: la base y la altura de un triángulo. La función debe devolver el 
//área del triángulo. 

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

let base = 10;
let altura = 5;
let area = calcularAreaTriangulo(base, altura);

console.log(`El área del triángulo con base ${base} y altuta ${altura} es: ${area}`);