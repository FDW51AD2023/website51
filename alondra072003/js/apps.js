/* App9 */
const app9Id = document.getElementById("app9Id");
const app9Nombre = document.getElementById("app9Nombre");
const app9Altura = document.getElementById("app9Altura");
const app9Peso = document.getElementById("app9Peso");
const app9Imagen = document.getElementById("app9Imagen");
const app9BtnBuscar = document.getElementById("app9BtnBuscar");

app9BtnBuscar.addEventListener("click", (e) =>{
    e.preventDefault();
    let id= app9Id.value;
    let url = "https://pokeapi.co/api/v2/pokemon/" + id;

    fetch(url)
        .then(response=>response.json())
        .then(data => mostrarDatos(data));
});

function mostrarDatos(data){
    console.log(data);
    app9Nombre.innerHTML = "Nombre: " + data.name;
    app9Peso.innerHTML = "Peso: " + data.weight;
    app9Altura.innerHTML = "Altura: " + data.height;
    app9Imagen.src = data.sprites.other.home.front_default;
}


/* App8 */

function perfecto(numero){
    let div = 1;
    let suma = 0;
    while(div < numero){
        if(numero % div == 0){
            suma += div;
        }
        div++;
    }
    return suma == numero;
}

const app8Ini = document.getElementById("app8Ini");
const app8Fin = document.getElementById("app8Fin");
const app8Res = document.getElementById("app8Res");
const app8BtnVer = document.getElementById("app8BtnVer");
const lista = document.createElement("ol");


app8BtnVer.addEventListener("click", (e) => {
    e.preventDefault();
    let ini = parseInt(app8Ini.value);
    let fin = parseInt(app8Fin.value);

    let numero = ini;

    do {
        /* codigo para checar si es perfecto*/
        if( perfecto(numero)){
            let item = document.createElement("li");
            item.innerHTML = numero;
            lista.appendChild(item);
        }
        numero++;
    }while(numero <= fin);
    app8Res.appendChild(lista);
});




/* App7 */

const borde = document.getElementById("borde");
const color = document.getElementById("color");
const grosor = document.getElementById("grosor");
const tipo = document.getElementById("tipo");
const mod = document.getElementById("mod");
const ViewBtn = document.getElementById("ViewBtn");

ViewBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let opcionA = (borde.value);
    let opcionB = (color.value);
    let opcionC = (grosor.value);
    let opcionD = (tipo.value);
    mod.style.border="none";

    switch(opcionA){
        case "todo": mod.style.border= opcionC + "px " + opcionD + " " + opcionB;
                  break;
        case "sup": mod.style.borderTop= opcionC + "px " + opcionD + " " + opcionB;
                  break;
        case "inf": mod.style.borderBottom= opcionC + "px " + opcionD + " " + opcionB;
                  break;
        case "izq": mod.style.borderLeft= opcionC + "px " + opcionD + " " + opcionB;
                  break;
        case "der": mod.style.borderRight= opcionC + "px " + opcionD + " " + opcionB;
                  break;
    }  

});


/* App6 */

const app6Tabla = document.getElementById("app6Tabla");
const app6Inv = document.getElementById("app6Inv");
const app6SoloPunto = document.getElementById("app6SoloPunto");
const app6Res = document.getElementById("app6Res");
const app6BtnVer = document.getElementById("app6BtnVer");

