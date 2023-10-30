console.log("Enlazada");

const app1 = document.getElementById("app1")
const app1Borde = document.getElementById("app1Borde");
const app1Color = document.getElementById("app1Color");
const app1Grosor = document.getElementById("app1Grosor");
const app1Tipo = document.getElementById("app1Tipo");
const app1Boton = document.getElementById("app1Boton");
const divPrueba = document.querySelector('.divprueba');


app1.style.backgroundColor = "";


app1Boton.addEventListener("click" , (e) => {
    e.preventDefault();

    let Borde = (app1Borde.value); 
    let Color = (app1Color.value);
    let Grosor = parseInt(app1Grosor.value);
    let Tipo = (app1Tipo.value);

    app1.style.backgroundColor=Color;

    switch (Borde) {
        case "To":
            app1.style.border=`${Grosor}px solid #FF0000`;
            break;
        case "Su":
            app1.style.borderTop=`${Grosor}px solid #FF0000`;
            break;
        case "In":
            app1.style.borderBottom=`${Grosor}px solid #FF0000`;
            break;
        case "Iz":
            app1.style.borderLeft=`${Grosor}px solid #FF0000`;
            break;
        case "De":
            app1.style.borderRight=`${Grosor}px solid #FF0000`;
            break;
        default:
            break;
    }

    /*
    switch (Tipo) {
        case "So":
            app1Boton.style.border = "2px solid #000";
            break;

        case "Ds":
            app1Boton.style.border = "2px dashed #000";
            break;

        case "Do":
            app1Boton.style.border = "2px double #000";
            break;
    }
    */
})