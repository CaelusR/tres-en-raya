let p2 = document.getElementById("p2");
let displayConf = document.querySelector(".modo__juego");
let boton=document.querySelector(".conf--boton");
//elegimos el modo de juego
function modoJuego(e){
    if(e.target.innerHTML==="VS IA") p2.innerHTML = "IA";
    else                       p2.innerHTML = "P2";
    displayConf.style.display = `none`;
}
function cambiarConf() {
    displayConf.style=`display: visible`;
}
//exprtamos las funciones
const funciones = {
    modoJuego,
    cambiarConf
}
export default funciones