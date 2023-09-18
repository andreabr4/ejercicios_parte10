cantidadEuros = prompt("Introduce un número: ");
nuevaMoneda = prompt ("¿A qué moneda quieres hacer el cambio (libras, dólares, yenes): ");

function cambioEuros(cantidadEuros, nuevaMoneda){

    var cambioLibra = cantidadEuros*0.86;
    var cambioDolar = cantidadEuros*1.28611;
    var cambioYenes = cantidadEuros*129.852;
    
    if (nuevaMoneda == "libras"){
        alert(cantidadEuros +" son "+cambioLibra+" libras")
    } else if (nuevaMoneda == "dólares"){
        alert(cantidadEuros +" son "+cambioDolar+" dólares")
    } else if (nuevaMoneda == "yenes"){
        alert(cantidadEuros +" son "+cambioYenes+" yenes")
    }
 }

cambioEuros (cantidadEuros, nuevaMoneda)