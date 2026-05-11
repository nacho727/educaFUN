    // variables
    let avatarSeleccionado = "";

    // 🔊 VOZ (mejorada y segura)
    function hablar(texto){
    speechSynthesis.cancel(); // limpia voz anterior

    let mensaje = new SpeechSynthesisUtterance(texto);
    mensaje.lang = "es-ES";
    mensaje.rate = 1;
    mensaje.pitch = 1;

    speechSynthesis.speak(mensaje);
    }

    // 🎉 CONFETTI MEJORADO (ahora sí se ve)
    function lanzarConfetti(){
    for(let i=0; i<60; i++){

        let confeti = document.createElement("div");
        confeti.style.position = "fixed";
        confeti.style.width = "8px";
        confeti.style.height = "8px";
        confeti.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
        confeti.style.left = Math.random()*100 + "vw";
        confeti.style.top = "-10px";
        confeti.style.zIndex = "9999";
        confeti.style.borderRadius = "50%";

        document.body.appendChild(confeti);

        let velocidad = Math.random()*3 + 2;

        let animacion = confeti.animate([
        { transform: "translateY(0px)" },
        { transform: `translateY(${window.innerHeight}px)` }
        ], {
        duration: velocidad * 1000,
        easing: "linear"
        });

        animacion.onfinish = () => confeti.remove();
    }
    }

    // 👤 SELECCIONAR AVATAR
    function seleccionarAvatar(avatar, elemento){

    avatarSeleccionado = avatar;

    // quitar selección anterior
    let avatars = document.querySelectorAll(".avatars img");
    avatars.forEach(img => img.style.border = "3px solid transparent");

    // marcar seleccionado
    elemento.style.border = "4px solid orange";

    hablar("Avatar seleccionado");
    lanzarConfetti();
    }

    // 🚀 INGRESAR
    function ingresar(){

    // sonido click (si existe)
    let click = document.getElementById("click");
    if(click) click.play();

    let nombre = document.getElementById("nombre").value.trim();

    // validaciones habladas
    if(nombre === "" && avatarSeleccionado === ""){
        hablar("Debes escribir tu nombre y seleccionar un avatar");
        return;
    }

    if(nombre === ""){
        hablar("Debes escribir tu nombre");
        return;
    }

    if(avatarSeleccionado === ""){
        hablar("Debes seleccionar un avatar");
        return;
    }

    // todo correcto
    hablar("Bien hecho " + nombre);
    lanzarConfetti();

    // guardar datos
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("avatar", avatarSeleccionado);

    // redirigir
    setTimeout(()=>{
        window.location.href = "bienvenida.html";
    }, 2000);
    }