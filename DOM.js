//console.log(document.getElementById("main"))
//console.log(document.getElementsByClassName("main"))


//let x=document.getElementById("12")
//console.log(x.getElementsByTagName("p"))


// let elements=document.querySelector("p")
// let all=document.querySelectorAll("p")
// console.log(elements,all)


// let f=document.getElementById("12")
// console.log(f.tagName)
// console.dir(document.body.childNodes[1].innerHTML)
// document.body.childNodes[1].innerText="hellooooo"
// console.log(document.body.childNodes[1].innerHTML)
// document.body.childNodes[1].innerHTML="<h1>hellooo</h1>"


// let f=document.querySelector("p")
// let x=f.getAttribute("id")
// console.log(f,x)


// let f=document.querySelector("h1")
// f.style.color="orange"
// console.log(f,f.style)


// let but=document.createElement("button")
// but.innerText="click me hard!"
// but.style.color="yellow"
// but.style.backgroundColor="red"
// let x=document.querySelector("div")
// x.after(but)
// console.log(document.body.innerHTML)


let para=document.createElement("p")
para.innerText="hello world"
para.style.color="pink"
document.body.appendChild(para)
console.log(document.body.innerHTML)