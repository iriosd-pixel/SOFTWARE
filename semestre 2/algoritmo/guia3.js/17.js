function  digito() {
    let numeros = [45, 678, 12345]
    let n = 0;
    for (let j = 0; j < numeros.length; j++) {
    n = numeros[j];
    let contador = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        contador++;
    }
    console.log(numeros[j],"→", contador);
}
}