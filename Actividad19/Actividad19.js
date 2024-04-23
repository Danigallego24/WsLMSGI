//Metodo mostrarContadorPares

function mostrarContadorPares() {

    let numeroMinimo = parseInt(document.getElementById('numeroMin').value);
    let numeroMaximo = parseInt(document.getElementById('numeroMax').value);
    let arrayPares = [];
    let contador = 0;

    for (let i = numeroMinimo; i <= numeroMaximo; i++) {

        if (i % 2 == 0) {

            arrayPares[contador] = i;
            contador++;

        }

    }

    document.getElementById('contador').value = arrayPares;
}

//Metodo conversorTemperatura

function conversorTemperaturaCentigrados() {

    let temperaturaCentigrados = parseInt(document.getElementById('temperaturaCentigrados').value);
    let temperaturaFahrenheit = (temperaturaCentigrados * 9 / 5) + 32

    document.getElementById('temperaturaFahrenheit').value = temperaturaFahrenheit;
}
function conversorTemperaturaFahrenheit() {

    let tempFahrenheit = parseInt(document.getElementById('tempFahrenheit').value);
    let tempCentigrados = (tempFahrenheit - 32) * 5 / 9;

    document.getElementById('tempCentigrados').value = tempCentigrados;
}
function adivinarNumero() {

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let intentoNumero;
    let contadorIntentos = 0;

    while (intentoNumero !== randomNumber) {

        intentoNumero = parseInt(prompt("Adivina el número entre 1 y 100:"));

        if (intentoNumero < randomNumber) {

            alert("Muy bajo. Intenta de nuevo.");

        } else if (intentoNumero > randomNumber) {

            alert("Muy alto. Intenta de nuevo.");

        } else {

            alert("ACERTASTE ENHORABUENA");

        }

        contadorIntentos++;

    }

}

function cambiarColorPag() {

    let colorPag = document.getElementById('colorPag').value;

    document.body.style.backgroundColor = colorPag;

}

function introducirContrasenyaUsuario() {

    let usuario = document.getElementById('usuario').value;
    let contrasenya = document.getElementById('contrasenya').value;

    if (usuario === "goku" && contrasenya === "Vegeta777") {

        alert("Bienvenute un pikito??");

    } else {

        alert("Ohhhhh fallaste rey");

    }

}

function verificarSiEsPrimo() {

    let numero = parseInt(document.getElementById('numero').value);
    let esPrimo = true;

    if (numero <= 1) {

        esPrimo = false;

    } else {

        for (let i = 2; i <= Math.sqrt(numero); i++) {

            if (numero % i === 0) {

                esPrimo = false;

                break;

            }

        }

    }

    if (esPrimo) {

        alert(numero + ' EL PRIMOOOOO!!!!!.');

    } else {

        alert(numero + ' no es un número primo.');

    }

}

function generateFibonacci() {

    let numeroN = parseInt(document.getElementById('fibonacci').value);
    let fibonacci = [0, 1];

    for (let i = 2; i < numeroN; i++) {

        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];

    }

    for (let i = 0; i < numeroN; i++) {

        console.log(fibonacci[i]);

    }
}