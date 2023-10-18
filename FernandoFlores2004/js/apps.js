//App1

const app1Num1= document.getElementById("app1Num1");
const app1Num2= document.getElementById("app1Num2");
const app1Res= document.getElementById("app1Res");
const app1BotonCalcular=document.getElementById("app1BtnCalcular");

/*darle codigo a un boton

app1BotonCalcular.addEventListener("click", () => {
    alert("hola diste click al boton");
});

//Para que se escriba en una caja cuando se clicke el boton
app1BotonCalcular.addEventListener("click", () => {
    app1Res.value= "hola diste click al boton";
});

Para que la e no envie los datos al servidor e sirve como variable
app1BotonCalcular.addEventListener("click", (e) => {
    e.preventDefault
    app1Res.value= "hola diste click al boton";
}); */

app1BotonCalcular.addEventListener("click", (e) => {
e.preventDefault();

let num1 = parseInt(app1Num1.value);
let num2 = parseInt(app1Num2.value);
let suma = num1+num2;

app1Res.value=suma;

});


const app2Num1= document.getElementById("app2Num1");
const app2Num2= document.getElementById("app2Num2");
const app2Res= document.getElementById("app2Res");
const app2bt= document.getElementById("restar");

app2bt.addEventListener("click",(e)=>{
    e.preventDefault()
    let num11=parseInt(app2Num1.value);
    let num22=parseInt(app2Num2.value);
    let res33=num11-num22;

    app2Res.value=res33;
})
