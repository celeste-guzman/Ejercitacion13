//Ejercicio 5: Concatenar nombres (función expresada) 
//Crea una función expresada llamada concatenarNombres que reciba dos 
//nombres (nombre y apellido) como parámetros y devuelva el nombre completo concatenado.

const concatenarNombres = function(nombre, apellido) {
    return nombre + ' ' + apellido;
};

let nombre = 'Celeste';
let apellido = 'Guzmán';

console.log('Nombre completo: ',concatenarNombres(nombre, apellido));