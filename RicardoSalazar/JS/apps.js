/* app1 */

const app1Num1 = document.getElementById("app1Num1");
const app1Num2 = document.getElementById("app1Num2");
const app1Res = document.getElementById("app1Res");

const app1BtnCalcular = document.getElementById("app1BtnCalcular");

app1BtnCalcular.addEventListener("click", (e) => { e.preventDefault();

    let num1 = parseInt(app1Num1.value);
    let num2 = parseInt(app1Num2.value);
    let suma = num1 + num2;

    app1Res.value = suma
});

/* app_resta */

const app_restaNum1 = document.getElementById("app_restaNum1");
const app_restaNum2 = document.getElementById("app_restaNum2");
const app_restaRes = document.getElementById("app_restaRes");

const app_restaBtnCalcular = document.getElementById("app_restaBtnCalcular");

app_restaBtnCalcular.addEventListener("click", (e) => { e.preventDefault();

    let num1 = parseInt(app_multiplicacionNum1.value);
    let num2 = parseInt(app_multiplicacionNum2.value);
    let suma = num1 - num2;

    app_restaRes.value = suma
});

/* app_division */

const app_divisionNum1 = document.getElementById("app_divisionNum1");
const app_divisionNum2 = document.getElementById("app_divisionNum2");
const app_divisionRes = document.getElementById("app_divisionRes");

const app_divisionBtnCalcular = document.getElementById("app_divisionBtnCalcular");

app_divisionBtnCalcular.addEventListener("click", (e) => { e.preventDefault();

    let num1 = parseInt(app_divisionNum1.value);
    let num2 = parseInt(app_divisionNum2.value);
    let suma = num1 / num2;

    app_divisionRes.value = suma
});