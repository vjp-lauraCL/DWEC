// Selecciona el formulario por su ID
let form = document.getElementById('birthday');

// Añade un evento de escucha para el envío del formulario
form.addEventListener('submit', function(event) {
    // Previene el comportamiento por defecto del formulario (recargar la página)
    event.preventDefault();

    // Obtiene los valores de los campos del formulario
    let nombre = document.getElementById('nombre').value;
    let dia = document.getElementById('dia').value;
    let mes = document.getElementById('mes').value;
    let año = document.getElementById('año').value;

    // Crea un nuevo elemento de lista
    let li = document.createElement('li');
    li.textContent = `Nombre: ${nombre}, Día: ${dia}, Mes: ${mes}, Año: ${año}`;

    // Añade la nueva entrada a la lista
    let lista = document.getElementById('listaCumpleanos');
    lista.appendChild(li);

    // Añade una imagen aleatoria
    //Sé que pides que la imagen sea aleatoria, pero no he sido capaz de hacerlo funcionar. Al principio no vi que habías subido el archivo de las imágenes y probe con "Lorem Picsum" y funcionó,
    //Pero al añadir las imágenes al ejercicio no me las carga. Por lo que he puesto una imagen fija para todos los nombres que se añadan. Esta mal, pero nada de lo que probé funciona. 

    let img = document.createElement('img');    
    img.src = "./Images/avatar1.png";
    img.alt = "Imagen de cumpleaños"; // Añade un texto alternativo para la imagen
    lista.appendChild(img);
});