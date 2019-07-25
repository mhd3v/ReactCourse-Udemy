// import './utils.js';

// import {} IS NOT an object
// subtract is the default export
import anythingIWant, { square, add } from './utils';
import isSenior, { isAdult, canDrink } from './person';

console.log('app.js is running');

console.log(square(4))
console.log(add(4,2))
console.log(anythingIWant(4,2))

console.log(isAdult(12))
console.log(canDrink(22))
console.log(isSenior(76))