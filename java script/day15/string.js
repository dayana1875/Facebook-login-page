let str="hello World"
console.log(str);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.replace("l","x"));
console.log(str.replaceAll("l","x"));

let str1="hello world hello js hello css"
console.log(str1.replaceAll("hello","hi"));
console.log(str1);
let str3="hello"
console.log(str3.repeat(50));
let str4="hello"
console.log(str4);
console.log(str.trim());
console.log(str4.trimStart());
console.log(str.trimEnd());

let str5="hello javascript world"
console.log(str5);
console.log(str5.slice(6,10));
console.log(str5.substring(6,10));
// substr(si,count-ch)
console.log(str5.substr(6,5));
console.log(str5.split(''));
console.log(str5.split('o'));
console.log(str5.split(" "));

let str6="hello"
let str7="world"
console.log(str6.concat(str7));
console.log(str6.indexOf("r"));
console.log(str6.lastIndexOf("l"));
console.log(str6.includes("u"));
console.log(str6.includes("h"));
console.log(str6.startsWith("H"));
console.log(str6.startsWith("h"));
console.log(str6.endsWith("t"));
console.log(str6.endsWith("o"));
console.log(str6.charAt(3));
console.log(str6.charAt(4));
console.log(str6.charAt(0));
console.log(str6.charCodeAt(3));
console.log(str6.charCodeAt(1));
console.log(str6.charCodeAt(8));
console.log(str6.charCodeAt("r"));

// OBJECT
//these are 4 ways: literal way,new keyword,constructor,function constructor.

// literal way
let obj={}
console.log(obj);


let obj1={
    carname:"magic car",
    price:"1cr",
    wheels:5
}
console.log(obj1);
console.log(obj1.carname);
console.log(obj1.price);
console.log(obj1.wheels);

// new keyword
let obj2=new Object()
console.log(obj2);

// constructor
let obj3=Object()
console.log(obj3);

// function constructor
function demo(name,id){
    this.name=name
    this.id=id
}
let a=new demo("web",123)
console.log(a);
console.log(a.name);

// insertion
obj4={}
console.log(obj4);
obj4.name="abc"
console.log(obj4);
obj4.id=12
console.log(obj4);
obj4.role="webdev"
console.log(obj4);
obj4.sal="12lpa"
console.log(obj4);

// updation
obj4.sal="20lpa"
console.log(obj4);
obj4.role="senior web "
console.log(obj4);

// deletion
delete obj4.role
console.log(obj4);
delete obj4.id
console.log(obj4);

// read
console.log(obj4.name);
console.log(obj4.salary);
