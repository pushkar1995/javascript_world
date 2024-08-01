// What is map() ?
// Map method is used to create new array from existing one by applying function to each one of the 1st array

const nums = [1, 2, 3, 4];

const multiplyThree = nums.map((num, i, arr) => {
    return num * 3 + i;
})

console.log(multiplyThree);