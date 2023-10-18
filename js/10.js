// Programa desarrollado por Jose Alejandro Briones Arroyo.
// Práctica 10: Funciones Anónimas o Flecha.

// Estilización de secciones.
const style = "font-weight: bold; font-size: 20px; color: red; text-shadow: 1px 1px 0 rgb(217,31,38), 2px 2px 0 rgb(226,91,14), 3px 3px 0 rgb(245,221,8), 4px 4px 0 rgb(5,148,68), 5px 5px 0 rgb(2,135,206), 6px 6px 0 rgb(4,77,145), 7px 7px 0 rgb(42,21,113); margin-bottom: 6px; padding: 2%";

// Se muestra una advertencia en la consola.
console.warn("-- Práctica 10: Funciones Anónimas o Flecha en JavaScript (Function Expression) --");

// 1. Saludo con Funciones Flecha (Arrow Functions).
console.log("%cFunciones Flecha", style);

const saludo = () => console.log("%cHola, que tal", style);

console.log("Saludando desde una función anónima....");

// Llamado a la función.
saludo();

console.log("He terminado de saludar");

// Función que reciba parámetros y regrese un saludo en función de la hora.
const saludoVariables = (nombre, hora = new Date()) => {
    let horas = hora.getHours();

    if (nombre === undefined) {
        return `No se ha definido un valor`;
    } else {
        if (horas >= 6 && horas < 12) return `Buenos días, ${nombre}`;
        else if (horas >= 12 && horas < 19) {
            return `Buenas tardes, ${nombre}`;
        } else {
            return `Buenas noches, ${nombre}`;
        }
    }
};

console.log(saludoVariables("Briones"));
console.log(saludoVariables("Alejandro", new Date(`September 19, 2023, 08:00:00`)));
console.log(saludoVariables("Arroyo", new Date(`September 19, 20230, 23:40:00`)));
