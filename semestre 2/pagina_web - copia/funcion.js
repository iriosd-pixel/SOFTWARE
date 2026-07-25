let segundos = 0;
let minutos = 0;
let intervalo;


const cronometro = document.getElementById("cronometro");
const iniciar = document.getElementById("iniciar");
const detener = document.getElementById("detener");
const reiniciar = document.getElementById("reiniciar");
const entrada = document.getElementById("entrada");
const salida = document.getElementById("salida");
const boton = document.getElementById("boton");

detener.style.display = "none";
reiniciar.style.display = "none";

function actualizar() {
    segundos++;

    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }

    cronometro.textContent =
        String(minutos).padStart(2, "0") + ":" +
        String(segundos).padStart(2, "0");
}

iniciar.addEventListener("click", () => {  
    if (!intervalo) {
        intervalo = setInterval(actualizar, 1000);
    }

    detener.style.display = "inline-block";
    reiniciar.style.display = "inline-block";
});
detener.addEventListener("click", () => {
    clearInterval(intervalo);
    intervalo = null;
});

reiniciar.addEventListener("click", () => {
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    minutos = 0;
    cronometro.textContent = "00:00";

    detener.style.display = "none";
    reiniciar.style.display = "none";
});


boton.addEventListener("click", () => {
    salida.value = entrada.value;
});
