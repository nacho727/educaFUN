document.addEventListener("DOMContentLoaded", function () {
    const nombre = localStorage.getItem("nombre") || "Usuario";
    const avatar = localStorage.getItem("avatar") || "icono.png";

    const nombrePerfil = document.getElementById("nombrePerfil");
    const avatarPerfil = document.getElementById("avatarPerfil");

    if (nombrePerfil) {
        nombrePerfil.innerText = nombre;
    }

    if (avatarPerfil) {
        avatarPerfil.src = "img/" + avatar;
        avatarPerfil.alt = nombre + " avatar";
    }
});
