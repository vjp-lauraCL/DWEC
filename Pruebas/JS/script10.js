//utiliza rest y spread para crear una función a la que le puedas pasar un numero
//ilimitado de parámeros. Devuelve el mayor de ellos. 
//Si algun parametro no es numero devolverá undefined.
let array = [1,2,3,4,5,68,7,65,94,10];
let array2 = [1,2,3,4,5,68,7,65,94,10,'a'];
function mayor(...array){
   if(array.every(num => typeof num == 'number')){
         return Math.max(...array);
   }
}
console.log(mayor(...array));
console.log(mayor(...array2));

//otra opcion es :
// function mayor(...array){
//     return (array.every(num => typeof num == 'number')) ? Math.max(...array) : undefined;
// }
// console.log(mayor(...array));
// console.log(mayor(...array2));




