//login

const signIn = document.getElementById("signIn");
const signUp = document.getElementById("signUp");
const registro = document.querySelector(".registro");
const login = document.querySelector(".login");
const iniciarSesion = document.getElementById("iniciarSesion");
const nuevoUsuario = document.getElementById("nuevoUsuario");

signIn.addEventListener("click", e => {
    registro.classList.add("hide");
    login.classList.remove("hide");
});

signUp.addEventListener("click", e => {
    registro.classList.remove("hide");
    login.classList.add("hide");
});

iniciarSesion.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "index.html";
});
nuevoUsuario.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "index.html";
});