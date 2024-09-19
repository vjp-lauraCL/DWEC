//El usuario introduce tres numeros por pantalla
let num1 = parseInt(prompt("Introduce el primer número: ", 0));
let num2 = parseInt(prompt("Introduce el segundo número: ", 0));
let num3 = parseInt(prompt("Introduce el tercer número: ", 0));
 //si los numeros suman 100 devolverá mediante un alert un mensaje de éxito, en caso contrario devuelve un mensaje de fracaso
 if(num1 + num2 + num3 == 100){
    alert("¡Felicidades! Has acertado");
 }
    else{
        alert("¡Lo siento! La suma de los tres números no es 100");
    }

    