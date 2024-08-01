import "./css/style.css";

//! -------------------
// ! Comentarios ------
// ! ------------------

console.warn("Bloques de código");

//? Las llaves {} definen un bloque de código
//? las variables van a vivir dentro de las llaves (Scope/ALcance)

let a = 2; // Ambito global (Scope Global)

if (true) {
  a = 6; // Ámbito del if. O sea dentro de las llaves del if
  console.log(a);
}
console.log(a);

//! ---------------------
//! JSS - Contructor var
//! ---------------------

console.warn("JSS - Contructor var");
//Me permite construir variables
// JS - Es un lenguaje débilmente tipado. No tipado o tipado dinámico

var palabra;
console.log(palabra); //undefined

palabra = "Hola";

console.log(palabra);
console.log(typeof palabra); //string

//! NO USAR VAR EN NUESTROS PROYECTOS

//! ---------------------------------
//! JSS - Contructor var (problemas)
//! ---------------------------------

console.warn("JSS - Contructor var (problemas)");

if (true) {
  var b = "Pepe";
  console.log(b);
}
console.log(b);

for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log("-----");
console.log(i);

//Concepto de alto que va a ser mutable

var CONSTANTE = 3.14; // Variables con mayuscula era la manera de indicarle a otro desarrollador que esa variable no se podia modificar
console.log(CONSTANTE);
CONSTANTE = "lo cambie"; //!DANGER
console.log(CONSTANTE);

//! ---------------------------------
//! JSS - Contructor let y const
//! ---------------------------------
console.warn("JSS - Contructor let y const");

//* USAR SIEMPRE ESTOS + Moderns

//Constructor de varialbes => LET

let nombre = "Candela";
console.log(nombre);
nombre = "Abril";
console.log(nombre);

// let nombre = "LAPEQUETEPE"; NO ME VA A DEJAR REDECLARAR

// Constructor de variables => CONST

const PI = 3.1415;
console.log(PI);
// PI = 222231 // NO SE VA A PODER GIRL, no redeclara

/*
constructor    |   VAR   |   LET  |  CONST
alcance        | global   |  local |  local 
redeclarable   |   si     |   no   |   no
redefinible    |   si    |    si   |   no
*/

//! ---------------------------------
//! BLOQUES DE DECISION (IF)
//! ---------------------------------

console.warn("BLOQUES DE DECISION (IF)");

let edad = 18;

if (edad >= 18) {
  console.log("Puede acceder a la página");
} else {
  console.log("No puedo acceder");
}

// Forma reducida de IF (IF en una linea)
if (edad >= 18) console.log("Puede acceder a la página");
else console.log("No puedo acceder");

// ELSE IF, para repetir todas las veces que quiera
if (edad >= 18) {
  console.log("Puede acceder a la página");
} else if (edad >= 25) {
  console.log("Es mayor o igual a 25");
} else if (edad >= 30) {
  console.log("Es mayor o igual a 30");
} else {
  console.log("La edad es menor a 18");
}

//! ---------------------------------
//! BLOQUES DE DECISION (SWITCH)
//! ---------------------------------

console.warn("BLOQUES DE DECISION (SWITCH)");

switch (edad) {
  case 10:
    console.log("Tiene una edad de 10 años");
    break;
  case 20:
    console.log("Tiene una edad de 20 años");
    break;
  case 30:
    console.log("Tiene una edad de 30 años");
    break;

  default:
    console.log("Tiene 18 o más");
    break;
}

//! ---------------------------------
//! CALLBACK (función como argumento de otra función)
//! ---------------------------------

console.warn("CALLBACK");

function texto1() {
  console.log("Soy el texto 1");
}

texto1(); // Invoca o ejecuta la funcion con los parentesis ()

console.log(texto1); // Referencia de la función

function test(callback) {
  console.log(callback);
}

test(texto1);
