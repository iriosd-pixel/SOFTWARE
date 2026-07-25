//5. Obtener iniciales de varios cargos profesionales
//Dado un arreglo con nombres de cargos profesionales, obtener las iniciales de cada uno.
//Entrada:
//["Director General Académico", "Jefe de Laboratorio", "Asistente Administrativo"]
//Salida:
//"Director General Académico" → D.G.A.  
//"Jefe de Laboratorio" → J.D.L.  
//"Asistente Administrativo" → A.A.
function obtenerInicialesVariosCargos(){
let n=0, cargos=[], iniciales="", i=0,j=0
n=parseInt(prompt("Ingrese la cantidad de cargos profesionales a evaluar:"))
for (i=0;i<n;i++){
    cargos[i]=prompt("Ingrese el cargo profesional "+(i+1)+":")
}
for (i=0;i<cargos.length;i++){
    iniciales=""
    iniciales=iniciales+cargos[i][0].toUpperCase()+"."
    for (j=0;j<cargos[i].length;j++){
        if (cargos[i][j]==" "){
            iniciales=iniciales+cargos[i][j+1].toUpperCase()+"."
        }
    }
    console.log(`${cargos[i]} +  =>  + ${iniciales}`);
}
}