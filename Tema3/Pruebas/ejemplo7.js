let elementosP = document.getElementsByTagName("p");
for(let i = 0; i < elementosP.length; i++){
    console.log(elementosP[i].textContent);
}

let eliminar = document.getElementsByClassName("parrafos");
// for(let i = 0; i< eliminar.length; i++){
//     eliminar[i].remove();
// }
for(let p of eliminar){
    p.remove();
}

console.log(elementosP);