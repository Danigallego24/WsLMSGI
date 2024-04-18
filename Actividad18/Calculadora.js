function mostrarSuma(numero1, numero2) {

    var resultadoSuma = parseInt(numero1) + parseInt(numero2);
    document.getElementById('resultado').value = resultadoSuma

}
function mostrarResta(numero1, numero2) {

    var resultadoResta = parseInt(numero1) - parseInt(numero2);
    document.getElementById('resultado').value = resultadoResta

}
function mostrarMultiplicacion(numero1, numero2) {

    var resultadoMultiplicacion = parseInt(numero1) * parseInt(numero2);
    document.getElementById('resultado').value = resultadoMultiplicacion

}
function mostrarDivision(numero1, numero2) {

    var resultadoDivision = parseInt(numero1) / parseInt(numero2);
    if(numero2 == 0) {

        alert("Te has ganado un piquito por bobo")
        
    }
    document.getElementById('resultado').value = resultadoDivision

}
