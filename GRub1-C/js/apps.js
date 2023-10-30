
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

 
 const app2Num1 = document.getElementById("app2Num1");
 const app2Num2 = document.getElementById("app2Num2");
 const app2Res =  document.getElementById("app2Res");

 const app2BtnCalcular = document.getElementById("app1BtnCalcular");

 /* Metodo para agregar escuchador de eventos. (e) de evento */
 app2BtnCalcular.addEventListener("click",(e) => { 
    e.preventDefault();
    let num1 = parseInt(app2Num1.value);
    let num2 = parseInt(app2Num2.value);
    let suma = num1 + num2;
    app1Res.value = suma;
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

const app5Borde = document.getElementById("app5Borde");
const app5Color = document.getElementById("app5Color");
const app5Grosor = document.getElementById("app5Grosor");
const app5Tipo = document.getElementById("app5Tipo");
const app5BtnVer = document.getElementById("app5BtnVer");
const editarDiv = document.getElementById("editarDiv");

app5BtnVer.addEventListener("click",(e)=> {
   e.preventDefault();
   editarDiv.style.border="none";
   let Borde = (app5Borde.value);
   let Tipo = (app5Tipo.value);

   switch (Borde) {
      case "t":
         editarDiv.style.border = app5Color.value + app5Grosor.value + "px";
         break;

      case "s":
         editarDiv.style.borderTop = app5Color.value + app5Grosor.value + "px";
         break;
      
      case "in":
         editarDiv.style.borderBotton = app5Color.value + app5Grosor.value + "px";
         break;
      
      case "iz":
         editarDiv.style.borderLeft = app5Color.value + app5Grosor.value + "px";
         break;

      case "d":
         editarDiv.style.borderRight = app5Color.value + app5Grosor.value + "px";
         break;
   }

   switch (Tipo){
      case "solid"  :     
         editarDiv.style.border = "solid";
         break;
         
      case "dashed" :    
         editarDiv.style.border= "dashed";
         break;

      case "double" :     
         app5DivPrueba.style.border = "double";
         break;
  }
});


/*  APLICACION 6 */


const app6Ini = document.getElementById("app5Ini");
const app6Fin = document.getElementById("app6Fin");
const app6Res = document.getElementById("app6Res");
const app6Btn = document.getElementById("app6Btn")
