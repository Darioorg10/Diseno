$(document).ready(function () {
    // Menú principal
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

        if ($(window).scrollTop() >= 50) {
            $("a#go-up").stop(false, true).fadeIn()
        } else {
            $("a#go-up").stop(false, true).fadeOut()
        }

        if ($(window).scrollTop() == 0) {
            $("header#home-header").stop(false, true).css("position", "static")
        } else {
            $("header#home-header").stop(false, true).css({
                "position": "fixed",
                "width": "100%",
                "z-index": "8000",
                "opacity": "0.9"
            })
        }
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

    // Barra social y chat
    //a
    $("nav#barra-social").fadeIn();
    $("div#chat").fadeIn().on("click", function () {
        if ($(this).children("div#window-chat").css("display") == "none") {
            $(this).children("div#window-chat").stop(false, true).slideDown()
            $("header#header-chat1").stop(false, true).css("display", "none")
            $("header#header-chat2").stop(false, true).css("display", "flex")
        }

    })

    $("header#header-chat2>span").on("click", function () {
        $("div#window-chat").stop(false, true).slideUp()
        $("header#header-chat1").stop(false, true).css("display", "flex")
        $("header#header-chat2").stop(false, true).css("display", "none")
    })

    // Botón de compra
    $("main#home>section>article.producto").on({
        mouseenter: function () {
            $(this).children("a").css("display", "flex")
        },
        mouseleave: function () {
            $(this).children("a").slideUp()
        }
    })

    // Flecha y cabecera
    $("a#go-up").on("click", function () {
        $(document).scrollTop(0)
    })

    // Formulario
    $("div#window-chat>input[required]").on("focusout", function () {
        if ($(this).val().length == 0) {
            $(this).next().css("visibility", "visible")
        } else {
            $(this).next().css("visibility", "hidden")
        }
    })

    $("div#window-chat>textarea").on("input", function () {
        $("span#info-caracteres").text("Dispone de " + (100 - $(this).val().length) + " caracteres.")
    })

    // Slider
    var SliderModule = (function () {
        var pb = {};//creamos un objeto
        pb.elslider = $('#slider');
        // el atributo item es un array que almacena los paneles del slider
        pb.items = {

            panels: pb.elslider.find('.slider-wrapper > li'),

        }
        // inicializamos variables
        var SliderInterval,
            currentSlider = 0,
            nextSlider = 1,
            lengthSlider = pb.items.panels.length;

        // constructor del slider
        pb.init = function (settings) {
            var loscontroles = "";
            this.settings = settings || { duration: 5000 }
            // console.log('Inicializado el constructor');
            SliderInit();//para inicializar el slider


            let imagenes = ["img-slider/slider1.jpg", "img-slider/slider2.jpg", "img-slider/slider3.jpg"]
            for (let i = 0; i < lengthSlider; i++) {
                if (i == 0) {
                    loscontroles += '<li class="active"><img src="' + imagenes[i] + '" /></li>';
                } else {
                    loscontroles += '<li><img src="' + imagenes[i] + '" /></li>'
                }
            }

            /***********AQUI AÑADO LA LÓGICA DE LOS BOTONES LATERALES ***********************/
            //insertamos los controles creados en el HTML
            $('#control-buttons').html(loscontroles);

            //insertamos los controles creados en el HTML
            $('#control-buttons').html(loscontroles);

            $('#control-buttons li').click(function () {
                //al hacer clic vemos en consola el indice de la bolita
                // console.log($(this).index()+" indice bolitas");
                if (currentSlider !== $(this).index()) { // controlamos que no este en la foto que queremos ir
                    cambiarPanel($(this).index());
                }
            })

            $("#control-buttons li").on("mouseenter", function (event) {
                $("#contenedor-preview").stop(false, true);
                $("#contenedor-preview>img").attr("src", $(this).children().attr("src"));
                $("#contenedor-preview").css({
                    "bottom": $(window).height() - event.pageY + 35 + "px",
                    "left": event.pageX - 100 + "px",
                })
                // console.log($(window).height() - event.pageY + 20 + "px")
                $("#contenedor-preview").fadeIn("fast");
            })

            $("#control-buttons li").on("mouseleave", function () {
                $("#contenedor-preview").stop(false, true);
                $("#contenedor-preview").fadeOut("fast");
            })
        }
        //funcion que inicializa el slider
        var SliderInit = function () { // esto gestiona la reproducción automatica del slider
            //SliderInterval= setInterval(pb.startSlider,3000);
            SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
        }

        pb.startSlider = function () {
            var paneles = pb.items.panels; // cojemos los paneles del slider
            var controles = $('#control-buttons li');
            //console.log("mensaje cada tres segundos")
            if (nextSlider >= lengthSlider) { // definimos cuando llega al ultimo panel vuelva al principo con la reproduccion automatica
                nextSlider = 0;
                currentSlider = lengthSlider - 1;
            }
            //efectos
            // ekiminamos la clase en todos los controles
            controles.removeClass('active');
            //añadimos la clase al control del panel seleccionado
            controles.eq(nextSlider).addClass('active')
            //efectos transicion
            paneles.eq(currentSlider).fadeOut('slow');
            paneles.eq(nextSlider).fadeIn('slow')
            //actualizamos las variables
            // console.log(nextSlider)
            currentSlider = nextSlider;
            nextSlider += 1;
        }

        // funcion para los controles del slider
        // recibe el inidice del panel a mostrar
        var cambiarPanel = function (indice) {
            clearInterval(SliderInterval);//limpiamos el intervalos
            var paneles = pb.items.panels;
            var controles = $('#control-buttons li');
            //comprobamos que el indice este disponible dentro de los paneles del slider
            if (indice >= lengthSlider) {
                indice = 0; // para que no se pase de la cantidad de imagenes
            } else if (indice < 0) {
                indice = lengthSlider - 1;
            }
            //efectos
            controles.removeClass('active')//eliminmaos la clase en todos los controles
            controles.eq(indice).addClass('active')//añadimos la clase al controls seleccionado

            paneles.eq(currentSlider).fadeOut('slow');

            // el siguiente panel del slider es que el indique el parametro indice
            paneles.eq(indice).fadeIn('slow');

            //actualizamos los datos
            currentSlider = indice;
            nextSlider = indice + 1;
            //reactivamos el slider
            SliderInit();
        }

        pb.stopSlider = function () {
            clearInterval(SliderInterval)
        }

        pb.resumeSlider = function () {
            SliderInit()
        }

        // Agregamos eventos click a los botones laterales
        $('#slider-prev').on('click', function () {
            var nueva = currentSlider - 1;

            console.log(nueva + "Izquierda");
            cambiarPanel(nueva);
        });

        $('#slider-next').on('click', function () {
            var nueva = nextSlider;

            console.log(nueva + "Derecha");
            cambiarPanel(nueva);
        });
        return pb; // devolvemos el objeto
    }());
    // llamamos al constructor
    SliderModule.init({ duration: 5000 });


    /*   /****************Función añadida para el slider se detenga*******************  TENGO QUE modificar
                // Agregamos eventos para detener/reanudar el slider cuando el ratón está sobre él
                pb.elslider.on('mouseenter', function () {
                 clearInterval(SliderInterval);
             });
     
             pb.elslider.on('mouseleave', function () {
                 SliderInit();
             });
              */

    // $("#slider > ul>li  > img").on({
    //     mouseenter: function () {
    //         console.log("entra");
    //         SliderModule.stopSlider();
    //     },
    //     mouseleave: function () {
    //         SliderModule.resumeSlider()
    //     }
    // })

    $("#slider > ul>li  > div").on({
        mouseenter: function () {
            console.log("entra");
            SliderModule.stopSlider();
        },
        mouseleave: function () {
            SliderModule.resumeSlider()
        }
    })


})