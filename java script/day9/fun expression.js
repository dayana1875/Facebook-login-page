let a=function(){
    console.log("hello function expression");   
}
a()
a()

// with parameters and arguments
let b=function(a,b){
    console.log(a+b);
    console.log("hello a and b");
   
}
b()

// with more no.of parameters and less no.of aruments
let c=function(a,b){
//console.log(a+b);
    console.log(a,b);
    console.log("hello less no.of arguments");
}
c()

// less no.of parameters and more no.of arguments
// argumengts.object
let d=function(a,b){
    console.log(a+b);
    console.log(a,b);
    console.log(arguments);
    console.log(arguments[3],arguments[5],arguments[4]);   
}
d(10,20,30,40,50)

// no parameters but more no.of arguments
 let e=function(){
    console.log("hello");
    console.log(arguments);  
}
e(1,4,5,7,3)

// this keyword
var x=10
let f=function (){
    var x=30
    console.log(x);
    console.log("hello this keyword");
    console.log(this.x);
    console.log(window.x);  
}
f()

// hoisting
a(5,7)
b(1,2)
let g=function (a,b){
    console.log("hello hoisting");
    console.log(a+b); 
}
g(5,3)

// return keyword
let h=function (){
    console.log("hello return keyword");
    // console.log("hello");
    return "hello js css"
}
f()
console.log(f());
console.log(f);

let i=function (){
    console.log("hii");
    
}
console.log(i());
console.log(i);

function j(){
console.log("prototype"in j);
}
let w=new j()
console.log(w);
console.log(Object.getPrototypeOf(w)==j.prototype);
