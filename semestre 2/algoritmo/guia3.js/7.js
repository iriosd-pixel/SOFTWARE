function  digito() {
    let n = parseInt(prompt("ingrese numero para conatr sus digitos:"));
    let contador = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        contador++;
    }
    console.log("la cantidad de digitos es: " + contador);
}