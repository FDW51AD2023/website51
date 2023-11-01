/* Codigo para mandar cosas  */

/* Son buenos cuando estas trabajando en la consola. El que mas se utiliza es log */
console.log("Mensaje Enviado a la Consola");
console.warn("Esto es un Warning / Precaucion");
console.error("Esto es un Error");
console.info("Esto es informacion");


/* DOCUMENTO */
document.write("Mensaje desde la consola"); /* Este escribe informacion dentro del documento. Esto es  */

document.title = "Nuevo Título"; 
/* .Title es una propiedad. Por eso lleva el = porque esto es una variable entonces se le asigna un valor. VENTAJA. Cambiar el titulo dependiendo de donde se encuentre el usuario, se logra programando */


/* PROGRAMAR  ELEMENTO / OBJETO HTML. Obtener una referecnia  a un elemento html*/

const titulo=document.getElementById("titulo");
/* Se utiliza constante porque este no cambiara. GET - OBTENER / SET - CAMBIAR */

titulo.innerHTML="Titulo modificado desde javascript";
/* Propiedad que permite cambiar el contenido*/

titulo.style.color = "black"; 
titulo.style.backgroundColor = "lightpink";
titulo.style.border = "3px solid violet";
titulo.style.borderRadius = "5px";
titulo.style.textAlign = "center";
/* Codigo ordenado para manipulacion de contenido */



