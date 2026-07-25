function factoralNumero() {
    let n = parseInt(prompt("Ingrese un número para calcular su factorial:"));
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log(`${n}! = ${fact}`);
}