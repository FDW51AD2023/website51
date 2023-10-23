
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