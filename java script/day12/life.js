(function (a,b){
    console.log("hi life");
    console.log(a+b);   
 })(10,20);   here, we kill the program by using;
(()=>{
    console.log("hello life"); 
})()
let a=(()=>{
    console.log("hello life"); 
})()