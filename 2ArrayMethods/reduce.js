// What is reduce() ?

const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0)

console.log(sum);
// Output = 10