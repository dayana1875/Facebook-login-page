let reg=document.querySelector("#reg")
let form=document.querySelector("form")
reg.addEventListener("click",()=>{

  let d=form.classList.toggle("none") 
  console.log(d);
  if(d){
    form.style.display="black"
  } 
  else{
    form.style.display="none"
  }
})

let cart=document.querySelector("#cart")
let aside=document.querySelector("aside")
cart.addEventListener("click",()=>{
    aside.style.transform="translate(0px)"
    aside.style.transitionDuration="5s"
})
aside.firstElementChild.addEventListener("click",()=>{
    aside.style.transform="traslateY(-1000px)"
    aside.style.transitionDuration="5s"
})
let sec=document.querySelector("section")
sec.addEventListener("click",()=>{
    if(e.target.innerText=="Add to cart"){
        console.log(e.target.parentElement);
        aside.innerHTML+=`<div>
                             <img src=>
                                <span>${e.target.previousElementsibling}
                                 <button>+</button>
                                 <span>1</span>
                                 <button>-</button>
                                 </div>`
        
    }
})