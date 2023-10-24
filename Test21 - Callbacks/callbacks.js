// ES UNA FUNCION QUE SE PASA COMO PARAMETRO DE OTRA FUNCION


const saludar = (nombre) => `Hola ${nombre}`;

//const saludarEnEspanish = (nombre, callback) => callback(nombre);
const saludarEnEspanish = (callback, nombre) => {
   return callback(nombre);
};

const resultado = saludarEnEspanish(saludar, "Saul");

console.log(resultado);


const operacionMate = (operacion, valor1, valor2) => operacion(valor1, valor2);
const sumar = (n1, n2) => n1+n2;

const resultado1  = operacionMate(sumar,45,50);


console.log(resultado1);

