// a=10
// b=20
// console.log("hello ");
// console.log(b);
// console.log(10*20);
// console.log(window);
// console.log("hello window")

//  eventloop-----
// function task1(){
//     console.log("Task1");
//     }
// function task2(){
//     console.log("Task2");
//     }
//  function task3(){
//     console.log("Task3");
//     }
// function task4(){
//     console.log("Task4");
//     }
// function task5(){
//     console.log("Task5");
//     }
// function task6(){
//     console.log("Task6");
//     }
    
// task1()
// setTimeout(task2,3000)
// task3()
// setTimeout(task4)
// let p1=Promise.resolve()
// p1.then(task5)  
// let p2=Promise.resolve()
// p2.then(task6)   


// destructing---:it is extrat the variables.
// arr destructing:

// let arr= ["toxic","KGF","Kgf-2","Moona"]
// // console.log(arr);
// let[a,b,c,d]=arr
// console.log(a);

// // object destructing------
// let lapi={
//     brand:"dell",
//     price:20000,
//     color:"black",
//     specification:{
//         ram:"128GB",
//         processer:"ryzan"
//     }
// }
//  console.log(lapi.brand);

// let{brand,price,color,specification}=lapi

// let {ram,processer}=specification


// Rest&pread:
// Rest:- it is used to packing the elements.[...a],it must be used in last of the parameter.
// function display(a,b,c,...n){
//      console.log(`a);
//   values:${a}`) ; 
// }
// display(1,2,3,4,5,6,7,8,9,10)

// // spread:- it is used to spread the operators.
// let n=[10,20,30]
// let b=[n,30,40,50]
// console.log(b);
// let c=[...n,30,40,50]
// console.log(c);

// let lapi={
//     brand:"dell",
//     price:20000,
//     color:"black",
//     specification:{
//         ram:"128GB",
//         processer:"ryzan"
//     }
// }

// let lapDet={
//     detaile:"About lap",
//     ...lapi
// }
// console.log(lapDet);//{detaile: 'About lap', brand: 'dell', price: 20000, color: 'black', specification: {…}}


// // spread
// let str=`movie name`
// console.log(str); //movie name
// console.log(...str);//m o v i e n a m e


let userName=document.querySelector("Name")

userName.addEventListener("change",(event)=>{
    console.log(event.target);
    
})