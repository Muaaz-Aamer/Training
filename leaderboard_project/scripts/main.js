class Person {
  constructor(fName, lName, country, score) {
    this.fName = fName;
    this.lName = lName;
    this.country = country;
    this.score = score;
  }
  add_score() {
    this.score += 5;
  }
  sub_score() {
    this.score -= 5;
  }
}
let fName;
let inp1 = document.querySelector(".fName");
inp1.addEventListener("input", (e) => {
  fName = e.target.value;
  console.log(fName);
});

let lName;
let inp2 = document.querySelector(".lName");
inp2.addEventListener("input", (e) => {
  lName = e.target.value;
  console.log(lName);
});

let country;
let inp3 = document.querySelector(".country");
inp3.addEventListener("input", (e) => {
  country = e.target.value;
  console.log(country);
});

let score;
let inp4 = document.querySelector(".score");
inp4.addEventListener("input", (e) => {
  score = e.target.value;
  score = Number(score);
  console.log(score);
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
    console.log(i.fName);
    p1.innerText = i.fName;
    let p2 = document.createElement("p");
    p2.innerText = i.lName;
    console.log(i.lName);
    let p3 = document.createElement("p");
    p3.innerText = i.country;
    console.log(i.country);
    let p4 = document.createElement("p");
    p4.innerText = i.score;
    console.log(i.score);
    let b1 = document.createElement("button");
    b1.setAttribute("class", "deleteBtn");
    b1.innerText = "del";
    let b2 = document.createElement("button");
    b2.setAttribute("class", "addBtn");
    b2.innerText = "+5";
    let b3 = document.createElement("button");
    b3.setAttribute("class", "subBtn");
    b3.innerText = "-5";

    b1.addEventListener("click", () => {
      people.splice(idx, 1);
      display();
    });
    b2.addEventListener("click", () => {
      i.add_score();
      display();
    });

    b3.addEventListener("click", () => {
      i.sub_score();
      display();
    });

    row.append(p1, p2, p3, p4, b1, b2, b3);
    node.append(row);
  });
}
