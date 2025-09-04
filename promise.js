// //call back hell
// function hello(){
//     console.log("hello world")
// }
// setTimeout(hello,2000) //executes a function after 2 seconds makes a function asyncronous



// function task1(callback){
//     setTimeout(()=>{
//         console.log("task 1 complete")
//         callback()
//     },2000)
// }
// function task2(callback){
//     setTimeout(()=>{
//         console.log("task 2 complete")
//         callback()
//     },1000)
// }
// function task3(callback){
//     setTimeout(()=>{
//         console.log("task 3 complete")
//         callback()
//     },3000)
// }
// function task4(callback){
//     setTimeout(()=>{
//         console.log("task 4 complete")
//         callback()
//     },1500)
// }
// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>console.log("all task are complete"))
//         })
//     })
// });
// console.log("seperate work")




// function walkDog(callback){
//     setTimeout(()=>{
//         console.log("You walk the dog")
//         callback()
//     },1500)
// }
// function cleanKitchen(callback){
//     setTimeout(()=>{
//         console.log("You clean the Kitchen")
//         callback()
//     },2500)
// }
// function takeTrash(callback){
//     setTimeout(()=>{
//         console.log("You take out the trash")
//         callback()
//     },500)
// }
// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeTrash(()=>console.log("Everything done"))
//     })
// })


////doing above with promise
function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("You walk the dog")
        },1500)
    })
}
function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("You clean the kitchen")
        },2500)
    })
}
function takeTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("You take out trash")
        },500)
    })
}
// walkDog().then(value=>{
//     console.log(value)
//     cleanKitchen().then(value=>{
//         console.log(value)
//         takeTrash().then(value=>{
//             console.log(value);
//             console.log("Done")
//         })
//     })
// })
// //can do abvoe chain in below way:
// Promise.all([walkDog(), cleanKitchen(), takeTrash()])
//   .then(([result1, result2, result3]) => {
//     console.log(result1, result2, result3);
//   })
//   .catch(error => console.error('One of the promises failed', error)); 




////use async and await to haandle promise
async function dochores() {
    const walkdogresult=await walkDog();
    console.log(walkdogresult)

    console.log(await cleanKitchen());
    console.log(await takeTrash());

    console.log("done everything")
}
dochores()
