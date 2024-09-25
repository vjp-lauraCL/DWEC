//Crea una funcion que reciba dos cadenas y pinte cual es la más corta de las dos.
//Si alguno de los dos argumentos no es una cadena devuelveu un mensaje de error en su lugar. 
//Probarlo con varias entradas directamente introducidas con código. Las salidas se harán con console.log
let cadena1 = "gato";
let cadena2 = "mañana es jueves";

function compararCadenas(cadena1, cadena2){
   if(typeof cadena1 !== "string" || typeof cadena2 !== "string"){
      return console.log("Error: Alguno de los argumentos no es una cadena");
   }
    if(cadena1.length < cadena2.length){
        return console.log(`${cadena1} es más corta que ${cadena2}`);
    }
    return console.log(`${cadena2} es más corta que ${cadena1}`);
}
