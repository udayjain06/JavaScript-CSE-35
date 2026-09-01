// make a arrow function that takes two parameters and returns their sum
const sum = (a, b) => a + b;
console.log(sum(5, 10)); // Output: 15

// function default parameters
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!

// call back function example
function display(result) {  
    console.log(result);
}
function cal(a, b, callback) {
    callback(a+ b);
}
cal(5, 10, display); // Output: 15