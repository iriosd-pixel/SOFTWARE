function sumassucesivasarre() {
    let numeros = [2, 3, 4] ;
        let j=parseInt(prompt("Ingrese cuantas veces desea sumar:"));
    for (let k = 0; k < numeros.length; k++) {
    let n = numeros[k];
    let suma=0;
    for (let i = 1; i <= j; i++) {
        suma += n;
    }
    console.log(` ${n} x ${j} = ${suma}`);
}
}