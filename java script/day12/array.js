//literal way
let arr=[]
console.log(arr);
// new keyword
let arr1=new Array()
console.log(arr1);
// constructor way
let arr2=Array()
console.log(arr2);

let a=[10,"hi",true,false,10n,NaN,window,null,undefined]
console.log(a);

console.log(a[1]);
console.log(a[5]);

let b=[]
console.log(b);
// push( no. of arguments) (it will insert the elements from ending.)
b.push(10,20)
console.log(b);
b.push(30)
console.log(b);
b.push("hi")
console.log(b);
// unshift() it is used to insert the element from the staring.
b.unshift(50,60)
console.log(b);
// Pop() it will remove only one element from element.
b.pop()
console.log(b);
b.pop()
console.log(b);
// shift()  it is used to remove from the element.
b.shift()
console.log(b);
b.shift()
console.log(b);

// length()
console.log(b.length);
let length=b.length
for(let i=1;i<=length;i++){
    b.pop()
}
console.log(b);

