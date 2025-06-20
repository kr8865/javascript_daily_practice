// topic 1-- array

let arr=[1,2,3,4] // declaring a array

let ans=arr[0];
console.log(ans); // indexing in array

// array is reference based
let arr2=arr;
console.log(arr2);

arr2[0]=5;

console.log(arr);

//how to insert and delete elements

let char=[1,2,3,4,5,6,7]
char.push(1); //push to end //return array length

char.pop() // delete element from end //return elemet that is deleted

char.shift() // delete element from start returns element delete

char.unshift(10) //insert element in start // returns array size
  
//array methods

//1.splice //destructive method
 let sp=arr.splice(1,3); // 1-si 3-ei
console.log(sp);

//2/slice //non destructive method
let sl=arr.slice(0,2); //si count-not included
console.log(sl);

// split method-works for string
let je="i,am,kratika"
let val=je.split(",")
console.log(val);

//join workd for array
let a=val.join();
console.log(a);

//includes
console.log(val.includes("a"));

//includes work for string as well

console.log(je.includes("k"));

//indexof()-works for both string and array

let i=val.indexOf("am");
console.log(i);

console.log(je.indexOf("kr"));

//filter

let farr=[1,2,3,4,5]
let nearr=farr.filter(x=>x>2)
console.log(nearr);

console.log(farr.reverse());





