// set time out function
// what is setTimeout() in JavaScript? 
// we set a timer which executes a function or specified piece of code once the timer expires.

// syntax
// setTimeout(function, milliseconds, param1, param2, ...);
console.log("Start");
setTimeout(function() {
    console.log("This message is displayed after 3 seconds");
}, 3000);
console.log("End");

// 
let count = -1;
let timer = setTimeout(() => {
    console.log(count);
    count++;
    if (count ==  5) {
       clearInterval(timer);
    }
}, 3000);