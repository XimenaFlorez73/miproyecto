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

// Guardar datos en localStorage al registrarse
nuevoUsuario.addEventListener("click", function(event) {
    event.preventDefault();

    // Captura los datos del formulario de registro
    const nombre = document.querySelector(".registro input[placeholder='Nombre Completo']").value;
    const correo = document.querySelector(".registro input[placeholder='Correo electronico']").value;
    const contraseña = document.querySelector(".registro input[placeholder='Contraseña']").value;

    // Verifica que todos los campos estén completos
    if (nombre && correo && contraseña) {
        // Guarda los datos del usuario en localStorage
        const usuario = { nombre, correo, contraseña };
        localStorage.setItem(correo, JSON.stringify(usuario));

        alert("Usuario registrado exitosamente!");
        window.location.href = "index.html";
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

// Verificar datos en localStorage al iniciar sesión
iniciarSesion.addEventListener("click", function(event) {
    event.preventDefault();

    // Captura los datos del formulario de login
    const correo = document.querySelector(".login input[placeholder='Correo electronico']").value;
    const contraseña = document.querySelector(".login input[placeholder='Contraseña']").value;

    // Verifica que los campos estén completos
    if (correo && contraseña) {
        // Busca al usuario en localStorage
        const usuarioGuardado = localStorage.getItem(correo);

        if (usuarioGuardado) {
            const usuario = JSON.parse(usuarioGuardado);

            // Verifica que la contraseña sea correcta
            if (usuario.contraseña === contraseña) {
                alert("Inicio de sesión exitoso!");
                window.location.href = "index.html";
            } else {
                alert("Contraseña incorrecta.");
            }
        } else {
            alert("Usuario no registrado.");
        }
    } else {
        alert("Por favor, ingresa todos los datos.");
    }
});
