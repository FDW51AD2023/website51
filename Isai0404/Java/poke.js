const nom = document.getElementById("nom");
const Id = document.getElementById("id");
const num = document.getElementById("num");
const alt = document.getElementById("alt");
const pes = document.getElementById("pes");
const ima = document.getElementById("ima");
const bt = document.getElementById("bt");

bt.addEventListener("click", (e) =>{
    e.preventDefault
    let id = Id.value;
    let url = "https://pokeapi.co/api/v2/pokemon/"+ id;
    fetch(url)
        .then(response => response.json())
        .then(data => mostrardatos(data));
});
function mostrardatos(data){
    console.log(data)
    nom.innerHTML ="Nombre: " + data.name;
    num.innerHTML = "Numero en pokedex: " + data.id;
    pes.innerHTML = "Peso: " + data.weight;
    alt.innerHTML = "Altura: " + data.height;
    ima.src = data.sprites.other.home.front_default;
    let plantilla = `<div class="row">
    <label for="" name="res" id="res">Resultado</label>
    <h2 id="nom">${data.name}</h2>
    <h3 id="pes"></h3>
    <h3 id="alt"></h3>
    <img id="ima" src="" alt="">
</div>`
}