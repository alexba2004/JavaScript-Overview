// Programa desarrollado por Jose Alejandro Briones Arroyo.
// Práctica 03: Tipos de Datos.

// Estilización de secciones
const style = "font-weight: bold; font-size: 20px; color: red; text-shadow: 1px 1px 0 rgb(217,31,38), 2px 2px 0 rgb(226,91,14), 3px 3px 0 rgb(245,221,8), 4px 4px 0 rgb(5,148,68), 5px 5px 0 rgb(2,135,206), 6px 6px 0 rgb(4,77,145), 7px 7px 0 rgb(42,21,113); margin-bottom: 6px; padding: 2%";

// Se muestra una advertencia en la consola.
console.warn("----- Práctica 03: Tipos de Datos -----");

// 1. UNDEFINED (INDEFINIDO)
console.log("%c1.- UNDEFINED (INDEFINIDO)", style);

// Declaración de una variable sin asignarle un valor.
let nombreCliente;
console.log(nombreCliente); // Se mostrará "undefined" ya que la variable no tiene valor.
console.log(typeof nombreCliente); // Se muestra el tipo de dato, que es "undefined".

// 2. BOOLEAN (BOOLEANO)
console.log("%c2.- BOOLEAN (BOOLEANO) - (TRUE O FALSE)", style);

// Declaración de variables booleanas.
let mayorEdad = true;
let alumnoInscrito = false;
console.log(`¿Es mayor de edad? ${mayorEdad}`);
console.log(typeof mayorEdad); // Muestra el tipo de dato, que es "boolean".

console.log(`¿Está inscrito? ${alumnoInscrito}`);
console.log(typeof alumnoInscrito);

// 3. NUMBER (NÚMERO)
console.log("%c3.- NUMBER (NÚMERO) - (INT, DOUBLE, FLOAT, NEGATIVE...)", style);

// Declaración de variables numéricas.
const edad = 15;
const precio = 114.5;
const temperatura = -5;
let tipoMoneda;

console.log(typeof precio); // Muestra el tipo de dato, que es "number".

tipoMoneda = "pesos.";

console.log(`Tu edad es de: ${edad} años.`);
console.log(typeof edad); // Muestra el tipo de dato, que es "number".

console.log(`El precio del producto es de: $${precio} ${tipoMoneda}`);
console.log(typeof precio);

console.log(`La temperatura actual es de: ${temperatura} °C`);
console.log(typeof temperatura);

// 4. STRING (CADENA DE CARACTERES)
console.log("%c4.- STRING (CADENA DE CARACTERES) - (VARCHAR)", style);

// Asignación de valores a variables de tipo string.
nombreCliente = "Jose Alejandro Briones Arroyo";
let genero = "Masculino";
let direccion = "Avenida 16 de Septiembre No. 125, Col. Centro, Xicotepec de Juárez, Puebla";

console.log(`### DATOS DEL CLIENTE ###`);
console.log(`Nombre: ${nombreCliente},`, typeof nombreCliente); // Muestra el tipo de dato, que es "string".
console.log(`Género: ${genero},`, typeof genero);
console.log(`Edad: ${edad},`, typeof edad);
console.log(`Dirección: ${direccion},`, typeof direccion);

// 5. BIGINT (ENTERO GRANDE)
console.log("%c5.- BIGINT (ENTERO GRANDE)", style);

// Declaración de variables de tipo BigInt.
let numero12posiciones = 123456789012;
let numero24posiciones = BigInt(123456789012345678901234);

console.log(`El valor es de: ${numero12posiciones},`, typeof numero12posiciones); // Muestra el tipo de dato, que es "number".
console.log(`El valor es de: ${numero24posiciones},`, typeof numero24posiciones); // Muestra el tipo de dato, que es "bigint".

numero12posiciones = BigInt(numero12posiciones); // Conversión a BigInt.

// console.log(`El resultado de la suma es: `, numero12posiciones + numero24posiciones);

// 6. SYMBOL (SÍMBOLO)
console.log("%c6.- SYMBOL (SÍMBOLO)", style);

// Declaración de variables de tipo Symbol.
const n1 = Symbol(30);
const n2 = 30;

console.log(`El valor es de: `, n1, typeof n1); // Muestra el tipo de dato, que es "symbol".
console.log(`El valor es de: ${n2},`, typeof n2);
console.log(n1 === n2);

// 7. NULL (NULO)
console.log("%c7.- NULL (NULO)", style);

// Declaración de una variable con valor nulo.
const descuento = null;
console.log(typeof descuento); // Muestra el tipo de dato, que es "object".
