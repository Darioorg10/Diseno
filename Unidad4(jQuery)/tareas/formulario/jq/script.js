$(document).ready(function () {

    // Control de campo vacío de los campos requeridos
    $("form input").on({
        focusout:function(){
            if ($(this).prop("required") == true) { // Cuando el input sea required
                
                if ($(this).prop("type") == "email") {
                    if ($(this).val().length == 0) {
                        $(this).siblings("#error-email").html("Campo obligatorio*").css("color", "red")
                    } else {
                        $(this).siblings("#error-email").html("")
                    }
                } else {
                    if ($(this).val().length == 0) {
                        $(this).siblings("#error-clave").html("Campo obligatorio*").css("color", "red")
                    } else {
                        $(this).siblings("#error-clave").html("")
                    }
                }            

            }
        }
    })

    // Cada vez que se pulse una tecla en el textarea ponemos el número de carácteres restantes
    $("form textarea").on({
        keydown:function(){
            var a = $(this).val().length
            if (a < 100) {
                var restantes = 100 - a - 1// Calculamos los carácteres
                if (restantes > 0) {
                    $("#info-t-area").html("Dispone de " + restantes + " carácteres").css("color", "green")
                } else {
                    $("#info-t-area").html("Dispone de " + restantes + " carácteres").css("color", "red")
                }
            }                        
        }
    })

    // Usamos el plugin de datepicker
    $("#datepicker").datepicker();

});