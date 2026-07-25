//5. Promedio de números pares e impares
//Descripción:
//Ingresar n números y calcular el promedio de los números pares y de los números impares por separado.
//Entrada / Proceso:
//Ingresar n.
//Leer cada número dentro de un ciclo for.
//Acumular por separado los pares (n % 2 == 0) y los impares (n % 2 != 0).
//Calcular los promedios respectivos.
//Salida esperada:
//Ingrese cantidad de números: 6  
//Valores: 2, 5, 8, 9, 4, 7  
//Promedio de pares: 4.67  
//Promedio de impares: 7.00
function promedioParesEImpares(){
    let n=0, i=0, num=0, spares=0, simpares=0, cpares=0, cimpares=0
    n=parseInt(prompt("Ingrese la cantidad de números a evaluar:"))
    for (i=0;i<n;i++){
        num=parseInt(prompt("Ingrese el número "+(i+1)+":"))
        if (num%2==0){
            spares=spares+num
            cpares++
        }
        if (num%2!=0){
            simpares=simpares+num
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