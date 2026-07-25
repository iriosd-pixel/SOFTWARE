//2.	Contar apariciones de una vocal en un título
//o	Entrada: "Programación avanzada"
//o	Salida: "La vocal 'a' aparece 5 veces."
function contarVocales(){
let titulo="", vocal="", contador=0, i=0
titulo=prompt("Ingrese un título:");
vocal=prompt("Ingrese la vocal a buscar:");
vocal=vocal.toLowerCase()
titulo=titulo.toLowerCase()
for(let i=0;i<titulo.length;i++){
if (titulo[i]===vocal){
    contador++
}
}
console.log("La vocal '",vocal,"' aparece",contador,"veces.");
}