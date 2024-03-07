$(document).ready(function () {

    // Política de cookies
    // a
    $("div#cookies>span").on("click", function () {
        $(this).parent().slideUp();
    })

    // Menú principal
    // i
    $("div#contenido>header#home-header>div#hamburger").on("click", function () {
        if ($("nav#main-menu>ul#menu-toggle").css("left") != "0px") {
            $("nav#main-menu>ul#menu-toggle").animate({ "left": "0px" }, "fast")
            // iii
            $("div#contenido").animate({ "left": $("nav#main-menu>ul#menu-toggle").css("width") }, "fast")
            $("body").css("overflow", "hidden")
            // ii
            $("main#articulo>article.producto>a#shop>span").fadeOut("fast")
        } else { // vi
            $("nav#main-menu>ul#menu-toggle>li>ul").slideUp();
            $("nav#main-menu>ul#menu-toggle>li>span>img").rotate(0)
            $("nav#main-menu>ul#menu-toggle").animate({ "left": "-320px" }, "fast")
            // iii
            $("div#contenido").animate({ "left": "0px" }, "fast")
            $("body").css("overflow", "auto")
            // ii
            $("main#articulo>article.producto>a#shop>span").fadeIn("fast")
        }
    })

    // iv
    $("nav#main-menu>ul#menu-toggle>li").on("click", function () {
        $("nav#main-menu>ul#menu-toggle>li>ul").stop(false, true);
        $("nav#main-menu>ul#menu-toggle>li>span>img").stop(false, true);
        if ($(this).children("ul").css("display") == "none") {
            $("nav#main-menu>ul#menu-toggle>li>ul").slideUp();
            $(this).children("ul").slideDown();
            // v
            $("nav#main-menu>ul#menu-toggle>li>span>img").rotate(0)
            $(this).children("span").children("img").rotate(-90)
        } else {
            $(this).children("ul").slideUp();
            // v
            $(this).children("span").children("img").rotate(0)
        }
    })

    // vi
    $(window).resize(function () {
        $("nav#main-menu>ul#menu-toggle>li>ul").slideUp();
        $("nav#main-menu>ul#menu-toggle>li>span>img").rotate(0)
        $("nav#main-menu>ul#menu-toggle").animate({ "left": "-320px" }, "fast")
        // iii
        $("div#contenido").animate({ "left": "0px" }, "fast")
        $("body").css("overflow", "auto")
        // ii
        $("main#articulo>article.producto>a#shop>span").fadeIn("fast")
    })

    // Cabecera y buscador
    // a
    $(window).scroll(function () {
        $("header#home-header").stop(false, true);
        $("header#home-header>div#promo").stop(false, true);
        if ($(document).scrollTop() == 0) {
            $("header#home-header").css({ "position": "static" })
            // b
            $("header#home-header>div#promo").fadeIn();
        } else {
            $("header#home-header").css({ "position": "fixed" })
            // b
            $("header#home-header>div#promo").fadeOut("fast");
            $("header#home-header").css({ "width": "100%" })
        }
    })

    // c
    $("div#contenido>header#home-header>nav#iconos>ul>li>a>picture>img#lupa").on("click", function () {
        if ($("div#contenido>header#home-header>div#searcher").css("display") == "none") {
            $("div#contenido>header#home-header>div#searcher").fadeIn();
        } else {
            $("div#contenido>header#home-header>div#searcher").fadeOut();
        }
    })

    $("div#contenido>header#home-header>div#searcher>span").on("click", function () {
        $("div#contenido>header#home-header>div#searcher").fadeOut();
    })

    // Proceso de compra
    // a
    $("main#articulo>article.producto>a#shop>span").on("click", function () {
        $("div#contenido>header#home-header>div#shopping").slideDown().delay(1000).slideUp();
        // b
        $("div#contenido>header#home-header>nav#iconos>ul>li:last-child>a").text("(" + (parseInt($("div#contenido>header#home-header>nav#iconos>ul>li:last-child>a").text().substring(1, 2)) + 1) + ")");
    })

    // Detalles del producto
    // a
    $("main#articulo>article.producto>ul>li:nth-child(1)").on("click", function () {
        if ($(this).siblings().css("display") == "none") {
            $("main#articulo>article.producto>ul>li").css("display", "none")
            $("main#articulo>article.producto>ul>li:nth-child(1)").css("display", "flex")
            $("main#articulo>article.producto>ul>li>img").rotate(0)
            $(this).siblings().slideDown();
            // b
            $(this).children("img").rotate(180);
        } else {
            $(this).siblings().slideUp();
            // b
            $(this).children("img").rotate(0);
        }
    })

    // WhisList
    // a
    $("main#articulo>article.producto>picture#wishlist").on("click", function () {
        if ($(this).children().attr("src") == "img/heart.png") {
            $(this).children().attr("src", "img/heart-full.png")
        } else {
            $(this).children().attr("src", "img/heart.png")
        }
    })

    // Formulario
    // a
    $("footer>div#newsletter>form#form-newsletter>input#mail").on("focusout", function () {
        if ($(this).val().length == 0) {
            $(this).next().css("visibility", "visible")
        } else {
            $(this).next().css("visibility", "hidden")
        }
    })

    // d
    $("footer>div#newsletter>form#form-newsletter>input[type='submit']").on({
        click: function (e) {
            e.preventDefault();
            // b
            if ($("footer>div#newsletter>form#form-newsletter>input#mail").val().length == 0) {
                $("footer>div#newsletter>form#form-newsletter>input#mail").next().css("visibility", "visible")
                return;
            } else {
                $("footer>div#newsletter>form#form-newsletter>input#mail").next().css("visibility", "hidden");
                // c
                if (!$("footer>div#newsletter>form#form-newsletter>div>div>input#politica").prop("checked")) {
                    $("footer>div#newsletter>form#form-newsletter>div>span").css("visibility", "visible");
                    return;
                } else {
                    $("footer>div#newsletter>form#form-newsletter>div>span").css("visibility", "hidden");
                }
            }
        },
        mouseenter: function () {
            $(this).animate({
                "background-color": "black",
                "color": "white"
            }, "fast")
        },
        mouseleave: function () {
            $(this).animate({
                "background-color": "white",
                "color": "black"
            }, "fast")
        }
    })

})