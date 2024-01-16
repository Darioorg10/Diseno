const audio = document.getElementById("audio");
audio.volume = 0.14;

// Vamos a recoger los botones interactivos del documento
let botonPlay = document.getElementById("play");
let botonPausa = document.getElementById("pausa");
let botonMute = document.getElementById("mute");
let botonReload = document.getElementById("reload");

let barraProgreso = document.getElementById("barraProgreso");
let barraVolumen = document.getElementById("volumen");

let svgPlay = document.getElementById("svgPlay");

// Añadimos los escuchadores de eventos a los distintos botones
botonPlay.addEventListener("click", () => {audio.play()})
botonPausa.addEventListener("click", () => {audio.pause()})
botonReload.addEventListener("click", () => {audio.currentTime = 0})

botonMute.addEventListener("click", () => {
        audio.muted = true;
        barraVolumen.value = 0;   
})

// Actualizamos el volumen cuando movemos la barra de volumen
barraVolumen.onchange = (e) => {
    audio.muted = false;
    let vol = e.target.value;
    audio.volume = vol;
}

/*
barraProgreso.max = audio.duration; // Hacemos que el valor máximo de la barra de progreso sea la duración de la canción
if (audio.currentTime > 0) {
    barraProgreso.value = audio.currentTime;
}
*/

