const prompt = require("prompt-sync")();

//almacen 
const inventario = [];

function producto(codigo, nombre, categoria, precio, cantidad) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.cantidad = cantidad;
}

function registrar_productos() {
    console.log("\n--- Registrar producto ---");

    const codigo = prompt("Ingrese el código: ");
    const nombre = prompt("Ingrese el nombre: ");
    const categoria = prompt("Ingrese la categoría: ");
    const precio = Number(prompt("Ingrese el precio: "));
    const cantidad = Number(prompt("Ingrese la cantidad: "));

    const nuevoProducto = new producto(
        codigo,
        nombre,
        categoria,
        precio,
        cantidad
    );

    inventario.push(nuevoProducto);

    console.log("Producto registrado correctamente");
}

const valor_total = (productos) => {
    let total_inventario = 0;

    for (let i = 0; i < productos.length; i++) {
        total_inventario =
            total_inventario +
            productos[i].precio * productos[i].cantidad;
    }

    return total_inventario;
};

const obtenerProductosStockBajo = (productos) => {
    return productos.filter((producto) => producto.cantidad < 5);
};

const cantidadProductos = Number(
    prompt("¿Cuántos productos desea registrar?: ")
);

for (let i = 0; i < cantidadProductos; i++) {
    console.log("\nProducto " + (i + 1));
    registrar_productos();
}

console.log("\n========== INVENTARIO ==========");

for (let i = 0; i < inventario.length; i++) {
    console.log("\nProducto " + (i + 1));
    console.log("Código: " + inventario[i].codigo);
    console.log("Nombre: " + inventario[i].nombre);
    console.log("Categoría: " + inventario[i].categoria);
    console.log("Precio: $" + inventario[i].precio);
    console.log("Cantidad: " + inventario[i].cantidad);
}

const valorTotal = valor_total(inventario);
console.log("\nValor total del inventario: $" + valorTotal.toFixed(2));

const productosConStockBajo =
    obtenerProductosStockBajo(inventario);

console.log("\n--- PRODUCTOS CON CANTIDAD MENOR A 5 ---");

if (productosConStockBajo.length === 0) {
    console.log("No existen productos con cantidad menor a 5");
} else {
    for (let i = 0; i < productosConStockBajo.length; i++) {
        console.log(
            productosConStockBajo[i].nombre +
            ": " +
            productosConStockBajo[i].cantidad +
            " unidades"
        );
    }
}

function gestion_estudiantes (nombre, notas, asistencia){
    this.nombre=nombre
    this.notas=notas
    this.asistencia=asistencia
}
let estudiante1= new gestion_estudiantes( 'Ismael Rios', 10, 40)
let estudiante2= new gestion_estudiantes( 'Elkin Villao', 9, 40)
let estudiante3= new gestion_estudiantes( 'Ruben Soria', 5, 40)

let esdudiantes=[estudiante1, estudiante2, estudiante3]

const promedio_notas=esdudiantes.reduce((acc, num) => acc + num.notas, 0);
console.log(promedio_notas);

function Vehiculo (placa, marca, año, kilometraje){
    this.placa=placa
    this.marca=marca
    this.año=año
    this.kilometraje=kilometraje
}
let cantidad_auto=0
cantidad_auto=prompt(parseInt("Ingrese la cantidad de Vehiculos que desea almacanar: "));
for(let i=0; i<=cantidad_auto; i++){

}

