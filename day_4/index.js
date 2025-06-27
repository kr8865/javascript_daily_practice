// scopes
//block scope---swarg ke darwaze k andr joh bhi h voh block h
console.log("hi");
{
    console.log("this is blck too");
}


/* let score=33;
if(score>33){
    var x=20;
}
console.log(x);// refernce error 
*/
//let and const has block scope // x=20 block khtm scope khtm

//jb function k andar ni the tbb let and const --script scope (global execution phase)

//gec --var--global scope

//
/* let x=10; //script scope -- global for var
{
    let x=20;
    console.log(x); //block scope  --swarg k darwaze ki vgh se -output-10
}
console.log(x); //otput-10
//block start phase m  ep ni bnta but mcp dubara chlta h
*/
/*var x1=10; 
{
    var x1=20;
    console.log(x1); //20
}
console.log(x1); //20 --varka scope global hta h

//function k andr var ka functional scope hta h 

var a=100;
function fun(){
    var a=50;
    console.log(a); //functional--local scope //50 //mcp bnega ht jyega value bhihtt jyegi
}
console.log(a); //100

 //higher order function
 //functions which takes otherfunction as argument or return them
 

 function a(fn){ // ais hof
    console.log("A");
    fn();
 }
 function b(){
    console.log("B");
 }
 a(b);

function a(){
    console.log("fufu");
    function b(){
        console.log("ff");
    }
    return b;
}
let f=a();
*/


/*console.log(typeof(true));
function getboolean(x){
    let result=[];
    for(i of x){
        if(typeof(i)=="boolean"){
            result.push(i);
            
        }
    }
    return result;
}

function getnumber(x){
    let result=[];
    for(item of x){
        if(typeof(i)=="number"){
            result.push(i);
        }
    }
    return result;
}
function getstring(x){
    let result=[];
    for(i of x){
        if(typeof(i)=="string"){
            result.push(i);
        }
    }
    return result;
}


let x=[1,2,3,false,true,"kratika","hello"];
let bool=getboolean(x);
let num=getnumber(x);
let srt=getstring(x);
console.log(bool);
console.log(num);
console.log(srt);
*/
function getboolean(x){
    return typeof(x)=="boolean";
}
function getstring(x){
    return typeof(x)=="string";
}
function getnumber(x){
    return typeof(x)=="number";
}



function check(x,fn){ //takes function as parameter --hof
    let result=[];
    for(i of x){
        if(fn(i)){ //function clling
            result.push(i);
        }

    }
    return result; //return function calling --high order function
}
let a=[1,2,3,false,true,"k","h"];
console.log(check(a,getboolean));
console.log(check(a,getnumber));
console.log(check(a,getstring));

let ff=[1,2];







