// Objeto.metodo
// El .cosa es el método (verbos)
// set - Cambiar
// get - obtener

console.log("Mensaje enviado a la consola");
console.warn("Esto es un warning");
console.error("Esto es un error");
console.info("Esto es información");
document.write("Mensaje desde javascript");

// El .title es una variable y se le asigna un valor
document.title = "Nuevo título";

// Obtener una referencia (variable que apunte a un objeto) a un elemento html 
const titulo=document.getElementById("titulo");

titulo.innerHTML="Título modificado desde javascript";
titulo.style.color="purple";
titulo.style.backgroundColor="pink";
titulo.style.border= "3px solid black";
titulo.style.borderRadius = "5px";
titulo.style.textAlign ="center";