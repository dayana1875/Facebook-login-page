// let form=document.querySelector("form")
// let inp1=document.getElementById("inp1")
// let inp2=document.getElementById("inp2")
// let inp3=document.getElementById("inp3")
// let inp4=document.getElementById("inp4")
// let inp5=document.getElementById("inp5")
// let table=document.querySelector("table")
// let btn=document.getElementById("btn")
// form.addEventListener('click',(e)=>{
//     e.preventDefault()
//     if(e.target.innerText=="ADD")
//        if(inp1.value!=""&&inp2.value!=""&&inp3.value!=""&&inp4.value!=""&&inp5.value!=""&&inp6.value!=""&&inp7.value!=""){
//         table.innerHTML+=`<tr>
//             <th>${inp1.value}</th>
//             <th>${inp2.value}</th>
//             <th>${inp3.value}</th>
//             <th>${inp4.value}</th>
//             <th>${inp5.value}</th>
//             <th><button>Edit</button></th>
//             <th><button>Delete</button></th>
//         </tr>`

//        inp1.value+=""
//        inp2.value+=""
//        inp3.value+=""
//        inp4.value+=""
//        inp5.value+=""
//     } 
//     else{
//         window.alert("please send the msg😡")
//     }
//     else if(e.target.innerText=="Delete"){
//         e.target
//     }
    
// })



let form=document.querySelector("form")
let inp1=document.getElementById("inp1")
let inp2=document.getElementById("inp2")
let inp3=document.getElementById("inp3")
let inp4=document.getElementById("inp4")
let inp5=document.getElementById("inp5")
let table=document.querySelector("table")
let btn=document.getElementById("btn")

form.addEventListener("click",(e)=>{
    e.preventDefault()
    if(e.target.innerText=="add"){
        if(inp1.value!="" && inp2.value!="" && inp3.value!="" && inp4.value!="" && inp5.value!=""){
            table.innerHTML+=`<tr>
                                <th>${inp1.value}</th>
                                <th>${inp2.value}</th>
                                <th>${inp3.value}</th>
                                <th>${inp4.value}</th>
                                <th>${inp5.value}</th>
                                <th><button>Edit</button></th>
                                <th><button>Delete</button></th>
                              </tr>`
            inp1.value=""
            inp2.value=""
            inp3.value=""
            inp4.value=""
            inp5.value=""
            
        }
        else{
            window.alert("fill the all input details")
        }
        
    }
    else if(e.target.innerText=="Delete"){
        e.target.parentElement.parentElement.remove()
    }
    else if(e.target.innerText=="Edit"){
        inp5.value=e.target.parentElement.previousElementSibling.innerText
        inp4.value=e.target.parentElement.previousElementSibling.previousElementSibling.innerText
        inp3.value=e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText
        inp2.value=e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText
        inp1.value=e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText
        e.target.innerText="Update"
        // btn.disabled = true;
        btn.setAttribute("disabled", "true");
    }
    else if(e.target.innerText=="Update"){
        e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText=inp1.value
        e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText=inp2.value
        e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText=inp3.value
        e.target.parentElement.previousElementSibling.previousElementSibling.innerText=inp4.value
        e.target.parentElement.previousElementSibling.innerText=inp5.value
        inp1.value=""
        inp2.value=""
        inp3.value=""
        inp4.value=""
        inp5.value=""
        e.target.innerText="Edit"
        // btn.disabled = false;
        btn.removeAttribute("disabled");
        
    }

})