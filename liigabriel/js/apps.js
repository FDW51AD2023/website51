/* App5 */
function perfecto(numero){
    let div = 1;
    let suma =0;
    while( div < numero ){
        if(numero % div == 0){
            suma += div
        }
        div++;
    }
   return suma == numero;
}

const app5Ini = document.getElementById("app5Ini");
const app5Fin = document.getElementById("app5Fin");
const app5Res = document.getElementById("app5Res");
const app5BtnVer = document.getElementById("app5BtnVer");
const lista = document.createElement("ol");

app5BtnVer.addEventListener("click", (e) => {
    e.preventDefault();

    let ini = parseInt(app5Ini.value);
    let fin = parseInt(app5Fin.value);

    let numero = ini
    
    do {
        /* codigo para checar si es perfecto */
        if( perfecto(numero)){
           let item = document.createElement("li");
           item.innerHTML = numero;
           lista.appendChild(item);  
        }
        numero++;
    }while( numero <= fin);

    app5Res.appendChild(lista);
});



/* App4 */
const app4Tabla = document.getElementById("app4Tabla");
const app4Inv = document.getElementById("app4Inv");
const app4SoloPunto = document.getElementById("app4SoloPunto");
const app4Res = document.getElementById("app4Res");
const app4BtnVer = document.getElementById("app4BtnVer");

function mostrarTabla(){
    let tabla =  parseInt(app4Tabla.value);

    let lista = document.createElement("ul");
    
    if( !app4Inv.checked ){
        for(let i=1 ; i <=10; i++ ){
            let resMult = app4SoloPunto.checked ? ".".repeat(tabla * i) : tabla * i ;

            let item = document.createElement("li");
            item.innerHTML = tabla + " X " + i + " = " + resMult;
            lista.appendChild(item);
        }
    }
    else {
        for(let i=10 ; i >=1; i-- ){

            let resMult = app4SoloPunto.checked ? ".".repeat(tabla *i): tabla*i;

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

    switch(operacion){
        case "s" :  resultado = num1 + num2; 
                    break;
        case "r" : resultado = num1 - num2;
                    break;
        case "m" : resultado = num1 * num2;
                    break;
        case "d" :resultado = num1 /num2;
                    break;
    }

    app3Res.value = resultado;
} );








/* App1 */

const app1Num1 = document.getElementById("app1Num1");
const app1Num2 = document.getElementById("app1Num2");
const app1Res = document.getElementById("app1Res");

const app1BtnCalcular = document.getElementById("app1BtnCalcular");

app1BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 =  parseInt(app1Num1.value);
    let num2 =  parseInt(app1Num2.value);
    let suma = num1 + num2;

    app1Res.value = suma;
});

