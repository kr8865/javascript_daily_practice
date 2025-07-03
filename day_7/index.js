//classes
//constructor function is used to create objects
/* function Student(name,age){
    this.name=name;
    this.age=age;

}
Student.prototype.printname=function(){
    console.log(`${this.name} age is ${this.age}`);
}
let student1=new Student("radha", 26);
let student2=new Student("kratika",25 );
console.log(student1);
console.log(student2);
console.log(student1.printname());
*/

//classes ka alternative is object
//classes are syntatical sugar of constructor function
/*class{
consstructor{

}}*/

class Person{ //capital letter
    constructor(name,age){
    this.name=name;
    this.age=age;
    }
    getname(){
        console.log(this.name);

    }
}
let p=new Person("meena",20);
console.log(p.getname());

//inheritance in classes
class Student extends Person{
    //it extents the whole person class  
    //override-dubra se constructor define krna hga
    constructor(name,age,ggpn){
        super(name,age); //joh inherit krna h parent se toh super m dal dete h

            
        
        this.ggpn=ggpn;
        
    }
    getname(){
        console.log(`super se upr ${this.name}`);
    }
}
let student2=new Student("aa",22,1);
console.log(student2.ggpn);

//this
//this kisko point kr rha h voh decide hga function calling se
//5 types of cuntion calling-
/*1.regular function invocation
fun(){

}
fun();
2.mehtod invocation-
object k andr func ko method khte h
let obj={
gn:function(){

}
}
3.constructor invocation
func fun(){
}
new se cll krnge

4.indirect calling-
call()
apply()
bind()

5.arrow function

*/



//window object--jb bhii gec bnta h global object bnta h orr browser k case m usko window object bole h
//1. regular invocation
 function fn(){
    console.log(this);//this is pointing to window this time
}
fn();

//2.method invocation
let obj={
   f: function() {
    console.log(this);//it will point to object over which it is called upon

    }
}
let ob={
    f:function(){
        console.log(this);
    }
}
let f1=ob.f;
f1();//this time regular calling will point to window

//3.constructor fun calling
function R(){

}
let r1=new R();//this points to newly created object 

//call
let obc={
    fn2:function(){
        console.log("hi");
    }
}
let obc2={
    a:20
}
obc.fn2.call(obc2); //this points to object which is passed as parameter
obc.fn2.apply(obc2,[1,2,3]);