function gestion_estudiantes() {

    const estudiantes = [
        {
            nombre: "Ismael Rios",
            notas: [10, 9, 8],
            asistencia: 90
        },
        {
            nombre: "Elkin Villao",
            notas: [9, 7, 8],
            asistencia: 85
        },
        {
            nombre: "Ruben Soria",
            notas: [5, 6, 4],
            asistencia: 70
        }
    ];

    const calcular_promedio = (notas) => {
        let suma = 0;

        for (let i = 0; i < notas.length; i++) {
            suma = suma + notas[i];
        }

        return suma / notas.length;
    };

    const estudiantes_promedios = estudiantes.map((estudiante) => {
        return {
            nombre: estudiante.nombre,
            notas: estudiante.notas,
            asistencia: estudiante.asistencia,
            promedio: calcular_promedio(estudiante.notas)
        };
    });

    const estudiantes_aprobados = estudiantes_promedios.filter(
        (estudiante) => estudiante.promedio >= 7
    );

    function clasificar_rendimiento(promedio) {
        if (promedio >= 9) {
            return "Excelente";
        } else {
            if (promedio >= 7) {
                return "Bueno";
            } else {
                if (promedio >= 5) {
                    return "Regular";
                } else {
                    return "Insuficiente";
                }
            }
        }
    }

    console.log("\n========== ESTUDIANTES ==========");

    for (let i = 0; i < estudiantes_promedios.length; i++) {

        const estudiante = estudiantes_promedios[i];

        console.log("\nNombre: " + estudiante.nombre);
        console.log("Asistencia: " + estudiante.asistencia + "%");
        console.log("Notas:");

        let j = 0;

        while (j < estudiante.notas.length) {
            console.log("Nota " + (j + 1) + ": " + estudiante.notas[j]);
            j++;
        }

        console.log("Promedio: " + estudiante.promedio.toFixed(2));

        console.log(
            "Rendimiento: " +
            clasificar_rendimiento(estudiante.promedio)
        );
    }

    console.log("\n========== APROBADOS ==========");

    for (let i = 0; i < estudiantes_aprobados.length; i++) {
        console.log(
            estudiantes_aprobados[i].nombre +
            " - Promedio: " +
            estudiantes_aprobados[i].promedio.toFixed(2)
        );
    }
}

gestion_estudiantes();

let vehiculos = [];

function Vehiculo(placa, marca, anio, kilometraje) {
    this.placa = placa;
    this.marca = marca;
    this.anio = anio;
    this.kilometraje = kilometraje;
}

function registrarVehiculos() {
    let cantidad = Number(
        prompt("¿Cuántos vehículos desea registrar?: ")
    );

    let vehiculoMayorKilometraje;

    for (let i = 0; i < cantidad; i++) {
        console.log("\nVehículo " + (i + 1));

        let placa = prompt("Ingrese la placa: ");
        let marca = prompt("Ingrese la marca: ");
        let año = Number(prompt("Ingrese el año: "));
        let kilometraje = Number(
            prompt("Ingrese el kilometraje: ")
        );

        let nuevoVehiculo = new Vehiculo(
            placa,
            marca,
            año,
            kilometraje
        );

        vehiculos.push(nuevoVehiculo);

        let antiguedad = new Date().getFullYear() - año;
        let clasificacion;

        if (antiguedad <= 5) {
            clasificacion = "Nuevo";
        } else if (antiguedad <= 10) {
            clasificacion = "Seminuevo";
        } else {
            clasificacion = "Antiguo";
        }

        console.log("Vehículo registrado correctamente");
        console.log("Clasificación: " + clasificacion);

        if (
            vehiculoMayorKilometraje === undefined ||
            kilometraje > vehiculoMayorKilometraje.kilometraje
        ) {
            vehiculoMayorKilometraje = nuevoVehiculo;
        }
    }
Producto
    if (vehiculoMayorKilometraje !== undefined) {
        console.log("\n--- VEHÍCULO CON MAYOR KILOMETRAJE ---");
        console.log("Placa: " + vehiculoMayorKilometraje.placa);
        console.log("Marca: " + vehiculoMayorKilometraje.marca);
        console.log(
            "Kilometraje: " +
            vehiculoMayorKilometraje.kilometraje +
            " km"
        );
    }
}

registrarVehiculos();

function Libro(titulo, autor, anio, disponible) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.disponible = disponible;
}

let libro1 = new Libro(
    "Don Quijote",
    "Miguel de Cervantes",
    1605,
    true
);

let libro2 = new Libro(
    "Cien anios de soledad",
    "Gabriel García Márquez",
    1967,
    false
);

let libro3 = new Libro(
    "El principito",
    "Antoine de Saint-Exupéry",
    1943,
    true
);

let libros = [libro1, libro2, libro3];

let libro_buscar = prompt(
    "Ingrese el nombre del autor del libro: "
).toLowerCase();

