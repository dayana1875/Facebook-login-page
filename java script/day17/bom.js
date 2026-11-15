// let name=window.prompt("enter the name")
// console.log(name);
// document.write(name);
// let pwd=window.prompt("enter the pwd")
// console.log(pwd);
// document.writeln(pwd)

// let ph=Number(prompt("enter your number"))
// console.log(ph);
// document.write(ph)

// let c=window.confirm("this is your confirmation msg")
// console.log(c);

// let d=alert("this ts your alert msg")
// console.log(d);
// console.error("this is your error msg");
// console.error("this is your waring msg")


// write the program by using bom method ,to create the enduser what do you want in the table.

let table=window.prompt("enter the table")
console.log(table);
document.write(table)

let t_start=window.prompt("enter starting table")
console.log(t_start);
document.write(t_start)

let t_start=window.prompt("enter ending table")
console.log(t_end);
document.write(t_end)

function demo(){
    for(let i=t_start;i<t_end;i++){
        console.log(`${table}*${i}=${t_end*i}`)
    }
}