const holla=(palbra)=>{
  let con=0
  for(let i=0; i<palbra.length; i++){
    if(palbra[i]=== "a"){
      con++;
    }
  }
  return con
}
console.log(holla("holaaa"))

const hollaa=(palabra)=>{
  let conn=0
  for(let letras in palabra){
    if(palabra[letras]=== "a" || palabra[letras]==="A"){
      conn++;
    }
  }
  return conn
}
console.log(hollaa("Ana"))


const holla1=(palbra1)=>{
  let con1=0
  let vocales1=["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  for(let i=0; i<palbra1.length; i++){
      for(let j=0; j<vocales1.length; j++){
    if(palbra1[i]=== vocales1[j]){
      con1++;
    }
  }
}
return con1
}
console.log(holla1("holaeiou"))


const holla11=(palbra11)=>{
  let con11=0
  let vocales11=["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  for(let i=0; i<palbra11.length; i++){
    if(vocales11.includes(palbra11[i])){
      con11++;
    }
  }
  return con11
}

console.log(holla11("holaeiou"))


const voca=(palaabra)=>{
  let con2=0
  for(let i=0; i<palaabra.length; i++){
    if(palaabra[i]=== "a" || palaabra[i]=== "e" ||palaabra[i]=== "i" ||palaabra[i]=== "o" ||palaabra[i]=== "u" ||palaabra[i]=== "A" ||palaabra[i]=== "E" ||palaabra[i]=== "I" ||palaabra[i]=== "O" ||palaabra[i]=== "U"  ){
      con2++;
    }
  }
  return con2
}
console.log(voca("holaaa"))
//diccionario o objetos lav epropiedades y valor caracteristicas 
let carro ={'marca': 'chebrolet', 'año': 788784, 'numero_de_motor': 654654654645}
console.log(carro.año)
console.log(carro['año'])
console.log(carro.numero_de_motor)
let carro2 ={'marca': 'chebrolet', 'año': 788784, 'numero_de_motor': 654654654645}
let auto1 = { marca: "Toyota", año: 2018, numero_de_motor: 100001 };
let auto2 = { marca: "Ford", año: 2020, numero_de_motor: 100002 };


console.log(auto1['marca'])

function Carro(marca, año, numero_de_motor){
  this.marca=marca
  this.año=año
  this.numero_de_motor=numero_de_motor
}
carro1 = new Carro("Toyota", 2018, 100001);
carro2 = new Carro("Ford", 2020, 100002);
carro3 = new Carro("Chevrolet", 2015, 100003);
carro4 = new Carro("Nissan", 2022, 100004);

console.log(carro3)



function celularr(marca, año, numero_chasis,precio){
  this.marca=marca
  this.año=año
  this.numero_chasis=numero_chasis
  this.precio=precio
}
celular1 = new celularr("Samsung", 2023, 10001, 900);
celular2 = new celularr("Nokia", 1198, 10000, 700);
celular3 = new celularr("Xiaomi", 2022, 10003, 300);
celular4 = new celularr("Huawei", 2021, 10004, 500);

 let celulares=[celular1, celular2, celular3, celular4]

const arreglo_celular=(celulares)=>{
  let sumaa=0
  for(let i=0; i<celulares.length; i++){
    sumaa +=celulares[i]['precio']
  }
  return sumaa
}
console.log(arreglo_celular(celulares))