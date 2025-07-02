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
