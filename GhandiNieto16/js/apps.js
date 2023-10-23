/* App 4 */

const app4Tabla = document.getElementById("app4Tabla");
const app4Inv = document.getElementById("app4Inv");
const app4SoloPunto = document.getElementById("app4SoloPunto")
const app4Res = document.getElementById("app4Res");
const app4BtnVer = document.getElementById("app4BtnVer");


/* Checar si se marco la tabla invertida */

if (app4Inv.checked){
    
};

/* Inicialización, Repetición (mientras cont sea menor o igual a 10 el ciclo se va a estar reptitiendo), en cuanto aumenta */
for(let cont = 1; cont <=10; cont++){

    console.log(cont);

}



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



