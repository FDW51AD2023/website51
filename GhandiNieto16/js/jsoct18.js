console.log("Mensaje enviado a la consola");
console.warn("Esto es un warning");
console.error("Esto es un error");
console.info("Esto es informacion");


document.write("Mensaje desde javascript");
document.title = "Nuevo titulo";

/* Obtener una referecnia a un elemento HTML */
/* Una referecnia es una varibale que apunte al objeto */

const titulo=document.getElementById("titulo");

titulo.innerHTML = "Titulo modificado desde javascript";
titulo.style.color = "purple";
titulo.style.backgroundColor = "pink";
titulo.style.border = "3px solid purple";
titulo.style.borderRadius = "5px";
titulo.style.textAlign = "center";

