let addPlayer=document.querySelector("#add")
let player=document.querySelector(".players")
let allPlayer=[]

function updateUI(){
     player.innerHTML=""
     getPerson(allPlayer).forEach((i)=>{
            player.append(i)
     })
}


function getPerson(personArr){
    return personArr.map((i,index)=>{
        let row=document.createElement("div")
        row.setAttribute("class","row")
        row.setAttribute("id",index)

        let fName=document.createElement("p")
        fName.innerText="First Name : "+i.fName

        let lName=document.createElement("p")
        lName.innerText="Last Name : "+i.lName

        let country=document.createElement("p")
        country.innerText="Country : "+i.country
        
        let points=document.createElement("p")
        points.innerText="Points : "+i.points

        let b1=document.createElement("button")
        b1.setAttribute("id","delete")
        b1.setAttribute("class","pButton")
        b1.innerText="Del"
        b1.addEventListener("click",(e)=>{
            allPlayer.splice(index,1)
            updateUI()
        })


        let b2=document.createElement("button")
        b2.setAttribute("id","add")
        b2.setAttribute("class","pButton")
        b2.innerText="+5"
        b2.addEventListener("click",(e)=>{
            allPlayer[index].points+=5
            updateUI()
        })



        let b3=document.createElement("button")
        b3.setAttribute("id","subtract")
        b3.setAttribute("class","pButton")
        b3.innerText="-5"
        b3.addEventListener("click",(e)=>{
            allPlayer[index].points-=5
            updateUI()
        })

        row.append(fName,lName,country,points,b1,b2,b3)
        return row
    })   
}

addPlayer.addEventListener("click",()=>{
    let attribute=document.querySelectorAll(".data")
    let error=document.querySelector("#error")
    let flag=true
    attribute.forEach((i)=>{
       if(i.value==""){
         flag=false
       }
    })
    if(flag==false){
        if(error==null){
            let error=document.createElement("p")
            error.setAttribute("id","error")
            error.innerText="ALL FIELDS ARE REQUIRED"
            error.style.color='red'
            error.style.fontSize='20px'
            player.prepend(error)
        }
    }
    else{
        error!=null ? player.removeChild(player.firstChild) : null;
        let playerObj={
            fName:attribute[0].value.toUpperCase(),
            lName:attribute[1].value.toUpperCase(),
            country:attribute[2].value.toUpperCase(),
            points:Number(attribute[3].value),
        }
        const matchedPlayer = allPlayer.find(player =>
            player.fName === playerObj.fName &&
            player.lName === playerObj.lName &&
            player.country === playerObj.country &&
            player.points === playerObj.points
        );
        if(!matchedPlayer){
            allPlayer.push(playerObj)
            attribute.forEach((i)=>i.value="")
            updateUI()
            //console.log(player)
        }
    }
})

