document.addEventListener("DOMContentLoaded", function() {
    let colores = ["red", "pink", "green", "yellow", "blue", "violet", "orange"];
    let contenedor = document.createElement("div");
    contenedor.style.display = "grid";
    contenedor.style.gridTemplateColumns = "repeat(10, 25px)";
    document.body.appendChild(contenedor);

    function crearMatriz() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let boton = document.createElement("button");
                boton.style.width = "25px";
                boton.style.height = "25px";
                boton.style.margin = "0";
                boton.style.border = "2px solid black";
                boton.style.backgroundColor = colores[0];
                boton.id = `${i}-${j}`;
                contenedor.appendChild(boton);
                asignarEventos(boton);
            }
        }
    }
    function asignarEventos(boton) {
        boton.addEventListener("mousedown", function(event) {
            event.preventDefault();
            let colorActual = boton.style.backgroundColor;
            let indice = colores.indexOf(colorActual);
            if (event.button === 0) { // Botón izquierdo
                boton.style.backgroundColor = colores[(indice + 1) % colores.length];
            } else if (event.button === 2) { // Botón derecho
                boton.style.backgroundColor = colores[(indice - 1 + colores.length) % colores.length];
            } else if (event.button === 1) { // Botón de la ruleta
                boton.style.backgroundColor = "gray";
            }
        });
        boton.addEventListener("contextmenu", function(event) {
            event.preventDefault();
        });
    }

    crearMatriz();
});