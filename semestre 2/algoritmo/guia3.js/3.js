function divisores() {
    let i=1,s=0
   let  n = parseInt(prompt("Ingrese un número para encontrar sus divisores:"));
    for (i = 1; i <= n; i++) {
        if (n % i === 0) {
            s+=i
        }
    }
    console.log("La suma de los divisores de", n, "es:", s);
}
