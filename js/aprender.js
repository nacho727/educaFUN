// DATOS USUARIO
let nombre = localStorage.getItem("nombre");
let avatar = localStorage.getItem("avatar");

// MOSTRAR PERFIL
document.getElementById("nombreUsuario").innerText =
nombre;

document.getElementById("avatarUsuario").src =
"img/" + avatar;


// VOZ
function hablar(texto){

    speechSynthesis.cancel();

    let msg = new SpeechSynthesisUtterance(texto);

    msg.lang = "es-ES";
    msg.rate = 0.9;

    speechSynthesis.speak(msg);
}


// BIENVENIDA
window.onload = function(){

    hablar("Bienvenido, empecemos a aprender con Gumball");

}


// DATOS DE VOCALES
const datos = {

A:[
    {
        nombre:"Araña",
        imagen:"img/arana.png"
    },

    {
        nombre:"Avión",
        imagen:"img/avion.png"
    },

    {
        nombre:"Árbol",
        imagen:"img/arbol.png"
    }
],

E:[
    {
        nombre:"Elefante",
        imagen:"img/elefante.png"
    },

    {
        nombre:"Escoba",
        imagen:"img/escoba.png"
    },

    {
        nombre:"Estrella",
        imagen:"img/estrella.png"
    }
],

I:[
    {
        nombre:"Iglesia",
        imagen:"img/iglesia.png"
    },

    {
        nombre:"Imán",
        imagen:"img/iman.png"
    },

    {
        nombre:"Isla",
        imagen:"img/isla.png"
    }
],

O:[
    {
        nombre:"Oso",
        imagen:"img/oso.png"
    },

    {
        nombre:"Oveja",
        imagen:"img/oveja.png"
    },

    {
        nombre:"Oreja",
        imagen:"img/oreja.png"
    }
],

U:[
    {
        nombre:"Uvas",
        imagen:"img/uvas.png"
    },

    {
        nombre:"Uniforme",
        imagen:"img/uniforme.png"
    },

    {
        nombre:"Uno",
        imagen:"img/uno.png"
    }
]

};


// MOSTRAR VOCAL
function mostrarVocal(vocal){

    hablar(vocal);

    let contenido = `

    <h2 style="
    font-size:45px;
    color:#444;
    ">
    Vocal ${vocal}
    </h2>

    <div class="objetos">
    `;

    datos[vocal].forEach(objeto => {

        contenido += `

        <div class="tarjeta"
        onclick="hablar('${objeto.nombre}')">

            <img src="${objeto.imagen}">

            <p>${objeto.nombre}</p>

        </div>

        `;
    });

    contenido += `</div>`;

    document.getElementById("contenido").innerHTML =
    contenido;
}


function irEvaluacion(){

    hablar("Veamos que aprendiste");

    setTimeout(()=>{

        window.location.href = "evaluacion.html";

    },2000);
}