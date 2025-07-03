import countries from "../data/countries.js";
console.log("HELLO");
let check = 0;
// console.log(countries);

let btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", () => {
  check = 1;
  console.log(check);
});

let btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", () => {
  check = 2;
});

let inp = document.querySelector("input");
inp.addEventListener("input", (e) => {
  let word = e.target.value.toLowerCase();
  console.log(word);
  let arrC = [];
  if (check === 1) {
    let pattern = new RegExp("^" + word, "i");
    console.log(pattern);
    for (let country of countries) {
      if (pattern.test(country)) {
        console.log(country);
        arrC.push(country);
      }
    }
  } else if (check === 2) {
    let pattern = new RegExp(word, "i");
    console.log(pattern);
    for (let country of countries) {
      if (pattern.test(country)) {
        console.log(country);
        arrC.push(country);
      }
    }
  }
  let d = document.querySelector(".countries");
  d.innerHTML = "";
  for (let a of arrC) {
    let el = document.createElement("div");
    el.setAttribute("class", "country");
    d.append(el);
    el.innerText = a;
  }
});
