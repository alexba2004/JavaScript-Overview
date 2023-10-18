// Programa desarrollado por Jose Alejandro Briones Arroyo.
// Práctica 18: Múltiples peticiones a una API.

// Estilización de secciones.
const style1 = "font-weight: bold; font-size: 20px; color: red; text-shadow: 1px 1px 0 rgb(217,31,38), 2px 2px 0 rgb(226,91,14), 3px 3px 0 rgb(245,221,8), 4px 4px 0 rgb(5,148,68), 5px 5px 0 rgb(2,135,206), 6px 6px 0 rgb(4,77,145), 7px 7px 0 rgb(42,21,113); margin-bottom: 6px; padding: 2%";
const style2 = "font-weight: bold; font-size: 20px; color: blue; text-shadow: 1px 1px 0 rgb(217,31,38), 2px 2px 0 rgb(226,91,14), 3px 3px 0 rgb(245,221,8), 4px 4px 0 rgb(5,148,68), 5px 5px 0 rgb(2,135,206), 6px 6px 0 rgb(4,77,145), 7px 7px 0 rgb(42,21,113); margin-bottom: 6px; padding: 2%";
const style3 = "font-weight: bold; font-size: 20px; color: green; text-shadow: 1px 1px 0 rgb(217,31,38), 2px 2px 0 rgb(226,91,14), 3px 3px 0 rgb(245,221,8), 4px 4px 0 rgb(5,148,68), 5px 5px 0 rgb(2,135,206), 6px 6px 0 rgb(4,77,145), 7px 7px 0 rgb(42,21,113); margin-bottom: 6px; padding: 2%";

const endPointPostURL = "https://jsonplaceholder.typicode.com/comments";
const endPointPhotosURL = "https://jsonplaceholder.typicode.com/photos";

// 1. Asincronismo con pedidos múltiples a una API.
console.warn("Práctica 18: Múltiples Pedidos a una API");

const consultaAPI_POST = async () => {
    setInterval(console.log("..."), 3000);
    const respuestaPost = await fetch(endPointPostURL);
    console.log("%c He regresado con los datos de los POST...", style2);
    const resultadoPost = await respuestaPost.json(); // Le da un formato de JSON al objeto resultante de la API.
    console.log("%cYa convertí los resultados de los POST a formato JSON", style2);
    resultadoPost.forEach((post) => {
        setInterval(console.log(post), 500);
    });
    console.log("%c He terminado de imprimir los resultados de los POST devueltos por la API...", style2);
};

const consultaAPI_PHOTOS = async () => {
    setInterval(console.log("..."), 3000);
    const respuestaPhotos = await fetch(endPointPhotosURL);
    console.log("%c He regresado con los datos de las PHOTOS...", style3);
    const resultadoPhotos = await respuestaPhotos.json(); // Le da un formato de JSON al objeto resultante de la API
    console.log("%cYa convertí los resultados de las PHOTOS a formato JSON", style3);
    /*resultadoPhotos.forEach((photos) => {
        setInterval(console.log(photos), 500);
    });
    console.log("He terminado de imprimir los resultados de las PHOTOS devueltos por la API...");*/
};

const consulta_Paralela_API = async () => {
    const [respuestaPost2, respuestaPhotos2] = await Promise.all([fetch(endPointPostURL), fetch(endPointPhotosURL)]);
    const resultadoPost = await respuestaPost2.json();
    const resultadoPhotos = await respuestaPhotos2.json();

    console.log(resultadoPost);
    console.log(resultadoPhotos);
};

const llamadoSERIE = async () => {
    const inicio = performance.now();
    console.log("%cIniciando los llamados en SERIE", style2);
    console.log("%cConsultando los POSTS", style2);
    await consultaAPI_POST();
    console.log("%Consultando las PHOTOS", style2);
    await consultaAPI_PHOTOS();
    const fin = performance.now();
    console.log(`%cLlamado en SERIE ${fin - inicio} ms.`, style2);
};

const llamadoPARALELO = () => {
    const inicio = performance.now();
    console.log("%cIniciando los llamados en PARALELO", style3);
    console.log("%cConsultando los POSTS y PHOTOS al mismo tiempo", style3);
    consulta_Paralela_API();
    const fin = performance.now();
    console.log(`%cLlamado en SERIE ${fin - inicio} ms.`, style3);
};

// Reto: Asincronismo paralelo.
console.warn("RETO");
const consulta_Reto = async () => {
    const [serie, paralelo] = await Promise.all(llamadoSERIE(), fetch(llamadoPARALELO()));
    const resultadosSeries = await serie.json();
    const resultadoParalelo = await paralelo.json();
    console.log(resultadosSeries, style2);
    console.log(resultadoParalelo, style3);
};

await consulta_Reto();
await console.log("TERMINADO");
