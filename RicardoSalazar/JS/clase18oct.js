console.log("Mensaje enviado a la consola");
console.warn("Esto es un error");
console.error("Esto es un error");
console.info("Esto es informacion");

document.write("Mensaje desde javascript");
document.title = "Nuevo titulo";

/* Obtener una referencia a un elemento html*/
const titulo = document.getElementById("titulo");

titulo.innerHTML = "Titulo modificado desde javascript";
titulo.style.color = "aqua";
titulo.style.backgroundColor = "darkblue";
titulo.style.border = "3px solid black";
titulo.style.borderRadius = "5px";
titulo.style.textAlign = "center";