//Crea un programa que dada la siguiente cadena y utilizando un bucle for..of 
//devuelva cuales de las letras son volcales y cuales son consonantes. utilizar match
let cadena = "Viajar a Hawai en avión";
let vocales = "aeiou";
let consonantes = "bcdfghjklmnpqrstvwxyz";

for (let letra of cadena) {
    if (vocales.match(letra.toLowerCase())) {
        console.log(letra + " es vocal");
    } else if (consonantes.match(letra.toLowerCase())) {
        console.log(letra + " es consonante");
    }
}



