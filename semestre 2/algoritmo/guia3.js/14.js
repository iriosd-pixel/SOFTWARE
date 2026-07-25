function perfectosarre() {
    let  i=1, suma=0, n=0
    let perfectos = []
    numeros = [6, 10, 28, 30]
    for (let j = 0; j < numeros.length; j++) {
    n = numeros[j];
    suma=0
     
    for (i = 1; i <= n-1; i++) {
        if (n % i === 0) {
            suma+=i
        }
    }
    if (suma===n){
        perfectos.push(n)
}
}
console.log("Números perfectos en el arreglo:", perfectos.join(", "));
    }
