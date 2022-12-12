const arr = [1,2,3,4,5]
//Syntax

//Arrow
const a = arr.map(e => e*e)
// const b = arr.map((e,index) => console.log(e,index))
const c = arr.map((e,index,arr) => console.log(e,index,arr))
console.log(a);
console.log(c);


// const d = arr.map(myFunction)
// // const e = arr.map(myFunctions)

// function myFunction(e){
//     return e*e
// }

// function myFunctions(e,index){
//     return console.log(e,index)
// }

// function myFunctions(e,index,arr){
//     return console.log(e,index,arr)
// }






