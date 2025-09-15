//Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista) 
//Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba 
//una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit. 

const convertirCelsiusAFahrenheit = function(celsius) {
    return (celsius * 9/5 + 32);
};

let celsius = 30;
let fahrenheit = convertirCelsiusAFahrenheit(celsius);

console.log(`${celsius}°C equivalen a ${fahrenheit}°F`);