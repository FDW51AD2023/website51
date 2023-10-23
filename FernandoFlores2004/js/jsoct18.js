console.log("mensaje enviado a la consola");
console.warn("esto es un warning");
console.error("esto es un error");
console.info("esto es informacion");

document.write("Mensaje desde consola");
document.title="Nuevo titulo";

//obtener una referencia a un elemento html

const titulo = document.getElementById("titulo");

//Para cambiar el elemento obtenido

titulo.innerHTML="Titulo modificado desde java script";

//Para cambiar de color

titulo.style.color="blue";
titulo.style.backgroundColor="gray"

//Poner o cambiar bordes

titulo.style.border="3px solid white";
titulo.style.borderRadius="5px";
titulo.style.textAlign ="center";

