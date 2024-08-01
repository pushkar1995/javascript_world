//var vs let vs const
//Scope

//Function Scope
function name() {

}

//Block Scope
{

}

//1. Var is Functional Scope

var a = 15;

console.log(a);
// Output = 15

{
    var b = 5;
}

console.log(b);
// Output = 5

//2. let is block Scope

// {
//     let c = 5;
// }
// console.log(c)
// Output = Reference Error: c is not defined

{
    let d = 20;
    console.log(d)
}
// Output = 20

{
    const e = 30;
    console.log(e)
}
// Output = 30

{
    const f = 40;
}
    console.log(f)
// Output = Reference Error: f is not defined
