// Cogemos el audio del documento
const audio = document.getElementById("audio");

// Hacemos que el audio empieze en el 14%, que no es muy alto, por temas de accesibilidad
audio.volume = 0.14;

// Vamos a recoger los botones interactivos del documento
let botonPlay = document.getElementById("play");
let botonPausa = document.getElementById("pausa");
let botonMute = document.getElementById("mute");
let botonReload = document.getElementById("reload");
let botonStop = document.getElementById("stop");

let barraProgreso = document.getElementById("barraProgreso");
let barraVolumen = document.getElementById("volumen");

let svgPlay = document.getElementById("svgPlay");

// Añadimos los escuchadores de eventos a los distintos botones
// Este nos reproduce y pausa el vídeo
botonPlay.addEventListener("click", () => {
    if (botonPlay.className == "play") {
            audio.pause();
            botonPlay.className = "pausa";
    } else {
        audio.play();
        botonPlay.className = "play";
    }    
})

// Con el botón de restart ponemos el tiempo del audio a 0 y para de reproducirse
botonStop.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.pause();
    botonPlay.className = "pausa"; // Cambiamos el botón
})

// Con el botón de restart ponemos el tiempo del audio a 0 (pero sigue reproduciéndose, aunque desde el principio)
botonReload.addEventListener("click", () => {audio.currentTime = 0})

// Función para mutear
botonMute.addEventListener("click", () => {                
        if (botonMute.className == "unmuted") {
            barraVolumen.value = 0;
            audio.muted = true;
            botonMute.className = "muted";
        } else {            
            botonMute.className = "unmuted";
            audio.muted = false;
            barraVolumen.value = audio.volume;            
        }
})

// Actualizamos el volumen cuando movemos la barra de volumen
barraVolumen.onchange = (e) => {
    audio.muted = false;
    let vol = e.target.value;
    audio.volume = vol;
    if (botonMute.className == "muted") {
        botonMute.className = "unmuted";
    }
    if (audio.volume == 0) {
        botonMute.className = "muted";
    }
    
}

// Hacemos que el valor máximo de la barra de progreso sea la duración de la canción
barraProgreso.setAttribute("max", audio.duration)

audio.addEventListener("durationchange", () => {
    barraProgreso.setAttribute("max", audio.duration)
})

// Hacemos que la barra de progreso se mueva con el tiempo actual
audio.addEventListener("timeupdate", () => {
    barraProgreso.setAttribute("value", audio.currentTime);
})


