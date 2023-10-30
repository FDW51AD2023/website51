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


const app3Num1=document.getElementById("app3Num1");
const app3Num2=document.getElementById("app3Num2");
const app3Tab=document.getElementById("app3Tabla");
const app3bt=document.getElementById("multiplicar");

app3bt.addEventListener("click",(e)=>{
    e.preventDefault()
    let num111=parseInt(app3Num1.value);
    let num222=parseInt(app3Num2.value);
    let res333=num111*num222;

    app3Tab.value=res333;
})

const appDNum1=document.getElementById("appDNum1");
const appDNum2=document.getElementById("appDNum2");
const appDRes=document.getElementById("appDRes");
const appDbt=document.getElementById("dividir");

appDbt.addEventListener("click",(e)=>{
    e.preventDefault()
    let num1111=parseInt(appDNum1.value);
    let num2222=parseInt(appDNum2.value);
    let res3333=num1111/num2222;

    appDRes.value=res3333;
})


/*app 4*/ 


const app4Num1=document.getElementById("app4Num1");
const app4Num2=document.getElementById("app4Num2");
const app4Operacion=document.getElementById("app4Operacion");
const app4BtnCalcular=document.getElementById("Calcular");
const app4Res=document.getElementById("app4Res");

Calcular.addEventListener("click",(e)=>{
    e.preventDefault();
    let num1=parseInt(app4Num1.value);
    let num2=parseInt(app4Num2.value);
    let operacion= app4Operacion.value;
    let resultado;










/*     if(operacion=="s"){
        resultado= app4Num1+app4Num2;
    }

    else if(operacion=="r"){
        resultado=app4Num1-app4Num2;
    }

    else if(operacion=="m"){
        resultado=app4Num1*app4Num2;
    }

    else if(operacion=="d"){
        resultado=app4Num1/app4Num2;
    } */


    switch(operacion){
    case "s":   resultado=num1+num2;
                break;

    case "r":   resultado=num1-num2;
                break;

    case "m":   resultado=num1*num2;
                break;

    case "d":   resultado=num1/num2;
                break;
    }

    app4Res.value=resultado;
})



/*app 5*/

const app5Tabla = document.getElementById("app5Tabla");
const app5Inv = document.getElementById("app5Inv");
const app5SoloPunto = document.getElementById("app5SoloPunto");
const app5Res = document.getElementById("app5Res");
const app5BtnVer = document.getElementById("app5BtnVer");

function mostrarTabla() {
    let tabla = parseInt(app5Tabla.value);

    let lista = document.createElement("ul");

    if (!app5Inv.checked) {
        for (let i = 1; i <= 10; i++) {
            let resMult = app5SoloPunto.checked ? ".".repeat(tabla * i) : tabla * i;

            let item = document.createElement("li");
            item.innerHTML = tabla + " X " + i + " = " + resMult;
            lista.appendChild(item);
        }
    } else {
        for (let i = 10; i >= 1; i--) {
            let resMult = app5SoloPunto.checked ? ".".repeat(tabla * i) : tabla * i;

            let item = document.createElement("li");
            item.innerHTML = tabla + " X " + i + " = " + resMult;
            lista.appendChild(item);
        }
    }

    app5Res.innerHTML = "";
    app5Res.appendChild(lista);
}

app5Inv.addEventListener("change", (e) => {
    mostrarTabla();
});

app5SoloPunto.addEventListener("change", (e) => {
    mostrarTabla();
});

app5BtnVer.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarTabla();
});


//app de prueba del for

for (let cont=1; cont<=10; cont ++){
    console.log(cont);
}


//app 6

const borde = document.getElementById("seleccionBorde");
const color = document.getElementById("color");
const grueso = document.getElementById("grueso");
const margen = document.getElementById("tipo");
const boton = document.getElementById("app6BtnVer");
const texto = document.getElementById("div");



boton.addEventListener("click", (e) => {
  e.preventDefault();

  let B = borde.value;
  let C = color.value;
  let G = grueso.value;
  let M = margen.value;



  texto.style.margin = B;
  texto.style.color = C;
  texto.style.border = G 
  texto.style.border = M;
});

//app8

function perfecto(num){
    let div=1;
    let suma=0;
while(div< num){

    if(num%div==0){
        suma+=div
    }
    div++

}
if(suma==num){
    return true;
}

else{
    return false;
}

}


/*return suma==num;*/


const app8Ini=document.getElementById("app8Ini");
const app8Fin=document.getElementById("app8Fin");
const app8Res=document.getElementById("app8Res");
const app8BtnVer=document.getElementById("app8BtnVer");
const lista=document.createElement("ol");


app8BtnVer.addEventListener("click",(e)=>{
    e.preventDefault();
    let ini=parseInt(app8Ini.value);
    let fin=parseInt(app8Fin.value);

    let num = ini;

    do{
    //codigo para checar si es perfecto
    if(perfecto(num)){
        let item=document.createElement("li")
        item.innerHTML=num;
        lista.appendChild(item);
    }
    //codigo para checar ese numero
    num++
    }while(num<=fin);


app8Res.appendChild(lista);

})
