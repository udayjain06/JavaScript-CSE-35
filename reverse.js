// we have to reverse an array without using another array and using for loop and using coma operator//
const a = [10,20,30,40];
for(let i =0 , j = a.length-1; i < j; i++ , j--) {
    const p = a[i];
    a[i] = a[j];
    a[j] = p; 
    console.log(a);
}


// *******************//
function start() {
    var name = "ABC";
    console.log(name); // Output: ABC
    if(true) {
        var name = "XYZ"; // var is function scoped, so it can be accessed outside the block
        console.log(name); // Output: XYZ
    }
    console.log(name); // Output: XYZ
}
start();
/*************************/
var x = 10;
function test() {
    console.log(x); // Output: 10       
}
test(); // Output: 10
/*************************/
function toshit() {
    var toshit='abc';
    console.log(toshit); // Output: abc
    if(true) {
        let toshit='xyz';
        console.log(toshit); // Output: xyz
    }
    console.log(toshit); // Output: abc
}
toshit();
// what is hosting in javascript?
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations. For example, if you declare a variable using 'var', it will be hoisted to the top of its function or global scope, but its value will remain undefined until the line where it is initialized is executed. Functions declared using function declarations are also hoisted, allowing them to be called before their actual declaration in the code.
