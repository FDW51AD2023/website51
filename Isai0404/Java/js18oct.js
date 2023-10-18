console.log("mensaje a consol (se ve en la consola)a")
console.warn("advertencia (se ve en la consola pone color al mensaje)")
console.error("error (se ve en la consola pone color al mensaje)")
console.info("info adicional (se ve en la consola")

document.write("mensaje escrito desde java")
document.title="titulo nuevo de java (es una variable prestablecida de java)";

/* referenciar un elemento html*/
const titulo = document.getElementById("titulo");

titulo.innerHTML ="titulo modificado usando innerHTML";

titulo.style.color="withe";

titulo.style.backgroundColor="gray";

titulo.style.borderRadius="5px";

titulo.style.textAlign="center";