function mostrarTabla(){
    let tabla = parseInt(app6Tabla.value);
    let lista = document.createElement("ul");

    if(!app6Inv.checked){
        for(let i=1;i<=10;i++){
            let resMult= app6SoloPunto.checked ?".".repeat(tabla * i) : tabla * i;

/*             let resMult;
            if(app6SoloPunto.checked){
                resMult = ".".repeat(tabla*i)

            }
            else{
                resMult = tabla * i;
            } */

            let item = document.createElement("li");
            item.innerHTML = tabla + " X " + i + " = " + resMult;
            lista.appendChild(item);
        }    
    }
    else{
        for(let i=10;i>=1;i--){
            let resMult= app6SoloPunto.checked ? ".".repeat(tabla * i) : tabla * i;

            /* let resMult; */
           /*  if(app6SoloPunto.checked){
                resMult = ".".repeat(tabla*i)

            }
            else{
                resMult = tabla * i;
            } */
            let item = document.createElement("li");
            item.innerHTML = tabla + " X " + i + " = " + resMult;
            lista.appendChild(item);
        } 
    };

    app6Res.innerHTML = "";
    app6Res.appendChild(lista);
}

app6BtnVer.addEventListener("click", (e)=>{
    e.preventDefault();
    mostrarTabla();

});


app6Inv.addEventListener("change", (e)=>{
    mostrarTabla();

});

app6SoloPunto.addEventListener("change", (e)=>{
    mostrarTabla();

});








/* App5 */

const app5Num1 = document.getElementById("app5Num1");
const app5Num2 = document.getElementById("app5Num2");
const app5Operacion = document.getElementById("app5Operacion");
const app5Res = document.getElementById("app5Res");
const app5BtnCalcular = document.getElementById("app5BtnCalcular");

app5BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();
    let num1 = parseInt(app5Num1.value);
    let num2 = parseInt(app5Num2.value);
    let operacion = app5Operacion.value;
    let resultado;

    /* if(operacion == "s"){
        resultado = num1+num2;
    }
    else if (operacion == "r"){
        resultado = num1-num2;

    }
    else if(operacion == "m"){
        resultado = num1 * num2;
    }
    else if(operacion == "d"){
        resultado = num1 / num2;
    }
 */
   
    switch(operacion){
        case "s": resultado = num1 + num2;
                  break;
        case "r": resultado = num1 - num2;
                  break;
        case "m": resultado = num1*num2;
                  break;
        case "d": resultado = num1 / num2;
                  break;
    }
    app5Res.value = resultado;
});
 



/* App1 */

const app1Num1 = document.getElementById("app1Num1");
const app1Num2 = document.getElementById("app1Num2");
const app1Res = document.getElementById("app1Res");

const app1BtnCalcular = document.getElementById("app1BtnCalcular");

app1BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseInt(app1Num1.value);
    let num2= parseInt(app1Num2.value);
    let suma = num1 + num2;
    app1Res.value = suma;
});

/* App2 */

const app2Num1 = document.getElementById("app2Num1");
const app2Num2 = document.getElementById("app2Num2");
const app2Res = document.getElementById("app2Res");

const app2BtnCalcular = document.getElementById("app2BtnCalcular");

app2BtnCalcular.addEventListener( "click", (e) => { 
    e.preventDefault();

    let num1= parseInt(app2Num1.value);
    let num2 = parseInt(app2Num2.value);
    let resta = num1 - num2 ;
    app2Res.value = resta;
});

/* App3 */

const app3Num1 = document.getElementById("app3Num1");
const app3Num2 = document.getElementById("app3Num2");
const app3Res = document.getElementById("app3Res");

const app3BtnCalcular = document.getElementById("app3BtnCalcular");

app3BtnCalcular.addEventListener( "click", (e) => { 
    e.preventDefault();

    let num1= parseInt(app3Num1.value);
    let num2 = parseInt(app3Num2.value);
    let multiplicacion = num1 * num2 ;
    app3Res.value = multiplicacion;
});

/* App4 */

const app4Num1 = document.getElementById("app4Num1");
const app4Num2 = document.getElementById("app4Num2");
const app4Res = document.getElementById("app4Res");

const app4BtnCalcular = document.getElementById("app4BtnCalcular");

app4BtnCalcular.addEventListener( "click", (e) => { 
    e.preventDefault();

    let num1= parseInt(app4Num1.value);
    let num2 = parseInt(app4Num2.value);
    let division = num1 / num2 ;
    app4Res.value = division;
});




