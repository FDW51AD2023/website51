
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
const app2ResSum = document.getElementById("app2ResSum");
const app2ResRes = document.getElementById("app2ResRes");
const app2ResMul = document.getElementById("app2ResMul");
const app2ResDiv = document.getElementById("app2ResDiv");

const app2BtnCalcular = document.getElementById("app2BtnCalcular");

app2BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();
    
    let anum1 = parseInt(app2Num1.value);
    let anum2 = parseInt(app2Num2.value);
    let suma2 = anum1 + anum2;
    let resta = anum1 - anum2;
    let multiplicacion = anum1 * anum2;
    let division = anum1 / anum2; 
    app2ResSum.value = suma2;
    app2ResRes.value = resta;
    app2ResMul.value = multiplicacion;
    app2ResDiv.value = division;
});

/* App 3 */

const app3Num1 = document.getElementById("app3Num1");
const app3Num2 = document.getElementById("app3Num2");
const app3Operacion = document.getElementById("app3Operacion");
const app3Res = document.getElementById("app3Res");
const app3BtnCalcular = document.getElementById("app3BtnCalcular");

app3BtnCalcular.addEventListener("click" , (e) => {
    e.preventDefault();

    let num1 = parseInt(app3Num1.value);
    let num2 = parseInt(app3Num2.value);
    let operacion = app3Operacion.value;
    let resultado;

/*     if (operacion == "s") {
        resultado = num1 + num2;
    }
    else if (operacion == "r") {
        resultado = num1 - num2;
    }
    else if (operacion == "m") {
        resultado = num1 * num2;
    }
    else if (operacion == "d") {
        resultado = num1 / num2;
    } */

    switch (operacion) {
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
});

/* App 4 */

const app4Tabla = document.getElementById("app4Tabla");
const app4Inv = document.getElementById("app4Inv");
const app4SoloPunto = document.getElementById("app4SoloPunto");
const app4Res = document.getElementById("app4Res");
const app4BtnVer = document.getElementById("app4BtnVer");

/* Checar si se marco tabla invertida */

if (app4Inv.checked) {

}