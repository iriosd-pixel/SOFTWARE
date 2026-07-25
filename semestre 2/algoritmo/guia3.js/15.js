function nprimarre() {
    let i=1,s=0,cont=0
    let primo=[]
numeros = [5, 6, 7, 8, 11]
    for (let j = 0; j < numeros.length; j++) {
    n = numeros[j];
    cont=0
    for (i = 1; i <= n; i++) {
        if (n % i === 0) {
            cont+=1
        }
    }
    if (cont===2){
   primo.push(n)
}
}
console.log("Números primos en el arreglo:", primo.join(", "));
    }