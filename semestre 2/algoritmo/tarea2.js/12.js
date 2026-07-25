//2. Contar cuántos números negativos se ingresan
//Descripción:
//Ingresar n números y contar cuántos son negativos.
//Entrada / Proceso:
//Leer n.
//Usar un ciclo for o while para pedir los números.
//Contar los valores menores a 0.
//Salida esperada:
//Ingrese cuántos números desea ingresar: 6  
//Valores: 3, -5, 0, 7, -1, -8  
//Cantidad de negativos: 3
function contarNumerosNegativos(){
    let n=0, i=0, num=0, cont=0
    n=parseInt(prompt("Ingrese la cantidad de números a evaluar:"))
    for (i=0;i<n;i++){
        num=parseFloat(prompt("Ingrese el número "+(i+1)+":"))
        if (num>0){
            cont++
        }
    }
    console.log("La cantidad de números negativos es:",cont);
}