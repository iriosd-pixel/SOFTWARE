
function promedioParesEImpares(){
    let n=0, i=0, numeros=[], spares=0, simpares=0, cpares=0, cimpares=0
    n=parseInt(prompt("Ingrese la cantidad de números a evaluar:"))
    for (i=0;i<n;i++){
        numeros[i]=parseInt(prompt("Ingrese el número "+(i+1)+":"))
        if (numeros[i]%2==0){
            spares=spares+numeros[i]
            cpares++
        } else {
            simpares=simpares+numeros[i]
            cimpares++
        }
    }
    if (cpares>0){
        spares=spares/cpares
        console.log("El promedio de números pares es:", spares);
    } else {
        console.log("No hay números pares.");
    }
    if (cimpares>0){
        simpares=simpares/cimpares
        console.log("El promedio de números impares es:", simpares);
    }
    else {
        console.log("No hay números impares.");
    }
}