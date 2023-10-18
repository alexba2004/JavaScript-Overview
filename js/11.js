// Programa desarrollado por Jose Alejandro Briones Arroyo.
// Práctica 11: Otros métodos útiles para arreglos.

// Estilización de secciones.
const style = "font-weight: bold; font-size: 20px; color: red; text-shadow: 1px 1px 0 rgb(217,31,38), 2px 2px 0 rgb(226,91,14), 3px 3px 0 rgb(245,221,8), 4px 4px 0 rgb(5,148,68), 5px 5px 0 rgb(2,135,206), 6px 6px 0 rgb(4,77,145), 7px 7px 0 rgb(42,21,113); margin-bottom: 6px; padding: 2%";

// Se muestra una advertencia en la consola.
console.warn("-- Práctica 11: Otros métodos útiles para arreglos --");

// Definición de los arreglos.
let tecnologias = ["HTML", "JavaScript", "Python", "MySQL", "Angular", "Flutter", "React", "Django", "Flask", "Gira", "Git", "Swagger", "HTML"];
let numeros = [50, -5, -79, 2.33, 10, 11.4, -2, -12.5, 19, 20.4];

// SOME - ALGUNOS, busca dentro de los elementos si alguno cumple con la condición definida en una función y retorna si esto es verdadero o falso.
console.log("%cSOME - ALGUNOS ", style);
console.log(`Buscando si en el arreglo hay algún número mayor a 0:`);
let resultado = numeros.some((numeros) => numeros > 0);
console.log(resultado);

console.log(`Buscando si en el arreglo hay algún número mayor a 100 000:`);
resultado = numeros.some((numeros) => numeros > 100000);
console.log(resultado);

// FIND - Devuelve el primer elemento que cumpla con la condición descrita en la función, si ninguno cumple con la condición retorna un undefined.
console.log("%cFIND - ENCUENTRA ", style);
console.log(`Buscando si en el arreglo hay algún número mayor a 100 000:`);
resultado = numeros.find((numeros) => numeros < 100000);
console.log(resultado);

console.log(`Buscando si en el arreglo hay algún número mayor a 100 000:`);
resultado = numeros.find((numeros) => numeros > 100000);
console.log(resultado);

// EVERY - TODOS el primer elemento que cumpla con la condición descrita en la función, si ninguno cumple con la condición retorna un undefined.
console.log("%cFIND - ENCUENTRA ", style);
console.log(`Buscando si todos los elementos del arreglo son STRINGS:`);
resultado = tecnologias.every((tecnologias) => typeof String);
console.log(resultado);

console.log(`Buscando si todos los elementos son positivos:`);
resultado = numeros.every((numeros) => numeros > 0);
console.log(resultado);

// Reto: Identificar si existen consonantes.
console.log("%cConsonantes ", style);
console.log(`Buscando si tiene consonantes:`);
resultado = tecnologias.some(
    (tecnologias) =>
        (tecnologias = tecnologias.includes("b") || (tecnologias = tecnologias.includes("c") || (tecnologias = tecnologias.includes("d") || (tecnologias = tecnologias.includes("f") || (tecnologias = tecnologias.includes("g") || (tecnologias = tecnologias.includes("h") || (tecnologias = tecnologias.includes("j") || (tecnologias = tecnologias.includes("k") || (tecnologias = tecnologias.includes("l") || (tecnologias = tecnologias.includes("m") || (tecnologias = tecnologias.includes("n") || (tecnologias = tecnologias.includes("ñ") || (tecnologias = tecnologias.includes("p") || (tecnologias = tecnologias.includes("q") || (tecnologias = tecnologias.includes("r") || (tecnologias = tecnologias.includes("s") || (tecnologias = tecnologias.includes("t") || (tecnologias = tecnologias.includes("v") || (tecnologias = tecnologias.includes("w") || (tecnologias = tecnologias.includes("x") || (tecnologias = tecnologias.includes("y") || (tecnologias = tecnologias.includes("z")))))))))))))))))))))))
);
console.log(resultado);
