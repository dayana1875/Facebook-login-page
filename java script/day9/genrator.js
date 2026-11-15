function * demo(){
    yield("helo")
    yield("hi")
    yield("tata")
}
let q=demo()
console.log(q.next().value);
console.log(q.next().value);
console.log(q.next().value);
console.log(q.next().value);
console.log(q.next().value);

let w=function * demo(){
    console.log("first class");
    yield "hello first"
    console.log("second class");
    yield "hello second"
    console.log("third class");
    yield "hello third"
}
console.log(w);
let e=w()
console.log(e);
console.log(e.next().value);
console.log(e.next().value);
console.log(e.next().value);
console.log(e.next().done);

// less no.of parameters and more no.of arguments
// argumengts.object
let g= function * demo(a,b){
    yield(a+b);
    yield(a,b);
    yield(arguments);
    yield(arguments[3],arguments[5],arguments[4]);   
}
demo(10,20,30,40,50)
console.log(g);
console.log(g.next().value);

// this keyword
 let f=function *demo (){
    var x=30
 }
