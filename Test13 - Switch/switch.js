

let day = "tuesday";
let dia;


//Recibe un valor  y definimos los posibles casos
switch (day) {
    case "monday":
        dia = "Es lunes";
        break;

    case "tuesday":
        dia = "Es martes";
        break;

    case "wednesday":
        dia = "Es miercoles";
        break;

    default:
        dia = "Es domingo";
        break;

}

console.log(dia);