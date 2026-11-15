// looping stmt
// for(let i=1;i<=5;i++){
//     console.log("hello")
//     console.log("\n")
// }
// for(let i=1;i<=5;i++){
//     console.log("hi");
// }
// let s=""
// for(let i=1;i<=5;I++){
//     s+="hello"
    // s=s+"hello"
// }
// console.log(s);
// let s1=""
// for(let i=1;i<=5;i++){
//     s1+="hello"
//     s1+="\n"
    // s=s+"helo"
// }
// console.log(s1);

// for(let i=1;1<=5;i++){
// console.log("helo"+i);
// }
// let j=1
// while(j<=5){
// console.log("js");
// }
// let j=1
// while(j<=5){
//     console.log("js");
//     j++;
// }
// let k=1
// do{
//     console.log("hello css")
//     k++;
// }
// while(k<=5)

    // ternary op
    let a=100,b=59,c=300,d=600
    let res=a>b?"a is greather":"b is greather"
    console.log(res);

    let temp=a>b?(a>c?"a is greater":"c is greather")
                 :(b>c?"b is greater":"c is greather")
    console.log(temp);
    
    let temp1=a>b?(a>c?(a>d?"a is greather":"d is greather")
                            :(c>d?"c is greather":"d is greather"))
                        :(b>c?(b>d?"b is grether":"d is greather")
                        :(c>d?"c is grether":"d is greather"))
    console.log(temp1);                                                          
