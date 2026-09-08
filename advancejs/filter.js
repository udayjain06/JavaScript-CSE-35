// filter 
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(num) {
    return num % 2 == 0;
});
console.log(evenNumbers); // Output: [2, 4]

// ***********************//
// filter with arrow function
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers); // Output: [1, 3, 5]

// .reduce   
// combines all elements of an array into a single value by applying a function to each element and accumulating the result.
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15

// ***********************//
// reduce with arrow function
let product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product); // Output: 120


// with the help of reduce find the maximum number in an array
let maxNumber = numbers.reduce((max, currentValue) => {
    return currentValue > max ? currentValue : max;
}, numbers[0]);
console.log(maxNumber); // Output: 5