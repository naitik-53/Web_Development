// words vs keywords
let word = "hello"; // 'let' is a keyword, 'word' is an identifier (variable name)
const PI = 3.14; // 'const' is a keyword, 'PI' is an identifier
var count = 10; // 'var' is a keyword, 'count' is an identifier

chottu = "This will cause an error"; // 'chottu' is an identifier, but this line will throw an error because 'chottu' is not declared with var, let, or const

// var , let , const 

let CharacterName = "John";
const BirthYear = 1990;
var age = 30;

// declaration vs initialization
var city; // declaration
city = "New York"; // initialization

let country; // declaration
country = "USA"; // initialization

const language = "JavaScript"; // declaration and initialization    

let a = 5;
a = 10; // re-assignment

const b = 15;
// b = 20; // This will cause an error because 'b' is a constant and cannot be re-assigned
console.log(a); // Output: 10

console.log(b); // Output: 15

// Hoisting
console.log(hoistedVar);
var hoistedVar = "I am hoisted!";
// Output: undefined (due to hoisting)
console.log(notHoistedLet); // This will cause an error
let notHoisted

    = "I am not hoisted!";

// Output: ReferenceError: Cannot access 'notHoistedLet' before initialization

// Best Practices
let userName = "Alice"; // Use meaningful names
const MAX_USERS = 100; // Use uppercase for constants
var userCount = 0; // Use camelCase for variable names
userCount += 1; // Increment user count
console.log(userName, MAX_USERS, userCount);


// Avoid using var to prevent hoisting issues
// Use let and const for better block scope management

// Always initialize variables when declaring them
// Use const by default, and only use let if you need to re-assign the variable
// Comment your code for better readability

// data types in javascript
// Primitive Data Types
let str = "Hello, World!"; // String    
let num = 42; // Number
let isActive = true; // Boolean
let undef; // Undefined
let nul = null; // Null
let sym = Symbol("unique"); // Symbol
let bigIntNum = 9007199254740991n; // BigInt

// Non-Primitive Data Types
let arr = [1, 2, 3, 4, 5];
let obj = { name: "Alice", age: 25 };
function greet() {
    console.log("Hello!");
}   

console.log(typeof str); // Output: string
console.log(typeof num); // Output: number
console.log(typeof isActive); // Output: boolean
console.log(typeof undef); // Output: undefined

console.log(typeof nul); // Output: object (this is a known quirk in JavaScript)
console.log(typeof sym); // Output: symbol
console.log(typeof bigIntNum); // Output: bigint
console.log(typeof arr);
// Output: object
console.log(typeof obj); // Output: object
console.log(typeof greet); // Output: function

// Dynamic Typing
let dynamicVar = "I am a string";
console.log(typeof dynamicVar); // Output: string
dynamicVar = 100;
console.log(typeof dynamicVar);
// Output: number   
dynamicVar = true;
console.log(typeof dynamicVar); // Output: boolean
dynamicVar = { key: "value" };
console.log(typeof dynamicVar); // Output: object
dynamicVar = [1, 2, 3];
console.log(typeof dynamicVar); // Output: object
dynamicVar = null;

console.log(typeof dynamicVar); // Output: object
dynamicVar = undefined;
console.log(typeof dynamicVar); // Output: undefined        

// Type Coercion
let coercedVar = "5" + 10; // String concatenation
console.log(coercedVar);
// Output: "510"
coercedVar = "20" - 5; // Numeric subtraction
console.log(coercedVar); // Output: 15
coercedVar = "10" * 2;

console.log(coercedVar); // Output: 20

coercedVar = "30" / "2"; // Numeric division

console.log(coercedVar); // Output: 15

coercedVar = 5 + true; // true is coerced to 1
console.log(coercedVar); // Output: 6

coercedVar = 5 + false; // false is coerced to 0

console.log(coercedVar); // Output: 5

coercedVar = "The answer is " + 42; // String concatenation
console.log(coercedVar); // Output: "The answer is 42"

//operators in javascript
// Arithmetic Operators
let x = 10;
let y = 5;  
console.log(x + y); // Addition: 15
console.log(x - y); // Subtraction: 5
console.log(x * y);
// Multiplication: 50
console.log(x / y);
// Division: 2
console.log(x % y); // Modulus: 0
console.log(x ** y); // Exponentiation: 100000
// Increment and Decrement
x++;
console.log(x);
// Increment: 11
y--;
console.log(y); // Decrement: 4

// Assignment Operators
let a1 = 20;
a1 += 5;

console.log(a1); // a1 = a1 + 5: 25

a1 -= 10;
console.log(a1); // a1 = a1 - 10: 15
a1 *= 2;
console.log(a1);

// a1 = a1 * 2: 30
a1 /= 3;
console.log(a1);
// a1 = a1 / 3: 10

a1 %= 4;
console.log(a1); // a1 = a1 % 4: 2

// Comparison Operators
let b1 = 15;
let b2 = "15";
console.log(b1 == b2); // Equal to: true