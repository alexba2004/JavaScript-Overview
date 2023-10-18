// Programa desarrollado por Jose Alejandro Briones Arroyo.
//Practica 08: Funciones en JavaScript.

// Estilización de secciones.
const style = "font-weight: bold; font-size: 20px; color: red; text-shadow: 1px 1px 0 rgb(217,31,38), 2px 2px 0 rgb(226,91,14), 3px 3px 0 rgb(245,221,8), 4px 4px 0 rgb(5,148,68), 5px 5px 0 rgb(2,135,206), 6px 6px 0 rgb(4,77,145), 7px 7px 0 rgb(42,21,113); margin-bottom: 6px; padding: 2%";

// Mostrar advertencia en la consola.
console.warn("----- Práctica 08: Funciones en JavaScript -----");

// Utilizando FUNCTION DECLARATION - Declaración Formal.
console.log("%c1.- Utilizando FUNCTION DECLARATION - Declaración Formal", style);

// Función SIN Parámetros.
console.log("%c1.1- Función SIN Parámetros", style);

// Se puede llamar a la función antes de crearla.
suma();

function suma() {
    // Función sin parámetros que suma 2 + 2
    console.log(2 + 2);
}

// Se puede llamar todas las veces que queramos.
suma();
suma();
suma();

// Función CON Parámetros
console.log("%c1.2- Función CON Parámetros", style);

// Función que recibe dos parámetros y suma los números.
function sumaDosNumeros(n1, n2) {
    // Función con parámetros y validación.
    if (typeof n1 != "number" || typeof n2 != "number") {
        // Si alguno de los parámetros no es un número, devuelve un mensaje de error.
        return "Ingresa un dato de tipo numerico";
    } else {
        // Si ambos parámetros son números, devuelve la suma de los números.
        return n1 + n2;
    }
}

// Ejemplos de llamadas a la función sumaDosNumeros con diferentes tipos de datos.
console.log(`El resultado de la suma es: ${sumaDosNumeros(3, 8)}`);
console.log(`El resultado de la suma es: ${sumaDosNumeros(3, "a")}`);
console.log(`El resultado de la suma es: ${sumaDosNumeros(Boolean(true), Symbol(3))}`);

// Función CON Parámetros por DEFAULT.
console.log("%c1.3.- Con Parámetros por Default", style);

function multiplicar(a = 1, b = 1) {
    return a * b;
}
// Imprime los resultados de la función pasando parámetros.
console.log(`El resultado de la multiplicación es: ${multiplicar(5, 2)}`);
console.log(`El resultado de la multiplicación es: ${multiplicar(5)}`);

console.log("%c1.4.- Cuando retorna un resultado de tipo de objeto");
// Función que calcula la hora actual.
function saludaHora(persona, hora = new Date()) {
    const horas = hora.getHours(),
        minutos = hora.getMinutes(),
        segundos = hora.getSeconds();
    let saludo;
    console.log(`La hora actual es: ${horas}:${minutos}:${segundos}`);

    if (horas >= 6 && horas < 12) saludo = "Buenos días";
    else if (horas >= 12 && horas < 19) saludo = "Buenas tardes";
    else saludo = "Buenas noches";
    return [persona, hora, `${saludo}, ${persona}.`];
}
// Imprime los resutados de la función de 'saludaHora'.
let saludo = saludaHora("Briones");
console.table(saludo);
let [, , saludoWeb] = saludo;
console.log(saludoWeb);
