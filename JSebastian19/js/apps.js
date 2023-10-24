/* Aplicacion 1 */

const app1Num1 = document.getElementById ("app1Num1");
const app1Num2 = document.getElementById ("app1Num2");

const app1BotonCalcular = document.getElementById ("app1BtnCalcular");

const app1ResSuma = document.getElementById ("app1ResSuma");

app1BotonCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseFloat (app1Num1.value);
    let num2 = parseFloat (app1Num2.value);

    let suma = num1 + num2;

    app1ResSuma.value = suma
});

/* Aplicacion 2 */

const app2Num1 = document.getElementById ("app2Num1");
const app2Num2 = document.getElementById ("app2Num2");

const app2BotonCalcular = document.getElementById ("app2BtnCalcular");

const app2ResSuma = document.getElementById ("app2ResSuma");
const app2ResResta = document.getElementById ("app2ResResta");
const app2ResMultiplicacion = document.getElementById ("app2ResMultiplicacion");
const app2ResDivsion = document.getElementById ("app2ResDivision");

app2BotonCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseFloat (app2Num1.value);
    let num2 = parseFloat (app2Num2.value);

    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;

    app2ResSuma.value = suma
    app2ResResta.value = resta
    app2ResMultiplicacion.value = multiplicacion
    app2ResDivsion.value = division

});

/* Aplicacion 3 */

const app3Num1 = document.getElementById("app3Num1");
const app3Num2 = document.getElementById("app3Num2");

const app3Operacion = document.getElementById("app3Operacion");

const app3BtnCalcular = document.getElementById("app3BtnCalcular");

const app3Res = document.getElementById("app3Res");

app3BtnCalcular.addEventListener("click",(e)=> {
  e.preventDefault();

  let num1 = parseInt(app3Num1.value);
  let num2 = parseInt(app3Num2.value);

  let Operacion = app3Operacion.value;

  let Resultado;

  switch (Operacion) {
     case "s":
        Resultado = num1 + num2;
        break;
     
     case "r":
        Resultado = num1 - num2;
        break;
     
     case "m":
        Resultado = num1 * num2;
        break;
     
     case "d":
        Resultado = num1 / num2;
        break;     
  }
  app3Res.value = Resultado;

});

/* Aplicacion 4 */

const app4Tabla = document.getElementById ("app4Tabla");

const app4Inv = document.getElementById ("app4Inv");
const app4sSoloPunto = document.getElementById ("app4SoloPunto");

const app4Res = document.getElementById ("app4Res");

const app4BtnVer = document.getElementById ("app4BtnVer");

if (app4Inv.checked){

}