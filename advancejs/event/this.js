// what is the use of this keyword in javascript
// this keyword refers to the object that is executing the current function
const student = {
    name: "Uday",
    showname() {
        console.log(this.name);
    }
};
student.showname();