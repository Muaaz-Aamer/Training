let mass=0
let choice=""
let weigth=0.0
let g=0.0
let button=document.querySelector("button")
let massListner=document.querySelector("#mass")
let planetListner=document.querySelector("#planet")
console.log(planetListner)
planetListner.addEventListener("change",(event)=>{
    choice=String(event.target.value).toLowerCase()
    let image=document.querySelector(".planet-image")
    image.setAttribute("src",'./images/'+choice.toLowerCase()+'.png')
})
massListner.addEventListener("input",(event)=>{
    mass=Number(event.target.value)
})
button.addEventListener("click",(event)=>{
    if (mass!=0 && choice!=""){
        switch (choice) {
            case "mercury":
                g = 3.7/9.81;
                break;
            case "venus":
                g = 8.87/9.81;
                break;
            case "earth":
                g = 1;
                break;
            case "mars":
                g = 3.71/9.81;
                break;
            case "jupiter":
                g = 24.79/9.81;
                break;
            case "saturn":
                g = 10.44/9.81;
                break;
            case "uranus":
                g = 8.69/9.81;
                break;
            case "neptune":
                g = 11.15/9.81;
                break;
            case "pluto":
                g = 0.62/9.81;
                break;
            default:
                g = 0; // or handle invalid input
                break;
        }
        weigth=mass*g
        let x=document.querySelector("#print")
        if(x){
            x.innerText="Weight of Person on "+choice+" is "+String(weigth)
        }
        else{
            let final_weight=document.createElement("h2")
            final_weight.setAttribute("id","print")
            final_weight.innerText="Weight of Person on "+choice+" is "+String(weigth)
            let placement=document.querySelector("#container")
            placement.append(final_weight)
        }
    }
})