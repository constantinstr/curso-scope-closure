var firstName; // Undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = 'David'; // declarar / asignar
lastName = 'Ana'; // reasignar
console.log(lastName);

var secondName = 'David'; // declarando  / asignando
var secondName = 'Ana'; // reasignando
console.log(secondName);

// Let
let fruit = 'Apple' // declarar / asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit);
//let fruit = 'Banana'; // NO es posible redeclarar
console.log(fruit);

// Const
const animal = 'dog'; // declara / asigna
//animal = 'cat'; // NO puedo reasignando
//const animal = 'Snake'; // NO puedo redeclarar
console.log(animal);

const vehicles = [];
vehicles.push('carrito');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);