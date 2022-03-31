var num = 'Tipo entero '+ 16;        // variable tipo entero
var num2 = 'Tipo decimal ' + 234.65;  // variable tipo decimal

var mensaje = 'Tipo texto ' + "Bienvenido a nuestro sitio web";

alert(num);
alert(num2);
alert(mensaje);

// no hay error
let message = "hola";
message = 123456;

//numeros
let n = 123;
n = 12.345;

// la "n" al final significa que es un BigInt
const bigInt = 1234567890123456789012345678901234567890n;


//string
let str = "Hola";
let str2 = 'Las comillas simples tambien estqn bien';
let phrase = `se puede incrustar otro ${str}`;

//boolean
let nameFieldChecked = true; // sí, el campo name esta marcado
let ageFieldChecked = false; // no, el campo age no esta marcado

//nulo
let age = null;

//undefined
let ages;

alert(ages); // muestra "undefined"

//operador typeof
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)