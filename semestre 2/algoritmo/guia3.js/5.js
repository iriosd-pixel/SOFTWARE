function nprim() {
    let i=1,s=0,cont=0
   let  n = parseInt(prompt("Ingrese un número para encontrar sus divisores:"));
    for (i = 1; i <= n; i++) {
        if (n % i === 0) {
            cont++
        }
    }
    if (cont === 2) {
    console.log( ` ${n} => es un numero primo` ); 
} else {
    console.log( ` ${n} => no es un numero primo` ); 
}   
}
