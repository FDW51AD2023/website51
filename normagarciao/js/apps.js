
/* app 7*/
const app7Id =document.getElementById("app7Id")
const app7Nombre = document.getElementById("app7Nombre")
const app7Altura = document.getElementById("app7Altura")
const app7Peso = document.getElementById("app7Peso")
const app7Imagen = document.getElementById("app7Imagen")
const app7BtnVer = document.getElementById("app7BtnVer")

app7BtnVer.addEventListener("click",e =>{
    e.preventDefault();

let id = app7Id.value
let url = "https://pokeapi.co/api/v2/pokemon/" + id;

fetch(url)
.then(response => response.json())
.then(data => mostrarDatos(data));
})

function mostrarDatos(data){
    console.log(data);

    app7Nombre.innerHTML ="Nombre:" + data.name;
    app7Peso.innerHTML = "Peso:"+ data.weight
    app7Altura.innerHTML = "Altura:" + data.height
    app7Imagen.src = data.sprites.other.home.front_default;
}



/* app 6*/
function perfecto(numero){
    let div = 1;
    let suma =0
    while( div < numero){
        if(numero % div == 0){
            suma += div
    }
    div++;
}
return suma == numero;
    return true;

}


const app6Ini = document.getElementById("app6Ini");
const app6Fin = document.getElementById("app6Fin");
const app6Res = document.getElementById("app6Res");
const app6BtnVer = document.getElementById("app6BtnVer");
const lista = document.createElement("ol");

app6BtnVer.addEventListener("click",(e) => {
    e.preventDefault();
    let ini = parseInt(app6Ini.value)
    let fin = parseInt(app6Fin.value)
    let numero = ini

    do {
        if(perfecto(numero)){
            let item = document.createElement("li");
            item.innerHTML = numero;
            lista.appendChild(item)

        }
numero++;
    }while(numero <= fin)
    app6Res.appendChild(lista);

})

/*app 5*/
const app5Borde = document.getElementById ("app5Borde");
const app5Color = document.getElementById ("app5Color");
const app5Grosor = document.getElementById ("app5Grosor");
const app5Tipo = document.getElementById ("app5Tipo");

const app5VerDiv = document.getElementById ("app5VerDiv");

const app5Res = document.getElementById ("app5Res");

app5VerDiv.addEventListener("click", (e) => {
    e.preventDefault();

    app5Res.style.border = "none";

    switch (app5Borde.value) {

        case "all":
            app5Res.style.border = app5Grosor.value + "px " + app5Tipo.value + app5Color.value;
            break;

        case "top":
            app5Res.style.borderTop = app5Grosor.value + "px " + app5Tipo.value + app5Color.value;
            break;

        case "bottom":
            app5Res.style.borderBottom = app5Grosor.value + "px " + app5Tipo.value + app5Color.value;
            break;
            case "bottom":
            app5Res.style.borderBottom = app5Grosor.value + "px " + app5Tipo.value + app5Color.value;
            break;

        case "left":
            app5Res.style.borderLeft = app5Grosor.value + "px " + app5Tipo.value + app5Color.value;
            break;

        case "right":
            app5Res.style.borderRight = app5Grosor.value + "px " + app5Tipo.value + app5Color.value;
            break;
    }
});


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
app4btnver.addEventListener("click",(e)=>{
    e.preventDefault();
    let tabla= parseInt(app4tabla.value)

    let lista= document.createElement("ul");

    if(app4solopunto.checked){
        for(let i=1 ; i <=10; i++ ){
            let resMult;
            if(app4solopunto.checked){
                resMult = ".".repeat(tabla * i)
            }
            else{
                resMult = tabla * i;
            }
        }

    }
    if( !app4inv.checked == false){
        for(let i=1 ; i<=10; i++ ){
            let item = documet.createElement("li");
            item.innerHTML = tabla + "X" + i + "=" + resMult
            lista.appendChild(item);
    }
    }
    else {
        for(let i=10 ; i >=1; i-- ){
            let item = documet.createElement("li");
            item.innerHTML = tabla + "X" + i + "=" + resMult
            lista.appendChild(item);
    }
}
    app4res.innerHTML="";
    app4res.appendChild(lista);
})

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




