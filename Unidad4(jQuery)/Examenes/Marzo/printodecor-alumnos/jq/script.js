$(document).ready(function () {
    
    // Menú principal    
    $("div#hamburger").on({
        click:function(){

            $(this).siblings("#menu-toggle").stop(false, true)
            $(this).children("span:nth-child(2)").stop(false, true)
            $(this).children("span").stop(false, true)
            
            if ($(this).siblings("#menu-toggle").css("display") == "none") { // Si el menú no está desplegado
                // a)
                $(this).siblings("#menu-toggle").slideDown();
                // c)
                $(this).children("span").animate({"background-color":"red"});
                // b)
                $(this).children("span:nth-child(2)").animate({"width":"1.87rem"}, "fast");
            } else {
                $(this).siblings("#menu-toggle").slideUp();
                $(this).children("span").animate({"background-color":"black"});
                $(this).children("span:nth-child(2)").animate({"width":"1.37rem"}, "fast");
            }

        }
    })

    // e)
    $("#menu-toggle > li:nth-child(3)").on({
        click:function(){

            $(this).children("ul").stop(false, true)

            if ($(this).children("ul").css("display") == "none") {
                $(this).children("ul").css("display", "block").animate({"left":"0"})
                $(this).children("span").html("-")
            } else {
                $(this).children("ul").animate({"left":"-50vw"}, "fast").fadeOut("fast")
                $(this).children("span").html("+")
            }

        }
    })

    // c)
    $(window).on({
        scroll:function(){

            $("div#hamburger").siblings("#menu-toggle").stop(false, true)
            $("div#hamburger").children("span:nth-child(2)").stop(false, true)
            $("div#hamburger").children("span").stop(false, true)

            $("div#hamburger").siblings("#menu-toggle").slideUp();
            $("div#hamburger").children("span").animate({"background-color":"black"});
            $("div#hamburger").children("span:nth-child(2)").animate({"width":"1.37rem"}, "fast");            
        }
    })

    // f)
    $(window).on({
        resize:function(){
            $("div#hamburger").siblings("#menu-toggle").removeAttr("style")
            $("div#hamburger").children("span").removeAttr("style")
        }
    })

    // Barra social y chat
    // a)
    $("#barra-social").fadeIn()
    // b)
    $("div#chat").fadeIn()

    $("#header-chat1").on({
        click:function(){                      

            // c)
            $(this).siblings("#window-chat").slideDown()
            // d)
            $(this).fadeOut()
            $(this).siblings("#header-chat2").fadeIn()

        }
    })

    $("#header-chat2 > span").on({
        click:function(){

            $(this).parent("#header-chat2").siblings("#window-chat").slideUp()
            $(this).parent("#header-chat2").fadeOut()
            $(this).parent("#header-chat2").siblings("#header-chat1").fadeIn()
        }
    })

    // Botón de compra
    $("article.producto").on({
        mouseenter:function(){
            // a)
            $(this).children("a").css("display","flex")
        },
        mouseleave:function(){
            // b)
            $(this).children("a").slideUp()
        }
    })

    // Flecha y cabecera
    $(window).on({
        scroll:function(){

            $("#go-up").stop(true)
            $("#home-header").stop(false, true)
            
            if ($(this).scrollTop() > 20) {
                // a)
                $("#go-up").fadeIn("fast")
                // b)
                $("#home-header").css({"position":"fixed", "opacity":"90%", "width":"100%"})
            } else {
                $("#go-up").fadeOut("fast")
                $("#home-header").css({"position":"static", "opacity":"100%"})
            }

                  
        }
    })

    // c)
    $("#go-up").on({
        click:function(){
            $("html").animate({"scrollTop":0}, 500) // Tenemos que animar el html con el scrolltop para que vaya arriba
        }
    })

    // Formulario
    // a)
    $("#window-chat > input[required]").on({
        focusout:function(){
            
            if ($(this).val().length == 0) {
                $(this).next("span").css("visibility", "visible")
            } else {
                $(this).next("span").css("visibility", "hidden")
            }
            
        }
    })

    // b)
    $("#mensaje").on({
        input:function(){

            $num = $(this).val().length
            $("#info-caracteres").html("Dispone de " + (100-$num)  + " caracteres")

        }
    })

})