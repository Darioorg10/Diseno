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

            // Movemos el menú a la derecha (lo mostramos)
            $("#menu").animate({"left" : 0}, 500);

            // Movemos la página a la derecha
            $("#desplazable").animate(
                {"left":"288px"}, 500 // Movemos la página a la derecha (lo que ocupa el menú)
            ).css("overflow", "hidden")

            // Ponemos la página oscura
            $("#oscuro").fadeIn()            

        }
    })

    // Cuando se le de click sobre la parte oscura se oculta el menú
    $("#oscuro").on({
        click: function() {
            
            // Movemos el menú a la izquierda (lo ocultamos)
            $("#menu").animate({"left" : "-20rem"}, 500);

            // Ocultamos la parte oscura
            $(this).fadeOut()

            // Volvemos a poner la página en su sitio
            $("#desplazable").animate(
                {"left":"0"}, 500
            )

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
    // y nos muestre el botón comprar
    $(".item img").on({
        mouseenter:function() {
            var src = $(this).attr("src") // Cogemos el src actual
            var srcNueva = src.replace(".jpg", "-1.jpg") // Cambiamos la imagen por la otra versión

            $(this).attr("src", srcNueva) // Cambiamos la src

            // Mostramos el botón al entrar
            $(this).parent().parent().siblings("button").stop(false, true);
            $(this).parent().parent().siblings("button").fadeIn();

        },

        mouseleave:function(){
            var src = $(this).attr("src")
            var srcNueva = src.replace("-1.jpg", ".jpg")

            $(this).attr("src", srcNueva)

            // Ocultamos el botón al salir
            $(this).parent().parent().siblings("button").stop(false, true);
            $(this).parent().parent().siblings("button").fadeOut();
        }
    })

    $(".item button").on({
        mouseenter:function(){
            $(this).stop(false, true)
            $(this).css("display", "block") // Dejamos mostrado el botón cuando nos ponemos encima
        }
    })

    // Añadimos el slider
    var SliderModule = function () {    
        var pb = {} // Creamos un objeto
    
        // Almacenamos el #slider en un atributo elslider
        pb.elslider = $("#slider")
    
        // El atributo item es un array que almacena los paneles del slider
        pb.items = {
          panels: pb.elslider.find(".slider-wrapper > li")
        }
    
        // Vamos a crear ciertas variables que nos harán falta en el constructor
        var SliderInterval,
          currentSlider = 0,
          nextSlider = 1,
          lengthSlider = pb.items.panels.length,
          pausado = false // Añadimos una variable que cambia cuando nos ponemos encima
    
        // Creamos el constructor del slider
        pb.init = function (settings) {
          this.settings = settings || { duration: 5000 } // O me coge lo que hay en settings, o si no hay nada, pues 5000 (cada 5 segundos)
    
          // Creamos los controles del slider
          var losControles = ''
    
          // Creamos un array que contenga las imágenes
          var imagenes = 
          ['<img src="https://c2.staticflickr.com/6/5094/5531620171_82185d6285_z.jpg">',
            '<img src="https://c2.staticflickr.com/2/1142/5112412572_6b07684fd6_z.jpg">',
            '<img src="https://c1.staticflickr.com/9/8360/8276578922_f65a266891_z.jpg">',
            '<img src="https://c2.staticflickr.com/4/3534/4569643612_929f475102_z.jpg">'
          ];
          
          SliderInit() // Inicializamos el slider
    
          // Ahora vamos a añadir los botones de izquierda y derecha y su funcionalidad
          const btnIzquierda = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: black;transform: scaleY(-1);msFilter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);"><path d="M20 3h-7.21a2 2 0 0 0-1.987 1.779L10 12H4a2 2 0 0 0 0 4h12l-1.212 3.03a2.001 2.001 0 0 0 1.225 2.641l.34.113a.998.998 0 0 0 1.084-.309l4.332-5.197c.149-.179.231-.406.231-.64V5a2 2 0 0 0-2-2z"></path></svg>'
          const btnDerecha = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: black;transform: ;msFilter:;"><path d="M20 8H8l1.212-3.03a2 2 0 0 0-1.225-2.641l-.34-.113a.998.998 0 0 0-1.084.309L2.231 7.722a1.001 1.001 0 0 0-.231.64V19a2 2 0 0 0 2 2h7.21a2 2 0 0 0 1.987-1.779L14 12h6a2 2 0 0 0 0-4z"></path></svg>'
          $('#izq').html(btnIzquierda)
          $('#der').html(btnDerecha)
          
          $('#izq').on({
            click: function () {
              if (currentSlider === 0)
                cambiarPanel(lengthSlider - 1)
              else
                cambiarPanel(currentSlider - 1)
            }
          })
          $('#der').on({
            click: function () {
              if (currentSlider === lengthSlider - 1)
                cambiarPanel(0)
              else
                cambiarPanel(currentSlider + 1)
            }
          })
    
          // Cuando entramos en la imagen lo paramos
          pb.items.panels.on({ // Quitamos el interval y al salir lo restauramos
            mouseenter: function () {          
              clearInterval(SliderInterval)
            },
            mouseleave: function () {          
              SliderInit();
            }
          })
    
          // Creamos los mismos botones que paneles
          for (let i = 0; i < lengthSlider; i++) {
            losControles += i === 0 ? "<li class='active'>" + imagenes[i] + "</li>" : "<li>" + imagenes[i] + "</li>"
          }
    
          // Insertamos los botones en el controlador y les metemos funcionalidad
          $('#control-buttons').html(losControles);      
          $('#control-buttons li').on({
            click: function () {          
              if (currentSlider !== $(this).index()) { // Comprobamos que no estamos en la misma foto que sobre la que se da click
                cambiarPanel($(this).index()) // Cambiamos al panel del que se haya clickado la bolita
              }
            }, 
            mouseenter: function () {
              $("#foto-enter").stop(false, true)
              $("#foto-enter img").attr("src", $(this).children("img").attr("src")) // Cuando pongamos el ratón encima mostramos la imagen mini
              $("#foto-enter").css({
                "top": $(this).position().top - 90 + "px",
                "left": $(this).position().left - 25 + "px",
              })
              $("#foto-enter").fadeIn();
            },
            mouseleave: function () {
              $("#foto-enter").stop(false, true)
              $("#foto-enter").fadeOut()
            }
          })
        }
    
        var SliderInit = function () {
          if (!pausado) SliderInterval = setInterval(pb.startSlider, pb.settings.duration) // Si no está pausado nos vamos moviendo
        }
    
        pb.startSlider = function () {
          // Cogemos los paneles del slider
          var paneles = pb.items.panels
          // Cogemos los controles
          var controles = $('#control-buttons li')
    
          // Si el slider siguiente se pasa, lo vuelvo a poner al principio, haciendo el bucle
          if (nextSlider >= lengthSlider) {
            nextSlider = 0
          }
    
          // EFECTOS
          // Cambio de la bolita
          controles.removeClass('active')
          // Uso el nextSlider porque es el que estoy cambiando para que sea el actual
          controles.eq(nextSlider).addClass('active')
    
          // Aseguro su posicion
          paneles.eq(nextSlider).css({ "left": "100%", })
          paneles.eq(currentSlider).css({ "left": "0" })
    
          // Animo el movimiento
          paneles.eq(currentSlider).animate({ "left": "-100%", })
          paneles.eq(nextSlider).animate({ "left": "0" })
    
          // Actualizo variables
          currentSlider = nextSlider
          nextSlider++
        }
    
        // Creo una función para controlar los botones del slider
        var cambiarPanel = function (indice) {
          // Limpio el intervalo cuando cambio, para que no se me pase rápido
          clearInterval(SliderInterval)
    
          var paneles = pb.items.panels
          // Cogemos los controles
          var controles = $('#control-buttons li')
    
          // EFECTOS
          // Eliminamos la clase en todos
          controles.removeClass('active')
    
          // Modificamos el botoncito por una bolita
          controles.eq(indice).addClass('active')
    
          // Vamos a añadir unos efectos a las transiciones
          if ((currentSlider === 0 && indice !== lengthSlider - 1) || (currentSlider === lengthSlider - 1 && indice === 0) || (indice > currentSlider && currentSlider !== 0)) {        
            paneles.eq(indice).css({ "left": "100%", })
            paneles.eq(currentSlider).css({ "left": "0" })        
            paneles.eq(currentSlider).animate({ "left": "-100%", })
            paneles.eq(indice).animate({ "left": "0" })
          } else {        
            paneles.eq(indice).css({ "left": "-100%", })
            paneles.eq(currentSlider).css({ "left": "0" })        
            paneles.eq(currentSlider).animate({ "left": "100%", })
            paneles.eq(indice).animate({ "left": "0" })
          }
          
          currentSlider = indice
          nextSlider = indice + 1
    
          // Reactivamos el slider
          SliderInit()
        }
        
        return pb;
    
      }() // El () es para que se ejecute automáticamente
    
      // Llamada al constructor
      SliderModule.init()

});