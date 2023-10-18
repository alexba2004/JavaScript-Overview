// Programa desarrollado por Jose Alejandro Briones Arroyo.
// Práctica 04: Objetos en JavaScript.

// Estilización de secciones.
const style = "font-weight: bold; font-size: 20px; color: red; text-shadow: 1px 1px 0 rgb(217,31,38), 2px 2px 0 rgb(226,91,14), 3px 3px 0 rgb(245,221,8), 4px 4px 0 rgb(5,148,68), 5px 5px 0 rgb(2,135,206), 6px 6px 0 rgb(4,77,145), 7px 7px 0 rgb(42,21,113); margin-bottom: 6px; padding: 2%";

// Se muestra una advertencia en la consola.
console.warn("----- Práctica 04: Objetos en JavaScript -----");

// 1. Declaración de variables independientes.
console.log("%c1.- Declaración", style);

const producto = 'Tablet 9"';
const precio = 3525.0;
const disponibilidad = true;

console.log(`Leyendo los datos desde variables independientes del producto`);
console.log(`Nombre: ${producto},`, typeof producto);
console.log(`Precio: ${precio},`, typeof precio);
console.log(`Disponibilidad: ${disponibilidad},`, typeof disponibilidad);

// 2. Declaración de un Objeto.
console.log("%c2.- Declaración de un Objeto", style);

let productoObjeto = {
    nombre: 'Tablet 9"',
    precio: 3525,
    disponibilidad: true,
};

console.log(productoObjeto);
console.table(productoObjeto);

console.log(`Leyendo declaración de variables`);
console.log(`Nombre: ${productoObjeto.nombre},`, typeof productoObjeto.nombre);
console.log(`Precio: ${productoObjeto.precio},`, typeof productoObjeto.precio);
console.log(`Disponibilidad: ${productoObjeto.disponibilidad},`, typeof productoObjeto.disponibilidad);
console.log(typeof productoObjeto);

// 3. Desestructuración de Objetos.
console.log("%c3.- Desestructuración de Objetos", style);

let { nombre: productName, precio: productPrice, disponibilidad: productAvailability } = productoObjeto;

let productCategory;

if (productAvailability == false) productAvailability = "No Disponible";

if (productPrice > 1000) productPrice = "Costoso";

if (productName.includes("Tablet")) productCategory = "Electrónica";

console.log(`Leyendo los datos desestructurados: Nombre: ${productName}, Precio: ${productPrice}, Disponibilidad: ${productAvailability}`);

// 4. Mejora de Objetos.
console.log("%c4.- Mejora de Objetos", style);

const productObject = {
    productName,
    productPrice,
    productAvailability,
    productCategory,
};

console.table(productObject);

// Práctica 05: Agregar Propiedades a un Objeto existente.
console.warn("----- Práctica 05: Agregar Propiedades a un Objeto existente -----");

// 5. Agregar propiedades a un Objeto existente.
console.log("%c5.- Agregar propiedades a un Objeto existente", style);
console.table(productObject);
productObject["imagen"] = "img/products/tablet.jpg";
productObject["color"] = "Magenta";
console.table(productObject);

// 6. Eliminar una propiedad a un Objeto existente.
console.log("%c6.- Eliminar una propiedad a un Objeto existente", style);
console.table(productObject);
delete productObject["color"];
console.table(productObject);

// 7. Modificar el valor de una propiedad existente.
console.info("%c7.- Modificar el valor de una propiedad existente", style);
console.table(productObject);
productObject.productName = 'Tableta Ipad 10"';
console.table(productObject);

// 8. Congelación de un Objeto <FREEZE>.
console.log("%c8.- Congelación de un Objeto <FREEZE>", style);
console.table(productObject);
Object.freeze(productObject);
productObject.productPrice = 7597.5; // Intento de modificar una propiedad congelada.
productObject["Marco"] = "Apple"; // Intento de agregar una propiedad a un objeto congelado.
delete productObject["disponibilidad"]; // Intento de eliminar una propiedad de un objeto congelado.
console.table(productObject);

// 9. Sellado de un Objeto <SEAL>.
console.log("%c9.- Sellado de un Objeto <SEAL>", style);

let clienteObjeto = {
    nombre: "Briones",
    correo: "Bri0nez@gmail.com",
    tipo: "Frecuente",
};

console.table(clienteObjeto);
Object.seal(clienteObjeto);
clienteObjeto.correo = "briones@gmail.com"; // Modificar una propiedad sellada.
clienteObjeto["Direccion"] = "Juan Escutia #123A"; // Intento de agregar una propiedad a un objeto sellado.
delete clienteObjeto["tipo"]; // Intento de eliminar una propiedad de un objeto sellado.
console.table(clienteObjeto);

// 10. Desestructuración de 2 o más objetos.
console.log("%c10.- Desestructuración de 2 o más objetos", style);
const { nombre: nombreP, precio: precioP, disponibilidad: disponibilidadP } = productObject;
const { nombre: nombreC, correo: correoC, tipo: tipoC } = clienteObjeto;

console.log(nombreP, precioP, disponibilidadP);
console.log(nombreC, correoC, tipoC);

// 11. Unión de 2 o más Objetos utilizando el spread operator.
console.log("%c11.- Unión de 2 o más Objetos utilizando el spread operator", style);
let cantidad = 4;
ventaObjeto = {
    producto: { ...productObject },
    cliente: { ...clienteObjeto },
    cantidad,
};

// let ventaObjeto = Object.assign(productObject, clienteObjeto);

console.log("Objeto: Producto");
console.log(productObject);
console.log("Objeto: Cliente");
console.log(clienteObjeto);
console.log("Objeto: Venta");
console.log(ventaObjeto);

console.log("Actualizando el correo electrónico del cliente...");
clienteObjeto.correo = "220103@utxicotepec.edu.mx";
console.log("Objeto: Cliente");
console.log(clienteObjeto);
console.log("Objeto: Venta");
console.log(ventaObjeto);
