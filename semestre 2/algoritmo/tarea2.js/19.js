//4. Mostrar tablas de multiplicar de varios números
//Descripción:
//Dada una lista de números, mostrar la tabla de multiplicar del 1 al 10 para cada uno.
//Entrada:
//numeros = [3, 5]
//Proceso:
//Ciclo externo: recorrer cada número.
//Ciclo interno: multiplicar del 1 al 10.
//Salida esperada:
//Tabla del 3:
//3, 6, 9, 12, 15, 18, 21, 24, 27, 30

//Tabla del 5:
//5, 10, 15, 20, 25, 30, 35, 40, 45, 50
function tablasDeMultiplicarDeVariosNumeros(){
    let n=0, numeros=[], i=0, j=0, multi=[]
    n=parseInt(prompt("Ingrese la cantidad de números para mostrar sus tablas de multiplicar:"))
    for (i=0;i<n;i++){
        numeros[i]=parseInt(prompt("Ingrese el número "+(i+1)+":"))
    }
    for (i=0;i<n;i++){
        console.log("Tabla del",numeros[i]+":");
        multi=[]
        for (j=1;j<=10;j++){
            multi.push(numeros[i]*j)
        }
    }
    console.log(`${multi.join(", ")}`);
}