// Exception Handling in JavaScript
// try catch block is used to handle exceptions in JavaScript. 
// three type try , catch and finally block.
try {
    // Code that might throw an error
    console.log(b);
} catch (error) {
    console.log("An error occurred: " + error.message);
} finally {
    console.log("This will always execute.");
}

//*********//
// constom error
function checkage(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or older.");
    }
    console.log("Age is valid.");
}
try{
    checkage(15);
}
catch (error) {
    console.log(error.message);
}

//****************//
// additional example//
// global message variable  //
let college = "Abes Engineering College";
function displayCollege() {
    try {
        console.log(college);
    } catch (error) {
        console.log("An error occurred: " + error.message);
    }
}
displayCollege();
// function scope variable
function updateCollege(newCollege) {
    console.log("Updating college to: " + newCollege);
}
updateCollege("ABES Engineering College");


// block scope variable
// what is block scope variable in javascript?
if(fruit){
    let fruitName = "Apple";
    console.log(fruitName);
}
console.log(fruitName); // This will cause an error since fruitName is not defined in this scope.