// without arguments and no parameters
function demo(){
    console.log("hello js")
}
demo()
demo()

// with parameters and arguments
function demo1(a,b){
    console.log(a+b);
    console.log("hello a and b")
}
demo1(10,20)

// with more no.of parameters and less no.of aruments
function demo2(a,b){
    console.log(a+b);
    console.log(a,b);
    console.log("hello less no.of arguments");
}
demo2(10)

// less no.of parameters and more no.of arguments
// argumengts.object
function demo3(a,b){
    console.log(a+b);
    console.log(a,b);
    console.log(arguments);
    console.log(arguments[3],arguments[5],arguments[4]);   
}
demo3(10,20,30,40,50)

// no parameters but more no.of arguments
function demo4(){
    console.log("hello");
    console.log(arguments);  
}
demo4(1,4,5,7,3)

// this keyword
var x=10
function demo5(){
    var x=30
    console.log(x);
    console.log("hello this keyword");
    console.log(this.x);
    console.log(window.x);  
}
demo5()

// hoisting
demo(5,7)
demo(1,2)
function demo6(a,b){
    console.log("hello hoisting");
    console.log(a+b); 
}
demo(5,3)

// return keyword
function demo7(){
    console.log("hello return keyword");
    // console.log("hello");
    return "hello js css"
}
demo7()
console.log(demo7());
console.log(demo7);

function demo8(){
    console.log("hii");
    
}
console.log(demo8());
console.log(demo8);

function demo9(){
console.log("prototype"in demo9);
}
let w=new demo9()
console.log(w);
console.log(Object.getPrototypeOf(w)==demo9.prototype);
