
// FUNCION EXPRESADA  - FUNCIONES ANONIMAS
// TODAS LAS F E ES AQUELLA QUE SE AGIGNA COMO VALOR DE UNA VARIABLE

const sumar = (n1, n2) => {
    return n1 + n2;
}

console.log(sumar(10, 20));

const multiplicar = (numero) => {   //UN SOLO PARAMETRO NO ES NECESARIO ()
    return numero * 5;
}

console.log(multiplicar(10));


const dividir = (numero) => numero / 2;  // Funcion flecha con retorno implicito
console.log(dividir(10));