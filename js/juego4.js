let respuesta = "";


// VOZ
function hablar(texto){

speechSynthesis.cancel();

let msg = new SpeechSynthesisUtterance(texto);

msg.lang = "es-ES";

speechSynthesis.speak(msg);
}


// CLICK
function animarClick(elemento){

elemento.animate([

{ transform:"scale(1)" },
{ transform:"scale(0.8)" },
{ transform:"scale(1.1)" },
{ transform:"scale(1)" }

],{

duration:300

});
}


// INICIO
function iniciarJuego(){

hablarTitulo();
}


// TITULO
function hablarTitulo(){

hablar(
"Escoge la vocal correcta para completar la palabra"
);
}


// CONFETTI
function confetti(){

for(let i=0; i<200; i++){

let c = document.createElement("div");

c.style.position = "fixed";

c.style.width = "12px";

c.style.height = "12px";

c.style.borderRadius = "50%";

c.style.left = Math.random()*100 + "vw";

c.style.top = "-20px";

c.style.background =
`hsl(${Math.random()*360},100%,50%)`;

document.body.appendChild(c);

let animacion = c.animate([

{
transform:"translateY(0px)"
},

{
transform:
`translateY(${window.innerHeight}px)`
}

],{

duration:4000

});

animacion.onfinish = ()=>{

c.remove();
};
}
}


// SELECCIONAR
function seleccionar(letra){

hablar(letra);

respuesta = letra;

document.getElementById(
"palabra"
).innerHTML = letra + " SO";
}


// VERIFICAR
function verificar(){

if(respuesta == "O"){

hablar(
"Excelente"
);

confetti();

document.getElementById(
"resultado"
).innerHTML = `

<div class="resultado"
style="color:lime;">
🏆 PERFECTO
</div>

<button onclick="
window.location.href='juego5.html'
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