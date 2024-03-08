$(function () {
    
    // Menú principal
    $("#menu-principal > label").on({
        click:function(){

            $("#menu-toggle").stop(false, true)
            $(this).children("span").stop(false, true)

            if ($("#menu-toggle").css("display") == "none") {
                // a)
                $("#menu-toggle").slideDown()
                // b)
                $(this).children("span").animate({"color":"#e9a140"})
            } else {
                $("#menu-toggle").slideUp()
                $(this).children("span").animate({"color":"white"})
                // f)
                $("#menu-toggle li > ul").slideUp()
                $("#menu-toggle span.angulo").rotate({angle:-90, animateTo:0})
                $("#menu-toggle a").animate({"color":"white"})  
            }
        }
    })

    // c)
    $("#menu-toggle li").on({
        click:function(){
                                                
            $(this).parent().find("a").stop(false, true)
            $(this).children("a").stop(false, true)
            $(this).children("ul").stop(false, true)

            $(this).parent().find("ul").slideUp()
            $(this).parent().find("span.angulo").rotate(0)
            $(this).parent().find("a").animate({"color":"white"})                

            if ($(this).children("ul").css("display") == "none") {
                // d)
                $(this).children("a").animate({"color":"#e9a140"})
                $(this).children("ul").slideDown()
                // e)
                $(this).children("a").children("span.angulo").rotate({angle:0, animateTo:-90})
            } else {
                $(this).children("a").animate({"color":"white"})
                $(this).children("ul").slideUp()
                $(this).children("a").children("span.angulo").rotate({angle:-90, animateTo:0})
            }            
        }
    })

    // g)
    $(document).on({
        scroll:function(){            

            if ($("#menu-toggle").css("display") != "none") {
                $("#menu-toggle").slideUp()
                $("#menu-toggle").siblings("label").children("span").animate({color:"white"})
                $(this).children("span").animate({"color":"white"})                
                $("#menu-toggle li > ul").slideUp()
                $("#menu-toggle span.angulo").rotate({angle:-90, animateTo:0})
                $("#menu-toggle a").animate({"color":"white"})
            }

        }
    })

    // h)
    $(window).on({
        resize:function(){
            $("#menu-toggle li > ul").removeAttr("style")
            $("#menu-toggle li a").removeAttr("style")
            $("#menu-toggle").removeAttr("style")
            $("#menu-principal").find("span").removeAttr("style")
        }
    })

    // Icono y botón de compra
    // a)
    $("article.item-sec > img").on({
        click:function(){
            
            $("#cartel").stop(true)
            
            var posicion = $(this).offset()

            $("#cartel").css({
                "top":(posicion.top-10),
                "left":(posicion.left - 250),                
            }).fadeIn(1000).delay(1500).fadeOut(1000)

        }
    })

    // b)
    $("article.item-sec > input").on({
        click:function(){
            
            $("#cartel").stop(true)
            
            var posicion = $(this).offset()

            $("#cartel").css({
                "top":(posicion.top-50),
                "left":(posicion.left),
            }).fadeIn(1000).delay(1500).fadeOut(1000)

        }
    })

    // Cookies
    // a)
    $("div#cookies").css("display", "flex");
    // b)
    $("div#cookies span").on({
        click:function(){
            $(this).parent().fadeOut()
        }
    })

    // Formulario
    $($("#email")).on({
        focusout:function(){

            if ($(this).val().length == 0) {
                $(this).next("span").css("visibility", "visible")
            } else {
                $(this).next("span").css("visibility", "hidden")
            }

        }
    })

    $($("#pswd")).on({
        focusout:function(){

            if ($(this).val().length == 0) {
                $(this).next("span").css("visibility", "visible")
            } else {
                $(this).next("span").css("visibility", "hidden")
            }            
        }
    })

});