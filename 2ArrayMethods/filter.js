// What is filter() ?

const nums = [1, 2, 3, 4];

const moreThanTwo = nums.filter((num) => {
    return num > 2;
})

console.log(moreThanTwo)