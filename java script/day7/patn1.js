let str=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
      if(i==j||i+j==6){
        str+="*"
      }
     else{
        str+="  "
     }
    }
    str+="\n"
}
console.log(str)

let str1=""
for(let i=1;i<=5;i++){
     for(let j=1;j<=5;j++){
     if((i==j))
     str1+="*"
     }
     str1+="\n"
}
console.log(str1);