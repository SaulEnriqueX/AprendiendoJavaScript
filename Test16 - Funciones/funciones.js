
// 1 CREAR LA FUNCION - DECLARAC

function saludar(){
  return "Hola";
}

// INVOCAR A LA FUNCION

const mensajeSaludo = saludar();
console.log(mensajeSaludo);



function saludaPersona(nombrePersona){  // PARAMETROS
    let mensaje;
    if(nombrePersona === undefined){
    mensaje = `hola persona desconocida`;
    }else{
        mensaje = `hola ${nombrePersona}`;  // VARIABLES LOCALES
    }
    return mensaje;
       
}

const saludoUno = saludaPersona("Saul"); // ARGUMENTO
console.log(saludoUno);

const saludoDos = saludaPersona(); // ARGUMENTO
console.log(saludoDos);


