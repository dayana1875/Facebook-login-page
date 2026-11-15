let b=document.body
console.log(b);//body
console.log(b.firstElementChild);//<h1>hello</h1>
console.log(b.firstElementChild.textContent);//hello
b.firstElementChild.textContent="tata js"
console.log(b.firstElementChild.textContent);//tata js
b.firstElementChild.textContent+="good bye"
console.log(b.firstElementChild.innerText);//tata jsgood bye
console.log(b.innerHTML);
b.innerHTML+="<h4>hello h4</h4>"
b.innertext+="<div>hello div</div>"



