let gp=document.getElementById("gp")
// let p=document.getElementById("p")
// let ch=document.getElementById("ch")

// gp.addEventListener("click",(e)=>{
//     e.stopPropagation()
//     e.target.style.backgroundColor="limegreen"
//     console.log("grant parent clicked");
    
// },false)
// p.addEventListener("click",(e)=>{
//     e.stopPropagation()
//     e.target.style.backgroundColor="pink"
//     console.log(" parent clicked");
    
// },false)
// ch.addEventListener("click",(e)=>{
//     e.stopPropagation()
//     e.target.style.backgroundColor="yellow"
//     console.log("child clicked");
    
// },false)

// event delisation

gp.addEventListener("click",(e)=>{
    // console.log(e);
    // console.log(e.target.id);
    // console.log(e.target.tagName);
    // console.log(e.target.InnerText);
    // console.log(e.target.screenx);
    // console.log(e.target.screeny);
    
    if (e.target.id=="gp"){
        console.log("grandparent clicked");
        e.target.style.backgroungColor="red"
    }
     else if (e.target.id=="p"){
        console.log("parent clicked");
        e.target.style.backgroungColor="yellow"
    } 
    else if (e.target.id=="ch"){
        console.log("child clicked");
        e.target.style.backgroungColor="pink"
    } 
  
})