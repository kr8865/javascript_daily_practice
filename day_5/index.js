//array methods
//1.foreach --it is function notloop --it accepts call back function
//A(b)//b is callback function if it is called in the same function

let array1=["kratika","pushpendra","hriday"];
array1.forEach(function(item,index){
    console.log(item,index);
})
//for each does not return anything --just ofr iteration

//map()--it accepts calback function
//it returns a new array--which means you can return anything

let marks=[10,5,18,20,25,30]
let m=marks.map(function(item){
    return item*2;
})

console.log(m);
let marks1=[10,5,18,20,25,30]
let m1=marks1.map(function(item,index){
    return [item*2,index]
})

//filter
//it also accept call back function
//it return newarray
//it only sends the truth ful values to new array
//can notreturn indexcan return only item
let mm=[10,20,30,50]
mp=mm.filter(function(item){
    if(item>20){
        return item;
    }
})
console.log(mp);

//sort method
let af=[10,2,22,21,22]
let ars=af.sort();//lexigropahical sorted
console.log(ars);

let a1=[1,2,10,3,40,5];
let a2=a1.sort(function(a,b){
    return a-b;
})
console.log(a2);

let menu=["chicken masal","poha","chicken biryani"]
let mes=menu.filter(function(item){
    if(!item.startsWith("c")){
        return item;
    }
})
console.log(mes);