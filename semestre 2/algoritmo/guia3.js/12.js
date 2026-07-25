function divisores() {
    let  i=1,n=0
    numeros = [6, 10, 15]
    for (let j = 0; j < numeros.length; j++) {
    n = numeros[j];
    divisores = [];
     
    for (i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisores.push(i);
        }
    }
    console.log(`${n} → ${divisores.join(", ")}`);
}
}
