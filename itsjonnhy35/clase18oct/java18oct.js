console.log("mensaje enviado a la consola")
console.warn("warning");
console.error("error");
console.info("informacion");

document.write("mensaje since consola");
document.title("Nuevo Titulo");

/* Obtener una referencia a un elemento html */

const titulo = document.getElementById("titulo");

titulo.innerHTML = "Titulo modificado desde Java script";

titulo.style.color = "blue";
titulo.style.backgroundColor = "red";
titulo.style.borderRadius = "5px";
titulo.style.textAlign = "center"


