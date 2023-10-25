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

/* app3*/
const app3Num1 = document.getElementById("app3Num1");
const app3Num2 = document.getElementById("app3Num2");
const app3op = document.getElementById("app3op");
const app3res = document.getElementById("app3res");
const app3bc = document.getElementById("app3bc");

app3bc.addEventListener("click",(e)=>{
    e.preventDefault();
    let num1 = parseInt(app3Num1.value)
    let num2 = parseInt(app3Num2.value)
    let op = app3op.value
    let resultado;
/*
    if(op == "s"){
        resultado = num1 + num2
    }
    else if(op== "r"){
        resultado= num1 - num2
    }
    else if(op=="m"){
        resultado = num1 * num2
    }
    else if (op=="d"){
        resultado= num1 / num2
    }
    */
    switch(op){
        case "s": resultado = num1 + num2;
                break;
        case "r": resultado = num1 - num2;
                break;
        case "m": resultado = num1 * num2;
                break;
        case "d": resultado= num1 / num2;
                break;}
    app3res.value = resultado
});

/* app 4*/
for(let cont=1; cont <=10; cont++){
    console.log(cont);
}
const app4tabla = document.getElementById("app4tab");
const app4inv = document.getElementById("app4inv");
const app4solo = document.getElementById("solo");
const app4res = document.getElementById("app4res");
const app4bc = document.getElementById("app4bc");

if(app4inv.checked){}

let lista = document.createElement("ul");
app4bc.addEventListener("click",(e)=>{
    e.preventDefault();
    let tabla = parseInt(app4tabla.value);
    for(let i =1; i<=10;i++){
        console.log(tabla+" x "+i+" = "+ tabla*i)
        let item = document.createElement("li");
        item.innerHTML = tabla+" x "+i+" = "+ tabla*i
        lista.appendChild(item);
    }
    if(!app4inv.checked){
        let tabla = parseInt(app4tabla.value);
        for(let i =1; i<=10;i++){
            console.log(tabla+" x "+i+" = "+ tabla*i)
            let item = document.createElement("li");
            item.innerHTML = tabla+" x "+i+" = "+ tabla*i
            lista.appendChild(item);
        }
        app4res.innerHTML =""
        app4res.appendChild(lista);
    }
    else{
        for(let i =10; i>=1;i--){
            console.log(tabla+" x "+i+" = "+ tabla*i)
            let item = document.createElement("li");
            item.innerHTML = tabla+" x "+i+" = "+ tabla*i
            lista.appendChild(item);
        }
        app4res.innerHTML =""
        app4res.appendChild(lista);
    }
    if(!app4inv.checked){
        let tabla = parseInt(app4tabla.value);
        for(let i=1 ; i <10; i++){
            let resm;
            if(solo.checked){
                resm = ".".repeat(tabla*i);
            }
            else{
                resm = tabla*i;
            }
        }
    }
    app4res.innerHTML =""
    app4res.appendChild(lista);
});
/*
if(!app4inv.checked){
    let tabla = parseInt(app4tabla.value);
    for(let i =1; i<=10;i++){
        console.log(tabla+" x "+i+" = "+ tabla*i)
        let item = document.createElement("li");
        item.innerHTML = tabla+" x "+i+" = "+ tabla*i
        lista.appendChild(item);
    }
    app4res.innerHTML =""
    app4res.appendChild(lista);
}
else{
    for(let i =10; i>=1;i--){
        console.log(tabla+" x "+i+" = "+ tabla*i)
        let item = document.createElement("li");
        item.innerHTML = tabla+" x "+i+" = "+ tabla*i
        lista.appendChild(item);
    }
    app4res.innerHTML =""
    app4res.appendChild(lista);
}

if(!app4inv.checked){
    let tabla = parseInt(app4tabla.value);
    for(let i=1 ; i <10; i++){
        let resm;
        if(solo.checked){
            resm = ".".repeat(tabla*i);
        }
        else{
            resm = tabla*i;
        }
    }
}
/* el cont++ es para que el incremento sea de 1 en 1 */

/* APP 5*/