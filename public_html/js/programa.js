function determinarDiaSegunFecha (entrada){
    var fechaTexto = null;
    //Covertir la entrda a un objeto fecha
    var fecha = new Date(entrada.value);
    
    var dia = fecha.getDay();
    
    switch(dia){
        case 0:
            fechaTexto = "El día es Lunes";
            break;
        case 1:
            fechaTexto = "El día es martes";
            break;
        case 2:
            fechaTexto = "El día es miercoles";
            break;
        case 3:
            fechaTexto = "El día es jueves";
            break;
        case 4:
            fechaTexto = "El día es viernes";
            break;
        case 5:
            fechaTexto = "El días es sábado";
            break;
        case 6:
            fechaTexto = "El día es domingo";
            break;
        default:
            fechaTexto = "Valor erroneo de fecha";
    }
    
    document.getElementById("resultado").innerHTML = fechaTexto;
}
