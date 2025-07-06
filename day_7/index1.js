//js is single threaded ek baar m ek hi kaam hga
//all task are done ony by one and line by line
//synchronous-- all taks are done line by line 
//joh phle likha h voh phle execute hga
//set time out--it is present inside browser not inside js
//count time
//these mathods to bring delay in function

//but js m koi trika ni h js ko rokne ka
setTimeout(() => {
    
}, timeout);
setTimeout(function f(){
    console.log("gi");

},5000);

//location,local Storage,time outerHeight,setInterval,url,console(browser methods)
//4 sec k lie callback queue k andr jata h joh vhn store rhta h 4 sec tkk  --fr jata h event loop k andr--fr vhn se call stack m jata h
//callbackqueue-- webapi--superpower of browser
//phle voh store kra leta h browser -- jb api bulate h tb--
//jitna intezaar krna h utna kiya then usko bhj dega callback queue
//callback quque-
//event loop -check krta h ki mer call stack khali h --function ko bhj dega or if khali ni h toh yeh loop chlta rhega
//