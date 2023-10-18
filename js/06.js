// Programa desarrollado por Jose Alejandro Briones Arroyo.
// Práctica 06: Arreglos (Arrays) en JavaScript.

// Estilización de secciones
const style = "font-weight: bold; font-size: 20px; color: red; text-shadow: 1px 1px 0 rgb(217,31,38), 2px 2px 0 rgb(226,91,14), 3px 3px 0 rgb(245,221,8), 4px 4px 0 rgb(5,148,68), 5px 5px 0 rgb(2,135,206), 6px 6px 0 rgb(4,77,145), 7px 7px 0 rgb(42,21,113); margin-bottom: 6px; padding: 2%";

// Se muestra una advertencia en la consola.
console.warn("----- Práctica 06: Arreglos (Arrays) en JavaScript -----");

// 1. Declaración de un arreglo (Array).
console.log("%c1.- Declaración de un arreglo (ARRAY)", style);

const meses = ["Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Perico", "Septiembre", "Octubre", "Noviembre"];
console.log(meses);
console.table(meses);
console.log(typeof meses);

// Arreglo Mixto.
let arregloMixto = ["String", 10, -58.2, false, Symbol(45), "a", -0.000001, true, { prop1: "valor", prop2: "2" }];
console.log(arregloMixto);
console.table(arregloMixto);
console.log(arregloMixto);

// Arreglo Bidimensional.
let arregloBidimensional = [(1, 2, 3), ("a", "b", "c", "d")];
console.log(arregloBidimensional);
console.table(arregloBidimensional);
console.log(arregloBidimensional[1][2]);

// 2. Recuperar el valor de los elementos de un arreglo.
console.log("%c2.- Recuperar el valor de los elementos de un arreglo", style);
console.log(`El mes en la posición 8: ${meses[8]}, que en realidad es el noveno mes, porque en arreglos la posición siempre será n-1`);
console.log(`Accediendo al elemento en la posición 12 del arreglo mixto: ${arregloMixto[12]}`);

// 3. Funciones de un arreglo (Array Methods).
console.log("%c3.- Funciones de un arreglo (Array Methods)", style);
console.log("Para saber el total de elementos de un arreglo utilizaremos el método: LENGTH");
console.log(`El arreglo de meses tiene: ${meses.length} elementos`);
console.log(`El arreglo de arregloMixto tiene: ${arregloMixto.length} elementos`);

// PUSH.
console.log("Para agregar un elemento al arreglo en la posición final usaremos el método: PUSH");
meses.push("Gato");
console.table(meses);

// UNSHIFT.
console.log("Para agregar un elemento al arreglo en la posición inicial usaremos el método: UNSHIFT");
meses.unshift("Perro");
console.table(meses);

// POP.
console.log("Para eliminar un elemento al arreglo en la posición final usaremos el método: POP");
console.log(`Eliminando el elemento en la última posición: ${meses[meses.length - 1]}`);
meses.pop(); // Eliminar el incorrecto
meses.push("Diciembre");
console.log("El arreglo actual es:");
console.table(meses);

// SHIFT.
console.log("Para eliminar un elemento al arreglo en la posición inicial usaremos el método: SHIFT");
console.log(`Eliminando el elemento en la primera posición: ${meses[0]}`);
meses.shift(); // Eliminar el incorrecto.
meses.unshift("Enero");
console.log("El arreglo actual es:");
console.table(meses);

// SPLICE.
console.log("Dividir el arreglo original, sacar los primeros 3 elementos");
// meses.splice(3); // Si no se mandan 2 parámetros, elimina los restantes a su tamaño.
meses.splice(7, 1);
console.table(meses);

// 4. Métodos para manipulación de Arreglo que no mutan al arreglo original.
console.log("%c4.- Métodos para manipulación de Arreglo, que no mutan al arreglo original", style);
let signoZodiacales = ["Aries", "Tauro", "Geminis", "Cancer", "Leo", "Virgio", "Libra", "Escorpion", "Sagitario", "Capricornio", "Piscis", "Acuario"];

console.log(`EL TOTAL DE SIGNOS ZODIACALES ES: ${signoZodiacales.length}`);

