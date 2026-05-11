function permitir(ev){

ev.preventDefault();
}

function arrastrar(ev){

ev.dataTransfer.setData("text", ev.target.id);
}

function soltar(ev){

ev.preventDefault();

let data = ev.dataTransfer.getData("text");

if(data == "U"){

hablar("Correcto");

setTimeout(()=>{

juego3();

},1500);

}else{

hablar("Inténtalo otra vez");
}
}