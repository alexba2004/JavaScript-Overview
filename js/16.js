// Programa desarrollado por Jose Alejandro Briones Arroyo.
// Practica 16: Imports y Exports en JavaScript.

// Se muestra una advertencia en la consola.
console.warn("-- Practica 16: Imports y Exports de JavaScript");

// Creación de la función para validar usuario.
function validaUsuario(usr, pass) {
    let estatusLogeo = false;
    if (usr === "briones" && pass === "qwerty") return (estatusLogeo = true);
    else return (estatusLogeo = false);
}

// Exportación de la función.
export default validaUsuario;
