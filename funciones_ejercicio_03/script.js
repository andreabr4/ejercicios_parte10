function DividirNumeros(numero1,numero2){
    var resultado=numero1/numero2;
    alert (resultado)
}

do{
    numero1=prompt("Introduce un número: ")
    numero2=prompt("Introduce otro número diferente: ")
    DividirNumeros(numero1,numero2)
}while (numero2!=0)