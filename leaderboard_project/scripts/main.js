class Person {
  constructor(fName, lName, country, score) {
    this.fName = fName;
    this.lName = lName;
    this.country = country;
    this.score = score;
  }
  add_score() {
    if (this.score <= 95) this.score += 5;
  }
  sub_score() {
    if (this.score >= 5) this.score -= 5;
  }
}

let fName;
let fName_input = document.querySelector(".fName");
fName_input.addEventListener("input", (e) => {
  fName = e.target.value;
});

let lName;
let lName_input = document.querySelector(".lName");
lName_input.addEventListener("input", (e) => {
  lName = e.target.value;
});

let country;
let country_input = document.querySelector(".country");
country_input.addEventListener("input", (e) => {
  country = e.target.value;
});

let score;
let score_input = document.querySelector(".score");
score_input.addEventListener("input", (e) => {
  score = e.target.value;
  score = Number(score);
});

let people = [];
let add_player = document.querySelector(".submit");
add_player.addEventListener("click", () => {
  if (isDuplicatePlayer(fName, lName, country)) {
    let el = document.createElement("h3");
    el.setAttribute("class", "fields");
    el.innerText = "Duplicate Player";
    let node = document.querySelector(".fieldAlert");
    node.innerHTML = " ";
    node.prepend(el);
    return;
  } else if (
    isOnlyLetters(fName) &&
    isOnlyLetters(lName) &&
    isOnlyLetters(country) &&
    score
  ) {
    people.push(new Person(fName, lName, country, score));
    let node1 = document.querySelector(".fieldAlert");
    node1.innerHTML = " ";
    display();
  } else if (
    !isOnlyLetters(fName) ||
    !isOnlyLetters(lName) ||
    !isOnlyLetters(country)
  ) {
    let el = document.createElement("h3");
    el.setAttribute("class", "fields");
    el.innerText =
      "First name, last name and country should only contain letters";
    let node = document.querySelector(".fieldAlert");
    node.innerHTML = " ";
    node.prepend(el);
  } else {
    let el = document.createElement("h3");
    el.setAttribute("class", "fields");
    el.innerText = "All fields are required";
    let node = document.querySelector(".fieldAlert");
    node.innerHTML = " ";
    node.prepend(el);
  }
});

const display = () => {
  let node = document.querySelector(".players");
  node.innerHTML = " ";
  people.forEach((i, idx) => {
    let row = document.createElement("div");
    row.innerHTML = `
      <p>${i.fName}</p>
      <p>${i.lName}</p>
      <p>${i.country}</p>
      <p>${i.score}</p>
    `;

    let delBtn = document.createElement("button");
    delBtn.setAttribute("class", "deleteBtn");
    delBtn.innerText = "del";

    let addBtn = document.createElement("button");
    addBtn.setAttribute("class", "addBtn");
    addBtn.innerText = "+5";

    let subBtn = document.createElement("button");
    subBtn.setAttribute("class", "subBtn");
    subBtn.innerText = "-5";

    delBtn.addEventListener("click", () => {
      people.splice(idx, 1);
      display();
    });
    addBtn.addEventListener("click", () => {
      i.add_score();
      display();
    });

    subBtn.addEventListener("click", () => {
      i.sub_score();
      display();
    });

    row.append(delBtn, addBtn, subBtn);
    node.append(row);
  });
};

const isOnlyLetters = (str) => {
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    const isUpper = code >= 65 && code <= 90;
    const isLower = code >= 97 && code <= 122;
    if (!(isUpper || isLower)) {
      return false;
    }
  }
  return true;
};
const isDuplicatePlayer = (fName, lName, country) => {
  return people.some(
    (p) =>
      p.fName.toLowerCase() === fName.toLowerCase() &&
      p.lName.toLowerCase() === lName.toLowerCase() &&
      p.country.toLowerCase() === country.toLowerCase()
  );
};
