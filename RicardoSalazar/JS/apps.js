/* App 6 */
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
const app6btnVer = document.getElementById("app6BtnVer");
const lista = document.createElement("ol");

app6btnVer.addEventListener("click", (e) => {
    e.preventDefault();

    let ini = parseInt(app6Ini.value);
    let fin = parseInt(app6Fin.value);

    let numero = ini

    do {
        /* Aqui deberia ir un codigo para checar ese numero */
        /* Codigo para revisar si es perfecto */
        if(perfecto(numero)){
            let item = document.createElement("li");
            item.innerHTML = numero
            lista.appendChild(item);
        }
        numero++;
    }while(numero <= fin);

    app6Res.appendChild(lista);
});

/* app 5 */

/* const app5Num1 = document.getElementById("app5Num1");
const app5Num2 = document.getElementById("app5Num2");
const app5Operacion = document.getElementById("app5Operacion")
const app5Res = document.getElementById("app5Res");
const app5BtnCalcular = document.getElementById("app5BtnCalcular");

app5BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseInt(app5Num1.value);
    let num2 = parseInt(app5Num2.value);
    let operacion = app5Operacion.value;
    let resultado;

    switch(operacion){
        case "s" :  resultado = num1 + num2;
                    break;
        case "r" :  resultado = num1 - num2;
                    break;
        case "m" :  resultado = num1 * num2;
                    break;
        case "d" :  resultado = num1 / num2;
                    break;
    }

    app5Res.value = resultado;
}); */

/* app4 Tablas de multiplicar*/

const app4Tabla = document.getElementById("app4Tabla");
const app4Inv = document.getElementById("app4Inv");
const app4SoloPunto = document.getElementById("app4SoloPunto");
const app4Res = document.getElementById("app4Res");
const app4BtnVer = document.getElementById("app4BtnVer");

app4BtnVer.addEventListener("click", (e) => {e.preventDefault();

    let tabla = parseInt(app4Tabla.value);
        if(app4SoloPunto.checked){
            for(let i=1 ; i <=10; i++ ){
                let i = app4SoloPunto.checked? resMult= ".".repeat(tabla*i): resMult = tabla * i;
                let app4SoloPunto;}
            }
        if ( !app4Inv.checked){
            for(let i=1; i <=10; i++ ){
                let i = document.createElement("li");
                item.innerHTML = tabla + " X " + i + " = " + tabla * i;
                lista.appendChild(item)};
            }
        else {
            for(let i=10; i >=1; i-- ){
                let item = document.createElement("li");
                item.innerHTML = tabla + " X " + i + " = " + tabla * i;
                lista.appendChild(item)};
            }
        });
/* App3 */

const app3Num1 = document.getElementById("app3Num1")
const app3Num2 = document.getElementById("app3Num2")
const app3Operacion = document.getElementById("app3Operacion")
const app3Res = document.getElementById("app3Res")
const app3BtnCalcular = document.getElementById("app_3BtnCalcular")

app3BtnCalcular.addEventListener("click",(e)=> {
    e.preventDefault();
    let num1 = parseInt(app3Num1.value);
    let num2 = parseInt(app3Num2.value);
    let operacion = app3Operacion.value;
    let resultado;
/*
    if(operacion == "s"){
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
        case "s" : resultado = num1 + num2
                    break;
        case "r" : resultado = num1 - num2;
                    break;
        case "m" : resultado = num1 * num2;
                    break;
        case "d" : resultado = num1 / num2;
                    break;
    }
    app3Res.value = resultado;
});

/* app1 */

const app1Num1 = document.getElementById("app1Num1");
const app1Num2 = document.getElementById("app1Num2");
const app1Res = document.getElementById("app1Res");

const app1BtnCalcular = document.getElementById("app1BtnCalcular");

app1BtnCalcular.addEventListener("click", (e) => { e.preventDefault();

    let num1 = parseInt(app1Num1.value);
    let num2 = parseInt(app1Num2.value);
    let suma = num1 + num2;

    app1Res.value = suma
});

/* app_resta */

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

/* app_division */

const app_divisionNum1 = document.getElementById("app_divisionNum1");
const app_divisionNum2 = document.getElementById("app_divisionNum2");
const app_divisionRes = document.getElementById("app_divisionRes");

const app_divisionBtnCalcular = document.getElementById("app_divisionBtnCalcular");

app_divisionBtnCalcular.addEventListener("click", (e) => { e.preventDefault();

    let num1 = parseInt(app_divisionNum1.value);
    let num2 = parseInt(app_divisionNum2.value);
    let division = num1 / num2;

    app_divisionRes.value = division
});