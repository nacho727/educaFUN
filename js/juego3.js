let respuestaCorrecta = false;
let botonSeleccionado = null;


// VOZ
function hablar(texto){

speechSynthesis.cancel();

let msg = new SpeechSynthesisUtterance(texto);

msg.lang = "es-ES";

msg.rate = 1.0;

msg.pitch = 1.0;

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


// =========================
// CONFETTI REALISTA
// =========================

function crearConfetti(x,y){

for(let i=0; i<220; i++){

let confeti = document.createElement("div");

confeti.className = "confeti";

confeti.style.left = x + "px";

confeti.style.top = y + "px";

confeti.style.background =
`hsl(${Math.random()*360},100%,50%)`;

confeti.style.width =
(Math.random()*12 + 6) + "px";

confeti.style.height =
(Math.random()*12 + 6) + "px";

document.body.appendChild(confeti);

let destinoX =
(Math.random()-0.5) * 900;

let destinoY =
(Math.random()*900) + 300;

let rotacion =
Math.random()*1080;

let duracion =
Math.random()*2500 + 2500;

confeti.animate([

{
transform:
`translate(0px,0px) rotate(0deg)`,

opacity:1
},

{
transform:
`translate(${destinoX}px, ${destinoY}px)
rotate(${rotacion}deg)`,

opacity:0
}

],{

duration:duracion,

easing:"cubic-bezier(0.1,0.8,0.2,1)",

iterations:1

});

setTimeout(()=>{

confeti.remove();

},duracion);

}
}


// =========================
// CONFETTI DESDE BOTON
// =========================

function confettiBoton(){

let boton =
document.querySelector(".botones button");

let rect =
boton.getBoundingClientRect();

let x =
rect.left + rect.width/2;

let y =
rect.top + rect.height/2;

crearConfetti(x,y);
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
"¡Excelente! Todas correctas"
);

confettiBoton();

setTimeout(()=>{

crearConfetti(
window.innerWidth/2,
100
);

},500);

document.getElementById(
"resultado"
).innerHTML = `

<div class="resultado exito">
✅ PERFECTO
</div>

<button class="siguiente"
onclick="
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

<div class="resultado error">
❌ Incorrecto
</div>
`;
}
}