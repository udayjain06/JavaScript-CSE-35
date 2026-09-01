// for loop (initialization; condition; increment/decrement)
// 1 initialization: let i = 0; // starting point
// 2 condition: i < 5; // loop will run as long as this condition is true
// 3 statement: console.log(i); // code to be executed in each iteration
// 4 increment/decrement: i++; // update the loop variable
// 5 continue statement: if (i === 2) continue; // skip the rest of the loop for this iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // skip the rest of the loop for this iteration
  console.log(i); // Output: 0, 1, 3, 4
}
// ***************************//
// while loop
// 1 initialization: let i = 0; // starting point
// 2 condition: i < 5; // loop will run as long as this condition is true
// 3 statement: console.log(i); // code to be executed in each iteration
// 4 increment/decrement: i++; // update the loop variable
// 5 break statement: if (i === 3) break; // exit the loop when this condition is true
let i = 0;
while (i < 5) {
    i++; // update the loop variable
    console.log(i); // Output: 0, 1, 2, 3, 4
}
//*************************//
//do while loop
// 1 initialization: let i = 0; // starting point
// 2 statement: console.log(i); // code to be executed in each iteration
// 3 increment/decrement: i++; // update the loop variable
// 4 condition: i < 5; // loop will run as long as this condition is true
let j = 0;
do {
    console.log(j); // Output: 0, 1, 2, 3, 4
    j++; // update the loop variable
}while (j < 5);//condition: j < 5; // loop will run as long as this condition is true

//**********//
for (let i = 1; ; i+=2) { // infinite loop with increment of 2
    console.log(i);
    if (i >= 10) {
        break; // exit the loop when this condition is true
    }
}
//**********//
let k = 1;
for (; ;) { // infinite loop
    if (k > 10) {
        break; // exit the loop when this condition is true
    }
    console.log(k);
    k=k + 2; // update the loop variable with increment of 2
}
//********//

let sum = 0 ;
for(let i =0 ; i <=9; i++ , sum+=i);
console.log(sum);
//******************************** */