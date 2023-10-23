
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