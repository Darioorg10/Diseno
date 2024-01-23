// Traemos los elementos necesarios del html
const video = document.getElementById("video")

// Vamos a recoger los botones interactivos del documento
let botonPlay = document.getElementById("play");
let botonPausa = document.getElementById("pausa");
let botonMute = document.getElementById("mute");
let botonReload = document.getElementById("reload");
let botonStop = document.getElementById("stop");
let botonAdelantar = document.getElementById("adelantar");
let botonRetrasar = document.getElementById("retrasar");
let fullScreen = document.getElementById("fullscreen");
let masRapido = document.getElementById("masRapido");
let masLento = document.getElementById("masLento");
let tiempoReproducido = document.getElementById("tiempoReproducido");
let tiempoRestante = document.getElementById("tiempoRestante");

let barraProgreso = document.getElementById("barraProgreso");
let barraVolumen = document.getElementById("volumen");

let svgPlay = document.getElementById("svgPlay");

// Por accesibilidad el vídeo empieza muteado
video.muted = true;
barraVolumen.value = 0;
botonMute.className = "muted";

// Añadimos los escuchadores de eventos a los distintos botones
// Este nos reproduce y pausa el vídeo
botonPlay.addEventListener("click", () => {
    if (botonPlay.className == "play") {
            video.pause();
            botonPlay.className = "pausa";
    } else {
        video.play();
        botonPlay.className = "play";
    }    
})

// Con el botón de restart ponemos el tiempo del video a 0 y para de reproducirse
botonStop.addEventListener("click", () => {
    video.currentTime = 0;
    video.pause();
    botonPlay.className = "pausa"; // Cambiamos el botón
})

// Con el botón de restart ponemos el tiempo del video a 0 (pero sigue reproduciéndose, aunque desde el principio)
botonReload.addEventListener("click", () => {video.currentTime = 0})

// Función para mutear
botonMute.addEventListener("click", () => {
        if (botonMute.className == "unmuted") {
            barraVolumen.value = 0;
            video.muted = true;
            botonMute.className = "muted";
        } else {            
            botonMute.className = "unmuted";
            video.muted = false;
            barraVolumen.value = video.volume;            
        }
})

// Actualizamos el volumen cuando movemos la barra de volumen
barraVolumen.onchange = (e) => {
    video.muted = false;
    let vol = e.target.value;
    video.volume = vol;
    if (botonMute.className == "muted") {
        botonMute.className = "unmuted";
    }
    if (video.volume == 0) {
        botonMute.className = "muted";
    }
    
}

// Hacemos que el valor máximo de la barra de progreso sea la duración de la canción
barraProgreso.setAttribute("max", video.duration)

video.addEventListener("durationchange", () => {
    barraProgreso.setAttribute("max", video.duration)
})

// Hacemos que la barra de progreso se mueva con el tiempo actual
video.addEventListener("timeupdate", () => {
    barraProgreso.setAttribute("value", video.currentTime);
})

// Si le damos click al botón de adelantar o retroceder avanzamos o retrocedemos 10 segundos
botonAdelantar.addEventListener("click", () => {
    video.currentTime += 10;
})

botonRetrasar.addEventListener("click", () => {
    video.currentTime -= 10;
})

// Para poner en pantalla completa
fullScreen.addEventListener("click", () => {    
    video.requestFullscreen();
})

// Para que vaya más rápido o más lento
masRapido.addEventListener("click", () => {
    if (video.playbackRate == 1 || video.playbackRate == 0.5) {
        video.playbackRate = 2;
    } else {
        video.playbackRate = 1;
    }
})

masLento.addEventListener("click", () => {
    if (video.playbackRate == 1 || video.playbackRate == 2) {
        video.playbackRate = 0.5;
    } else {
        video.playbackRate = 1
    }
})

// Creamos una función que nos formatee el tiempo
function formateo (time) {
    let seconds = Number.parseInt(time % 60)
    seconds = time % 60 >= 10 ? `${seconds}` : `0${seconds}`
    let minutes = Number.parseInt(time / 60)
    minutes = Number.parseInt(time / 60) >= 10 ? `${minutes}` : `0${minutes}`
    const formatted = `${minutes}:${seconds}`
    return formatted
  }

// Ponemos el tiempo que llevamos reproducido
tiempoReproducido.innerHTML = "00:00"
video.addEventListener("timeupdate", () => {
  const tiempo = Number.parseInt(video.currentTime)
  const tiempoFormateado = formateo(tiempo)
  if (tiempoFormateado != tiempoReproducido.innerHTML) {
    tiempoReproducido.innerHTML = tiempoFormateado
    barraDuracion.value = Number.parseInt(100 * tiempo / video.duration)    
  }
})

// Establecemos el tiempo máximo
tiempoRestante.innerHTML = formateo(video.duration)
video.addEventListener("durationchange", (e) => {
  tiempoRestante.innerHTML = formateo(e.target.duration)
})

// Ahora tenemos que hacer que el tiempo máximo avance con el vídeo
video.addEventListener("timeupdate", () => {
    const tiempo = Number.parseInt(video.currentTime)
    tiempoRestante.innerHTML = formateo(video.duration - tiempo)
})