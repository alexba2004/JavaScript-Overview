// Programa desarrollado por Jose Alejandro Briones Arroyo.
// Práctica 07: Iteradores en JavaScript.

// Estilización de secciones
const style = "font-weight: bold; font-size: 20px; color: red; text-shadow: 1px 1px 0 rgb(217,31,38), 2px 2px 0 rgb(226,91,14), 3px 3px 0 rgb(245,221,8), 4px 4px 0 rgb(5,148,68), 5px 5px 0 rgb(2,135,206), 6px 6px 0 rgb(4,77,145), 7px 7px 0 rgb(42,21,113); margin-bottom: 6px; padding: 2%";

// Se muestra una advertencia en la consola.
console.warn("----- Práctica 07: Iteradores en JavaScript -----");

// 1. Utilizando un bucle (ciclo) FOR.
console.log("%c1.- Utilizando el Bucle FOR", style);

let tecnologias = ["HTML", "JavaScript", "Python", "MySQL", "Angular", "Flutter", "React", "Django", "Flask", "Gira", "Git", "Swagger", "HTML"];

for (let i = 0; i < tecnologias.length; i++) {
    console.log(`El elemento en la posición ${i}: ${tecnologias[i]}`);
}

// 1.1 Utilizando el Bucle WHILE.
console.log("%c1.1- Utilizando el Bucle WHILE", style);
let i = 0;
while (i < tecnologias.length) {
    console.log(`El elemento en la posición ${i}: ${tecnologias[i]}`);
    i++;
}

// 2. Utilizando un bucle (ciclo) FOREACH.
console.log("%c2.- Utilizando el Bucle FOREACH", style);

// Solución A utilizando el índice 'i' proporcionado por forEach.
console.warn("Solución A");
tecnologias.forEach((elemento, i) => console.log(`El elemento en la posición ${i}: ${elemento}`));

// Solución B utilizando indexOf para encontrar el índice.
console.warn("Solución B");
tecnologias.forEach((elemento) => console.log(`El elemento en la posición ${tecnologias.indexOf(elemento)}: ${elemento}`));

// Eliminar el último elemento del arreglo.
tecnologias.pop();

// 3. Transformando el arreglo utilizando MAP.
console.log("%c3.- Utilizando MAP para transformar el arreglo", style);
console.warn("Arreglo Original");
console.table(tecnologias);
console.warn("Arreglo con MAP");

let tecnologiasTipo = tecnologias.map((elemento) => {
    if (["HTML", "Angular", "React"].includes(elemento)) return elemento + ", Frontend";
    else if (["JavaScript", "Flutter"].includes(elemento)) return elemento + ", Frontend y Backend";
    else return elemento + ", Backend";
});

console.table(tecnologiasTipo);
