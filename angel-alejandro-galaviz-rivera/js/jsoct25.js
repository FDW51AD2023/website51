console.log("Si Se Muestra esto quiero decir que si se conecto el script");
const app1 = document.getElementById("app1");
const app1Borde = document.getElementById("app1Borde");
const app1Color = document.getElementById("app1Color");
const app1Grosor = document.getElementById("app1Grosor");
const app1Tipo = document.getElementById("app1Tipo");
const app1DivPrueba = document.getElementById("app1DivPrueba");
const app1BtnVer = document.getElementById("app1BtnVer");

app1BtnVer.addEventListener("click", (e) => {
    e.preventDefault();

    /*Variables Declaradas*/
    let Borde = app1Borde.value;
    let Grosor = app1Grosor.value;
    let Tipo = app1Tipo.value;
    let Color = app1Color.value;

    console.log("Si Se Muestra Este Mensaje es que Declaro las Variables Correctamente");
    console.log("Atte. Angel Alejandro Galaviz Rivera");

    switch (Borde) {
        case "To":
            app1DivPrueba.style.border = `${Grosor}px ${Tipo} ${Color}`;
            console.log("Se Aplica en todos los lados");
            break;
        case "Su":
            app1DivPrueba.style.borderTop = `${Grosor}px ${Tipo} ${Color}`;
            console.log("Se Aplica en la parte superior");
            break;
        case "In":
            app1DivPrueba.style.borderBottom = `${Grosor}px ${Tipo} ${Color}`;
            console.log("Se Aplica en la parte inferior");
            break;
        case "Iz":
            app1DivPrueba.style.borderLeft = `${Grosor}px ${Tipo} ${Color}`;
            console.log("Se Aplica en la parte Izquierda");
            break;
        case "De":
            app1DivPrueba.style.borderRight = `${Grosor}px ${Tipo} ${Color}`;
            console.log("Se Aplica en la parte derecha");
            break;
    }
});