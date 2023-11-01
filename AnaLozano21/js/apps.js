// App 7

const app7Id = document.getElementById("app7Id");
const app7Nombre = document.getElementById("app7Nombre");
const app7Altura = document.getElementById("app7Altura");
const app7Peso = document.getElementById("app7Peso");
const app7Imagen = document.getElementById("app7Imagen");
const app7BtnBuscar = document.getElementById("app7BtnBuscar");

app7BtnBuscar.addEventListener("click", e => {
    e.preventDefault();

    let id = app7Id.value;
    let url = "https://pokeapi.co/api/v2/pokemon/"+ id;

    fetch (url).then( Response => Response.json())
    .then(data => mostrarDatos(data));

});

function mostrarDatos(data){

    app7Nombre.innerHTML = "Nombre:" + data.name;
    app7Altura.innerHTML = "Altura:" + data.height;
    app7Peso.innerHTML = "Peso:" + data.weight
    app7Imagen.src = data.sprites.other.home.front_default;
};




// App 6

function perfecto(numero){
    let div = 1;
    let suma = 0;

    while( div < numero ){
        if (numero % div == 0){
            suma += div
        }
        div++;
    }
    return suma == numero; 

    
}

const app6Ini = document.getElementById("app6Ini");
const app6Fin = document.getElementById("app6Fin");
const app6Res = document.getElementById("app6Res");
const app6BntVer= document.getElementById("app6BtnVer");
const lista =document.createElement("ol");

app6BntVer.addEventListener("click", (e)=> {
    e.preventDefault();
    let ini = parseInt(app6Ini.value);
    let fin = parseInt(app6Fin.value);

    let numero = ini;

    do{
        // Aqui va un codigo para checar
        if(perfecto(numero)){
            let item = document.createElement("li");
            item.innerHTML = numero;
            lista.appendChild(item);

        }
        
        numero++;
    }while( numero <= fin);

    app6Res.appendChild(lista);
 
})




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
//App 2 operaciones basicas xd

const app2Num1=document.getElementById("app2Num1");
const app2Num2=document.getElementById("app2Num2");
const app2ResSum=document.getElementById("app2ResSum");
const app2ResRes=document.getElementById("app2ResRes");
const app2ResDiv=document.getElementById("app2ResDiv");
const app2ResMul=document.getElementById("app2ResMul");
const app2BtnCalcular=document.getElementById("app2BtnCalcular");

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

//-----------------------------------
//App 3 operaciones con if

const app3Num1=document.getElementById("app3Num1");
const app3Num2=document.getElementById("app3Num2");
const app3Operacion=document.getElementById("app3Operacion");
const app3Res=document.getElementById("app3Res");
const app3BtnCalcular=document.getElementById("app3BtnCalcular");

app3BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();
    let num1 =parseInt(app3Num1.value);
    let num2 =parseInt(app3Num2.value);
    let operacion=app3Operacion.value;

/*     if (operacion=="s"){
        resultado =num1 + num2;
    }
    else if (operacion=="r"){
        resultado= num1 - num2;
    }
    else if (operacion=="m"){
        resultado= num1 * num2;
    }
    else if (operacion=="d"){
        resultado= num1 / num2;
    } */

    /* Lo mismo pero con switch */
    switch(operacion){
        case "s": resultado=num1+num2; break;
        case "r": resultado=num1-num2; break;
        case "m": resultado=num1*num2; break;
        case "d": resultado=num1/num2; break;
    }
    app3Res.value=resultado;

})

//-----------------------------------
//App 4 Práctica de for

for(let cont=1; cont<=10; cont++){
    console.log(cont)

}

//-----------------------------------
//App 4 Práctica de for con tabla
// Variable; Contador; Incrementador

const app4Tabla=document.getElementById("app4Tabla");
const app4Inv=document.getElementById("app4Inv");
const app4SoloPunto=document.getElementById("app4SoloPunto");
const app4Res=document.getElementById("app4Res");
const app4BtnVer=document.getElementById("appBtn4Ver");

function mostrarTabla(){
    let tabla =parseInt(app4Tabla.value);
    let lista =document.createElement("ul");

    if(!app4Inv.checked){
        for(let i=1; i <= 10 ;i++){
            let resMult = app4SoloPunto.checked ?".".repeat(tabla*i) : tabla * i;
           /*  let resMult; */
           /*  if (app4SoloPunto.checked){
                resMult=".".repeat(tabla*i)
            }
            else{
                resMult=tabla*i
            } */

            let item = document.createElement("li");
            item.innerHTML = tabla + " X " + i + "=" + resMult;
            lista.appendChild(item);
        }
    }
    else{
        for(let i=10 ; i>= 1 ; i--){
            let resMult = app4SoloPunto.checked ? ".".repeat(tabla * i) : tabla * i;
            /*  let resMult; */
            /*  if (app4SoloPunto.checked){
                 resMult=".".repeat(tabla*i)
             }
             else{
                 resMult=tabla*i
             } */
 
            let item =document.createElement("li");
            item.innerHTML=tabla + "X" + i + "=" + resMult;
            lista.appendChild(item);
        }
    }

    app4Res.innerHTML="";
    app4Res.appendChild(lista);
}

app4BtnVer.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarTabla();
});

app4Inv.addEventListener("change", (e) => {
    mostrarTabla();
});

app4SoloPunto.addEventListener("change", (e) => {
    mostrarTabla();
});

// App 5
// 
const app5ver = document.getElementById("app5ver");
const divPrueba = document.getElementById("div_prueba");
const app5borde = document.getElementById("app5borde");
const app5color = document.getElementById("app5color");
const app5grosor = document.getElementById("app5grosor");
const app5tipo = document.getElementById("app5tipo");

app5ver.addEventListener("click",(e) => { 
   e.preventDefault();

   let borde5 = app5borde.value;
   let color5 = app5color.value;
   let grosor5 = app5grosor.value;
   let tipo5 = app5tipo.value;
   divPrueba.style.border="none";
   
   switch(borde5){
      case "top":
         divPrueba.style.borderTop = `${grosor5}px ${tipo5} ${color5}`;
         break;
      case "bot":
         divPrueba.style.borderBottom = `${grosor5}px ${tipo5} ${color5}`;
         break;
      case "izq":
         divPrueba.style.borderLeft = `${grosor5}px ${tipo5} ${color5}`;
         break;
      case "der":
         divPrueba.style.borderRight = `${grosor5}px ${tipo5} ${color5}`;
         break; 
      case "all":
         divPrueba.style.border =`${grosor5}px ${tipo5} ${color5}`;
         break;
      case "none":
         divPrueba.style.border ="none";
         break;    
   }

 }); 