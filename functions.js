// function sum(x,y){
//     return x+y
// }
// const vowel=(str)=>{
//     let numof=0
//     for (i of str.toLowerCase()){
//         if (i==="a" || i==="e" || i==="i" || i==="o" || i==="u"){
//             numof++
//         }
//     }
//     return numof;
// }
// console.log(vowel("MUAAZ aAmer"))



// let arr=[1,2,3,4,5]
// /*the for each function pass each element one by one to the call back function in it */
// arr.forEach(function print(val){
//     console.log(val)
// })
// arr.forEach((val,ind)=>{
//     console.log(`Index ${ind} val:`,val**2)
// })




// let n=[1,2,3,4,5,6]
// let calsq=(num)=>{
//     console.log(num*num);
// }
// n.forEach(calsq)



// let n=[4,5,6,7,8]
// let z=n.map((val)=>val**2)
// console.log(z)



// let arr=[1,2,3,4,5,6,7,8,9,10]
// let even=arr.filter((val) =>{
//     if (val%2===0)
//         return val
// })
// console.log(even)



let arr=[1,2,7,20,3,4]
let sum=arr.reduce((res,cur)=>{return res+cur},0)
console.log(sum)
let max=arr.reduce((res,curr)=>res<=curr ? res=curr : res)
console.log(max)
