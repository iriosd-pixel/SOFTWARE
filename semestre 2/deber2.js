const prompt = require("prompt-sync")();

// EJERCICIO 1. SISTEMA DE INVENTARIO INTELIGENTE
function Producto(codigo, nombre, categoria, precio, cantidad) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.cantidad = cantidad;
}
let inventario = [];
function registrar_productos(inventario) {
    let cantidad_productos = Number(prompt("¿Cuántos productos desea registrar?: "));
    for (let i = 0; i < cantidad_productos; i++) {
        console.log("\nProducto " + (i + 1));
        let codigo = prompt("Ingrese el código: ");
        let nombre = prompt("Ingrese el nombre: ");
        let categoria = prompt("Ingrese la categoría: ");
        let precio = Number(prompt("Ingrese el precio: "));
        let cantidad = Number(prompt("Ingrese la cantidad: "));
        let nuevo_producto = new Producto(
            codigo,
            nombre,
            categoria,
            precio,
            cantidad
        );
        inventario.push(nuevo_producto);
    }
}
registrar_productos(inventario);
const valor_total = (inventario) => {
    let total_inventario = 0;
    for (let i = 0; i < inventario.length; i++) {
        total_inventario += inventario[i].precio * inventario[i].cantidad;
    }
    return total_inventario;
};
console.log("\n--- INVENTARIO ---");
for (let i = 0; i < inventario.length; i++) {
    console.log("\nCódigo: " + inventario[i].codigo);
    console.log("Nombre: " + inventario[i].nombre);
    console.log("Categoría: " + inventario[i].categoria);
    console.log("Precio: $" + inventario[i].precio);
    console.log("Cantidad: " + inventario[i].cantidad);
}
console.log("\nValor total del inventario: $" + valor_total(inventario).toFixed(2));
const productos_stock_bajo = inventario.filter(
    (producto) => producto.cantidad < 5
);
console.log("\n--- PRODUCTOS CON CANTIDAD MENOR A 5 ---");
if (productos_stock_bajo.length === 0) {
    console.log("No existen productos con cantidad menor a 5");
} else {
    for (let i = 0; i < productos_stock_bajo.length; i++) {
        console.log(
            productos_stock_bajo[i].nombre +
            ": " +
            productos_stock_bajo[i].cantidad +
            " unidades"
        );
    }
}

// EJERCICIO 2. GESTIÓN DE ESTUDIANTES
let estudiantes = [
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
        suma += notas[i];
    }
    return suma / notas.length;
};
let estudiantes_promedios = estudiantes.map(
    (estudiante) => {
        return {
            nombre: estudiante.nombre,
            notas: estudiante.notas,
            asistencia: estudiante.asistencia,
            promedio: calcular_promedio(estudiante.notas)
        };
    }
);
let estudiantes_aprobados = estudiantes_promedios.filter(
    (estudiante) => estudiante.promedio >= 7
);
const clasificar_rendimiento = (promedio) => {
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
};
console.log("\n--- ESTUDIANTES ---");
for (let i = 0; i < estudiantes_promedios.length; i++) {
    console.log("\nNombre: " + estudiantes_promedios[i].nombre);
    console.log("Asistencia: " + estudiantes_promedios[i].asistencia + "%");
    console.log("Notas:");
    let j = 0;
    while (j < estudiantes_promedios[i].notas.length) {
        console.log(
            "Nota " +
            (j + 1) +
            ": " +
            estudiantes_promedios[i].notas[j]
        );
        j++;
    }
    console.log(
        "Promedio: " +
        estudiantes_promedios[i].promedio.toFixed(2)
    );
    console.log(
        "Rendimiento: " +
        clasificar_rendimiento(estudiantes_promedios[i].promedio)
    );
}
console.log("\n--- ESTUDIANTES APROBADOS ---");
for (let i = 0; i < estudiantes_aprobados.length; i++) {
    console.log(
        estudiantes_aprobados[i].nombre +
        " - Promedio: " +
        estudiantes_aprobados[i].promedio.toFixed(2)
    );
}

