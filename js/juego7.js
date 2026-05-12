// =========================
// juego7.js COMPLETO
// =========================

let correcta = null;


// =========================
// VOZ MEJORADA
// =========================

function hablar(texto){

// detener voz anterior
window.speechSynthesis.cancel();

let msg =
new SpeechSynthesisUtterance(texto);

msg.lang = "es-ES";

msg.rate = 0.9;

msg.pitch = 1.1;

msg.volume = 1;


// buscar voz en español
let voces =
window.speechSynthesis.getVoices();

let vozEspanol = voces.find(v =>
v.lang.includes("es")
);

if(vozEspanol){

msg.voice = vozEspanol;
}


// reproducir
window.speechSynthesis.speak(msg);
}


// cargar voces correctamente
window.speechSynthesis.onvoiceschanged =
function(){

window.speechSynthesis.getVoices();
};


// =========================
// CONFETTI REALISTA
// =========================

function crearConfetti(x,y){

for(let i=0; i<400; i++){

let confeti =
document.createElement("div");

confeti.className = "confeti";

confeti.style.position = "fixed";

confeti.style.left = x + "px";

confeti.style.top = y + "px";

confeti.style.background =
`hsl(${Math.random()*360},100%,50%)`;

confeti.style.width =
(Math.random()*14 + 6) + "px";

confeti.style.height =
(Math.random()*14 + 6) + "px";

confeti.style.borderRadius =
Math.random() > 0.5
? "50%"
: "2px";

confeti.style.zIndex = "9999";

confeti.style.pointerEvents = "none";

document.body.appendChild(confeti);

let destinoX =
(Math.random()-0.5) * 1200;

let destinoY =
(Math.random()*1200) + 300;

let rotacion =
Math.random()*1440;

let duracion =
(Math.random()*3500) + 3000;

confeti.animate([

{
transform:
`translate(0px,0px)
rotate(0deg)`,

opacity:1
},

{
transform:
`translate(${destinoX}px,
${destinoY}px)
rotate(${rotacion}deg)`,

opacity:0
}

],{

duration:duracion,

easing:
"cubic-bezier(0.1,0.8,0.2,1)"

});

setTimeout(()=>{

confeti.remove();

},duracion);

}
}


// =========================
// CONFETTI BOTON
// =========================

function confettiBoton(){

let boton =
document.querySelector(
".botones button"
);

let rect =
boton.getBoundingClientRect();

crearConfetti(

rect.left + rect.width/2,

rect.top + rect.height/2

);
}


// =========================
// INICIO
// =========================

function iniciarJuego(){

setTimeout(()=>{

hablarTitulo();

},500);
}


// =========================
// TITULO
// =========================

function hablarTitulo(){

hablar(
"Selecciona la imagen que empieza con la vocal U"
);
}


// =========================
// SELECCIONAR
// =========================

function seleccionar(
valor,
nombre,
elemento
){

// decir nombre correcto
hablar(nombre);


// quitar seleccion anterior
document
.querySelectorAll(".vocales img")
.forEach(img=>{

img.style.opacity = "1";

img.classList.remove("activo");

});


// deseleccionar
if(elemento.classList.contains(
"activo"
)){

correcta = null;

elemento.style.opacity = "1";

elemento.classList.remove(
"activo"
);

return;
}


// seleccionar nueva
correcta = valor;

elemento.style.opacity = "0.5";

elemento.classList.add("activo");
}


// =========================
// VERIFICAR
// =========================

function verificar(){

if(correcta === true){

hablar(
"Felicitaciones completaste todos los juegos"
);

confettiBoton();

setTimeout(()=>{

crearConfetti(
window.innerWidth/2,
100
);

},500);

setTimeout(()=>{

crearConfetti(
window.innerWidth/2,
window.innerHeight/2
);

},1200);

setTimeout(()=>{

crearConfetti(
window.innerWidth/2,
200
);

},1800);


document.getElementById(
"resultado"
).innerHTML = `

<div class="resultado exito">
🏆 FELICITACIONES
<br><br>
COMPLETASTE TODOS LOS NIVELES
</div>

<button class="siguiente"
onclick="
window.location.href='index.html'
">
Volver al inicio
</button>
`;

}else{

hablar(
"Incorrecto. Intenta otra vez"
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