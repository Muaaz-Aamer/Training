import countries from "../data/countries.js";
let searchMode = 0;

let btn1 = document.querySelector(".startingBtn");
btn1.addEventListener("click", () => {
  searchMode = 1;
});

let btn2 = document.querySelector(".searchAnyBtn");
btn2.addEventListener("click", () => {
  searchMode = 2;
});

let userInput = document.querySelector("input");
userInput.addEventListener("input", (e) => {
  let word = e.target.value.toLowerCase();
  let arrCountries = [];
  if (searchMode === 1) {
    let pattern = new RegExp("^" + word, "i");
    arrCountries = countries.filter((country) => pattern.test(country));
  } else if (searchMode === 2) {
    let pattern = new RegExp(word, "i");
    arrCountries = countries.filter((country) => pattern.test(country));
  }
  let d = document.querySelector(".countries");
  d.innerHTML = "";
  for (let a of arrCountries) {
    let el = document.createElement("div");
    el.setAttribute("class", "country");
    d.append(el);
    el.innerText = a;
  }
});
