function restassucesivas() {
let  numeros = [15, 22, 30]
let j= parseInt(prompt("Ingrese el número para restar sucesivamente:"));
    let  n=0, contador=0
for (let k = 0; k < numeros.length; k++) {
    n = numeros[k]; 
    while (n > j) {
        n -= j;
        contador++;
    }
    console.log(`${numeros[k]} → ${n}`);
}
}