/* App5 */

const app5Id = document.getElementById("app5Id");
const app5Nombre = document.getElementById("app5Nombre");
const app5Altura = document.getElementById("app5Altura");
const app5Peso = document.getElementById("app5Peso");
const app5Imagen = document.getElementById("app5Imagen");
const app5BtnBuscar = document.getElementById("app5BtnBuscar");

app5BtnBuscar.addEventListener("click", e => {
    e.preventDefault();

    let id = app5Id.value;
    let url = "https://pokeapi.co/api/v2/pokemon/" + id;

    fetch(url)
        .then(response => response.json())
        .then(data => mostrarDatos(data));
});

function mostrarDatos(data){
    console.log(data);
    app5Nombre.innerHTML = "Nombre: " + data.name;
    app5Peso.innerHTML = "Peso: " + data.weight;
    app5Altura.innerHTML = "Altura: " + data.height;
    app5Imagen.src = data.sprites.other.home.front_default; 
}




/* App4 */
const app4Tabla = document.getElementById("app4Tabla");
const app4Inv = document.getElementById("app4Inv");
const app4SoloPunto = document.getElementById("app4SoloPunto");
const app4Res = document.getElementById("app4Res");
const app4BtnVer = document.getElementById("app4BtnVer");

function mostrarTabla() {
    let tabla = parseInt(app4Tabla.value);

    let lista = document.createElement("ul");

    if (!app4Inv.checked) {
        for (let i = 1; i <= 10; i++) {
            let resMult = app4SoloPunto.checked ? ".".repeat(tabla * i) : tabla * i;

            let item = document.createElement("li");
            item.innerHTML = tabla + " X " + i + " = " + resMult;
            lista.appendChild(item);
        }
    }
    else {
        for (let i = 10; i >= 1; i--) {

            let resMult = app4SoloPunto.checked ? ".".repeat(tabla * i) : tabla * i;

            let item = document.createElement("li");
            item.innerHTML = tabla + " X " + i + " = " + resMult;
            lista.appendChild(item);
        }
    }
    app4Res.innerHTML = "";
    app4Res.appendChild(lista);
}

app4BtnVer.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarTabla();
});

app4Inv.addEventListener("change", (e) => {
    mostrarTabla();
});

app4SoloPunto.addEventListener("change", (e) => {
    mostrarTabla();
});










/* App3 */

const app3Num1 = document.getElementById("app3Num1");
const app3Num2 = document.getElementById("app3Num2");
const app3Operacion = document.getElementById("app3Operacion");
const app3Res = document.getElementById("app3Res");
const app3BtnCalcular = document.getElementById("app3BtnCalcular");

app3BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseInt(app3Num1.value);
    let num2 = parseInt(app3Num2.value);
    let operacion = app3Operacion.value;
    let resultado;

    /* if( operacion == "s" ){
        resultado = num1 + num2;
    }
    else if( operacion == "r") {
        resultado = num1 - num2;
    }
    else if (operacion == "m"){
        resultado = num1 * num2;
    }
    else if ( operacion == "d"){
        resultado = num1 / num2;
    } */

    switch (operacion) {
        case "s": resultado = num1 + num2;
            break;
        case "r": resultado = num1 - num2;
            break;
        case "m": resultado = num1 * num2;
            break;
        case "d": resultado = num1 / num2;
            break;
    }

    app3Res.value = resultado;
});








/* App1 */

const app1Num1 = document.getElementById("app1Num1");
const app1Num2 = document.getElementById("app1Num2");
const app1Res = document.getElementById("app1Res");

const app1BtnCalcular = document.getElementById("app1BtnCalcular");

app1BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseInt(app1Num1.value);
    let num2 = parseInt(app1Num2.value);
    let suma = num1 + num2;

    app1Res.value = suma;
});