// EJERCICIO 3. REGISTRO DE VEHÍCULOS
function Vehiculo(placa, marca, anio, kilometraje) {
    this.placa = placa;
    this.marca = marca;
    this.anio = anio;
    this.kilometraje = kilometraje;
}
let vehiculos = [];
let cantidad_vehiculos = Number(
    prompt("¿Cuántos vehículos desea registrar?: ")
);
for (let i = 0; i < cantidad_vehiculos; i++) {
    console.log("\nVehículo " + (i + 1));
    let placa = prompt("Ingrese la placa: ");
    let marca = prompt("Ingrese la marca: ");
    let anio = Number(prompt("Ingrese el año: "));
    let kilometraje = Number(prompt("Ingrese el kilometraje: "));
    let nuevo_vehiculo = new Vehiculo(
        placa,
        marca,
        anio,
        kilometraje
    );
    vehiculos.push(nuevo_vehiculo);
}
let vehiculo_mayor_kilometraje = vehiculos[0];
for (let i = 1; i < vehiculos.length; i++) {
    if (
        vehiculos[i].kilometraje >
        vehiculo_mayor_kilometraje.kilometraje
    ) {
        vehiculo_mayor_kilometraje = vehiculos[i];
    }
}
console.log("\n--- VEHÍCULOS ---");
for (let i = 0; i < vehiculos.length; i++) {
    let antiguedad = new Date().getFullYear() - vehiculos[i].anio;
    let clasificacion = "";
    if (antiguedad <= 5) {
        clasificacion = "Nuevo";
    } else if (antiguedad <= 10) {
        clasificacion = "Seminuevo";
    } else {
        clasificacion = "Antiguo";
    }
    console.log("\nPlaca: " + vehiculos[i].placa);
    console.log("Marca: " + vehiculos[i].marca);
    console.log("Año: " + vehiculos[i].anio);
    console.log("Kilometraje: " + vehiculos[i].kilometraje + " km");
    console.log("Clasificación: " + clasificacion);
}
if (vehiculos.length > 0) {
    console.log("\n--- VEHÍCULO CON MAYOR KILOMETRAJE ---");
    console.log("Placa: " + vehiculo_mayor_kilometraje.placa);
    console.log("Marca: " + vehiculo_mayor_kilometraje.marca);
    console.log(
        "Kilometraje: " +
        vehiculo_mayor_kilometraje.kilometraje +
        " km"
    );
}

// EJERCICIO 4. BIBLIOTECA DIGITAL

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
    "Cien años de soledad",
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

        if (
            libros[i].autor.toLowerCase() ===
            libro_buscar
        ) {

            console.log("\nLibro encontrado:");
            console.log(libros[i]);

            libro_encontrado = true;
        }
    }

    if (libro_encontrado === false) {

        console.log(
            "El libro que está buscando no se encuentra"
        );
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

    console.log(
        "\n--- CLASIFICACIÓN DE LOS LIBROS ---"
    );

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
            libros[i].titulo +
            ": " +
            clasificacion
        );
    }
};

clasificar_libros(libros);


// EJERCICIO 5. GESTIÓN DE EMPLEADOS

function empleado(
    nombre,
    departamento,
    salario,
    años_de_experiencia
) {

    this.nombre = nombre;
    this.departamento = departamento;
    this.salario = salario;
    this.años_de_experiencia = años_de_experiencia;
}

let empleado1 = new empleado(
    "Elkin",
    "Recursos humanos",
    485.75,
    35
);

let empleado2 = new empleado(
    "Soria",
    "Administración",
    600,
    14
);

let empleado3 = new empleado(
    "Adrian",
    "Contabilidad",
    485.75,
    5
);

let empleado4 = new empleado(
    "Carlos",
    "Finanzas",
    485.75,
    15
);

let empleados = [
    empleado1,
    empleado2,
    empleado3,
    empleado4
];

const salario_promedio = (empleados) => {

    let salario_medio = 0;

    for (let i = 0; i < empleados.length; i++) {

        salario_medio += empleados[i].salario;
    }

    return salario_medio / empleados.length;
};

console.log(
    "Salario promedio: $" +
    salario_promedio(empleados)
);

const salario_alto = (empleados) => {

    let sueldo_mayor = empleados[0].salario;

    for (let i = 1; i < empleados.length; i++) {

        if (empleados[i].salario > sueldo_mayor) {

            sueldo_mayor = empleados[i].salario;
        }
    }

    return sueldo_mayor;
};

console.log(
    "Salario más alto: $" +
    salario_alto(empleados)
);

const clasificar_empleados = (empleados) => {

    let clasificacion_empleados = "";

    for (let i = 0; i < empleados.length; i++) {

        if (empleados[i].años_de_experiencia < 10) {

            clasificacion_empleados = "Novato";

        } else if (
            empleados[i].años_de_experiencia < 15
        ) {

            clasificacion_empleados = "Semiexperto";

        } else {

            clasificacion_empleados = "Experto";
        }

        console.log(
            empleados[i].nombre +
            ": " +
            clasificacion_empleados
        );
    }
};

clasificar_empleados(empleados);


// EJERCICIO 6. SISTEMA BANCARIO

function banco(titular, saldo, tipo_cuenta) {
    this.titular = titular;
    this.saldo = saldo;
    this.tipo_cuenta = tipo_cuenta;
}

let cuenta = new banco(
    "Aurelio Rios",
    1000,
    "Ahorro"
);

