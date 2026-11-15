let gp=document.getElementById("gp")
let p=document.getElementById("p")
let ch=document.getElementById("ch")

gp.addEventListener("click",(e)=>{
    e.stopPropagation()
    e.target.style.backgroundColor="limegreen"
    console.log("grant parent clicked");
    
},false)
p.addEventListener("click",(e)=>{
    e.stopPropagation()
    e.target.style.backgroundColor="pink"
    console.log(" parent clicked");
    
},false)
ch.addEventListener("click",(e)=>{
    e.stopPropagation()
    e.target.style.backgroundColor="yellow"
    console.log("child clicked");
    
 },false)

p1.addEventListener("click",(e)=>{
    e.stopPropagation()
    e.target.style.backgroundColor="limegreen"
    console.log("grant parent clicked");
    
},false)
ch1.addEventListener("click",(e)=>{
    e.stopPropagation()
    e.target.style.backgroundColor="pink"
    console.log(" parent clicked");
    
},false)
ch2.addEventListener("click",(e)=>{
    e.stopPropagation()
    e.target.style.backgroundColor="yellow"
    console.log("child clicked");
    
 },false)

