/* Aplicacion 1 */

const app1Num1 = document.getElementById ("app1Num1");
const app1Num2 = document.getElementById ("app1Num2");

const app1BotonCalcular = document.getElementById ("app1BtnCalcular");

const app1ResSuma = document.getElementById ("app1ResSuma");
const app1ResResta = document.getElementById ("app1ResResta");
const app1ResMultiplicacion = document.getElementById ("app1ResMultiplicacion");
const app1ResDivsion = document.getElementById ("app1ResDivision");

app1BotonCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseFloat (app1Num1.value);
    let num2 = parseFloat (app1Num2.value);

    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;

    app1ResSuma.value = suma
    app1ResResta.value = resta
    app1ResMultiplicacion.value = multiplicacion
    app1ResDivsion.value = division

});