let a=()=>{
    console.log("hello");   
}
a()

// implicit arrow func
let x=_=>"hello hi"
console.log(x());

 let y=a1=>"hello"+a1
 console.log(y(5));
 
 let z=(a1,b1)=> a1+b1
 console.log(z(5,10));
 
//  explicit arrow
let w=_=>{
    return "hello explicit"
}
console.log(w());

let s=a1=>{
    return "hello"+a1
}
console.log(s(5));

let s1=(a1,b1)=>{
    console.log(a1+b1);
    console.log(a1*b1);  
}

let s2=a=>{
    console.log("hello function expression");   
}
a()


// with parameters and arguments
let b=(a,b)=>{
    console.log(a+b);
    console.log("hello a and b");
   
}
b()

// with more no.of parameters and less no.of aruments
let c=(a,b)=>{
//console.log(a+b);
    console.log(a,b);
    console.log("hello less no.of arguments");
}
c()

// less no.of parameters and more no.of arguments
// argumengts.object-----
// let d=(a,b)=>{
//     console.log(a+b);
//     console.log(a,b);
//     console.log(arguments);
//     console.log(arguments[3],arguments[5],arguments[4]);   
// }
// d(10,20,30,40,50)

// no parameters but more no.of arguments---
//  let e=()=>{
//     console.log("hello");
//     console.log(arguments);  
// }
// e(1,4,5,7,3)

// this keyword

let f= ()=>{
    var g=30
    console.log(g);
    console.log("hello this keyword");
    console.log(this.g);
    console.log(window.g);  
}
f()

// hoisting
a(5,7)
b(1,2)
let q=(a,b)=>{
    console.log("hello hoisting");
    console.log(a+b); 
}
q(5,3)

// return keyword
let l=()=>{
    console.log("hello return keyword");
    // console.log("hello");
    return "hello js css"
}
l()
console.log(l());
console.log(l);

let i= ()=>{
    console.log("hii");
    
}
console.log(i());
console.log(i);

  let n=()=>{
 console.log("prototype"in n);
 }
//  let p=new n()
//  console.log(n);
//  console.log(Object.getPrototypeOf(n)==j.prototype);



// function programing:-
// high article function (haf):-a function will accept another fucn as a parameters.
// call back fucn (cbf):- one func will accept another func as argument.

function demo(a2,a3,task){
    // console.log(a2,a3);
task(a2,a3)
}
demo(10,20,(e,f)=>{
    console.log(e+f);  
})
demo(50,10,function(e,f){
    console.log(e-f);  
})
demo(50,40,function(e,f){
    console.log(e*f);   
})