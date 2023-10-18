// Programa desarrollado por Jose Alejandro Briones Arroyo.
// Práctica 12: Otros métodos útiles para arreglos.

// Estilización de secciones.
const style = "font-weight: bold; font-size: 20px; color: red; text-shadow: 1px 1px 0 rgb(217,31,38), 2px 2px 0 rgb(226,91,14), 3px 3px 0 rgb(245,221,8), 4px 4px 0 rgb(5,148,68), 5px 5px 0 rgb(2,135,206), 6px 6px 0 rgb(4,77,145), 7px 7px 0 rgb(42,21,113); margin-bottom: 6px; padding: 2%";

// Se muestra una advertencia en la consola.
console.warn("-- Práctica 12: Setencias de control --");

// 1. Estructura IF.
console.log("%c1.- SI (IF)", style);
let mayorEdad = true;

if (mayorEdad == true) {
    console.log("Es mayor de edad");
}

// 2. Estructura IF - ELSE.
console.log("%c2.- SI, ADEMAS (IF - ELSE)", style);
if (mayorEdad == true) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// 3. Estructura ELSE IF.
console.log("%c3.- SI, ADEMAS SI (IF - ELSE IF)", style);
let persona = { nombre: "Briones", edad: 12, pais: "US", mayorEdad: null };

if (persona.pais == "MX") {
    if (persona.edad >= 18 && persona.pais === "MX") {
        persona.mayorEdad = true;
    } else {
        persona.mayorEdad = false;
    }
} else if (persona.pais == "US") {
    if (persona.edad >= 21 && persona.pais === "US") {
        persona.mayorEdad = true;
    } else {
        persona.mayorEdad = false;
    }
}

console.table(persona);

// 4. Operadores Ternarios
console.log("%c4.- Operador ternario ( ? : )", style);
console.log("Verificando la mayotía de Edad usando el operador ternario");

/* Validacion ? si es correcto : si no es correcto : default */
mayorEdad ? console.log("Es mayor de edad") : console.log("No es mayor de edad");

persona.pais == "MX" ? (persona.edad >= 18 ? (persona.mayorEdad = true) : (persona.mayorEdad = false)) : persona.pais == "US" ? (persona.edad >= 21 ? (persona.mayorEdad = true) : (persona.mayorEdad = false)) : undefined;

console.log("Los datos del objeto persona son:");
console.table(persona);

let a = 2,
    b = 2.0,
    c = "2";

console.log("Creando una variable a y asignandole un valor numérico = " + a);
console.log("Creando una variable b y asignandole un valor numérico = " + b);
console.log("Creando una variable c y asignandole un valor numérico = " + c);
console.log("Ya que estan inicializadas empezamos a comparar");

console.log(`Es a IGUAL b ?: ${a == b ? true : false}`);
console.log(`Es b IGUAL c ?: ${b == c ? true : false}`);
console.log(`Es a IGUAL c ?: ${a == c ? true : false}`);
console.log(`Es a IGUAL b ?: ${a === b ? true : false}`);
