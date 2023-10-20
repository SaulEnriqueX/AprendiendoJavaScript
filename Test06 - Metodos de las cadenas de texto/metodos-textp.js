let nombreCompleto = "Saul Mallqui";
console.log(nombreCompleto.length); //Es la longitud de algo, cuando no tiene () propiedad

let paisDeNacimiento = "Peru";
console.log(paisDeNacimiento.includes("a")); //La cadena contiene la letra o plabra, cuando tiene () funcionalidad o metodo

let nombreMascota = "Misha";
console.log(nombreMascota.toLowerCase());

let nombreAmiga = "Juana de la lama";
console.log(nombreAmiga.startsWith("J")); //La Mayuscula y minuscula son diferentes

let nombreTio = " Pedro  marquez ";
let nombreTioTransformado = nombreTio.trim(); //Elimina los espacios al inicio - final pero no en el medio.
console.log(nombreTioTransformado.length);

let nana = "Na na";
console.log(nana.repeat(5));

let nombreErrado = "Huan perez";
console.log(nombreErrado    .replace("Huan","Juan"));

let nombreErrado2 = "Huan perez";
console.log(nombreErrado2.replaceAll("e","i"));