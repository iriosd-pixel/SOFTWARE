//1. Promedio de calificaciones mayores a 70
//Descripción:
//Dadas n calificaciones de estudiantes, calcular el promedio solo de aquellas que sean mayores o iguales a 70.
//Entrada / Proceso:
//Ingresar la cantidad de calificaciones n.
//Leer n notas dentro de un ciclo for.
//Acumular y contar solo las notas ≥ 70.
//Calcular el promedio correspondiente.
//Salida esperada:
//Ingrese número de calificaciones: 5  
//Notas: 65, 80, 90, 50, 75  
//Promedio de notas ≥ 70: 81.67
function promedioCalificacionesMayoresA70(){
let n=0, pro=0, cali=0, cont=0, i=0
n=parseInt(prompt("Ingrese la cantidad de calificaciones a evaluar:"))
for ( i=0;i<n;i++){
    cali=parseFloat(prompt("Ingrese la calificación "+(i+1)+":"))
    if (cali>=70){
        pro=pro+cali
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