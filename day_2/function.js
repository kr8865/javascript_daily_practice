//
function sum(){
    let num1=10;
    let num2=30;
    console.log(num1+num2);
} //function definition 

sum(); //function calling

//prameterised functions
//no definition needed like let const etc
function sum1(num1,num2){
    console.log(num1+num2);
}
sum1(10,20,30); //arguments

function sum3(){
    let num1=1;
    let num2=2;
    return num1+num2; //returned function
}
let val=sum3(); //catch here
console.log(val);

//function always return something-- undefined if not returned anything
console.log(sum()); //undefined


function val1(num1,num2){
    console.log(num1);
    console.log(num2); //undefined 
    return num1+num2;//not a number

}
console.log(val1(10));//not a number
//if js has any variable that does have any values js assign it to undefined
//undefined + number gives you not a number

//default parameterised function
function sam(num1,num2=40){//defaltu parameter
    console.log(num1);
    console.log(num2);
}
sam(20);
sam(20,40);// in this case ot will use passed value
//overiding take place

function gradecalc(marks){
    if(marks>=90){
        return "A";
    }
    else if(marks>=60){
        return "B";
    }
    else if(marks>=40){
        return "B+";
    }
    else{
        return "fail";
    }

}
gradecalc(45);

function summ(num1,num2){
    return num1
    +num2;
}
let ans=summ(10,"sam");
typeof(ans);
console.log(summ(10,"sam")); //typecasting
console.log(summ(10,true));
console.log(summ("krati",true))

let funksion=function sam(){ //this is function expression 
    console.log("hi");
}
//whenever we store a function in variable we call it- function expressiom
//first class function
//first class citizen 
//whenerver js functin run then  global execution unit is created 
//geu--mcp(memory creation phas) // cep--code exection phase
// for function new execution unit is created 
// in mcp phase memory is allocated and then cep - assign values to the variables
//once code is completed exection unit is deleted.


