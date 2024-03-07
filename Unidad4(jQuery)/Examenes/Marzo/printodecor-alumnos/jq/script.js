$(document).ready(function () {
    // 1. Menú principal
    // a
    $("div#hamburger").on("click", function () {
        $("ul#menu-toggle").stop(false, true);
        $("div#hamburger>span:nth-child(2)").stop(false, true);
        $("div#hamburger>span").stop(false, true);

        if ($("ul#menu-toggle").css("display") == "none") {
            $("ul#menu-toggle").slideDown()
            // c
            $("div#hamburger>span").animate({ "background-color": "#2BD3C6" }, "fast")
            // b
            $("div#hamburger>span:nth-child(2)").animate({ "width": "1.87rem" }, "fast")
        } else {
            $("ul#menu-toggle").slideUp()
            // b
            $("div#hamburger>span:nth-child(2)").animate({ "width": "1.37rem" })
            // c
            $("div#hamburger>span").animate({ "background-color": "black" })
        }
    })

    //d
    $(window).scroll(function () {
        $("ul#menu-toggle").stop(false, true);
        $("div#hamburger>span:nth-child(2)").stop(false, true);
        $("div#hamburger>span").stop(false, true);

        $("ul#menu-toggle").slideUp()
        // b
        $("div#hamburger>span:nth-child(2)").animate({ "width": "1.37rem" })
        // c
        $("div#hamburger>span").animate({ "background-color": "black" })
    })

    // e
    $("ul#menu-toggle>li:nth-child(3)").on("click", function () {

        if ($(this).children("ul").css("display") == "none") {
            $(this).children("ul").css("display", "block").animate({
                "left": "0",
            })
            $(this).children("span").text("-");
        } else {
            $(this).children("ul").animate({
                "left": "-50vw",
            }).fadeOut("fast")
            $(this).children("span").text("+");
        }

    })

    $(window).on("resize", function () {
        // Elimina el código insertado en tiempo de ejecución asociado al menú
        $("div#hamburger>span").stop(false, true);
        $("div#hamburger>span:nth-child(2)").stop(false, true);
        $("#menu-toggle").removeAttr("style");
        $("#hamburger").removeAttr("style");
        $("div#hamburger>span").animate({ "background-color": "black" })
        $("div#hamburger>span:nth-child(2)").animate({ "width": "1.37rem" })
    });

    // 2. Barra social y chat
    


})