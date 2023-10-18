// Programa desarrollado por Jose Alejandro Briones Arroyo.
// Práctica 13: Manipulación del DOM (Document Object Model).

// Estilización de secciones.
const style = "font-weight: bold; font-size: 20px; color: red; text-shadow: 1px 1px 0 rgb(217,31,38), 2px 2px 0 rgb(226,91,14), 3px 3px 0 rgb(245,221,8), 4px 4px 0 rgb(5,148,68), 5px 5px 0 rgb(2,135,206), 6px 6px 0 rgb(4,77,145), 7px 7px 0 rgb(42,21,113); margin-bottom: 6px; padding: 2%";

// Se muestra una advertencia en la consola.
console.warn("-- Práctica 13: Manipulación del DOM (Document Object Model) --");

console.log("%c1. Accediendo a los elementos del DOM", style);

// 1. QuerySelector().
console.log("%c1.1 A través de querySelector()", style);
// QuerySelector es un método que incluido de manera automática poer el interpretador de JS, el cual permite buscar y acceder a cada elemento declarado por el maquetador web.

const encabezado = document.querySelector("H2");

console.log("Buscando y accediendo al primer <H2>");
console.log(encabezado);

const primerH3 = document.querySelector("H3");
console.log("Buscando y accediendo al primer <H3>");
console.log(primerH3);

console.log("Buscando y accediendo al primer <INPUT SUBMIT>");
let boton = document.querySelector("#botonLogin");
console.log(boton);

console.log("Buscando y accediendo al primer elemento con la clase tecnologias");
let tecnologias = document.querySelector(".tecnologias");
console.log(tecnologias);

// 2. Tipos de datos que devuelve querySelector.
console.log("¿Qué tipo de dato devuelve querySelector?");
console.log(`El encabezado es un: ${typeof encabezado}`);
console.log(`El boton es un: ${typeof boton}`);
console.log(`El elementoClase es un: ${typeof tecnologias}`);

// 3. QuerySelectorAll() este método permite buscar y retornar TODOS los elementos que coincidan con el filtro determinado (TAG, ID o CLASE).
console.log("%c1.2 A través de querySelectorAll()", style);

// TAG.
const ligas = document.querySelectorAll("a");
console.log("Buscando y accediendo a los elemntos con TAG - <A>");
console.log(ligas);
console.log(typeof ligas);

// ID.
let elementos1 = document.querySelectorAll("#elemento1");
console.log("Buscando y accediendo a los elemntos por ID - elemento1");
console.log(elementos1);

// CLASS.
let patitos = document.querySelectorAll(".patito");
console.log("Buscando y accediendo a los elemntos por CLASS - patito");
console.log(patitos);
console.log(typeof patitos);

// 3. TAGNAME - TEXTCONTENT.
console.log("%c2. Accediendo a las propiedades de los elementos del DOM", style);
console.log(encabezado);
console.log(`El elemento extraido del DOM es un: ${encabezado.tagName}`);
console.log(`El elemento extraido del DOM tiene el texto: ${encabezado.textContent}`);
console.log(`El elemento extraido del DOM tiene las clases de: ${encabezado.classList}`);
console.log(`El elemento <HEADER> extraido del DOM tiene las clases de: ${document.querySelector("header").classList}`);

/* QuerySelector() -> Objeto Individual y QuerySelectorAll() -> Objeto Arreglo */
console.log(`¿Que pasa cuando intento acceder a los elemntos obtenidos por querySelectorAll()`);
console.log(`De los elementos extraidos del DOM en la variable: Ligas, son un: ${ligas.tagName}`);
console.log(`De los elementos extraidos del DOM en la variable: Ligas, tiene el texto de: ${ligas.textContent}`);
console.log(`De los elementos extraidos del DOM en la variable: Ligas, tienen los estilos: ${ligas.classList}`);

// NOTA: Se necesita un ForEach para recorrer los elementos dados por el QuerySelectorAll() porque da un objeto de tipo Arreglo.
ligas.forEach((elemento, i) => {
    console.log(`De los elementos extraidos del DOM en la variable: Ligas[${i}], son un: ${elemento.tagName}`);
});

elementos1.forEach((elemento, i) => {
    console.log(`De los elementos extraidos del DOM en la variable: elementos1[${i}], son un: ${elemento.tagName}`);
});

patitos.forEach((elemento, i) => {
    console.log(`De los elementos extraidos del DOM en la variable: patitos[${i}], son un: ${elemento.tagName}`);
});

// 4. Modificar los valores de los atributos.
console.log("%c3. Modificando los valores de los atributos de los objetos del DOM", style);
console.log(encabezado);

// textContent
console.log(`Modificando el texto que el maquetador puso de: '${encabezado.textContent}' a 'Modificando los Elementos del DOM' ${(encabezado.textContent = "Modificando los Elementos del DOM")}`);

// textContent para modificar el texto de los enlaces.
ligas[2].textContent = "Google.com";

// setAttribute para desactivar el botón.
boton.setAttribute("disabled", "");
console.log(boton);

// setAttribute para cambiar el color del botón.
boton.setAttribute("style", "background-color: #8f2222; font-style: italic");
console.log(boton);

// Reto: Cambiar los caracteres del password por corazones.
const passwordInput = document.getElementById("password");

passwordInput.addEventListener("input", function () {
    // Obtén el valor actual del campo de contraseña.
    const passwordValue = passwordInput.value;

    // Cambia el tipo de input a "text" para mostrar corazones.
    passwordInput.setAttribute("type", "text");

    // Establece el valor con corazones.
    passwordInput.value = passwordValue.replace(/./g, "♥");
});
