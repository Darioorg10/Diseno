$(function(){

    // PÁGINA PRINCIPAL

    // I) MENÚ
    // Mostramos el menú al darle click
    $("#menu-principal > svg:nth-child(1)").on({
        click:function(){

            $(this).stop(false, true)
            $(this).siblings("svg").stop(false, true)
            $(this).siblings("#ul-menu").stop(false, true)
            $(this).siblings("#menu-nav").stop(false, true)
            $("main.main-principales").stop(false, true)            

            $(this).fadeOut({
                "complete":function(){
                    $(this).siblings("svg").fadeIn()
                }
            })            
            $(this).siblings("#ul-menu").animate({"left":"0"}, 400)
            $(this).siblings("#menu-nav").animate({"left":"5px"}, 400)
            $("main.main-principales").css("opacity","40%")

        }
    })

    // Y lo quitamos al darle click a la x
    $("#menu-principal > svg:nth-child(2)").on({
        click:function(){

            $(this).stop(false, true)
            $(this).siblings("svg").stop(false, true)
            $(this).siblings("#ul-menu").stop(false, true)
            $(this).siblings("#menu-nav").stop(false, true)
            $("main.main-principales").stop(false, true)

            $(this).fadeOut({
                "complete":function(){
                    $(this).siblings("svg").fadeIn()
                }
            })            
            $(this).siblings("#ul-menu").animate({"left":"-58vw"}, 400)
            $(this).siblings("#menu-nav").animate({"left":"-58vw"}, 400)
            $("main.main-principales").css("opacity","100%")
            
        }
    })

    // Al hacer scroll ocultamos el menú y ponemos la cabecera fixed
    $(window).on({
        scroll:function(){
            $("#menu-principal > svg:nth-child(2)").stop(false, true)
            $("#menu-principal > svg:nth-child(2)").siblings("svg").stop(false, true)
            $("#menu-principal > svg:nth-child(2)").siblings("#ul-menu").stop(false, true)
            $("#menu-principal > svg:nth-child(2)").siblings("#menu-nav").stop(false, true)
            $("main.main-principales").stop(false, true)

            // Ocultamos el menú
            $("#menu-principal > svg:nth-child(2)").fadeOut()
            $("#menu-principal > svg:nth-child(2)").siblings("svg").delay(400).fadeIn()
            $("#menu-principal > svg:nth-child(2)").siblings("#ul-menu").animate({"left":"-58vw"}, 400)
            $("#menu-principal > svg:nth-child(2)").siblings("#menu-nav").animate({"left":"-58vw"}, 400)
            $("main.main-principales").css("opacity","100%")

            // La cabecera la ponemos fixed si se hace scroll y le bajamos la opacidad
            if ($(document).scrollTop() == 0) {
                $("header.cabecera-general").css({
                    "position":"static",
                    "opacity":"100%"
                })
            } else {
                $("header.cabecera-general").css({
                    "position":"fixed",
                    "width":"100%",
                    "opacity":"90%"
                })
            }            

        }
    })

    // Al hacer resize también ocultamos el menú
    $(window).on({
        resize:function(){
            $("#menu-principal > svg:nth-child(2)").stop(false, true)
            $("#menu-principal > svg:nth-child(2)").siblings("svg").stop(false, true)
            $("#menu-principal > svg:nth-child(2)").siblings("#ul-menu").stop(false, true)
            $("#menu-principal > svg:nth-child(2)").siblings("#menu-nav").stop(false, true)
            $("main.main-principales").stop(false, true)

            $("#menu-principal > svg:nth-child(2)").fadeOut()
            $("#menu-principal > svg:nth-child(2)").siblings("svg").delay(400).fadeIn()
            $("#menu-principal > svg:nth-child(2)").siblings("#ul-menu").animate({"left":"-58vw"}, 400)
            $("#menu-principal > svg:nth-child(2)").siblings("#menu-nav").animate({"left":"-58vw"}, 400)
            $("main.main-principales").css("opacity","100%")
        }
    })

    // Cuando le demos click al main también se oculta
    $("main.main-principales").on({
        click:function(){
            $("#menu-principal > svg:nth-child(2)").stop(false, true)
            $("#menu-principal > svg:nth-child(2)").siblings("svg").stop(false, true)
            $("#menu-principal > svg:nth-child(2)").siblings("#ul-menu").stop(false, true)
            $("main.main-principales").stop(false, true)

            $("#menu-principal > svg:nth-child(2)").fadeOut()
            $("#menu-principal > svg:nth-child(2)").siblings("svg").delay(400).fadeIn()
            $("#menu-principal > svg:nth-child(2)").siblings("#ul-menu").animate({"left":"-58vw"}, 400)
            $("main.main-principales").css("opacity","100%")
        }
    })

    // Vamos a cambiar de color los li del menú cuando se entre y salga
    $("#menu-principal li").on({
        mouseenter:function(){
            $(this).children("a").stop(false, true)
            $(this).children("a").animate({"color":"#D9701E"})
        },

        mouseleave:function(){
            $(this).children("a").stop(false, true)
            $(this).children("a").animate({"color":"white"})
        }
    })

    // II) COOKIES
    // Botón de cookies que desaparezca al darle click
    // y al principio aparezca con efecto
    $("div#mensaje-cookies").fadeIn().css("display", "flex");

    $("div#mensaje-cookies .botones-cookies").on({
        click:function(){
            $(this).parent().fadeOut()
        }
    })

    // III) FLECHITA ARRIBA
    // Aparece cuando hacemos un poco de scroll
    $(window).on({
        scroll:function(){

            $("#flechita-arriba").stop(true)

            if ($(document).scrollTop() > 20) {
                $("#flechita-arriba").fadeIn()
            } else {
                $("#flechita-arriba").fadeOut()
            }

        }
    })

    // Cuando pulsemos en la flecha nos manda arriba del documento
    $("#flechita-arriba").on({
        click:function(){
            $("html").animate({"scrollTop":"0"})
        }
    })

    // IV) MENSAJE RESERVA
    // Cuando en detalles-reserva se le de click al botón de confirmar
    // vamos a la página que nos muestra un mensaje
    $("#mensaje-reserva-completa").animate({"opacity":"80%"}, 1500).delay(2000).fadeOut()

    // V)
    // Llamamos al plugin del slider
    $('.flexslider').flexslider();

})