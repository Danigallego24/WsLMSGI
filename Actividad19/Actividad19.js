//Metodo mostrarContadorPares

function mostrarContadorPares() {

    let numeroMinimo = parseInt(document.getElementById('numeroMin').value);
    let numeroMaximo = parseInt(document.getElementById('numeroMax').value);
    let arrayPares = [];
    let contador = 0;
    
    for(let i = numeroMinimo; i <= numeroMaximo; i++) {

        if(i % 2 == 0){

            arrayPares[contador] = i;
            contador++;

        }

    }

    document.getElementById('contador').value = arrayPares;
}

//Metodo conversorTemperatura

function conversorTemperaturaCentigrados() {

    let temperaturaCentigrados = parseInt(document.getElementById('temperaturaCentigrados').value);
    let temperaturaFahrenheit = (temperaturaCentigrados * 9/5) + 32

    document.getElementById('temperaturaFahrenheit').value = temperaturaFahrenheit;
}
function conversorTemperaturaFahrenheit() {

    let tempFahrenheit = parseInt(document.getElementById('tempFahrenheit').value);
    let tempCentigrados = (tempFahrenheit - 32) * 5/9;

    document.getElementById('tempCentigrados').value = tempCentigrados;
}