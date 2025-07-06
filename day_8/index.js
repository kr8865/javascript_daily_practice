//callback k andr callback --calback hell or hell of dom
//code grow horizontally --this makes js slow
//2nd diadv---step 1 chalaya hi ni step 2 kbhi ni chlegaa --dependency jada hti h

//callback --promises-async-await

/////// ----promises---(solution of callback hell)

/*function selectimage(){
    setTimeout(function(){
        console.log("select")
    },3000)
};
selectimage();

let promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        let data="hi meri jaan";
        resolve(data);
        


    },3000)
});//returns a promise
promise.then(function(data){
   console.log(data);

}).catch(function(ops){
    console.log(ops);
})
*/
/* let p1=new Promise((resolve,reject)=>{
    console.log("kaam chl rha h");
    setTimeout(()=>{
        resolve();

    },3000)

})
p1.then(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(" h gya run");
            resolve();
        })
        
    },5000)

}).then(()=>{
    console.log("kaam h gye mere dono");
})
//vertical growth h ri h--.then() ki chaining h ri h jada hii bahut
*/

//async-await 
async function k(){
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("3 sec h gye");
            resolve();
        },3000)

    })
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("frse 3 h gye");
            resolve();

        },3000)

    })
    console.log("dono kaam h gye");

};
k();//returnig a promise
//async returns a promise always

//async always work with await 

//DOM -DOCUMENT OBJECT MODEL
//documnet -html , object- js,model-manipulate

//browser mujhe document dega 
//it gives me dom tree 
//html -->head --link ,title,meta
// |____> body --tages

//selectors- 5--getelementbyid , getelementbyclass,