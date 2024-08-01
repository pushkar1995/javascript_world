//var vs let vs const
// Hoisting

// During the creation phase JS engine move variables and function to the top of the Code. This is called Hoisting

// console.log(count);
// count = 1;
// Output = undefined

console.log(count);
let count = 2;
// Output = ReferenceError: Cannot access 'count' before initialization

// Temporal dead zone is the time between the initialization and declaration of let and const variables