const buscar_libro = (libros) => {
    let libro_encontrado = false;

    for (let i = 0; i < libros.length; i++) {
        if (libros[i].autor.toLowerCase() === libro_buscar) {
            console.log("\nLibro encontrado:");
            console.log(libros[i]);
            libro_encontrado = true;
        }
    }

    if (libro_encontrado === false) {
        console.log("El libro que está buscando no se encuentra");
    }
};

buscar_libro(libros);

const libros_disponibles = libros.filter(
    (libro) => libro.disponible === true
);

console.log("\n--- LIBROS DISPONIBLES ---");

for (let i = 0; i < libros_disponibles.length; i++) {
    console.log(libros_disponibles[i].titulo);
}

const clasificar_libros = (libros) => {
    console.log("\n--- CLASIFICACIÓN DE LOS LIBROS ---");

    for (let i = 0; i < libros.length; i++) {
        let clasificacion;
        let anio = libros[i].anio;

        if (anio < 1450) {
            clasificacion = "Manuscrito o códice";
        } else if (anio <= 1500) {
            clasificacion = "Incunable";
        } else if (anio <= 1801) {
            clasificacion = "Postincunable";
        } else if (anio <= 1950) {
            clasificacion = "Libro moderno o industrial";
        } else {
            clasificacion = "Libro contemporáneo";
        }

        console.log(
            libros[i].titulo + ": " + clasificacion
        );
    }
};

clasificar_libros(libros);

function empleado(nombre, departamento, salario, años_de_experiencia){
    this.nombre=nombre
    this.departamento=departamento
    this.salario=salario
    this.años_de_experiencia=años_de_experiencia
}

let empleado1= new empleado(
    'Elkin',
    'Recursos humanos',
    485.75,
    35
);
let empleado2= new empleado(
    'Soria',
    'administracion',
    600.00,
    14
);
let empleado3= new empleado(
    'Adrian',
    'contabilidad',
    485.75,
    5
);
let empleado4= new empleado(
    'Carlos',
    'finanzas',
    485.75,
    15
);

let empleados=[empleado1, empleado2, empleado3, empleado4];

const salario_promedio=(empleado)=>{
    let salario_medio=0
    for(let i=0; i<empleado.length; i++){
        salario_medio+=empleado[i].salario
    }
    return salario_medio/empleado.length
}
console.log(salario_promedio(empleados))

const salario_alto=(empleado)=>{
    let sueldo_mayor=empleados[0].salario;
    for (let i=1; i<empleado.length; i++){
        if ( empleado[i].salario>sueldo_mayor){
            sueldo_mayor=empleado[i].salario
        }
    }
    return sueldo_mayor
}
console.log(salario_alto(empleados))

const clasifcar_empleados=(empleado)=>{
    let clasificacion_empleados=""
    for (let i=0; i<empleado.length; i++){
        if(empleado[i].años_de_experiencia<10){
            clasificacion_empleados="novato"
        }else if( empleado[i].años_de_experiencia<15){
            clasificacion_empleados="semi-experto"
        }else{
            clasificacion_empleados="experto"
        }
        console.log( empleado[i].nombre+":"+ clasificacion_empleados)
    }
}
clasifcar_empleados(empleados)

function banco(titular, saldo, tipo_cuenta){
    this.titular=titular
    this.saldo=saldo
    this.tipo_cuenta=tipo_cuenta
}
let cuenta= new banco(
    'Aurelio_Rios',
    1000,
    'ahorro'
);
const depositos=(cuenta)=>{
    let monto_deposito= Number(prompt("Ingrese el monto que desea depositar: $"))
    if(monto_deposito>0){
        cuenta.saldo+=monto_deposito
        console.log("Se ha acreditado a tu cuenta")
        console.log("el monto actual es de: " + cuenta.saldo);
    }else{
        console.log("monto ingresado no es valido")
    }
}

const retiro=(cuenta)=>{
    let mondo_retiro=Number(prompt("Ingrese el monto que desea retirar: $"));
    if( mondo_retiro<=0){
        console.log("El monto que desea retirar es invalido")
    }else if (mondo_retiro>cuenta.saldo){
        console.log("el saldo de su cuenta es insuficiente");
    }else{
        cuenta.saldo-=mondo_retiro
        console.log("El retiro ha sido exitoso");
        console.log("El monto de su cuenta es: $"+ cuenta.saldo)
    }
}

