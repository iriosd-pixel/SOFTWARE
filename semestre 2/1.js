const prompt= require("prompt-sync")()

// Ejercicio 19. Inventario
// Crea una función constructora Producto con:
// codigo
// nombre
// categoria
// precio
// cantidad
// Registra varios productos usando prompt().
// Realiza:
// Usa filter() para obtener productos con mnos de 5 unidades.
// Usa filter() para obtener productos de una categoría específica.
// Usa map() para obtener solamente los nombres.
// Usa map() para calcular el valor de cada producto:
// producto.precio * producto.cantidad
// Presenta todo con ciclos for.

function Inventario(codigo, nombre, categoria, precio, cantidad){
  this.codigo=codigo
  this.nombre=nombre
  this.categoria=categoria
  this.precio=precio
  this.cantidad=cantidad
}
let todos_productos=[]
let cantidad_producto= Number(prompt("Ingrese la cantidad de productos que desea registrar: "))
const registrar_producto=(inventario)=>{
    for(let i=0; i<cantidad_producto; i++){
        console.log("-----REGISTRE EL PRODUCTO "+(i+1)+"-----")
        let codigo=  Number(prompt("Ingrese el codigo del producto: "))
        let nombre=  prompt("Ingrese el nombre del producto: ")
        let categoria= prompt("Ingrese la categoria del producto: ")
        let precio=  Number(prompt("Ingrese el precio del producto: "))
        let cantidad= Number(prompt("Ingrese la cantidad del producto: "))
        
  let producto= new Inventario (codigo, nombre, categoria, precio, cantidad)

  console.log("El producto ha sido registrado correctamente")
  inventario.push(producto)
    }
}
registrar_producto(todos_productos)