//2. Contar números negativos en una lista
//Descripción:
//Dada una lista de números, contar cuántos son negativos.
//Entrada:
//numeros = [3, -5, 0, 7, -1, -8]
//Proceso:
//Usar un ciclo for para recorrer la lista.
//Contar los valores menores a 0.
//Salida esperada:
//Cantidad de números negativos: 3
function contarNumerosNegativosEnLista(){
    let numeros=[], i=0, cont=0, n=0
    n=parseInt(prompt("Ingrese la cantidad de números en la lista:"))
    for (i=0;i<n;i++){
        numeros[i]=parseFloat(prompt("Ingrese el número "+(i+1)+":"))
        if (numeros[i]<0){
            cont++
        }
    }
    console.log("La cantidad de números negativos es:",cont);
}