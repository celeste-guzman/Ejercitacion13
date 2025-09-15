//Ejercicio 6: Convertir a minutos 
//Crea una función declarada llamada convertirHorasAMinutos que reciba un 
//número de horas como parámetro y devuelva el total en minutos. 

function convertirHorasAMinutos(horas) {
    return horas * 60;
}

let horas = 24;
let minutos = convertirHorasAMinutos(horas);

console.log(`${horas} hora/s equivalen a ${minutos} minutos.`);