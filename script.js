const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    menu.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    menu.classList.remove("visible");
});

let signIp = document.getElementById("signIn");
let signUp = document.getElementById("signUp");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIp.onclick = function(){
    nameInput.login.maxHeight = "0";
    title.innerHTML = "login";
    signUp.classList.add("disable");
    signIp.classList.remove("disable");
}

signUp.onclick = function(){
    nameInput.login.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIp.classList.add("disable");
}