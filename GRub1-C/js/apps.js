
/*  App 1 */

 const app1Num1 = document.getElementById("app1Num1");
 const app1Num2 = document.getElementById("app1Num2");
 const app1Res =  document.getElementById("app1Res");

 const app1BtnCalcular = document.getElementById("app1BtnCalcular");

 /* Metodo para agregar escuchador de eventos. (e) de evento */
 app1BtnCalcular.addEventListener("click",(e) => { 
    e.preventDefault();
    let num1 = parseInt(app1Num1.value);
    let num2 = parseInt(app1Num2.value);
    let suma = num1 + num2;
    app1Res.value = suma;
 });

 
 /*   APLICACION 2 */
 const app2Num1 = document.getElementById("app2Num1");
 const app2Num2 = document.getElementById("app2Num2");
 const app2ResSuma =  document.getElementById("app2ResSuma");
 const app2ResResta =  document.getElementById("app2ResResta");
 const app2ResMulti =  document.getElementById("app2ResMulti");
 const app2ResDivi =  document.getElementById("app2ResDivi");

 const app2BtnCalcular = document.getElementById("app2BtnCalcular");

 /* Metodo para agregar escuchador de eventos. (e) de evento */
 app2BtnCalcular.addEventListener("click",(e) => { 
    e.preventDefault();
    let num1 = parseInt(app2Num1.value);
    let num2 = parseInt(app2Num2.value);
    let suma = num1 + num2;
    let resta = num1 - num2;
    let divi = num1 / num2;
    let mult = num1 * num2;
    app2ResSuma.value = suma;
    app2ResResta.value = resta;
    app2ResMulti.value = mult;
    app2ResDivi.value = divi;

 });



 /* APP 3 */

 const app3Num1 = document.getElementById("app3Num1");
 const app3Num2 = document.getElementById("app3Num2");
 const app3Operacion = document.getElementById("app3Operacion");
 const app3Res = document.getElementById("app3Res");
 const app3BtnCalcular = document.getElementById("app3BtnCalcular");


 app3BtnCalcular.addEventListener("click",(e)=> {
   e.preventDefault();

   let num1 = parseInt(app3Num1.value);
   let num2 = parseInt(app3Num2.value);
   let operacion = app3Operacion.value;
   let resultado;

/*    if (operacion == "s"){
      resultado = num1 + num2;
   }
   else if (operacion == "r"){
      resultado = num1 - num2;
   }
   else if (operacion == "m"){
      resultado = num1 * num2;
   }
   else if (operacion == "d") {
      resultado = num1 / num2;
   } */

   switch (operacion) {
      case "s":
         resultado = num1 + num2;
         break;
      
      case "r":
         resultado = num1 - num2;
         break;
      
      case "m":
         resultado = num1 * num2;
         break;
      
      case "d":
         resultado = num1 / num2;
         break;     
   }
   app3Res.value = resultado;

 });


 /* APP 4 */
   /*     variable; contador; incrementador */

const app4Tabla = document.getElementById("app4Tabla");
const app4Inv = document.getElementById("app4Inv");
const app4SoloPunto = document.getElementById("app4SoloPunto");
const app4Res = document.getElementById("app4Res");
const app4BtnVer = document.getElementById("app4BtnVer");

function mostrarTabla(){
   let tabla = parseInt(app4Tabla.value);

   let lista = document.createElement("ul");


   if(!app4Inv.checked){
      for(let i=1 ;i<=10; i++){
         let resMult = app4SoloPunto.checked ? ".".repeat(tabla * i) : tabla * i;

         let item = document.createElement("li");
         item.innerHTML = tabla + " X " + i +  " = " + resMult;
         lista.appendChild(item);
      }
   }
   else {
      for(let i=10 ;i>=1; i--){
         let resMult =   app4SoloPunto.checked ? "." .repeat(tabla * i) : tabla * i /* repeat es un metodo dentro de la clase / objeto . */

         let item = document.createElement("li");
         item.innerHTML = tabla + " X " + i +  " = " + resMult;
         lista.appendChild(item);
      }
   }
   /* practicar mandar a la consola - en lista  */
   app4Res.innerHTML = "";
   app4Res.appendChild(lista);
};

