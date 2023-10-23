/* app 1*/
const app1Num1=document.getElementById("app1Num1")
const app1Num2=document.getElementById("app1Num2")
const app1Res=document.getElementById("app1Res")

const app1btnCalcular=document.getElementById("app1btnCalcular");

app1btnCalcular.addEventListener("click",(e) => {
    e.preventDefault();
    let num1= parseInt(app1Num1.value);
    let num2= parseInt(app1Num2.value);
    let suma= num1 + num2;
    app1Res.value = suma
});
/*app 4*/
const app4tabla= document.getElementById("app4tabla")
const app4inv= document.getElementById("app4inv")
const app4solopunto= document.getElementById("app4solopunto")
const app4res= document.getElementById("app4res")
const app4btnver= document.getElementById("app4btnver")

/*checar si se marco tabla invertida*/
if (app4inv.checked){

}



/*app 3*/
const app3Num1 = document.getElementById("app3Num1")
const app3Num2 = document.getElementById("app3Num2")
const app3operacion = document.getElementById("app3operacion")
const app3Res = document.getElementById("app3Res")
const app3btnCalcular = document.getElementById("app3btnCalcular")

app3btnCalcular.addEventListener("click",(e) => {
    e.preventDefault();
    let num1= parseInt(app3Num1.value);
    let num2= parseInt(app3Num2.value);
    let operacion = app3operacion.value;
    let resultado;
    /* if(operacion =="s"){
        resultado= num1 + num2
    }
    else if(operacion =="r"){
        resultado= num1 - num2
    }
    else if(operacion =="m"){
        resultado= num1 * num2
    }
    else if(operacion =="d"){
        resultado= num1 / num2
    } */

    switch(operacion){
        case "s": resultado= num1 + num2; break;
        case "r": resultado= num1 - num2; break;
        case "m": resultado = num1 * num2; break;
        case "d": resultado= num1 / num2; break;

    }

    app3Res.value = resultado;
})




