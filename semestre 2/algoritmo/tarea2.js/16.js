//1. Promedio de calificaciones mayores a 70
//Descripción:
//Dada una lista de calificaciones, calcular el promedio solo de aquellas que sean mayores o iguales a 70.
//Entrada:
//calificaciones = [65, 80, 90, 50, 75]
//Proceso:
//Recorrer la lista con un ciclo for.
//Sumar y contar solo las calificaciones ≥ 70.
//Calcular el promedio correspondiente.
//Salida esperada:
//Promedio de calificaciones ≥ 70: 81.67
function promedioCalificacionesMayoresA70(){
let n=0, pro=0, cali=[], cont=0, i=0
n=parseInt(prompt("Ingrese la cantidad de calificaciones a evaluar:"))
for ( i=0;i<n;i++){
    cali[i]=parseFloat(prompt("Ingrese la calificación "+(i+1)+":"))
    if (cali[i]>=70){
        pro=pro+cali[i]
        cont++
    }   
}
if (cont>0){
    pro=pro/cont
    console.log(`Promedios de notas >=70 es: ${pro}`);
} else {
    console.log("No hay calificaciones mayores o iguales a 70.");
}
}