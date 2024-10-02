let enlaceUno = document.querySelector('#div1 a');
console.log(enlaceUno.title);

// let enlaceDos = document.querySelector('#div2 > a');
// console.log(enlaceDos);

// let enlaceTres = document.querySelector( '#div1 > p > a');
// console.log(enlaceTres.title);

// let enlaceCuatro = document.querySelector(".linkNormal:nth-child(2)" );
// console.log(enlaceCuatro);

let enlaceCinco = document.querySelector(".linkNormal[title^=Spider]" );
console.log(enlaceCinco);