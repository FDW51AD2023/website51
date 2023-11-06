const app9Id=document.getElementById("app9Id");
const app9Nombre=document.getElementById("app9Nombre");
const app9Altura=document.getElementById("app9Altura");
const app9Peso=document.getElementById("app9Peso");
const app9Imagen=document.getElementById("app9Imagen");
const app9Boton=document.getElementById("app9BtnBuscar");

app9Boton.addEventListener("click", (e)=>{
    e.preventDefault();


    let id=app9Id.value;
    let url="https://pokeapi.co/api/v2/pokemon/" + id; 
    fetch(url)
    .then(response=>response.json())
    .then(data=>mostrarDatos(data));

    function mostrarDatos(data){
        console.log(data);

        app9Nombre.innerHTML="Nombre:" + data.name;
        app9Peso.innerHTML= "Peso:" + data.weight;
        app9Altura.innerHTML="Altura:" + data.height;
        app9Imagen.src=data.sprites.other.home.front_default; 
    }

let plantilla= `}<div>
<label for="app9Res" id="app9Res">Resultado:</label>
<h2 id="app9Nombre">${data.name}</h2>
<h3 id="app9Peso"></h3>
<h3 id="app9Altura"></h3>
<img src="" alt="" id="app9Imagen">
</div>`

})