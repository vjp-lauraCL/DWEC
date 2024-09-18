//calcular el precio
let unidades = 10;
let precio = 5;
let total = unidades + precio;

console.log(total);

//funciones anánimas o como variables
let funcionSumarUnoMas = function(valor){
    return ++valor ;//el mas delante suma y devulve el valor
}
console.log(funcionSumarUnoMas(4));

let valor =4;
let funcionSumarUnoMas2 = function(){
    return valor++ ;
}
console.log(valor);