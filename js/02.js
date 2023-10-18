// Programa desarrollado por Jose Alejandro Briones Arroyo.
// Práctica 02: Declaración de Variables.

// Declaración de variables en ECMAScript 6 (ES6).

// Estilización de secciones.
const style = "font-weight: bold; font-size: 20px; color: red; text-shadow: 1px 1px 0 rgb(217,31,38), 2px 2px 0 rgb(226,91,14), 3px 3px 0 rgb(245,221,8), 4px 4px 0 rgb(5,148,68), 5px 5px 0 rgb(2,135,206), 6px 6px 0 rgb(4,77,145), 7px 7px 0 rgb(42,21,113); margin-bottom: 6px; padding: 2%";

// Muestra una advertencia en la consola.
console.warn("----- Práctica 02: Declaración de Variables -----");

// Declaración de variable con VAR (obsoleta).
console.error("%ca) Declaración con VAR.", style);

// Variables declaradas con "var" pueden ser redefinidas.
// Actualmente se prefiere "let" o "const" en lugar de "var".
// El valor de "var" puede ser asignado después de la declaración.
// El valor puede ser actualizado.
var nombre = "Briones";
console.log("Hola " + nombre);
console.log(typeof nombre);
nombre = 17;
console.log("Hola " + nombre);
console.log(typeof nombre);
// Console.log("Hola " + fecha_nacimiento);

// Declaración de variable con LET (recomendada).
console.error("%ca) Declaración con LET.", style);

// Variables declaradas con "let" son redefinibles, pueden ser declaradas sin valor inicializado,
// se pueden reasignar y pueden cambiar de tipo de dato.
let colorFavorito = "Azul"; // Utilizando "let" para declarar una variable.
console.log(`Tu color favorito es ${colorFavorito}`);
console.log(typeof colorFavorito);
colorFavorito = 278;
console.log(`Tu color favorito es ${colorFavorito}`);
console.log(typeof colorFavorito);

// Declaración de variable con CONST (para constantes).
console.error("%ca) Declaración con CONST.", style);

// "const" se utiliza para crear constantes, valores que no cambian durante su uso.
// No se pueden declarar constantes sin inicialización.
const cancionFavorita = "R U Mine?";
console.log(`Tu canción favorita es ${cancionFavorita}`);
console.log(typeof cancionFavorita);

// Declaración de variables numéricas.
let num1 = 1;
let num2 = "1";

// Compara si num1 y num2 son estrictamente iguales en valor y tipo.
if (num1 === num2) {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}
