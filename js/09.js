// Programa desarrollado por Jose Alejandro Briones Arroyo.
// Práctica 09: Iteradores en JavaScript.

// Estilización de secciones.
const style = "font-weight: bold; font-size: 20px; color: red; text-shadow: 1px 1px 0 rgb(217,31,38), 2px 2px 0 rgb(226,91,14), 3px 3px 0 rgb(245,221,8), 4px 4px 0 rgb(5,148,68), 5px 5px 0 rgb(2,135,206), 6px 6px 0 rgb(4,77,145), 7px 7px 0 rgb(42,21,113); margin-bottom: 6px; padding: 2%";

// Se muestra una advertencia en la consola.
console.warn("----- Práctica 09: Iteradores en JavaScript -----");

// 1. Utilizando un bucle (ciclo) FOR.
console.log("%c1.- Utilizando el Bucle FOR", style);

const sumar = function (a = 0, d = 0) {
    console.log(b + a);
    return a + b;
};

console.log(`El resultado de la suma de: 8 + 4 es = ${sumar(4, 8)}`);

// Reto: Extracción de vocales.
function vocalesExtraidas(palabra) {
    palabra = palabra.toLowerCase();
    const vocales = [];

    for (let i = 0; i < palabra.length; i++) {
        const caracter = palabra[i];

        if ("aeiou".includes(caracter)) {
            vocales.push(caracter);
        }
    }

    return vocales;
}

console.table(vocalesExtraidas("Briones"));
