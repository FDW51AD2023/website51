/* App8 */

const app8Id = document.getElementById("app8Id");
const app8Nombre = document.getElementById("app8Nombre");
const app8Altura = document.getElementById("app8Altura");
const app8Peso = document.getElementById("app8Peso");
const app8Imagen = document.getElementById("app8Imagen");
const app8BtnBuscar = document.getElementById("app8BtnBuscar");

app8BtnBuscar.addEventListener("click", (e) => {
    e.preventDefault();

    let id = app8Id.value;
    let url = "https://pokeapi.co/api/v2/pokemon/" + id;

    fetch(url)
    .then(Response => Response.json())
    .then(data => MostrarDatos(data));
});
function MostrarDatos(data){
    console.log(data);
    app8Nombre.innerHTML = "Nombre: " + data.name;
    app8Peso.innerHTML = "Peso: " + data.weight;
    app8Altura.innerHTML = "Altura: " + data.height;
    app8Imagen.src = data.sprites.other.home.front_default;



}


/* App 7 */
function perfecto(numero){
    let div = 1;
    let suma = 0;
    while (div < numero){
        if(numero % div == 0){
            suma+= div
        }
        div++;
    }
    return suma == numero;
}

const app7Ini = document.getElementById("app7Ini");
const app7Fin = document.getElementById("app7Fin");
const app7Res = document.getElementById("app7Res");
const app7BtnVer = document.getElementById("app7BtnVer");
const lista = document.createElement("ol");

app7BtnVer.addEventListener("click" , (e) => {
    e.preventDefault();

    let ini = parseInt(app7Ini.value);
    let fin = parseInt(app7Fin.value);

    let numero = ini

    do {
        /* codigo para checar si es perfecto */
        if ( perfecto (numero)){
            let item = document.createElement("li");
            item.innerHTML = numero;
            lista.appendChild(item);
        }
        numero++;

    }while( numero <= fin);

    app7Res.appendChild(lista);
});

/* App 6 */
const app6Tabla = document.getElementById("app6Tabla");
const app6Inv = document.getElementById("app6Inv");
const app6SoloPunto = document.getElementById("app6SoloPunto");
const app6Res = document.getElementById("app6Res");
const app6btnVer = document.getElementById("app6btnVer");

function mostrarTabla(){
    let tabla = parseInt(app6Tabla.value);
    
    let lista = document.createElement("ul");

    if (!app6Inv.checked) {
        for (let i=1; i <=10; i++ ) {
            let resMult = app6SoloPunto.checked ? ".".repeat(tabla*i) : tabla * i;
            let item = document.createElement("li");
            item.innerHTML = tabla + "x" + i + "="+ resMult;
            lista.appendChild(item);
        }
    }
    else {
        for (let i=10; i >=1; i--) {
            let resMult = app6SoloPunto.checked ? ".".repeat(tabla*i) : tabla * i;;

            let item = document.createElement("li");
            item.innerHTML = tabla + "x" + i + "="+ resMult;
            lista.appendChild(item);
        }        
    }
    app6Res.innerHTML = "";
    app6Res.appendChild(lista);

};

app6btnVer.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarTabla();

});
app6Inv.addEventListener("change", (e) => {
    mostrarTabla();
});
app6SoloPunto.addEventListener("change", (e) => {
    mostrarTabla();
});



for(let cont=1; cont <=10; cont++){
    console.log(cont);
}

/* App 5 */
const app5Num1 = document.getElementById("app5Num1");
const app5Num2 = document.getElementById("app5Num2");
const app5operacion = document.getElementById("app5operacion")
const app5Res = document.getElementById("app5Res");
const app5BtnCalcular = document.getElementById("app5BtnCalcular");

app5BtnCalcular.addEventListener("click" , (e) => {
    e.preventDefault();

    let num1 =parseInt(app5Num1.value);
    let num2 =parseInt(app5Num2.value);
    let operacion = app5operacion.value;
    let resultado;
    /* if(operacion == "s" ){
        resultado = num1 + num2;
    }
    else if(operacion == "r"){
        resultado = num1 - num2;
    }
    else if(operacion == "m"){
        resultado = num1 * num2;
    }
    else if(operacion == "d"){
        resultado = num1 / num2;
    } */
    switch(operacion){
        case "s" : resultado = num1 + num2;
                    break;
        case "r" : resultado = num1 - num2;
                    break;
        case "m" : resultado = num1 * num2;
                    break;
        case "d" : resultado = num1 / num2
                    break;
     }
    app5Res.value = resultado;

});











/* app1 */

const app1Num1 = document.getElementById("app1Num1")
const app1Num2 = document.getElementById("app1Num2")
const app1Res = document.getElementById("app1Res")

const app1BtnCalcular = document.getElementById("app1BtnCalcular")
app1BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseInt (app1Num1.value);
    let num2 = parseInt (app1Num2.value);
    let suma = num1 + num2;

    app1Res.value = suma;
});

/* app 2 */
const app2Num1 = document.getElementById("app2Num1")
const app2Num2 = document.getElementById("app2Num2")
const app2Res = document.getElementById("app2Res")

const app2BtnCalcular = document.getElementById("app2BtnCalcular")
app2BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseInt (app2Num1.value);
    let num2 = parseInt (app2Num2.value);
    let resta = num1 - num2;

    app2Res.value = resta;
});

/* app 3 */
const app3Num1 = document.getElementById("app3Num1")
const app3Num2 = document.getElementById("app3Num2")
const app3Res = document.getElementById("app3Res")

const app3BtnCalcular = document.getElementById("app3BtnCalcular")
app3BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseInt (app3Num1.value);
    let num2 = parseInt (app3Num2.value);
    let multiplicacion = num1 * num2;

    app3Res.value = multiplicacion;
});

/* app 4 */
const app4Num1 = document.getElementById("app4Num1")
const app4Num2 = document.getElementById("app4Num2")
const app4Res = document.getElementById("app4Res")

const app4BtnCalcular = document.getElementById("app4BtnCalcular")
app4BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseInt (app4Num1.value);
    let num2 = parseInt (app4Num2.value);
    let multiplicacion = num1 / num2;

    app4Res.value = multiplicacion;
});






                                                                    
