//4. Comparar longitudes de nombres de ciudades
//Dado un arreglo con nombres de ciudades, identificar cuál tiene más letras.
//Entrada:
//["Milagro", "Guayaquil", "Quito", "Cuenca"]
//Salida:
//"La ciudad con más letras es 'Guayaquil' (9 letras)."
function compararVariasCiudade(){
let n=0, i=0 , ciudades=[], ciudadMasLarga="", lonMasLarga=0, lonActual=0
n=parseInt(prompt("Ingrese la cantidad de ciudades a evaluar:"))
for (i=0;i<n;i++){
    ciudades[i]=prompt("Ingrese el nombre de la ciudad "+(i+1)+":")
}
for (i=0;i<ciudades.length;i++){
    lonActual=ciudades[i].length
    if (lonActual>lonMasLarga){
        lonMasLarga=lonActual
        ciudadMasLarga=ciudades[i]
    }   
}
console.log("La ciudad con más letras es '",ciudadMasLarga,"' (",lonMasLarga,"letras).");
}