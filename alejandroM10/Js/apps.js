
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

/* App2 */

const app2Num1 = document.getElementById("app2Num1");
const app2Num2 = document.getElementById("app2Num2");
const app2suma = document.getElementById("app2suma");
const app2resta = document.getElementById("app2resta");
const app2multiplicacion = document.getElementById("app2multiplicacion");
const app2division = document.getElementById("app2division");

const app2BtnCalcular = document.getElementById("app2BtnCalcular");

app2BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseInt(app2Num1.value);
    let num2 = parseInt(app2Num2.value);
    suma = num1 + num2;
    resta = num1 - num2;
    multiplicacion = num1 * num2;
    division = num1 / num2;
    app2suma.value = suma;
    app2resta.value = resta;
    app2multiplicacion.value = multiplicacion;
    app2division.value = division;
})

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
    /* if(operacion == "s"){
        resultado = num1 + num2;
    }
    else if(operacion == "r"){
        resultado = num1 - num2;
    }
    else if(operacion == "m"){
        resultado = num1 * num2;
    }
    else if(operacion == "d") {
        resultado = num1 / num2;
    }
    
    app3Res.value = resultado; */

    switch(operacion){
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

/* App4 */
/* const app4Tabla = document.getElementById("app4Tabla");
const app4Inv = document.getElementById("app4Inv");
const app4SoloPunto = document.getElementById("app4SoloPunto");
const app4Res = document.getElementById("app4Res");
const app4BtnVer = document.getElementById("app4BtnVer");

app4BtnVer.addEventListener("click", (e) => {
    e.preventDefault();

    let tabla = parseInt(app4Tabla.value);

    let lista = document.createElement("ul");
    if(!app4Inv.checked){
        for(let i=1; i<=10 ; i++){
            let resMult = app4SoloPunto.checked ? ".".repeat(tabla * i) : tabla * i;

            let item = document.createElement("li");
            item.innerHTML = tabla + " X " + i + " = " + resMult ;
            lista.appendChild(item);
        }
    }
    else{
        if(app4Inv.checked){
            for(let i=10; i>=1 ; i--){
                let resMult = app4SoloPunto.checked ? ".".repeat(tabla * i) : tabla * i;

                let item = document.createElement("li");
                item.innerHTML = tabla + " X " + i + " = " + resMult ;
                lista.appendChild(item);
            }
        }
        
    }
    app4Res.innerHTML = "";
    app4Res.appendChild(lista);
}); */
/* App4 */
const app4Tabla = document.getElementById("app4Tabla");
const app4Inv = document.getElementById("app4Inv");
const app4SoloPunto = document.getElementById("app4SoloPunto");
const app4Res = document.getElementById("app4Res");
const app4BtnVer = document.getElementById("app4BtnVer");
 
function mostrarTabla(){
    let tabla = parseInt(app4Tabla.value);
 
    let lista = document.createElement("ul");
    if(!app4Inv.checked){
        for(let i=1; i<=10 ; i++){
            let resMult = app4SoloPunto.checked ? ".".repeat(tabla * i) : tabla * i;
 
            let item = document.createElement("li");
            item.innerHTML = tabla + " X " + i + " = " + resMult ;
            lista.appendChild(item);
        }
    }
    else{
        if(app4Inv.checked){
            for(let i=10; i>=1 ; i--){
                let resMult = app4SoloPunto.checked ? ".".repeat(tabla * i) : tabla * i;
 
                let item = document.createElement("li");
                item.innerHTML = tabla + " X " + i + " = " + resMult ;
                lista.appendChild(item);
            }
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


/* App5 */
const app5Borde = document.getElementById("app5Borde");
const app5Color = document.getElementById ("app5Color");
const app5Grosor = document.getElementById("app5Grosor");
const app5Tipo = document.getElementById("app5Tipo");
const app5Res = document.getElementById("app5Res");
const app5BtnVer = document.getElementById("app5BtnVer");

app5BtnVer.addEventListener("click", (e) => {
    e.preventDefault();
    
    let borde = app5Borde.value;
    let color = app5Color.value;
    let grosor = app5Grosor.value + "px";
    let tipo = app5Tipo.value;
    switch(borde){
        case "t":
            app5Res.style.border = borde;
            app5Res.style.borderColor = color;
            app5Res.style.borderWidth = grosor;
            app5Res.style.borderStyle = tipo;
            break;    
        case "s":
            app5Res.style.border = borde;
            app5Res.style.borderTopColor = color;
            app5Res.style.borderTopWidth = grosor;
            app5Res.style.borderTopStyle = tipo;
            break;
        case "i":
            app5Res.style.border = borde;
            app5Res.style.borderBottomColor = color;
            app5Res.style.borderBottomWidth = grosor;
            app5Res.style.borderBottomStyle = tipo;
            break;
        case "izq":
            app5Res.style.border = borde;
            app5Res.style.borderLeftColor = color;
            app5Res.style.borderLeftWidth = grosor; 
            app5Res.style.borderLeftStyle = tipo;
            break;
        case "der":
            app5Res.style.border = borde;
            app5Res.style.borderRightColor = color;
            app5Res.style.borderRightWidth = grosor;
            app5Res.style.borderRightStyle = tipo;
            break;
    }
    app5BtnVer.innerHTML = borde;

});

/* App6 */
function perfecto(numero){
    let div = 1;
    let suma = 0;
    while(div < numero){
        if(numero % div == 0){
            suma += div
        }
        div++;
    }
    return suma == numero;
}

const app6Ini = document.getElementById("app6Ini");
const app6Fin = document.getElementById("app6Fin");
const app6Res = document.getElementById("app6Res");
const app6BtnVer = document.getElementById("app6BtnVer");
const lista = document.createElement("ol");
app6BtnVer.addEventListener("click", (e) => {
    e.preventDefault();

    let ini = parseInt(app6Ini.value);
    let fin = parseInt(app6Fin.value);

    let numero = ini
    do {
        /* codigo para checar si es perfecto*/
        if(perfecto(numero)){
            let item = document.createElement("li");
            item.innerHTML = numero;
            lista.appendChild(item);
        }
        numero++;
    }while( numero <= fin);

    app6Res.appendChild(lista);
})

/* App7 */

const app7Id = document.getElementById("app7Id");
const app7Nombre = document.getElementById("app7Nombre");
const app7Altura = document.getElementById("app7Altura");
const app7Peso = document.getElementById("app7Peso");
const app7Imagen = document.getElementById("app7Imagen");
const app7BtnBuscar = document.getElementById("app7BtnBuscar");

app7BtnBuscar.addEventListener("click", e => {
    e.preventDefault();

    let id = app7Id.value;
    let url = "https://pokeapi.co/api/v2/pokemon/" + id;

    fetch(url)
         .then(response => response.json())
         .then(data => mostrarDatos(data));
});

function mostrarDatos(data){
    console.log(data);

    app7Nombre.innerHTML = "Nombre:" + data.name;
    app7Peso.innerHTML = "Peso:" + data.weight;
    app7Altura.innerHTML = "Altura:" + data.height;
    app7Imagen.src = data.sprites.other.home.front_default;

    let plantilla = `<div class="row">
            <label for="app7Res">Resultado:</label>
            <h2 id="app7Nombre">${data.name}</h2>
            <h3 id="app7Peso"></h3>
            <h3 id="app7Altura"></h3>
            <img id="app7Imagen" src="" alt="">
    </div>`   
}