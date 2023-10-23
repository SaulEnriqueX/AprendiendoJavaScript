//´PARAMETROS DEFAULT, CUANDO NO TIENES EL ARGUMENTO UNDEFINED

const saludar = (nombrePersona = "Persona desconocida") =>  `Hola ${nombrePersona}`;

console.log(saludar());

const decirEdad = (anioNacimiento, nombre = "Unknow", ) => {  //PARAMETROS DEFAULT ANALIZAR ALTERAR ORDEN
    const edadActual = 2022 - anioNacimiento;
    return `Hola ${nombre} tu edad actual es ${edadActual}`;
}

console.log(decirEdad(1999));
console.log(decirEdad(1998, "sAUL"));