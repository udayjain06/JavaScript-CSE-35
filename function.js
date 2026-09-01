function add (a, b) {
  return a + b;
}
console.log(add(2, 3)); // Output: 5

// arrow function
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(2, 3)); // Output: 6
// WHAT IS arrow function ?
// arrow function is a shorter syntax for writing functions in JavaScript. It allows you to write functions in a more concise way, especially for simple operations. Arrow functions also have different behavior for the 'this' keyword compared to regular functions, which can be useful in certain contexts.

// array 
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: cherry

// string methods
let str = "Hello, World!";
console.log(str.length); // Output: 13
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!