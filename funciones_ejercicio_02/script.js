function EsMayor(numero1,numero2){
    if (numero1>numero2){
        return true 
    }else{
        return false
    }
}

numero1=prompt("Introduce un valor: ")
numero2=prompt("Introduce otro valor diferente: ")

respuesta = EsMayor(numero1,numero2)
if (respuesta==true){
    console.log ("El primer número es más grande");
}else{
    console.log ("El primer número no es más grande")
}
