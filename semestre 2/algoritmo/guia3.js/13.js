function sumadivisoresarre() {
    let  i=1, suma=0, n=0
    numeros = [6, 12, 28]
    for (let j = 0; j < numeros.length; j++) {
    n = numeros[j];
    suma=0
     
    for (i = 1; i <= n; i++) {
        if (n % i === 0) {
            suma+=i
        }
    }
    console.log(n,"→",suma);
}
}
