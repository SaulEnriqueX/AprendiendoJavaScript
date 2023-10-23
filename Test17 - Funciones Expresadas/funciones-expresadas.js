
//Funcion declarada
function saludo(){
    return "hola";
}


//Funcion expresada

const despedida = function(lenguaje){   
    let mensaje;
    switch(lenguaje){
        case "es":
            mensaje = "Adios";
            break;
        case "en":
            mensaje = "Good Bye";
            break;
            default:
                mensaje = "Elige un lenguaje";
    }
    return mensaje; 
}


console.log(saludo());

console.log(despedida("es"));
console.log(despedida("en"));



//LA DECLARADA LA PUEDES INICIALIZAR DESDE DONDE SEA
//MIENTRAS QUE LA DECLARADA TIENES QUE ESTAR ANTES DE SU INICIALIZACION