//3. Promedio de edades: mayores vs menores de edad
//Descripción:
//Dada una lista con edades de personas, obtener el promedio de los mayores de edad (≥ 18) y de los menores de edad (< 18).
//Entrada:
//edades = [17, 20, 35, 15, 18]
//Proceso:
//Recorrer la lista con un ciclo for.
//Separar acumuladores y contadores para mayores y menores.
//Calcular los promedios correspondientes.
//Salida esperada:
//Promedio de mayores de edad: 24.33  
//Promedio de menores de edad: 16.00
function promedioEdadesMayoresYMenores(){
    let n=0, edades=[], emayor=0, emenor=0, cmayor=0, cmenor=0, i=0
    n=parseInt(prompt("Ingrese la cantidad de personas a evaluar:"))
    for ( i=0;i<n;i++){
        edades[i]=parseInt(prompt("Ingrese la edad de la persona "+(i+1)+":"))
        if (edades[i]>=18){
            emayor=emayor+edades[i]
            cmayor++
        } else {
            emenor=emenor+edades[i]
            cmenor++
        }
    }
    if (cmayor>0){
        emayor=emayor/cmayor
        console.log("El promedio de edades de mayores de edad es:",emayor);
    } else {
        console.log("No hay mayores de edad.");
    }
    if (cmenor>0){
        emenor=emenor/cmenor
        console.log("El promedio de edades de menores de edad es:",emenor);
    } else {
        console.log("No hay menores de edad.");
    }
}