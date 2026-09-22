const student1 = {
    name: "Uday",
};

const student2 = {
    city: "Bangalore",
};

function showDetails(student) {
    console.log(`My name is ${this.name} and I live in ${student.city}`);
}

showDetails.call(student1, student2);// My name is Uday and I live in Bangalore

/*********************  */ 

const Name={
 name: "John Doe"
};
function details(age, city) {
  console.log(`The name is ${this.name}, age is ${age} and the city is ${city}`);
}
details.call(Name, 25, "New York");

