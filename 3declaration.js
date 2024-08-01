//var vs let vs const
//1. Declaration

// let and const can't be redeclared in same scope but var can be redeclare in same scope

// var a;
// var a;
// We can declare variable using var as much as we want.

// let a;
// let a;
// Output: SyntaxError: Identifier 'a' has already been declared 

// let c;
// {
//   let c;
// }
// This is possible as this comes under shadowing

// const b;
// const b;
// Output: SyntaxError: Missing initializer in const declaration

//2. Declaration without initialisation

// var a; //Can be done!
// let b; //Can be done!
// const d; // Output: SyntaxError: Missing initializer in const declaration
// So const can't be initialize without any value


//3. Re Initialisation Examples

// var f = 10;
// f = 20;
//Possible

// let g = 100;
// g = 30;
//Possible

// const i = 10
// i = 30;
// Output = TypeError: Assignment to constant variable.