// //mostrar mensaje
// const num= (numero)=>{
//     return numero 
// }

// console.log(num("hola"))

// //suma de nuemeros con funciones flecha
// const sumar=(a, b) =>{
//     return a+b;
// }
// console.log(sumar(8, 4));

// //mostrar mensaje con funciones flecha
// const mensaje =(id)=>{
//     return id;
// }
// console.log(mensaje("hola mundo"))

// //cantidad de nuemero con funciones flecha
// function arreglo1 (cantidad){
//    return cantidad.length
// }
// let respuesta4=arreglo1([1,2,3,4,5,6])
// console.log(respuesta4)

// //promedio de calificaciones con funciones felcha
// const calificaciones= (a, b, c, d)=>{
//     return (a+b+c+d)/4
// }
// let respuesta5=calificaciones([10, 10, 7, 7])
// console.log(respuesta5)

// //presentacion con funciones flecha
// const presente =(edad, nombre)=>{
//     return `Me llamo ${nombre}, tengo ${edad} años`
// }
// console.log (presente(17, "Elkin"))

// //multiplicacion de valores de arreglo por 2 en funcion flecha
//  const multi= (a)=>{
//     let resu=[]
//     for ( let i=0; i<a.length; i++){
//         resu.push(a[i]*2)
//     }
//     return resu
//  }
// console.log(multi([1, 2, 3]))

// //Sacar numeros pares de un arreglo con funcion flecha
// const arreglopar=(numeros6)=>{
//     let par=[];
//         for(let i =0;i<numeros6.length;i++){
//             if (numeros6[i]%2===0){
//                 par.push(numeros6[i]);
//             }
//         }
//         return par;
// }
// console.log(arreglopar([2,4,6,6,5]))

// //multiplicar por 2 los valores de una arreglo en una funcion de orden superior
// const numeros3=[1,2,3,4,5];
// const dobles3=numeros3.filter(n=> n%2===0);
// console.log(dobles3);

// //sacar los nombres pares de un arreglo en una funcion de orden superior
// const nombres=["Isma","Elkin","Chiqui", "Par"]
// const paresss=nombres.filter(a => a.length % 2===0)
// console.log(paresss);

// //filtar valores pares en una funcion de orden superior
// const pares=numeros3.filter(n=> n%2===0);
// console.log(pares)

// //filtar valores imoares en una funcion de orden superior
// const impares=numeros3.filter(n=> n%2!=0);
// console.log(impares)

// //programacion orientada a objetos
// let auto1={ 'Marca': 'CHEBROLE', 'MODELO': 'SUOPRESA' }
// console.log(auto1.Marca, auto1.MODELO)

// let casa={'Nombre': 'Elkin','Edad': '201'}

// console.log(casa.Nombre, casa.Edad)

// //crear objetos
//   function estudiantes(nombres, edad, carrera){
//     this.nombres=nombres
//     this.edad= edad
//     this.carrera= carrera
//   }
//   let estudiantes4= new estudiantes ('Maria', 26, 'Software')
//  console.log(estudiantes4);

//     function laboratorio(computadoras, tipo){
//     this.computador= computadoras   
//     this.tipo= tipo
//   }
//   let estudiantes5= new laboratorio ('Hp', 'gaemer')
//  console.log(estudiantes5);


// function parque(nombre_parque, aisentos, juegos, tipo_piscina, cantidad_canchas){
//     this.nombre_parque= nombre_parque   
//     this.juegos= juegos   
//     this.aisentos= aisentos
//     this.tipo_oiscina= tipo_piscina
//     this.cantidad_canchas= cantidad_canchas
//   }
//   let estudiantes6= new parque ('Milagro', 'verde', 'columpio', 'ovalada', '2')
//   let estudiantes7= new parque ('b', 'verde', 'columpio', 'ovalada', '2')
//   let estudiantes8= new parque ('Milagro', 'verde', 'columpio', 'ovalada', '2')
//   let estudiantes9= new parque ('Milagro', 'verde', 'columpio', 'ovalada', '2')
//  console.log(estudiantes6);


//repaso
//Crea una función que reciba un nombre y retorne:
// const a=(men)=>{
//     return `Hola ${men}`
// }
// console.log(a("ismael"))

// function d(men){
//     return `Hola ${men}`
// }
// console.log(d("ismael"))

