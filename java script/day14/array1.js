let arr=[10,20,30,40,50]
console.log(arr);
console.log(arr.includes(40));
console.log(arr.includes(80));
console.log(arr.includes(4));

// index
console.log(arr.indexOf(80));
console.log(arr.indexOf(50));
console.log(arr.indexOf(10));

// flat
let arr1=[10,[20,30],[[40]],[[[[[50]]]]]]
console.log(arr1);
console.log(arr1.flat());
console.log(arr1.flat(3));
console.log(arr1.flat(Infinity));

let arr3=[10,20,30,40,50]
console.log(arr3);
let arr4=[110,210,310]
let arr5=[2,3,4]
console.log(arr4);
console.log(arr3.concat(arr4,arr5));

let arr6=[2,3,12,5,8,20,2]
let w=arr6.find((e)=>{
return e>5
})
console.log(w);
let w1=arr6.findLast((e)=>{
    return e>5
})
console.log(w1);

let x=arr6.findIndex((e)=>{
    return e>5
})
console.log(x);

let x1=arr6.findLastIndex((e)=>{
    return e>5
})
console.log(x1);


// create an array find the min,max,avg,sum
// [50,40,30,20,10,8,9,20,7]

let arr7=[50,40,30,20,10,8,9,20,7]
// console.log(arr7);
// let y=arr7.reduce((acc,v)=>{
//     //  console.log(acc,v);
//     return acc+v   
// })
// console.log(y);
// console.log(arr7);

// sum
function sum(){
    let s=0
    for(let i=0;i<arguments.length;i++){
        s+a[i]
    }
    console.log(s);
    
}
sum()

// avg
function avg(){
    for(let i=0;i<a.length;i++){
        s+=a[i]
    }
// console.log(s);
}

// maximum
function maximum(){
    let max=a[0]
    for (let i=1;i<a.length;i++){
        if(a[i]>max){
            max=a[i]
        }
    }
    console.log(max);
    
}
maximum()

// minmum
function minmum(){
    let min=a[0]
    for (let i=1;i<a.length;i++){
        if(a[i]<min){
            min=a[i]
        }
    }
    console.log(min);
    
}
minmum()

// odd
function odd(){
    let z=[]
   for (let i=0;i<a.length;i++){ 
    if(a[i]%2!=0){
        z.push(a[i])
    }
}
console.log(z);
}
odd()

// even
function even(){
    let z=[]
   for (let i=0;i<a.length;i++){ 
    if(a[i]%2=0){
        z.push(a[i])
    }
}
console.log(z);
}
even()

// prime
function prime(d){
    if (d<2){
        return flase
    }
    for (let i=2;i<d/2;i++)
        if(d%i==0){
            return false
        }
    }
    return true

    let r=[]
    for(let i=0;i<a.length;i++)

