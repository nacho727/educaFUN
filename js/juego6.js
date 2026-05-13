// =========================
// juego6.js COMPLETO
// =========================

let correctas = 0;

let errores = 0;


// =========================
// VOZ
// =========================

function hablar(texto){

speechSynthesis.cancel();

let msg = new SpeechSynthesisUtterance(texto);

msg.lang = "es-ES";

msg.rate = 1.0;

msg.pitch = 1.0;

speechSynthesis.speak(msg);
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
(Math.random()*2500) + 2500;

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

easing:"cubic-bezier(0.1,0.8,0.2,1)"

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
document.querySelector(".botones button");

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

hablarTitulo();
}


// =========================
// TITULO
// =========================

function hablarTitulo(){

hablar(
"Revienta solamente las vocales"
);
}


// =========================
// EXPLOSION
// =========================

function explosion(btn){

btn.animate([

{
transform:"scale(1)",
opacity:1
},

{
transform:"scale(1.5)",
opacity:0
}

],{

duration:400

});
}


// =========================
// REVENTAR
// =========================

function reventar(btn,correcta,letra){

if(btn.classList.contains("reventado")){

return;
}

btn.classList.add("reventado");

hablar(letra);

explosion(btn);

btn.style.opacity = "0.2";

if(correcta){

correctas++;

}else{

errores++;
}
}


// =========================
// VERIFICAR
// =========================

function verificar(){

if(correctas == 3 && errores == 0){

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
🏆 PERFECTO
</div>

<button class="siguiente" onclick="
window.location.href='juego7.html'
">
Siguiente Juego
</button>
`;

}else{

if(errores == 1){

hablar(
"Te equivocaste en una"
);

}else if(errores == 2){

hablar(
"Te equivocaste en dos"
);

}else{

hablar(
"Hay varios errores"
);
}

document.getElementById(
"resultado"
).innerHTML = `

<div class="resultado error">
❌ Incorrecto
</div>
`;
}
}