// //Crea una función que reciba dos números y retorne su resta.
// const b=(a, b)=>{
//     return `La resta es ${a-b}`
// }
// console.log(b(500, 200))

// function e(a, b){
//     return `La resta es ${a-b}`
// }
// console.log(e(20,8))

// //Crea una función que reciba una edad y retorne:
// const c=(a)=>{
//     return `Tienes ${a}`
// }
// console.log(c(78))

// function f(a){
//     return `Tienes ${a}`
// }
// console.log (f(40))


// //Crea una función flecha que reciba tres números y retorne su promedio.
// const g=(a, b,c)=>{
//     return `El promedio es ${(a+b+c)/3}`
// }
// console.log(g(7,7,7))

// function h(a,b,c){
//      return `El promedio es ${(a+b+c)/3}`
// }
// console.log(h(7,7,7))

// //Crea una función flecha que reciba una temperatura y retorne:
// const i=(a)=>{
//     return`La temperatura es ${a}`
// }
// console.log(i(50))
// function j(a){
//     return `La temperatura es ${a}`
// }
// console.log(i(40))

// //Crea una función flecha que reciba un arreglo y retorne cuántos elementos tiene.
// const k=(a)=>{
//     return a.length
// }
// console.log(k([5,56,4,8]))

// function kk(a){
//     return a.length
// }
// console.log(kk([1,2,3,4]))

// //Crea una función flecha que reciba un arreglo de números y retorne cada número multiplicado por 3.
// const l=(a)=>{
//     let nueva_lista=[]
//     for (let i=0; i<a.length; i++){
//         nueva_lista.push(a[i]*3)
//     }
//     return nueva_lista
// }
// console.log(l([1,1,1,1,1]))

// function ll(a){
//     let nueva_lista=[]
//     for(let i=0; i<a.length;i++){
//         nueva_lista.push(a[i]*3)
//     }
//     return nueva_lista
// }
// console.log(ll([2,2,2,2]))

// //Crea una función flecha que reciba un arreglo y retorne únicamente los números mayores que 10.
// const m=(a)=>{
//     let nueva_lista=[]
//         for(let i=0; i<a.length; i++){
//             if(a[i]>10){
//                 nueva_lista.push(a[i])
//             }
//         }
//     return nueva_lista
// }
// console.log(m([11,11,11]))
 
// function mm(a){
//     let nueva_lista=[]
//         for(let i=0; i<a.length; i++){
//             if(a[i]>10){
//                 nueva_lista.push(a[i])
//             }
//         }
//     return nueva_lista
// }
// console.log(mm([14,15,16]))

// //Crea una función flecha que reciba un arreglo de nombres y retorne únicamente los nombres que tengan más de 5 letras.
// const ñ=(a)=>{
//     let nueva_lista=[]
//     for (let i=0; i<a.length;i++){
//         if (a[i].length%2===0){
//             nueva_lista.push(a[i])
//         }
//     }
//     return nueva_lista
//  }
// console.log (ñ(["Ana","Fernando","Luis","Gabriela"]))

// const ññ=(a)=>{
//     let nueva_lista=[]
//     for (let i=0; i<a.length;i++){
//         if (a[i].length>5){
//             nueva_lista.push(a[i])
//         }
//     }
//     return nueva_lista
//  }
// console.log (ññ(["Ana","Fernando","Luis","Gabriela"]))
 
// function ñññ(a){
//     let nueva_lista=[]
//     for (let i=0; i<a.length;i++){
//         if(a[i].length%2===0){
//             nueva_lista.push(a[i])
//         }
//     }
//     return nueva_lista
// }
// console.log (ñññ(["Ana","Fernando","Luis","Gabriela"]))

// function ññññ(a){
//     let nueva_lista=[]
//     for(let i=0; i<a.length; i++){
//         if (a[i].length>5){
//             nueva_lista.push(a[i])
//         }
//     }
//     return nueva_lista
// }
// console.log (ññññ(["Ana","Fernando","Luis","Gabriela"]))

// 1️⃣ forEach()
// [1, 2, 3].forEach(num => {
//   console.log(num);
// });

// //2️⃣ map()
// const dobles = [1, 2, 3].map(num => num * 2);
// console.log(dobles); // [2, 4, 6]

// //3️⃣ filter()
// const pares = [1, 2, 3, 4].filter(num => num % 2 === 0);
// console.log(pares); // [2, 4]

// //4️⃣ reduce()
// const suma = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0);
// console.log(suma); // 10

