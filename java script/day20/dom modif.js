 let b=document.body
 console.log(b); //body

// let c=b.innerHTML+=`<table border=2px sold height=100px width=100px>
//                     <tr>
//                     <td>html</td>
//                     <td>css</td>
//                     </tr>
//                     <tr>
//                     <td>java</td>
//                     <td>python</td>
//                     </tr>
// </table>`
// console.log(c.firstElementChild.firstElementChild);
// console.log(t);
// b.append(t)

let t=document.createElement("table")
console.log(t);
b.append(t)

let tr1=document.createElement("tr")
let tr2=document.createElement("tr")
t.append(tr1)
t.append(tr2)

let td1=document.createElement("td")
tr1.appendChild(td1)
let td2=document.createElement("td")
tr1.appendChild(td2)

let td3=document.createElement("td")
tr2.appendChild(td3)
let td4=document.createElement("td")
tr2.appendChild(td4)
// style.border="2 px solid"
t.setAttribute("border","2px solid")
t.style.height="200px"
t.style.width="200px"
t.style.borderColor="red"
td1.innerHTML="html"
td2.innerHTML="css"
td3.innerHTML="tata"
td4.innerHTML="Bye!"
td1.style.backgroundColor="aqua"
t.setAttribute("cellpadding","20px ")
td2.style.backgroundColor="yellow"
td3.style.backgroundColor="pink"
td4.style.backgroundColor="gray"
t.style.color="hotpink"
t.setAttribute("cellspacing","0px")
td1.setAttribute("colspan","2")
td2.remove()
td1.style.textAlign="center"
t.style.fontSize="30px"


let im=document.createElement("img")
b.append(im)
im.setAttribute("src","path")
//  im.setAttribute("alt","msg")
im.style.border="2px solid"
im.style.height="200px"
im.style.width="200px"

