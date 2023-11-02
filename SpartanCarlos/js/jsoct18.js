
console.log("Mensaje Enviado a la consola");
console.warn("Esto es warning");
console.error("Esto es un error");
console.info("Esto es informacion");

document.write("Mensaje desde Javacript"); // sale dentro del documento//
document.title = "Nuevo titulo";

/*obtner una referencia a un elemento = hmtl*/
const titulo = document.getElementById("titulo");

titulo.innerHTML = "Titulo modificado desde javascript"
titulo.style.color = "gold";
titulo.style.backgroundColor = "black";
titulo.style.border = "3px solid gold";
titulo.style.borderRadius = "5px";
titulo.style.textAlign = "center";






