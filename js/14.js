// Programa desarrollado por Jose Alejandro Briones Arroyo.
//Practica 14: Eventos del DOM.

// Estilización de secciones.
const style = "font-weight: bold; font-size: 20px; color: red; text-shadow: 1px 1px 0 rgb(217,31,38), 2px 2px 0 rgb(226,91,14), 3px 3px 0 rgb(245,221,8), 4px 4px 0 rgb(5,148,68), 5px 5px 0 rgb(2,135,206), 6px 6px 0 rgb(4,77,145), 7px 7px 0 rgb(42,21,113); margin-bottom: 6px; padding: 2%";

// Se muestra una advertencia en la consola.
console.warn("Practica 14: Eventos del DOM (Document Object Model)");

// Detectar cuando se da click sobre un elemento en específico.
const heading = document.querySelector("h2");
const boton = document.querySelector("#botonLogin");
heading.addEventListener("click", () => console.log("Le diste click al boton..."));
boton.addEventListener("click", () => "Le diste click al boton...");

// Reto: Saludar al dar click.
const headingUno = document.querySelector("h1");
console.log(headingUno);
headingUno.addEventListener("click", () => {
    console.log("Le diste click al H1...");
});

// Function llamada por evento click.
function saluda() {
    let hora = new Date();
    let horas = hora.getHours();

    if (horas >= 6 && horas < 12) {
        console.log("Buenos dias");
        return `Buenos dias`;
    } else if (horas >= 12 && horas < 19) {
        console.log("Buenas tardes");
        return `Buenas tardes`;
    } else {
        console.log("Buenas noches");
        return `Buenas noches`;
    }
}

const raiz = function (a) {
    return Math.sqrt(a);
};
const anclas = document.querySelectorAll("a");
anclas[1].addEventListener("click", () => saluda());
anclas[4].addEventListener("click", () => console.log(`La raiz es: ${raiz(81)}`));
8;

// Evento - Submit.
console.log("%c2. Agregando a un evento", style);
const formulario = document.querySelector("#formulario");
const nombreUsuario = document.querySelector("#nombre");
const passwordUsuario = document.querySelector("#password");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(formulario);
    console.log("Enviaste los datos del formulario...");

    console.log(nombreUsuario);
    console.log(`Nombre: ${nombreUsuario.value}`);

    console.log(passwordUsuario);
    console.log(`Contraseña: ${passwordUsuario.value}`);

    if (nombreUsuario.value === "" || passwordUsuario.value === "") {
        console.log("Los datos para realizar la validación están incompletos");
    } else {
        console.log("Los datos para realizar la validación están completos");
    }
});

const tecnologias = document.querySelector("#tecnologias");
const lenguajeUno = document.querySelector("#JavaScript");
const lenguajeDos = document.querySelector("#React");
const lenguajeTres = document.querySelector("#Node");

lenguajeUno.addEventListener("dblclick", (e) => {
    // Acción a realizar cuando se hace doble clic en el elemento.
    e.preventDefault();
    console.log("Doble clic en JavaScript");
});

lenguajeDos.addEventListener("mouseover", function (e) {
    // Acción a realizar cuando el mouse se mueve sobre el elemento.
    e.preventDefault();
    console.log("Mouse sobre React.js");
});

lenguajeTres.addEventListener("mouseout", function (e) {
    // Acción a realizar cuando el mouse sale del elemento.
    e.preventDefault();
    console.log("Mouse fuera de Node.js");
});
