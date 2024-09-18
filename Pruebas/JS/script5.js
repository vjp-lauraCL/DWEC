
let funcionProcesadoraPar = function (arg1, arg2, funcionProcesadora) {
    return funcionProcesadora(arg1, arg2);
}

console.log("Esta vez procesamos una funcion (de 3 y 2): " + funcionProcesadoraPar(3, 2, (n1, n2) => n1 + n2));

console.log("Esta vez procesamos una funcion (de 3 y 2): " + funcionProcesadoraPar(3, 2, (n1, n2) => n1*n2));

//prueba
let procesaTres = function(arg1, arg2, arg3, funcionProcesadora) {
    return funcionProcesadora(arg1, arg2, arg3);
}

console.log("Esta vez procesamos una funcion (de 3, 2 y 1): " + procesaTres(2, 5, 4, (n1, n2, n3) => n1 + n2 + n3));
console.log("Esta vez procesamos una funcion (de 3, 2 y 1): " + procesaTres(2, 5, 4, (n1, n2, n3) => n1 * n2 * n3));