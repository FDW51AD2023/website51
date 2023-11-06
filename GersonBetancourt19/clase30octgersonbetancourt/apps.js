/* App5 */

const app7Id = document.getElementById("app7Id");
const app7Nombre = document.getElementById("app7Nombre");
const app7Altura = document.getElementById("app7Altura");
const app7Peso = document.getElementById("app7Peso");
const app7Imagen = document.getElementById("app7Imagen");
const app7Buscar = document.getElementById("app7Buscar");

app5BtnBuscar.addEventListener("click", e => {
    e.preventDefault();

    let id = app7Id.value;
    let url = "https://pokeapi.co/api/v2/pokemon/" + id;

    fetch(url)
        .then( response => response.json())
        .then(data => mostrarDatos(data));
})

function mostrarDatos(data){
    console.log(data)

    app7Nombre.innerHTML = data.name;
    app7Peso. innerHTML = data.weight;
    app7Altura. innerHTML = data.height;
    app7Imagen.src = data.sprites.other.home.front_default;
    

    let numero = ini

    do {
        /*codigo para checar ese numero*/
        if( perfecto(numero)){
            let item = document.createElement("li");
            item.innerHTML = numero;
            lista.appendChild(item);
        }
        numero++;
    }while(numero < fin);

    app5Res.appendChild(lista);
};



/* App4 */

const app4Num1 = document.getElementById("app4Num1");
const app4Num2 = document.getElementById("app4Num2");
const app4operacion = document.getElementById("app4operacion");
const app4Res = document.getElementById("app4RRes");
const app4BtnCalcular = document.getElementById("app4BtnCalcular");

app4BtnCalcular.addEventListener("click",(e) => {
    e.preventDefault();

    let num1 = parseInt(app4Num1.value);
    let num2 = parseInt(app4Num2.value);
    let operacion = app30operacion.value;
    let resultado;

    if( operacion == "s"){
        resultado = num1 + num2;
    }
    else if( operacion == "r") {
        resultado = num1 - num2;
    }
    else if( operacion == "m") {
        resultado = num1 * num2;
    }
    else if( operacion == "d") {
        resultado = num1 / num2;
    }

    switch(operacion){
        case "s" : resultado = num1 + num2;
                    break;
        case "r" : resultado = num1 - num2;
                    break;
        case "m" : resultado = num1 * num2;
                    break;
        case "d" : resultado = num1 / num2;
                    break;
    }
    
    app4Res.value = resultado; 
    

/* App3 */

const app3Num1 = document.getElementById("app3Num1");
const app3Num2 = document.getElementById("app3Num2");
const app3operacion = document.getElementById("app3operacion");
const app3Res = document.getElementById("app3RRes");
const app3BtnCalcular = document.getElementById("app3BtnCalcular");

app3BtnCalcular.addEventListener("click",(e) => {
    e.preventDefault();

    let num1 = parseInt(app3Num1.value);
    let num2 = parseInt(app3Num2.value);
    let operacion = app30operacion.value;
    let resultado;

    if( operacion == "s"){
        resultado = num1 + num2;
    }
    else if( operacion == "r") {
        resultado = num1 - num2;
    }
    else if( operacion == "m") {
        resultado = num1 * num2;
    }
    else if( operacion == "d") {
        resultado = num1 / num2;
    }

    switch(operacion){
        case "s" : resultado = num1 + num2;
                    break;
        case "r" : resultado = num1 - num2;
                    break;
        case "m" : resultado = num1 * num2;
                    break;
        case "d" : resultado = num1 / num2;
                    break;
    }
    
    app3Res.value = resultado;
    } );




/* App1 */

const app1Num1 = document.getElementById("app1Num1");
const app1Num2 = document.getElementById("app1Num2");
const app1Res = document.getElementById("app1RRes");

const app1BotonCalcular = document.getElementById("app18tnCalcular")

app1BtnCalcular.addEventListener("click",() => {
    e.preventDefault();

    let num1 = parseInt(app1Num1.value);
    let num2 = parseInt(app1Num2.value);
    let suma = num1 + num2;

    app1Res.value = suma;
});


/* App2 */

const app2Num1 = document.getElementById("app2Num1");
const app2Num2 = document.getElementById("app2Num2");
const app2Res = document.getElementById("app2Res");

const app1BtnCalcular = document.getElementById("app1BtnCalcular");

app1BtnCalcular.addEventListener("click", (e) => { e.preventDefault();

    let num1 = parseInt(app1Num1.value);
    let num2 = parseInt(app1Num2.value);
    let suma = num1 + num2;

    app1Res.value = suma
});

 

/* App_resta */

const app_restaNum1 = document.getElementById("app_restaNum1");
const app_restaNum2 = document.getElementById("app_restaNum2");
const app_restaRes = document.getElementById("app_restaRes");

const app_restaBtnCalcular = document.getElementById("app_restaBtnCalcular");

app_restaBtnCalcular.addEventListener("click", (e) => { e.preventDefault();

    let num1 = parseInt(app_multiplicacionNum1.value);
    let num2 = parseInt(app_multiplicacionNum2.value);
    let suma = num1 - num2;

    app_restaRes.value = suma
});


/* App_division */

const app_divisionNum1 = document.getElementById("app_divisionNum1");
const app_divisionNum2 = document.getElementById("app_divisionNum2");
const app_divisionRes = document.getElementById("app_divisionRes");

const app_divisionBtnCalcular = document.getElementById("app_divisionBtnCalcular");

app_divisionBtnCalcular.addEventListener("click", (e) => { e.preventDefault();

    let num1 = parseInt(app_divisionNum1.value);
    let num2 = parseInt(app_divisionNum2.value);
    let suma = num1 / num2;

    app_divisionRes.value = suma
});