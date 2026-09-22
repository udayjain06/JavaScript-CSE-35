console.log("1");  // synchronous code executes first
setTimeout(()=> {
    console.log("2");// asynchronous code executes after the synchronous code, after the specified delay (0 milliseconds in this case)
}, 0);
console.log("3");// synchronous code executes first



