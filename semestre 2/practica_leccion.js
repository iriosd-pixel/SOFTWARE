function mascotas(nombre, especie, edad, costoAdopcion){
    this.nombre=nombre
    this.especie=especie
    this.edad=edad
    this.costoAdopcion=costoAdopcion
}
let mascota1=new mascotas('firulai', 'perro', 5, 25)
let mascota2=new mascotas('sandocan', 'perro', 6, 20)
let mascota3=new mascotas('conejo', 'conejo', 1, 10)
let mascota4=new mascotas('muñeco', 'gato', 1, 25)
let mascota5=new mascotas('lasi', 'chancho', 2, 50)
let mascota6=new mascotas('chocolate', 'perro', 4, 25)
let mascota7=new mascotas('kimo', 'gato', 2, 20)

let arreglo_mascotas=[mascota1, mascota2, mascota3, mascota4, mascota5, mascota6, mascota7]

const procesarMascotas=(mascotas)=>{
    let totalCostos=0
    let cantidadPerros=0
    let mascotaJOven= mascotas[0]
    for (let i=0; i<mascotas.length; i++){
        totalCostos+= mascotas[i].costoAdopcion
        if(mascotas[i].especie.toLowerCase()=="perro"){
            cantidadPerros++
        }
        if (mascotas[i].edad<mascotaJOven.edad){
            mascotaJOven=mascotas[i]
        }
    }
    return{
        totalCostos,
        cantidadPerros,
        mascotaJOven
    }
}
console.log(procesarMascotas(arreglo_mascotas))