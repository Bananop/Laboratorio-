// Ejercicio 1.1
var nombre = "Matthew";
console.log("Nombre inicial:", nombre);

nombre = "Spencer";
console.log("Nombre reasignado:", nombre);

console.log("Explicacion: Con var podemos reasignar el valor de una variable sin problema.");


// Ejercicio 1.2
const nombreConst = "Matthew";
console.log(nombreConst);

try {
    nombreConst = "Spencer"; 
    console.log(nombreConst);
} catch (error) {
    console.log("Error:", error.message);
}

console.log("Explicacion: Una variable declarada con const no se puede reasignar despues de su declaracion.");


// Ejercicio 1.3
try {
    if (false) {
        let edad = 30;
    }
    console.log(edad);
} catch (error) {
    console.log("Error:", error.message);
}

console.log("Explicacion: Una variable declarada con let solo existe dentro del bloque donde fue declarada.");


// Ejercicio 2.1
let stringVariable = "Hola";
let numberVariable = 123;
let booleanVariable = true;
let nullVariable = null;
let undefinedVariable;

console.log("Tipo de stringVariable:", typeof stringVariable);
console.log("Tipo de numberVariable:", typeof numberVariable);
console.log("Tipo de booleanVariable:", typeof booleanVariable);
console.log("Tipo de nullVariable:", typeof nullVariable);
console.log("Tipo de undefinedVariable:", typeof undefinedVariable);

console.log("Explicacion: typeof permite identificar el tipo de dato de una variable.");


// Ejercicio 2.2
let persona = {
    nombre: "Ana",
    edad: 25
};

let hobbies = ["leer", "viajar", "programar"];

console.log("El objeto persona es de tipo:", typeof persona);
console.log("El array hobbies es de tipo:", typeof hobbies);

console.log("Explicacion: Los objetos y arrays en JavaScript son de tipo object, aunque tengan diferentes estructuras.");


// Ejercicio 3.1
let numero1 = 10;
let numero2 = "5";

let resultadoSuma = numero1 + numero2;
console.log("Resultado de la suma:", resultadoSuma);

let resultadoMultiplicacion = numero1 * numero2;
console.log("Resultado de la multiplicacion:", resultadoMultiplicacion);

console.log("Explicacion: En la suma se concateno el numero con el string, en la multiplicacion el string se convirtio a numero.");


// Ejercicio 3.2
let numeroString = String(25);
console.log("25 convertido a string:", numeroString, typeof numeroString);

let stringNumero = Number("100");
console.log("'100' convertido a numero:", stringNumero, typeof stringNumero);

let booleanoVacio = Boolean("");
let booleanoHola = Boolean("hola");
console.log("'' convertido a booleano:", booleanoVacio, typeof booleanoVacio);
console.log("'hola' convertido a booleano:", booleanoHola, typeof booleanoHola);

console.log("Explicacion: String(), Number() y Boolean() permiten convertir valores a otros tipos de datos.");


// Ejercicio 4.1
console.log('10 == "10":', 10 == "10");
console.log('10 === "10":', 10 === "10");

console.log("Explicacion: == compara solo el valor, mientras que === compara valor y tipo de dato.");


// Ejercicio 4.2
let numero = 7;
if (numero % 2 === 0) {
    console.log("El numero", numero, "es par.");
} else {
    console.log("El numero", numero, "es impar.");
}

console.log("Explicacion: El operador % permite saber si un numero es divisible entre otro.");


// Ejercicio 4.3
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("Explicacion: El bucle for repite instrucciones un numero determinado de veces.");


// Ejercicio 4.4
try {
    throw new Error("Este es un error.");
} catch (error) {
    console.log("Se ha capturado un error:", error.message);
}

console.log("Explicacion: Con try...catch podemos manejar errores en tiempo de ejecucion.");


// Ejercicio 5.1
function multiplicar(a, b) {
    return a * b;
}
console.log("Resultado de multiplicar 5 * 3:", multiplicar(5, 3));

console.log("Explicacion: Una funcion tradicional recibe parametros y retorna un valor.");


// Ejercicio 5.2
const multiplicarArrow = (a, b) => a * b;
console.log("Resultado con arrow function:", multiplicarArrow(5, 3));

console.log("Explicacion: Una arrow function es una forma mas corta de declarar funciones.");


// Ejercicio 5.3
const saludar = () => "Hola a todos!";
console.log(saludar());

console.log("Explicacion: Una arrow function puede retornar directamente un valor sin usar return.");


// Ejercicio 6.1
let variableGlobal = "Soy global";

function miFuncion() {
    let variableLocal = "Soy local";
    console.log("Dentro de la funcion, variableGlobal:", variableGlobal);
    console.log("Dentro de la funcion, variableLocal:", variableLocal);
}
miFuncion();

console.log("Fuera de la funcion, variableGlobal:", variableGlobal);

console.log("Explicacion: Una variable local solo existe dentro de la funcion, mientras que una global se puede usar en cualquier parte.");


// Ejercicio 6.2
const coche = {
    marca: "Toyota",
    mostrarMarca: function() {
        console.log("La marca del coche es:", this.marca);
    }
};

coche.mostrarMarca();

console.log("Explicacion: En un metodo, this hace referencia al objeto que lo contiene.");


// Ejercicio 7.1
let frutas = ["Manzana", "Banana"];
console.log("Array inicial:", frutas);

frutas.push("Naranja");
console.log("Despues de push():", frutas);

frutas.pop();
console.log("Despues de pop():", frutas);

console.log("Explicacion: push agrega un elemento al final del array, pop elimina el ultimo.");


// Ejercicio 7.2
let numerosArr = [1, 2, 3];
let numerosMultiplicados = numerosArr.map(num => num * 2);
console.log("Array con map():", numerosMultiplicados);
console.log("Array original:", numerosArr);

let numerosFiltrados = numerosArr.filter(num => num > 1);
console.log("Array con filter():", numerosFiltrados);

console.log("Explicacion: map crea un nuevo array transformando los elementos, filter crea uno nuevo segun una condicion.");


// Ejercicio 7.3
const frutas2 = ["Manzana", "Banana", "Naranja"];
console.log("Iterando con forEach():");
frutas2.forEach(fruta => {
    console.log(fruta);
});

let banana = frutas2.find(fruta => fruta === "Banana");
console.log("Fruta encontrada con find():", banana);

let indiceManzana = frutas2.findIndex(fruta => fruta === "Manzana");
console.log("Indice de 'Manzana' con findIndex():", indiceManzana);

console.log("Explicacion: forEach recorre todos los elementos, find busca uno en especifico y findIndex devuelve su posicion.");


// Ejercicio 8.1
const libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    mostrarInfo: function() {
        console.log("Titulo:", this.titulo, "Autor:", this.autor);
    }
};
libro.mostrarInfo();

console.log("Explicacion: Un objeto puede tener metodos que acceden a sus propias propiedades usando this.");


// Ejercicio 8.2
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        return `Soy ${this.nombre}`;
    }
}

const miAnimal = new Animal("Leon");
console.log(miAnimal.saludar());

console.log("Explicacion: Una clase permite crear objetos con propiedades y metodos.");


// Ejercicio 8.3
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
}

const miPerro = new Perro("Molta", "Golden Retriever");
console.log(miPerro.saludar());

console.log("Explicacion: Una clase hija puede heredar de otra y usar super para acceder al constructor del padre.");
