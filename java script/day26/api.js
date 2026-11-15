//https://pixabay.com/api/?key=45607843c7e2f1530f4fcac1&q=yellow+flowers&image_type=photo

let btn=document.querySelector("button")
let inp=document.querySelector("input")
let div=document.querySelector("div")
btn.addEventListener("click",(e)=>{
    // console.log(e.target);
    console.log(inp.value);
    window.fetch(`https://pixabay.com/api/?key=45607843c7e2f1530f4fcac1&q=${inp.value}&image_type=photo `)
    .then((x)=>x.json())
    .then((data)=>{
        for(let i of data.hits){
            console.log(i.largeImageURL);
            div.innerHTML+=`img src=${i.largeImageURL}`
        }
    })
    inp.value=""
})
// btn.addEventListener("click",async(e)=>{
//     console.log(inp.value);
//     let x=wait window.fetch(`https://pixabay.com/api/?key=45607843c7e2f1530f4fcac1&q=${inp.value}&image_type=photo`)
//     let data=await x.json()
//     console.log(data);
//     for(let i of data.hits){
//         console.log(i.largeImageURL);
//         div.innerHTML+=`<img src=$(i.largeImageURL)>`
        
//     }
//     inp.value=""
// })

// jokeapi