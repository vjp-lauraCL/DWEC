function cambiarContenido(a,b,c){
    a =a *10;
    b .item = "cambio";
    c = {item: "cambio"};
}
var num =10;
var obj1 = {item: "original"};
var obj2 = {item: "original"};
cambiarContenido(num, obj1, obj2);
console.log(num);
console.log(obj1.item);
console.log(obj2.item);


//Operadores
let a =3;
let b = "12";
console.log (a * b);
console.log (a + b);
console.log (a + +b);