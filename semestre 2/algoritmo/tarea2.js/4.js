//Comparar nombres de ciudades por longitud
//Entrada: "Milagro" y "Guayaquil"
//Salida: "La palabra 'Guayaquil' tiene más letras."
function compararCiudades(){
let ciudad1="", ciudad2="",l1,l2
ciudad1=prompt("Ingrese el nombre de la primera ciudad:");
ciudad2=prompt("Ingrese el nombre de la segunda ciudad:");
l1=ciudad1.length
l2=ciudad2.length
if (l1>l2){
    console.log("La palabra '",ciudad1,"' tiene más letras.");
} else{
    console.log("La palabra '",ciudad2,"' tiene más letras.");
}
}