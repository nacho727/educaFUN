let respuestaCorrecta = false;
let botonSeleccionado = null;


// VOZ
function hablar(texto){

speechSynthesis.cancel();

let msg = new SpeechSynthesisUtterance(texto);

msg.lang = "es-ES";

msg.rate = 0.9;

speechSynthesis.speak(msg);
}


// INICIO
function iniciarJuego(){

hablarTitulo();
}


// TITULO
function hablarTitulo(){

hablar(
"Escucha la vocal y selecciona la correcta"
);
}


// CLICK
function animarClick(elemento){

elemento.animate([

{
transform:"scale(1)"
},

{
transform:"scale(0.8)"
},

{
transform:"scale(1.1)"
},

{
transform:"scale(1)"
}

],{

duration:300

});
}


// CONFETTI
function confetti(){

for(let i=0; i<200; i++){

let c = document.createElement("div");

c.style.position = "fixed";

c.style.width = "10px";

c.style.height = "10px";

c.style.borderRadius = "50%";

c.style.left = Math.random()*100 + "vw";

c.style.top = "-20px";

c.style.background =
`hsl(${Math.random()*360},100%,50%)`;

c.style.zIndex = "9999";

document.body.appendChild(c);

let animacion = c.animate([

{
transform:"translateY(0px)"
},

{
transform:`translateY(${window.innerHeight}px)`
}

],{

duration:3000

});

animacion.onfinish = ()=>{

c.remove();
};
}
}


// SELECCIONAR
function seleccionar(elemento,correcta,letra){

hablar(letra);

animarClick(elemento);


// DESELECCIONAR
if(botonSeleccionado == elemento){

elemento.style.opacity = "1";

botonSeleccionado = null;

respuestaCorrecta = false;

return;
}


// RESET
document.querySelectorAll(".vocal")
.forEach(btn=>{

btn.style.opacity = "1";

});


// NUEVO
elemento.style.opacity = "0.5";

botonSeleccionado = elemento;

respuestaCorrecta = correcta;
}


// VERIFICAR
function verificar(){

if(respuestaCorrecta){

hablar(
"Excelente. Correcto"
);

confetti();

document.getElementById(
"resultado"
).innerHTML = `

<div class="resultado"
style="color:lime;">
✅ PERFECTO
</div>

<button onclick="
window.location.href='juego4.html'
">
Siguiente Juego
</button>
`;

}else{

hablar(
"Incorrecto"
);

document.getElementById(
"resultado"
).innerHTML = `

<div class="resultado"
style="color:red;">
❌ Incorrecto
</div>
`;
}
}