function demo(a,b){
    setInterval(() => {
        for(let i=a;i<=b;i++){
            console.log(i);  
        }
    }, 5000);
}

// demo(10,"20a")
function d1(){
    console.log("hello");  
}
d1()

let date=new Date()
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.getMonth());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.toTimeString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

let h1=document.getElementById("d1")
function time1(){
    let date1=new Date()
    // console.log(date1.toLocalTimeString()) ;
    h1.innerText=date1.toLocaleTimeString() 
}
let x=setInterval(time1,1000)
let btn=document.querySelector("btn")
btn.onclick=()=>{
    clearInterval(x)
}

let btn1=document.querySelector("btn1")
btn1.onclick=()=>{
  x=setInterval(time1,1000)
}
let inc=document.querySelector(#inc)
let de=document.querySelector(#de)
let span=document.querySelector(#span)

inc.onclick=()=>{
     span.innerText++
}

de.onclick=()=>{
    span.innerText++
}

de.onclick
let reg=document.querySelector("#reg")
reg.onclick=()=>{
    window.open("#reg")
}
