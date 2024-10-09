let colores =["rojo", "rosa", "verde", "amarillo", "azul", "violeta", "naranja"];
let matriz = new Array(10).fill(new Array(10));
let elemento = document.querySelector("div");

    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){

            let boton = document.createElement("button");
            elemento.style.width = "25px";
            elemento.style.height = "25px";
            elemento.style.margin = "10px";
            elemento.style.border="2px solid black";
            matriz[i][j] = boton;
        }
    }
