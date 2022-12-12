// function backwardString(value){
//     let varsplit = value.split("")
//     let respilt = varsplit.reverse()
//     value = respilt.join("")
//     return value
// }

// console.log('Example:');
// console.log(backwardString('val'));

// // These "asserts" are used for self-checking
// backwardString('val');
// backwardString('');
// backwardString('ohho');
// backwardString('123456789');
// function splitPairs(text){
//     let tx
//     if(text.length % 2 !== 0){
//         text += '_'
//         tx = text.match(/(..?)/g) 
//     }
//     else{
//         tx = text.match(/(..?)/g) 
//     }
//     if(text.length === 0){
//         tx = []
//     }
//    return tx
// }

// console.log(splitPairs('abcd'));
// console.log(splitPairs('abc'));
// console.log(splitPairs('abcdf'));
// console.log(splitPairs(''));


// function beginningZeros(text) {
//    const a = String(text)
//     return a.length - a.replace(/^[0]+/, '').length;
// }

// console.log(beginningZeros('100'));
// console.log(beginningZeros('001'));

// function nearestValue(values,search){
//     let test = values.sort((a, b) => Math.abs(search - a) - Math.abs(search - b) )[0];

//     return test
// }


// console.log(nearestValue([4, 7, 10, 11, 12, 17]));

// function minMax(arr){ 
//      let a = Math.min(...arr)
//      let b = Math.max(...arr)
//      return ([a,b])
//   }

//   console.log(minMax([1, 2, 3, 4, 5]))


// function validatePIN (pin) {
//   const a = String(pin)
//   if(a.length - a.replace(/([0-9 -]\w+)/g, '').length === 4 || a.length - a.replace(/([0-9 -]\w+)/g, '').length === 6 ){
//     return true
//   }
//   return false

// }

// console.log(validatePIN("1234.0"))

// console.log("-1234".length)

// function createPhoneNumber(arr) {
//   let mask = '(xxx) xxx-xxxx';

//   arr.forEach(item => {
//       mask = mask.replace('x', item);
//   });

//   return mask;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// function validPhoneNumber(phoneNumber){
//   return /^\((\d{3})\)[- ]?(\d{3})[-](\d{4}$)/.test(phoneNumber)
// }

// console.log((validPhoneNumber("(123) 456-4567")))

// function arrayDiff(a, b) {
//   return a.filter(val => !b.includes(val))
// }

// console.log(arrayDiff([1,2,3],[1,2]))


// function findOutlier(integers){
//   let odd = []
//   let even = []
//   for(num of integers){
//     if(num % 2 === 0){
//       even.push(num)
//     }
//     else if(num % 2 !== 0){
//       odd.push(num)
//     }
//   }
//   if(even.length > odd.length){
//     return parseInt(odd)
//   }
//   return parseInt(even)
// }

// console.log((findOutlier([0, 1, 2])))
// a b c d f // e 97 98 99 ? 101 102
// function findMissingLetter(array)
// {
//   for (let i = 1; i < array.length; i++) {
    
//     let before = array[i - 1].charCodeAt(); //99
   
//     let after = array[i].charCodeAt(); //101
    
//     if (after - before !== 1) { 
//       return String.fromCharCode(before + 1)
//     }
//   }
// }
// console.log((findMissingLetter(['O','Q','R','S'])))
// console.log((findMissingLetter(['a','b','c','d','f'])))


// function getCount(str) {
//     let a = str.match(/([aeiou])/gi)?.length
//     if(a === undefined){
//         return 0
//     }
//     else{
//         return a
//     }
//   }

// console.log(getCount('my pyx'))


// function tea42(input) {
//     let a = input.toString()
//     for(i = 0; i < a.length; i++){
//       if(a.match(/2+/)){
//       return a.replace('2','t')
//     }
//       return a
//     }
    
//   }

// console.log(tea42(232))
// console.log(tea42(09098970))


