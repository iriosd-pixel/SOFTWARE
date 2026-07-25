//Descripción:
//Restar un número de manera repetitiva hasta llegar a 0 o menor.
//Proceso:
//1. Restar el valor dado en cada ciclo.
//2. Contar el número de restas necesarias.
function restassucesivas() {
    let n = parseInt(prompt("Ingrese un número para restar sucesivamente:"));
    let j = parseInt(prompt("Ingrese el valor a restar en cada paso:"));
    let resta=0;
    let contador = 0;
    while (n-j > 0) {
        n -= j;
        contador++;
    }
    console.log(`Se realizaron ${contador} restas sucesivas para llegar a 0 o menos.`);
    console.log(`El valor final es: ${n}`);
}