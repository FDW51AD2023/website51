
//App 1

const app1Num1=document.getElementById("app1Num1");
const app1Num2=document.getElementById("app1Num2");
const app1Res=document.getElementById("app1Res");
const app1BtnCalcular=document.getElementById("app1BtnCalcular");

app1BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();
    
    let num1 = parseInt(app1Num1.value);
    let num2 = parseInt(app1Num1.value);
    let suma = num1+num2;

    app1Res.value=suma;


});

//-----------------------------------
//App 4 operaciones basicas xd

const app2Num1=document.getElementById("app2Num1");
const app2Num2=document.getElementById("app2Num2");
const app2ResSum=document.getElementById("app2ResSum");
const app2ResRes=document.getElementById("app2ResRes");
const app2ResDiv=document.getElementById("app2ResDiv");
const app2ResMul=document.getElementById("app2ResMul");

app2BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();
    
    let num1=parseFloat(app2Num1.value);
    let num2=parseFloat(app2Num2.value);
    let suma= num1+num2
    let resta= num1-num2
    let mult= num1*num2
    let div= num1/num2

    app2ResSum.value=suma
    app2ResRes.value=resta
    app2ResDiv.value=div
    app2ResMul.value=mult
})