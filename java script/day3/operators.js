let a=10,b=20
// arthimatic
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(b/a);
console.log(b%a);
// post
console.log(a++);
console.log(a);
// pre
console.log(++b);
console.log(b);
console.log(a--);
console.log(a);

console.log(--b);
console.log(b);

console.log(2**6);

// assignment
let x=10,y=20
console.log(x+5);
console.log(x);
x+=5
console.log(x);
console.log(y-=5);
console.log(y);
console.log(x*=2);
console.log(x/=2);
console.log(x%=3);
console.log(y**=2);

// relational
 console.log(5=="5");//true
console.log(5==5);//true
console.log(5!="5");//false
console.log(5==="5");//false
console.log(5===5);//true
console.log(5!=="5");//true
console.log(5>7);//false
console.log(6<5);//false
console.log(4>5);//false
console.log(4<5);//true

// logical
let s=10,t=20,w=25,e=30
console.log((s>t)||(w>e));//false
             //false//false
console.log((s<t)||(w>e));//true
             //true//false
console.log((s>t)||(w<e));//true
             //false//true
console.log((s>t)||(w<e));//true
            //true //true

 console.log((s>t)&&(w>e));//false
             //false //false
console.log((s<t)&&(w>e));//false
             //true //false
console.log((s<t)&&(w<e));//false
             //false //true
console.log((s<t)&&(w<e));//true
            //true  //true
             
  let r=true
  console.log(!r);//false

  //ternary operator
  let a=100,b=20,c=500,d=600
  let res=a>b?"a is gr":"b is gr"
   console.log(res);
             
let temp=(a>b?(a>c?"a is gr":"c is gr") 
             :(b>c?"b is gr":"c is gr"))
console.log(temp);
                       
let temp=a>b?(a>c?(a>d?"a is gr":"d is gr")
                :(c>d?"c is gr":"d is gr"))
            :(b>c?(b>d?"b is gr":"d is gr")
                :(c>d?"c is gr":"d is gr"))   
console.log(temp1);
                           