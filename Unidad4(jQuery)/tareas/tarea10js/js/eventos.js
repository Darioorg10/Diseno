$(document).ready(function () {
        
    $("div.texto").css('display', 'none'); // Ocultamos el texto al principio

    // El div donde está la descripción
    $("main > article > div > section > div").on({
        click: function () {   
            $(".texto").fadeOut();
            $("section > div > div").children("svg:nth-child(2)").fadeIn()
            if ($(this).siblings(".texto").css('display') == 'none') { // Cuando esté oculto el texto, lo mostramos al dar click
                $(this).siblings(".texto").fadeIn()
                $(this).children("div").children("svg:nth-child(2)").fadeOut() // Ocultamos también el svg (segundo) para que quede un menos
            } else {
                $(this).siblings(".texto").fadeOut()
                $(this).children("div").children("svg:nth-child(2)").fadeIn()
            }
        }
    })

});