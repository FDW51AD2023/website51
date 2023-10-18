/* App1 */


const app1Num1 = document.getElementById("app1Num1");
const app1Num2 = document.getElementById("app1Num2");
const app1Res = document.getElementById("app1Res");

const app1BtnCalcular = document.getElementById("app1BtnCalcular");
const resta = document.getElementById("resta");
const division = document.getElementById("division");
const multipliacion = document.getElementById("multiplicacion");

app1BtnCalcular.addEventListener("click", (e)=> {
    e.preventDefault();
    let num1 = parseInt(app1Num1.value);
    let num2 = parseInt(app1Num2.value);
    let suma = num1 + num2;

    app1Res.value= suma;
});
resta.addEventListener("click", (e)=> {
    e.preventDefault();
    let num1 = parseInt(app1Num1.value);
    let num2 = parseInt(app1Num2.value);
    let resta_ = num1 - num2;

    app1Res.value= resta_;
});
division.addEventListener("click", (e)=> {
    e.preventDefault();
    let num1 = parseInt(app1Num1.value);
    let num2 = parseInt(app1Num2.value);
    let division_ = num1 / num2;

    app1Res.value= division_;
});
multiplicacion.addEventListener("click", (e)=> {
    e.preventDefault();
    let num1 = parseInt(app1Num1.value);
    let num2 = parseInt(app1Num2.value);
    let multiplicacion_ = num1 * num2;

    app1Res.value= multiplicacion_;
});