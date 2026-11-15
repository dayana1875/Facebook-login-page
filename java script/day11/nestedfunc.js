// demo
function demo(){
    function d1(){
        console.log("hello d1"); 
    }
    function d2(){
        console.log("hello d2");
        
    }
    d1()
    d2()
}
demo()

// 2.return
function demo1(){
    function d1(){
        console.log("hello d1"); 
    }
    function d2(){
        console.log("hello d2");
        
    }
return d1
}
demo1()()

// 3.array()
function demo2(){
    function d1(){
        console.log("hello d1"); 
    }
    function d2(){
        console.log("hello d2");
        
    }
return[d1,d2]
}
demo2()[0]()
demo2()[1]()

// lexical scope/scope chain
// lexical scope is the searching the inside variable local,gobal .
var a=10
function demo3(){
    function d1(){
        var a=20
        console.log(a);
        console.log("hello d11"); 
        console.log("this.a");
        console.log("window.a");   
    }
    function d2(){
        console.log(a);
        console.log("hello d12");
        
    }
    d1()
    d2()
}
demo3()

// recursive function()
function demo4(){
    if (a==0){
        return 0
    }
    return a+demo4(a-1)
}
console.log(demo4(5));

// currying function()
function demo5(x){
return function w1(y){
    return "hello world"+x*y
}
}
let s1=demo5(4)
console.log(s1(8)); //hello world 32
console.log(demo5());//return func completely will prime

