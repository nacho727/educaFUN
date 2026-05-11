// PERFIL
let nombre = localStorage.getItem("nombre");
let avatar = localStorage.getItem("avatar");

document.getElementById("nombreUsuario").innerText =
nombre;

document.getElementById("avatarUsuario").src =
"img/" + avatar;


// VOZ
function hablar(texto){

    speechSynthesis.cancel();

    let msg = new SpeechSynthesisUtterance(texto);

    msg.lang = "es-ES";

    speechSynthesis.speak(msg);
}


// INICIAR
function iniciarJuego(){

    hablar("Veamos que aprendiste");

    juego1();
}



// =========================
// JUEGO 1
// ARRASTRAR VOCALES
// =========================

let respuestas = {};

function juego1(){

respuestas = {};

document.getElementById("juego").innerHTML = `

<div class="zonaJuego">

<h2>
Arrastra las vocales en orden
</h2>

<div class="vocales">

<div draggable="true"
ondragstart="arrastrar(event)"
id="A"
onclick="hablar('A')"
class="vocal a">
A
</div>

<div draggable="true"
ondragstart="arrastrar(event)"
id="E"
onclick="hablar('E')"
class="vocal e">
E
</div>

<div draggable="true"
ondragstart="arrastrar(event)"
id="I"
onclick="hablar('I')"
class="vocal i">
I
</div>

<div draggable="true"
ondragstart="arrastrar(event)"
id="O"
onclick="hablar('O')"
class="vocal o">
O
</div>

<div draggable="true"
ondragstart="arrastrar(event)"
id="U"
onclick="hablar('U')"
class="vocal u">
U
</div>

</div>

<div class="recuadros">

<div class="caja"
ondrop="soltar(event,'A')"
ondragover="permitir(event)">

<img src="img/arbol.png"
onclick="hablar('Árbol')">

<h1 id="A"></h1>

</div>

<div class="caja"
ondrop="soltar(event,'E')"
ondragover="permitir(event)">

<img src="img/elefante.png"
onclick="hablar('Elefante')">

<h1 id="E"></h1>

</div>

<div class="caja"
ondrop="soltar(event,'I')"
ondragover="permitir(event)">

<img src="img/isla.png"
onclick="hablar('Isla')">

<h1 id="I"></h1>

</div>

<div class="caja"
ondrop="soltar(event,'O')"
ondragover="permitir(event)">

<img src="img/oso.png"
onclick="hablar('Oso')">

<h1 id="O"></h1>

</div>

<div class="caja"
ondrop="soltar(event,'U')"
ondragover="permitir(event)">

<img src="img/uvas.png"
onclick="hablar('Uvas')">

<h1 id="U"></h1>

</div>

</div>

<div class="botones">

<button onclick="verificarJuego1()">
Verificar
</button>

<button onclick="juego1()">
Repetir
</button>

</div>

<div id="resultado"></div>

</div>
`;
}


// ARRASTRAR
function permitir(ev){

ev.preventDefault();
}

function arrastrar(ev){

hablar(ev.target.id);

ev.dataTransfer.setData("text", ev.target.id);
}

function soltar(ev,correcto){

ev.preventDefault();

let letra = ev.dataTransfer.getData("text");

document.getElementById(correcto).innerText =
letra;

respuestas[correcto] = letra;

hablar(letra);
}


// VERIFICAR
function verificarJuego1(){

let bien = true;

let vocales = ["A","E","I","O","U"];

vocales.forEach(v => {

if(respuestas[v] != v){

bien = false;
}
});

if(bien){

hablar("Excelente");

document.getElementById("resultado").innerHTML = `

<div class="resultado">
✅ MUY BIEN
</div>

<button onclick="juego2()">
Siguiente Juego
</button>
`;

}else{

hablar("Hay errores");

document.getElementById("resultado").innerHTML = `

<div class="resultado" style="color:red;">
❌ Algunas respuestas están incorrectas
</div>
`;
}
}



// =========================
// JUEGO 2
// =========================

function juego2(){

document.getElementById("juego").innerHTML = `

<div class="zonaJuego">

<h2>
Selecciona imágenes que empiezan con A
</h2>

<div class="vocales">

<img src="img/arbol.png"
onclick="seleccionarImagen(this,true,'Árbol')">

<img src="img/avion.png"
onclick="seleccionarImagen(this,true,'Avión')">

<img src="img/oso.png"
onclick="seleccionarImagen(this,false,'Oso')">

<img src="img/uvas.png"
onclick="seleccionarImagen(this,false,'Uvas')">

</div>

<div class="botones">

<button onclick="verificarSeleccion()">
Verificar
</button>

<button onclick="juego2()">
Repetir
</button>

</div>

<div id="resultado"></div>

</div>
`;
}

let seleccionadas = [];

function seleccionarImagen(img,correcta,nombre){

hablar(nombre);

img.style.border =
"8px solid lime";

seleccionadas.push(correcta);
}

function verificarSeleccion(){

let mal = seleccionadas.includes(false);

if(!mal){

hablar("Correcto");

document.getElementById("resultado").innerHTML = `

<div class="resultado">
✅ Excelente
</div>

<button onclick="juego3()">
Siguiente Juego
</button>
`;

}else{

hablar("Hay errores");

document.getElementById("resultado").innerHTML = `

<div class="resultado" style="color:red;">
❌ Incorrecto
</div>
`;
}
}