const consulta=(cuenta)=>{
    console.log("---TITULAR DE LA CUENTA---");
    console.log("titular: "+cuenta.titular);
    console.log("saldo: $"+cuenta.saldo);
    console.log("tipo_cuenta: "+cuenta.tipo_cuenta);
}
consulta(cuenta);
depositos(cuenta);
retiro(cuenta);
consulta(cuenta);

function ciudad(nombre, temperatura) {
    this.nombre = nombre;
    this.temperatura = temperatura;
}

let ciudad1 = new ciudad("Milagro", 32);
let ciudad2 = new ciudad("Quito", 18);
let ciudad3 = new ciudad("Cuenca", 22);
let ciudad4 = new ciudad("Guayaquil", 36);

let ciudades = [ciudad1, ciudad2, ciudad3, ciudad4];

const temperaturas = (ciudades) => {
    let temperatura_maxima=ciudades[0].temperatura
    let temperatura_minima=ciudades[0].temperatura
    for(let i=1; i<ciudades.length; i++){
        if(ciudades[i].temperatura>temperatura_maxima){
            temperatura_maxima=ciudades[i].temperatura
        }
        if(ciudades[i].temperatura<temperatura_minima){
            temperatura_minima=ciudades[i].temperatura
        }
    }
    console.log(
        "La temperatura maxima es: "+ temperatura_maxima,
        "\nLa temperatura minima es: "+ temperatura_minima
    )
}
temperaturas(ciudades)

const promedio_temperatura=(ciudades)=>{
    let promedio=0
    for(let i=0; i<ciudades.length; i++){
        promedio+=ciudades[i].temperatura
    }
    console.log("El promedio de la temperatura es: "+ (promedio/ciudades.length))
}
promedio_temperatura(ciudades)

const clasificar_clima=(ciudades)=>{
    let clasificacion_clima=""
    for(let i=0; i<ciudades.length; i++){
        if( ciudades[i].temperatura<15){
            clasificacion_clima="frio"
        }else if( ciudades[i].temperatura<25){
            clasificacion_clima="templado"
        }else if(ciudades[i].temperatura<35){
            clasificacion_clima="caluroso"
        }else{
            clasificacion_clima="muy caluroso"
        }
    console.log("\nCiudad: " + ciudades[i].nombre);
    console.log("Temperatura: " + ciudades[i].temperatura);
    console.log("Clima: " + clasificacion_clima);

    switch (clasificacion_clima){
        case "frío":
            console.log("Usar abrigo.");
            break;
        case "templado":
            console.log("Use ropa comoda");
            break;
        case "caluroso":
            console.log("tome mucha agua");
            break;
        case "muy caluroso":
            console.log("use ropa ligera")
            break;

        default:
            console.log("No existe ninuguna recomendacion")
    }
    }
}
clasificar_clima(ciudades)

function habitacion(numero, tipo, precio, Disponibilidad){
    this.numero=numero
    this.tipo=tipo
    this.precio=precio
    this.Disponibilidad=Disponibilidad
}
let habitacion1 = new habitacion(
    101,
    "Simple",
    35,
    true
);

let habitacion2 = new habitacion(
    102,
    "Doble",
    60,
    false
);

let habitacion3 = new habitacion(
    103,
    "Matrimonial",
    75,
    true
);

let habitacion4 = new habitacion(
    104,
    "Suite",
    120,
    false
);

let habitacion5 = new habitacion(
    105,
    "Familiar",
    95,
    true
);

let habitaciones = [
    habitacion1,
    habitacion2,
    habitacion3,
    habitacion4,
    habitacion5
];

const presentar_habitaciones=(habitacion)=>{
    for(let i=0; i<habitacion.length;i++){
        if(habitacion[i].Disponibilidad==true){
        console.log("\n--- HABITACIÓN ---");
        console.log("Número: " + habitacion[i].numero);
        console.log("Tipo: " + habitacion[i].tipo);
        console.log("Precio: $" + habitacion[i].precio);
        console.log("Disponibilidad: " + habitacion[i].Disponibilidad);
        }
    }
}
presentar_habitaciones(habitaciones)