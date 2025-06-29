//closures--whenever any function returns it return with the parent function 
console.log("hi");
function anything(){
    let naam="hriday";
    function nothing(){
        console.log(naam);
    }
    nothing();
}
anything();

//
function anything(){
    let naam="hriday";
    function nothing(){
        console.log(naam);
    }
    return nothing;
}
let v=anything();
v();//it should be undefined but print naam?? why becuase function return it return with ti parent values


//closure is ued for private methods ko bnana jb bhi hum js ki classes bdmein ayi
//private methods kaise bnaye securtity yeh sb krne k lie
//private methoda bane k lie we use closures
//

function counter(){
    let count=0;
    function getcount(){
        console.log(count);

    }
    return getcount;

}
let counter1=counter();
console.log(counter1());

function counter(){
    let count=0;
    return {
        getcount:function(){
            return count; //return multiple things
        }
    }
    

}
let counter2=counter();
console.log(counter1.getcount());


function counter(){
    let count=0;
    return{
        getcount:function(){
            return count;
        },
        increment: function(){
            return count+=1;
        },
        decrement: function(){
            return count-=1;
        },
        reset:function(){
            return count=0;
        }
    }
};
let counter3=counter();
console.log(counter3.increment()); //direct access ni hta due to closure

////prototypesssss

let todo={
    title:"buy flowers",
    desc:function(){
        return `your task is to ${this.titel}`;
    }

}
console.log(todo.title);
console.log(todo.desc());
console.log(todo.toString());//[object object] //prototype

//is object k prototype m jakr check kregaa if method us object m ni milta
//if you try to acess a property of object js will firstly find it inside that object then if not found
//it will go its prototype --prototype is also an object which is used as fallback sourse of other properties
//.__proto__ --dender  parent m jana (proto ki help se object k parent pr jynge)
//todo.__proto__===object.prototype 

//object.protoype ka parent 
//Object.protoype.__proto__  ==null parent of everything
//null--object.protoype--todo--(prototypal chain)
 //array.push() --dot notation sed for object push(methods)// hence array is objecct
 //eveerything inside js is objecttt 
 //arr.prototype__==Array.prototype.__proto__==Object.protype__


 //null-Object.prototype--Array.prototype --arr

 //this is called inheritance or prototype (lovely )

 //constructor

 function user(){

 }
 let user1=new user();
console.log(user1);//new create a function as constructor function whose task is to create objects

//jb bhi construtior func bnao to capital letter senao 




