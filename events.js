// let background='blue'
// let color='orange'
// const l=()=>{
//     if(background=='blue')
//         background='red'
//     else
//         background='blue'
//     document.body.style.backgroundColor=background
// }
// let p=document.getElementById("14")
// p.onmouseover=(e)=>{
//     if(color=='orange')
//        color='pink'
//     else
//         color='orange'
//     p.style.color=color
//     console.log(e) //prints e a special event object
//     console.log(e.type,e.target) //print specific attributes in event 
// }


let btn=document.querySelector("button")
btn.addEventListener("click",()=>{
    if(document.body.style.backgroundColor=='red')
        document.body.style.backgroundColor='blue'
    else
        document.body.style.backgroundColor='red'
})
