//console.log(countries)
//alert('Open the console and check if the countries has been loaded')

//let mass = document.querySelector("#mass");
let btn = document.querySelector("button");
let obj = {earth: 9.81, 
           jupiter: 24.79,
           mars: 3.73,
           mercury: 3.7,
           moon: 1.62,
           neptune: 11.15,
           pluto: 0.62,
           saturn: 10.44,
           uranus: 8.69,
           venus: 8.87}

btn.addEventListener("click", () => {
    let planet = document.querySelector("select").value;
    let mass = document.getElementById("mass").value;
    let gacc;
    for (const o in obj){
        console.log(o)
        if(o === planet)
        {
            gacc = obj[o]/obj["earth"];
        }
    }
    let total = mass * gacc;
    total = total.toFixed(2);
    console.log(mass, "+", planet, " = ", total);
    let heading = document.querySelector("#result");
    heading.innerText = `The weight of object on ${planet} is ${total}`;
    let img = document.querySelector(".planet-image");
    img.src = './images/' + planet + '.png';
})

