// prending phase
// function demo(a,b){
//     new Promise((res,rej)=>{
//         setTimeout(()=>{
//             for(let i=a;i<=b;i++){
//                 console.log(i);   
//             }
//         },5000)
//     })
// }
// demo(10,"20a")
// function d1(){
// console.log("hello");
// }
// d1()

// resolve and rejected
function demo(a,b){
    new Promise((res,rej)=>{
        setTimeout(()=>{
            if(isNaN(a)||isNaN(b)){
               rej()
            }
            else{
                res()
            }
        },5000)
    })
    .then(()=>{
        for(let i=a;i<=b;i++){
            console.log(i);   
        }
    })
    .catch(()=>{
        console.error("dabba give the msg");
    })
}
demo(10,20)
function d1(){
    console.log("hello"); 
}
d1()

// promise chaining
let room_is_cleaned=true
let x=new Promise((resolve,reject)=>{
    if(room_is_cleaned){
        resolve()
    }
    else{
        reject()
    }
})
.then(()=>{
    console.log("room is cleaned");  
})
.then(()=>{
    console.log("promise 2");  
})
.then(()=>{
    console.log("promise 3");  
})
.then(()=>{
    console.log("promise 4");  
})
.then(()=>{
    console.log("promise 5");  
})
.catch(()=>{
    console.log("room is not cleaned");   
})
.catch(()=>{
    console.log("rejected promise 2");   
})
.catch(()=>{
    console.log("rejected promise 3");   
})
.catch(()=>{
    console.log("rejected promise 4");   
})
.finally(()=>{
    console.log("hello final 1");   
})
.finally(()=>{
    console.log("hello final 2");   
})
.finally(()=>{
    console.log("hello final 3");   
})
.finally(()=>{
    console.log("hello final 4");   
})
.finally(()=>{
    console.log("hello final 5");   
})

// destructing
//converting Elements and keys into a variables.they are two Types.
//array dest--> elements are converted to a varibles.
//object dest-->keys are converted into a variables.

//array dest
let arr=[10,20,30,40]
let [q,r,s,d]=arr
console.log(q);
console.log(r);
console.log(s);
console.log(d);

// object dest
let obj={
    name1:"abc",
    id:123,
    role:"dev"
}
console.log(obj);
let {name1}=obj
console.log(name1);
let {id,role}=obj
console.log(id);
console.log(role);

// rest and spread(...) it indicates with ...(dotes)
//rest-->packing of data rest parameter should be used for last parameter only(only one rest parameter)(lhs)
//spread-->unpacking of data(rhs)
//multiple spread parameter we can use it.

//spread
let arr1=[10,20,30,40]
let arr2=[50,80]
console.log(...arr1);
let arr3=[arr1,...arr2]
console.log(arr3);
console.log(...arr3);

// rest
function d3(p,...u){  //rest
    console.log(p);
    console.log(u);  
}
d3(10,20,30,40)
