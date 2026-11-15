let obj={
    name:"abc",
    id:123,
    role:"web",
    sal:"1cr"
}
console.log(obj);
console.log(obj.name);
obj.name="xyz"
console.log(obj);
delete obj.name
console.log(obj);
obj.address="hyd"
console.log(obj);
console.log(Object.isSealed);
Object.seal(obj)
console.log(Object.isSealed);

// insertion is not possible.
obj.name="pqr"
console.log(obj);

// updation is possible
obj.id=987
console.log(obj);

// deletion is not possible
delete obj.id
console.log(obj);

// freeze:  we canot insert ,delete,update.
console.log(Object.isFrozen);
Object.freeze(obj)
console.log(Object.isFrozen);

// insertion is not possible.
obj.name="mqerthj"
console.log(obj);

// updation is not possible
obj.id=567
console.log(obj);

// deletion is not possible
delete obj.id
console.log(obj);

// keys: it will print the only keys the elements.
let k=Object.keys(obj)
console.log(k);
for (let i of k){
    console.log(i);  
}

// values: it will print the values.
let v=Object.values(obj)
console.log(v);
for (let i of v){
    console.log(i);  
}

// entries: it convert to one datatype to another datatype.
let kv=Object.entries(obj)
for (let i of kv){
    console.log(i);  
}

// assign method
let obj2={
    name:"xyz",
    id:123
}
console.log(obj2);

let obj3={
    address:"hyd",
    id:5678
}
console.log(obj3);

// assin 
// let r=Object.assign(obj2,obj3)
// console.log(r);

let r=Object.assign(obj3,obj2)
console.log(r);

// json
let obj4={
    name:"abc",
    id:123
}
console.log(obj4);
let d=JSON.stringify(obj4)
console.log(d);
console.log(JSON.parse(d));

