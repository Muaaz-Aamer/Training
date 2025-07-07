let btn = document.querySelector(".submit");
let planets = {
  earth: 9.81,
  jupiter: 24.79,
  mars: 3.73,
  mercury: 3.7,
  moon: 1.62,
  neptune: 11.15,
  pluto: 0.62,
  saturn: 10.44,
  uranus: 8.69,
  venus: 8.87,
};

btn.addEventListener("click", () => {
  let planetInput = document.querySelector("select").value;
  let mass = document.getElementById("mass").value;
  let gAcceleration;
  for (const planet in planets) {
    if (planet === planetInput) {
      gAcceleration = planets[planet] / planets["earth"];
    }
  }
  let total = mass * gAcceleration;
  total = total.toFixed(2);
  console.log(mass, "+", planetInput, " = ", total);
  let heading = document.querySelector("#result");
  heading.innerText = `The weight of object on ${planetInput} is ${total}`;
  let img = document.querySelector(".planet-image");
  img.src = "./images/" + planetInput + ".png";
});
