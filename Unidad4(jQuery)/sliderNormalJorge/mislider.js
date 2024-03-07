$(function () {
  var SliderModule = function () {
    // Creo el objeto que contendrá mi slider y sus items
    var pb = {}

    // Almaceno el slider
    pb.elslider = $("#slider")

    // Almaceno los paneles del slider
    pb.items = {
      panels: pb.elslider.find(".slider-wrapper > li")
    }

    // Variables globales
    var SliderInterval,
      currentSlider = 0,
      nextSlider = 1,
      lengthSlider = pb.items.panels.length

    // Creo un constructor para el slider
    pb.init = function (settings) {
      this.settings = settings ?? { duration: 4000 }

      // creo los controles con js
      var losControles = ''

      // La función para inicializar el slider (el constructor)
      SliderInit()

      // Creo el mismo número de botones que de paneles
      for (let i = 0; i < lengthSlider; i++) {
        losControles += i === 0 ? "<li class='active'></li>" : "<li></li>"
      }

      // Inserto los controles en su contenedor en el HTML
      $('#control-buttons').html(losControles)

      $('#control-buttons li').on({
        click: function () {
          // Al hacer click cambio el panel
          // Controlo que no he clickado en la que ya está mostrandose
          if (currentSlider !== $(this).index()) {
            cambiarPanel($(this).index())
          }
        }
      })
    }

    var SliderInit = function () {
      SliderInterval = setInterval(pb.startSlider, pb.settings.duration)
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

      // Aparición del panel
      paneles.eq(currentSlider).fadeOut('slow')
      paneles.eq(nextSlider).fadeIn('slow')

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
      // Cambio de la bolita
      controles.removeClass('active')
      // Uso el nextSlider porque es el que estoy cambiando para que sea el actual
      controles.eq(indice).addClass('active')
      // Cambio el panel
      paneles.eq(currentSlider).fadeOut('slow')
      paneles.eq(indice).fadeIn('slow')

      // Actualizamos los datos del bucle
      currentSlider = indice
      nextSlider = indice + 1

      // Reactivo el intervalo al cambiar
      SliderInit()
    }

    // Devuelvo el objeto pb
    return pb
  }() // () es para que se ejecute automáticamente

  // Llamo al constructor
  SliderModule.init()

})