// function likes(names) {
//   if(names.length === 0){
//     return 'no one likes this'
//   }
//   else if(names.length === 1){
//     return names[0] + ' ' + 'likes this'
//   }
//   else if(names.length === 2){
//     return names[0] + ' ' + 'and' + ' ' + names[1] + ' ' + 'like this'
//   }
//   else if(names.length === 3){
//     return names[0] + ',' + ' ' + names[1] + ' ' + 'and' + ' ' + names[2] + ' ' + 'like this'
//   }
//   else if(names.length > 3){
//     return names[0] + ',' + ' ' + names[1] + ' ' + 'and' + ' ' + names.slice(2).length + ' ' + 'others' + ' ' + 'like' + 'this'
//   }
// }


// console.log((likes(['Alex','B','C','D'])))

// function solution(str){
//   return str.split('').reverse().join('')
// }


// console.log(solution('world'))

// function findShort(s){
//  let a = s.split(' ').map(e => e.length).sort((a,b) => a - b)
//  return a[0]
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))



// function findOdd(A) {
//   for(let i = 0; i < A.length; i++){
//    const count = A.filter(a => a === A[i]).length;
//    if(count % 2 == 1){
//      return A[i];
//    }
//  }
// }

// function filter_list(l) {
//   return l.filter(b => typeof b === 'number')
  
// }

// console.log((filter_list([1,2,'a','b'])))

// function squareDigits(num){
//   a = num.toString().split('').map(e => e*e).join('')
//   return a.parseInt()
// }

// console.log(squareDigits(3212))

// let num = '1234'

// console.log(typeof(num))
// console.log(typeof(+num))


// var summation = function (num) {
//     let arr = []
//     for (let i = 1; i <= num; i++) {
//         arr.push(i)
//     }
//     return arr.reduce((a,b) => a+b,0)
//   }

//   console.log(summation(8))


// function digitize(n) {
//     return n.toString().split('').reverse()
// }


// console.log((digitize(35231)))

// function abbrevName(name){

//     return name.split(' ').map(a => a[0]).join('.').toUpperCase() 

// }

// console.log((abbrevName("Sam Harris")))


// function a1([x1],[y1]){
//     return x1+y1
// }

// const a = [5,8]
// const b = [2,7]

// str.replace(/[-_]\w/gi
// console.log(a1(a,b)) 




// function toCamelCase(str){
//     return str.replace(/[-_]\w/gi,a => a.charAt(1).toUpperCase())
// }
// console.log((toCamelCase("the_stealth_warrior")))   


// let a = Number(2).toString(2)

// console.log(a);

// function solution(str){
//    return str.split('_')
// }


// console.log(solution("abcdef"));


// function dontGiveMeFive(start, end)
// {
//   let Result = 0
//   for(let i = start; i <= end; i++){
//     if(!/5/.test(i)){
//         Result++
//     }
//   }
//   return Result
// }
// console.log(dontGiveMeFive(1,9));

// function duplicateEncode(word){
//     const arr = []
//     let a = word.split('')
//     for(b of a){
//       if(arr.length === 0){
//         arr.push(b)
//       }
//     }
//     return arr
// }

// console.log(duplicateEncode("din"));



// function remove(arr){
//     return arr.filter(function(a,index){
//         return index % 2 === 0
//     })
// }
// function zz(a,index){
//     return index % 2 === 0
// }

// // console.log(remove(['keep','remove','keep','remove']));

// console.log(zz(['keep','remove','keep']));


// function zz(user,owner){
//     return user === owner ?  'Hello guest' : 'Hello boss'
// }


// console.log(zz('daniel,daniel'));

// function toNumberArray(stringarray){
//     return stringarray.map(a => Number(a))
//   }

// console.log(toNumberArray(["1.1","2.2","3.3"]));


// function x(y){
//   return y
// }

// function doit(){
//   console.log("do it");
// }


// console.log(x(doit))

let x
x = x ?? ['make day',2]
console.log(x?.length)