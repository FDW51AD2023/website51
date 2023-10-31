
/* App 4 */

const app4Tabla = document.getElementById("app4Tabla");
const app4Inv = document.getElementById("app4Inv");
const app4SoloPunto = document.getElementById("app4SoloPunto");
const app4Res = document.getElementById("app4Res");
const app4BtnVer = document.getElementById("app4BtnVer");

function mostrarTabla(){
    let tabla = parseInt(app4Tabla.value);
    let lista = document.createElement("ul");
    if( !app4Inv.checked ){
        for(let i=1 ; i<=10 ; i++){
            let resMult = app4SoloPunto.checked ? ".".repeat(tabla*i) : tabla * i ;
            let item = document.createElement("li");
            item.innerHTML = tabla + " X " + i + " = " + resMult;
            lista.appendChild(item);
        }
    }
    else {
        for( let i=10 ; i>=1 ; i-- ){
            let resMult= app4SoloPunto.checked ? ".".repeat(tabla*i) : tabla*i ;
            let item = document.createElement("li");
            item.innerHTML = tabla + " X " + i + " = " + resMult;
            lista.appendChild(item);
        }
    }
    app4Res.innerHTML="";
    app4Res.appendChild(lista);
};

app4BtnVer.addEventListener("click",(e) =>{
    e.preventDefault();
    mostrarTabla();
});

app4Inv.addEventListener("change",(e)=>{
    mostrarTabla();
});

app4SoloPunto.addEventListener("change",(e)=>{
    mostrarTabla();
})

/* app4BtnVer.addEventListener("click", (e) => {

});



app4BtnVer.addEventListener("click",(e) =>{
    e.preventDefault();

    let tabla = parseInt(app4Tabla.value);

    let lista = document.createElement("ul");



    if(!app4Inv.checked){

        for(let i=1 ; i<=10 ; i++){

            let resultMult = app4SoloPunto.checked ? ".".repeat (tabla*i): tabla*i ;

            
            let item = document.createElement("li");
            item.innerHTML = tabla + " X " + i + " = " + resultMult;
            lista.appendChild(item);
        }
    }

    else{
        for(let i=10 ; i>=1 ; i--){
            let resultMult = app4SoloPunto.checked ? ".".repeat (tabla*i): tabla*i ;
            let item = document.createElement("li");
            item.innerHTML = tabla + " X " + i + " = " + resultMult;
            lista.appendChild(item);
        } 
    }


    app4Res.innerHTML ="";
    app4Res.appendChild(lista);
});
  */




/* App1 */

const app1Num1 = document.getElementById("app1Num1");
const app1Num2 = document.getElementById("app1Num2");
const app1Res1 = document.getElementById("app1Res1");
const app1Res2 = document.getElementById("app1Res2");
const app1Res3 = document.getElementById("app1Res3");
const app1Res4 = document.getElementById("app1Res4");

const app1BtnCalcular = document.getElementById("app1BtnCalcular");

app1BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseInt (app1Num1.value);
    let num2 = parseInt (app1Num2.value);
    let suma =  num1 + num2;
    let resta =  num1 - num2;
    let multiplicacion =  num1 * num2;
    let division =  num1 / num2;


    app1Res1.value =suma;
    app1Res2.value =resta;
    app1Res3.value =multiplicacion;
    app1Res4.value =division;
});

/* APPS */

const app3Num1 = document.getElementById("app3Num1");
const app3Num2 = document.getElementById("app3Num2");
const app3Operacion = document.getElementById("idApp3Operacion")
const app3Res = document.getElementById("app3Res")
const app3BtnCalcular = document.getElementById("app3BtnCalcular")

app3BtnCalcular.addEventListener("click",(e)=> {
    e.preventDefault();
    let num1 = parseInt(app3Num1.value);
    let num2 = parseInt(app3Num2.value);
    let operacion = (app3Operacion.value);
    let resultado;




    /* if (operacion=="s") {
        resultado = num1+num2;
        
    }
    else if (operacion=="r") {
        resultado = num1-num2;
    }

    else if (operacion=="m") {
        resultado = num1*num2;
    }

    else if (operacion=="d") {
        resultado = num1 / num2;
    } */

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
    
    
    app3Res.value=resultado;
});

/* App5 */
const app5Borde = document.getElementById("app5Borde");
const app5Color = document.getElementById("app5Color");
const app5Grosor = document.getElementById("app5Grosor");
const app5TipoBorde = document.getElementById("app5TipoBorde");
const app5DivPrueba = document.getElementById("app5DivPrueba");
const app5BtnVer = document.getElementById("app5BtnVer");

app5BtnVer.addEventListener("click", (e) => {
    e.preventDefault();

    app5DivPrueba.style.border = "none";

    switch (app5Borde.value) {
        case "all":
            app5DivPrueba.style.border = app5Grosor.value + "px " + app5TipoBorde.value + app5Color.value;
            break;
        case "top":
            app5DivPrueba.style.borderTop = app5Grosor.value + "px " + app5TipoBorde.value + app5Color.value;
            break;
        case "bottom":
            app5DivPrueba.style.borderBottom = app5Grosor.value + "px " + app5TipoBorde.value + app5Color.value;
            break;
        case "left":
            app5DivPrueba.style.borderLeft = app5Grosor.value + "px " + app5TipoBorde.value + app5Color.value;
            break;
        case "right":
            app5DivPrueba.style.borderRight = app5Grosor.value + "px " + app5TipoBorde.value + app5Color.value;
            break;
    }
});


/* APP 6 */
function perfecto(numero){
    let div = 1;
    let suma = 0;

    while(div<numero){
        if (numero%div==0){
            suma+=div;
        }
        div++;
    }
    return suma==numero;
}

const app6Ini = document.getElementById("app6Ini");
const app6Fin = document.getElementById("app6Fin");
const app6Res = document.getElementById("app6Res");
const app6BtnVer  = document.getElementById("app6BtnVer");
const lista = document.createElement("ol");

app6BtnVer.addEventListener("click", (e) => {
    e.preventDefault();

    let ini = parseInt(app6Ini.value);
    let fin = parseInt(app6Fin.value);

    let numero = ini;

    do {
        /* Codigo para checar si es perfecto */
        if(perfecto(numero)){
            let item= document.createElement("li");
            item.innerHTML=numero;
            lista.appendChild(item);
        }

        numero++;
    } while(numero<=fin);
        app6Res.appendChild(lista);
});