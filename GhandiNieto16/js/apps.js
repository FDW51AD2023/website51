/* App 5 */
const app5Borde = document.getElementById("app5Borde");
const app5Grosor = document.getElementById("app5Grosor");
const app5Color = document.getElementById("app5Color");
const app5Tipo = document.getElementById("app5Tipo");
const app5BtnVer = document.getElementById("app5BtnVer");
const appDiv = document.getElementById("prueba");

app5BtnVer.addEventListener("click", (e) => {
    e.preventDefault();

    switch (app5Borde.value) {
        case "top":
            appDiv.style.borderTopWidth = app5Grosor.value + "px";
            appDiv.style.borderTopStyle = app5Tipo.value;
            appDiv.style.borderTopColor = app5Color.value;
            break;
        case "right":
            appDiv.style.borderRightWidth = app5Grosor.value + "px";
            appDiv.style.borderRightStyle = app5Tipo.value;
            appDiv.style.borderRightColor = app5Color.value;
            break;
        case "bottom":
            appDiv.style.borderBottomWidth = app5Grosor.value + "px";
            appDiv.style.borderBottomStyle = app5Tipo.value;
            appDiv.style.borderBottomColor = app5Color.value;
            break;
        case "left":
            appDiv.style.borderLeftWidth = app5Grosor.value + "px";
            appDiv.style.borderLeftStyle = app5Tipo.value;
            appDiv.style.borderLeftColor = app5Color.value;
            break;
        case "all":
            appDiv.style.borderWidth = app5Grosor.value + "px";
            appDiv.style.borderStyle = app5Tipo.value;
            appDiv.style.borderColor = app5Color.value;
            break;
    }
});




/* App 4 */

const app4Tabla = document.getElementById("app4Tabla");
const app4Inv = document.getElementById("app4Inv");
const app4SoloPunto = document.getElementById("app4SoloPunto");
const app4Res = document.getElementById("app4Res");
const app4BtnVer = document.getElementById("app4BtnVer");
function mostrarTabla(){
    let tabla = parseInt(app4Tabla.value);

    let lista = document.createElement("ul");


    /* Primero va el objeto "app4Inv" */
    if( !app4Inv.checked){

        for(let i=1; i <=10; i++){

            let resMult = app4SoloPunto.checked ? ".".repeat(tabla*i): tabla*i;
            let item = document.createElement("li");
            item.innerHTML=tabla+" X "+i+" = "+ resMult;
            lista.appendChild(item);
            
        }

  /*       for(let i=1; i <=10; i++){
            let resMult;
            
            if(app4SoloPunto.checked){
                resMult=".".repeat(tabla * i)
            }
            else{
                resMult = tabla*i;
            }
            let item = document.createElement("li");
            
            item.innerHTML=tabla+" X "+i+" = "+ resMult;
            lista.appendChild(item);
        }
 */
        
    }

    else{

        for(let i=10; i >=1; i--){

            let resMult = app4SoloPunto.checked ? ".".repeat(tabla*i): tabla*i;
            let item = document.createElement("li");
            item.innerHTML=tabla+" X "+i+" = "+ resMult;
            lista.appendChild(item);
            
        }
  /*       for(let i=10; i >=1; i--){
            let resMult;
   
            if(app4SoloPunto.checked){
                resMult=".".repeat(tabla * i)
            }
            else{
                resMult = tabla*i;
            }
            let item = document.createElement("li");
   
            item.innerHTML=tabla+" X "+i+" = "+ resMult;
            lista.appendChild(item);
        }
 */
    }
    

    /* Esto se mando a un div como lista */

    /*  Dejar el elemento vacio */
    app4Res.innerHTML="";
    /* Mandar al HTML el conetnido de JS */
    app4Res.appendChild(lista);
}

app4BtnVer.addEventListener("click",(e) =>{
    e.preventDefault();
    mostrarTabla();


});

app4Inv.addEventListener("change", (e) => {
    mostrarTabla();

});

app4SoloPunto.addEventListener("change", (e) => {
    mostrarTabla();
    
});

/* Mandar a la consola; Mandar una caja ; Mandar a un elemento */

/* Inicialización, Repetición (mientras cont sea menor o igual a 10 el ciclo se va a estar reptitiendo), en cuanto aumenta */
/* for(let cont = 1; cont <=10; cont++){

    console.log(cont);

} */



/* App 3 */


const app3Num1 = document.getElementById("app3Num1");
const app3Num2 = document.getElementById("app3Num2");
const app3Operacion = document.getElementById("app3Operacion");
const app3Res = document.getElementById("app3Res");
const app3BtnCalcular = document.getElementById("app3BtnCalcular");
app3BtnCalcular.addEventListener("click", (e) => {

    /* Esto es para que no se envien los datos al servidor */
    e.preventDefault();
    /* Variable que guarda el valor que esta en el objeto app3Num1 */
    let num1 = parseInt(app3Num1.value);
    let num2 = parseInt(app3Num2.value);
    /* Esto se devuelve como cadena, por ejemplo si el usuario elije la resta, el value ontendra la letra r */
    let operacion = app3Operacion.value;

/*     if (operacion == "s"){

        resultado = num1 + num2 ;

    }

    else if(operacion == "r") {
        resultado = num1 - num2;
    }

    else if(operacion == "m") {
        resultado = num1 * num2;
    }

    else if(operacion == "d") {
        resultado = num1 / num2;
    } */

    switch(operacion){
        case "s": resultado = num1 + num2;
                    break;

        case "r": resultado = num1 - num2; break;

        case "m": resultado = num1 * num2; break;
        case "d": resultado = num1 / num2; break;

    }


    app3Res.value = resultado;

});





/* App1 */


const app1Num1 = document.getElementById("app1Num1");
const app1Num2 = document.getElementById("app1Num2");
const app1Res = document.getElementById("app1Res");

const app1BtnCalcular = document.getElementById("app1BtnCalcular");

app1BtnCalcular.addEventListener("click", (e)=> {
    e.preventDefault();
    let num1 = parseInt(app1Num1.value);
    let num2 = parseInt(app1Num2.value);
    let suma = num1 + num2;

    app1Res.value= suma;
});


/* App2 */


const app2Num1 = document.getElementById("app2Num1");
const app2Num2 = document.getElementById("app2Num2");
const app2Res = document.getElementById("app2Res");

const app2BtnCalcular = document.getElementById("app2BtnCalcular");

app2BtnCalcular.addEventListener("click", (e)=> {
    e.preventDefault();
    let num1 = parseInt(app2Num1.value);
    let num2 = parseInt(app2Num2.value);
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multi =num1 * num2;
    let Div = num1 / num2;

    app2Suma.value= suma;
    app2Resta.value= resta;
    app2Multi.value= multi;
    app2Div.value= Div;
});



