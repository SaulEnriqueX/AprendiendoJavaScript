// Palabra reservada  - Identificador  - Valor

//Scope es el alcance de las variables

//Global
var nombre = "Saul";       //Variables Globales con var ya no se usa
let  apellido = "Enrique"; //Varibales cuyo scope es local y global con let se pueden reasignar
apellido = "suarez"; 


const edad = 15; //Global


//Local
{
    const edad = "Saul";   //const no se puede reasignar
}

//TIPOS DE VARIABLE 



console.log(edad);