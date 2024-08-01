//var vs let vs const
//Scope

// Example Variable Shadowing 

// Example 1
// function test() {
//     let a = "Hello";
    
//     if (true) {
//         let a = 'Hi';
//         console.log(a);
//     }

//     console.log(a);

// }

// test()

// Output: 
// Hi
// Hello

// Example 2 Illegal Shadowing
// function test() {
//     var a = "Hello";
//     let b = "Bye";

//     if (true) {
//         let a = 'Hi';
//         var b = 'Goodbye';
//         console.log(a);
//         console.log(b);
//     }


// }

// test()

// Output= SyntaxError: Identifier 'b' has already been declared

//Note: We can shadow var variable using let but 
// can't do the opposite i.e. can't shadow let using var, if done so it will be illegal shadowing

// Illegal Shadowing Error: Variable is already defined!