// 5. Desestructuración de Arreglos.
console.log("%c5.- Desestructuración de Arreglos", style);

let [singo0, singo1, singo2, singo3, singo4, singo5, singo6, singo7] = signoZodiacales;

console.log(`EL SIGNO ZODIACAL EN LA POSICIÓN [0] ES: ${singo0}`);
console.log(`EL SIGNO ZODIACAL EN LA POSICIÓN [8] ES: ${singo7}`);

let [singo_0, , , , , , , singo_7] = signoZodiacales;

console.log(`EL SIGNO ZODIACAL EN LA POSICIÓN [0] ES: ${singo_0}`);
console.log(`EL SIGNO ZODIACAL EN LA POSICIÓN [8] ES: ${singo_7}`);
// console.log(`EL SIGNO ZODIACAL EN LA POSICION [0] ES: ${singo_1}`);

// 6. Métodos de Arreglos que crean uno nuevo, para no modificar el arreglo original.
console.log("%c6.- Métodos de Arreglos que crean uno nuevo, para no modificar el arreglo original", style);

// FILTER
console.warn("6.1 ----- FILTER -----");
console.log("EL ARREGLO ORIGINAL ES: ");
console.log(signoZodiacales);
console.log("FILTRANDO DATOS... ");

const signosFiltrados = signoZodiacales.filter((signoZodiacales) => signoZodiacales.length > 6);

console.log("FILTRADO TERMINADO ");
console.log("EL ARREGLO RESULTANTE ES: ");
console.log(signosFiltrados);

const signosFiltrados2 = signoZodiacales.filter((signoZodiacales) => signoZodiacales.includes("a") || signoZodiacales.includes("A"));

console.log("EL ARREGLO RESULTANTE ES: ");
console.log(signosFiltrados2);

// MAP
console.warn("6.2 ----- MAP -----");

// const nombres = ["Alice", "Bob", "Charlie", "David"];
const numeros = [1, 2, 3, 4, 5];

console.log(`EL ARREGLO ORIGINAL ES: ${numeros}`);

const dobles = numeros.map((numero) => numero * 2);

console.log(`EL ARREGLO CON EL DOBLE DE LOS ELEMENTOS DEL ORIGINAL ES: ${dobles}`);

const palabras = ["Como", "Estas", "Hoy", "Hay", "Mi", "Amigo", "Yayo", "briones", "Jajaja", "Jesus"];

const longitudesDeNombres = palabras.map(function (palabra) {
    return palabra.length;
});

console.log(longitudesDeNombres);

// REDUCE
console.warn("6.3 ----- REDUCE -----");

const suma = numeros.reduce(function (resultado, elemento) {
    return resultado + elemento;
}, 0);

console.log(suma);

var mascota = ["perro", "gato", "pollo", "gato", "pollo", "pollo", "conejo"];
var recuentosMascota = mascota.reduce(function (obj, mascota) {
    if (!obj[mascota]) {
        obj[mascota] = 1;
    } else {
        obj[mascota]++;
    }
    return obj;
}, {});

console.table(recuentosMascota);

// Definir un arreglo de productos con precios.
const productos = [
    { nombre: "Zapatos Deportivos", precio: 89.99 },
    { nombre: "Camiseta de Algodón", precio: 24.95 },
    { nombre: "Pantalones Vaqueros", precio: 54.75 },
    { nombre: "Reloj de Pulsera", precio: 149.99 },
    { nombre: "Mochila de Viaje", precio: 69.99 },
    { nombre: "Chaqueta de Invierno", precio: 79.99 },
    { nombre: "Zapatillas de Casa", precio: 12.99 },
    { nombre: "Gafas de Sol", precio: 45.5 },
    { nombre: "Teléfono Inteligente", precio: 349.99 },
    { nombre: "Tableta Digital", precio: 299.5 },
];

// Calcular el total de la compra utilizando reduce.
const totalCompra = productos.reduce((total, producto) => {
    return total + producto.precio;
}, 0);

console.log("Productos y Precios:");
productos.forEach((producto) => {
    console.log(`${producto.nombre}: $${producto.precio}`);
});

console.log(`\nEl total de la compra es: $${totalCompra}`);
