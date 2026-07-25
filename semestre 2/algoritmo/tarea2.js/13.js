//3. Promedio de edades: mayores vs menores de edad
//Descripción:
//Dadas las edades de un grupo de personas, obtener el promedio de los mayores de edad (≥ 18 años) y de los menores de edad (< 18 años).
//Entrada / Proceso:
//Ingresar el número de personas n.
//Leer las edades una por una con un ciclo.
//Mantener contadores y acumuladores separados para mayores y menores.
//Calcular los promedios respectivos.
///Salida esperada:
//Ingrese número de personas: 5  
//Edades: 17, 20, 35, 15, 18  
//Promedio de mayores de edad: 24.33  
//Promedio de menores de edad: 16.00
function promedioEdadesMayoresYMenores(){
    let n=0, edades=0, emayor=0, emenor=0, cmayor=0, cmenor=0, i=0
    n=parseInt(prompt("Ingrese la cantidad de personas a evaluar:"))
    for ( i=0;i<n;i++){
        edades=parseInt(prompt("Ingrese la edad de la persona "+(i+1)+":"))
        if (edades>=18){
            emayor=emayor+edades
            cmayor++
        } else {
            emenor=emenor+edades
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