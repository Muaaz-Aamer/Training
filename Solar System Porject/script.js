let mass = 0
let choice = ""
let weigth = 0.0
let gravity_value = 0.0
let calculate_button = document.querySelector("button")
let massListner = document.querySelector("#mass")
let planetListner = document.querySelector("#planet")

planetListner.addEventListener("change", (event) => {
    choice = String(event.target.value).toLowerCase()
    let image = document.querySelector(".planet-image")
    image.setAttribute("src", './images/' + choice.toLowerCase() + '.png')
})

massListner.addEventListener("input", (event) => {
    mass = Number(event.target.value)
})

calculate_button.addEventListener("click", (event) => {
    if (mass != 0 && choice != "") {
        switch (choice) {
            case "mercury":
                gravity_value = 3.7 / 9.81;
                break;
            case "venus":
                gravity_value = 8.87 / 9.81;
                break;
            case "earth":
                gravity_value = 1;
                break;
            case "mars":
                gravity_value = 3.71 / 9.81;
                break;
            case "jupiter":
                gravity_value = 24.79 / 9.81;
                break;
            case "saturn":
                gravity_value = 10.44 / 9.81;
                break;
            case "uranus":
                gravity_value = 8.69 / 9.81;
                break;
            case "neptune":
                gravity_value = 11.15 / 9.81;
                break;
            case "pluto":
                gravity_value = 0.62 / 9.81;
                break;
            default:
                gravity_value = 0;
                break;
        }
        weigth = mass * gravity_value
        let x = document.querySelector("#print")
        if (x) {
            x.innerText = "Weight of Person on " + choice + " is " + String(weigth)
        }
        else {
            let final_weight = document.createElement("h2")
            final_weight.setAttribute("id", "print")
            final_weight.innerText = "Weight of Person on " + choice + " is " + String(weigth)
            let placement = document.querySelector("#container")
            placement.append(final_weight)
        }
    }
})
