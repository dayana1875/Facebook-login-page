let d=document.getElementById("h")
console.log(d);

let btn=document.querySelector("button")
console.log(btn);
btn.addEventListener("click",(e)=>{
    console.log(e);
    console.log(e.target);
    console.log(window);
    console.log(window.navigator.online);
    if(Window.navigator.online){
        // console.log(e.target.innerText);
        e.target,innerText="online😂";
        }
        else{
            e.target.innerText="offline 😒"
        }     
})

let share=document.getElementById("share")
share.addEventListener("click",()=>{
    console.log(Window.navigator.mediaDevices.getDisplay);  
})

let cam=document.getElementById("cam")
console.log(cam);
let vi=document.querySelector("video")
cam.addEventListener("click",()=>{
    console.log(window.navigator.mediaDevices,getUserMedia({Audio:true,video:true})
.then((src)=>{
    vi.srcObject=src
}));
    
})