app4Inv.addEventListener("change", (e) =>{
   mostrarTabla();
})

app4SoloPunto.addEventListener("change", (e)=> {
   mostrarTabla();
})

app4BtnVer.addEventListener("click", (e) => {
   e.preventDefault();
   mostrarTabla();
})

app4BtnVer.addEventListener ("click",(e) => {
   e.preventDefault();


});



/* APLICAICON 5 */
const editarDiv = document.getElementById("editarDiv");
const app5BtnVer = document.getElementById("app5BtnVer");

const app5Borde = document.getElementById("app5Borde");
const app5Color = document.getElementById("app5Color");
const app5Grosor = document.getElementById("app5Grosor");
const app5Tipo = document.getElementById("app5Tipo");


app5BtnVer.addEventListener("click",(e)=> {
   e.preventDefault();
   
   editarDiv.style.border = "none";
   let Borde = (app5Borde.value);
   let Tipo = (app5Tipo.value);
   let Color = (app5Color.value);
   let Grosor = (app5Grosor.value);

   switch (Borde) {
      case "t":
         editarDiv.style.border =  Grosor + "px " + Tipo + " " + Color;
         break;

      case "s":
         editarDiv.style.borderTop =  Grosor + "px " + Tipo + " " + Color;
         break;
      
      case "in":
         editarDiv.style.borderBotton = Grosor + "px " + Tipo + " " + Color;
         break;
      
      case "iz":
         editarDiv.style.borderLeft =  Grosor + "px " + Tipo + " " + Color;
         break;

      case "d":
         editarDiv.style.borderRight =  Grosor + "px " + Tipo + " " + Color;
         break;
   }

/*    switch (Tipo){
      case "solid"  :     
         editarDiv.style.border = "solid";
         break;
         
      case "dashed" :    
         editarDiv.style.border= "dashed";
         break;

      case "double" :     
         editarDiv.style.border = "double";
         break;
  } */
});


/*  APLICACION 6 */

function perfecto(numero){
   let div = 1;
   let suma = 0;

   while (div < numero){
      if(numero % div == 0){
         suma += div;
      }
      div++;
   }
   return suma == numero;
/*    if(suma == numero){
      return true;

   }
   else {
      return false;
   } */
}

const app6Ini = document.getElementById("app6Ini");
const app6Fin = document.getElementById("app6Fin");
const app6Res = document.getElementById("app6Res");
const app6Btn = document.getElementById("app6Btn");
const lista = document.createElement("ol");

app6Btn.addEventListener("click", (e) => {
   e.preventDefault();

   let ini = parseInt(app6Ini.value);
   let fin = parseInt(app6Fin.value);
   
   let numero = ini;

   do{
      /* codigo paara checar si ese numero es perfecto */
      if(perfecto(numero)){
         let item = document.createElement("li");
         item.innerHTML = numero;
         lista.appendChild(item);
      }
      app6Res.innerHTML = "";
      app6Res.appendChild(lista);
      numero++;
   }while(numero <= fin );
});



/* APLICAICON NUMERO 7 */

const app7Id = document.getElementById("app7Id");
const app7Nombre = document.getElementById("app7Nombre");
const app7Altura = document.getElementById("app7Altura");
const app7Peso = document.getElementById("app7Peso");
const app7Imagen = document.getElementById("app7Imagen");
const app7BtnBuscar = document.getElementById("app7BtnBuscar");


app7BtnBuscar.addEventListener("click", (e) => {
   e.preventDefault();

   let id = app7Id.value;
   let url = "https://pokeapi.co/api/v2/pokemon/" + id;

   fetch(url)
      .then( response => response.json())
      .then(data => mostrarDatos(data));
});

function mostrarDatos(data) {
   console.log(data);

   app7Nombre.innerHTML = "Nombre: "+ data.name;
   app7Peso.innerHTML = "Peso: " + data.weight;
   app7Altura.innerHTML = "Altura: " + data.height;
   app7Imagen.src = data.sprites.other.home.front_default;
};