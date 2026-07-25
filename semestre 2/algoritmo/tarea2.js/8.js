//3. Invertir los nombres de varios productos
//Dado un arreglo con nombres de productos, mostrar cada uno invertido.
//Entrada:
//["Laptop", "Celular", "Tablet"]
//Salida:
//"Laptop" → "potpaL"  
//"Celular" → "raluleC"  
//"Tablet" → "telbaT"
function invertirVariosProductos(){
let n=0, productos=[], productoInvertido="", l=0, pro="",i=0,j=0
n=parseInt(prompt("Ingrese la cantidad de productos a evaluar:"))
for (let i=0;i<n;i++){
    productos[i]=prompt("Ingrese el nombre del producto "+(i+1)+":")
}
l=productos.length
for (let i=0;i<productos.length;i++){
    pro=productos[i]
    productoInvertido=""
    l=pro.length
for ( j=l-1;j>=0;j--){
    productoInvertido=productoInvertido+pro[j]
}
console.log("El nombre del producto invertido es:",productoInvertido);
}
}