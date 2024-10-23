// Pasamos el formulario y el input a variables.
let formNota = document.querySelector('form');
let inputNota = document.querySelector('input[name="nota"]');

// Agregamos un evento al formulario
formNota.addEventListener("submit", function(event) {
    // Evitamos que el formulario se envie
    event.preventDefault();
    // Obtenemos el texto de la nota
    var nota = inputNota.value.trim();

    // Comprobamos que el texto no está vacío
    if (nota) {
        // Creamos el elemento li
        let li = document.createElement("li");
        li.textContent = nota;
        li.classList.add("nota");

        // Añadimos funcionalidad al evento del li. Si pulsamos alt + click la nota se pone roja, sino solo pulsamos sobre la nota, esta se elimina. 
        li.addEventListener("click", function(event) {
            if (event.altKey) {
                //toggle comprueba si "rojo" esta siendo usada, si el caso de que no sea usada, hace que se ponga en rojo, sino lo elimina.
                li.classList.toggle("rojo");
            } else {
                li.remove();
            }
        });

        // Añadimos la nota a la lista
        let listaNota = document.getElementById("lista");
        listaNota.appendChild(li);

        // Limpiamos el campo de entrada
        inputNota.value = '';
    }
});