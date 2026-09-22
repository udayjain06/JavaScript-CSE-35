const student = {
    name: "Uday",
};
function show(){
    console.log(this.name);
}
show();//undefined
const newfuction = show.bind(student);
newfuction();