const depositos = (cuenta) => {

    let monto_deposito = Number(
        prompt("Ingrese el monto que desea depositar: $")
    );

    if (monto_deposito > 0) {

        cuenta.saldo += monto_deposito;

        console.log("Se ha acreditado a tu cuenta");
        console.log(
            "El monto actual es de: $" +
            cuenta.saldo
        );

    } else {

        console.log("Monto ingresado no es válido");
    }
};

const retiro = (cuenta) => {

    let monto_retiro = Number(
        prompt("Ingrese el monto que desea retirar: $")
    );

    if (monto_retiro <= 0) {

        console.log(
            "El monto que desea retirar es inválido"
        );

    } else if (monto_retiro > cuenta.saldo) {

        console.log(
            "El saldo de su cuenta es insuficiente"
        );

    } else {

        cuenta.saldo -= monto_retiro;

        console.log("El retiro ha sido exitoso");

        console.log(
            "El monto de su cuenta es: $" +
            cuenta.saldo
        );
    }
};

const consulta = (cuenta) => {

    console.log("\n--- TITULAR DE LA CUENTA ---");
    console.log("Titular: " + cuenta.titular);
    console.log("Saldo: $" + cuenta.saldo);
    console.log("Tipo de cuenta: " + cuenta.tipo_cuenta);
};

consulta(cuenta);
depositos(cuenta);
retiro(cuenta);
consulta(cuenta);


// EJERCICIO 7. SISTEMA METEOROLÓGICO

function ciudad(nombre, temperatura) {
    this.nombre = nombre;
    this.temperatura = temperatura;
}

let ciudad1 = new ciudad("Milagro", 32);
let ciudad2 = new ciudad("Quito", 18);
let ciudad3 = new ciudad("Cuenca", 22);
let ciudad4 = new ciudad("Guayaquil", 36);

let ciudades = [
    ciudad1,
    ciudad2,
    ciudad3,
    ciudad4
];

const temperaturas = (ciudades) => {

    let temperatura_maxima =
        ciudades[0].temperatura;

    let temperatura_minima =
        ciudades[0].temperatura;

    for (let i = 1; i < ciudades.length; i++) {

        if (
            ciudades[i].temperatura >
            temperatura_maxima
        ) {

            temperatura_maxima =
                ciudades[i].temperatura;
        }

        if (
            ciudades[i].temperatura <
            temperatura_minima
        ) {

            temperatura_minima =
                ciudades[i].temperatura;
        }
    }

    console.log(
        "La temperatura máxima es: " +
        temperatura_maxima
    );

    console.log(
        "La temperatura mínima es: " +
        temperatura_minima
    );
};

temperaturas(ciudades);

const promedio_temperatura = (ciudades) => {

    let promedio = 0;

    for (let i = 0; i < ciudades.length; i++) {

        promedio += ciudades[i].temperatura;
    }

    console.log(
        "El promedio de la temperatura es: " +
        promedio / ciudades.length
    );
};

promedio_temperatura(ciudades);

const clasificar_clima = (ciudades) => {

    let clasificacion_clima = "";

    for (let i = 0; i < ciudades.length; i++) {

        if (ciudades[i].temperatura < 15) {

            clasificacion_clima = "frío";

        } else if (ciudades[i].temperatura < 25) {

            clasificacion_clima = "templado";

        } else if (ciudades[i].temperatura < 35) {

            clasificacion_clima = "caluroso";

        } else {

            clasificacion_clima = "muy caluroso";
        }

        console.log(
            "\nCiudad: " +
            ciudades[i].nombre
        );

        console.log(
            "Temperatura: " +
            ciudades[i].temperatura
        );

        console.log(
            "Clima: " +
            clasificacion_clima
        );

        switch (clasificacion_clima) {

            case "frío":

                console.log("Usar abrigo.");
                break;

            case "templado":

                console.log("Use ropa cómoda.");
                break;

            case "caluroso":

                console.log("Tome mucha agua.");
                break;

            case "muy caluroso":

                console.log("Use ropa ligera.");
                break;

            default:

                console.log(
                    "No existe ninguna recomendación"
                );
        }
    }
};

clasificar_clima(ciudades);


// EJERCICIO 8. SISTEMA DE RESERVAS DE HOTEL

function habitacion(
    numero,
    tipo,
    precio,
    disponibilidad
) {

    this.numero = numero;
    this.tipo = tipo;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
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

const presentar_habitaciones = (habitaciones) => {

    for (let i = 0; i < habitaciones.length; i++) {

        if (
            habitaciones[i].disponibilidad === true
        ) {

            console.log("\n--- HABITACIÓN ---");

            console.log(
                "Número: " +
                habitaciones[i].numero
            );

            console.log(
                "Tipo: " +
                habitaciones[i].tipo
            );

            console.log(
                "Precio: $" +
                habitaciones[i].precio
            );

            console.log(
                "Disponibilidad: " +
                habitaciones[i].disponibilidad
            );
        }
    }
};

presentar_habitaciones(habitaciones);
