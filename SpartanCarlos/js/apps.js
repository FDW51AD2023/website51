
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
const app2Res = document.getElementById("app2Res");

const app2BtnCalcular = document.getElementById("app2BtnCalcular");

app2BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseInt(app2Num1.value);
    let num2 = parseInt(app2Num2.value);
    let resta = num1 - num2;

    app2Res.value = resta;
});

/* App3 */
const app3Num1 = document.getElementById("app3Num1");
const app3Num2 = document.getElementById("app3Num2");
const app3Mult = document.getElementById("app3Mult");

const app3BtnCalcular = document.getElementById("app3BtnCalcular");

app3BtnCalcular,addEventListener("click", (e) => {
    e.preventDefault();
        let num1 =parseInt(app3Num1.value);
        let num2 =parseInt(app3Num2.value);
        let Mult = num1 * num2;

    app3Mult.value = Mult;
});

/* App4 */
const app4Num1 = document.getElementById("app4Num1");
const app4Num2 = document.getElementById("app4Num2");
const app4Div = document.getElementById("App4Div");

const app4BtnCalcular = document.getElementById("app4BtnCalcular");

app4BtnCalcular,addEventListener("click", (e) => {
    e.preventDefault();
        let num1 = parseInt(app4Num1.value);
        let num2 = parseInt(app4Num2.value);
        let Div = num1 / num2;
    
        app4Div.value = Div;

});