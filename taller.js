var nombre = "Anita";
console.log("Nombre inicial:", nombre);

nombre = "Spencer";
console.log("Nombre reasignado:", nombre);

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

let persona = {
    nombre: "Ana",
    edad: 25
};

let hobbies = ["leer", "viajar", "programar"];

console.log("El objeto persona es de tipo:", typeof persona);
console.log("El array hobbies es de tipo:", typeof hobbies);

let numero1 = 10;
let numero2 = "5";

let resultadoSuma = numero1 + numero2;
console.log("Resultado de la suma:", resultadoSuma);

let resultadoMultiplicacion = numero1 * numero2;
console.log("Resultado de la multiplicacion:", resultadoMultiplicacion);

let numeroString = String(25);
console.log("25 convertido a string:", numeroString, typeof numeroString);

let stringNumero = Number("100");
console.log("'100' convertido a numero:", stringNumero, typeof stringNumero);

let booleanoVacio = Boolean("");
let booleanoHola = Boolean("hola");
console.log("'' convertido a booleano:", booleanoVacio, typeof booleanoVacio);
console.log("'hola' convertido a booleano:", booleanoHola, typeof booleanoHola);

console.log('10 == "10":', 10 == "10");
console.log('10 === "10":', 10 === "10");

let numero = 7;
if (numero % 2 === 0) {
    console.log("El numero", numero, "es par.");
} else {
    console.log("El numero", numero, "es impar.");
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

function multiplicar(a, b) {
    return a * b;
}
console.log("Resultado de multiplicar 5 * 3:", multiplicar(5, 3));

const multiplicarArrow = (a, b) => a * b;
console.log("Resultado con arrow function:", multiplicarArrow(5, 3));

const saludar = () => "Hola a todos!";
console.log(saludar());

let variableGlobal = "Soy global";

function miFuncion() {
    let variableLocal = "Soy local";
    console.log("Dentro de la funcion, puedo acceder a variableGlobal:", variableGlobal);
    console.log("Dentro de la funcion, puedo acceder a variableLocal:", variableLocal);
}
miFuncion();

console.log("Fuera de la funcion, puedo acceder a variableGlobal:", variableGlobal);

const coche = {
    marca: "Toyota",
    mostrarMarca: function() {
        console.log("La marca del coche es:", this.marca);
    }
};

coche.mostrarMarca();

let frutas = ["Manzana", "Banana"];
console.log("Array inicial:", frutas);

frutas.push("Naranja");
console.log("Despues de push():", frutas);

frutas.pop();
console.log("Despues de pop():", frutas);

let numeros = [1, 2, 3];
let numerosMultiplicados = numeros.map(num => num * 2);
console.log("Array con map():", numerosMultiplicados);
console.log("El array original (numeros) no ha cambiado:", numeros);

let numerosFiltrados = numeros.filter(num => num > 1);
console.log("Array con filter():", numerosFiltrados);

const frutas2 = ["Manzana", "Banana", "Naranja"];
console.log("Iterando con forEach():");
frutas2.forEach(fruta => {
    console.log(fruta);
});

let banana = frutas2.find(fruta => fruta === "Banana");
console.log("Fruta encontrada con find():", banana);

let indiceManzana = frutas2.findIndex(fruta => fruta === "Manzana");
console.log("Indice de 'Manzana' con findIndex():", indiceManzana);

const libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    mostrarInfo: function() {
        console.log("Titulo:", this.titulo, "Autor:", this.autor);
    }
};
libro.mostrarInfo();

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        return `Soy ${this.nombre}!`;
    }
}

const miAnimal = new Animal("Leon");
console.log(miAnimal.saludar());

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
}

const miPerro = new Perro("Molta", "Golden Retriever");
console.log(miPerro.saludar());
