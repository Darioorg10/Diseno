$(document).ready(function () {
    
    // Política de cookies
    // a)
    $("#cookies > span").on({
        click:function(){
            $(this).parent().slideUp()
        }
    })

    // Menú principal
    $("#hamburger").on({
        click:function(){

            $(document).scrollTop(0)
            $("#menu-toggle").stop(false, true)            
            
            if ($("#menu-toggle").css("left") != "0px") {
                // i)
                $("#menu-toggle").animate({"left":0}, "fast")
                // iii)
                $("#contenido").animate({"left":320}, "fast")
                $("body").css({"overflow":"hidden"})
                // ii)
                $("#shop").fadeOut("fast")
            } else {
                $("#menu-toggle").animate({"left":"-20rem"}, "fast")
                $("#contenido").animate({"left":0}, "fast")
                $("body").css({"overflow":"auto"})
                $("#shop").fadeIn()
                // vi)
                $("#menu-toggle li").children("ul").slideUp()
                $("#menu-toggle li").children("span").children("img").rotate(0)
            }

        }
    })
    
    $("#menu-toggle li").on({
        click:function(){

            $(this).parent("ul").find("ul").stop(false, true)
            $(this).children("ul").stop(false, true)

            $(this).parent("ul").find("ul").slideUp()
            $(this).parent("ul").find("img").rotate(0)
            if ($(this).children("ul").css("display") == "none") {
                // iv)
                $(this).children("ul").slideDown()
                // v)
                $(this).children("span").children("img").rotate(-90)
            } else {
                $(this).children("ul").slideUp()
                $(this).children("span").children("img").rotate(0)
            }            
        }
    })

    // Cabecera y buscador
    $(document).on({
        scroll:function(){

            $("#home-header").stop(false, true)
            $("#promo").stop(false, true)

            if ($(document).scrollTop() > 20) {
                // a)
                $("#home-header").css({"position":"fixed", "width":"100%"})
                // b)
                $("#promo").fadeOut()
            }

            if ($(document).scrollTop() == 0) {
                $("#home-header").css("position", "static")
                $("#promo").fadeIn()
            }

        }
    })

    $("#lupa").on({
        click:function(){

            $("#searcher").stop(false, true)

            if ($("#searcher").css("display") == "none") {
                $("#searcher").fadeIn()
            } else {
                $("#searcher").fadeOut()
            }

        }
    })

});