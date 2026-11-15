let  b=document.body
console.log(b);//body

let d=b.firstElementChild.nextElementSibling
console.log(d);//div
console.log(d.lastElementChild);//<h2>lorem </h2>
console.log(d.lastChild);//"plain 7"
console.log(d.firstChild);//#text
console.log(d.firstElementChild);//<h2>lorem </h2>
console.log(d.firstElementChild.nextElementSibling);//<h3>lorem</h3>
console.log(d.lastElementChild.previousSibling);//"plain 6"
console.log(d.lastElementChild.previousElementSibling.previousElementSibling);//<h3>lorem</h3>
console.log(d.lastElementChild.previousElementSibling.previousSibling);//"plain5"
console.log(d.children);//html collection(7)[h2,h3,h1,h2,h3,h1,h2]
console.log(d.childNodes);//nodelist(15)[text,h2,]

console.log(d.parentElement);//body
console.log(d.parentElement.parentNode);//html


