const audio = document.createElement("audio");
audio.preload = "auto";
audio.src = "hotel-california.m4a";
document.body.appendChild(audio);

// Añadimos un eventListener al botón de play
let botonPlay = document.getElementById("play");
botonPlay.addEventListener("click", () => {
    audio.play();
    console.log("Estoy reproduciendome guapo");
})