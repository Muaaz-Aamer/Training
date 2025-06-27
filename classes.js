// const student={
//     name:"ali",
//     age:23,
//     getname(){
//         return this.name
//     }
// }
// const x={}
// x.__proto__=student
// console.log(x)



// Person = {
//   sayHello(){console.log("Hello from prototype!");}
// }
// const user = {}
// user.__proto__=Person
// // Object defines its own method
// user.sayHello = function() {
//   console.log("Hello from object!");
// };
// // By default: this runs the object's own method
// user.sayHello();
// // Manual call → prototype's method using Object.getPrototypeOf
// Object.getPrototypeOf(user).sayHello.call(user);



// // Classes and object creation
// class Student {
//     constructor(){
//         console.log("Student")
//     }
//     name="muaaz"
//     setname(names){
//         this.name=names
//     }
//     getname(){
//         return this.name
//     }
// }
// class Junior_Student extends Student {
//     age=0
//     constructor(){
//         super() //call paretn constructor
//         console.log("Junior student")
//     }
//     setname(){
//         this.name="kkk"
//     }
//     setage(age){
//         this.age=age
//     }
//     getage(){
//         return this.age
//     }
// }
// const m=new Junior_Student();
// m.setname()
// console.log(m)
// Student.prototype.setname.call(m, "asd")
// console.log(m)



// class Rectangle {
//   #width = 0;                
//   #height = 0;

//   constructor(w, h) {
//     this.#width = w;
//     this.#height = h;
//   }

//   getArea() {
//     return this.#width * this.#height;  
//   }
// }
// const r = new Rectangle(5, 4);
// console.log(r.getArea());    
// console.log(r.width);       



// class x{
//     static pi=3.142
//     t="are"
// }
// class y extends x{
//     r=0
// }
// console.log(y.pi) //3.142
// y.pi=123
// console.log(y.pi,x.pi) //123,3.142