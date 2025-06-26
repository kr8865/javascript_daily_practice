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
 */

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