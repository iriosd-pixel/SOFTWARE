//Invertir un nombre de producto
//Entrada: "Laptop"
//Salida: "potpaL"
function invertirProducto(){
let producto="", productoInvertido="", i=0,l=0
producto=prompt("Ingrese el nombre de un producto:")
l=producto.length
for ( i=l-1;i>=0;i--){
    productoInvertido=productoInvertido+producto[i]
}
console.log("El nombre del producto invertido es:",productoInvertido);
}