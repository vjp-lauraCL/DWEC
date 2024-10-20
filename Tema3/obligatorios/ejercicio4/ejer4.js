// Selecciona el formulario por su ID
const form = document.getElementById('birthdayForm');

// Añade un evento de escucha para el envío del formulario
form.addEventListener('submit', function(event) {
    // Previene el comportamiento por defecto del formulario (recargar la página)
    event.preventDefault();

    // Obtiene los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const dia = document.getElementById('dia').value;
    const mes = document.getElementById('mes').value;
    const año = document.getElementById('año').value;

    // Crea un nuevo elemento de lista
    const li = document.createElement('li');
    li.textContent = `Nombre: ${nombre}, Día: ${dia}, Mes: ${mes}, Año: ${año}`;

    // Añade la nueva entrada a la lista
    const lista = document.getElementById('listaCumpleanos');
    lista.appendChild(li);

    // Añade una imagen aleatoria
    const img = document.createElement('img');
    img.src = `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`;
    lista.appendChild(img);

});