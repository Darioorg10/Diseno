$(document).ready(function () {
    
    // Si hacemos scroll nos aparece el botón de volver arriba
    $(document).on({
        scroll: function() {
            let posicion = $(document).scrollTop(); // Guardamos la posición en la que estamos (0 si estamos arriba del todo)
            $("#volverarriba").stop(false, true);

            // Si volvemos a arriba quitamos el botón
            if (posicion > 25 && $("#volverarriba").css("display") === "none") {
                $("#volverarriba").fadeIn();
            } else if(posicion < 25 && $("#volverarriba").css("display") !== "none"){
                $("#volverarriba").fadeOut();            
            }
        }
    })

    // Si le damos click al botón me va para arriba
    $("#volverarriba").on({
        click: function(){
            $('html').animate( { scrollTop : 0 }, 800 );
        }
    })

    // Si le damos click al menú lo mostramos
    $("#menu-principal").on({
        click: function(){

            $(document).scrollTop(0) // Volvemos arriba si se le da click al menú cuando está bajado por ejemplo
            $("#menu").stop(false, true);

            // Cuando el menú está oculto
            if ($("#menu").css("top") == "0px") {                
                $("#menu").css({
                    "top":"3.6rem"
                }).animate({"left" : 0}, 500);
            } else {
                $("#menu").animate({
                    "left":"-20rem",                    
                }, 500, function(){
                    $(this).css("top","0px")
                })
            }
        }
    })

    // Cada opción del submenú se muestra con un efecto
    // y se ocultan las demás, cambiamos el icono de la flechita también
    $("#menu li a").on({
        click:function() {

            // Si el submenú no está mostrado
            if ($(this).parent("li").children("ul").css("display") == "none") {
                $("#menu li").children("ul").slideUp() // Ocultamos los demás
                $(this).siblings("ul").slideDown() // Lo mostramos                

                // Ponemos todas las flechas en su posición original
                $("#menu i").css({
                    "transform":"rotate(0deg)",
                    "transition":"transform .25s"
                })

                // Rotamos la flecha seleccionada
                $(this).find("i").css({
                    "transform":"rotate(180deg)",
                    "transition":"transform .25s"
                })

            } else { 
                // Si está ya mostrado
                $(this).siblings("ul").slideUp() // Lo ocultamos

                // Ponemos la flecha seleccionada en su posición original
                $(this).find("i").css({
                    "transform":"rotate(0deg)",
                    "transition":"transform .25s"
                })
            }

        }
    })

    // Cuando hagamos scroll, se tiene que quedar la cabecera fixeada
    $(document).on({
        scroll: function() {
            let posicion = $(document).scrollTop(); // Guardamos la posición en la que estamos (0 si estamos arriba del todo)
            // $("#volverarriba").stop(false, true);

            // Si volvemos a arriba quitamos el botón
            if (posicion > 25 && $("#top").css("position") !== "fixed") {
                $("#top").css({
                    "position":"fixed",
                    "width":"100%",
                    "opacity":"50%",
                    "transition":"opacity .5s"
                })
            } else if(posicion < 25 && $("#top").css("position") === "fixed"){
                $("#top").css({
                    "position":"relative",
                    "opacity":"100%"
                })
            }
        }
    })


    // Cuando nos pongamos encima de una imagen que se cambia por otra de la misma
    $(".item img").on({
        mouseenter:function() {
            var src = $(this).attr("src") // Cogemos el src actual
            var srcNueva = src.replace(".jpg", "-1.jpg") // Cambiamos la imagen por la otra versión

            $(this).attr("src", srcNueva) // Cambiamos la src
        },

        mouseleave:function(){
            var src = $(this).attr("src")
            var srcNueva = src.replace("-1.jpg", ".jpg") 

            $(this).attr("src", srcNueva)
        }
    })

});