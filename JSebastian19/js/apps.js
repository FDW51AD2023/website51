/* App1 * */

const app1Num1 = document.getElementById("app1Num1");
const app1Num2 = document.getElementById("app1Num2");

const app1Res = document.getElementById("app1Res");

const app1BotonCalcular = document.getElementById("app1BtnCalcular");

app1BotonCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseInt (app1Num1.value)
    let num2 = parseInt (app1Num2.value)
    let suma = num1 + num2

    app1Res.value = suma
});