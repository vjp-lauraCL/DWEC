let colores =["rojo", "rosa", "verde", "amarillo", "azul", "violeta", "naranja"];
let matriz = new Array(10);
let elemento = document.querySelector("div");

    for(let i=0; i<10; i++){
        matriz[i] = new Array(10);
        for(let j=0; j<10; j++){

            let boton = document.createElement("button");
            elemento.style.width = "25px";
            elemento.style.height = "25px";
            elemento.style.margin = "10px";
            elemento.style.border="2px solid black";
            elemento.id = `${i}-${j}`;
            matriz[i][j] = boton;
        }
    }
console.log(matriz);