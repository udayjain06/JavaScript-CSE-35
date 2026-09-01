// array destructuring
let arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3    


// object destructuring
let obj = { name: "John", age: 30 };
let { name, age } = obj;
console.log(name); // Output: John
console.log(age); // Output: 30 

// spread operator(...)
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

let obj1 = { name: "John", age: 30 };
let obj2 = { ...obj1, city: "New York" };   
console.log(obj2); // Output: { name: "John", age: 30, city: "New York" }

// rest operator(...)
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
 

function sum (...numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total; 
}
