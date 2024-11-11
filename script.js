const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    menu.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    menu.classList.remove("visible");
});

/*-----------------------------------------------------------------*/

// Selecciona el formulario y el contenedor de reseñas
const reviewForm = document.getElementById('reviewForm');
const reviewsContainer = document.getElementById('reviewsContainer');

// Escucha el evento de envío del formulario
reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtiene el nombre y la reseña del usuario
    const username = document.getElementById('username').value;
    const reviewText = document.getElementById('reviewText').value;

    // Crea un elemento HTML para la nueva reseña
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');
    reviewItem.innerHTML = `
        <h3>${username}</h3>
        <p>${reviewText}</p>
    `;

    // Añade la reseña al contenedor
    reviewsContainer.appendChild(reviewItem);

    // Limpia el formulario después de enviar
    reviewForm.reset();
});