// //5️⃣ reduceRight()
// const texto = ["H", "o", "l", "a"].reduceRight((acc, letra) => acc + letra);
// console.log(texto); // "aloH"

// //6️⃣ find()
// const encontrado = [5, 10, 15].find(num => num > 8);
// console.log(encontrado); // 10

// //7️⃣ findIndex()
// const indice = [5, 10, 15].findIndex(num => num > 8);
// console.log(indice); // 1

// //8️⃣ some()
// const hayPar = [1, 3, 4].some(num => num % 2 === 0);
// console.log(hayPar); // true

// //9️⃣ every()
// const todosPares = [2, 4, 6].every(num => num % 2 === 0);
// console.log(todosPares); // true

// //🔟 sort()
// const numeros = [10, 5, 20];
// numeros.sort((a, b) => a - b);
// console.log(numeros); // [5, 10, 20]

// //1️⃣1️⃣ flatMap()
// const resultado = [1, 2, 3].flatMap(num => [num, num * 2]);
// console.log(resultado); // [1, 2, 2, 4, 3, 6]

// const n1=(a)=>{
//   return a
// }
// console.log(n1(5))

// const numero=[1,1,4]
// const par=numero.filter(n=>n%2==0)
// console.log(par)

// const mul=numero.map(n=>n*2)
// console.log(mul)


let arre=[5,3,5,6,5]

const div=arre.filter(n=>n%3===0)
const multi=div.map(n=>n*2)
console.log(div)
console.log(multi)



const n3=(a, b)=>{
  let bandera=false
  for(let i=0; i<a.length;i++){
    if (a[i]===b){
      bandera=true
    } 
  }
  return bandera
}
console.log(n3("hola", "o"))


// let que_haces=["pelabra", "letra", "punto"]
// const n5=(que_haces)=>{
//   let a=0;
//   let suma=0;
//   for(let i=0; i<que_haces.length; i++){
//     for (let j=0;j<que_haces[i].length;j++){
//       suma++;
//     }
//   }
//   return suma
// }
// console.log(n5(que_haces))


// const n55=(que_haces)=>{
//   let sumaa=0;
//   for(let i=0; i<que_haces.length; i++){
//       sumaa += que_haces[i].length;
//     }
//       return sumaa
//   }

// console.log(n55(que_haces))



// //defina dos palbras y q devuelva sib son iguales
// const n9=(a, b)=>{
//   if (a.length=== b.length){
//   return "si son iguales"
//   }else {
//     return "no son iguales"
//   }
// }
// console.log(n9("palabra", "palabra"))

// const compararLongitu=(palabra1,palabra2)=>{
//   let contador1=0;
//   let contador2=0;
//   for(let i=0;i<palabra1.length;i++){
//     contador1 ++
//   }
//   for(let i=0;i<palabra2.length;i++){
//     contador2 ++
//   }
//   if (contador1===contador2){
//       return "si son iguales"
//     }else {
//     return "no son iguales"
//   }


// }



// const n10=(a, b)=>{
//   return(a.length===b.length)? "si son": "no son";
// }
// console.log(n10("palbra", "palabra"))

// function parquee(nombre_parque, aisentos, juegos, tipo_piscina, cantidad_canchas){
//     this.nombre_parque= nombre_parque   
//     this.juegos= juegos   
//     this.aisentos= aisentos
//     this.tipo_oiscina= tipo_piscina
//     this.cantidad_canchas= cantidad_canchas
//   }
//   let estudiantes66= new parquee ('Milagro', 'verde', 'columpio', 'ovalada', '2')
// console.log(estudiantes66);

// //Crea una función que reciba un arreglo y retorne únicamente los números impares.
// let arre7=[7,5,5,6,7,1,2]
// const  pares= arre7.filter(n=>n%2===0)
// console.log(pares)

let casaa={'color': 'cafe','tamaño': 'grande'};


for (let clave in casaa) {      
  console.log (`${clave}: ${casaa[clave]}`);
}

const n4=(a)=>{
  let i=0;
  for (let clave in casaa) {
    i++;
}
return i;
}
console.log(n4(casaa))

//Para obtener todas las propiedades y sus valores de un objeto, puedes usar un for...in:

let casaaa = {
    color: "cafe",
    tamaño: "grande"
};

for (let propiedad in casaaa) {
    console.log(propiedad, casaaa[propiedad]);
}
