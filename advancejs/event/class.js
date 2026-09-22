class student
{
 constructor(name,marks)
 {
  this.name=name;
  this.marks=marks;
 }
 display()
 {
  console.log("Name: "+this.name);
  console.log("Marks: "+this.marks);
 }
}
const obj=new student("Raman",30);
obj.display();