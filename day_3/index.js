//hoisting - when you try to acess any variable or function before declaration is called hoisitng
console.log(a) // undefined 
kra(); 
function kra(){
    console.log("helloe");
}
console.log(a) //undefined
kra1()
function kra1(){
    console.log(a); //undefined
    console.log("kra"); //kra
}
var a=10;


console.log(a1);
let a1=10; //kya hoisting hti h haan hti h let mein-- variable h pta h but acess ni kr skte!!!!

//whenever gec is created global variable is created alon with this

//anonymous is -gec
