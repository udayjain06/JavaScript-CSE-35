// call stack 
function first() {
    console.log("first");
    second();
    console.log("first end");
}
function second() {
    console.log("second");
    third();
    console.log("second end");
}
function third() {
    console.log("third");
    console.log("third end");
}
first();