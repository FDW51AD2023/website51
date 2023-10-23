/* App3 */


const app3Num1 = document.getElementById("app3Num1")
const app3Num2 = document.getElementById("app3Num2")
const App3operacion = document.getElementById("app3operacion")
const app3Res = document.getElementById("app3Res")
const app3BtnCalcular = document.getElementById("app3BtnCalcular")


app3BtnCalcular.addEventListener("click", (e)=> {
    e.preventDefault();

let app3num1 = parseInt(app3Num1.value)
let app3num2 = parseInt(app3Num2.value)
let operacion = App3operacion.value;
let app3resultado;

if(operacion == "S"){
    app3resultado = app3num1 + app3num2;
}
else if(operacion == "R"){
    app3resultado = app3num1 - app3num2;
}
else if(operacion == "M"){
    app3resultado = app3num1 * app3num2;
}
else if(operacion == "D"){
    app3resultado = app3num1 / app3num2;
}

app3Res.value=app3resultado;
});



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