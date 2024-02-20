$(document).ready(function () {

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
            lengthSlider = pb.items.panels.length;

        // Creamos el constructor del slider
        pb.init = function(settings) {       
            var loscontroles = "";
            this.settings = settings || {duration:8000} // O me coge lo que hay en settings, o si no hay nada, pues 8000

            SliderInit() // Inicializamos el slider

            // Creamos los controles del slider
            for (let i = 0; i < lengthSlider; i++) {                
                if (i == 0) {
                    loscontroles += "<li class='active'></li>";
                } else {
                    loscontroles += "<li></li>";
                }
            }

            // Insertamos los controles creados en el html
            $("#control-buttons").html(loscontroles);

            $("#control-buttons li").on({
                click:function() {
                    if (currentSlider != $(this).index()) { // Comprobamos que no estamos en la misma foto que sobre la que se da click
                        cambiarPanel($(this).index()) // Cambiamos al panel del que se haya clickado la bolita
                    }                    
                }
            }
            )
        }

        // Función que inicializa el slider
        var SliderInit = function() {                        
            SliderInterval = setInterval(pb.startSlider, pb.settings.duration)
        }

        // Función para los controles del slider
        pb.startSlider = function() {            
            // Recibe el índice del panel a mostrar
            var paneles = pb.items.panels;
            var controles = $("#control-buttons li")


            if (nextSlider >= lengthSlider) { // Cuando llegue al último slider, empezamos del principio
                nextSlider = 0;
                currentSlider = lengthSlider-1;
            }

            // Efectos
            // Eliminamos la clase en todos los controles
            controles.removeClass("active")

            // Añadimos la clase al botoncito actual (para ponerlo azul)
            controles.eq(nextSlider).addClass("active")

            paneles.eq(currentSlider).fadeOut("slow");
            paneles.eq(nextSlider).fadeIn("slow");

            currentSlider = nextSlider;
            nextSlider++;

        }

        var cambiarPanel = function(indice) {
            // Reiniciamos el intervalo de ejecución
            clearInterval(SliderInterval);

            var paneles = pb.items.panels;
            var controles = $("#control-buttons li")

            if (indice >= lengthSlider) { // Cuando llegue al último slider, empezamos del principio
                indice = 0;
            } else if(indice < 0){
                currentSlider = lengthSlider - 1;
            }

            // Eliminamos la clase en todos los controles
            controles.removeClass("active")

            // Añadimos la clase al botoncito actual (para ponerlo azul)
            controles.eq(indice).addClass("active")

            // Efectos
            paneles.eq(currentSlider).fadeOut("slow");
            paneles.eq(indice).fadeIn("slow");

            currentSlider = indice;
            nextSlider = indice + 1;

            // Reactivamos el slider
            SliderInit();

        }

        return pb;

    }() // El () es para que se ejecute automáticamente

    // Llamada al constructor
    SliderModule.init({duration:2000})
});