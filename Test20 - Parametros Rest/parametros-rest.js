//EN EN LISTADO DE PARAMETROS  ...params si existe la posibildiad de aumentar se puede
//puede ser string o numero

const sumar =  (n1, n2, ...params) => {
    console.log(params); // Nos da un listado o un array
    console.log(...params);
    return n1 + n2;
}

console.log(sumar(1,1,1,8));

