//Genera una funcion que dada una cadena pinte: el numero de caracteres que hay
//en la cadena y el numero de vocales que hay en la cadena.
//Si empieza por "A" o no
 
let cadena = "El gato con Botas";

document.write("La cadena tiene " + cadena.length + " caracteres.<br>");
let vocales = cadena.match(/[aeiou]/gi);
document.write('Empieza por A? '+ cadena.startsWith('A') + '<br>');
