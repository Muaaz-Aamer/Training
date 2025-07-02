class Person {
  constructor(fName, lName, country, score) {
    this.fName = fName;
    this.lName = lName;
    this.country = country;
    this.score = score;
  }
  add_score() {
    this.score = this.score + 5;
  }
  sub_score() {
    this.score = this.score - 5;
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
  console.log(score);
});

let people = [];

let add_player = document.querySelector(".submit");
add_player.addEventListener("click", () => {
  people.push(new Person(fName, lName, country, score));
  //   console.log(people);
  let node = document.querySelector(".players");
  node.innerHTML = " ";
  people.forEach((i) => {
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

    row.append(p1, p2, p3, p4);
    node.append(row);
  });
});
