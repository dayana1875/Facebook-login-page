let b=document.body
 console.log(b); 

 
let d=document.createElement("table")
console.log(d);
b.append(d)

let tr1=document.createElement("tr")
let tr2=document.createElement("tr")
let tr3=document.createElement("tr")
let tr4=document.createElement("tr")
d.append(tr1)
d.append(tr2)
d.append(tr3)
d.append(tr4)
let td3=document.createElement("td")
tr2.appendChild(td3)
let td4=document.createElement("td")
tr2.appendChild(td4)
d.setAttribute("border","2px solid")
d.style.height="200px"
d.style.width="200px"
d.style.borderColor="red"


//td1.innerHTML="html"
// td2.innerHTML="css"
//td3.innerHTML="tata"
//td4.innerHTML="Bye!"
//td1.style.backgroundColor="aqua"
d.setAttribute("cellpadding","20px ")
//td2.style.backgroundColor="yellow"
//td3.style.backgroundColor="pink"
//td4.style.backgroundColor="gray"
d.style.color="hotpink"
d.setAttribute("cellspacing","0px")
//td1.setAttribute("colspan","2")
//td2.remove()
//td1.style.textAlign="center"
d.style.fontSize="30px"


