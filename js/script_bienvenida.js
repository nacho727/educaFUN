let nombre = localStorage.getItem("nombre");
let avatar = localStorage.getItem("avatar");

// mostrar datos
document.getElementById("mensaje").innerText =
"Bienvenido " + nombre;

document.getElementById("avatar").src = "img/" + avatar;

// voz
function activarVoz(){

    speechSynthesis.cancel();

    let msg = new SpeechSynthesisUtterance(
    "Bienvenido " + nombre);

    msg.lang = "es-ES";

    speechSynthesis.speak(msg);
}

// ir a aprender
function irAprender(){
    window.location.href = "aprender.html";
}