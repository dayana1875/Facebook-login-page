// implicit typecasting
let a=10,b="20"
console.log(a+b);//1020
console.log(a*b);
console.log(a-b);
// console.log(b%a);
// console.log(b/a);
// console.log(b++);
// console.log(b);
// console.log(a+b);

console.log(true*a*b*true+false);
console.log(true+false*b-a*false+true-20);
console.log(false*true+"20"*a*"20a"-true+false+false);


//explicit typecasting
let x=10,y="20"
console.log(x+Number(y));
console.log(String(x)+Number(y));
console.log(String(20)+number("30")*Boolean(50)-Boolean(0)*Boolean("51"));
console.log(5*6+number("50la")*80+true-false+String(true)+Boolean(67));
console.log(String(undefined));
console.log(number(undefined));
console.log(String(null));
console.log(number(null));
console.log(String(NaN));
console.log(number(Nan));
console.log(isNaN(20));//false
console.log(isNaN("20a"));//true
