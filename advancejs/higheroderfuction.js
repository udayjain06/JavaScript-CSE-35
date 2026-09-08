// Hosting
// console.log(age); // undefined (not ReferenceError)
// let age = "25";
// let temporal(tdz) dead zone so error is created when we try to access the variable before initialization
// the period btw intering the scope and initialization let and const variables is called temporal dead zone 
// for eg 
{
    // //tdz start 
    // let x = 10;
    // tdz end 
}

// *********************************//
// *********************************//

// closure
// joh inner function hai woh outer function ke variables ko access kar sakta hai , ebven when the outer function finished execution.

function outer(){
    let counter = 10;
    function inner(){
        counter++;
        console.log(counter);
    }
    return inner;
}
let increment = outer();
increment();
increment();
increment();

// higher order function
// what is higher order function
// a function that takes another function as an argument or returns a function as its result is called higher order function
function calculate(a,b,operation){
    return operation(a,b);
}
function add(a,b){
    return a+b;
}   
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
console.log(calculate(10,5,add));       // Output: 15
console.log(calculate(10,5,subtract));  // Output: 5
console.log(calculate(10,5,multiply));  // Output: 50
console.log(calculate(10,5,divide));    // Output: 2


// .map
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(function(num) {
  return num * num;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// basic for loop
let numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
  numbers1[i] = numbers1[i] * numbers1[i];
}
console.log(numbers1); // Output: [1, 4, 9, 16, 25]
// with the help of only arrow function 
let numbers2 = [1, 2, 3, 4, 5];
let squaredNumbers2 = numbers2.map(num => num * num);
console.log(squaredNumbers2); // Output: [1, 4, 9, 16, 25]
