// Programa desarrollado por Jose Alejandro Briones Arroyo.
// Practica 15: Agregar elementpos al DOM.

// Estilización de secciones.
const style = "font-weight: bold; font-size: 20px; color: red; text-shadow: 1px 1px 0 rgb(217,31,38), 2px 2px 0 rgb(226,91,14), 3px 3px 0 rgb(245,221,8), 4px 4px 0 rgb(5,148,68), 5px 5px 0 rgb(2,135,206), 6px 6px 0 rgb(4,77,145), 7px 7px 0 rgb(42,21,113); margin-bottom: 6px; padding: 2%";

// Se muestra una advertencia en la consola.
console.warn("-- Practica 15: Agregando nuevos elementos al dom");

// Importación de función desde otro archivo.
import verificacionLogueo from "./16.js";

// 1. Agregar un mensaje de error.
console.log("%c 1- Agregando un mensaje de error", style);

const alerta = document.createElement("DIV");

alerta.classList.add("alerta");

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("enviaste los daatos al formulario...");

    const nombreUsuario = document.querySelector("#nombre");
    console.log(`El usuario que esta intentando logearse  es: ${nombreUsuario.value}`);

    const passwordUsuario = document.querySelector("#password");
    console.log(`El password ingresado es: ${passwordUsuario.value}`);

    if (nombreUsuario.value === "" || passwordUsuario.value === "") {
        //alert("Los datos para realizar la validacion del usuario estan incompletos")
        alerta.textContent = "Los datos para realizar la validacion del usuario estan incompletos";
        alerta.classList.add("error");
    } else {
        //alert("Ambos campos fueron llenados y puedo proceder a validar la informacion")
        alerta.textContent = "Ambos campos fueron llenados y puedo proceder a validar la informacion";
        alerta.classList.add("exito");
    }

    formulario.appendChild(alerta);

    const selogeo = verificacionLogueo(nombreUsuario.value, passwordUsuario.value);

    console.log(selogeo);

    selogeo ? console.log("Bienvenido, te has logueado exitosamente") : console.log("Hay un error de las credenciales, por favor verifica tus datos");
});
