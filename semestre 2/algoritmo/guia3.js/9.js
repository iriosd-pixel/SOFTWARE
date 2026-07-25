function sumassucesivas() {
    let n=parseInt(prompt("Ingrese un número para calcular la suma sucesiva:"));
    let j=parseInt(prompt("Ingrese cuantas veces desea sumar:"));
    let suma=0;
    for (let i = 1; i <= j; i++) {
        suma += n;
    }
    console.log(`la suma sucesiva de ${n} sumada ${j} veces es: ${suma}`);
}