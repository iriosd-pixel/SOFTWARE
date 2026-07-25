//Obtener iniciales de un cargo profesional
//Entrada: "Director General Académico"
//Salida: "D.G.A."
function obtenerIniciales(){
let cargo="", iniciales="", i=0
cargo=prompt("Ingrese un cargo profesional:");

iniciales=iniciales+cargo[0].toUpperCase()+"."
for (i=0;i<cargo.length;i++){
    if (cargo[i]==" "){
        iniciales=iniciales+cargo[i+1].toUpperCase()+"."
    }
}
console.log("Las iniciales del cargo profesional son:",iniciales);
}