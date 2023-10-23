
console.log("hola")
console.warn("warning")
console.error("error")
console.info("informaacion")

document.write("mensaje desde javascript")
document.title = "nuevo titulo";

/* obtener una referencia a un elemento html (variable que apunta al objeto para hacer lo que sea con la variable) */
const titulo = document.getElementById("titulo")

titulo.innerHTML = "Titulo modificado desde java";
titulo.style.color = "orange";
titulo.style.backgroundColor = "purple";
titulo.style.border = "3px solid orange";
titulo.style.borderRadius = "5px";
titulo.style.textAlign = "center"