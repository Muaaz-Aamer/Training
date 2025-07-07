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
  if (fName && lName && country && score) {
    people.push(new Person(fName, lName, country, score));
    let node1 = document.querySelector(".fieldAlert");
    node1.innerHTML = " ";
    display();
  } else {
    let el = document.createElement("h3");
    el.setAttribute("class", "fields");
    el.innerText = "All fields are required";
    let node = document.querySelector(".fieldAlert");
    node.innerHTML = " ";
    node.prepend(el);
  }
});

function display() {
  let node = document.querySelector(".players");
  node.innerHTML = " ";
  people.forEach((i, idx) => {
    let row = document.createElement("div");
    let p1 = document.createElement("p");
    p1.innerText = i.fName;
    let p2 = document.createElement("p");
    p2.innerText = i.lName;
    let p3 = document.createElement("p");
    p3.innerText = i.country;
    let p4 = document.createElement("p");
    p4.innerText = i.score;

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

    row.append(p1, p2, p3, p4, delBtn, addBtn, subBtn);
    node.append(row);
  });
}
