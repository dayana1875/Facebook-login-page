// patterns

let str=""
for(let i=1;i<=3;i++){
  for(let j=1;j<=3;j++){
   str+="*"
}
str+="\n"
}
console.log(str);

document.write("hello")
document.write("hii")
document.write("<br>")
document.write("minnu")


let str1=""
for(let i=1;i<=5;i++){
  for(let j=1;j<=5;j++){
   str1+="*"
}
   str1+="\n"
}
console.log(str1);

let str2=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        str2+=" *"
    }
    str2+="\n"
}
 console.log(str2);

let str3="",space=4
 for(let i=1;i<=5;i++){
    for(let j=1;j<=space;j++){
        str3+=" "
    }
    for(let k=1;k<=i;k++){
        str3+=" *"
    }
    str3+="\n"
    space--
}
console.log(str3);


let str4=""
for(let i=1;i<=9;i++){
    for(let j=1;j<=i;j++){
        str4+=" *"
    }
    str4+="\n"
}
 console.log(str4);

//  let str5=""
//  for(let i=1;i<=9;i++){
//     for(let j=1;j<=9;j++){
//        row=" ";
//     }
//     for(let k=1;k<=(2*i-1);k++){
//         row=" *";
//     }
//     str5+="\n"
//  }
//  console.log(str5);


let str6=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if((i==3||j==3)||(j==1&&i<=3)||(i==1&&j>=3)||(i==5&&j<=3)|| (j==5&&i>=3)){
            str6+="*"
        }
        else{
            str6+=" "
        }
        
    }
    str6+="\n"
}
console.log(str6);