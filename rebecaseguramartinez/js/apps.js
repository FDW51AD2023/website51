/* app1 */

const app1Num1 = document.getElementById("app1Num1")
const app1Num2 = document.getElementById("app1Num2")
const app1Res = document.getElementById("app1Res")

const app1BtnCalcular = document.getElementById("app1BtnCalcular")
app1BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseInt (app1Num1.value);
    let num2 = parseInt (app1Num2.value);
    let suma = num1 + num2;

    app1Res.value = suma;
});

/* app2 */
const app2Num1 = document.getElementById("app2Num1")
const app2Num2 = document.getElementById("app2Num2")
const app2Sum = document.getElementById("app2Sum")

const app2BtnCalcular = document.getElementById("app2BtnCalcular")
app2BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseInt (app2Num1.value);
    let num2 = parseInt (app2Num2.value);
    let suma = num1 + num2;

    app2Sum.value = suma;

});

const rapp2Num1 = document.getElementById("app2Num1")
const rapp2Num2 = document.getElementById("app2Num2")
const rapp2Rest = document.getElementById("app2Sum")

const rapp2BtnCalcular = document.getElementById("app2BtnCalcular")
app2BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseInt (app2Num1.value);
    let num2 = parseInt (app2Num2.value);
    let resta = num1 - num2;

    app2Rest.value = resta;

});




                                                                    
