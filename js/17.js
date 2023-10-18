// Programa desarrollado por Jose Alejandro Briones Arroyo.
// Practica 17: Asincronismo.

// Estilización de secciones.
const style = "font-weight: bold; font-size: 20px; color: red; text-shadow: 1px 1px 0 rgb(217,31,38), 2px 2px 0 rgb(226,91,14), 3px 3px 0 rgb(245,221,8), 4px 4px 0 rgb(5,148,68), 5px 5px 0 rgb(2,135,206), 6px 6px 0 rgb(4,77,145), 7px 7px 0 rgb(42,21,113); margin-bottom: 6px; padding: 2%";

// Se muestra una advertencia en la consola.
console.warn("-- Practica 17: Asincronismo --");

// 1. Asincronismo con promesa.
console.log("%c1- Asincronismo por una promesa", style);

// Consumo de una API por medio de JS.
// Utilizando FETCH.
const endPointURL = "https://jsonplaceholder.typicode.com/comments";

// Promises (Promesas).
console.log("Solicitando datos a la API...");
const consultaAPI_Promesa = () => {
    fetch(endPointURL)
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((respuesta) => {
            respuesta.forEach((elemento, i) => {
                console.log(`Post. No. ${i}: ${elemento}`);
                console.log(elemento);
            });
        });
};

console.log("Solicitando la información por una promesa...");

// 2. Programación asíncrona con Await.
console.log("%c2- Utilizando Programación Asíncrona (Async/Aawait)", style);
const consultaAPI_Asincrona = async () => {
    setInterval(console.log("..."), 3000);
    const respuesta = await fetch(endPointURL);
    await console.log("He regresado con los datos...");
    const resultado = await respuesta.json(); // Le da un formato de JSON al objeto resultante de la API.
    await console.log("Ya convertí los resultados a formato JSON");
    resultado.forEach((post) => {
        setInterval(console.log(post), 500);
    });
    await console.log("He terminado de imprimir los datos...");
};

console.log("Solicitando la información por un método asíncrono...");
consultaAPI_Asincrona();
