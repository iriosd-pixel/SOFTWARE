function divisores() {
    let i=1,s=0
   let  n = parseInt(prompt("Ingrese un número para encontrar sus divisores:"));
    for (i = 1; i <= n-1; i++) {
        if (n % i === 0) {
            s+=i
        }
    }
    if (s === n) {
        console.log(n, "es un número perfecto.");
    } else {
        console.log(n, "no es un número perfecto.");
    }
}
