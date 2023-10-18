const app1num1= document.getElementById("app1Num1")
const app1num2= document.getElementById("app1Num2")
const app1res= document.getElementById("app1res")
const app1bc= document.getElementById("app1bc")
/* aparece una pestaña conel mensaje al dar clic
app1bc.addEventListener("click",() =>{
    alert("apachrraste el boton")
})
/* en el boque de resultados se muestra el mensaje*/
app1bc.addEventListener("click",(e) =>{
    e.preventDefault();
    let num1 =parseInt (app1num1.value)
    let num2 =parseInt(app1num2.value)
    let suma = num1 + num2
    app1res.value =suma
})

const app2num1= document.getElementById("app2Num1")
const app2num2= document.getElementById("app2Num2")
const app2res1= document.getElementById("app2res1")
const app2res2= document.getElementById("app2res2")
const app2res3= document.getElementById("app2res3")
const app2res4= document.getElementById("app2res4")
const app2bc= document.getElementById("app2bc")

app2bc.addEventListener("click",(e) =>{
    e.preventDefault();
    let num1 = parseInt (app2num1.value)
    let num2 = parseInt(app2num2.value)
    let suma = num1 + num2
    let resta = num1 - num2
    let multiplicacion = num1 * num2
    let divicion = num1 / num2
    app2res1.value =suma
    app2res2.value = resta
    app2res3.value = multiplicacion
    app2res4.value=divicion
})