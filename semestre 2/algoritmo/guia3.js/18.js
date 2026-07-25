
function factoralNumeroarre() {
    let numeros = [3, 4, 5];
    for (let j = 0; j < numeros.length; j++) {
    let n = numeros[j];
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log(`${n}! = ${fact}`);
}
}