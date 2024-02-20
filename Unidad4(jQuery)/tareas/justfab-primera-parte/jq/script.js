$(document).ready(function () {
    
    // Si hacemos scroll, ponemos la cabecera como fixed, y le bajamos la opacidad
    $(document).on({
        scroll: function() {
            let posicion = $(document).scrollTop(); // Guardamos la posición en la que estamos (0 si estamos arriba del todo)
            
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
    // y se ocultan las demás, cambiamos el icono también
    $("#menu > li").on({
        click:function() {
            $("#menu i").css( // Tenemos que volver a poner el icono bien al abrir otro submenú o al darle click al mismo
                {   
                    "transform":"rotate(0)",
                }
            )
            $("#menu ul").slideUp() // Hacemos que se cierren todos los menús al principio
            $(this).find("i").css(
                {   
                    "transform":"rotate(180deg)", 
                    "transition":"transform .15s"
                }
            )

            $(this).children("ul").slideToggle()

        }
    })

});