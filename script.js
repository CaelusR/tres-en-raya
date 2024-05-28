import juego from "./juego.js";//importando modulo de juego.js
const {modoJuego, cambiarConf} = juego;
let btnModoJuego = document.querySelector(".juego__conf");
let btnCambiarModo = document.querySelector(".configuracion");

btnModoJuego.addEventListener("click", (e)=>{
    console.log(e);
    if(e.target && e.target.classList.contains("conf--boton")) modoJuego(e);
});
btnCambiarModo.addEventListener("click", (e)=>{
    if(e.target && e.target.classList.contains("configuracion__conf")) cambiarConf(); 
})

