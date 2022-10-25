// //declare
// function getLastElement(arr) {
//     arr[0]=999
//     return arr?.[arr?.length-1]
// }
// // call
// const nums=[10,20,30]
// getLastElement(nums)
// console.log((nums[0]))

function countCovidStatus(covidStatusArray) {
    if(covidStatusArray === null || covidStatusArray === undefined ){
      return undefined
    }
    else if(covidStatusArray.length === 0){
      return { }
    }
      let target ='negative and low risk'
      let target2 ='positive'
      let target3 ='negative and high risk'
  
      let count = 0
      let count2 = 0
      let count3 = 0
    for(covid of covidStatusArray){
      if(covid === target){count++}
      if(covid === target2){count2++}
      if(covid === target3){count3++}
    }
  let result = {}
  if(count2>0)
        result['negative and low risk']=count2
  if(count>0)
        result.positive=count
  if(count3>0)
        result['negative and high risk']=count3
  return result
}
console.log(
    countCovidStatus([
      'negative and low risk',
      'positive',
      'negative and low risk',
      'negative and high risk',
      'positive',
      'negative and low risk'  ])
  )
  console.log(countCovidStatus(['positive', 'negative and low risk', 'positive']))
  console.log(
    countCovidStatus([
      'negative and low risk',
      'positive',
      'negative and low risk',
      'abnormal',
      'negative and high risk',
      'positive',
      ' normal'  ])
  )
  console.log(countCovidStatus(['covid']))
  console.log(countCovidStatus([]))
  console.log(countCovidStatus(null))
  console.log(countCovidStatus(undefined))
// // express
// const doSomething=function(base, exp) {
// return base ** exp
    
// }
// //execute function
// console.log(doSomething(5,2))
// console.log(typeof doSomething)
// let doIt1=doSomething
// console.log(doIt1(10,10))
// console.log(typeof doIt1)

// let doIt2=doSomething(10,2)
// console.log(doIt2)